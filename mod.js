// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var r,e=Object.defineProperty,n=Object.prototype,o=n.toString,u=n.__defineGetter__,i=n.__defineSetter__,c=n.__lookupGetter__,f=n.__lookupSetter__;r=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?e:function(t,r,e){var l,a,p,y;if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((a="value"in e)&&(c.call(t,r)||f.call(t,r)?(l=t.__proto__,t.__proto__=n,delete t[r],t[r]=e.value,t.__proto__=l):t[r]=e.value),p="get"in e,y="set"in e,a&&(p||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&u&&u.call(t,r,e.get),y&&i&&i.call(t,r,e.set),t};var l=r;function a(t,r,e){l(t,r,{configurable:!1,enumerable:!1,writable:!1,value:e})}function p(t){return"number"==typeof t}var y="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function b(){return y&&"symbol"==typeof Symbol.toStringTag}var s=Object.prototype.toString;var v=Object.prototype.hasOwnProperty;function d(t,r){return null!=t&&v.call(t,r)}var j="function"==typeof Symbol?Symbol.toStringTag:"";var _=b()?function(t){var r,e,n;if(null==t)return s.call(t);e=t[j],r=d(t,j);try{t[j]=void 0}catch(r){return s.call(t)}return n=s.call(t),r?t[j]=e:delete t[j],n}:function(t){return s.call(t)},g=Number,m=g.prototype.toString;var w=b();function O(t){return"object"==typeof t&&(t instanceof g||(w?function(t){try{return m.call(t),!0}catch(t){return!1}}(t):"[object Number]"===_(t)))}function h(t){return p(t)||O(t)}a(h,"isPrimitive",p),a(h,"isObject",O);var P=Number.POSITIVE_INFINITY,S=g.NEGATIVE_INFINITY,E=Math.floor;function I(t){return t<P&&t>S&&E(r=t)===r;var r}function T(t){return p(t)&&I(t)}function A(t){return O(t)&&I(t.valueOf())}function N(t){return T(t)||A(t)}function B(t){return T(t)&&t>0}function V(t){return A(t)&&t.valueOf()>0}function F(t){return B(t)||V(t)}a(N,"isPrimitive",T),a(N,"isObject",A),a(F,"isPrimitive",B),a(F,"isObject",V);var k,x=void 0!==Object.getOwnPropertyDescriptor,C=Object.getOwnPropertyDescriptor;k=x?function(t,r){var e;return null==t||void 0===(e=C(t,r))?null:e}:function(t,r){return d(t,r)?{configurable:!0,enumerable:!0,writable:!0,value:t[r]}:null};var D=k,G=/./;function L(t){return"boolean"==typeof t}var M=Boolean.prototype.toString;var R=b();function U(t){return"object"==typeof t&&(t instanceof Boolean||(R?function(t){try{return M.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===_(t)))}function Y(t){return L(t)||U(t)}function X(){return new Function("return this;")()}a(Y,"isPrimitive",L),a(Y,"isObject",U);var q="object"==typeof self?self:null,z="object"==typeof window?window:null,H="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},J="object"==typeof H?H:null;var K=function(t){if(arguments.length){if(!L(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return X()}if(q)return q;if(z)return z;if(J)return J;throw new Error("unexpected error. Unable to resolve global object.")}(),Q=K.document&&K.document.childNodes,W=Int8Array;function Z(){return/^\s*function\s*([^(]*)/i}var $,tt=/^\s*function\s*([^(]*)/i;a(Z,"REGEXP",tt),$=Array.isArray?Array.isArray:function(t){return"[object Array]"===_(t)};var rt=$;function et(t){return null!==t&&"object"==typeof t}var nt=function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(r){var e,n;if(!rt(r))return!1;if(0===(e=r.length))return!1;for(n=0;n<e;n++)if(!1===t(r[n]))return!1;return!0}}(et);function ot(t){var r,e,n,o;if(("Object"===(e=_(t).slice(8,-1))||"Error"===e)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(r=tt.exec(n.toString()))return r[1]}return et(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}a(et,"isObjectLikeArray",nt);var ut="function"==typeof G||"object"==typeof W||"function"==typeof Q?function(t){return ot(t).toLowerCase()}:function(t){var r;return null===t?"null":"object"===(r=typeof t)?ot(t).toLowerCase():r};var it,ct,ft=Object.getPrototypeOf;ct=Object.getPrototypeOf,it="function"===ut(ct)?ft:function(t){var r=function(t){return t.__proto__}(t);return r||null===r?r:"[object Function]"===_(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null};var lt=it;function at(t){return null==t?null:(t=Object(t),lt(t))}function pt(){var t,r=arguments,e=r[0],n="https://stdlib.io/e/"+e+"?";for(t=1;t<r.length;t++)n+="&arg[]="+encodeURIComponent(r[t]);return n}function yt(t,r,e){var n,o,u,i;if(arguments.length>2){if(!B(e))throw new TypeError(pt("0kD6D",e));u=e}else u=9007199254740991;if(null==t)return null;for(o=at(t),i=1;o&&i<=u;){if(n=D(o,r))return n;o=at(o),i+=1}return null}export{yt as default};
//# sourceMappingURL=mod.js.map