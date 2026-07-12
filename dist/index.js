"use strict";var p=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(i){throw (r=0, i)}};};var v=p(function(l,o){
var g=require('@stdlib/constants-float64-max-safe-integer/dist'),f=require('@stdlib/assert-is-positive-integer/dist').isPrimitive,m=require('@stdlib/utils-property-descriptor/dist'),a=require('@stdlib/utils-get-prototype-of/dist'),c=require('@stdlib/error-tools-fmtprodmsg/dist');function q(e,r,i){var n,t,u,s;if(arguments.length>2){if(!f(i))throw new TypeError(c('1Uj5x',i));u=i}else u=g;if(e==null)return null;for(t=a(e),s=1;t&&s<=u;){if(n=m(t,r),n)return n;t=a(t),s+=1}return null}o.exports=q
});var d=v();module.exports=d;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
