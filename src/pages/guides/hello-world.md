---
title: Hello World
path: "/guides/hello-world"
---

# Hello World

<!-- MarkdownTOC depth=1 autolink=true bracket=round -->

- [Initialize a new npm package](#initialize-a-new-npm-package)
- [Dependencies](#dependencies)
- [Transpilers](#transpilers)
- [Directory structure](#directory-structure)
- [App](#app)
- [Component](#component)
- [Render](#render)
- [Build](#build)

<!-- /MarkdownTOC -->

Step by step guide for creating your first App.

## Initialize a new npm package

Before anything, you need to initialize a new npm package for your App:

```
$ npm init
```

Fill in the details, like your App's name, in the CLI prompts.

## Dependencies

Install the minimum dependencies required to get your App up and running, :

```
$ npm install --save frint frint-react react react-dom prop-types
```

And also the the build tools:

```
$ npm install --save-dev babel-core babel-preset-travix webpack babel-loader
```

## Transpilers

We use Babel for transpiling ES6/JSX code to browser compatible ES5. Since we already ship our own Babel preset, all you need to do is create a new `.babelrc` file in your root directory with this content:

```
{
  "presets": [
    "travix"
  ]
}
```

## Directory structure

We try to follow a convention for our file structure in Apps. A simple App's directory tree would look like this:

```
├── app/
│   ├── index.js
├── components/
│   ├── Root.js
├── .babelrc
├── index.js
├── webpack.config.js
└── package.json
```

## App

Creating a new App class is pretty straightforward. You would be required to create a new file at `app/index.js` with the following content:

```js
// app/index.js
import { createApp } from 'frint';

import RootComponent from '../components/Root'; // we still need to write this file

export default createApp({
  name: 'MyAppName',

  providers: [
    {
      name: 'component',
      useValue: RootComponent
    }
  ]
});
```

## Component

Previously, we saw that App requires a Component for rendering. We will write our entry-level Component in `components/Root.js`:

```js
// components/Root.js
import React from 'react';

export default function Root() {
  return (
    <p>Hello World!</p>
  );
}
```

Basically, you import the `createApp` function from our `frint` package, and define your App by giving it a name, and also the Component that it needs to render.

### Observed component

You can also use our higher-order component `observe` coming from `frint-react` to access the `app` instance, and generate the props for your component (which can live anywhere in the components tree):

```js
// components/Root.js
import React from 'react';
import { observe } from 'frint-react';

function Root(props) {
  // `props.appName`: name of your App (`MyAppName`)
  // return JSX
}

export default observe(function (app) {
  // `app` is your Root App's instance here

  // the object you return from here,
  // is going to be the props of your Root component
  return {
    appName: app.getName(),
  };
})(Root);
```

You can also stream the props expressed as an Observable, that will keep passing new updated props to your Component:

```js
import React from 'react';
import { observe } from 'frint-react';
import { Observable } from 'rxjs';

function Root(props) {
  // JSX
}

export default observe(function (app) {
  const interval$ = Observable.interval(1000);

  // return an Observable,
  // that emits a props-compatible object over time
  return interval$
    .map(x => ({ interval: x }));
})(Root);
```

Now your base component will be receiving an `interval` prop that keeps incrementing every second.

## Render

Now that we have our `App` defined, we can import and instantiate it, and then render it to the DOM:

```js
// index.js
import { render } from 'frint-react';

import App from './app';

const app = new App();
render(app, document.getElementById('root'));
```

The code above assumes, you have an element in your webpage with ID `root`:

```html
<!-- ./build/index.html -->
<!DOCTYPE html>
<html>
  <body>
    <div id="root"></div>
    <script src="./bundle.js"></script>
  </body>
</html>
```

## Build

We use Webpack for bundling Apps, and to do that, we require a `webpack.config.js` file in root directory:

```js
module.exports = {
  entry: __dirname + '/index.js',
  output: {
    path: __dirname + '/build',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        loader: 'babel-loader',
        query: {
          presets: [
            'travix'
          ]
        }
      }
    ]
  },
};
```

The build can now be performed with this command:

```
$ ./node_modules/.bin/webpack --config ./webpack.config.js
```

Doing so would generate a new bundle at `./build/bundle.js`.

Open your `index.html` file in the browser, and you would see `Hello World`.
