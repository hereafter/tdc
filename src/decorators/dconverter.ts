import { DMeta } from "../dmeta";
import { DMetaKnownNames } from "../dmeta.values";
import { DConvertFn, DMetaConverter, DScope } from "../dmeta.object";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function DConvert<T, S = any, O = any>(
  fn: DConvertFn<T, S, O>,
  options: O | null = null,
  scope: DScope = null
) {
  return function (target: object, key: string) {
    const metas = DMeta.getMetaObjects(DMetaKnownNames.CONVERTER, target, key);

    const m = new DMetaConverter<T, S, O>();
    m.fn = fn;
    m.options = options;
    m.scope = scope;
    metas.push(m);
  };
}
