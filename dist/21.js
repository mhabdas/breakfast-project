(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{190:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l,r=function(){function e(e,t){for(var n=0;n<t.length;n++){var l=t[n];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(t,n,l){return n&&e(t.prototype,n),l&&e(t,l),t}}(),o=n(0),a=(l=o)&&l.__esModule?l:{default:l};function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var u=a.default.lazy(function(){return n.e(19).then(n.t.bind(null,23,7))}),c=a.default.lazy(function(){return Promise.all([n.e(1),n.e(2)]).then(n.t.bind(null,85,7))}),f=a.default.lazy(function(){return Promise.all([n.e(0),n.e(9)]).then(n.t.bind(null,218,7))}),s=a.default.lazy(function(){return Promise.all([n.e(0),n.e(8)]).then(n.t.bind(null,354,7))}),d=function(e){function t(){var e,n,l;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,o=Array(r),a=0;a<r;a++)o[a]=arguments[a];return n=l=i(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(o))),l.state={signIn:!1,signUp:!1},l.toggleModal=function(e){l.setState(function(t){return function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}({},e,!t[e])})},i(l,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Component),r(t,[{key:"render",value:function(){var e=this,t=this.state,n=t.signUp,l=t.signIn;return a.default.createElement("div",null,a.default.createElement(o.Suspense,{fallback:a.default.createElement("div",null)},a.default.createElement(u,{large:!0,action:function(){return e.toggleModal("signIn")},title:"Sign in"}),a.default.createElement(u,{large:!0,action:function(){return e.toggleModal("signUp")},title:"Sign up"}),a.default.createElement(c,{visible:l,title:"Sign in",body:a.default.createElement(s,null),footer:a.default.createElement("div",null,a.default.createElement(u,{title:"Submit",action:"submit"}),a.default.createElement(u,{title:"Close",action:function(){return e.toggleModal("signIn")}}))}),a.default.createElement(c,{visible:n,title:"Sign up",body:a.default.createElement(f,null),footer:a.default.createElement("div",null,a.default.createElement(u,{title:"Close",action:function(){return e.toggleModal("signUp")}}))})))}}]),t}();t.default=d}}]);
//# sourceMappingURL=21.js.map