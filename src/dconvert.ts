import { DMeta } from "./dmeta";
import { DMetaKnownNames } from "./dmeta.values";
import {
  DConstructor,
  DMetaClass,
  DMetaConverter,
  DMetaName,
  DScope,
} from "./dmeta.object";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function convertTo<T extends object, S extends object>(
  obj: T,
  data: any,
  scope: DScope<S> = null
) {
  if (data == null) return;

  const ptype = Object.getPrototypeOf(obj);
  if (ptype == null) return;

  let scopeValue: string | null = null;
  if ((scope as DConstructor)?.name != null) {
    scopeValue = (scope as DConstructor).name;
  } else {
    scopeValue = scope as string;
  }

  for (const key in obj) {
    const metaName = DMeta.findMetaObject<DMetaName>(
      DMetaKnownNames.NAME,
      ptype,
      key,
      scopeValue
    );

    const metaConverter = DMeta.findMetaObject<DMetaConverter<T>>(
      DMetaKnownNames.CONVERTER,
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
      let temp: unknown | null = null;
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
      } else {
        value = convert(metaClass.fn, temp);
      }
    } else if (metaName?.name == null) {
      value = data[key];
    } else {
      value = data[metaName.name];
    }

    if (metaConverter?.fn != null) {
      value = metaConverter.fn(value, metaConverter.options);
    }

    Reflect.set(obj, key, value);
  }
}

export function convert<T extends object, S extends object>(
  constructor: DConstructor<T>,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any,
  scope: DScope<S> = null
): T | null {
  const obj = new constructor();
  convertTo(obj, data, scope);
  return obj;
}
