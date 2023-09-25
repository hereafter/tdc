import { DClass } from '../decorators/dclass';
import { convert } from '../dconvert';

const data = {
  first: {
    x:12, y:13
  },
  second: {
    x:15, y:16
  }
};

export class DTest {
  x: number = 0;
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
    
  });
});

