---
title: FAQ
path: "/docs/faq"
---

# FAQ

<!-- MarkdownTOC depth=1 autolink=true bracket=round -->

- [What is the primary feature of FrintJS?](#what-is-the-primary-feature-of-frintjs)
- [Where can I use FrintJS?](#where-can-i-use-frintjs)
- [Do I need to learn RxJS to use FrintJS?](#do-i-need-to-learn-rxjs-to-use-frintjs)
- [Is FrintJS a replacement for React?](#is-frintjs-a-replacement-for-react)
- [Can I use FrintJS only with React?](#can-i-use-frintjs-only-with-react)
- [Is FrintJS a Redux alternative?](#is-frintjs-a-redux-alternative)
- [Can I use Redux with FrintJS?](#can-i-use-redux-with-frintjs)

<!-- /MarkdownTOC -->

## What is the primary feature of FrintJS?

The `frint` package primarily handles:

* Dependency injection (providers) in Apps
* Child App registrations

The core of the framework is intentionally kept as simple as possible, allowing other tools/packages to be built around it.

## Where can I use FrintJS?

The framework is evironment agnostic. You can run it in the browser, server or CLI (with Node.js).

## Do I need to learn RxJS to use FrintJS?

Understanding the [basic concepts](../../guides/observables) would really help. We don't expect you to learn everything about [RxJS](http://reactivex.io/rxjs/), but understanding the asynchronous nature of Observables and that they support emitting multiple values over time will help you use FrintJS more efficiently.

To make it easier for beginners, we even ship helper functions like `streamProps` from our `frint-react` package.

## Is FrintJS a replacement for React?

The package `frint` itself has nothing to do with rendering. In fact, the core of the framework is environment agnostic, and can run in CLI, browser or even server.

The core's primary responsibilities include:

* Handling [providers](../../guides/providers) (dependency injection)
* Registration of apps
* Inter-app communication

It is only with additional packages like `frint-react` that we connect FrintJS with [React](https://reactjs.org/).

## Can I use FrintJS only with React?

FrintJS is rendering library agnostic. The core is not built with any specific rendering library in mind. We do support React officially with `frint-react`, because we are users of React ourselves, but it can be easily connected to almost any other reactive rendering library.

For example, there is [`frint-vue`](https://github.com/frintjs/frint-vue) for using FrintJS with [Vue.js](https://vuejs.org/).

## Is FrintJS a Redux alternative?

[Redux](http://redux.js.org/) is purely for state management. While FrintJS is mostly concerned with structuring your app with providers (dependencies).

We do have a package called `frint-store`, which is an implementation of Redux (with less features) using similar API using RxJS. But it is never required for you to use any specific state management library to use FrintJS.

You are free to use whatever you like for state management.

## Can I use Redux with FrintJS?

Of course you can! It is a matter of only setting your Redux store as a provider in your App.

You can read more about the implementation details in this [blog post](https://medium.com/frintjs/using-frintjs-with-react-js-and-redux-823ad7cdbc02).
