"use strict";

const answer = require("./alignColumns");

const input = [
  "Given$a$text$file$of$many$lines,$where$fields$within$a$line$",
  "are$delineated$by$a$single$'dollar'$character,$write$a$program",
  "that$aligns$each$column$of$fields$by$ensuring$that$words$in$each$",
  "column$are$separated$by$at$least$one$space.",
];

const output = [
  "Given  a          text      file   of     many     lines,     where    fields within  a  line",
  "are    delineated by        a      single 'dollar' character, write    a      program",
  "that   aligns     each      column of     fields   by         ensuring that   words   in each",
  "column are        separated by     at     least    one        space.  ",
];

describe("answer", () => {
  it("should generate as expected", () => {    
    expect(answer(input)).toEqual(output.join("\n"));
  });
});
