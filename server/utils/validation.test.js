const expect = require('expect');

const {isRealString} = require('./validation');

describe('isRealString', () => {
  it ('should reject non-string values', () => {
    var result = isRealString('');

    expect(result).toBe(false);
  });

  it ('should reject string with only spaces', () => {
    var result = isRealString('    ');

    expect(result).toBe(false);
  });

  it ('should allow strings with non-space characters', () => {
    var result = isRealString(' a b c ');

    expect(result).toBe(true);
  });
});
