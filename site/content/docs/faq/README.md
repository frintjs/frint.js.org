---
title: FAQ
sidebarPartial: docsSidebar
---

# FAQ

<!-- MarkdownTOC depth=1 autolink=true bracket=round -->

- [Do I need to learn RxJS to use FrintJS?](#do-i-need-to-learn-rxjs-to-use-frintjs)
- [Is FrintJS a replacement for React?](#is-frintjs-a-replacement-for-react)
- [Can I use FrintJS only with React?](#can-i-use-frintjs-only-with-react)
- [Is FrintJS a Redux alternative?](#is-frintjs-a-redux-alternative)
- [Can I use Redux with FrintJS?](#can-i-use-redux-with-frintjs)

<!-- /MarkdownTOC -->

## Do I need to learn RxJS to use FrintJS?

Understanding the [basic concepts](../../guides/observables) would really help. We don't expect you to learn everything about [RxJS](http://reactivex.io/rxjs/), but understanding the asynchronous nature of Observables and that they support emitting multiple values over time will help you use FrintJS more efficiently.

To make it easier for beginners, we even ship helper functions like `streamProps` from our `frint-react` package.

## Is FrintJS a replacement for React?

The package `frint` itself has nothing to do with rendering. In fact, the core of the framework is environment agnostic, and can run in CLI, browser or even server.

The core's main responsibilities include:

* Handling [providers](../../guides/providers) (dependency injection)
* Registration of apps
* Inter-app communication

It is only with additional packages like `frint-react` that we connect FrintJS with [React](https://reactjs.org/).

## Can I use FrintJS only with React?

FrintJS is rendering library agnostic. The core is not built with any specific rendering library in mind. We do support React officially, because we are users of React ourselves, but it can be easily connected to almost any other reactive rendering library.

For example, there is [`frint-vue`](https://github.com/frintjs/frint-vue) for using FrintJS with [Vue.js](https://vuejs.org/).

## Is FrintJS a Redux alternative?

[Redux](http://redux.js.org/) is purely for state management. While FrintJS is mostly concerned with structuring your app with providers (dependencies).

We do have a package called `frint-store`, which is an implementation of Redux (with less features) using similar API using RxJS. But it is never required for you to use any specific state management library to use FrintJS.

You are free to use whatever you like for state management.

## Can I use Redux with FrintJS?

Of course you can! It is a matter of only setting your Redux store as a provider in your App:

```js
import { createApp } from 'frint';
import { createStore } from 'redux';

function counterReducer(state, action) {
  // handle action here
  return state;
}

const store = createStore(counterReducer);

const App = createApp({
  name: 'MyApp',
  providers: [
    {
      name: 'store',
      useValue: store,
    }
  ],
});
```

Since we have our own higher-order component (HoC) coming from `frint-react`, you stream the state from your Redux store and also dispatch actions like this:

```js
import React from 'react';
import { Observable } from 'rxjs';
import { observe, streamProps } from 'frint-react'; // HoC and helper

import {
  incrementCounter,
  decrementCounter
} from '../actions/counter'; // Redux action creators

function MyComponent(props) {
  return (
    <div>
      <p>Counter: {props.counter}</p>

      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
}

export default observe(function (app) {
  const store = app.get('store');

  // create an Observable of state from the Redux store
  const state$ = new Observable(function (observer) {
    // immediately emit the current known state
    observer.next(store.getState());

    // emit state upon changes
    const cancelListener = store.subscribe(function () {
      observer.next(store.getState());
    });

    // cancel listener when Observable is unsubscribed
    return function unsubscribe() {
      cancelListener();
    };
  });

  return streamProps()
    // set state
    .set(
      state$,
      state => ({ counter: state.counter.value })
    )

    // set dispatchable action creators
    .setDispatch({
      increment: incrementCounter,
      decrement: decrementCounter,
    }, store)

    // generate a combined Observable
    .get$();
})(MyComponent);
```

The generation of `state$` stream from a Redux store can also be moved to a provider, so you don't have to do it for every component accessing the state.
