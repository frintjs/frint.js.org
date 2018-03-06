---
title: Higher-Order Components
path: "/guides/higher-order-components"
---

# Higher Order Components (HOCs)

<!-- MarkdownTOC depth=2 autolink=true bracket=round -->

- [What is an HOC?](#what-is-an-hoc)
- [How does it work with Frint?](#how-does-it-work-with-frint)
  - [Dependencies](#dependencies)
  - [Base component](#base-component)
  - [App](#app)
  - [Observed component](#observed-component)
  - [Render](#render)

<!-- /MarkdownTOC -->

## What is an HOC?

[React](https://facebook.github.io/react/) has a very detailed documentation on this topic [here](https://facebook.github.io/react/docs/higher-order-components.html).

In short:

> A higher-order component is a function that takes a component and returns a new component.

## How does it work with Frint?

In our `frint-react` package, we expose an `observe` function which gives us an HOC.

### Dependencies

Install the dependencies first:

```
$ npm install --save rxjs react react-dom frint frint-react
```

### Base component

Now let's say, we have a basic React component:

```js
// components/Root.js
import React from 'react';

function MyComponent(props) {
  return (
    <p>Name: {props.name}</p>
  );
}

export default MyComponent;
```

The component just renders a name, which is given to it as props.

### App

And the App definition happens to looks like this:

```js
// app/index.js
import { createApp } from 'frint';

import Root from '../components/Root';

export default createApp({
  name: 'MyAppNameHere',
  providers: [
    {
      name: 'component',
      useValue: Root
    }
  ]
})
```

### Observed component

But we want to inject the App's name to the component, and we could easily do that using `observe`:

```js
// components/Root.js
import { observe } from 'frint-react';

function MyComponent(props) {
  return (
    <p>Name: {props.name}</p>
  );
}

export default observe(function (app) {
  // `app` is our App's instance

  // return a props-compatible object from here
  return {
    name: app.getName() // `MyAppNameHere`
  };
})(MyComponent);
```

Now your stateless component will receive a prop `appName` with the value `MyAppNameHere`.

You can also stream props (that change over time) expressed with an RxJS Observable. Imagine, you want to pass an `interval` prop that updates every second. This can be done as follows:

```js
import React from 'react';
import { observe } from 'frint-react';
import { interval } from 'rxjs/observable/interval';
import { map } from 'rxjs/operators/map';

function MyComponent(props) {
  // `props.interval` is an integer that's incrementing every second
}

export default observe(function (app) {
  // will keep emitting an object with this structure:
  // `{ interval: x }` where `x` is an integer
  const interval$ = interval(1000).pipe(
    map(x => ({ interval: x }))
  );

  return interval$;
})(MyComponent);
```

Now `MyComponent` will keep re-rendering as it keeps receiving new props object where the `interval` key increments every second.

### Render

Now when your App gets rendered, your Root component would show your App's name:

```js
// index.js
import { render } from 'frint-react';

import App from './app';

const app = new App();
render(app, document.getElementById('root'));
```
