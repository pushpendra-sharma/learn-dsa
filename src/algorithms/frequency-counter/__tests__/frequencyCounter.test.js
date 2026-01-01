import { expect, test } from "vitest";

import { validAnagram } from "../frequencyCounter";

test("frequencyCounter", () => {
  expect(validAnagram("", "")).toBeTruthy();
  expect(validAnagram("aaz", "zza")).toBeFalsy();
  expect(validAnagram("anagram", "nagaram")).toBeTruthy();
  expect(validAnagram("rat", "car")).toBeFalsy();
  expect(validAnagram("awesome", "awesom")).toBeFalsy();
  expect(validAnagram("amanaplanacanalp", "acanalmanpla")).toBeFalsy();
  expect(validAnagram("qwerty", "qeywrt")).toBeTruthy();
  expect(validAnagram("texttwisttime", "timetwisttext")).toBeTruthy();
});
