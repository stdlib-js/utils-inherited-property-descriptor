// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-max-safe-integer@v0.1.1-esm/index.mjs";import{isPrimitive as e}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-integer@v0.1.0-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-property-descriptor@v0.1.1-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-get-prototype-of@v0.1.1-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@v0.1.1-esm/index.mjs";function n(n,m,o){var d,l,p,f;if(arguments.length>2){if(!e(o))throw new TypeError(i("invalid argument. Third argument must be a positive integer. Value: `%s`.",o));p=o}else p=t;if(null==n)return null;for(l=r(n),f=1;l&&f<=p;){if(d=s(l,m))return d;l=r(l),f+=1}return null}export{n as default};
//# sourceMappingURL=index.mjs.map
