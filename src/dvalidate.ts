import { DMeta } from "./dmeta";
import { DMetaKnownNames } from "./dmeta.values";
import { DConstructor, DMetaValidator, DScope } from "./dmeta.object";

export class DValidateResult extends Map<string, string> {
  get isDataValid() {
    return this.size == 0;
  }
}

export function validate<T extends object, S extends object>(
  data: T,
  scope: DScope<S> = null
): DValidateResult {
  const result = new DValidateResult();

  let scopeValue: string | null = null;
  if ((scope as DConstructor)?.name != null) {
    scopeValue = (scope as DConstructor).name;
  } else {
    scopeValue = scope as string;
  }

  for (const key in data) {
    const metaValidators = DMeta.findMetaObject<DMetaValidator<T>>(
      DMetaKnownNames.VALIDATOR,
      data,
      key,
      scopeValue
    );

    if (metaValidators == null || metaValidators.validators.length === 0)
      continue;

    for (const validator of metaValidators.validators) {
      const r = validator(data);
      if (r == null || r === "") continue;
      result.set(key, r);
    }
  }

  return result;
}
