'use babel';
/* @flow */

import { getHighlight, getFullLineRange } from './utils';
import fs from 'fs';
import shell from 'shell';
import path from 'path';

const provider = {
  providerName: 'hyperclick-markdown',
  getSuggestionForWord(textEditor: TextEditor, _text: string, range: Range): HyperclickSuggestion {
    if (textEditor.getGrammar().name !== 'GitHub Markdown') {
      return;
    }

    const lineRange = getFullLineRange(range);
    const text = textEditor.getTextInBufferRange(lineRange);

    const highlightRange = getHighlight(text, range);
    const result = text.slice(highlightRange.start.column, highlightRange.end.column);

    const isWeb = result.indexOf('http') === 0;
    const isLocalPath = result[0] === '/' || result[0] === '.';
    const isWebWithoutProtocol = !isWeb && !isLocalPath && (result.indexOf('.') !== -1 || result.indexOf('localhost') === 0);

    if (!isWeb && !isLocalPath && !isWebWithoutProtocol) {
      return;
    }

    return {
      range,
      callback() {
        let filePath;

        if (isWeb) {
          shell.openExternal(result);
          return;
        }

        if (isWebWithoutProtocol) {
          shell.openExternal(`http://${result}`);
          return;
        }

        if (result.indexOf('/') === 0) {
          filePath = atom.project.getPaths()[0] + result;
        } else {
          filePath = path.normalize(path.dirname(textEditor.getPath()) + '/' + result);
        }

        fs.stat(filePath, (err, stat) => {
          if (err) {
            const detail = `Path: "${filePath}"\nError: "${err.code}"`;
            atom.notifications.addInfo('Hyperclick provider demo', { detail });

            return;
          }

          atom.workspace.open(filePath);
        });
      }
    };
  }
};

module.exports = {
  getProvider() {
    return provider;
  }
};
