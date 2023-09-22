export class DMetaObject {
  scope: string | null = null;
}

export class DMetaName extends DMetaObject {
  name: string | null = null;
}

export function DName(
  name: string,
  scope: null | string | (new () => object) = null
) { 
  if(scope==null) return;
}
