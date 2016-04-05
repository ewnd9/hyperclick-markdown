'use babel';

export function getHighlight(text, range) {
  let start = range.start.column;
  let end = range.end.column;

  for (; start > 0 ; start--) {
    if (/[\[\]\(\)\s]/.test(text[start])) {
      start++;
      break;
    }
  }

  for (; end < text.length ; end++) {
    if (/[\[\]\(\)\s]/.test(text[end])) {
      break;
    }
  }

  range.start.column = start;
  range.end.column = end;

  return range; // throws error if not original range
};

export function getFullLineRange(range) {
  const startOfLine = [range.start.row, 0];
  const endOfLine = [range.end.row, 1000];

  return [startOfLine, endOfLine];
};
