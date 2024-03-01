// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var r=Object.defineProperty;function t(e){return"number"==typeof e}function n(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function i(e,r,t){var i=!1,o=r-e.length;return o<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+n(o):n(o)+e,i&&(e="-"+e)),e}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function c(e){var r,n,c;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(n=e.arg,c=parseInt(n,10),!isFinite(c)){if(!t(n))throw new Error("invalid integer. Value: "+n);c=0}return c<0&&("u"===e.specifier||10!==r)&&(c=4294967295+c+1),c<0?(n=(-c).toString(r),e.precision&&(n=i(n,e.precision,e.padRight)),n="-"+n):(n=c.toString(r),c||e.precision?e.precision&&(n=i(n,e.precision,e.padRight)):n="",e.sign&&(n=e.sign+n)),16===r&&(e.alternate&&(n="0x"+n),n=e.specifier===a.call(e.specifier)?a.call(n):o.call(n)),8===r&&e.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}var u=Math.abs,l=String.prototype.toLowerCase,s=String.prototype.toUpperCase,f=String.prototype.replace,p=/e\+(\d)$/,g=/e-(\d)$/,d=/^(\d+)$/,h=/^(\d+)e/,y=/\.0$/,b=/\.0*e/,v=/(\..*[^0])0*e/;function w(e){var r,n,i=parseFloat(e.arg);if(!isFinite(i)){if(!t(e.arg))throw new Error("invalid floating-point number. Value: "+n);i=e.arg}switch(e.specifier){case"e":case"E":n=i.toExponential(e.precision);break;case"f":case"F":n=i.toFixed(e.precision);break;case"g":case"G":u(i)<1e-4?((r=e.precision)>0&&(r-=1),n=i.toExponential(r)):n=i.toPrecision(e.precision),e.alternate||(n=f.call(n,v,"$1e"),n=f.call(n,b,"e"),n=f.call(n,y,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return n=f.call(n,p,"e+0$1"),n=f.call(n,g,"e-0$1"),e.alternate&&(n=f.call(n,d,"$1."),n=f.call(n,h,"$1.e")),i>=0&&e.sign&&(n=e.sign+n),n=e.specifier===s.call(e.specifier)?s.call(n):l.call(n)}function m(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}var j=String.fromCharCode,_=isNaN,E=Array.isArray;function O(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function S(e){var r,t,n,o,a,u,l,s,f,p,g,d,h;if(!E(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(u="",l=1,s=0;s<e.length;s++)if(n=e[s],"string"==typeof n)u+=n;else{if(r=void 0!==n.precision,!(n=O(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(l=n.mapping),t=n.flags,f=0;f<t.length;f++)switch(o=t.charAt(f)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[l],10),l+=1,_(n.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[l],10),l+=1,_(n.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[l],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=c(n);break;case"s":n.maxWidth=r?n.precision:-1;break;case"c":if(!_(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=_(a)?String(n.arg):j(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=w(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(p=n.arg,g=n.width,d=n.padRight,h=void 0,(h=g-p.length)<0?p:p=d?p+m(h):m(h)+p)),u+=n.arg||"",l+=1}return u}var T=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function A(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function P(e){var r,t,n,i;for(t=[],i=0,n=T.exec(e);n;)(r=e.slice(i,T.lastIndex-n[0].length)).length&&t.push(r),t.push(A(n)),i=T.lastIndex,n=T.exec(e);return(r=e.slice(i)).length&&t.push(r),t}function k(e){var r,t;if("string"!=typeof e)throw new TypeError(k("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[P(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return S.apply(null,r)}var x,I=Object.prototype,F=I.toString,V=I.__defineGetter__,R=I.__defineSetter__,C=I.__lookupGetter__,N=I.__lookupSetter__;x=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,t){var n,i,o,a;if("object"!=typeof e||null===e||"[object Array]"===F.call(e))throw new TypeError(k("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===F.call(t))throw new TypeError(k("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(C.call(e,r)||N.call(e,r)?(n=e.__proto__,e.__proto__=I,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&V&&V.call(e,r,t.get),a&&R&&R.call(e,r,t.set),e};var L=x;function $(e,r,t){L(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}var B=/./;function G(e){return"boolean"==typeof e}var M="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function Z(){return M&&"symbol"==typeof Symbol.toStringTag}var U=Object.prototype.toString;var W=Object.prototype.hasOwnProperty;function X(e,r){return null!=e&&W.call(e,r)}var q="function"==typeof Symbol?Symbol:void 0,z="function"==typeof q?q.toStringTag:"";var Y=Z()?function(e){var r,t,n;if(null==e)return U.call(e);t=e[z],r=X(e,z);try{e[z]=void 0}catch(r){return U.call(e)}return n=U.call(e),r?e[z]=t:delete e[z],n}:function(e){return U.call(e)},D=Boolean,J=Boolean.prototype.toString;var H=Z();function K(e){return"object"==typeof e&&(e instanceof D||(H?function(e){try{return J.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===Y(e)))}function Q(e){return G(e)||K(e)}$(Q,"isPrimitive",G),$(Q,"isObject",K);var ee="object"==typeof self?self:null,re="object"==typeof window?window:null,te="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},ne="object"==typeof te?te:null,ie="object"==typeof globalThis?globalThis:null;var oe=function(e){if(arguments.length){if(!G(e))throw new TypeError(k("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return new Function("return this;")()}if(ie)return ie;if(ee)return ee;if(re)return re;if(ne)return ne;throw new Error("unexpected error. Unable to resolve global object.")}(),ae=oe.document&&oe.document.childNodes,ce=Int8Array;function ue(){return/^\s*function\s*([^(]*)/i}var le=/^\s*function\s*([^(]*)/i;$(ue,"REGEXP",le);var se=Array.isArray?Array.isArray:function(e){return"[object Array]"===Y(e)};function fe(e){return null!==e&&"object"==typeof e}function pe(e){var r,t,n,i;if(("Object"===(t=Y(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(r=le.exec(n.toString()))return r[1]}return fe(i=e)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}$(fe,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError(k("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var t,n;if(!se(r))return!1;if(0===(t=r.length))return!1;for(n=0;n<t;n++)if(!1===e(r[n]))return!1;return!0}}(fe));var ge="function"==typeof B||"object"==typeof ce||"function"==typeof ae?function(e){return pe(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"===(r=typeof e)?pe(e).toLowerCase():r};function de(e){return"function"===ge(e)}var he=Math.floor;function ye(e){return he(e)===e}var be=9007199254740991;function ve(){var e,r=arguments,t="https://stdlib.io/e/"+r[0]+"?";for(e=1;e<r.length;e++)t+="&arg[]="+encodeURIComponent(r[e]);return t}var we=Number.POSITIVE_INFINITY;var me,je=Object,_e=Object.getPrototypeOf;me=de(Object.getPrototypeOf)?_e:function(e){var r=function(e){return e.__proto__}(e);return r||null===r?r:"[object Function]"===Y(e.constructor)?e.constructor.prototype:e instanceof Object?Object.prototype:null};var Ee=me;var Oe=Object.prototype;function Se(e){var r;return!!function(e){return"object"==typeof e&&null!==e&&!se(e)}(e)&&(r=function(e){return null==e?null:(e=je(e),Ee(e))}(e),!r||!X(e,"constructor")&&X(r,"constructor")&&de(r.constructor)&&"[object Function]"===Y(r.constructor)&&X(r,"isPrototypeOf")&&de(r.isPrototypeOf)&&(r===Oe||function(e){var r;for(r in e)if(!X(e,r))return!1;return!0}(e)))}function Te(e){return"number"==typeof e}var Ae=Number,Pe=Ae.prototype.toString;var ke=Z();function xe(e){return"object"==typeof e&&(e instanceof Ae||(ke?function(e){try{return Pe.call(e),!0}catch(e){return!1}}(e):"[object Number]"===Y(e)))}function Ie(e){return Te(e)||xe(e)}$(Ie,"isPrimitive",Te),$(Ie,"isObject",xe);var Fe=Ae.NEGATIVE_INFINITY;function Ve(e){return e<we&&e>Fe&&ye(e)}function Re(e){return Te(e)&&Ve(e)}function Ce(e){return xe(e)&&Ve(e.valueOf())}function Ne(e){return Re(e)||Ce(e)}function Le(e){return Re(e)&&e>0}function $e(e){return Ce(e)&&e.valueOf()>0}function Be(e){return Le(e)||$e(e)}function Ge(e){if(e.__esModule)return e;var r=e.default;if("function"==typeof r){var t=function e(){return this instanceof e?Reflect.construct(r,arguments,this.constructor):r.apply(this,arguments)};t.prototype=r.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(e).forEach((function(r){var n=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(t,r,n.get?n:{enumerable:!0,get:function(){return e[r]}})})),t}$(Ne,"isPrimitive",Re),$(Ne,"isObject",Ce),$(Be,"isPrimitive",Le),$(Be,"isObject",$e);var Me=Ge(Object.freeze({__proto__:null,default:()=>()=>{}}))("inmap-async:limit");function Ze(e,r){var t,n,i;if(t={},arguments.length>1){if(n=function(e,r){return Se(r)?(X(r,"thisArg")&&(e.thisArg=r.thisArg),X(r,"series")&&(e.series=r.series,!G(e.series))?new TypeError(ve("1RL2o","series",e.series)):X(r,"limit")&&(e.limit=r.limit,!Le(e.limit))?new TypeError(ve("1RL3P","limit",e.limit)):null):new TypeError(ve("1RL2V",r))}(t,e),n)throw n;i=r}else i=e;if(!de(i))throw new TypeError(ve("1RL3q",i));return t.series?t.limit=1:t.limit||(t.limit=we),function(e,r){if(n=e,!("object"==typeof n&&null!==n&&"number"==typeof n.length&&ye(n.length)&&n.length>=0&&n.length<=be))throw new TypeError(ve("1RLAh",e));var n;if(!de(r))throw new TypeError(ve("1RL3q",r));return function(e,r,t,n){var i,o,a,c,u,l,s;if(u=e.length,Me("Collection length: %d",u),0===u)return Me("Finished processing a collection."),n();for(c=u<r.limit?u:r.limit,Me("Concurrency limit: %d",c),Me("Number of arguments: %d",t.length),i=u-1,o=0,l=-1,s=0;s<c;s++)l<i&&f();function f(){var n;function i(r,t){if(!a){if(r)return a=!0,p(r);e[n]=t,p()}}Me("Collection element %d: %s.",n=l+=1,JSON.stringify(e[n])),2===t.length?t.call(r.thisArg,e[n],i):3===t.length?t.call(r.thisArg,e[n],n,i):t.call(r.thisArg,e[n],n,e,i)}function p(e){return e?(Me("Encountered an error: %s",e.message),n(e)):(Me("Processed %d of %d collection elements.",o+=1,u),l<i?f():o===u?(Me("Finished processing a collection."),n()):void 0)}}(e,t,i,(function(t){if(t)return r(t,e);r(null,e)}))}}function Ue(e,r,t,n){if(arguments.length<4)return Ze(r)(e,t);Ze(r,t)(e,n)}$(Ue,"factory",Ze);export{Ue as default,Ze as factory};
//# sourceMappingURL=mod.js.map