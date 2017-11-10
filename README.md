# frint

[![Build Status](https://img.shields.io/travis/frintjs/frint.js.org/master.svg)](http://travis-ci.org/frintjs/frint.js.org)

> The FrintJS Website

For documentation, visit [https://frint.js.org](https://frint.js.org).

Issues can be submitted to the monorepo: https://github.com/frintjs/frint/issues.

## Installation

Clone the repository next to the monorepo directory:

```
├── frint/
└── frint.js.org/
```

This setup is only needed for accessing the packages' README files.

Now install the dependencies:

```
$ cd frint.js.org
$ npm install
```

### Developing the site

Run:

```
$ make site-serve
```

Once the local server is up and running, you can run a separate watcher to refresh the site as you work on the documentation:

```
$ make site-watch
```

### Publishing the site

Builds and deploys the site to GitHub Pages.

```
$ make site-publish
```

## License

MIT
