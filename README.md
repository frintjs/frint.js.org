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
$ gatsby develop
```

This command will start a hot-reloading development environment accessible at localhost:8000.


### Building and testing the site

This command will build the website for generating static HTML and per-route JavaScript code bundles and the result will be on the public folder.

```
$ gatsby build
```
Then you can check the generated codes by running:

```
$ gatsby serve
```


### Publishing the site

Builds and deploys the site to GitHub Pages.

```
$ make site-publish
```

## License

MIT
