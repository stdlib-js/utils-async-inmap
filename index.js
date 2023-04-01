// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(t="undefined"!=typeof globalThis?globalThis:t||self).inmapAsync=r()}(this,(function(){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var r,e=Object.defineProperty,n=Object.prototype,o=n.toString,i=n.__defineGetter__,u=n.__defineSetter__,c=n.__lookupGetter__,l=n.__lookupSetter__;r=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?e:function(t,r,e){var f,a,s,p;if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((a="value"in e)&&(c.call(t,r)||l.call(t,r)?(f=t.__proto__,t.__proto__=n,delete t[r],t[r]=e.value,t.__proto__=f):t[r]=e.value),s="get"in e,p="set"in e,a&&(s||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return s&&i&&i.call(t,r,e.get),p&&u&&u.call(t,r,e.set),t};var f=r;function a(t,r,e){f(t,r,{configurable:!1,enumerable:!1,writable:!1,value:e})}var s=/./;function p(t){return"boolean"==typeof t}var y="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function b(){return y&&"symbol"==typeof Symbol.toStringTag}var v=Object.prototype.toString;var m=Object.prototype.hasOwnProperty;function d(t,r){return null!=t&&m.call(t,r)}var g="function"==typeof Symbol?Symbol.toStringTag:"";var h=b()?function(t){var r,e,n;if(null==t)return v.call(t);e=t[g],r=d(t,g);try{t[g]=void 0}catch(r){return v.call(t)}return n=v.call(t),r?t[g]=e:delete t[g],n}:function(t){return v.call(t)},j=Boolean.prototype.toString;var _=b();function w(t){return"object"==typeof t&&(t instanceof Boolean||(_?function(t){try{return j.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===h(t)))}function O(t){return p(t)||w(t)}function E(){return new Function("return this;")()}a(O,"isPrimitive",p),a(O,"isObject",w);var P="object"==typeof self?self:null,T="object"==typeof window?window:null,A="object"==typeof global?global:null;var S=function(t){if(arguments.length){if(!p(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return E()}if(P)return P;if(T)return T;if(A)return A;throw new Error("unexpected error. Unable to resolve global object.")}(),I=S.document&&S.document.childNodes,N=Int8Array;function F(){return/^\s*function\s*([^(]*)/i}var B=/^\s*function\s*([^(]*)/i;a(F,"REGEXP",B);var C=Array.isArray?Array.isArray:function(t){return"[object Array]"===h(t)};function V(t){return null!==t&&"object"==typeof t}function W(t){var r,e,n,o;if(("Object"===(e=h(t).slice(8,-1))||"Error"===e)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(r=B.exec(n.toString()))return r[1]}return V(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}a(V,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(r){var e,n;if(!C(r))return!1;if(0===(e=r.length))return!1;for(n=0;n<e;n++)if(!1===t(r[n]))return!1;return!0}}(V));var x="function"==typeof s||"object"==typeof N||"function"==typeof I?function(t){return W(t).toLowerCase()}:function(t){var r;return null===t?"null":"object"===(r=typeof t)?W(t).toLowerCase():r};function M(t){return"function"===x(t)}var k=Math.floor;function G(t){return k(t)===t}function L(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&G(t.length)&&t.length>=0&&t.length<=9007199254740991}function R(){var t,r=arguments,e=r[0],n="https://stdlib.io/e/"+e+"?";for(t=1;t<r.length;t++)n+="&arg[]="+encodeURIComponent(r[t]);return n}var U=Number.POSITIVE_INFINITY;var Y,z=Object.getPrototypeOf;Y=M(Object.getPrototypeOf)?z:function(t){var r=function(t){return t.__proto__}(t);return r||null===r?r:"[object Function]"===h(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null};var D=Y;var J=Object.prototype;function X(t){var r;return!!function(t){return"object"==typeof t&&null!==t&&!C(t)}(t)&&(r=function(t){return null==t?null:(t=Object(t),D(t))}(t),!r||!d(t,"constructor")&&d(r,"constructor")&&M(r.constructor)&&"[object Function]"===h(r.constructor)&&d(r,"isPrototypeOf")&&M(r.isPrototypeOf)&&(r===J||function(t){var r;for(r in t)if(!d(t,r))return!1;return!0}(t)))}function q(t){return"number"==typeof t}var H=Number,K=H.prototype.toString;var Q=b();function Z(t){return"object"==typeof t&&(t instanceof H||(Q?function(t){try{return K.call(t),!0}catch(t){return!1}}(t):"[object Number]"===h(t)))}function $(t){return q(t)||Z(t)}a($,"isPrimitive",q),a($,"isObject",Z);var tt=H.NEGATIVE_INFINITY;function rt(t){return t<U&&t>tt&&G(t)}function et(t){return q(t)&&rt(t)}function nt(t){return Z(t)&&rt(t.valueOf())}function ot(t){return et(t)||nt(t)}function it(t){return et(t)&&t>0}function ut(t){return nt(t)&&t.valueOf()>0}function ct(t){return it(t)||ut(t)}function lt(t,r){return X(r)?(d(r,"thisArg")&&(t.thisArg=r.thisArg),d(r,"series")&&(t.series=r.series,!p(t.series))?new TypeError(R("0iW30","series",t.series)):d(r,"limit")&&(t.limit=r.limit,!it(t.limit))?new TypeError(R("0iW3b","limit",t.limit)):null):new TypeError(R("0iW2h",r))}function ft(t){if(t.__esModule)return t;var r=t.default;if("function"==typeof r){var e=function t(){if(this instanceof t){var e=[null];e.push.apply(e,arguments);var n=Function.bind.apply(r,e);return new n}return r.apply(this,arguments)};e.prototype=r.prototype}else e={};return Object.defineProperty(e,"__esModule",{value:!0}),Object.keys(t).forEach((function(r){var n=Object.getOwnPropertyDescriptor(t,r);Object.defineProperty(e,r,n.get?n:{enumerable:!0,get:function(){return t[r]}})})),e}a(ot,"isPrimitive",et),a(ot,"isObject",nt),a(ct,"isPrimitive",it),a(ct,"isObject",ut);var at=ft(Object.freeze({__proto__:null,default:()=>()=>{}}))("inmap-async:limit");function st(t,r,e,n){var o,i,u,c,l,f,a;if(l=t.length,at("Collection length: %d",l),0===l)return at("Finished processing a collection."),n();for(c=l<r.limit?l:r.limit,at("Concurrency limit: %d",c),at("Number of arguments: %d",e.length),o=l-1,i=0,f=-1,a=0;a<c;a++)f<o&&s();function s(){var n;function o(r,e){if(!u){if(r)return u=!0,p(r);t[n]=e,p()}}at("Collection element %d: %s.",n=f+=1,JSON.stringify(t[n])),2===e.length?e.call(r.thisArg,t[n],o):3===e.length?e.call(r.thisArg,t[n],n,o):e.call(r.thisArg,t[n],n,t,o)}function p(t){return t?(at("Encountered an error: %s",t.message),n(t)):(at("Processed %d of %d collection elements.",i+=1,l),f<o?s():i===l?(at("Finished processing a collection."),n()):void 0)}}function pt(t,r){var e,n,o;if(e={},arguments.length>1){if(n=lt(e,t))throw n;o=r}else o=t;if(!M(o))throw new TypeError(R("0iW43",o));return e.series?e.limit=1:e.limit||(e.limit=U),i;function i(t,r){if(!L(t))throw new TypeError(R("0iWBO",t));if(!M(r))throw new TypeError(R("0iW43",r));return st(t,e,o,(function(e){if(e)return r(e,t);r(null,t)}))}}function yt(t,r,e,n){if(arguments.length<4)return pt(r)(t,e);pt(r,e)(t,n)}return a(yt,"factory",pt),yt}));
//# sourceMappingURL=index.js.map
