import {compressString} from '../src/q1';

describe('String Compression', () => {
  it('should compress a string with consecutive repeated characters', () => {
    expect(compressString('aaabbbccc')).toBe('a3b3c3');
    expect(compressString('aabbbcc')).toBe('a2b3c2');
    expect(compressString('aaaabbbccd')).toBe('a4b3c2d1');
    expect(compressString('zzzxxxzzz')).toBe('z3x3z3');
  });

  it('should return the original string if no consecutive repeated characters exist', () => {
    expect(compressString('abc')).toBe('abc');
    expect(compressString('xyz')).toBe('xyz');
    expect(compressString('aabbcc')).toBe('aabbcc');
    expect(compressString('abcd')).toBe('abcd');
  });

  it('should handle input strings with single characters', () => {
    expect(compressString('a')).toBe('a');
    expect(compressString('z')).toBe('z');
    expect(compressString('c')).toBe('c');
  });

  it('should handle long input strings', () => {
    // Generate a long string with consecutive repeated characters
    const longString = 'a'.repeat(50000) + 'b'.repeat(50000) + 'c'.repeat(50000);
    const compressedString = 'a50000b50000c50000';
    expect(compressString(longString)).toBe(compressedString);
  });

  it('should handle an empty input string', () => {
    expect(compressString('')).toBe('');
  });

  it('should handle a single-character input string', () => {
    expect(compressString('a')).toBe('a');
    expect(compressString('z')).toBe('z');
  });

  it('should handle an input string with all characters being the same', () => {
    expect(compressString('aaaa')).toBe('a4');
    expect(compressString('bbbbbb')).toBe('b6');
    expect(compressString('ccccccccc')).toBe('c9');
  });

  it('should handle an input string with alternating characters', () => {
    expect(compressString('ababab')).toBe('ababab');
    expect(compressString('cdcddcddc')).toBe('cdcd2cd2c');
  });

  it('should handle an input string with only two characters', () => {
    expect(compressString('aaabbb')).toBe('a3b3');
    expect(compressString('xyyxxy')).toBe('xy2x2y');
  });
});
