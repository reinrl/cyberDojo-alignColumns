"use strict";

function answer(lines) {
  // convert input to an array of arrays
  const linesAsArrayOfArrays = lines.map((line) =>
    // split on dollar sign...but throw out training dollar signs
    line.split("$").filter((word) => !!word)
  );

  // figure out which line has the most words
  const mostWordsInALine = Math.max(
    ...linesAsArrayOfArrays.map((line) => line.length)
  );

  // initial array to track the most characters in a given column
  const mostCharsPerColumn = Array.from(Array(mostWordsInALine)).map(() => 0);
  // let's loop through each column
  let colIdx = 0;
  while (colIdx < mostWordsInALine) {
    // let's loop through each line
    let lineIdx = 0;
    while (lineIdx < linesAsArrayOfArrays.length) {
      // is this the new leader for this column?
      mostCharsPerColumn[colIdx] = Math.max(
        mostCharsPerColumn[colIdx],
        linesAsArrayOfArrays[lineIdx][colIdx]?.length ?? 0
      );
      // on to the next line
      lineIdx++;
    }
    // on to the next column
    colIdx++;
  }

  // now time to do the output
  return (
    linesAsArrayOfArrays
      .map((line, thisLineIdx) =>
        // output the result for each line
        line
          .map((column, thisColIdx) =>
            // make this a fixed-length column based on the longest value in this pos
            column.padEnd(mostCharsPerColumn[thisColIdx])
          )
          // each column must have at least one space in between
          .join(" ")
      )
      // output should have line breaks
      .join("\n")
  );
}

module.exports = answer;
