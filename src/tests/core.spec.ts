import { convert, convertTo } from '../dconvert';
import { DIgnore } from '../decorators/dignore';


describe('Core functions', () => {

  class DData {    
    name:string='';

    @DIgnore()
    code:number=0;
  }

  it('Ignore', () => {
    const data={
      name: "John",
      code: 123,
    }
    
    const v=convert(DData, data);
    expect(v?.code === 0).toBeTrue();
  });

  it('IgnoreValue', ()=> {
     const data1= { name: "hello"};
     const data2= { name2: "world"};

     const target=new DData();
     convertTo(target, data1);
     convertTo(target, data2, DData);

     expect(target.name).toBe('hello');
     

  });

});

