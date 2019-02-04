import * as R from 'ramda';

export const parse = (src = '') => {
  const parseResult = R.pipe(
    R.split('\n'),
    R.reduce((acc, line) => {
      // match start
      const start = line.match(/(s\d+):start/);
      if (start) {
        if (acc.currentSnippet) {
          throw new Error('Invalid');
        }
        if (acc.parsed[start[1]]) {
          throw new Error(`Duplicate Tag: ${start[1]}`);
        }
        acc.currentSnippet = {
          tag: start[1],
          lines: [],
        };
        return acc;
      }

      // match end
      const end = line.match(/(s\d+):end/);
      if (end) {
        if (!acc.currentSnippet ||
             end[1] !== acc.currentSnippet.tag) {
          throw new Error('Invalid');
        }
        acc.parsed[end[1]] = acc.currentSnippet.lines;
        delete acc.currentSnippet;
        return acc;
      }
      // not a start or end...

      // add to current if in the middle of a snippet
      if (acc.currentSnippet) {
        acc.currentSnippet.lines.push(line);
      }
      return acc;
    }, { parsed: {} })
  )(src);

  // if anything is left in the 'currentSnippet' value,
  // the snippet wasn't ended correctly
  if (parseResult.currentSnippet) {
    throw new Error('Invalid');
  }

  return parseResult.parsed;
};

const getLeftWhiteSpaceLength = str => {
  const match = str.match(/^(\s+)/);
  return match ? match[1].length : 0;
};

export const trimLeadingWhiteSpace = rawLines => {
  // get the shortest whitespace
  const minLeadingWhiteSpace = R.pipe(
    R.map(line => getLeftWhiteSpaceLength(line)),
    R.reduce((acc, length) => length < acc ? length : acc, Number.MAX_SAFE_INTEGER)
  )(rawLines);

  // reduce the whitespace of every line by minLeadingWhiteSpace
  return R.map(line => line.slice(minLeadingWhiteSpace))(rawLines);
};
