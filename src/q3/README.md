## Challenge Title: "String Compression"

### Problem Statement:

You are given a string consisting of lowercase alphabets. Your task is to implement a function that compresses the
string by replacing consecutive repeated characters with the character itself followed by the count of consecutive
occurrences.

The compressed string should be formed by taking each unique character and its consecutive occurrences from the input
string. If the count of consecutive occurrences is greater than 1, it should be included in the compressed string;
otherwise, only the character itself should be included.

### Function Signature:

```typescript
function compressString(input: string): string {
  // Implementation goes here
  return '';
}
```

### Input:

The `input` parameter is a string consisting of lowercase alphabets. It is guaranteed to have at least one character and
at most 10^5 characters.

### Output:

The function should return a string that represents the compressed version of the input string.

### Examples:

```typescript
compressString("aaabbbccc"); // Output: "a3b3c3"
compressString("aabbbcc"); // Output: "a2b3c2"
compressString("abc"); // Output: "abc"
compressString("a"); // Output: "a"
compressString('ccccccccc') // Output: "c9"
compressString('cdcddcddc') // Output: "cdcd2cd2c"
compressString('xyyxxy') // Output: "xy2x2y"
```

### Note:

In the first example, the input string "aaabbbccc" has consecutive repeated characters 'a', 'b', and 'c' with counts 3,
3, and 3 respectively. The compressed string is formed by taking each unique character and its count of consecutive
occurrences, resulting in "a3b3c3"... And so on
