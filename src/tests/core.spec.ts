import { convert } from '../dconvert';
import { DIgnore } from '../decorators/dignore';


describe('Core functions', () => {
  it('Ignore', () => {

    class DData {
      name:string='';

      @DIgnore()
      code:number=0;
    }

    const data={
      name: "John",
      code: 123,
    }
    
    const v=convert(DData, data);
    expect(v?.code === 0).toBeTrue();
  });
});

