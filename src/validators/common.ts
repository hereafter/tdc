import { DValidate } from "../decorators/dvalidator";
import { DValidateErrors } from "../dmeta.values";



export function VNotNull() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return DValidate<any>((value: any) =>
    value != null ? "" : DValidateErrors.NotNull
  );
}

export function VRange(min:number|null, max:number|null) {
  return DValidate((value:number)=> {
    if(min!=null && value<min) {
      return DValidateErrors.MinValue.replace('{0}', min.toString());
    }

    if(max!=null && value>max) {
      return DValidateErrors.MaxValue.replace('{0}', max.toString());
    }
    return '';
  });
}

export function VMin(min: number) {
  return VRange(min, null);
}

export function VMax(max: number) {
  return VRange(null, max);
}

export function VGreaterThan(v:number) {
  return DValidate((value:number)=> {
  
    if(value<=v) {
      return DValidateErrors.GreaterThan.replace('{0}', v.toString());
    }
    return '';
  });}

export function VGreaterThanOrEqualTo(v:number) {
  return DValidate((value:number)=> {
  
    if(value<v) {
      return DValidateErrors.GreaterThanOrEqualTo.replace('{0}', v.toString());
    }
    return '';
  });
}


export function VLessThan(v:number) {
  return DValidate((value:number)=> {
  
    if(value>=v) {
      return DValidateErrors.LessThan.replace('{0}', v.toString());
    }
    return '';
  });
}

export function VLessThanOrEqualTo(v:number) {
  return DValidate((value:number)=> {
  
    if(value>v) {
      return DValidateErrors.LessThan.replace('{0}', v.toString());
    }
    return '';
  });
}

export function VEqualTo(v:number) {
  return DValidate((value:number)=> {
  
    if(value!=v) {
      return DValidateErrors.EqualTo.replace('{0}', v.toString());
    }
    return '';
  });
}

export function VPattern(pattern: RegExp) {
  return DValidate((value: string) => {
    if (!pattern.test(value)) {
      return DValidateErrors.Pattern.replace("{0}", pattern.source);
    }
    return "";
  });
}