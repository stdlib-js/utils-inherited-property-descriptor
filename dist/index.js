"use strict";var p=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var v=p(function(l,o){
var g=require('@stdlib/constants-float64-max-safe-integer/dist'),f=require('@stdlib/assert-is-positive-integer/dist').isPrimitive,m=require('@stdlib/utils-property-descriptor/dist'),a=require('@stdlib/utils-get-prototype-of/dist'),c=require('@stdlib/error-tools-fmtprodmsg/dist');function q(e,r,t){var n,i,u,s;if(arguments.length>2){if(!f(t))throw new TypeError(c('1Uj5x',t));u=t}else u=g;if(e==null)return null;for(i=a(e),s=1;i&&s<=u;){if(n=m(i,r),n)return n;i=a(i),s+=1}return null}o.exports=q
});var d=v();module.exports=d;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
