// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.1.0-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@v0.1.1-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-collection@v0.1.0-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.1.1-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-pinf@v0.1.1-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@v0.1.0-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@v0.1.1-esm/index.mjs";import{isPrimitive as l}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-boolean@v0.1.1-esm/index.mjs";import{isPrimitive as m}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-integer@v0.1.0-esm/index.mjs";function d(e,t){return s(t)?(o(t,"thisArg")&&(e.thisArg=t.thisArg),o(t,"series")&&(e.series=t.series,!l(e.series))?new TypeError(i("1RL2o,GE","series",e.series)):o(t,"limit")&&(e.limit=t.limit,!m(e.limit))?new TypeError(i("1RL3P,Fv","limit",e.limit)):null):new TypeError(i("1RL2V,FD",t))}function c(e){if(e.__esModule)return e;var t=e.default;if("function"==typeof t){var r=function e(){if(this instanceof e){var r=[null];r.push.apply(r,arguments);var i=Function.bind.apply(t,r);return new i}return t.apply(this,arguments)};r.prototype=t.prototype}else r={};return Object.defineProperty(r,"__esModule",{value:!0}),Object.keys(e).forEach((function(t){var i=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(r,t,i.get?i:{enumerable:!0,get:function(){return e[t]}})})),r}var f=c(Object.freeze({__proto__:null,default:()=>()=>{}}))("inmap-async:limit");function p(e,t,r,i){var n,s,o,l,m,d,c;if(m=e.length,f("Collection length: %d",m),0===m)return f("Finished processing a collection."),i();for(l=m<t.limit?m:t.limit,f("Concurrency limit: %d",l),f("Number of arguments: %d",r.length),n=m-1,s=0,d=-1,c=0;c<l;c++)d<n&&p();function p(){var i;function n(t,r){if(!o){if(t)return o=!0,u(t);e[i]=r,u()}}f("Collection element %d: %s.",i=d+=1,JSON.stringify(e[i])),2===r.length?r.call(t.thisArg,e[i],n):3===r.length?r.call(t.thisArg,e[i],i,n):r.call(t.thisArg,e[i],i,e,n)}function u(e){return e?(f("Encountered an error: %s",e.message),i(e)):(f("Processed %d of %d collection elements.",s+=1,m),d<n?p():s===m?(f("Finished processing a collection."),i()):void 0)}}function u(e,s){var o,l,m;if(o={},arguments.length>1){if(l=d(o,e))throw l;m=s}else m=e;if(!t(m))throw new TypeError(i("1RL3q,JV",m));return o.series?o.limit=1:o.limit||(o.limit=n),c;function c(e,n){if(!r(e))throw new TypeError(i("1RLAh,O3",e));if(!t(n))throw new TypeError(i("1RL3q,JV",n));return p(e,o,m,(function(t){if(t)return n(t,e);n(null,e)}))}}function a(e,t,r,i){if(arguments.length<4)return u(t)(e,r);u(t,r)(e,i)}e(a,"factory",u);export{a as default,u as factory};
//# sourceMappingURL=index.mjs.map
