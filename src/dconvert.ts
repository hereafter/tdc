import { DMeta } from "./dmeta";
import { DMetaKnownNames } from "./dmeta.names";
import { DConstructor, DMetaClass, DMetaName, DScope } from "./dmeta.object";

export function convert<T extends object, S extends object>(
  constructor: DConstructor<T>,
  data: never,
  scope: DScope<S> = null
): T | null {
  if (data == null) return null;

  const ptype = constructor.prototype;
  if (ptype == null) return null;

  let scopeValue: string | null = null;
  if ((scope as DConstructor)?.name != null) {
    scopeValue = (scope as DConstructor).name;
  } else {
    scopeValue = scope as string;
  }

  const obj = new constructor();

  for (const key in obj) {
    const metaName = DMeta.findMetaObject<DMetaName>(
      DMetaKnownNames.NAME,
      ptype,
      key,
      scopeValue
    );

    const metaClass = DMeta.findMetaObject<DMetaClass<T>>(
      DMetaKnownNames.CLASS,
      ptype,
      key,
      scopeValue
    );

    let value: unknown | null = null;

    if (metaClass?.fn != null) {
      let temp: never | null = null;
      if (metaName?.name == null) {
        temp = data[key];
      } else {
        temp = data[metaName.name];
      }

      if (Array.isArray(temp)) {
        const vs = new Array<T>();
        for (const tt of temp as []) {
          const tobj = convert(metaClass.fn, tt);
          if (tobj != null) {
            vs.push(tobj);
          }
        }
        value = vs;
      }
    } else if (metaName?.name == null) {
      value = data[key];
    } else {
      value = data[metaName.name];
    }
    Reflect.set(obj, key, value);
  }

  return obj;
}
