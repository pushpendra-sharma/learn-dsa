import { expect, test } from "vitest";
import { staircase } from "../staircase";

test("staircase - size 4 (standard)", () => {
  const expected = "   #\n" + "  ##\n" + " ###\n" + "####";
  expect(staircase(4)).toBe(expected);
});

test("staircase - size 1 (edge case)", () => {
  const expected = "#";
  expect(staircase(1)).toBe(expected);
});

test("staircase - size 6", () => {
  const result = staircase(6);
  const lines = result.split("\n");

  expect(lines.length).toBe(6); // Correct height
  expect(lines[0]).toBe("     #"); // 5 spaces, 1 hash
  expect(lines[5]).toBe("######"); // 0 spaces, 6 hashes
});

test("staircase - verify right alignment", () => {
  const n = 3;
  const result = staircase(n);
  const lines = result.split("\n");

  // Every line should have the same total length (n)
  lines.forEach((line) => {
    expect(line.length).toBe(n);
  });
});
