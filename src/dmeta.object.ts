export type DConstructor<T extends object = object> = new () => T;

export type DScope<T extends object = object> = string | null | DConstructor<T>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type DConvertFn<T, S = any, O = any> = (
  source: S | null,
  options?: O
) => T | null;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type DValidateFn<T, O=any> = (value: T|null, options?: O) => string|null;

export class DMetaObject {
  scope: DScope = null;
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
export class DMetaValidator<T, O = any> extends DMetaObject {
  validators: Array<DValidateFn<T>> = [];
  options: O | null = null;
}
