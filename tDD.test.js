
const testFunctions = require('./tDD');


test('first letter is capitalized', () =>
expect(testFunctions.capitalize('christ')).toBe('Christ')
);

test('first letter is capitalized', () =>
expect(testFunctions.capitalize('cHRIST')).toBe('CHRIST')
);

test('first letter is capitalized', () =>
expect(testFunctions.capitalize('CHRIST')).toBe('CHRIST')
);