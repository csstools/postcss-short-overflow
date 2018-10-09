# PostCSS Short Overflow [<img src="https://postcss.github.io/postcss/logo.svg" alt="PostCSS" width="90" height="90" align="right">][postcss]

[![NPM Version][npm-img]][npm-url]
[![Build Status][cli-img]][cli-url]
[![Support Chat][git-img]][git-url]

[PostCSS Short Overflow] lets you write `overflow-x` and `overflow-y` with the
`overflow` shorthand in CSS.

```pcss
html {
  overflow: hidden auto;
}

[contenteditable] {
  overflow: * auto;
}

/* becomes */

html {
  overflow-x: hidden;
  overflow-y: auto;
}

[contenteditable] {
  overflow-y: auto;
}
```

## Usage

Add [PostCSS Short Overflow] to your project:

```bash
npm install postcss-short-overflow --save-dev
```

Use [PostCSS Short Overflow] to process your CSS:

```js
const postcssShortOverflow = require('postcss-short-overflow');

postcssShortOverflow.process(YOUR_CSS /*, processOptions, pluginOptions */);
```

Or use it as a [PostCSS] plugin:

```js
const postcss = require('postcss');
const postcssShortOverflow = require('postcss-short-overflow');

postcss([
  postcssShortOverflow(/* pluginOptions */)
]).process(YOUR_CSS /*, processOptions */);
```

[PostCSS Short Overflow] runs in all Node environments, with special instructions for:

| [Node](INSTALL.md#node) | [PostCSS CLI](INSTALL.md#postcss-cli) | [Webpack](INSTALL.md#webpack) | [Create React App](INSTALL.md#create-react-app) | [Gulp](INSTALL.md#gulp) | [Grunt](INSTALL.md#grunt) |
| --- | --- | --- | --- | --- | --- |

## Options

#### prefix

The `prefix` option determines the prefix applied to properties being processed
(e.g. `x` for `-x-overflow`). Wrapping dashes (`-`) are automatically
applied.

[cli-img]: https://img.shields.io/travis/jonathantneal/postcss-short-overflow.svg
[cli-url]: https://travis-ci.org/jonathantneal/postcss-short-overflow
[git-img]: https://img.shields.io/badge/support-chat-blue.svg
[git-url]: https://gitter.im/postcss/postcss
[npm-img]: https://img.shields.io/npm/v/postcss-short-overflow.svg
[npm-url]: https://www.npmjs.com/package/postcss-short-overflow

[PostCSS]: https://github.com/postcss/postcss
[PostCSS Short Overflow]: https://github.com/jonathantneal/postcss-short-overflow
