'use babel';

export function getHighlight(text, range) {
  const [ start, end ] = getHighlightRange(text, range.start.column, range.end.column);

  range.start.column = start;
  range.end.column = end;

  return range;
};

export function getHighlightRange(text, start, end) {
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

  return [start, end];
};

export function getFullLineRange(range) {
  const startOfLine = [range.start.row, 0];
  const endOfLine = [range.end.row, 1000];

  return [startOfLine, endOfLine];
};
