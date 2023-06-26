Challenge: Even Number Sum

Difficulty: Easy

You are given a positive integer `n`. Your task is to implement a function that finds the sum of all even numbers less than or equal to `n`.

Your function should return the sum of even numbers.

Function Signature:
```typescript
function evenNumberSum(n: number): number {
  // Implementation goes here
  return 0;
}
```

Input:
The `n` parameter is a positive integer greater than or equal to 1.

Output:
The function should return the sum of even numbers less than or equal to `n`.

Examples:
```typescript
evenNumberSum(10); // Output: 30 (2 + 4 + 6 + 8 + 10 = 30)
evenNumberSum(15); // Output: 56 (2 + 4 + 6 + 8 + 10 + 12 + 14 = 56)
evenNumberSum(20); // Output: 110 (2 + 4 + 6 + 8 + 10 + 12 + 14 + 16 + 18 + 20 = 110)
```

In the first example, the even numbers less than or equal to 10 are 2, 4, 6, 8, and 10. Their sum is 30.

In the second example, the even numbers less than or equal to 15 are 2, 4, 6, 8, 10, 12, and 14. Their sum is 56.

In the third example, the even numbers less than or equal to 20 are 2, 4, 6, 8, 10, 12, 14, 16, 18, and 20. Their sum is 110.
