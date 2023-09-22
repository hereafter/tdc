import { DMeta } from "../dmeta";
import { DMetaKnownNames } from "../dmeta.names";
import { DConstructor, DMetaClass, DScope } from "../dmeta.object";

export function DClass<T extends object>(
  t: DConstructor<T>,
  scope: DScope,
) {
  return function (target: object, key: string) {
    const metas = DMeta.getMetaObjects<DMetaClass<T>>(
      DMetaKnownNames.CLASS,
      target,
      key
    );

    const m = new DMetaClass<T>();
    m.fn = t;
    m.scope = scope;
    metas.push(m);
  };
}
