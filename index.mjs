// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-max-safe-integer@v0.0.8-esm/index.mjs";import{isPrimitive as s}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-integer@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-property-descriptor@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-get-prototype-of@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.0.2-esm/index.mjs";function n(n,o,d){var l,m,p,f;if(arguments.length>2){if(!s(d))throw new TypeError(i("0kD6D",d));p=d}else p=t;if(null==n)return null;for(m=r(n),f=1;m&&f<=p;){if(l=e(m,o))return l;m=r(m),f+=1}return null}export{n as default};
//# sourceMappingURL=index.mjs.map
