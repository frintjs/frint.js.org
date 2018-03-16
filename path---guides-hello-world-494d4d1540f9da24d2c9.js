webpackJsonp([0x8f77d5857b34],{419:function(n,a){n.exports={data:{markdownRemark:{html:'<h1 id="hello-world"><a href="#hello-world" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Hello World</h1>\n<!-- MarkdownTOC depth=1 autolink=true bracket=round -->\n<ul>\n<li><a href="#initialize-a-new-npm-package">Initialize a new npm package</a></li>\n<li><a href="#dependencies">Dependencies</a></li>\n<li><a href="#transpilers">Transpilers</a></li>\n<li><a href="#directory-structure">Directory structure</a></li>\n<li><a href="#app">App</a></li>\n<li><a href="#component">Component</a></li>\n<li><a href="#render">Render</a></li>\n<li><a href="#build">Build</a></li>\n</ul>\n<!-- /MarkdownTOC -->\n<p>Step by step guide for creating your first App.</p>\n<h2 id="initialize-a-new-npm-package"><a href="#initialize-a-new-npm-package" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Initialize a new npm package</h2>\n<p>Before anything, you need to initialize a new npm package for your App:</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>$ npm init</code></pre>\n      </div>\n<p>Fill in the details, like your App\'s name, in the CLI prompts.</p>\n<h2 id="dependencies"><a href="#dependencies" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Dependencies</h2>\n<p>Install the minimum dependencies required to get your App up and running, :</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>$ npm install --save frint frint-react react react-dom prop-types</code></pre>\n      </div>\n<p>And also the the build tools:</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>$ npm install --save-dev babel-core babel-preset-travix webpack babel-loader</code></pre>\n      </div>\n<h2 id="transpilers"><a href="#transpilers" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Transpilers</h2>\n<p>We use Babel for transpiling ES6/JSX code to browser compatible ES5. Since we already ship our own Babel preset, all you need to do is create a new <code>.babelrc</code> file in your root directory with this content:</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>{\n  "presets": [\n    "travix"\n  ]\n}</code></pre>\n      </div>\n<h2 id="directory-structure"><a href="#directory-structure" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Directory structure</h2>\n<p>We try to follow a convention for our file structure in Apps. A simple App\'s directory tree would look like this:</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>├── app/\n│   ├── index.js\n├── components/\n│   ├── Root.js\n├── .babelrc\n├── index.js\n├── webpack.config.js\n└── package.json</code></pre>\n      </div>\n<h2 id="app"><a href="#app" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>App</h2>\n<p>Creating a new App class is pretty straightforward. You would be required to create a new file at <code>app/index.js</code> with the following content:</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token comment">// app/index.js</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'frint\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">import</span> RootComponent <span class="token keyword">from</span> <span class="token string">\'../components/Root\'</span><span class="token punctuation">;</span> <span class="token comment">// we still need to write this file</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">createApp</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  name<span class="token punctuation">:</span> <span class="token string">\'MyAppName\'</span><span class="token punctuation">,</span>\n\n  providers<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n    <span class="token punctuation">{</span>\n      name<span class="token punctuation">:</span> <span class="token string">\'component\'</span><span class="token punctuation">,</span>\n      useValue<span class="token punctuation">:</span> RootComponent\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">]</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<h2 id="component"><a href="#component" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Component</h2>\n<p>Previously, we saw that App requires a Component for rendering. We will write our entry-level Component in <code>components/Root.js</code>:</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token comment">// components/Root.js</span>\n<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">\'react\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Root</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n    <span class="token operator">&lt;</span>p<span class="token operator">></span>Hello World<span class="token operator">!</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>Basically, you import the <code>createApp</code> function from our <code>frint</code> package, and define your App by giving it a name, and also the Component that it needs to render.</p>\n<h3 id="observed-component"><a href="#observed-component" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Observed component</h3>\n<p>You can also use our higher-order component <code>observe</code> coming from <code>frint-react</code> to access the <code>app</code> instance, and generate the props for your component (which can live anywhere in the components tree):</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token comment">// components/Root.js</span>\n<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">\'react\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> observe <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'frint-react\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">function</span> <span class="token function">Root</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token comment">// `props.appName`: name of your App (`MyAppName`)</span>\n  <span class="token comment">// return JSX</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">observe</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span>app<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token comment">// `app` is your Root App\'s instance here</span>\n\n  <span class="token comment">// the object you return from here,</span>\n  <span class="token comment">// is going to be the props of your Root component</span>\n  <span class="token keyword">return</span> <span class="token punctuation">{</span>\n    appName<span class="token punctuation">:</span> app<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span>Root<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>You can also stream the props expressed as an Observable, that will keep passing new updated props to your Component:</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">\'react\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> observe <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'frint-react\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> Observable <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'rxjs\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">function</span> <span class="token function">Root</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token comment">// JSX</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">observe</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span>app<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> interval$ <span class="token operator">=</span> Observable<span class="token punctuation">.</span><span class="token function">interval</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token comment">// return an Observable,</span>\n  <span class="token comment">// that emits a props-compatible object over time</span>\n  <span class="token keyword">return</span> interval$\n    <span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>x <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span> interval<span class="token punctuation">:</span> x <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span>Root<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>Now your base component will be receiving an <code>interval</code> prop that keeps incrementing every second.</p>\n<h2 id="render"><a href="#render" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Render</h2>\n<p>Now that we have our <code>App</code> defined, we can import and instantiate it, and then render it to the DOM:</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token comment">// index.js</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> render <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'frint-react\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">\'./app\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token function">render</span><span class="token punctuation">(</span>app<span class="token punctuation">,</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">\'root\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>The code above assumes, you have an element in your webpage with ID <code>root</code>:</p>\n<div class="gatsby-highlight">\n      <pre class="language-html"><code><span class="token comment">&lt;!-- ./build/index.html --></span>\n<span class="token doctype">&lt;!DOCTYPE html></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>root<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>./bundle.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script language-javascript"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>\n</code></pre>\n      </div>\n<h2 id="build"><a href="#build" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Build</h2>\n<p>We use Webpack for bundling Apps, and to do that, we require a <code>webpack.config.js</code> file in root directory:</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  entry<span class="token punctuation">:</span> __dirname <span class="token operator">+</span> <span class="token string">\'/index.js\'</span><span class="token punctuation">,</span>\n  output<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    path<span class="token punctuation">:</span> __dirname <span class="token operator">+</span> <span class="token string">\'/build\'</span><span class="token punctuation">,</span>\n    filename<span class="token punctuation">:</span> <span class="token string">\'bundle.js\'</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  module<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    rules<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span>\n        test<span class="token punctuation">:</span> <span class="token regex">/\\.(js)$/</span><span class="token punctuation">,</span>\n        loader<span class="token punctuation">:</span> <span class="token string">\'babel-loader\'</span><span class="token punctuation">,</span>\n        query<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n          presets<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n            <span class="token string">\'travix\'</span>\n          <span class="token punctuation">]</span>\n        <span class="token punctuation">}</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">]</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>The build can now be performed with this command:</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>$ ./node_modules/.bin/webpack --config ./webpack.config.js</code></pre>\n      </div>\n<p>Doing so would generate a new bundle at <code>./build/bundle.js</code>.</p>\n<p>Open your <code>index.html</code> file in the browser, and you would see <code>Hello World</code>.</p>',frontmatter:{path:"/guides/hello-world",title:"Hello World",importFromGitHub:null}}},pathContext:{}}}});
//# sourceMappingURL=path---guides-hello-world-494d4d1540f9da24d2c9.js.map