import { DMeta } from "../dmeta";
import { DMetaKnownNames } from "../dmeta.values";
import { DConstructor, DMetaClass, DScope, DScopeName } from "../dmeta.object";

export function DClass<T extends object>(
  t: DConstructor<T>,
  scope: DScope = null
) {
  return function (target: object, key: string) {
    const metas = DMeta.getMetaObjects<DMetaClass<T>>(
      DMetaKnownNames.CLASS,
      target,
      key
    );

    const m = new DMetaClass<T>();
    m.fn = t;
    m.scopeName=DScopeName(scope);
    metas.push(m);
  };
}
