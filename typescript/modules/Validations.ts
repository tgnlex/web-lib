module Validation {
    export type Validator = { [s: string]: Validation.StringValidator};
    const lettersRegexp = /^[A-Za-z]+$/;
    const numberRegexp = /^[0-9]+$/;
    export interface StringValidator { 
        isAcceptable(s: string): boolean;
    }

    export class LettersOnlyValidator implements StringValidator {
        isAcceptable(s: string) {
            return lettersRegexp.test(s);
        }
    }
    export class ZipCodeValidator implements StringValidator {
        isAcceptable (s: string) {
            return s.length === 5 && numberRegexp.test(s);
        }
    }   

    export class ParseIntBasedZipCodeValidator {
        isAcceptable(s: string) {
            return s.length === 5 && parseInt(s).toString() === s;
        }
    }
    export class ParseFloatBasedZipCodeValidator {
        isAcceptable(s: string) {
            return s.length === 5 && parseFloat(s).toString() === s;
        }
    }
}



// Examples

let strings = ["Hello", "12134", "101"]
let validator: Validation.Validator = {}
validator["ZIP"] = new Validation.ZipCodeValidator();
validator["Letters"] = new Validation.LettersOnlyValidator();
// Some more validators just for the hell of it.
validator["ParseInt"] = new Validation.ParseIntBasedZipCodeValidator();
validator["ParseFloat"] = new Validation.ParseFloatBasedZipCodeValidator();
