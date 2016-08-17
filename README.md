# hyperclick-markdown

Ctrl+Click in markdown file to open fs and web urls in the editor.

![Demonstration](https://raw.githubusercontent.com/ewnd9/hyperclick-markdown/master/docs/demo.gif)

## Install

```
$ apm install hyperclick-markdown
```

## Development

```sh
$ git clone https://github.com/ewnd9/hyperclick-markdown.git
$ ln -s $PWD/hyperclick-markdown $HOME/.atom/packages/hyperclick-markdown
```

## Test

- ./lib/main.js
- /lib/main.js \<\!-- root of the project
- http://github.com/
- [markdown link without protocol](reddit.com)
- [markdown link to localhost](localhost:8080)

## Problems

- [ ] How to disable plugin for non-markdown files in config?

## Credits

Fork of https://github.com/oclbdk/hyperclick-provider-demo

## License

MIT © [ewnd9](http://ewnd9.com)
