import "reflect-metadata";
import { DMetaObject } from "./dmeta.object";

export class DMeta {

  static isValidationLogsOn = true;

  static getMetaObjects<T extends DMetaObject>(
    metaName: string,
    target: object,
    key: string | symbol
  ): Array<T> {
    let data = Reflect.getMetadata(metaName, target, key);
    if (data == null) {
      data = new Array<T>();
      Reflect.defineMetadata(metaName, data, target, key);
    }
    return data;
  }

  static findMetaObject<T extends DMetaObject>(
    metaName: string,
    target: object,
    key: string | symbol,
    scope: string | null = null
  ): T | null {
    const data = Reflect.getMetadata(metaName, target, key) as T[];
    if (data == null) return null;

    for (const meta of data) {
      if (meta.scopeName==scope) return meta;
    }

    for (const meta of data) {
      if (meta.scopeName == null) return meta;
    }

    return null;
  }
}
