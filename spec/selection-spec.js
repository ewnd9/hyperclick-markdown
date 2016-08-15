'use babel';

import { getHighlightRange } from '../lib/utils';

function extractLink(line, point) {
  const selection = getHighlightRange(line, point, point);
  return line.substring(selection[0], selection[1]);
}

// convenience method, shows where is a test pointer
function extractSample(line, point) {
  return line.substring(point);
}

describe('selection function', () => {

  it('relative local link', () => {
    const line = '- ./lib/main.js sample text';
    let point;

    point = 2;
    expect(extractSample(line, point)).toEqual('./lib/main.js sample text');
    expect(extractLink(line, point)).toEqual('./lib/main.js');

    point = 8;
    expect(extractSample(line, point)).toEqual('main.js sample text');
    expect(extractLink(line, point)).toEqual('./lib/main.js');
  });

  it('absolute local link', () => {
    const line = '- /lib/main.js \<\!-- root of the project';
    let point;

    point = 2;
    expect(extractSample(line, point)).toEqual('/lib/main.js \<\!-- root of the project');
    expect(extractLink(line, point)).toEqual('/lib/main.js');

    point = 12;
    expect(extractSample(line, point)).toEqual('js \<\!-- root of the project');
    expect(extractLink(line, point)).toEqual('/lib/main.js');
  });

  it('absolute local link', () => {
    const line = '- http://github.com/ sample text';
    let point;

    point = 2;
    expect(extractSample(line, point)).toEqual('http://github.com/ sample text');
    expect(extractLink(line, point)).toEqual('http://github.com/');

    point = 9;
    expect(extractSample(line, point)).toEqual('github.com/ sample text');
    expect(extractLink(line, point)).toEqual('http://github.com/');
  });

  it('markdown link with description', () => {
    const line = '- [A link](reddit.com) sample text';
    let point;

    point = 11;
    expect(extractSample(line, point)).toEqual('reddit.com) sample text');
    expect(extractLink(line, point)).toEqual('reddit.com');

    point = 15;
    expect(extractSample(line, point)).toEqual('it.com) sample text');
    expect(extractLink(line, point)).toEqual('reddit.com');
  });

});
