import {describe, expect, test,beforeEach,afterEach,it} from '@jest/globals';
import { getNumber, getString, getObject, getArray } from './test_jest'
// 數字比對、字串比對、陣列比對、物件比對
test('1+2=3', () => {
    expect(getNumber(1, 2)).toBe(3)
})

test('H is in Hello, world!', () => {
    expect(getString("Hello, world!")).toMatch("H")
})

test('A list of numbers from 0 to 9', () => {
    expect(getArray(10)).toStrictEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
})

test("make object", () => {
  expect(getObject("John", 1)).toEqual({ name: "John", age: 1 });
});