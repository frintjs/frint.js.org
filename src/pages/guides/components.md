---
title: Components
path: "/guides/components"
---

# Components

<!-- MarkdownTOC depth=1 autolink=true bracket=round -->

- [What is a Component?](#what-is-a-component)
- [How to create a component?](#how-to-create-a-component)
- [Assigning your root component to App](#assigning-your-root-component-to-app)
- [Rendering your App](#rendering-your-app)

<!-- /MarkdownTOC -->

## What is a Component?

A component can be any function that renders your view. We use [React](https://facebook.github.io/react/) for creating our Components, and support it officially in frint with the `frint-react` package.

We do have support for [Vue.js](https://github.com/frintjs/frint-vue), [Preact](https://github.com/frintjs/frint-preact) and [React Native](https://github.com/frintjs/frint-react-native) too via additional packages. But we are going to stick to React for this guide.

## How to create a component?

With React:

```js
import React from 'react';

function MyComponent() {
  return <p>Hello World</p>;
}
```

## Assigning your root component to App

We can do it as a provider, with a special reserved name called `component`:

```js
import { createApp } from 'frint';

const App = createApp({
  name: 'MyApp',
  providers: [
    {
      name: 'component',
      useValue: MyComponent
    }
  ]
});
```

## Rendering your App

Now that you have an App with a Component, it can be rendered to DOM:

```js
import { render } from 'frint-react';

const app = new App();
render(app, document.getElementById('root'));
```

The code above assumes your HTML page markup looks like this:

```html
<!DOCTYPE html>
<html>
  <body>
    <div id="root"></div>
  </body>
</html>
```
