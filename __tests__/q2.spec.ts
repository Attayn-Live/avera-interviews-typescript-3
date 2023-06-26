import {evenNumberSum} from '../src/q2'; // Assuming the classes are defined in separate files


describe('Even Number Sum', () => {
  test('Sum of even numbers less than or equal to 10 should be 30', () => {
    expect(evenNumberSum(10)).toBe(30);
  });

  test('Sum of even numbers less than or equal to 15 should be 56', () => {
    expect(evenNumberSum(15)).toBe(56);
  });

  test('Sum of even numbers less than or equal to 20 should be 110', () => {
    expect(evenNumberSum(20)).toBe(110);
  });

  test('Sum of even numbers less than or equal to 1 should be 0', () => {
    expect(evenNumberSum(1)).toBe(0);
  });

  test('Sum of even numbers less than or equal to 100 should be 2550', () => {
    expect(evenNumberSum(100)).toBe(2550);
  });

  test('Sum of even numbers less than or equal to 1000 should be 250500', () => {
    expect(evenNumberSum(1000)).toBe(250500);
  });

  test('Sum of even numbers less than or equal to 1 should be 0', () => {
    expect(evenNumberSum(1)).toBe(0);
  });

  test('Sum of even numbers less than or equal to 2 should be 2', () => {
    expect(evenNumberSum(2)).toBe(2);
  });

  test('Sum of even numbers less than or equal to 3 should be 2', () => {
    expect(evenNumberSum(3)).toBe(2);
  });

  test('Sum of even numbers less than or equal to 100 should be 2550', () => {
    expect(evenNumberSum(100)).toBe(2550);
  });

  test('Sum of even numbers less than or equal to 1000 should be 250500', () => {
    expect(evenNumberSum(1000)).toBe(250500);
  });

  test('Sum of even numbers less than or equal to 100000 should be 2500050000', () => {
    expect(evenNumberSum(100000)).toBe(2500050000);
  });
});
