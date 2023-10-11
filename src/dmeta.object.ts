export type DConstructor<T extends object = object> = new () => T;

export type DScope<T extends object = object> = string | null | DConstructor<T>;

export function DScopeName(scope: DScope) {
  let scopeValue: string | null = null;
  if ((scope as DConstructor)?.name != null) {
    scopeValue = (scope as DConstructor).name;
  } else {
    scopeValue = scope as string;
  }
  return scopeValue;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type DConvertFn<T, S = any, O = any> = (
  source: S | null,
  options?: O
) => T | null;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type DValidateFn<O=any> = (value: any|null, options?: O) => string|null;

export class DMetaObject {
  scopeName: string|null = null;
}

export class DMetaName extends DMetaObject {
  name: string | null = null;
}

export class DMetaClass<T extends object=object> extends DMetaObject {
  fn: DConstructor<T> | null = null;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export class DMetaConverter<T, S = any, O = any> extends DMetaObject {
  fn: DConvertFn<T, S, O> | null = null;
  options: O | null = null;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export class DMetaValidator<O = any> extends DMetaObject {
  validators: Array<DValidateFn> = [];
  options: O | null = null;
}
