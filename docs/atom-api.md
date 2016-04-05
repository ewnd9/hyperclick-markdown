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
