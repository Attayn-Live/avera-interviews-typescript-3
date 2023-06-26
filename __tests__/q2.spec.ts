import {countDuplicates} from '../src/q2'; // Assuming the classes are defined in separate files


describe('Counting Duplicates', () => {
  it('should return the correct count of duplicate characters', () => {
    expect(countDuplicates('hello')).toBe(2); // The letter "l" appears twice in the string
    expect(countDuplicates('aabbcde')).toBe(2); // The letters "a" and "b" appear twice in the string
    expect(countDuplicates('abcde')).toBe(0); // There are no duplicate characters in the string
    expect(countDuplicates('Mississippi')).toBe(3); // The letters "s" and "i" appear three times, and the letter "p" appears twice in the string
    expect(countDuplicates('aAAbBcC')).toBe(6); // All characters appear as duplicates in the string
    expect(countDuplicates('1234567890')).toBe(0); // There are no duplicate characters in the string
  });

  it('should handle empty strings', () => {
    expect(countDuplicates('')).toBe(0); // Empty string has no duplicate characters
  });

  it('should handle strings with only one character', () => {
    expect(countDuplicates('a')).toBe(0); // Single character string has no duplicate characters
    expect(countDuplicates('Z')).toBe(0); // Single character string has no duplicate characters
    expect(countDuplicates('9')).toBe(0); // Single character string has no duplicate characters
  });

  it('should be case-sensitive', () => {
    expect(countDuplicates('Hello')).toBe(1); // The uppercase "H" appears twice, but case is considered
    expect(countDuplicates('AAAbbB')).toBe(3); // The uppercase "A" appears three times, and the uppercase "B" appears twice
  });

  it('should count duplicate characters with special characters', () => {
    expect(countDuplicates('!@#$%^&*()')).toBe(0); // There are no duplicate characters in the string
    expect(countDuplicates('@@##$$')).toBe(3); // The characters "@" and "#" appear twice, and the character "$" appears three times
  });
});
