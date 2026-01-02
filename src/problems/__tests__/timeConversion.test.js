import { expect, test } from "vitest";
import { timeConversion } from "../timeConversion";

test("timeConversion - AM cases (excluding 12 AM)", () => {
  // Should remain the same but without the 'AM' suffix
  expect(timeConversion("07:05:45AM")).toBe("07:05:45");
  expect(timeConversion("01:00:00AM")).toBe("01:00:00");
  expect(timeConversion("11:59:59AM")).toBe("11:59:59");
});

test("timeConversion - PM cases (excluding 12 PM)", () => {
  // Should add 12 to the hour
  expect(timeConversion("01:00:00PM")).toBe("13:00:00");
  expect(timeConversion("07:05:45PM")).toBe("19:05:45");
  expect(timeConversion("11:59:59PM")).toBe("23:59:59");
});

test("timeConversion - The 12 AM (Midnight) Edge Case", () => {
  // 12:xx:xxAM becomes 00:xx:xx
  expect(timeConversion("12:00:00AM")).toBe("00:00:00");
  expect(timeConversion("12:45:54AM")).toBe("00:45:54");
});

test("timeConversion - The 12 PM (Noon) Edge Case", () => {
  // 12:xx:xxPM stays 12:xx:xx
  expect(timeConversion("12:00:00PM")).toBe("12:00:00");
  expect(timeConversion("12:45:54PM")).toBe("12:45:54");
});
