// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).inheritedPropertyDescriptor=e()}(this,(function(){"use strict";var r=9007199254740991,e="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=Object.defineProperty;function n(r){return"number"==typeof r}function i(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function o(r,e,t){var n=!1,o=e-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+i(o):i(o)+r,n&&(r="-"+r)),r}var a=String.prototype.toLowerCase,c=String.prototype.toUpperCase;function u(r){var e,t,i;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,i=parseInt(t,10),!isFinite(i)){if(!n(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&("u"===r.specifier||10!==e)&&(i=4294967295+i+1),i<0?(t=(-i).toString(e),r.precision&&(t=o(t,r.precision,r.padRight)),t="-"+t):(t=i.toString(e),i||r.precision?r.precision&&(t=o(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===c.call(r.specifier)?c.call(t):a.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function l(r){return"string"==typeof r}var f=Math.abs,s=String.prototype.toLowerCase,p=String.prototype.toUpperCase,g=String.prototype.replace,d=/e\+(\d)$/,b=/e-(\d)$/,y=/^(\d+)$/,h=/^(\d+)e/,v=/\.0$/,w=/\.0*e/,m=/(\..*[^0])0*e/;function j(r){var e,t,i=parseFloat(r.arg);if(!isFinite(i)){if(!n(r.arg))throw new Error("invalid floating-point number. Value: "+t);i=r.arg}switch(r.specifier){case"e":case"E":t=i.toExponential(r.precision);break;case"f":case"F":t=i.toFixed(r.precision);break;case"g":case"G":f(i)<1e-4?((e=r.precision)>0&&(e-=1),t=i.toExponential(e)):t=i.toPrecision(r.precision),r.alternate||(t=g.call(t,m,"$1e"),t=g.call(t,w,"e"),t=g.call(t,v,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=g.call(t,d,"e+0$1"),t=g.call(t,b,"e-0$1"),r.alternate&&(t=g.call(t,y,"$1."),t=g.call(t,h,"$1.e")),i>=0&&r.sign&&(t=r.sign+t),t=r.specifier===p.call(r.specifier)?p.call(t):s.call(t)}function _(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function E(r,e,t){var n=e-r.length;return n<0?r:r=t?r+_(n):_(n)+r}var O=String.fromCharCode,S=isNaN,x=Array.isArray;function T(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function k(r){var e,t,n,i,a,c,f,s,p;if(!x(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(c="",f=1,s=0;s<r.length;s++)if(l(n=r[s]))c+=n;else{if(e=void 0!==n.precision,!(n=T(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(f=n.mapping),t=n.flags,p=0;p<t.length;p++)switch(i=t.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[f],10),f+=1,S(n.width))throw new TypeError("the argument for * width at position "+f+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[f],10),f+=1,S(n.precision))throw new TypeError("the argument for * precision at position "+f+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[f],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!S(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=S(a)?String(n.arg):O(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=j(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=o(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=E(n.arg,n.width,n.padRight)),c+=n.arg||"",f+=1}return c}var I=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function P(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function A(r){var e,t,n,i;for(t=[],i=0,n=I.exec(r);n;)(e=r.slice(i,I.lastIndex-n[0].length)).length&&t.push(e),t.push(P(n)),i=I.lastIndex,n=I.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function V(r){return"string"==typeof r}function F(r){var e,t,n;if(!V(r))throw new TypeError(F("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=A(r),(t=new Array(arguments.length))[0]=e,n=1;n<t.length;n++)t[n]=arguments[n];return k.apply(null,t)}var N,C=Object.prototype,$=C.toString,R=C.__defineGetter__,B=C.__defineSetter__,L=C.__lookupGetter__,G=C.__lookupSetter__;N=function(){try{return e({},"x",{}),!0}catch(r){return!1}}()?t:function(r,e,t){var n,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===$.call(r))throw new TypeError(F("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===$.call(t))throw new TypeError(F("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(L.call(r,e)||G.call(r,e)?(n=r.__proto__,r.__proto__=C,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&R&&R.call(r,e,t.get),a&&B&&B.call(r,e,t.set),r};var U=N;function Z(r,e,t){U(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function M(r){return"number"==typeof r}var W="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function D(){return W&&"symbol"==typeof Symbol.toStringTag}var X=Object.prototype.toString;var Y=Object.prototype.hasOwnProperty;function z(r,e){return null!=r&&Y.call(r,e)}var q="function"==typeof Symbol?Symbol:void 0,H="function"==typeof q?q.toStringTag:"";var J=D()?function(r){var e,t,n;if(null==r)return X.call(r);t=r[H],e=z(r,H);try{r[H]=void 0}catch(e){return X.call(r)}return n=X.call(r),e?r[H]=t:delete r[H],n}:function(r){return X.call(r)},K=Number,Q=K.prototype.toString;var rr=D();function er(r){return"object"==typeof r&&(r instanceof K||(rr?function(r){try{return Q.call(r),!0}catch(r){return!1}}(r):"[object Number]"===J(r)))}function tr(r){return M(r)||er(r)}Z(tr,"isPrimitive",M),Z(tr,"isObject",er);var nr=Number.POSITIVE_INFINITY,ir=K.NEGATIVE_INFINITY,or=Math.floor;function ar(r){return r<nr&&r>ir&&or(e=r)===e;var e}function cr(r){return M(r)&&ar(r)}function ur(r){return er(r)&&ar(r.valueOf())}function lr(r){return cr(r)||ur(r)}function fr(r){return cr(r)&&r>0}function sr(r){return ur(r)&&r.valueOf()>0}function pr(r){return fr(r)||sr(r)}Z(lr,"isPrimitive",cr),Z(lr,"isObject",ur),Z(pr,"isPrimitive",fr),Z(pr,"isObject",sr);var gr,dr=void 0!==Object.getOwnPropertyDescriptor,br=Object.getOwnPropertyDescriptor;gr=dr?function(r,e){var t;return null==r||void 0===(t=br(r,e))?null:t}:function(r,e){return z(r,e)?{configurable:!0,enumerable:!0,writable:!0,value:r[e]}:null};var yr=gr,hr=Object,vr=/./;function wr(r){return"boolean"==typeof r}var mr=Boolean,jr=Boolean.prototype.toString;var _r=D();function Er(r){return"object"==typeof r&&(r instanceof mr||(_r?function(r){try{return jr.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===J(r)))}function Or(r){return wr(r)||Er(r)}function Sr(){return new Function("return this;")()}Z(Or,"isPrimitive",wr),Z(Or,"isObject",Er);var xr="object"==typeof self?self:null,Tr="object"==typeof window?window:null,kr="object"==typeof global?global:null,Ir="object"==typeof globalThis?globalThis:null;var Pr=function(r){if(arguments.length){if(!wr(r))throw new TypeError(F("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return Sr()}if(Ir)return Ir;if(xr)return xr;if(Tr)return Tr;if(kr)return kr;throw new Error("unexpected error. Unable to resolve global object.")}(),Ar=Pr.document&&Pr.document.childNodes,Vr=Int8Array;function Fr(){return/^\s*function\s*([^(]*)/i}var Nr,Cr=/^\s*function\s*([^(]*)/i;Z(Fr,"REGEXP",Cr),Nr=Array.isArray?Array.isArray:function(r){return"[object Array]"===J(r)};var $r=Nr;function Rr(r){return null!==r&&"object"==typeof r}var Br=function(r){if("function"!=typeof r)throw new TypeError(F("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!$r(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(Rr);function Lr(r){var e,t,n,i;if(("Object"===(t=J(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=Cr.exec(n.toString()))return e[1]}return Rr(i=r)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}Z(Rr,"isObjectLikeArray",Br);var Gr="function"==typeof vr||"object"==typeof Vr||"function"==typeof Ar?function(r){return Lr(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?Lr(r).toLowerCase():e};var Ur,Zr,Mr=Object.getPrototypeOf;Zr=Object.getPrototypeOf,Ur="function"===Gr(Zr)?Mr:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===J(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var Wr=Ur;function Dr(r){return null==r?null:(r=hr(r),Wr(r))}function Xr(){var r,e=arguments,t=e[0],n="https://stdlib.io/e/"+t+"?";for(r=1;r<e.length;r++)n+="&arg[]="+encodeURIComponent(e[r]);return n}return function(e,t,n){var i,o,a,c;if(arguments.length>2){if(!fr(n))throw new TypeError(Xr("1Uj5x,Lg",n));a=n}else a=r;if(null==e)return null;for(o=Dr(e),c=1;o&&c<=a;){if(i=yr(o,t))return i;o=Dr(o),c+=1}return null}}));
//# sourceMappingURL=index.js.map
