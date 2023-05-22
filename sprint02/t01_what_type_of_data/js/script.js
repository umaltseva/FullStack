const number = 123;
const bigInt = 1234567890123456789012345678901234567890n;
const string = "Hello";
const boolean = true;
const testNull = null;
let testUndefined;
const object = new Object();
const symbol = Symbol("id");
const testFunction = new Function();

alert("number is " + typeof number + "\n" +
    "bigInt is " + typeof bigInt + "\n" +
    "string is " + typeof string + "\n" +
    "boolean is " + typeof boolean + "\n" +
    "testNull is " + testNull + "\n" +
    "testUndefined is " + typeof testUndefined + "\n" +
    "object is " + typeof object + "\n" +
    "symbol is " + typeof symbol + "\n" +
    "testFunction is " + typeof testFunction);
