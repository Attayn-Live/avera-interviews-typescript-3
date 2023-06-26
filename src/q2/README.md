## Challenge: Counting Duplicates

### Difficulty: Medium

You are given a string and your task is to implement a function that counts the number of duplicate characters in the string. A duplicate character is a character that appears more than once in the string.

Your function should return the count of duplicate characters in the string.

**Function Signature:**
```typescript
function countDuplicates(str: string): number {
  // Implementation goes here
  return 0;
}
```

**Input:**
The `str` parameter is a string of alphanumeric characters. The length of the string is between 1 and 10^5 (1 <= str.length <= 10^5).

**Output:**
The function should return the count of duplicate characters in the string.

**Examples:**
```typescript
countDuplicates("hello"); // Output: 2 (The letter "l" appears twice in the string)
countDuplicates("aabbcde"); // Output: 2 (The letters "a" and "b" appear twice in the string)
countDuplicates("abcde"); // Output: 0 (There are no duplicate characters in the string)
countDuplicates("Mississippi"); // Output: 3 (The letters "s" and "i" appear three times, and the letter "p" appears twice in the string)
```

In the first example, the letter "l" appears twice in the string, so the count of duplicate characters is 2.

In the second example, the letters "a" and "b" appear twice in the string, so the count of duplicate characters is 2.

In the third example, there are no duplicate characters in the string, so the count is 0.

In the fourth example, the letters "s" and "i" appear three times, and the letter "p" appears twice in the string, so the count of duplicate characters is 3.
