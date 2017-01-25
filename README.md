# react-random-squares-avatar

A simple react component that creates a Slack like avatar.

## Demo & Examples

Live demo: [reactrandomsquaresavatar-demo.firebaseapp.com/](https://reactrandomsquaresavatar-demo.firebaseapp.com/)


To build and test locally, run:

```
npm install
npm test
npm run testonly
npm run lint
npm run prepublish
```

## Installation

The easiest way to use react-random-squares-avatar is to install it from NPM and include it in your own React build process (using [Browserify](http://browserify.org), [Webpack](http://webpack.github.io/), [Brunch](http://brunch.io/), etc).

You can also use the standalone build by including `dist/index.js` in your page. If you use this, make sure you have already included React, and it is available as a global variable.

```
npm install react-random-squares-avatar --save
```

## Usage

If no props are supplied then the default height and width are 100px and the rotation will be a random 10 digit number in the range of 10 degrees to 80 degrees inclusive.

```
<ReactRandomSquaresAvatar />
```

The props height and width set the avatars dimensions and the rotate value can be either 0, or a 10 digit number in the range of 10 degrees to 80 degrees inclusive.

```
<ReactRandomSquaresAvatar height="200" width="200" rotate="0" />
<ReactRandomSquaresAvatar height="200" width="200" rotate="80" />
```

## Credits

Inspired by this codepen

[http://codepen.io/richardj/pen/oxvrwr](http://codepen.io/richardj/pen/oxvrwr) by @richardj

## License

MIT

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
