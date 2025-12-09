
import {capitalize, reverseString} from './tDD';


test('first letter is capitalized', () =>
expect(capitalize('christ')).toBe('Christ')
);

test('first letter is capitalized', () =>
expect(capitalize('cHRIST')).toBe('CHRIST')
);

test('first letter is capitalized', () =>
expect(capitalize('CHRIST')).toBe('CHRIST')
);

test('first letter is capitalized', () =>
expect(reverseString('CHRIST')).toBe('TSIRHC')
);

test('first letter is capitalized', () =>
expect(reverseString('malayalam')).toBe('malayalam')
);