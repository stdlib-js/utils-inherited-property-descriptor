// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty;function t(r){return"number"==typeof r}function i(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function n(r,e,t){var n=!1,a=e-r.length;return a<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+i(a):i(a)+r,n&&(r="-"+r)),r}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function c(r){var e,i,c;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(i=r.arg,c=parseInt(i,10),!isFinite(c)){if(!t(i))throw new Error("invalid integer. Value: "+i);c=0}return c<0&&("u"===r.specifier||10!==e)&&(c=4294967295+c+1),c<0?(i=(-c).toString(e),r.precision&&(i=n(i,r.precision,r.padRight)),i="-"+i):(i=c.toString(e),c||r.precision?r.precision&&(i=n(i,r.precision,r.padRight)):i="",r.sign&&(i=r.sign+i)),16===e&&(r.alternate&&(i="0x"+i),i=r.specifier===o.call(r.specifier)?o.call(i):a.call(i)),8===e&&r.alternate&&"0"!==i.charAt(0)&&(i="0"+i),i}function s(r){return"string"==typeof r}var l=Math.abs,u=String.prototype.toLowerCase,p=String.prototype.toUpperCase,f=String.prototype.replace,g=/e\+(\d)$/,d=/e-(\d)$/,h=/^(\d+)$/,w=/^(\d+)e/,b=/\.0$/,v=/\.0*e/,y=/(\..*[^0])0*e/;function m(r){var e,i,n=parseFloat(r.arg);if(!isFinite(n)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+i);n=r.arg}switch(r.specifier){case"e":case"E":i=n.toExponential(r.precision);break;case"f":case"F":i=n.toFixed(r.precision);break;case"g":case"G":l(n)<1e-4?((e=r.precision)>0&&(e-=1),i=n.toExponential(e)):i=n.toPrecision(r.precision),r.alternate||(i=f.call(i,y,"$1e"),i=f.call(i,v,"e"),i=f.call(i,b,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return i=f.call(i,g,"e+0$1"),i=f.call(i,d,"e-0$1"),r.alternate&&(i=f.call(i,h,"$1."),i=f.call(i,w,"$1.e")),n>=0&&r.sign&&(i=r.sign+i),i=r.specifier===p.call(r.specifier)?p.call(i):u.call(i)}function E(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function x(r,e,t){var i=e-r.length;return i<0?r:r=t?r+E(i):E(i)+r}var k=String.fromCharCode,S=isNaN,j=Array.isArray;function _(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function I(r){var e,t,i,a,o,l,u,p,f;if(!j(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(l="",u=1,p=0;p<r.length;p++)if(s(i=r[p]))l+=i;else{if(e=void 0!==i.precision,!(i=_(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+p+"`. Value: `"+i+"`.");for(i.mapping&&(u=i.mapping),t=i.flags,f=0;f<t.length;f++)switch(a=t.charAt(f)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===i.width){if(i.width=parseInt(arguments[u],10),u+=1,S(i.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(e&&"*"===i.precision){if(i.precision=parseInt(arguments[u],10),u+=1,S(i.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,e=!1)}switch(i.arg=arguments[u],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(i.padZeros=!1),i.arg=c(i);break;case"s":i.maxWidth=e?i.precision:-1;break;case"c":if(!S(i.arg)){if((o=parseInt(i.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=S(o)?String(i.arg):k(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(i.precision=6),i.arg=m(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=n(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=x(i.arg,i.width,i.padRight)),l+=i.arg||"",u+=1}return l}var V=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function T(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function O(r){var e,t,i,n;for(t=[],n=0,i=V.exec(r);i;)(e=r.slice(n,V.lastIndex-i[0].length)).length&&t.push(e),t.push(T(i)),n=V.lastIndex,i=V.exec(r);return(e=r.slice(n)).length&&t.push(e),t}function $(r){return"string"==typeof r}function F(r){var e,t;if(!$(r))throw new TypeError(F("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[O(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return I.apply(null,e)}var A,C=Object.prototype,R=C.toString,P=C.__defineGetter__,N=C.__defineSetter__,Z=C.__lookupGetter__,L=C.__lookupSetter__;A=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var i,n,a,o;if("object"!=typeof r||null===r||"[object Array]"===R.call(r))throw new TypeError(F("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===R.call(t))throw new TypeError(F("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((n="value"in t)&&(Z.call(r,e)||L.call(r,e)?(i=r.__proto__,r.__proto__=C,delete r[e],r[e]=t.value,r.__proto__=i):r[e]=t.value),a="get"in t,o="set"in t,n&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&P&&P.call(r,e,t.get),o&&N&&N.call(r,e,t.set),r};var W=A;function G(r,e,t){W(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function B(r){return"number"==typeof r}var U="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function X(){return U&&"symbol"==typeof Symbol.toStringTag}var M=Object.prototype.toString;var z=Object.prototype.hasOwnProperty;function D(r,e){return null!=r&&z.call(r,e)}var Y="function"==typeof Symbol?Symbol:void 0,q="function"==typeof Y?Y.toStringTag:"";var H=X()?function(r){var e,t,i;if(null==r)return M.call(r);t=r[q],e=D(r,q);try{r[q]=void 0}catch(e){return M.call(r)}return i=M.call(r),e?r[q]=t:delete r[q],i}:function(r){return M.call(r)},J=Number,K=J.prototype.toString;var Q=X();function rr(r){return"object"==typeof r&&(r instanceof J||(Q?function(r){try{return K.call(r),!0}catch(r){return!1}}(r):"[object Number]"===H(r)))}function er(r){return B(r)||rr(r)}G(er,"isPrimitive",B),G(er,"isObject",rr);var tr=Number.POSITIVE_INFINITY,ir=J.NEGATIVE_INFINITY,nr=Math.floor;function ar(r){return r<tr&&r>ir&&nr(e=r)===e;var e}function or(r){return B(r)&&ar(r)}function cr(r){return rr(r)&&ar(r.valueOf())}function sr(r){return or(r)||cr(r)}function lr(r){return or(r)&&r>0}function ur(r){return cr(r)&&r.valueOf()>0}function pr(r){return lr(r)||ur(r)}G(sr,"isPrimitive",or),G(sr,"isObject",cr),G(pr,"isPrimitive",lr),G(pr,"isObject",ur);var fr,gr=void 0!==Object.getOwnPropertyDescriptor,dr=Object.getOwnPropertyDescriptor;fr=gr?function(r,e){var t;return null==r||void 0===(t=dr(r,e))?null:t}:function(r,e){return D(r,e)?{configurable:!0,enumerable:!0,writable:!0,value:r[e]}:null};var hr=fr,wr=Object,br=/./;function vr(r){return"boolean"==typeof r}var yr=Object.prototype.toString;var mr="function"==typeof Y?Y.toStringTag:"";var Er=X()?function(r){var e,t,i;if(null==r)return yr.call(r);t=r[mr],e=D(r,mr);try{r[mr]=void 0}catch(e){return yr.call(r)}return i=yr.call(r),e?r[mr]=t:delete r[mr],i}:function(r){return yr.call(r)},xr=Boolean,kr=Boolean.prototype.toString;var Sr=X();function jr(r){return"object"==typeof r&&(r instanceof xr||(Sr?function(r){try{return kr.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===Er(r)))}function _r(r){return vr(r)||jr(r)}function Ir(r){return"number"==typeof r}function Vr(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function Tr(r,e,t){var i=!1,n=e-r.length;return n<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=t?r+Vr(n):Vr(n)+r,i&&(r="-"+r)),r}G(_r,"isPrimitive",vr),G(_r,"isObject",jr);var Or=String.prototype.toLowerCase,$r=String.prototype.toUpperCase;function Fr(r){var e,t,i;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,i=parseInt(t,10),!isFinite(i)){if(!Ir(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&("u"===r.specifier||10!==e)&&(i=4294967295+i+1),i<0?(t=(-i).toString(e),r.precision&&(t=Tr(t,r.precision,r.padRight)),t="-"+t):(t=i.toString(e),i||r.precision?r.precision&&(t=Tr(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===$r.call(r.specifier)?$r.call(t):Or.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function Ar(r){return"string"==typeof r}var Cr=Math.abs,Rr=String.prototype.toLowerCase,Pr=String.prototype.toUpperCase,Nr=String.prototype.replace,Zr=/e\+(\d)$/,Lr=/e-(\d)$/,Wr=/^(\d+)$/,Gr=/^(\d+)e/,Br=/\.0$/,Ur=/\.0*e/,Xr=/(\..*[^0])0*e/;function Mr(r){var e,t,i=parseFloat(r.arg);if(!isFinite(i)){if(!Ir(r.arg))throw new Error("invalid floating-point number. Value: "+t);i=r.arg}switch(r.specifier){case"e":case"E":t=i.toExponential(r.precision);break;case"f":case"F":t=i.toFixed(r.precision);break;case"g":case"G":Cr(i)<1e-4?((e=r.precision)>0&&(e-=1),t=i.toExponential(e)):t=i.toPrecision(r.precision),r.alternate||(t=Nr.call(t,Xr,"$1e"),t=Nr.call(t,Ur,"e"),t=Nr.call(t,Br,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=Nr.call(t,Zr,"e+0$1"),t=Nr.call(t,Lr,"e-0$1"),r.alternate&&(t=Nr.call(t,Wr,"$1."),t=Nr.call(t,Gr,"$1.e")),i>=0&&r.sign&&(t=r.sign+t),t=r.specifier===Pr.call(r.specifier)?Pr.call(t):Rr.call(t)}function zr(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function Dr(r,e,t){var i=e-r.length;return i<0?r:r=t?r+zr(i):zr(i)+r}var Yr=String.fromCharCode,qr=isNaN,Hr=Array.isArray;function Jr(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function Kr(r){var e,t,i,n,a,o,c,s,l;if(!Hr(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(o="",c=1,s=0;s<r.length;s++)if(Ar(i=r[s]))o+=i;else{if(e=void 0!==i.precision,!(i=Jr(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+i+"`.");for(i.mapping&&(c=i.mapping),t=i.flags,l=0;l<t.length;l++)switch(n=t.charAt(l)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===i.width){if(i.width=parseInt(arguments[c],10),c+=1,qr(i.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(e&&"*"===i.precision){if(i.precision=parseInt(arguments[c],10),c+=1,qr(i.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,e=!1)}switch(i.arg=arguments[c],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(i.padZeros=!1),i.arg=Fr(i);break;case"s":i.maxWidth=e?i.precision:-1;break;case"c":if(!qr(i.arg)){if((a=parseInt(i.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=qr(a)?String(i.arg):Yr(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(i.precision=6),i.arg=Mr(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=Tr(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=Dr(i.arg,i.width,i.padRight)),o+=i.arg||"",c+=1}return o}var Qr=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function re(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function ee(r){var e,t,i,n;for(t=[],n=0,i=Qr.exec(r);i;)(e=r.slice(n,Qr.lastIndex-i[0].length)).length&&t.push(e),t.push(re(i)),n=Qr.lastIndex,i=Qr.exec(r);return(e=r.slice(n)).length&&t.push(e),t}function te(r){return"string"==typeof r}function ie(r){var e,t;if(!te(r))throw new TypeError(ie("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[ee(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return Kr.apply(null,e)}function ne(){return new Function("return this;")()}var ae="object"==typeof self?self:null,oe="object"==typeof window?window:null,ce="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},se="object"==typeof ce?ce:null,le="object"==typeof globalThis?globalThis:null;var ue=function(r){if(arguments.length){if(!vr(r))throw new TypeError(ie("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return ne()}if(le)return le;if(ae)return ae;if(oe)return oe;if(se)return se;throw new Error("unexpected error. Unable to resolve global object.")}(),pe=ue.document&&ue.document.childNodes,fe=Int8Array;function ge(){return/^\s*function\s*([^(]*)/i}var de,he=/^\s*function\s*([^(]*)/i;G(ge,"REGEXP",he),de=Array.isArray?Array.isArray:function(r){return"[object Array]"===Er(r)};var we=de;function be(r){return null!==r&&"object"==typeof r}var ve=function(r){if("function"!=typeof r)throw new TypeError(ie("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,i;if(!we(e))return!1;if(0===(t=e.length))return!1;for(i=0;i<t;i++)if(!1===r(e[i]))return!1;return!0}}(be);function ye(r){var e,t,i,n;if(("Object"===(t=Er(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(i=r.constructor).name)return i.name;if(e=he.exec(i.toString()))return e[1]}return be(n=r)&&(n._isBuffer||n.constructor&&"function"==typeof n.constructor.isBuffer&&n.constructor.isBuffer(n))?"Buffer":t}G(be,"isObjectLikeArray",ve);var me="function"==typeof br||"object"==typeof fe||"function"==typeof pe?function(r){return ye(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?ye(r).toLowerCase():e};var Ee,xe,ke=Object.getPrototypeOf;xe=Object.getPrototypeOf,Ee="function"===me(xe)?ke:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===Er(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var Se=Ee;function je(r){return null==r?null:(r=wr(r),Se(r))}function _e(r){return"number"==typeof r}function Ie(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function Ve(r,e,t){var i=!1,n=e-r.length;return n<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=t?r+Ie(n):Ie(n)+r,i&&(r="-"+r)),r}var Te=String.prototype.toLowerCase,Oe=String.prototype.toUpperCase;function $e(r){var e,t,i;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,i=parseInt(t,10),!isFinite(i)){if(!_e(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&("u"===r.specifier||10!==e)&&(i=4294967295+i+1),i<0?(t=(-i).toString(e),r.precision&&(t=Ve(t,r.precision,r.padRight)),t="-"+t):(t=i.toString(e),i||r.precision?r.precision&&(t=Ve(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===Oe.call(r.specifier)?Oe.call(t):Te.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function Fe(r){return"string"==typeof r}var Ae=Math.abs,Ce=String.prototype.toLowerCase,Re=String.prototype.toUpperCase,Pe=String.prototype.replace,Ne=/e\+(\d)$/,Ze=/e-(\d)$/,Le=/^(\d+)$/,We=/^(\d+)e/,Ge=/\.0$/,Be=/\.0*e/,Ue=/(\..*[^0])0*e/;function Xe(r){var e,t,i=parseFloat(r.arg);if(!isFinite(i)){if(!_e(r.arg))throw new Error("invalid floating-point number. Value: "+t);i=r.arg}switch(r.specifier){case"e":case"E":t=i.toExponential(r.precision);break;case"f":case"F":t=i.toFixed(r.precision);break;case"g":case"G":Ae(i)<1e-4?((e=r.precision)>0&&(e-=1),t=i.toExponential(e)):t=i.toPrecision(r.precision),r.alternate||(t=Pe.call(t,Ue,"$1e"),t=Pe.call(t,Be,"e"),t=Pe.call(t,Ge,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=Pe.call(t,Ne,"e+0$1"),t=Pe.call(t,Ze,"e-0$1"),r.alternate&&(t=Pe.call(t,Le,"$1."),t=Pe.call(t,We,"$1.e")),i>=0&&r.sign&&(t=r.sign+t),t=r.specifier===Re.call(r.specifier)?Re.call(t):Ce.call(t)}function Me(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function ze(r,e,t){var i=e-r.length;return i<0?r:r=t?r+Me(i):Me(i)+r}var De=String.fromCharCode,Ye=isNaN,qe=Array.isArray;function He(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function Je(r){var e,t,i,n,a,o,c,s,l;if(!qe(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(o="",c=1,s=0;s<r.length;s++)if(Fe(i=r[s]))o+=i;else{if(e=void 0!==i.precision,!(i=He(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+i+"`.");for(i.mapping&&(c=i.mapping),t=i.flags,l=0;l<t.length;l++)switch(n=t.charAt(l)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===i.width){if(i.width=parseInt(arguments[c],10),c+=1,Ye(i.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(e&&"*"===i.precision){if(i.precision=parseInt(arguments[c],10),c+=1,Ye(i.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,e=!1)}switch(i.arg=arguments[c],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(i.padZeros=!1),i.arg=$e(i);break;case"s":i.maxWidth=e?i.precision:-1;break;case"c":if(!Ye(i.arg)){if((a=parseInt(i.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=Ye(a)?String(i.arg):De(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(i.precision=6),i.arg=Xe(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=Ve(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=ze(i.arg,i.width,i.padRight)),o+=i.arg||"",c+=1}return o}var Ke=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Qe(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function rt(r){var e,t,i,n;for(t=[],n=0,i=Ke.exec(r);i;)(e=r.slice(n,Ke.lastIndex-i[0].length)).length&&t.push(e),t.push(Qe(i)),n=Ke.lastIndex,i=Ke.exec(r);return(e=r.slice(n)).length&&t.push(e),t}function et(r){return"string"==typeof r}function tt(r){var e,t,i;if(!et(r))throw new TypeError(tt("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=rt(r),(t=new Array(arguments.length))[0]=e,i=1;i<t.length;i++)t[i]=arguments[i];return Je.apply(null,t)}function it(r,e,t){var i,n,a,o;if(arguments.length>2){if(!lr(t))throw new TypeError(tt("invalid argument. Third argument must be a positive integer. Value: `%s`.",t));a=t}else a=9007199254740991;if(null==r)return null;for(n=je(r),o=1;n&&o<=a;){if(i=hr(n,e))return i;n=je(n),o+=1}return null}export{it as default};
//# sourceMappingURL=mod.js.map
