import { DMeta } from "../dmeta";
import { DMetaKnownNames } from "../dmeta.names";
import { DMetaName, DScope } from "../dmeta.object";


export function DName(
  name: string,
  scope: DScope = null
) {
  return function (target: object, key: string) {
    const metas = DMeta.getMetaObjects<DMetaName>(DMetaKnownNames.NAME,
      target, key);
          
    const m = new DMetaName();
    m.name = name;
    m.scope = scope;
    
    metas?.push(m);
  };
}
