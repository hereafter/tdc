export class DMetaKnownNames {
  static readonly NAME: string = "@data-name";
  static readonly CLASS: string = "@data-class";
  static readonly CONVERTER: string = "@data-converter";
  static readonly VALIDATOR: string = "@data-validator";
}

export class DValidateErrors {
  static readonly NotNull = "The value should not be null";
  static readonly MinValue = "The value must be at least {0}";
  static readonly MaxValue = "The value must be at most {0}";
  static readonly GreaterThan = "The value must be greater than {0}";
  static readonly LessThan = "The value must be less than {0}";
  static readonly EqualTo = "The value must be equal to {0}";
  static readonly GreaterThanOrEqualTo = "The value must be equal to or greater than {0}";
  static readonly LessThanOrEqualTo = "The value must be equal to or less than {0}";
  static readonly Pattern="The value does not match pattern {0}";
}