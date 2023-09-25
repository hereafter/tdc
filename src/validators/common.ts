import { DValidate } from "../decorators/dvalidator";
import { DValidateErrors } from "../dmeta.values";



export function VNotNull() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return DValidate<any>((value: any) =>
    value != null ? "" : DValidateErrors.NotNull
  );
}