import { DMeta } from "../dmeta";
import { DMetaObject, DScope } from "../dmeta.object";
import { DMetaKnownNames } from "../dmeta.values";


export function DIgnore(scope: DScope = null) {
  return function (target: object, key: string) {
    const metas = DMeta.getMetaObjects<DMetaObject>(
      DMetaKnownNames.IGNORE,
      target,
      key
    );

    const m=new DMetaObject();
    m.scope=scope;
    metas.push(m);
  }
}