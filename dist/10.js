(window.webpackJsonp=window.webpackJsonp||[]).push([[10,18],{399:function(e,n,t){"use strict";t.r(n);var r=t(38),a=t.n(r),o=t(371),i=t.n(o),l=t(373),c=t(374);function u(){var e=s(["\n      background-color: transparent;\n      border-color: ",";\n      color: ",";\n      font-size: 1rem;\n      height: 3rem;\n    "]);return u=function(){return e},e}function d(){var e=s(["\n  border: 2px solid ",";\n  background-color: ",";\n  padding: 0.5rem;\n  margin: 0.25rem;\n  color: ",";\n  font-weight: 700;\n  cursor: pointer;\n  border-radius: 2px;\n  transition: background-color 1s;\n\n  a {\n    color: ",";\n    text-decoration: none;\n    width: 100%;\n    height: 100%;\n    &:hover {\n      color: white;\n    }\n  }\n\n  &:hover {\n    background-color: ",";\n    color: white;\n    a {\n      color: white;\n    }\n  }\n\n  ","\n"]);return d=function(){return e},e}function s(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var p=l.c.button(d(),c.b.dark,c.b.light,c.b.dark,c.b.accent,c.b.accent,function(e){return e.isLarge&&Object(l.b)(u(),c.b.light,c.b.light)});function f(){return(f=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}var b=function(e){var n=e.action,t=e.title,r=e.large,o=e.dataAttr;return a.a.createElement(p,f({},"string"==typeof n?{type:n}:{onClick:n},{isLarge:r,"data-attr":o}),t)};b.propTypes={action:i.a.oneOfType([i.a.func,i.a.string]).isRequired,title:i.a.string.isRequired,large:i.a.bool,dataAttr:i.a.number},b.defaultProps={large:!1,dataAttr:void 0};n.default=b},443:function(e,n,t){"use strict";var r=t(38),a=t.n(r),o=t(371),i=t.n(o),l=t(373),c=t(454),u=t.n(c);function d(){var e=p(["\n  background-color: whitesmoke;\n  border-radius: 5px;\n  max-width: 500px;\n  margin: 0 auto;\n  padding: 0.5rem 0.5rem 2rem 0.5rem;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  text-align: center;\n\n  h2 {\n    color: #ee6c4d;\n    text-align: center;\n    padding-bottom: 0.5rem;\n  }\n\n  h3 {\n    color: #3d5a80;\n    padding-bottom: 0.5rem;\n  }\n\n  p {\n    color: #3d5a80;\n    padding-bottom: 0.5rem;\n    max-width: 80%;\n    margin: 0 auto;\n\n    &:last-of-type {\n      font-size: 0.75rem;\n    }\n  }\n\n  img {\n    width: 80%;\n    border-radius: 5%;\n    opacity: 0.8;\n    padding-bottom: 0.5rem;\n  }\n"]);return d=function(){return e},e}function s(){var e=p(["\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  top: 0;\n  background-color: rgba(0, 0, 0, 0.7);\n  padding: calc(50px + 5.5rem) 50px 50px 50px;\n  z-index: 1;\n"]);return s=function(){return e},e}function p(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var f=l.c.div(s()),b=l.c.div(d()),m=function(e){var n=e.children;return e.visible&&a.a.createElement(f,null,a.a.createElement(u.a,{transitionName:"fade",transitionAppear:!0,transitionAppearTimeout:500,transitionEnter:!1,transitionLeave:!0,transitionLeaveTimeout:500},a.a.createElement(b,null,n)))};m.propTypes={children:i.a.oneOfType([i.a.arrayOf(i.a.node),i.a.node]).isRequired};var g=m,v=a.a.lazy(function(){return Promise.all([t.e(3),t.e(20)]).then(t.bind(null,719))}),h=function(e){var n=e.visible,t=e.title,r=e.body,o=e.footer,i=e.closeModal;return a.a.createElement(g,{visible:n},a.a.createElement(v,{closeModal:i}),a.a.createElement("h2",{style:{display:"flex",alignItems:"center"}},t),r,a.a.createElement("div",{className:"modal-footer"},o))};h.propTypes={visible:i.a.bool.isRequired,title:i.a.string.isRequired,body:i.a.node,footer:i.a.node,closeModal:i.a.func};n.a=h},720:function(e,n,t){"use strict";t.r(n);var r=t(38),a=t.n(r),o=t(399),i=t(443),l=t(371),c=t.n(l),u=function(e){var n=e.breakfastByCountry,t=e.visible,l=e.country,c=e.handleClose,u=n.breakfastName,d=n.description,s=n.img,p=n.attr,f=n.info,b=n.alt;return a.a.createElement(r.Suspense,{fallback:a.a.createElement("div",null)},a.a.createElement(i.a,{visible:t,title:l,closeModal:function(){return c()},body:a.a.createElement("div",null,a.a.createElement("h3",null,u,f),a.a.createElement("p",null,d),a.a.createElement("img",{src:s,alt:b}),a.a.createElement("p",null,p)),footer:a.a.createElement("div",null,a.a.createElement(o.default,{action:function(){return window.open("https://www.google.pl/search?q=".concat(u,"+recipe"))},title:"Take a challenge"}))}))};u.propTypes={breakfastByCountry:c.a.objectOf(c.a.string).isRequired,visible:c.a.bool.isRequired,country:c.a.string.isRequired,handleClose:c.a.func.isRequired},n.default=u}}]);
//# sourceMappingURL=10.js.map