import { DClass } from '../decorators/dclass';
import { convert } from '../dconvert';
import { DName } from '../decorators/dname';
import { DConvert } from '../decorators/dconverter';
import { validate } from '../dvalidate';
import { VMax, VMin } from '../validators/common';

const data = {
  first: {
    a:"12", b:"13"
  },
  second: {
    b:"15", a:"16"
  }
};

export class DTest {
  @DName('a')
  @DConvert((v)=>Number.parseInt(v))
  @VMin(100)
  x: number = 0;

  @DName('b')
  @VMax(1000)
  @DConvert((v)=>Number.parseInt(v))
  y: number = 0;
}


export class DData {
  @DClass(DTest)
  first: DTest | null = null;

  @DClass(DTest)
  second: DTest | null = null;
}

describe('hello', () => {
  it('say hello world', () => {
    console.log('hello world')
  });
});

describe('hello', () => {
  it('DClass', () => {
    const v=convert(DData, data);
    console.log(v);

    validate(v!);
    
  });
});

