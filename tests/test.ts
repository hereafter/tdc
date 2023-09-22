import { DName } from "../src/decorators/dname";
import { convert } from "../src/dconvert";
import { DConvert } from "../src/decorators/dconverter";

export class TestClass {

  @DName('a')
  @DConvert(t=>2*t)
  x: number = 0;
  y: number = 0;

  get sum() {
    return this.x + this.y;
  }
}

export function fnTestSimple() {
  const data = { a: 100, b: 100 };

  const obj = convert(TestClass, data);
  console.log(obj?.sum ?? "<!>");
}
