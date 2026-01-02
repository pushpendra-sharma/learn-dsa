/**
Given a time in -hour AM/PM format, convert it to military (24-hour) time.

Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
- 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

https://www.hackerrank.com/challenges/time-conversion/problem?isFullScreen=true
 */

export function timeConversion(s) {
  const modifier = s.slice(-2);
  let [hours, minutes, seconds] = s.slice(0, -2).split(":");

  if (modifier === "PM" && hours !== "12") {
    hours = Number(hours) + 12;
  } else if (modifier === "AM" && hours === "12") {
    hours = "00";
  }

  return `${hours}:${minutes}:${seconds}`;
}