webpackJsonp([35783957827783],{173:function(e,t,a){!function(t,a){e.exports=a()}(this,function(){"use strict";var e={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},t={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},a=Object.defineProperty,l=Object.getOwnPropertyNames,n=Object.getOwnPropertySymbols,r=Object.getOwnPropertyDescriptor,c=Object.getPrototypeOf,o=c&&c(Object);return function i(s,u,d){if("string"!=typeof u){if(o){var f=c(u);f&&f!==o&&i(s,f,d)}var m=l(u);n&&(m=m.concat(n(u)));for(var p=0;p<m.length;++p){var h=m[p];if(!(e[h]||t[h]||d&&d[h])){var g=r(u,h);try{a(s,h,g)}catch(e){}}}return s}return s}})},74:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var n=a(4),r=l(n),c=a(48),o=l(c),i=a(75),s=l(i),u=function(){return r.default.createElement("div",{className:"container"},r.default.createElement("div",{className:"nav-left"},r.default.createElement(o.default,{activeClassName:"is-active",className:"nav-item brand",to:"/"},r.default.createElement("img",{alt:"Frint",className:"dark",src:"/img/frint-logo-7a7a7a.png"}),r.default.createElement("img",{alt:"Frint",className:"light",src:"/img/frint-logo-fff.png"})),r.default.createElement(o.default,{activeClassName:"is-active",className:"nav-item is-tab",to:"/docs"},"Documentation"),r.default.createElement("a",{className:"nav-item is-tab",href:"https://medium.com/frintjs"},"Blog"),r.default.createElement(o.default,{activeClassName:"is-active",className:"nav-item is-tab",to:"/repl"},"REPL"),r.default.createElement(o.default,{activeClassName:"is-active",className:"nav-item is-tab",to:"/about"},"About")),r.default.createElement("div",{className:"nav-right"},r.default.createElement("div",{className:"field nav-item"},r.default.createElement(s.default,null))))};t.default=u,e.exports=t.default},75:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var o=a(4),i=l(o),s=function(e){function t(){n(this,t);var a=r(this,e.call(this));return a.state={enabled:!0},a}return c(t,e),t.prototype.conponentWillMount=function(){"undefined"!=typeof window&&"undefined"!=typeof window.docsearch||(console.warn("Search has failed to load and now is being disabled"),this.setState({enabled:!1}))},t.prototype.componentDidMount=function(){this.state.enabled&&window.docsearch({apiKey:"897a7279c47670a5c4b474ee84350387",indexName:"frint.js",inputSelector:"#doc-search-text-box",debug:!1})},t.prototype.render=function(){var e=this.state.enabled;return e?i.default.createElement("p",{className:"control has-icon"},i.default.createElement("input",{className:"input",id:"doc-search-text-box",placeholder:"Search...",type:"text"}),i.default.createElement("span",{className:"icon is-small"},i.default.createElement("i",{className:"fa fa-search"}))):null},t}(o.Component);t.default=s,e.exports=t.default},214:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var n=a(4),r=l(n),c=a(74),o=l(c),i=function(){return r.default.createElement("div",null,r.default.createElement("section",{className:"hero is-primary is-large"},r.default.createElement("div",{className:"hero-head"},r.default.createElement("header",{className:"nav"},r.default.createElement(o.default,null),r.default.createElement("a",{"aria-label":"View source on Github",className:"github-corner",href:"https://github.com/frintjs/frint"},r.default.createElement("svg",{"aria-hidden":"true",height:"80",style:{fill:"#151513",color:"#fff",position:"absolute",top:0,border:0,right:0},viewBox:"0 0 250 250",width:"80"},r.default.createElement("path",{d:"M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"}),r.default.createElement("path",{className:"octo-arm",d:"M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2",fill:"currentColor",style:{transformOrigin:"130px 106px"}}),r.default.createElement("path",{className:"octo-body",d:"M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z",fill:"currentColor"}))))),r.default.createElement("div",{className:"hero-body"},r.default.createElement("div",{className:"container has-text-centered"},r.default.createElement("h1",{className:"title"},"Modular ",r.default.createElement("span",null,"JavaScript")," framework",r.default.createElement("br",null),"for building ",r.default.createElement("span",null,"Scalable")," & ",r.default.createElement("span",null,"Reactive")," applications."),r.default.createElement("div",null,r.default.createElement("a",{className:"button is-primary is-medium",href:"/docs"},"Learn more"),r.default.createElement("a",{className:"button is-transparent is-medium",href:"http://github.com/frintjs/frint"},"GitHub"))))),r.default.createElement("section",{className:"section about"},r.default.createElement("div",{className:"container"},r.default.createElement("div",{className:"columns"},r.default.createElement("div",{className:"column"},r.default.createElement("img",{alt:"Modular",src:"/img/js-logo.png"}),r.default.createElement("h3",null,"Modular & Extensible"),r.default.createElement("p",null,"The whole framework is split into multiple independent packages. You get to compose your Apps with only the packages your need.")),r.default.createElement("div",{className:"column"},r.default.createElement("img",{alt:"Component",src:"/img/react-logo.svg"}),r.default.createElement("h3",null,"Component-Based"),r.default.createElement("p",null,"You can roll your own Component based view libraries with Frint. We have official support for React.")),r.default.createElement("div",{className:"column"},r.default.createElement("img",{alt:"Reactive",src:"/img/rxjs-logo.png"}),r.default.createElement("h3",null,"Reactive Development"),r.default.createElement("p",null,"We embraced the power of reactive programming everywhere, including app-to-app communication for ease of development."))))),r.default.createElement("section",{className:"section apps"},r.default.createElement("div",{className:"container"},r.default.createElement("h2",null,"Split your application across multiple apps"),r.default.createElement("img",{alt:"apps",src:"/img/frint-apps.png"}),r.default.createElement("p",null,"Learn how to write ",r.default.createElement("a",{href:"/guides/apps"}," Root Apps & Child Apps "),"targeting different ",r.default.createElement("a",{href:"/guides/regions"},"Regions"),"."))),r.default.createElement("section",{className:"section regions"},r.default.createElement("div",{className:"container"},r.default.createElement("h2",null,"Load apps coming in from separate bundles"),r.default.createElement("img",{alt:"apps",src:"/img/frint-code-splitting.png"}),r.default.createElement("p",null,"Learn more about",r.default.createElement("a",{href:"/guides/apps"}," Apps")," and",r.default.createElement("a",{href:"/guides/regions"}," Regions"),", and",r.default.createElement("a",{href:"/guides/code-splitting"}," Code Splitting"),"."))))};t.default=i,e.exports=t.default}});
//# sourceMappingURL=component---src-pages-index-js-6ec044e1e5f2e5977fd2.js.map