import {reverseWords} from '../src/q1';

describe('reverseWords', () => {
  it('should reverse words in a string with no leading or trailing spaces', () => {
    const input = 'Hello World';
    const expected = 'olleH dlroW';
    const result = reverseWords(input);
    expect(result).toEqual(expected);
  });

  it('should reverse words in a string with leading or trailing spaces', () => {
    const input = '  Welcome   to TypeScript   ';
    const expected = 'emocleW ot tpircSepyT';
    const result = reverseWords(input);
    expect(result).toEqual(expected);
  });

  it('should reverse words in a string with multiple spaces between words', () => {
    const input = '  TypeScript is Awesome   ';
    const expected = 'tpircSepyT si emosewA';
    const result = reverseWords(input);
    expect(result).toEqual(expected);
  });

  it('should handle a single-word input string correctly', () => {
    const input = 'Challenge';
    const expected = 'egnellahC';
    const result = reverseWords(input);
    expect(result).toEqual(expected);
  });

  it('should handle input strings with special characters correctly', () => {
    const input = 'Hello@World!';
    const expected = '!dlroW@olleH';
    const result = reverseWords(input);
    expect(result).toEqual(expected);
  });

  it('should handle input strings with numbers correctly', () => {
    const input = '12345 67890';
    const expected = '54321 09876';
    const result = reverseWords(input);
    expect(result).toEqual(expected);
  });

  it('should handle input strings with uppercase and lowercase letters correctly', () => {
    const input = 'AbCdEfG';
    const expected = 'GfEdCbA';
    const result = reverseWords(input);
    expect(result).toEqual(expected);
  });
});
