import { DMeta } from "./dmeta";
import { DMetaKnownNames } from "./dmeta.names";
import { DMetaName } from "./dmeta.object";

export function DName(
  name: string,
  scope: null | string | (new () => object) = null
) {
  return function (target: object, key: string) {
    const metas=DMeta.getMetaObjects<DMetaName>(DMetaKnownNames.NAME, target, key);
    const m=new DMetaName();
    m.name=name;
    m.scope=scope;
    if(scope==null) return;
    metas?.push(m);
  };
}
