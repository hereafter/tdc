export class DMetaObject {
  scope: string | (new () => object) | null = null;
}

export class DMetaName extends DMetaObject {
  name: string | null = null;
}
