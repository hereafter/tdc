import { DMeta } from "../dmeta";
import { DMetaKnownNames } from "../dmeta.values";
import { DMetaValidator, DScope, DValidateFn } from "../dmeta.object";


// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function DValidate<O = any>(
  fn: DValidateFn<O>,
  options: O | null = null,
  scope: DScope = null
) {
  return function(target: object, key:string) {
    const metas=DMeta.getMetaObjects(DMetaKnownNames.VALIDATOR, target, key);
    
    const m=new DMetaValidator<O>();
    m.validators.push(fn);
    m.options=options;
    m.scope=scope;
    metas.push(m);
  }
}

