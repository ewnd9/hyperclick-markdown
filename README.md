# Hyperclick Provider

Fork of https://github.com/oclbdk/hyperclick-provider-demo

Ctrl+Click in markdown file to open a link in the editor

## Install

```sh
$ git clone https://github.com/ewnd9/hyperclick-markdown.git
$ ln -s $PWD/hyperclick-markdown $HOME/.atom/packages/hyperclick-markdown
```

## Test

- ./lib/main.js
- /lib/main.js \<\!-- root of the project
- ../hyperclick-markdown/lib/main.js

## Problems

- [ ] How to disable plugin for non-markdown files in config?
- [ ] Lacking of tests

## Hyperclick api

https://atom.io/packages/hyperclick

## Atom api

### Open file

```js
atom.workspace.open('/home/**/.md')
```

### Project root

```js
atom.project.getPaths(); // => array
```

### Current file

```js
textEditor.getPath(); // => string
```

### Text from range

```js
textEditor.getTextInBufferRange(range)
```
