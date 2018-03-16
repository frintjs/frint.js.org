webpackJsonp([0x7733ec7aff49],{414:function(t,r){t.exports={data:{markdownRemark:{html:'<h1 id="frint"><a href="#frint" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>frint</h1>\n<p><a href="https://www.npmjs.com/package/frint"><img src="https://img.shields.io/npm/v/frint.svg" alt="npm"></a>\n<a href="http://travis-ci.org/frintjs/frint"><img src="https://img.shields.io/travis/frintjs/frint/master.svg" alt="Build Status"></a>\n<a href="https://codecov.io/gh/frintjs/frint"><img src="https://codecov.io/gh/frintjs/frint/branch/master/graph/badge.svg" alt="codecov"></a>\n<a href="https://nodesecurity.io/orgs/travix-international-bv/projects/a1b03b99-d210-41f8-88c5-44313d27ab6f"><img src="https://nodesecurity.io/orgs/travix-international-bv/projects/a1b03b99-d210-41f8-88c5-44313d27ab6f/badge" alt="NSP Status"></a>\n<a href="https://gitter.im/frintjs/frint"><img src="https://badges.gitter.im/frintjs/frint.svg" alt="Join the chat at https://gitter.im/frintjs/frint"></a>\n<a href="https://greenkeeper.io/"><img src="https://badges.greenkeeper.io/frintjs/frint.svg" alt="Greenkeeper"></a></p>\n<blockquote>\n<p>The modular JavaScript framework</p>\n</blockquote>\n<p>For documentation, visit <a href="https://frint.js.org">https://frint.js.org</a>.</p>\n<p>Key characteristics and features include:</p>\n<ul>\n<li>Gives your applications a <strong>structure</strong></li>\n<li><strong>Environment</strong> agnostic (runs in browser, server, and CLI)</li>\n<li><strong>Rendering</strong> library agnostic (integrates with React, Vue, and Preact)</li>\n<li><strong>Composable</strong> with multiple packages as needed</li>\n<li>Each package is focused on doing <strong>one thing</strong> only and doing it well</li>\n<li><strong>Modular</strong> architecture with Apps</li>\n<li>Embraces <strong>reactive programming</strong> with RxJS</li>\n<li><strong>Progressive</strong> and easy to adopt in existing applications</li>\n</ul>\n<p>This project adheres to the Contributor Covenant code of conduct. By participating, you are expected to uphold this code.\nPlease report unacceptable behavior to frintjs-conduct@googlegroups.com.</p>\n<h2 id="quick-start"><a href="#quick-start" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Quick start</h2>\n<p>Install <a href="https://frint.js.org/docs/packages/frint-cli/"><code>frint-cli</code></a>:</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>$ npm install -g frint-cli</code></pre>\n      </div>\n<p>Initialize an example app:</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>$ frint new my-directory --example kitchensink</code></pre>\n      </div>\n<p>Now you can install all the dependencies, and start the application:</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>$ cd my-directory\n$ npm install\n$ npm start</code></pre>\n      </div>\n<p>Find more examples <a href="https://github.com/frintjs/frint/tree/master/examples">here</a>.</p>\n<h2 id="packages"><a href="#packages" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Packages</h2>\n<p>The framework is a collection of these packages, which can be composed together on demand:</p>\n<table>\n<thead>\n<tr>\n<th>Package</th>\n<th>Status</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><a href="https://frint.js.org/docs/packages/frint">frint</a></td>\n<td><a href="https://npmjs.com/package/frint"><img src="https://img.shields.io/npm/v/frint.svg" alt="frint-status"></a></td>\n<td>Base for creating Apps</td>\n</tr>\n<tr>\n<td><a href="https://frint.js.org/docs/packages/frint-store">frint-store</a></td>\n<td><a href="https://npmjs.com/package/frint-store"><img src="https://img.shields.io/npm/v/frint-store.svg" alt="frint-store-status"></a></td>\n<td>State management with reactive stores</td>\n</tr>\n<tr>\n<td><a href="https://frint.js.org/docs/packages/frint-data">frint-data</a></td>\n<td><a href="https://npmjs.com/package/frint-data"><img src="https://img.shields.io/npm/v/frint-data.svg" alt="frint-data-status"></a></td>\n<td>Reactive data modelling</td>\n</tr>\n<tr>\n<td><a href="https://frint.js.org/docs/packages/frint-react">frint-react</a></td>\n<td><a href="https://npmjs.com/package/frint-react"><img src="https://img.shields.io/npm/v/frint-react.svg" alt="frint-react-status"></a></td>\n<td>React.js integration</td>\n</tr>\n<tr>\n<td><a href="https://frint.js.org/docs/packages/frint-react-server">frint-react-server</a></td>\n<td><a href="https://npmjs.com/package/frint-react-server"><img src="https://img.shields.io/npm/v/frint-react-server.svg" alt="frint-react-server-status"></a></td>\n<td>Server-side rendering of Apps</td>\n</tr>\n<tr>\n<td><a href="https://frint.js.org/docs/packages/frint-router">frint-router</a></td>\n<td><a href="https://npmjs.com/package/frint-router"><img src="https://img.shields.io/npm/v/frint-router.svg" alt="frint-router-status"></a></td>\n<td>Router services for building Single Page Applications</td>\n</tr>\n<tr>\n<td><a href="https://frint.js.org/docs/packages/frint-router-react">frint-router-react</a></td>\n<td><a href="https://npmjs.com/package/frint-router-react"><img src="https://img.shields.io/npm/v/frint-router-react.svg" alt="frint-router-react-status"></a></td>\n<td>React components for building SPAs</td>\n</tr>\n<tr>\n<td><a href="https://frint.js.org/docs/packages/frint-cli">frint-cli</a></td>\n<td><a href="https://npmjs.com/package/frint-cli"><img src="https://img.shields.io/npm/v/frint-cli.svg" alt="frint-cli-status"></a></td>\n<td>CLI runner</td>\n</tr>\n<tr>\n<td><a href="https://frint.js.org/docs/packages/frint-model">frint-model</a></td>\n<td><a href="https://npmjs.com/package/frint-model"><img src="https://img.shields.io/badge/status-deprecated-orange.svg" alt="frint-model-status"></a></td>\n<td>Use \n<code>frint-data</code>\n instead</td>\n</tr>\n</tbody>\n</table>\n<h3 id="for-library-developers"><a href="#for-library-developers" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>For library developers</h3>\n<p>These packages enable you to create packages integrating FrintJS with other rendering libraries:</p>\n<ul>\n<li><a href="https://frint.js.org/docs/packages/frint-component-utils">frint-component-utils</a>: Utils for reactive Components</li>\n<li><a href="https://frint.js.org/docs/packages/frint-component-handlers">frint-component-handlers</a>: Handlers for integrating with other rendering libraries</li>\n<li><a href="https://frint.js.org/docs/packages/frint-router-component-handlers">frint-router-component-handlers</a>: Handlers for integrating <code>frint-router</code> with other rendering libraries</li>\n</ul>\n<h3 id="internally-used"><a href="#internally-used" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Internally used</h3>\n<ul>\n<li><a href="https://frint.js.org/docs/packages/frint-test-utils">frint-test-utils</a>: Internally used test utilities</li>\n<li><a href="https://frint.js.org/docs/packages/frint-config">frint-config</a>: Common config for your Apps</li>\n<li><a href="https://frint.js.org/docs/packages/frint-compat">frint-compat</a>: Backwards compatibility for older versions</li>\n</ul>\n<h2 id="community-projects"><a href="#community-projects" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Community projects</h2>\n<ul>\n<li><a href="https://github.com/frintjs/frint-vue">frint-vue</a>: Vue.js integration</li>\n<li><a href="https://github.com/frintjs/frint-react-native">frint-react-native</a>: React Native integration</li>\n</ul>\n<h2 id="license"><a href="#license" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>License</h2>\n<p>MIT © <a href="https://github.com/frintjs/frint/graphs/contributors">FrintJS Authors</a> and <a href="http://travix.com">Travix International</a></p>',frontmatter:{path:"/docs",title:"Documentation",importFromGitHub:"frintjs/frint/master/README.md"}}},pathContext:{}}}});
//# sourceMappingURL=path---docs-21829f1a60aa538d52c6.js.map