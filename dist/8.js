(window.webpackJsonp=window.webpackJsonp||[]).push([[8,19,22],{21:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.ButtonList=n.StyledButton=void 0;var r=c(["\n  border: 2px solid ",";\n  background-color: ",";\n  padding: 0.5rem;\n  margin: 0.25rem;\n  color: ",";\n  font-weight: 700;\n  cursor: pointer;\n  border-radius: 2px;\n  transition: background-color 1s;\n\n  a {\n    color: ",";\n    text-decoration: none;\n    width: 100%;\n    height: 100%;\n    &:hover {\n      color: white;\n    }\n  }\n\n  &:hover {\n    background-color: ",";\n    color: white;\n    a {\n      color: white;\n    }\n  }\n\n  ","\n"],["\n  border: 2px solid ",";\n  background-color: ",";\n  padding: 0.5rem;\n  margin: 0.25rem;\n  color: ",";\n  font-weight: 700;\n  cursor: pointer;\n  border-radius: 2px;\n  transition: background-color 1s;\n\n  a {\n    color: ",";\n    text-decoration: none;\n    width: 100%;\n    height: 100%;\n    &:hover {\n      color: white;\n    }\n  }\n\n  &:hover {\n    background-color: ",";\n    color: white;\n    a {\n      color: white;\n    }\n  }\n\n  ","\n"]),o=c(["\n      background-color: transparent;\n      border-color: ",";\n      color: ",";\n      font-size: 1rem;\n      height: 3rem;\n    "],["\n      background-color: transparent;\n      border-color: ",";\n      color: ",";\n      font-size: 1rem;\n      height: 3rem;\n    "]),a=c(["\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  padding-bottom: 1rem;\n"],["\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  padding-bottom: 1rem;\n"]),i=t(16),l=d(i),u=d(t(17));function d(e){return e&&e.__esModule?e:{default:e}}function c(e,n){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var s=l.default.button(r,u.default.dark,u.default.light,u.default.dark,u.default.accent,u.default.accent,function(e){return e.isLarge&&(0,i.css)(o,u.default.light,u.default.light)}),f=l.default.div(a);n.StyledButton=s,n.ButtonList=f},23:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},o=l(t(0)),a=l(t(12)),i=t(21);function l(e){return e&&e.__esModule?e:{default:e}}var u=function(e){var n=e.action,t=e.title,a=e.large,l=e.dataAttr;return o.default.createElement(i.StyledButton,r({},"string"==typeof n?{type:n}:{onClick:n},{isLarge:a,"data-attr":l}),t)};u.propTypes={action:a.default.func.isRequired,title:a.default.string.isRequired,large:a.default.bool,dataAttr:a.default.number},u.defaultProps={large:!1,dataAttr:void 0},n.default=u},354:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}(),o=t(0),a=d(o),i=d(t(12)),l=d(t(56)),u=t(59);function d(e){return e&&e.__esModule?e:{default:e}}function c(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}var s=function(e){function n(){var e,t,r;!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n);for(var o=arguments.length,a=Array(o),i=0;i<o;i++)a[i]=arguments[i];return t=r=c(this,(e=n.__proto__||Object.getPrototypeOf(n)).call.apply(e,[this].concat(a))),r.state={initialValues:{email:"",password:""}},r.fieldsConfig=[{type:"text",name:"email",placeholder:"Email"},{type:"password",name:"password",placeholder:"Password"}],c(r,t)}return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}(n,o.Component),r(n,[{key:"render",value:function(){var e=this.state.initialValues;return a.default.createElement(l.default,{initialValues:e,generateAxiosObject:this.generateAxiosObject,fields:this.fieldsConfig,validationSchema:u.signInSchema})}}]),n}();s.propTypes={initialValues:i.default.object},n.default=s},56:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=u(t(0)),o=t(131),a=u(t(12)),i=t(58),l=u(t(23));function u(e){return e&&e.__esModule?e:{default:e}}var d=function(e){var n=e.initialValues,t=e.firebaseAction,a=e.fields,u=e.validationSchema;return r.default.createElement(o.Formik,{initialValues:n,onSubmit:function(e,n){console.log(e),t(e).then(function(e){n.setSubmitting(!1),console.log(e.data)},function(e){n.setSubmitting(!1),n.setErrors(e.response.data.error),n.setStatus({msg:"Error"}),console.log(e.response.data.error)})},validationSchema:u},function(e){var n=e.values,t=e.handleChange,o=e.handleBlur,u=e.handleSubmit,d=e.errors,c=e.touched;return r.default.createElement(i.Form,{onSubmit:u},a.map(function(e){return r.default.createElement("div",{key:e.name},r.default.createElement(i.Input,{onChange:t,onBlur:o,value:n[e.name],type:e.type,name:e.name,placeholder:e.placeholder}),d[e.name]&&c[e.name]?r.default.createElement(i.Error,null,d[e.name]):null)}),r.default.createElement(l.default,{title:"Submit",action:"submit"}))})};d.propTypes={initialValues:a.default.object,url:a.default.string,firebaseAction:a.default.func,fields:a.default.arrayOf(a.default.object),validationSchema:a.default.object},n.default=d},58:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.Error=n.Input=n.Form=void 0;var r=d(["\n  width: 300px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin: 1rem 0;\n"],["\n  width: 300px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin: 1rem 0;\n"]),o=d(["\n  width: 300px;\n  height: 35px;\n  border: 2px solid ",";\n  background-color: #fff;\n  margin-bottom: 0.5rem;\n  padding: 0.25rem;\n  color: ",";\n  font-size: 1rem;\n  \n  &:focus {\n      border: 2px solid ",";\n      outline: none;\n  }\n"],["\n  width: 300px;\n  height: 35px;\n  border: 2px solid ",";\n  background-color: #fff;\n  margin-bottom: 0.5rem;\n  padding: 0.25rem;\n  color: ",";\n  font-size: 1rem;\n  \n  &:focus {\n      border: 2px solid ",";\n      outline: none;\n  }\n"]),a=d(["\n  font-size: 0.75rem;\n  color: ",";\n  margin-bottom: 0.5rem;\n"],["\n  font-size: 0.75rem;\n  color: ",";\n  margin-bottom: 0.5rem;\n"]),i=u(t(16)),l=u(t(17));function u(e){return e&&e.__esModule?e:{default:e}}function d(e,n){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var c=i.default.form(r),s=i.default.input(o,l.default.dark,l.default.dark,l.default.accent),f=i.default.div(a,l.default.accent);n.Form=c,n.Input=s,n.Error=f},59:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.signUpSchema=n.signInSchema=void 0;var r=function(e){if(e&&e.__esModule)return e;var n={};if(null!=e)for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(n[t]=e[t]);return n.default=e,n}(t(90));var o=r.object().shape({password:r.string().min(6,"Your password is too short!").required("This field is required!"),email:r.string().email("Your email is invalid!").required("This field is required!")}),a=r.object().shape({password:r.string().min(6,"Your password is too short!").required("This field is required!"),confirmPassword:r.string().oneOf([r.ref("password"),null],"Passwords must match"),email:r.string().email("Your email is invalid!").required("This field is required!")});n.signInSchema=o,n.signUpSchema=a}}]);
//# sourceMappingURL=8.js.map