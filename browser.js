// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(t="undefined"!=typeof globalThis?globalThis:t||self).inheritedPropertyDescriptor=r()}(this,(function(){"use strict";var t=9007199254740991,r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e,n=Object.defineProperty,o=Object.prototype,u=o.toString,i=o.__defineGetter__,c=o.__defineSetter__,f=o.__lookupGetter__,l=o.__lookupSetter__;e=function(){try{return r({},"x",{}),!0}catch(t){return!1}}()?n:function(t,r,e){var n,a,p,y;if("object"!=typeof t||null===t||"[object Array]"===u.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof e||null===e||"[object Array]"===u.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((a="value"in e)&&(f.call(t,r)||l.call(t,r)?(n=t.__proto__,t.__proto__=o,delete t[r],t[r]=e.value,t.__proto__=n):t[r]=e.value),p="get"in e,y="set"in e,a&&(p||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&i&&i.call(t,r,e.get),y&&c&&c.call(t,r,e.set),t};var a=e;function p(t,r,e){a(t,r,{configurable:!1,enumerable:!1,writable:!1,value:e})}function y(t){return"number"==typeof t}var b="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function s(){return b&&"symbol"==typeof Symbol.toStringTag}var v=Object.prototype.toString;var d=Object.prototype.hasOwnProperty;function j(t,r){return null!=t&&d.call(t,r)}var m="function"==typeof Symbol?Symbol.toStringTag:"";var _=s()?function(t){var r,e,n;if(null==t)return v.call(t);e=t[m],r=j(t,m);try{t[m]=void 0}catch(r){return v.call(t)}return n=v.call(t),r?t[m]=e:delete t[m],n}:function(t){return v.call(t)},g=Number,w=g.prototype.toString;var O=s();function h(t){return"object"==typeof t&&(t instanceof g||(O?function(t){try{return w.call(t),!0}catch(t){return!1}}(t):"[object Number]"===_(t)))}function P(t){return y(t)||h(t)}p(P,"isPrimitive",y),p(P,"isObject",h);var S=Number.POSITIVE_INFINITY,E=g.NEGATIVE_INFINITY,T=Math.floor;function I(t){return t<S&&t>E&&T(r=t)===r;var r}function A(t){return y(t)&&I(t)}function N(t){return h(t)&&I(t.valueOf())}function B(t){return A(t)||N(t)}function V(t){return A(t)&&t>0}function x(t){return N(t)&&t.valueOf()>0}function D(t){return V(t)||x(t)}p(B,"isPrimitive",A),p(B,"isObject",N),p(D,"isPrimitive",V),p(D,"isObject",x);var F,k=void 0!==Object.getOwnPropertyDescriptor,C=Object.getOwnPropertyDescriptor;F=k?function(t,r){var e;return null==t||void 0===(e=C(t,r))?null:e}:function(t,r){return j(t,r)?{configurable:!0,enumerable:!0,writable:!0,value:t[r]}:null};var G=F,L=/./;function M(t){return"boolean"==typeof t}var R=Boolean.prototype.toString;var U=s();function Y(t){return"object"==typeof t&&(t instanceof Boolean||(U?function(t){try{return R.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===_(t)))}function X(t){return M(t)||Y(t)}function q(){return new Function("return this;")()}p(X,"isPrimitive",M),p(X,"isObject",Y);var z="object"==typeof self?self:null,H="object"==typeof window?window:null,J="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},K="object"==typeof J?J:null;var Q=function(t){if(arguments.length){if(!M(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return q()}if(z)return z;if(H)return H;if(K)return K;throw new Error("unexpected error. Unable to resolve global object.")}(),W=Q.document&&Q.document.childNodes,Z=Int8Array;function $(){return/^\s*function\s*([^(]*)/i}var tt,rt=/^\s*function\s*([^(]*)/i;p($,"REGEXP",rt),tt=Array.isArray?Array.isArray:function(t){return"[object Array]"===_(t)};var et=tt;function nt(t){return null!==t&&"object"==typeof t}var ot=function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(r){var e,n;if(!et(r))return!1;if(0===(e=r.length))return!1;for(n=0;n<e;n++)if(!1===t(r[n]))return!1;return!0}}(nt);function ut(t){var r,e,n,o;if(("Object"===(e=_(t).slice(8,-1))||"Error"===e)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(r=rt.exec(n.toString()))return r[1]}return nt(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}p(nt,"isObjectLikeArray",ot);var it="function"==typeof L||"object"==typeof Z||"function"==typeof W?function(t){return ut(t).toLowerCase()}:function(t){var r;return null===t?"null":"object"===(r=typeof t)?ut(t).toLowerCase():r};var ct,ft,lt=Object.getPrototypeOf;ft=Object.getPrototypeOf,ct="function"===it(ft)?lt:function(t){var r=function(t){return t.__proto__}(t);return r||null===r?r:"[object Function]"===_(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null};var at=ct;function pt(t){return null==t?null:(t=Object(t),at(t))}function yt(){var t,r=arguments,e=r[0],n="https://stdlib.io/e/"+e+"?";for(t=1;t<r.length;t++)n+="&arg[]="+encodeURIComponent(r[t]);return n}return function(r,e,n){var o,u,i,c;if(arguments.length>2){if(!V(n))throw new TypeError(yt("0kD6D",n));i=n}else i=t;if(null==r)return null;for(u=pt(r),c=1;u&&c<=i;){if(o=G(u,e))return o;u=pt(u),c+=1}return null}}));
//# sourceMappingURL=browser.js.map
