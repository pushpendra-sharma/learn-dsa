import { describe, test, expect } from "vitest";

import { stringSearch } from "../search";

describe("stringSearch()", () => {
  test("should count the number of occurrences of the short string", () => {
    expect(stringSearch("wowomgzomg", "omg")).toBe(2);
    expect(stringSearch("lorie lolelo", "lo")).toBe(3);
  });

  test("should handle overlapping matches", () => {
    // Depending on your implementation, "aaaa" with "aa" could be 3 or 2.
    // This naive version usually finds 3.
    expect(stringSearch("aaaaa", "aa")).toBe(4);
  });

  test("should return 0 if the short string is not found", () => {
    expect(stringSearch("harold and lorie", "xyz")).toBe(0);
  });

  test("should handle cases where the short string is longer than the long string", () => {
    expect(stringSearch("abc", "abcdef")).toBe(0);
  });

  test("should count 0 if the short string is empty", () => {
    // While mathematically an empty string is everywhere,
    // in naive search it usually breaks the inner loop immediately.
    expect(stringSearch("hello", "")).toBe(0);
  });

  test("should be case sensitive", () => {
    expect(stringSearch("Hello world", "hello")).toBe(0);
    expect(stringSearch("HELLO", "LO")).toBe(1);
  });

  test("should work with a single character search", () => {
    expect(stringSearch("mississippi", "i")).toBe(4);
  });
});
