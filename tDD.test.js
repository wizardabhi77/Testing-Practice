
import {capitalize, reverseString, calculator, ceasarCipher} from './tDD';



test('first letter is capitalized', () =>
expect(capitalize('christ')).toBe('Christ')
);

test('first letter is capitalized', () =>
expect(capitalize('cHRIST')).toBe('CHRIST')
);

test('first letter is capitalized', () =>
expect(capitalize('CHRIST')).toBe('CHRIST')
);

test('String is Reversed', () =>
expect(reverseString('CHRIST')).toBe('TSIRHC')
);

test('String is reversed', () =>
expect(reverseString('malayalam')).toBe('malayalam')
);

test('calculate add', () =>
expect(calculator.add(1,2)).toBe(3));

test('calculate subtract', () =>
expect(calculator.subtract(1,2)).toBe(-1));

test('calculate multiply', () =>
expect(calculator.multiply(1,2)).toBe(2));

test('calculate divide', () =>
expect(calculator.divide(1,0)).toBe(Infinity));

//Ceasar Cipher test

test('ceasarCipher is a function', ()=> 
expect(ceasarCipher).toBeDefined())

test('cipher of string with no special characters', ()=>
expect(ceasarCipher('abc',3)).toBe('def'));

test('cipher of string with wrapping', ()=>
expect(ceasarCipher('xyz',3)).toBe('abc'));

test('cipher of string with case preservation', ()=>
expect(ceasarCipher('heLLo',3)).toBe('khOOr'));

test('cipher of string with special characters', ()=>
expect(ceasarCipher('Hello, World!',3)).toBe('Khoor, Zruog!'));
