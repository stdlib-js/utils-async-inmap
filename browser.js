// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).inmapAsync=e()}(this,(function(){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var e,r=Object.defineProperty,n=Object.prototype,o=n.toString,i=n.__defineGetter__,u=n.__defineSetter__,c=n.__lookupGetter__,f=n.__lookupSetter__;e=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?r:function(t,e,r){var l,a,s,p;if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((a="value"in r)&&(c.call(t,e)||f.call(t,e)?(l=t.__proto__,t.__proto__=n,delete t[e],t[e]=r.value,t.__proto__=l):t[e]=r.value),s="get"in r,p="set"in r,a&&(s||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return s&&i&&i.call(t,e,r.get),p&&u&&u.call(t,e,r.set),t};var l=e;function a(t,e,r){l(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})}var s=/./;function p(t){return"boolean"==typeof t}var y="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function b(){return y&&"symbol"==typeof Symbol.toStringTag}var v=Object.prototype.toString;var d=Object.prototype.hasOwnProperty;function m(t,e){return null!=t&&d.call(t,e)}var g="function"==typeof Symbol?Symbol.toStringTag:"";var h=b()?function(t){var e,r,n;if(null==t)return v.call(t);r=t[g],e=m(t,g);try{t[g]=void 0}catch(e){return v.call(t)}return n=v.call(t),e?t[g]=r:delete t[g],n}:function(t){return v.call(t)},j=Boolean.prototype.toString;var _=b();function w(t){return"object"==typeof t&&(t instanceof Boolean||(_?function(t){try{return j.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===h(t)))}function O(t){return p(t)||w(t)}function E(){return new Function("return this;")()}a(O,"isPrimitive",p),a(O,"isObject",w);var P="object"==typeof self?self:null,A="object"==typeof window?window:null,T="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},S="object"==typeof T?T:null;var F=function(t){if(arguments.length){if(!p(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return E()}if(P)return P;if(A)return A;if(S)return S;throw new Error("unexpected error. Unable to resolve global object.")}(),I=F.document&&F.document.childNodes,N=Int8Array;function L(){return/^\s*function\s*([^(]*)/i}var V=/^\s*function\s*([^(]*)/i;a(L,"REGEXP",V);var R=Array.isArray?Array.isArray:function(t){return"[object Array]"===h(t)};function B(t){return null!==t&&"object"==typeof t}function C(t){var e,r,n,o;if(("Object"===(r=h(t).slice(8,-1))||"Error"===r)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(e=V.exec(n.toString()))return e[1]}return B(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":r}a(B,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(e){var r,n;if(!R(e))return!1;if(0===(r=e.length))return!1;for(n=0;n<r;n++)if(!1===t(e[n]))return!1;return!0}}(B));var x="function"==typeof s||"object"==typeof N||"function"==typeof I?function(t){return C(t).toLowerCase()}:function(t){var e;return null===t?"null":"object"===(e=typeof t)?C(t).toLowerCase():e};function G(t){return"function"===x(t)}var M=Math.floor;function k(t){return M(t)===t}function J(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&k(t.length)&&t.length>=0&&t.length<=9007199254740991}function q(){var t,e=arguments,r=e[0],n="https://stdlib.io/e/"+r+"?";for(t=1;t<e.length;t++)n+="&arg[]="+encodeURIComponent(e[t]);return n}var D=Number.POSITIVE_INFINITY;var U,Y=Object.getPrototypeOf;U=G(Object.getPrototypeOf)?Y:function(t){var e=function(t){return t.__proto__}(t);return e||null===e?e:"[object Function]"===h(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null};var z=U;var X=Object.prototype;function H(t){var e;return!!function(t){return"object"==typeof t&&null!==t&&!R(t)}(t)&&(e=function(t){return null==t?null:(t=Object(t),z(t))}(t),!e||!m(t,"constructor")&&m(e,"constructor")&&G(e.constructor)&&"[object Function]"===h(e.constructor)&&m(e,"isPrototypeOf")&&G(e.isPrototypeOf)&&(e===X||function(t){var e;for(e in t)if(!m(t,e))return!1;return!0}(t)))}function K(t){return"number"==typeof t}var Q=Number,W=Q.prototype.toString;var Z=b();function $(t){return"object"==typeof t&&(t instanceof Q||(Z?function(t){try{return W.call(t),!0}catch(t){return!1}}(t):"[object Number]"===h(t)))}function tt(t){return K(t)||$(t)}a(tt,"isPrimitive",K),a(tt,"isObject",$);var et=Q.NEGATIVE_INFINITY;function rt(t){return t<D&&t>et&&k(t)}function nt(t){return K(t)&&rt(t)}function ot(t){return $(t)&&rt(t.valueOf())}function it(t){return nt(t)||ot(t)}function ut(t){return nt(t)&&t>0}function ct(t){return ot(t)&&t.valueOf()>0}function ft(t){return ut(t)||ct(t)}function lt(t,e){return H(e)?(m(e,"thisArg")&&(t.thisArg=e.thisArg),m(e,"series")&&(t.series=e.series,!p(t.series))?new TypeError(q("1RL2o,GE","series",t.series)):m(e,"limit")&&(t.limit=e.limit,!ut(t.limit))?new TypeError(q("1RL3P,Fv","limit",t.limit)):null):new TypeError(q("1RL2V,FD",e))}function at(t){if(t.__esModule)return t;var e=t.default;if("function"==typeof e){var r=function t(){if(this instanceof t){var r=[null];r.push.apply(r,arguments);var n=Function.bind.apply(e,r);return new n}return e.apply(this,arguments)};r.prototype=e.prototype}else r={};return Object.defineProperty(r,"__esModule",{value:!0}),Object.keys(t).forEach((function(e){var n=Object.getOwnPropertyDescriptor(t,e);Object.defineProperty(r,e,n.get?n:{enumerable:!0,get:function(){return t[e]}})})),r}a(it,"isPrimitive",nt),a(it,"isObject",ot),a(ft,"isPrimitive",ut),a(ft,"isObject",ct);var st=at(Object.freeze({__proto__:null,default:()=>()=>{}}))("inmap-async:limit");function pt(t,e,r,n){var o,i,u,c,f,l,a;if(f=t.length,st("Collection length: %d",f),0===f)return st("Finished processing a collection."),n();for(c=f<e.limit?f:e.limit,st("Concurrency limit: %d",c),st("Number of arguments: %d",r.length),o=f-1,i=0,l=-1,a=0;a<c;a++)l<o&&s();function s(){var n;function o(e,r){if(!u){if(e)return u=!0,p(e);t[n]=r,p()}}st("Collection element %d: %s.",n=l+=1,JSON.stringify(t[n])),2===r.length?r.call(e.thisArg,t[n],o):3===r.length?r.call(e.thisArg,t[n],n,o):r.call(e.thisArg,t[n],n,t,o)}function p(t){return t?(st("Encountered an error: %s",t.message),n(t)):(st("Processed %d of %d collection elements.",i+=1,f),l<o?s():i===f?(st("Finished processing a collection."),n()):void 0)}}function yt(t,e){var r,n,o;if(r={},arguments.length>1){if(n=lt(r,t))throw n;o=e}else o=t;if(!G(o))throw new TypeError(q("1RL3q,JV",o));return r.series?r.limit=1:r.limit||(r.limit=D),i;function i(t,e){if(!J(t))throw new TypeError(q("1RLAh,O3",t));if(!G(e))throw new TypeError(q("1RL3q,JV",e));return pt(t,r,o,(function(r){if(r)return e(r,t);e(null,t)}))}}function bt(t,e,r,n){if(arguments.length<4)return yt(e)(t,r);yt(e,r)(t,n)}return a(bt,"factory",yt),bt}));
//# sourceMappingURL=browser.js.map
