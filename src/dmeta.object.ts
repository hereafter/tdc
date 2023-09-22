export type DConstructor<T extends object = object> = new () => T;

export type DScope<T extends object = object> = string | null | DConstructor<T>;

export class DMetaObject {
  scope: DScope = null;
}

export class DMetaName extends DMetaObject {
  name: string | null = null;
}

export class DMetaClass<T extends object=object> extends DMetaObject {
  fn: DConstructor<T> | null = null;
}
