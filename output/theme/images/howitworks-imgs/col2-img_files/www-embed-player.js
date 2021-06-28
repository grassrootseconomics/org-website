(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';var m;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var ba="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function ca(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var da=ca(this);function t(a,b){if(b)a:{var c=da;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&ba(c,a,{configurable:!0,writable:!0,value:b})}}
t("Symbol",function(a){function b(f){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c(d+(f||"")+"_"+e++,f)}
function c(f,g){this.h=f;ba(this,"description",{configurable:!0,writable:!0,value:g})}
if(a)return a;c.prototype.toString=function(){return this.h};
var d="jscomp_symbol_"+(1E9*Math.random()>>>0)+"_",e=0;return b});
t("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=da[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&ba(d.prototype,a,{configurable:!0,writable:!0,value:function(){return ea(aa(this))}})}return a});
function ea(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
function u(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}
function fa(a){if(!(a instanceof Array)){a=u(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a}
var ha="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},ia=function(){function a(){function c(){}
new c;Reflect.construct(c,[],function(){});
return new c instanceof c}
if("undefined"!=typeof Reflect&&Reflect.construct){if(a())return Reflect.construct;var b=Reflect.construct;return function(c,d,e){c=b(c,d);e&&Reflect.setPrototypeOf(c,e.prototype);return c}}return function(c,d,e){void 0===e&&(e=c);
e=ha(e.prototype||Object.prototype);return Function.prototype.apply.call(c,e,d)||e}}(),ja;
if("function"==typeof Object.setPrototypeOf)ja=Object.setPrototypeOf;else{var ka;a:{var la={a:!0},ma={};try{ma.__proto__=la;ka=ma.a;break a}catch(a){}ka=!1}ja=ka?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var na=ja;
function v(a,b){a.prototype=ha(b.prototype);a.prototype.constructor=a;if(na)na(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.O=b.prototype}
function oa(){this.u=!1;this.l=null;this.i=void 0;this.h=1;this.o=this.m=0;this.C=this.j=null}
function pa(a){if(a.u)throw new TypeError("Generator is already running");a.u=!0}
oa.prototype.A=function(a){this.i=a};
function qa(a,b){a.j={Ha:b,Ia:!0};a.h=a.m||a.o}
oa.prototype.return=function(a){this.j={return:a};this.h=this.o};
function w(a,b,c){a.h=c;return{value:b}}
oa.prototype.B=function(a){this.h=a};
function ra(a,b,c){a.m=b;void 0!=c&&(a.o=c)}
function sa(a){a.m=0;var b=a.j.Ha;a.j=null;return b}
function ta(a){a.C=[a.j];a.m=0;a.o=0}
function ua(a){var b=a.C.splice(0)[0];(b=a.j=a.j||b)?b.Ia?a.h=a.m||a.o:void 0!=b.B&&a.o<b.B?(a.h=b.B,a.j=null):a.h=a.o:a.h=0}
function va(a){this.h=new oa;this.i=a}
function wa(a,b){pa(a.h);var c=a.h.l;if(c)return xa(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.h.return);
a.h.return(b);return ya(a)}
function xa(a,b,c,d){try{var e=b.call(a.h.l,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.h.u=!1,e;var f=e.value}catch(g){return a.h.l=null,qa(a.h,g),ya(a)}a.h.l=null;d.call(a.h,f);return ya(a)}
function ya(a){for(;a.h.h;)try{var b=a.i(a.h);if(b)return a.h.u=!1,{value:b.value,done:!1}}catch(c){a.h.i=void 0,qa(a.h,c)}a.h.u=!1;if(a.h.j){b=a.h.j;a.h.j=null;if(b.Ia)throw b.Ha;return{value:b.return,done:!0}}return{value:void 0,done:!0}}
function za(a){this.next=function(b){pa(a.h);a.h.l?b=xa(a,a.h.l.next,b,a.h.A):(a.h.A(b),b=ya(a));return b};
this.throw=function(b){pa(a.h);a.h.l?b=xa(a,a.h.l["throw"],b,a.h.A):(qa(a.h,b),b=ya(a));return b};
this.return=function(b){return wa(a,b)};
this[Symbol.iterator]=function(){return this}}
function x(a,b){b=new za(new va(b));na&&a.prototype&&na(b,a.prototype);return b}
t("Reflect",function(a){return a?a:{}});
t("Reflect.construct",function(){return ia});
t("Reflect.setPrototypeOf",function(a){return a?a:na?function(b,c){try{return na(b,c),!0}catch(d){return!1}}:null});
function Aa(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
t("WeakMap",function(a){function b(k){this.h=(h+=Math.random()+1).toString();if(k){k=u(k);for(var l;!(l=k.next()).done;)l=l.value,this.set(l[0],l[1])}}
function c(){}
function d(k){var l=typeof k;return"object"===l&&null!==k||"function"===l}
function e(k){if(!Aa(k,g)){var l=new c;ba(k,g,{value:l})}}
function f(k){var l=Object[k];l&&(Object[k]=function(n){if(n instanceof c)return n;Object.isExtensible(n)&&e(n);return l(n)})}
if(function(){if(!a||!Object.seal)return!1;try{var k=Object.seal({}),l=Object.seal({}),n=new a([[k,2],[l,3]]);if(2!=n.get(k)||3!=n.get(l))return!1;n.delete(k);n.set(l,4);return!n.has(k)&&4==n.get(l)}catch(p){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(k,l){if(!d(k))throw Error("Invalid WeakMap key");e(k);if(!Aa(k,g))throw Error("WeakMap key fail: "+k);k[g][this.h]=l;return this};
b.prototype.get=function(k){return d(k)&&Aa(k,g)?k[g][this.h]:void 0};
b.prototype.has=function(k){return d(k)&&Aa(k,g)&&Aa(k[g],this.h)};
b.prototype.delete=function(k){return d(k)&&Aa(k,g)&&Aa(k[g],this.h)?delete k[g][this.h]:!1};
return b});
t("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,k){var l=h.h;return ea(function(){if(l){for(;l.head!=h.h;)l=l.previous;for(;l.next!=l.head;)return l=l.next,{done:!1,value:k(l)};l=null}return{done:!0,value:void 0}})}
function d(h,k){var l=k&&typeof k;"object"==l||"function"==l?f.has(k)?l=f.get(k):(l=""+ ++g,f.set(k,l)):l="p_"+k;var n=h.data_[l];if(n&&Aa(h.data_,l))for(h=0;h<n.length;h++){var p=n[h];if(k!==k&&p.key!==p.key||k===p.key)return{id:l,list:n,index:h,H:p}}return{id:l,list:n,index:-1,H:void 0}}
function e(h){this.data_={};this.h=b();this.size=0;if(h){h=u(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var h=Object.seal({x:4}),k=new a(u([[h,"s"]]));if("s"!=k.get(h)||1!=k.size||k.get({x:4})||k.set({x:4},"t")!=k||2!=k.size)return!1;var l=k.entries(),n=l.next();if(n.done||n.value[0]!=h||"s"!=n.value[1])return!1;n=l.next();return n.done||4!=n.value[0].x||"t"!=n.value[1]||!l.next().done?!1:!0}catch(p){return!1}}())return a;
var f=new WeakMap;e.prototype.set=function(h,k){h=0===h?0:h;var l=d(this,h);l.list||(l.list=this.data_[l.id]=[]);l.H?l.H.value=k:(l.H={next:this.h,previous:this.h.previous,head:this.h,key:h,value:k},l.list.push(l.H),this.h.previous.next=l.H,this.h.previous=l.H,this.size++);return this};
e.prototype.delete=function(h){h=d(this,h);return h.H&&h.list?(h.list.splice(h.index,1),h.list.length||delete this.data_[h.id],h.H.previous.next=h.H.next,h.H.next.previous=h.H.previous,h.H.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this.data_={};this.h=this.h.previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).H};
e.prototype.get=function(h){return(h=d(this,h).H)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,k){for(var l=this.entries(),n;!(n=l.next()).done;)n=n.value,h.call(k,n[1],n[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
function Ba(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
t("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=Ba(this,b,"endsWith");b+="";void 0===c&&(c=d.length);c=Math.max(0,Math.min(c|0,d.length));for(var e=b.length;0<e&&0<c;)if(d[--c]!=b[--e])return!1;return 0>=e}});
t("Array.prototype.find",function(a){return a?a:function(b,c){a:{var d=this;d instanceof String&&(d=String(d));for(var e=d.length,f=0;f<e;f++){var g=d[f];if(b.call(c,g,f,d)){b=g;break a}}b=void 0}return b}});
t("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=Ba(this,b,"startsWith");b+="";var e=d.length,f=b.length;c=Math.max(0,Math.min(c|0,d.length));for(var g=0;g<f&&c<e;)if(d[c++]!=b[g++])return!1;return g>=f}});
t("Object.setPrototypeOf",function(a){return a||na});
var Ca="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)Aa(d,e)&&(a[e]=d[e])}return a};
t("Object.assign",function(a){return a||Ca});
t("Promise",function(a){function b(g){this.h=0;this.j=void 0;this.i=[];this.u=!1;var h=this.l();try{g(h.resolve,h.reject)}catch(k){h.reject(k)}}
function c(){this.h=null}
function d(g){return g instanceof b?g:new b(function(h){h(g)})}
if(a)return a;c.prototype.i=function(g){if(null==this.h){this.h=[];var h=this;this.j(function(){h.o()})}this.h.push(g)};
var e=da.setTimeout;c.prototype.j=function(g){e(g,0)};
c.prototype.o=function(){for(;this.h&&this.h.length;){var g=this.h;this.h=[];for(var h=0;h<g.length;++h){var k=g[h];g[h]=null;try{k()}catch(l){this.l(l)}}}this.h=null};
c.prototype.l=function(g){this.j(function(){throw g;})};
b.prototype.l=function(){function g(l){return function(n){k||(k=!0,l.call(h,n))}}
var h=this,k=!1;return{resolve:g(this.K),reject:g(this.o)}};
b.prototype.K=function(g){if(g===this)this.o(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.aa(g);else{a:switch(typeof g){case "object":var h=null!=g;break a;case "function":h=!0;break a;default:h=!1}h?this.J(g):this.m(g)}};
b.prototype.J=function(g){var h=void 0;try{h=g.then}catch(k){this.o(k);return}"function"==typeof h?this.ba(h,g):this.m(g)};
b.prototype.o=function(g){this.A(2,g)};
b.prototype.m=function(g){this.A(1,g)};
b.prototype.A=function(g,h){if(0!=this.h)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.h);this.h=g;this.j=h;2===this.h&&this.M();this.C()};
b.prototype.M=function(){var g=this;e(function(){if(g.G()){var h=da.console;"undefined"!==typeof h&&h.error(g.j)}},1)};
b.prototype.G=function(){if(this.u)return!1;var g=da.CustomEvent,h=da.Event,k=da.dispatchEvent;if("undefined"===typeof k)return!0;"function"===typeof g?g=new g("unhandledrejection",{cancelable:!0}):"function"===typeof h?g=new h("unhandledrejection",{cancelable:!0}):(g=da.document.createEvent("CustomEvent"),g.initCustomEvent("unhandledrejection",!1,!0,g));g.promise=this;g.reason=this.j;return k(g)};
b.prototype.C=function(){if(null!=this.i){for(var g=0;g<this.i.length;++g)f.i(this.i[g]);this.i=null}};
var f=new c;b.prototype.aa=function(g){var h=this.l();g.ia(h.resolve,h.reject)};
b.prototype.ba=function(g,h){var k=this.l();try{g.call(h,k.resolve,k.reject)}catch(l){k.reject(l)}};
b.prototype.then=function(g,h){function k(r,q){return"function"==typeof r?function(A){try{l(r(A))}catch(I){n(I)}}:q}
var l,n,p=new b(function(r,q){l=r;n=q});
this.ia(k(g,l),k(h,n));return p};
b.prototype.catch=function(g){return this.then(void 0,g)};
b.prototype.ia=function(g,h){function k(){switch(l.h){case 1:g(l.j);break;case 2:h(l.j);break;default:throw Error("Unexpected state: "+l.h);}}
var l=this;null==this.i?f.i(k):this.i.push(k);this.u=!0};
b.resolve=d;b.reject=function(g){return new b(function(h,k){k(g)})};
b.race=function(g){return new b(function(h,k){for(var l=u(g),n=l.next();!n.done;n=l.next())d(n.value).ia(h,k)})};
b.all=function(g){var h=u(g),k=h.next();return k.done?d([]):new b(function(l,n){function p(A){return function(I){r[A]=I;q--;0==q&&l(r)}}
var r=[],q=0;do r.push(void 0),q++,d(k.value).ia(p(r.length-1),n),k=h.next();while(!k.done)})};
return b});
function Da(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};
e[Symbol.iterator]=function(){return e};
return e}
t("Array.prototype.entries",function(a){return a?a:function(){return Da(this,function(b,c){return[b,c]})}});
t("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)Aa(b,d)&&c.push([d,b[d]]);return c}});
t("Array.prototype.keys",function(a){return a?a:function(){return Da(this,function(b){return b})}});
t("Array.prototype.values",function(a){return a?a:function(){return Da(this,function(b,c){return c})}});
t("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});
t("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length;c=c||0;for(0>c&&(c=Math.max(c+e,0));c<e;c++){var f=d[c];if(f===b||Object.is(f,b))return!0}return!1}});
t("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==Ba(this,b,"includes").indexOf(b,c||0)}});
t("Set",function(a){function b(c){this.h=new Map;if(c){c=u(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.h.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(u([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
b.prototype.add=function(c){c=0===c?0:c;this.h.set(c,c);this.size=this.h.size;return this};
b.prototype.delete=function(c){c=this.h.delete(c);this.size=this.h.size;return c};
b.prototype.clear=function(){this.h.clear();this.size=0};
b.prototype.has=function(c){return this.h.has(c)};
b.prototype.entries=function(){return this.h.entries()};
b.prototype.values=function(){return this.h.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.h.forEach(function(f){return c.call(d,f,f,e)})};
return b});
t("Array.from",function(a){return a?a:function(b,c,d){c=null!=c?c:function(h){return h};
var e=[],f="undefined"!=typeof Symbol&&Symbol.iterator&&b[Symbol.iterator];if("function"==typeof f){b=f.call(b);for(var g=0;!(f=b.next()).done;)e.push(c.call(d,f.value,g++))}else for(f=b.length,g=0;g<f;g++)e.push(c.call(d,b[g],g));return e}});
t("Number.isNaN",function(a){return a?a:function(b){return"number"===typeof b&&isNaN(b)}});
t("Number.MAX_SAFE_INTEGER",function(){return 9007199254740991});
t("Object.values",function(a){return a?a:function(b){var c=[],d;for(d in b)Aa(b,d)&&c.push(b[d]);return c}});
var y=this||self;function z(a,b,c){a=a.split(".");c=c||y;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
function B(a,b){a=a.split(".");b=b||y;for(var c=0;c<a.length;c++)if(b=b[a[c]],null==b)return null;return b}
function Ea(){}
function Fa(a){var b=typeof a;return"object"!=b?b:a?Array.isArray(a)?"array":b:"null"}
function Ga(a){var b=Fa(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function Ha(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function Ia(a){return Object.prototype.hasOwnProperty.call(a,Ja)&&a[Ja]||(a[Ja]=++Ka)}
var Ja="closure_uid_"+(1E9*Math.random()>>>0),Ka=0;function La(a,b,c){return a.call.apply(a.bind,arguments)}
function Ma(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function Na(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Na=La:Na=Ma;return Na.apply(null,arguments)}
function Oa(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}}
function Pa(a,b){z(a,b,void 0)}
function C(a,b){function c(){}
c.prototype=b.prototype;a.O=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.fl=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}
function Qa(a){return a}
;function Ra(a,b){if(Error.captureStackTrace)Error.captureStackTrace(this,Ra);else{var c=Error().stack;c&&(this.stack=c)}a&&(this.message=String(a));b&&(this.Pa=b)}
C(Ra,Error);Ra.prototype.name="CustomError";function Sa(a){a=a.url;var b=/[?&]dsh=1(&|$)/.test(a);this.j=!b&&/[?&]ae=1(&|$)/.test(a);this.l=!b&&/[?&]ae=2(&|$)/.test(a);if((this.h=/[?&]adurl=([^&]*)/.exec(a))&&this.h[1]){try{var c=decodeURIComponent(this.h[1])}catch(d){c=null}this.i=c}}
;function Ta(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;var Va=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},D=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},Wa=Array.prototype.filter?function(a,b){return Array.prototype.filter.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=[],e=0,f="string"===typeof a?a.split(""):a,g=0;g<c;g++)if(g in f){var h=f[g];
b.call(void 0,h,g,a)&&(d[e++]=h)}return d},Xa=Array.prototype.map?function(a,b){return Array.prototype.map.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=Array(c),e="string"===typeof a?a.split(""):a,f=0;f<c;f++)f in e&&(d[f]=b.call(void 0,e[f],f,a));
return d},Ya=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
D(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d};
function Za(a,b){a:{for(var c=a.length,d="string"===typeof a?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){b=e;break a}b=-1}return 0>b?null:"string"===typeof a?a.charAt(b):a[b]}
function $a(a,b){b=Va(a,b);var c;(c=0<=b)&&Array.prototype.splice.call(a,b,1);return c}
function ab(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function bb(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Ga(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function cb(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function db(a){var b=eb,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function fb(a){for(var b in a)return!1;return!0}
function gb(a,b){if(null!==a&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=!0}
function hb(){var a=E("PLAYER_VARS",{});return null!==a&&"privembed"in a?a.privembed:!1}
function ib(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0}
function jb(a){var b={},c;for(c in a)b[c]=a[c];return b}
function kb(a){if(!a||"object"!==typeof a)return a;if("function"===typeof a.clone)return a.clone();if("undefined"!==typeof Map&&a instanceof Map)return new Map(a);if("undefined"!==typeof Set&&a instanceof Set)return new Set(a);var b=Array.isArray(a)?[]:"function"!==typeof ArrayBuffer||"function"!==typeof ArrayBuffer.isView||!ArrayBuffer.isView(a)||a instanceof DataView?{}:new a.constructor(a.length),c;for(c in a)b[c]=kb(a[c]);return b}
var lb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function mb(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<lb.length;f++)c=lb[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;var nb;function ob(){if(void 0===nb){var a=null,b=y.trustedTypes;if(b&&b.createPolicy){try{a=b.createPolicy("goog#html",{createHTML:Qa,createScript:Qa,createScriptURL:Qa})}catch(c){y.console&&y.console.error(c.message)}nb=a}else nb=a}return nb}
;var pb={};function qb(a){this.h=pb===pb?a:"";this.W=!0}
qb.prototype.V=function(){return this.h.toString()};
qb.prototype.toString=function(){return this.h.toString()};function rb(a,b){this.h=b===sb?a:""}
m=rb.prototype;m.W=!0;m.V=function(){return this.h.toString()};
m.wa=!0;m.ra=function(){return 1};
m.toString=function(){return this.h+""};
function tb(a){if(a instanceof rb&&a.constructor===rb)return a.h;Fa(a);return"type_error:TrustedResourceUrl"}
var sb={};function ub(a){var b=ob();a=b?b.createScriptURL(a):a;return new rb(a,sb)}
;var vb=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};
function wb(a,b){if(b)a=a.replace(xb,"&amp;").replace(yb,"&lt;").replace(zb,"&gt;").replace(Ab,"&quot;").replace(Bb,"&#39;").replace(Cb,"&#0;");else{if(!Db.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(xb,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(yb,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(zb,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(Ab,"&quot;"));-1!=a.indexOf("'")&&(a=a.replace(Bb,"&#39;"));-1!=a.indexOf("\x00")&&(a=a.replace(Cb,"&#0;"))}return a}
var xb=/&/g,yb=/</g,zb=/>/g,Ab=/"/g,Bb=/'/g,Cb=/\x00/g,Db=/[\x00&<>"']/;function Eb(a,b){this.h=b===Fb?a:""}
m=Eb.prototype;m.W=!0;m.V=function(){return this.h.toString()};
m.wa=!0;m.ra=function(){return 1};
m.toString=function(){return this.h.toString()};
function Gb(a){if(a instanceof Eb&&a.constructor===Eb)return a.h;Fa(a);return"type_error:SafeUrl"}
var Hb=/^(?:audio\/(?:3gpp2|3gpp|aac|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|x-matroska|x-wav|wav|webm)|font\/\w+|image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon)|video\/(?:mpeg|mp4|ogg|webm|quicktime|x-matroska))(?:;\w+=(?:\w+|"[\w;,= ]+"))*$/i,Ib=/^data:(.*);base64,[a-z0-9+\/]+=*$/i,Jb=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,Fb={},Kb=new Eb("about:invalid#zClosurez",Fb);var Lb;a:{var Mb=y.navigator;if(Mb){var Nb=Mb.userAgent;if(Nb){Lb=Nb;break a}}Lb=""}function F(a){return-1!=Lb.indexOf(a)}
;function Ob(a,b,c){this.h=c===Pb?a:"";this.i=b}
m=Ob.prototype;m.wa=!0;m.ra=function(){return this.i};
m.W=!0;m.V=function(){return this.h.toString()};
m.toString=function(){return this.h.toString()};
var Pb={};function Qb(a,b){var c=ob();a=c?c.createHTML(a):a;return new Ob(a,b,Pb)}
;function Rb(a,b){b instanceof Eb||b instanceof Eb||(b="object"==typeof b&&b.W?b.V():String(b),Jb.test(b)||(b="about:invalid#zClosurez"),b=new Eb(b,Fb));a.href=Gb(b)}
function Sb(a,b){a.rel="stylesheet";a.href=tb(b).toString();(b=Tb('style[nonce],link[rel="stylesheet"][nonce]',a.ownerDocument&&a.ownerDocument.defaultView))&&a.setAttribute("nonce",b)}
function Ub(){return Tb("script[nonce]",void 0)}
var Vb=/^[\w+/_-]+[=]{0,2}$/;function Tb(a,b){b=(b||y).document;return b.querySelector?(a=b.querySelector(a))&&(a=a.nonce||a.getAttribute("nonce"))&&Vb.test(a)?a:"":""}
;function Wb(a){return a=wb(a,void 0)}
function Xb(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b}
;var Yb=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Zb(a){return a?decodeURI(a):a}
function $b(a){return Zb(a.match(Yb)[3]||null)}
function ac(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)ac(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function bc(a){var b=[],c;for(c in a)ac(c,a[c],b);return b.join("&")}
function cc(a,b){b=bc(b);if(b){var c=a.indexOf("#");0>c&&(c=a.length);var d=a.indexOf("?");if(0>d||d>c){d=c;var e=""}else e=a.substring(d+1,c);a=[a.substr(0,d),e,a.substr(c)];c=a[1];a[1]=b?c?c+"&"+b:b:c;b=a[0]+(a[1]?"?"+a[1]:"")+a[2]}else b=a;return b}
var dc=/#|$/;function G(a,b){var c=void 0;return new (c||(c=Promise))(function(d,e){function f(k){try{h(b.next(k))}catch(l){e(l)}}
function g(k){try{h(b["throw"](k))}catch(l){e(l)}}
function h(k){k.done?d(k.value):(new c(function(l){l(k.value)})).then(f,g)}
h((b=b.apply(a,void 0)).next())})}
;function ec(){return F("iPhone")&&!F("iPod")&&!F("iPad")}
;function fc(a){fc[" "](a);return a}
fc[" "]=Ea;var gc=F("Opera"),hc=F("Trident")||F("MSIE"),ic=F("Edge"),jc=F("Gecko")&&!(-1!=Lb.toLowerCase().indexOf("webkit")&&!F("Edge"))&&!(F("Trident")||F("MSIE"))&&!F("Edge"),kc=-1!=Lb.toLowerCase().indexOf("webkit")&&!F("Edge"),lc=F("Android");function mc(){var a=y.document;return a?a.documentMode:void 0}
var nc;a:{var oc="",pc=function(){var a=Lb;if(jc)return/rv:([^\);]+)(\)|;)/.exec(a);if(ic)return/Edge\/([\d\.]+)/.exec(a);if(hc)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(kc)return/WebKit\/(\S+)/.exec(a);if(gc)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
pc&&(oc=pc?pc[1]:"");if(hc){var qc=mc();if(null!=qc&&qc>parseFloat(oc)){nc=String(qc);break a}}nc=oc}var rc=nc,sc;if(y.document&&hc){var tc=mc();sc=tc?tc:parseInt(rc,10)||void 0}else sc=void 0;var uc=sc;var vc=ec()||F("iPod"),wc=F("iPad"),xc=F("Safari")&&!((F("Chrome")||F("CriOS"))&&!F("Edge")||F("Coast")||F("Opera")||F("Edge")||F("Edg/")||F("OPR")||F("Firefox")||F("FxiOS")||F("Silk")||F("Android"))&&!(ec()||F("iPad")||F("iPod"));var yc={},zc=null;
function Ac(a){var b=3;Ga(a);void 0===b&&(b=0);if(!zc){zc={};for(var c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),d=["+/=","+/","-_=","-_.","-_"],e=0;5>e;e++){var f=c.concat(d[e].split(""));yc[e]=f;for(var g=0;g<f.length;g++){var h=f[g];void 0===zc[h]&&(zc[h]=g)}}}b=yc[b];c=Array(Math.floor(a.length/3));d=b[64]||"";for(e=f=0;f<a.length-2;f+=3){var k=a[f],l=a[f+1];h=a[f+2];g=b[k>>2];k=b[(k&3)<<4|l>>4];l=b[(l&15)<<2|h>>6];h=b[h&63];c[e++]=""+g+k+l+h}g=0;h=d;switch(a.length-
f){case 2:g=a[f+1],h=b[(g&15)<<2]||d;case 1:a=a[f],c[e]=""+b[a>>2]+b[(a&3)<<4|g>>4]+h+d}return c.join("")}
;var Bc={jl:{value:!0,configurable:!0}};var Cc=Object,Dc=Cc.freeze,Ec=[];Array.isArray(Ec)&&!Object.isFrozen(Ec)&&Object.defineProperties(Ec,Bc);Dc.call(Cc,Ec);var H=window;var Fc={};function Gc(){}
function Hc(a,b){if(b!==Fc)throw Error("Bad secret");this.h=a}
v(Hc,Gc);Hc.prototype.toString=function(){return this.h};
var Ic=new Hc("about:invalid#zTSz",Fc);function Jc(a){if(a instanceof Gc)if(a instanceof Hc)a=a.h;else throw Error("wrong type");else a=Gb(a);return a}
;function Kc(a,b){a.src=tb(b);var c;b=(a.ownerDocument&&a.ownerDocument.defaultView||window).document;(c=(b=null===(c=b.querySelector)||void 0===c?void 0:c.call(b,"script[nonce]"))?b.nonce||b.getAttribute("nonce")||"":"")&&a.setAttribute("nonce",c)}
;var Lc=!hc||9<=Number(uc);function Mc(a,b){this.x=void 0!==a?a:0;this.y=void 0!==b?b:0}
m=Mc.prototype;m.clone=function(){return new Mc(this.x,this.y)};
m.equals=function(a){return a instanceof Mc&&(this==a?!0:this&&a?this.x==a.x&&this.y==a.y:!1)};
m.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
m.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
m.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};function Nc(a,b){this.width=a;this.height=b}
m=Nc.prototype;m.clone=function(){return new Nc(this.width,this.height)};
m.aspectRatio=function(){return this.width/this.height};
m.isEmpty=function(){return!(this.width*this.height)};
m.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
m.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
m.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function Oc(a){var b=document;return"string"===typeof a?b.getElementById(a):a}
function Pc(a,b){cb(b,function(c,d){c&&"object"==typeof c&&c.W&&(c=c.V());"style"==d?a.style.cssText=c:"class"==d?a.className=c:"for"==d?a.htmlFor=c:Qc.hasOwnProperty(d)?a.setAttribute(Qc[d],c):0==d.lastIndexOf("aria-",0)||0==d.lastIndexOf("data-",0)?a.setAttribute(d,c):a[d]=c})}
var Qc={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};
function Rc(a,b,c){var d=arguments,e=document,f=String(d[0]),g=d[1];if(!Lc&&g&&(g.name||g.type)){f=["<",f];g.name&&f.push(' name="',Wb(g.name),'"');if(g.type){f.push(' type="',Wb(g.type),'"');var h={};mb(h,g);delete h.type;g=h}f.push(">");f=f.join("")}f=Sc(e,f);g&&("string"===typeof g?f.className=g:Array.isArray(g)?f.className=g.join(" "):Pc(f,g));2<d.length&&Tc(e,f,d);return f}
function Tc(a,b,c){function d(h){h&&b.appendChild("string"===typeof h?a.createTextNode(h):h)}
for(var e=2;e<c.length;e++){var f=c[e];if(!Ga(f)||Ha(f)&&0<f.nodeType)d(f);else{a:{if(f&&"number"==typeof f.length){if(Ha(f)){var g="function"==typeof f.item||"string"==typeof f.item;break a}if("function"===typeof f){g="function"==typeof f.item;break a}}g=!1}D(g?ab(f):f,d)}}}
function Sc(a,b){b=String(b);"application/xhtml+xml"===a.contentType&&(b=b.toLowerCase());return a.createElement(b)}
function Uc(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;function Vc(a){var b=Wc;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a.call(void 0,b[c],c,b)}
function Xc(){var a=[];Vc(function(b){a.push(b)});
return a}
var Wc={Jb:"allow-forms",Kb:"allow-modals",Lb:"allow-orientation-lock",Mb:"allow-pointer-lock",Nb:"allow-popups",Ob:"allow-popups-to-escape-sandbox",Pb:"allow-presentation",Qb:"allow-same-origin",Rb:"allow-scripts",Sb:"allow-top-navigation",Tb:"allow-top-navigation-by-user-activation"},Yc=Ta(function(){return Xc()});
function Zc(){var a=Sc(document,"IFRAME"),b={};D(Yc(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
;function $c(a){this.isValid=a}
function ad(a){return new $c(function(b){return b.substr(0,a.length+1).toLowerCase()===a+":"})}
var bd=[ad("data"),ad("http"),ad("https"),ad("mailto"),ad("ftp"),new $c(function(a){return/^[^:]*([/?#]|$)/.test(a)})];function cd(a){dd();return ub(a)}
var dd=Ea;function ed(a){"number"==typeof a&&(a=Math.round(a)+"px");return a}
;var fd=(new Date).getTime();function gd(a){if(!a)return"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));c=a.substring(0,a.indexOf("://"));if(!c)throw Error("URI is missing protocol: "+a);if("http"!==c&&"https"!==c&&"chrome-extension"!==c&&"moz-extension"!==c&&"file"!==c&&"android-app"!==c&&"chrome-search"!==c&&"chrome-untrusted"!==c&&"chrome"!==
c&&"app"!==c&&"devtools"!==c)throw Error("Invalid URI scheme in origin: "+c);a="";var d=b.indexOf(":");if(-1!=d){var e=b.substring(d+1);b=b.substring(0,d);if("http"===c&&"80"!==e||"https"===c&&"443"!==e)a=":"+e}return c+"://"+b+a}
;function hd(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;n=l=0}
function b(p){for(var r=g,q=0;64>q;q+=4)r[q/4]=p[q]<<24|p[q+1]<<16|p[q+2]<<8|p[q+3];for(q=16;80>q;q++)p=r[q-3]^r[q-8]^r[q-14]^r[q-16],r[q]=(p<<1|p>>>31)&4294967295;p=e[0];var A=e[1],I=e[2],J=e[3],X=e[4];for(q=0;80>q;q++){if(40>q)if(20>q){var Y=J^A&(I^J);var K=1518500249}else Y=A^I^J,K=1859775393;else 60>q?(Y=A&I|J&(A|I),K=2400959708):(Y=A^I^J,K=3395469782);Y=((p<<5|p>>>27)&4294967295)+Y+X+K+r[q]&4294967295;X=J;J=I;I=(A<<30|A>>>2)&4294967295;A=p;p=Y}e[0]=e[0]+p&4294967295;e[1]=e[1]+A&4294967295;e[2]=
e[2]+I&4294967295;e[3]=e[3]+J&4294967295;e[4]=e[4]+X&4294967295}
function c(p,r){if("string"===typeof p){p=unescape(encodeURIComponent(p));for(var q=[],A=0,I=p.length;A<I;++A)q.push(p.charCodeAt(A));p=q}r||(r=p.length);q=0;if(0==l)for(;q+64<r;)b(p.slice(q,q+64)),q+=64,n+=64;for(;q<r;)if(f[l++]=p[q++],n++,64==l)for(l=0,b(f);q+64<r;)b(p.slice(q,q+64)),q+=64,n+=64}
function d(){var p=[],r=8*n;56>l?c(h,56-l):c(h,64-(l-56));for(var q=63;56<=q;q--)f[q]=r&255,r>>>=8;b(f);for(q=r=0;5>q;q++)for(var A=24;0<=A;A-=8)p[r++]=e[q]>>A&255;return p}
for(var e=[],f=[],g=[],h=[128],k=1;64>k;++k)h[k]=0;var l,n;a();return{reset:a,update:c,digest:d,Qa:function(){for(var p=d(),r="",q=0;q<p.length;q++)r+="0123456789ABCDEF".charAt(Math.floor(p[q]/16))+"0123456789ABCDEF".charAt(p[q]%16);return r}}}
;function id(a,b,c){var d=String(y.location.href);return d&&a&&b?[b,jd(gd(d),a,c||null)].join(" "):null}
function jd(a,b,c){var d=[],e=[];if(1==(Array.isArray(c)?2:1))return e=[b,a],D(d,function(h){e.push(h)}),kd(e.join(" "));
var f=[],g=[];D(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];D(d,function(h){e.push(h)});
a=kd(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function kd(a){var b=hd();b.update(a);return b.Qa().toLowerCase()}
;var ld={};function md(a){this.h=a||{cookie:""}}
m=md.prototype;m.isEnabled=function(){if(!y.navigator.cookieEnabled)return!1;if(!this.isEmpty())return!0;this.set("TESTCOOKIESENABLED","1",{ya:60});if("1"!==this.get("TESTCOOKIESENABLED"))return!1;this.remove("TESTCOOKIESENABLED");return!0};
m.set=function(a,b,c){var d=!1;if("object"===typeof c){var e=c.ol;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.ya}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0===h&&(h=-1);this.h.cookie=a+"="+b+(f?";domain="+f:"")+(g?";path="+g:"")+(0>h?"":0==h?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+1E3*h)).toUTCString())+(d?";secure":"")+(null!=e?";samesite="+e:"")};
m.get=function(a,b){for(var c=a+"=",d=(this.h.cookie||"").split(";"),e=0,f;e<d.length;e++){f=vb(d[e]);if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
m.remove=function(a,b,c){var d=void 0!==this.get(a);this.set(a,"",{ya:0,path:b,domain:c});return d};
m.isEmpty=function(){return!this.h.cookie};
m.clear=function(){for(var a=(this.h.cookie||"").split(";"),b=[],c=[],d,e,f=0;f<a.length;f++)e=vb(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;0<=a;a--)this.remove(b[a])};
var nd=new md("undefined"==typeof document?null:document);function od(a){return!!ld.FPA_SAMESITE_PHASE2_MOD||!(void 0===a||!a)}
function pd(a){a=void 0===a?!1:a;var b=y.__SAPISID||y.__APISID||y.__3PSAPISID||y.__OVERRIDE_SID;od(a)&&(b=b||y.__1PSAPISID);if(b)return!0;var c=new md(document);b=c.get("SAPISID")||c.get("APISID")||c.get("__Secure-3PAPISID")||c.get("SID");od(a)&&(b=b||c.get("__Secure-1PAPISID"));return!!b}
function qd(a,b,c,d){(a=y[a])||(a=(new md(document)).get(b));return a?id(a,c,d):null}
function rd(a){var b=void 0===b?!1:b;var c=gd(String(y.location.href)),d=[];if(pd(b)){c=0==c.indexOf("https:")||0==c.indexOf("chrome-extension:")||0==c.indexOf("moz-extension:");var e=c?y.__SAPISID:y.__APISID;e||(e=new md(document),e=e.get(c?"SAPISID":"APISID")||e.get("__Secure-3PAPISID"));(e=e?id(e,c?"SAPISIDHASH":"APISIDHASH",a):null)&&d.push(e);c&&od(b)&&((b=qd("__1PSAPISID","__Secure-1PAPISID","SAPISID1PHASH",a))&&d.push(b),(a=qd("__3PSAPISID","__Secure-3PAPISID","SAPISID3PHASH",a))&&d.push(a))}return 0==
d.length?null:d.join(" ")}
;function sd(){this.data_=[];this.h=-1}
sd.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&0===a%1&&this.data_[a]!=b&&(this.data_[a]=b,this.h=-1)};
sd.prototype.get=function(a){return!!this.data_[a]};
function td(a){-1==a.h&&(a.h=Ya(a.data_,function(b,c,d){return c?b+Math.pow(2,d):b},0));
return a.h}
;function ud(a,b){this.j=a;this.l=b;this.i=0;this.h=null}
ud.prototype.get=function(){if(0<this.i){this.i--;var a=this.h;this.h=a.next;a.next=null}else a=this.j();return a};
function vd(a,b){a.l(b);100>a.i&&(a.i++,b.next=a.h,a.h=b)}
;var wd;
function xd(){var a=y.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!F("Presto")&&(a=function(){var e=Sc(document,"IFRAME");e.style.display="none";document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.close();var g="callImmediate"+Math.random(),h="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=Na(function(k){if(("*"==h||k.origin==h)&&k.data==g)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});
if("undefined"!==typeof a&&!F("Trident")&&!F("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.Ea;c.Ea=null;e()}};
return function(e){d.next={Ea:e};d=d.next;b.port2.postMessage(0)}}return function(e){y.setTimeout(e,0)}}
;function yd(a){y.setTimeout(function(){throw a;},0)}
;function zd(){this.i=this.h=null}
zd.prototype.add=function(a,b){var c=Ad.get();c.set(a,b);this.i?this.i.next=c:this.h=c;this.i=c};
zd.prototype.remove=function(){var a=null;this.h&&(a=this.h,this.h=this.h.next,this.h||(this.i=null),a.next=null);return a};
var Ad=new ud(function(){return new Bd},function(a){return a.reset()});
function Bd(){this.next=this.scope=this.h=null}
Bd.prototype.set=function(a,b){this.h=a;this.scope=b;this.next=null};
Bd.prototype.reset=function(){this.next=this.scope=this.h=null};function Cd(a,b){Dd||Ed();Fd||(Dd(),Fd=!0);Gd.add(a,b)}
var Dd;function Ed(){if(y.Promise&&y.Promise.resolve){var a=y.Promise.resolve(void 0);Dd=function(){a.then(Hd)}}else Dd=function(){var b=Hd;
"function"!==typeof y.setImmediate||y.Window&&y.Window.prototype&&!F("Edge")&&y.Window.prototype.setImmediate==y.setImmediate?(wd||(wd=xd()),wd(b)):y.setImmediate(b)}}
var Fd=!1,Gd=new zd;function Hd(){for(var a;a=Gd.remove();){try{a.h.call(a.scope)}catch(b){yd(b)}vd(Ad,a)}Fd=!1}
;function Id(a,b){this.h=a[y.Symbol.iterator]();this.i=b;this.j=0}
Id.prototype[Symbol.iterator]=function(){return this};
Id.prototype.next=function(){var a=this.h.next();return{value:a.done?void 0:this.i.call(void 0,a.value,this.j++),done:a.done}};
function Jd(a,b){return new Id(a,b)}
;function Kd(){this.blockSize=-1}
;function Ld(){this.blockSize=-1;this.blockSize=64;this.h=[];this.o=[];this.m=[];this.j=[];this.j[0]=128;for(var a=1;a<this.blockSize;++a)this.j[a]=0;this.l=this.i=0;this.reset()}
C(Ld,Kd);Ld.prototype.reset=function(){this.h[0]=1732584193;this.h[1]=4023233417;this.h[2]=2562383102;this.h[3]=271733878;this.h[4]=3285377520;this.l=this.i=0};
function Md(a,b,c){c||(c=0);var d=a.m;if("string"===typeof b)for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.h[0];c=a.h[1];var g=a.h[2],h=a.h[3],k=a.h[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=h^c&(g^h);var l=1518500249}else f=c^g^h,l=1859775393;else 60>e?(f=c&g|h&(c|g),l=2400959708):
(f=c^g^h,l=3395469782);f=(b<<5|b>>>27)+f+k+l+d[e]&4294967295;k=h;h=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.h[0]=a.h[0]+b&4294967295;a.h[1]=a.h[1]+c&4294967295;a.h[2]=a.h[2]+g&4294967295;a.h[3]=a.h[3]+h&4294967295;a.h[4]=a.h[4]+k&4294967295}
Ld.prototype.update=function(a,b){if(null!=a){void 0===b&&(b=a.length);for(var c=b-this.blockSize,d=0,e=this.o,f=this.i;d<b;){if(0==f)for(;d<=c;)Md(this,a,d),d+=this.blockSize;if("string"===typeof a)for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.blockSize){Md(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.blockSize){Md(this,e);f=0;break}}this.i=f;this.l+=b}};
Ld.prototype.digest=function(){var a=[],b=8*this.l;56>this.i?this.update(this.j,56-this.i):this.update(this.j,this.blockSize-(this.i-56));for(var c=this.blockSize-1;56<=c;c--)this.o[c]=b&255,b/=256;Md(this,this.o);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.h[c]>>d&255,++b;return a};function Nd(a){var b=B("window.location.href");null==a&&(a='Unknown Error of type "null/undefined"');if("string"===typeof a)return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(g){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||y.$googDebugFname||b}catch(g){e="Not available",c=!0}b=Od(a);if(!(!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name)){c=a.message;if(null==
c){if(a.constructor&&a.constructor instanceof Function){if(a.constructor.name)c=a.constructor.name;else if(c=a.constructor,Pd[c])c=Pd[c];else{c=String(c);if(!Pd[c]){var f=/function\s+([^\(]+)/m.exec(c);Pd[c]=f?f[1]:"[Anonymous]"}c=Pd[c]}c='Unknown Error of type "'+c+'"'}else c="Unknown Error of unknown type";"function"===typeof a.toString&&Object.prototype.toString!==a.toString&&(c+=": "+a.toString())}return{message:c,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:b||"Not available"}}a.stack=
b;return{message:a.message,name:a.name,lineNumber:a.lineNumber,fileName:a.fileName,stack:a.stack}}
function Od(a,b){b||(b={});b[Qd(a)]=!0;var c=a.stack||"";(a=a.Pa)&&!b[Qd(a)]&&(c+="\nCaused by: ",a.stack&&0==a.stack.indexOf(a.toString())||(c+="string"===typeof a?a:a.message+"\n"),c+=Od(a,b));return c}
function Qd(a){var b="";"function"===typeof a.toString&&(b=""+a);return b+a.stack}
var Pd={};function Rd(a){a&&"function"==typeof a.dispose&&a.dispose()}
;function Sd(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];Ga(d)?Sd.apply(null,d):Rd(d)}}
;function L(){this.h=this.h;this.o=this.o}
L.prototype.h=!1;L.prototype.dispose=function(){this.h||(this.h=!0,this.D())};
function Td(a,b){a.h?b():(a.o||(a.o=[]),a.o.push(b))}
L.prototype.D=function(){if(this.o)for(;this.o.length;)this.o.shift()()};function Ud(a){return"string"==typeof a.className?a.className:a.getAttribute&&a.getAttribute("class")||""}
function Vd(a,b){"string"==typeof a.className?a.className=b:a.setAttribute&&a.setAttribute("class",b)}
function Wd(a,b){a.classList?b=a.classList.contains(b):(a=a.classList?a.classList:Ud(a).match(/\S+/g)||[],b=0<=Va(a,b));return b}
function Xd(){var a=document.body;a.classList?a.classList.remove("inverted-hdpi"):Wd(a,"inverted-hdpi")&&Vd(a,Array.prototype.filter.call(a.classList?a.classList:Ud(a).match(/\S+/g)||[],function(b){return"inverted-hdpi"!=b}).join(" "))}
;var Yd="StopIteration"in y?y.StopIteration:{message:"StopIteration",stack:""};function Zd(){}
Zd.prototype.next=function(){return Zd.prototype.h.call(this)};
Zd.prototype.h=function(){throw Yd;};
Zd.prototype.L=function(){return this};function $d(a){if(a instanceof ae||a instanceof be||a instanceof ce)return a;if("function"==typeof a.next)return new ae(function(){return de(a)});
if("function"==typeof a[Symbol.iterator])return new ae(function(){return a[Symbol.iterator]()});
if("function"==typeof a.L)return new ae(function(){return de(a.L())});
throw Error("Not an iterator or iterable.");}
function de(a){if(!(a instanceof Zd))return a;var b=!1;return{next:function(){for(var c;!b;)try{c=a.next();break}catch(d){if(d!==Yd)throw d;b=!0}return{value:c,done:b}}}}
function ae(a){this.h=a}
ae.prototype.L=function(){return new be(this.h())};
ae.prototype[Symbol.iterator]=function(){return new ce(this.h())};
ae.prototype.i=function(){return new ce(this.h())};
function be(a){this.j=a}
v(be,Zd);be.prototype.h=function(){var a=this.j.next();if(a.done)throw Yd;return a.value};
be.prototype.next=function(){return be.prototype.h.call(this)};
be.prototype[Symbol.iterator]=function(){return new ce(this.j)};
be.prototype.i=function(){return new ce(this.j)};
function ce(a){ae.call(this,function(){return a});
this.j=a}
v(ce,ae);ce.prototype.next=function(){return this.j.next()};function ee(a,b){this.i={};this.h=[];this.T=this.size=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof ee)for(c=fe(a),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
function fe(a){ge(a);return a.h.concat()}
m=ee.prototype;m.has=function(a){return he(this.i,a)};
m.equals=function(a,b){if(this===a)return!0;if(this.size!=a.size)return!1;b=b||ie;ge(this);for(var c,d=0;c=this.h[d];d++)if(!b(this.get(c),a.get(c)))return!1;return!0};
function ie(a,b){return a===b}
m.isEmpty=function(){return 0==this.size};
m.clear=function(){this.i={};this.T=this.size=this.h.length=0};
m.remove=function(a){return this.delete(a)};
m.delete=function(a){return he(this.i,a)?(delete this.i[a],--this.size,this.T++,this.h.length>2*this.size&&ge(this),!0):!1};
function ge(a){if(a.size!=a.h.length){for(var b=0,c=0;b<a.h.length;){var d=a.h[b];he(a.i,d)&&(a.h[c++]=d);b++}a.h.length=c}if(a.size!=a.h.length){var e={};for(c=b=0;b<a.h.length;)d=a.h[b],he(e,d)||(a.h[c++]=d,e[d]=1),b++;a.h.length=c}}
m.get=function(a,b){return he(this.i,a)?this.i[a]:b};
m.set=function(a,b){he(this.i,a)||(this.size+=1,this.h.push(a),this.T++);this.i[a]=b};
m.forEach=function(a,b){for(var c=fe(this),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
m.clone=function(){return new ee(this)};
m.keys=function(){return $d(this.L(!0)).i()};
m.values=function(){return $d(this.L(!1)).i()};
m.entries=function(){var a=this;return Jd(this.keys(),function(b){return[b,a.get(b)]})};
m.L=function(a){ge(this);var b=0,c=this.T,d=this,e=new Zd;e.h=function(){if(c!=d.T)throw Error("The map has changed since the iterator was created");if(b>=d.h.length)throw Yd;var f=d.h[b++];return a?f:d.i[f]};
e.next=e.h.bind(e);return e};
function he(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
;var je=function(){if(!y.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{y.addEventListener("test",Ea,b),y.removeEventListener("test",Ea,b)}catch(c){}return a}();function ke(a,b){this.type=a;this.h=this.target=b;this.defaultPrevented=this.j=!1}
ke.prototype.stopPropagation=function(){this.j=!0};
ke.prototype.preventDefault=function(){this.defaultPrevented=!0};function le(a,b){ke.call(this,a?a.type:"");this.relatedTarget=this.h=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.i=null;a&&this.init(a,b)}
C(le,ke);var me={2:"touch",3:"pen",4:"mouse"};
le.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.h=b;if(b=a.relatedTarget){if(jc){a:{try{fc(b.nodeName);var e=!0;break a}catch(f){}e=!1}e||(b=null)}}else"mouseover"==c?b=a.fromElement:"mouseout"==c&&(b=a.toElement);this.relatedTarget=b;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||
0):(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType="string"===typeof a.pointerType?a.pointerType:me[a.pointerType]||"";this.state=a.state;
this.i=a;a.defaultPrevented&&le.O.preventDefault.call(this)};
le.prototype.stopPropagation=function(){le.O.stopPropagation.call(this);this.i.stopPropagation?this.i.stopPropagation():this.i.cancelBubble=!0};
le.prototype.preventDefault=function(){le.O.preventDefault.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var ne="closure_listenable_"+(1E6*Math.random()|0);var oe=0;function pe(a,b,c,d,e){this.listener=a;this.h=null;this.src=b;this.type=c;this.capture=!!d;this.ka=e;this.key=++oe;this.ea=this.ha=!1}
function qe(a){a.ea=!0;a.listener=null;a.h=null;a.src=null;a.ka=null}
;function re(a){this.src=a;this.listeners={};this.h=0}
re.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.h++);var g=se(a,b,d,e);-1<g?(b=a[g],c||(b.ha=!1)):(b=new pe(b,this.src,f,!!d,e),b.ha=c,a.push(b));return b};
re.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=se(e,b,c,d);return-1<b?(qe(e[b]),Array.prototype.splice.call(e,b,1),0==e.length&&(delete this.listeners[a],this.h--),!0):!1};
function te(a,b){var c=b.type;c in a.listeners&&$a(a.listeners[c],b)&&(qe(b),0==a.listeners[c].length&&(delete a.listeners[c],a.h--))}
function se(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.ea&&f.listener==b&&f.capture==!!c&&f.ka==d)return e}return-1}
;var ue="closure_lm_"+(1E6*Math.random()|0),ve={},we=0;function xe(a,b,c,d,e){if(d&&d.once)ye(a,b,c,d,e);else if(Array.isArray(b))for(var f=0;f<b.length;f++)xe(a,b[f],c,d,e);else c=ze(c),a&&a[ne]?a.ca(b,c,Ha(d)?!!d.capture:!!d,e):Ae(a,b,c,!1,d,e)}
function Ae(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=Ha(e)?!!e.capture:!!e,h=Be(a);h||(a[ue]=h=new re(a));c=h.add(b,c,d,g,f);if(!c.h){d=Ce();c.h=d;d.src=a;d.listener=c;if(a.addEventListener)je||(e=g),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(De(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");we++}}
function Ce(){function a(c){return b.call(a.src,a.listener,c)}
var b=Ee;return a}
function ye(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)ye(a,b[f],c,d,e);else c=ze(c),a&&a[ne]?a.i.add(String(b),c,!0,Ha(d)?!!d.capture:!!d,e):Ae(a,b,c,!0,d,e)}
function Fe(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)Fe(a,b[f],c,d,e);else(d=Ha(d)?!!d.capture:!!d,c=ze(c),a&&a[ne])?a.i.remove(String(b),c,d,e):a&&(a=Be(a))&&(b=a.listeners[b.toString()],a=-1,b&&(a=se(b,c,d,e)),(c=-1<a?b[a]:null)&&Ge(c))}
function Ge(a){if("number"!==typeof a&&a&&!a.ea){var b=a.src;if(b&&b[ne])te(b.i,a);else{var c=a.type,d=a.h;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(De(c),d):b.addListener&&b.removeListener&&b.removeListener(d);we--;(c=Be(b))?(te(c,a),0==c.h&&(c.src=null,b[ue]=null)):qe(a)}}}
function De(a){return a in ve?ve[a]:ve[a]="on"+a}
function Ee(a,b){if(a.ea)a=!0;else{b=new le(b,this);var c=a.listener,d=a.ka||a.src;a.ha&&Ge(a);a=c.call(d,b)}return a}
function Be(a){a=a[ue];return a instanceof re?a:null}
var He="__closure_events_fn_"+(1E9*Math.random()>>>0);function ze(a){if("function"===typeof a)return a;a[He]||(a[He]=function(b){return a.handleEvent(b)});
return a[He]}
;function Ie(){L.call(this);this.i=new re(this);this.M=this;this.u=null}
C(Ie,L);Ie.prototype[ne]=!0;Ie.prototype.addEventListener=function(a,b,c,d){xe(this,a,b,c,d)};
Ie.prototype.removeEventListener=function(a,b,c,d){Fe(this,a,b,c,d)};
function Je(a,b){var c=a.u;if(c){var d=[];for(var e=1;c;c=c.u)d.push(c),++e}a=a.M;c=b.type||b;"string"===typeof b?b=new ke(b,a):b instanceof ke?b.target=b.target||a:(e=b,b=new ke(c,a),mb(b,e));e=!0;if(d)for(var f=d.length-1;!b.j&&0<=f;f--){var g=b.h=d[f];e=Ke(g,c,!0,b)&&e}b.j||(g=b.h=a,e=Ke(g,c,!0,b)&&e,b.j||(e=Ke(g,c,!1,b)&&e));if(d)for(f=0;!b.j&&f<d.length;f++)g=b.h=d[f],e=Ke(g,c,!1,b)&&e}
Ie.prototype.D=function(){Ie.O.D.call(this);if(this.i){var a=this.i,b=0,c;for(c in a.listeners){for(var d=a.listeners[c],e=0;e<d.length;e++)++b,qe(d[e]);delete a.listeners[c];a.h--}}this.u=null};
Ie.prototype.ca=function(a,b,c,d){return this.i.add(String(a),b,!1,c,d)};
function Ke(a,b,c,d){b=a.i.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.ea&&g.capture==c){var h=g.listener,k=g.ka||g.src;g.ha&&te(a.i,g);e=!1!==h.call(k,d)&&e}}return e&&!d.defaultPrevented}
;function Le(a){var b=[];Me(new Ne,a,b);return b.join("")}
function Ne(){}
function Me(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(Array.isArray(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),Me(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),Oe(d,c),c.push(":"),Me(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":Oe(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var Pe={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},Qe=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function Oe(a,b){b.push('"',a.replace(Qe,function(c){var d=Pe[c];d||(d="\\u"+(c.charCodeAt(0)|65536).toString(16).substr(1),Pe[c]=d);return d}),'"')}
;function Re(a){if(!a)return!1;try{return!!a.$goog_Thenable}catch(b){return!1}}
;function Se(a){this.h=0;this.u=void 0;this.l=this.i=this.j=null;this.o=this.m=!1;if(a!=Ea)try{var b=this;a.call(void 0,function(c){Te(b,2,c)},function(c){Te(b,3,c)})}catch(c){Te(this,3,c)}}
function Ue(){this.next=this.context=this.onRejected=this.i=this.h=null;this.j=!1}
Ue.prototype.reset=function(){this.context=this.onRejected=this.i=this.h=null;this.j=!1};
var Ve=new ud(function(){return new Ue},function(a){a.reset()});
function We(a,b,c){var d=Ve.get();d.i=a;d.onRejected=b;d.context=c;return d}
function Xe(a){return new Se(function(b,c){c(a)})}
Se.prototype.then=function(a,b,c){return Ye(this,"function"===typeof a?a:null,"function"===typeof b?b:null,c)};
Se.prototype.$goog_Thenable=!0;function Ze(a,b){return Ye(a,null,b,void 0)}
Se.prototype.cancel=function(a){if(0==this.h){var b=new $e(a);Cd(function(){af(this,b)},this)}};
function af(a,b){if(0==a.h)if(a.j){var c=a.j;if(c.i){for(var d=0,e=null,f=null,g=c.i;g&&(g.j||(d++,g.h==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.h&&1==d?af(c,b):(f?(d=f,d.next==c.l&&(c.l=d),d.next=d.next.next):bf(c),cf(c,e,3,b)))}a.j=null}else Te(a,3,b)}
function df(a,b){a.i||2!=a.h&&3!=a.h||ef(a);a.l?a.l.next=b:a.i=b;a.l=b}
function Ye(a,b,c,d){var e=We(null,null,null);e.h=new Se(function(f,g){e.i=b?function(h){try{var k=b.call(d,h);f(k)}catch(l){g(l)}}:f;
e.onRejected=c?function(h){try{var k=c.call(d,h);void 0===k&&h instanceof $e?g(h):f(k)}catch(l){g(l)}}:g});
e.h.j=a;df(a,e);return e.h}
Se.prototype.C=function(a){this.h=0;Te(this,2,a)};
Se.prototype.G=function(a){this.h=0;Te(this,3,a)};
function Te(a,b,c){if(0==a.h){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.h=1;a:{var d=c,e=a.C,f=a.G;if(d instanceof Se){df(d,We(e||Ea,f||null,a));var g=!0}else if(Re(d))d.then(e,f,a),g=!0;else{if(Ha(d))try{var h=d.then;if("function"===typeof h){ff(d,h,e,f,a);g=!0;break a}}catch(k){f.call(a,k);g=!0;break a}g=!1}}g||(a.u=c,a.h=b,a.j=null,ef(a),3!=b||c instanceof $e||gf(a,c))}}
function ff(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}
function g(k){h||(h=!0,c.call(e,k))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function ef(a){a.m||(a.m=!0,Cd(a.A,a))}
function bf(a){var b=null;a.i&&(b=a.i,a.i=b.next,b.next=null);a.i||(a.l=null);return b}
Se.prototype.A=function(){for(var a;a=bf(this);)cf(this,a,this.h,this.u);this.m=!1};
function cf(a,b,c,d){if(3==c&&b.onRejected&&!b.j)for(;a&&a.o;a=a.j)a.o=!1;if(b.h)b.h.j=null,hf(b,c,d);else try{b.j?b.i.call(b.context):hf(b,c,d)}catch(e){jf.call(null,e)}vd(Ve,b)}
function hf(a,b,c){2==b?a.i.call(a.context,c):a.onRejected&&a.onRejected.call(a.context,c)}
function gf(a,b){a.o=!0;Cd(function(){a.o&&jf.call(null,b)})}
var jf=yd;function $e(a){Ra.call(this,a)}
C($e,Ra);$e.prototype.name="cancel";function M(a){L.call(this);this.u=1;this.l=[];this.m=0;this.i=[];this.j={};this.A=!!a}
C(M,L);m=M.prototype;m.subscribe=function(a,b,c){var d=this.j[a];d||(d=this.j[a]=[]);var e=this.u;this.i[e]=a;this.i[e+1]=b;this.i[e+2]=c;this.u=e+3;d.push(e);return e};
function kf(a,b,c,d){if(b=a.j[b]){var e=a.i;(b=b.find(function(f){return e[f+1]==c&&e[f+2]==d}))&&a.da(b)}}
m.da=function(a){var b=this.i[a];if(b){var c=this.j[b];0!=this.m?(this.l.push(a),this.i[a+1]=Ea):(c&&$a(c,a),delete this.i[a],delete this.i[a+1],delete this.i[a+2])}return!!b};
m.U=function(a,b){var c=this.j[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.A)for(e=0;e<c.length;e++){var g=c[e];lf(this.i[g+1],this.i[g+2],d)}else{this.m++;try{for(e=0,f=c.length;e<f&&!this.h;e++)g=c[e],this.i[g+1].apply(this.i[g+2],d)}finally{if(this.m--,0<this.l.length&&0==this.m)for(;c=this.l.pop();)this.da(c)}}return 0!=e}return!1};
function lf(a,b,c){Cd(function(){a.apply(b,c)})}
m.clear=function(a){if(a){var b=this.j[a];b&&(b.forEach(this.da,this),delete this.j[a])}else this.i.length=0,this.j={}};
m.D=function(){M.O.D.call(this);this.clear();this.l.length=0};function mf(a){if(a.xa&&a.hasOwnProperty("xa"))return a.xa;var b=new a;return a.xa=b}
;function nf(a){this.h=a}
nf.prototype.set=function(a,b){void 0===b?this.h.remove(a):this.h.set(a,Le(b))};
nf.prototype.get=function(a){try{var b=this.h.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
nf.prototype.remove=function(a){this.h.remove(a)};function of(a){this.h=a}
C(of,nf);function pf(a){this.data=a}
function qf(a){return void 0===a||a instanceof pf?a:new pf(a)}
of.prototype.set=function(a,b){of.O.set.call(this,a,qf(b))};
of.prototype.i=function(a){a=of.O.get.call(this,a);if(void 0===a||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
of.prototype.get=function(a){if(a=this.i(a)){if(a=a.data,void 0===a)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function rf(a){this.h=a}
C(rf,of);rf.prototype.set=function(a,b,c){if(b=qf(b)){if(c){if(c<Date.now()){rf.prototype.remove.call(this,a);return}b.expiration=c}b.creation=Date.now()}rf.O.set.call(this,a,b)};
rf.prototype.i=function(a){var b=rf.O.i.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<Date.now()||c&&c>Date.now())rf.prototype.remove.call(this,a);else return b}};function sf(){}
;function tf(){}
C(tf,sf);tf.prototype[Symbol.iterator]=function(){return $d(this.L(!0)).i()};
tf.prototype.clear=function(){var a=Array.from(this);a=u(a);for(var b=a.next();!b.done;b=a.next())this.remove(b.value)};function uf(a){this.h=a}
C(uf,tf);m=uf.prototype;m.isAvailable=function(){if(!this.h)return!1;try{return this.h.setItem("__sak","1"),this.h.removeItem("__sak"),!0}catch(a){return!1}};
m.set=function(a,b){try{this.h.setItem(a,b)}catch(c){if(0==this.h.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
m.get=function(a){a=this.h.getItem(a);if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
m.remove=function(a){this.h.removeItem(a)};
m.L=function(a){var b=0,c=this.h,d=new Zd;d.h=function(){if(b>=c.length)throw Yd;var e=c.key(b++);if(a)return e;e=c.getItem(e);if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return e};
d.next=d.h.bind(d);return d};
m.clear=function(){this.h.clear()};
m.key=function(a){return this.h.key(a)};function vf(){var a=null;try{a=window.localStorage||null}catch(b){}this.h=a}
C(vf,uf);function wf(a,b){this.i=a;this.h=null;if(hc&&!(9<=Number(uc))){xf||(xf=new ee);this.h=xf.get(a);this.h||(b?this.h=document.getElementById(b):(this.h=document.createElement("userdata"),this.h.addBehavior("#default#userData"),document.body.appendChild(this.h)),xf.set(a,this.h));try{this.h.load(this.i)}catch(c){this.h=null}}}
C(wf,tf);var yf={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},xf=null;function zf(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(b){return yf[b]})}
m=wf.prototype;m.isAvailable=function(){return!!this.h};
m.set=function(a,b){this.h.setAttribute(zf(a),b);Af(this)};
m.get=function(a){a=this.h.getAttribute(zf(a));if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
m.remove=function(a){this.h.removeAttribute(zf(a));Af(this)};
m.L=function(a){var b=0,c=this.h.XMLDocument.documentElement.attributes,d=new Zd;d.h=function(){if(b>=c.length)throw Yd;var e=c[b++];if(a)return decodeURIComponent(e.nodeName.replace(/\./g,"%")).substr(1);e=e.nodeValue;if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return e};
d.next=d.h.bind(d);return d};
m.clear=function(){for(var a=this.h.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);Af(this)};
function Af(a){try{a.h.save(a.i)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function Bf(a,b){this.i=a;this.h=b+"::"}
C(Bf,tf);Bf.prototype.set=function(a,b){this.i.set(this.h+a,b)};
Bf.prototype.get=function(a){return this.i.get(this.h+a)};
Bf.prototype.remove=function(a){this.i.remove(this.h+a)};
Bf.prototype.L=function(a){var b=this.i.L(!0),c=this,d=new Zd;d.h=function(){for(var e=b.next();e.substr(0,c.h.length)!=c.h;)e=b.next();return a?e.substr(c.h.length):c.i.get(e)};
d.next=d.h.bind(d);return d};function Cf(a,b){1<b.length?a[b[0]]=b[1]:1===b.length&&Object.assign(a,b[0])}
;var Df,Ef,Ff=y.window,Gf=(null===(Df=null===Ff||void 0===Ff?void 0:Ff.yt)||void 0===Df?void 0:Df.config_)||(null===(Ef=null===Ff||void 0===Ff?void 0:Ff.ytcfg)||void 0===Ef?void 0:Ef.data_)||{};z("yt.config_",Gf,void 0);function N(a){for(var b=0;b<arguments.length;++b);Cf(Gf,arguments)}
function E(a,b){return a in Gf?Gf[a]:b}
;var Hf=[];function If(a){Hf.forEach(function(b){return b(a)})}
function Jf(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){Kf(b)}}:a}
function Kf(a){var b=B("yt.logging.errors.log");b?b(a,"ERROR",void 0,void 0,void 0):(b=E("ERRORS",[]),b.push([a,"ERROR",void 0,void 0,void 0]),N("ERRORS",b));If(a)}
function Lf(a){var b=B("yt.logging.errors.log");b?b(a,"WARNING",void 0,void 0,void 0):(b=E("ERRORS",[]),b.push([a,"WARNING",void 0,void 0,void 0]),N("ERRORS",b))}
;var Mf=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};z("yt.msgs_",Mf,void 0);function Nf(a){Cf(Mf,arguments)}
;function O(a){a=Of(a);return"string"===typeof a&&"false"===a?!1:!!a}
function Pf(a,b){a=Of(a);return void 0===a&&void 0!==b?b:Number(a||0)}
function Of(a){var b=E("EXPERIMENTS_FORCED_FLAGS",{});return void 0!==b[a]?b[a]:E("EXPERIMENT_FLAGS",{})[a]}
;var Qf=0,Rf=kc?"webkit":jc?"moz":hc?"ms":gc?"o":"";z("ytDomDomGetNextId",B("ytDomDomGetNextId")||function(){return++Qf},void 0);var Sf={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function Tf(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.rotation=this.clientY=this.clientX=0;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in Sf||(this[b]=a[b]);this.rotation=a.rotation;var c=a.target||a.srcElement;c&&3==c.nodeType&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;if(d)try{d=d.nodeName?
d:null}catch(e){d=null}else"mouseover"==this.type?d=a.fromElement:"mouseout"==this.type&&(d=a.toElement);this.relatedTarget=d;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.h=a.pageX;this.i=a.pageY}}catch(e){}}
function Uf(a){if(document.body&&document.documentElement){var b=document.body.scrollTop+document.documentElement.scrollTop;a.h=a.clientX+(document.body.scrollLeft+document.documentElement.scrollLeft);a.i=a.clientY+b}}
Tf.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
Tf.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
Tf.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var eb=y.ytEventsEventsListeners||{};z("ytEventsEventsListeners",eb,void 0);var Vf=y.ytEventsEventsCounter||{count:0};z("ytEventsEventsCounter",Vf,void 0);
function Wf(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return db(function(e){var f="boolean"===typeof e[4]&&e[4]==!!d,g=Ha(e[4])&&Ha(d)&&ib(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
var Xf=Ta(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});
function Yf(a,b,c,d){d=void 0===d?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=Wf(a,b,c,d);if(e)return e;e=++Vf.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(h){h=new Tf(h);if(!Uc(h.relatedTarget,function(k){return k==a}))return h.currentTarget=a,h.type=b,c.call(a,h)}:function(h){h=new Tf(h);
h.currentTarget=a;return c.call(a,h)};
g=Jf(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),Xf()||"boolean"===typeof d?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);eb[e]=[a,b,c,g,d];return e}
function Zf(a){a&&("string"==typeof a&&(a=[a]),D(a,function(b){if(b in eb){var c=eb[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?Xf()||"boolean"===typeof c?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete eb[b]}}))}
;var $f=window.ytcsi&&window.ytcsi.now?window.ytcsi.now:window.performance&&window.performance.timing&&window.performance.now&&window.performance.timing.navigationStart?function(){return window.performance.timing.navigationStart+window.performance.now()}:function(){return(new Date).getTime()};function ag(a,b){"function"===typeof a&&(a=Jf(a));return window.setTimeout(a,b)}
function bg(a){window.clearTimeout(a)}
;function cg(a){this.C=a;this.i=null;this.m=0;this.A=null;this.u=0;this.j=[];for(a=0;4>a;a++)this.j.push(0);this.l=0;this.J=Yf(window,"mousemove",Na(this.K,this));a=Na(this.G,this);"function"===typeof a&&(a=Jf(a));this.M=window.setInterval(a,25)}
C(cg,L);cg.prototype.K=function(a){void 0===a.h&&Uf(a);var b=a.h;void 0===a.i&&Uf(a);this.i=new Mc(b,a.i)};
cg.prototype.G=function(){if(this.i){var a=$f();if(0!=this.m){var b=this.A,c=this.i,d=b.x-c.x;b=b.y-c.y;d=Math.sqrt(d*d+b*b)/(a-this.m);this.j[this.l]=.5<Math.abs((d-this.u)/this.u)?1:0;for(c=b=0;4>c;c++)b+=this.j[c]||0;3<=b&&this.C();this.u=d}this.m=a;this.A=this.i;this.l=(this.l+1)%4}};
cg.prototype.D=function(){window.clearInterval(this.M);Zf(this.J)};function dg(){}
function eg(a,b){return fg(a,0,b)}
function gg(a,b){return fg(a,1,b)}
;function hg(){dg.apply(this,arguments)}
v(hg,dg);function fg(a,b,c){void 0!==c&&Number.isNaN(Number(c))&&(c=void 0);var d=B("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):ag(a,c||0)}
function ig(a){if(void 0===a||!Number.isNaN(Number(a))){var b=B("yt.scheduler.instance.cancelJob");b?b(a):bg(a)}}
hg.prototype.start=function(){var a=B("yt.scheduler.instance.start");a&&a()};
hg.prototype.pause=function(){var a=B("yt.scheduler.instance.pause");a&&a()};hg.h||(hg.h=new hg);var jg={};
function kg(a){var b=void 0===a?{}:a;a=void 0===b.kb?!1:b.kb;b=void 0===b.Ta?!0:b.Ta;if(null==B("_lact",window)){var c=parseInt(E("LACT"),10);c=isFinite(c)?Date.now()-Math.max(c,0):-1;z("_lact",c,window);z("_fact",c,window);-1==c&&lg();Yf(document,"keydown",lg);Yf(document,"keyup",lg);Yf(document,"mousedown",lg);Yf(document,"mouseup",lg);a?Yf(window,"touchmove",function(){mg("touchmove",200)},{passive:!0}):(Yf(window,"resize",function(){mg("resize",200)}),b&&Yf(window,"scroll",function(){mg("scroll",200)}));
new cg(function(){mg("mouse",100)});
Yf(document,"touchstart",lg,{passive:!0});Yf(document,"touchend",lg,{passive:!0})}}
function mg(a,b){jg[a]||(jg[a]=!0,gg(function(){lg();jg[a]=!1},b))}
function lg(){null==B("_lact",window)&&kg();var a=Date.now();z("_lact",a,window);-1==B("_fact",window)&&z("_fact",a,window);(a=B("ytglobal.ytUtilActivityCallback_"))&&a()}
function ng(){var a=B("_lact",window);return null==a?-1:Math.max(Date.now()-a,0)}
;function og(){var a=pg;B("yt.ads.biscotti.getId_")||z("yt.ads.biscotti.getId_",a,void 0)}
function qg(a){z("yt.ads.biscotti.lastId_",a,void 0)}
;var rg=/^[\w.]*$/,sg={q:!0,search_query:!0};function tg(a,b){b=a.split(b);for(var c={},d=0,e=b.length;d<e;d++){var f=b[d].split("=");if(1==f.length&&f[0]||2==f.length)try{var g=ug(f[0]||""),h=ug(f[1]||"");g in c?Array.isArray(c[g])?bb(c[g],h):c[g]=[c[g],h]:c[g]=h}catch(p){var k=p,l=f[0],n=String(tg);k.args=[{key:l,value:f[1],query:a,method:vg==n?"unchanged":n}];sg.hasOwnProperty(l)||Lf(k)}}return c}
var vg=String(tg);function wg(a){var b=[];cb(a,function(c,d){var e=encodeURIComponent(String(d)),f;Array.isArray(c)?f=c:f=[c];D(f,function(g){""==g?b.push(e):b.push(e+"="+encodeURIComponent(String(g)))})});
return b.join("&")}
function xg(a){"?"==a.charAt(0)&&(a=a.substr(1));return tg(a,"&")}
function yg(){var a=window.location.href;return-1!=a.indexOf("?")?(a=(a||"").split("#")[0],a=a.split("?",2),xg(1<a.length?a[1]:a[0])):{}}
function zg(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=xg(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);return cc(a,e)+d}
function Ag(a){if(!b)var b=window.location.href;var c=a.match(Yb)[1]||null,d=$b(a);c&&d?(a=a.match(Yb),b=b.match(Yb),a=a[3]==b[3]&&a[1]==b[1]&&a[4]==b[4]):a=d?$b(b)==d&&(Number(b.match(Yb)[4]||null)||null)==(Number(a.match(Yb)[4]||null)||null):!0;return a}
function ug(a){return a&&a.match(rg)?a:decodeURIComponent(a.replace(/\+/g," "))}
;function Bg(a){var b=Cg;a=void 0===a?B("yt.ads.biscotti.lastId_")||"":a;var c=Object,d=c.assign,e={};e.dt=fd;e.flash="0";a:{try{var f=b.h.top.location.href}catch(Ua){f=2;break a}f=f?f===b.i.location.href?0:1:2}e=(e.frm=f,e);e.u_tz=-(new Date).getTimezoneOffset();var g=void 0===g?H:g;try{var h=g.history.length}catch(Ua){h=0}e.u_his=h;e.u_java=!!H.navigator&&"unknown"!==typeof H.navigator.javaEnabled&&!!H.navigator.javaEnabled&&H.navigator.javaEnabled();H.screen&&(e.u_h=H.screen.height,e.u_w=H.screen.width,
e.u_ah=H.screen.availHeight,e.u_aw=H.screen.availWidth,e.u_cd=H.screen.colorDepth);H.navigator&&H.navigator.plugins&&(e.u_nplug=H.navigator.plugins.length);H.navigator&&H.navigator.mimeTypes&&(e.u_nmime=H.navigator.mimeTypes.length);h=b.h;try{var k=h.screenX;var l=h.screenY}catch(Ua){}try{var n=h.outerWidth;var p=h.outerHeight}catch(Ua){}try{var r=h.innerWidth;var q=h.innerHeight}catch(Ua){}try{var A=h.screenLeft;var I=h.screenTop}catch(Ua){}try{r=h.innerWidth,q=h.innerHeight}catch(Ua){}try{var J=
h.screen.availWidth;var X=h.screen.availTop}catch(Ua){}k=[A,I,k,l,J,X,n,p,r,q];l=b.h.top;try{var Y=(l||window).document,K="CSS1Compat"==Y.compatMode?Y.documentElement:Y.body;var S=(new Nc(K.clientWidth,K.clientHeight)).round()}catch(Ua){S=new Nc(-12245933,-12245933)}Y=S;S={};K=new sd;y.SVGElement&&y.document.createElementNS&&K.set(0);l=Zc();l["allow-top-navigation-by-user-activation"]&&K.set(1);l["allow-popups-to-escape-sandbox"]&&K.set(2);y.crypto&&y.crypto.subtle&&K.set(3);y.TextDecoder&&y.TextEncoder&&
K.set(4);K=td(K);S.bc=K;S.bih=Y.height;S.biw=Y.width;S.brdim=k.join();b=b.i;b=(S.vis={visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[b.visibilityState||b.webkitVisibilityState||b.mozVisibilityState||""]||0,S.wgl=!!H.WebGLRenderingContext,S);c=d.call(c,e,b);c.ca_type="image";a&&(c.bid=a);return c}
var Cg=new function(){var a=window.document;this.h=window;this.i=a};
z("yt.ads_.signals_.getAdSignalsString",function(a){return wg(Bg(a))},void 0);var Dg="XMLHttpRequest"in y?function(){return new XMLHttpRequest}:null;
function Eg(){if(!Dg)return null;var a=Dg();return"open"in a?a:null}
function Fg(a){switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}}
;var Gg={Authorization:"AUTHORIZATION","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-Youtube-Chrome-Connected":"CHROME_CONNECTED_HEADER","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Delegation-Context":"INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"},
Hg="app debugcss debugjs expflag force_ad_params force_ad_encrypted force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" ").concat(fa(["client_dev_css_mss_url","client_dev_js_mss_url","client_dev_root_url","client_dev_regex_map","expflag"])),Ig=!1;
function Jg(a,b){b=void 0===b?{}:b;var c=Ag(a),d=O("web_ajax_ignore_global_headers_if_set"),e;for(e in Gg){var f=E(Gg[e]);!f||!c&&$b(a)||d&&void 0!==b[e]||(b[e]=f)}if(c||!$b(a))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());if(c||!$b(a)){try{var g=(new Intl.DateTimeFormat).resolvedOptions().timeZone}catch(h){}g&&(b["X-YouTube-Time-Zone"]=g)}if(c||!$b(a))b["X-YouTube-Ad-Signals"]=wg(Bg(void 0));return b}
function Kg(a){var b=window.location.search,c=$b(a);O("debug_handle_relative_url_for_query_forward_killswitch")||c||!Ag(a)||(c=document.location.hostname);var d=Zb(a.match(Yb)[5]||null);d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=xg(b),f={};D(Hg,function(g){e[g]&&(f[g]=e[g])});
return zg(a,f||{},!1)}
function Lg(a,b){var c=b.format||"JSON";a=Mg(a,b);var d=Ng(a,b),e=!1,f=Og(a,function(k){if(!e){e=!0;h&&bg(h);var l=Fg(k),n=null,p=400<=k.status&&500>k.status,r=500<=k.status&&600>k.status;if(l||p||r)n=Pg(a,c,k,b.convertToSafeHtml);if(l)a:if(k&&204==k.status)l=!0;else{switch(c){case "XML":l=0==parseInt(n&&n.return_code,10);break a;case "RAW":l=!0;break a}l=!!n}n=n||{};p=b.context||y;l?b.onSuccess&&b.onSuccess.call(p,k,n):b.onError&&b.onError.call(p,k,n);b.onFinish&&b.onFinish.call(p,k,n)}},b.method,
d,b.headers,b.responseType,b.withCredentials);
if(b.onTimeout&&0<b.timeout){var g=b.onTimeout;var h=ag(function(){e||(e=!0,f.abort(),bg(h),g.call(b.context||y,f))},b.timeout)}return f}
function Mg(a,b){b.includeDomain&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=E("XSRF_FIELD_NAME",void 0);if(b=b.urlParams)b[c]&&delete b[c],a=zg(a,b||{},!0);return a}
function Ng(a,b){var c=E("XSRF_FIELD_NAME",void 0),d=E("XSRF_TOKEN",void 0),e=b.postBody||"",f=b.postParams,g=E("XSRF_FIELD_NAME",void 0),h;b.headers&&(h=b.headers["Content-Type"]);b.excludeXsrf||$b(a)&&!b.withCredentials&&$b(a)!=document.location.hostname||"POST"!=b.method||h&&"application/x-www-form-urlencoded"!=h||b.postParams&&b.postParams[g]||(f||(f={}),f[c]=d);f&&"string"===typeof e&&(e=xg(e),mb(e,f),e=b.postBodyFormat&&"JSON"==b.postBodyFormat?JSON.stringify(e):bc(e));f=e||f&&!fb(f);!Ig&&f&&
"POST"!=b.method&&(Ig=!0,Kf(Error("AJAX request with postData should use POST")));return e}
function Pg(a,b,c,d){var e=null;switch(b){case "JSON":try{var f=c.responseText}catch(g){throw d=Error("Error reading responseText"),d.params=a,Lf(d),g;}a=c.getResponseHeader("Content-Type")||"";f&&0<=a.indexOf("json")&&(")]}'\n"===f.substring(0,5)&&(f=f.substring(5)),e=JSON.parse(f));break;case "XML":if(a=(a=c.responseXML)?Qg(a):null)e={},D(a.getElementsByTagName("*"),function(g){e[g.tagName]=Rg(g)})}d&&Sg(e);
return e}
function Sg(a){if(Ha(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;var d=Qb(a[b],null);a[c]=d}else Sg(a[b])}}
function Qg(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function Rg(a){var b="";D(a.childNodes,function(c){b+=c.nodeValue});
return b}
function Og(a,b,c,d,e,f,g){function h(){4==(k&&"readyState"in k?k.readyState:0)&&b&&Jf(b)(k)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var k=Eg();if(!k)return null;"onloadend"in k?k.addEventListener("loadend",h,!1):k.onreadystatechange=h;O("debug_forward_web_query_parameters")&&(a=Kg(a));k.open(c,a,!0);f&&(k.responseType=f);g&&(k.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=Jg(a,e))for(var l in e)k.setRequestHeader(l,e[l]),"content-type"==l.toLowerCase()&&(c=!1);c&&k.setRequestHeader("Content-Type","application/x-www-form-urlencoded");k.send(d);
return k}
;var Tg=vc||wc;function Ug(a){var b=Lb;return b?0<=b.toLowerCase().indexOf(a):!1}
;var Vg={},Wg=0;
function Xg(a,b,c,d,e){e=void 0===e?"":e;if(a)if(c&&!Ug("cobalt")){if(a){a instanceof Eb||(a="object"==typeof a&&a.W?a.V():String(a),Jb.test(a)?a=new Eb(a,Fb):(a=String(a),a=a.replace(/(%0A|%0D)/g,""),a=(b=a.match(Ib))&&Hb.test(b[1])?new Eb(a,Fb):null));a=Gb(a||Kb);if("about:invalid#zClosurez"===a||a.startsWith("data"))a="";else{if(!(a instanceof Ob)){b="object"==typeof a;var f=null;b&&a.wa&&(f=a.ra());a=Qb(wb(b&&a.W?a.V():String(a)),f)}a instanceof Ob&&a.constructor===Ob?a=a.h:(Fa(a),a="type_error:SafeHtml");
a=encodeURIComponent(String(Le(a.toString())))}/^[\s\xa0]*$/.test(a)||(a=Rc("IFRAME",{src:'javascript:"<body><img src=\\""+'+a+'+"\\"></body>"',style:"display:none"}),(9==a.nodeType?a:a.ownerDocument||a.document).body.appendChild(a))}}else if(e)Og(a,b,"POST",e,d);else if(E("USE_NET_AJAX_FOR_PING_TRANSPORT",!1)||d)Og(a,b,"GET","",d);else{b:{try{var g=new Sa({url:a});if(g.j&&g.i||g.l){var h=Zb(a.match(Yb)[5]||null),k;if(!(k=!h||!h.endsWith("/aclk"))){var l=a.search(dc);d:{for(c=0;0<=(c=a.indexOf("ri",
c))&&c<l;){var n=a.charCodeAt(c-1);if(38==n||63==n){var p=a.charCodeAt(c+2);if(!p||61==p||38==p||35==p){var r=c;break d}}c+=3}r=-1}if(0>r)var q=null;else{var A=a.indexOf("&",r);if(0>A||A>l)A=l;r+=3;q=decodeURIComponent(a.substr(r,A-r).replace(/\+/g," "))}k="1"!==q}f=!k;break b}}catch(I){}f=!1}f?Yg(a)?(b&&b(),f=!0):f=!1:f=!1;f||Zg(a,b)}}
function $g(a,b,c){c=void 0===c?"":c;Yg(a,c)?b&&b():Xg(a,b,void 0,void 0,c)}
function Yg(a,b){try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,void 0===b?"":b))return!0}catch(c){}return!1}
function Zg(a,b){var c=new Image,d=""+Wg++;Vg[d]=c;c.onload=c.onerror=function(){b&&Vg[d]&&b();delete Vg[d]};
c.src=a}
;var ah=y.ytPubsubPubsubInstance||new M,bh=y.ytPubsubPubsubSubscribedKeys||{},ch=y.ytPubsubPubsubTopicToKeys||{},dh=y.ytPubsubPubsubIsSynchronous||{};function eh(a,b){var c=fh();if(c&&b){var d=c.subscribe(a,function(){var e=arguments;var f=function(){bh[d]&&b.apply&&"function"==typeof b.apply&&b.apply(window,e)};
try{dh[a]?f():ag(f,0)}catch(g){Kf(g)}},void 0);
bh[d]=!0;ch[a]||(ch[a]=[]);ch[a].push(d);return d}return 0}
function gh(a){var b=fh();b&&("number"===typeof a?a=[a]:"string"===typeof a&&(a=[parseInt(a,10)]),D(a,function(c){b.unsubscribeByKey(c);delete bh[c]}))}
function hh(a,b){var c=fh();c&&c.publish.apply(c,arguments)}
function ih(a){var b=fh();if(b)if(b.clear(a),a)jh(a);else for(var c in ch)jh(c)}
function fh(){return y.ytPubsubPubsubInstance}
function jh(a){ch[a]&&(a=ch[a],D(a,function(b){bh[b]&&delete bh[b]}),a.length=0)}
M.prototype.subscribe=M.prototype.subscribe;M.prototype.unsubscribeByKey=M.prototype.da;M.prototype.publish=M.prototype.U;M.prototype.clear=M.prototype.clear;z("ytPubsubPubsubInstance",ah,void 0);z("ytPubsubPubsubTopicToKeys",ch,void 0);z("ytPubsubPubsubIsSynchronous",dh,void 0);z("ytPubsubPubsubSubscribedKeys",bh,void 0);var kh=window,P=kh.ytcsi&&kh.ytcsi.now?kh.ytcsi.now:kh.performance&&kh.performance.timing&&kh.performance.now&&kh.performance.timing.navigationStart?function(){return kh.performance.timing.navigationStart+kh.performance.now()}:function(){return(new Date).getTime()};var lh=Pf("initial_gel_batch_timeout",2E3),mh=Math.pow(2,16)-1,nh=null,oh=0,ph=void 0,qh=0,rh=0,sh=0,th=!0,uh=y.ytLoggingTransportGELQueue_||new Map;z("ytLoggingTransportGELQueue_",uh,void 0);var vh=y.ytLoggingTransportTokensToCttTargetIds_||{};z("ytLoggingTransportTokensToCttTargetIds_",vh,void 0);
function wh(a,b){if("log_event"===a.endpoint){var c="";a.ja?c="visitorOnlyApprovedKey":a.F&&(vh[a.F.token]=xh(a.F),c=a.F.token);var d=uh.get(c)||[];uh.set(c,d);d.push(a.payload);b&&(ph=new b);a=Pf("tvhtml5_logging_max_batch")||Pf("web_logging_max_batch")||100;b=P();d.length>=a?yh({writeThenSend:!0}):10<=b-sh&&(zh(),sh=b)}}
function Ah(a,b){if("log_event"===a.endpoint){var c="";a.ja?c="visitorOnlyApprovedKey":a.F&&(vh[a.F.token]=xh(a.F),c=a.F.token);var d=new Map;d.set(c,[a.payload]);b&&(ph=new b);return new Se(function(e){ph&&ph.isReady()?Bh(d,e,{bypassNetworkless:!0}):e()})}}
function yh(a){a=void 0===a?{}:a;new Se(function(b){bg(qh);bg(rh);rh=0;ph&&ph.isReady()?(Bh(uh,b,a),uh.clear()):(zh(),b())})}
function zh(){O("web_gel_timeout_cap")&&!rh&&(rh=ag(function(){yh({writeThenSend:!0})},6E4));
bg(qh);var a=E("LOGGING_BATCH_TIMEOUT",Pf("web_gel_debounce_ms",1E4));O("shorten_initial_gel_batch_timeout")&&th&&(a=lh);qh=ag(function(){yh({writeThenSend:!0})},a)}
function Bh(a,b,c){var d=ph;c=void 0===c?{}:c;var e=Math.round(P()),f=a.size;a=u(a);for(var g=a.next();!g.done;g=a.next()){var h=u(g.value);g=h.next().value;var k=h.next().value;h=kb({context:Ch(d.config_||Dh())});h.events=k;(k=vh[g])&&Eh(h,g,k);delete vh[g];g="visitorOnlyApprovedKey"===g;Fh(h,e,g);O("send_beacon_before_gel")&&window.navigator&&window.navigator.sendBeacon&&!c.writeThenSend&&$g("/generate_204");Gh(d,"log_event",h,{retry:!0,onSuccess:function(){f--;f||b();oh=Math.round(P()-e)},
onError:function(){f--;f||b()},
Ka:c,ja:g});th=!1}}
function Fh(a,b,c){a.requestTimeMs=String(b);O("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);!c&&(b=E("EVENT_ID",void 0))&&((c=E("BATCH_CLIENT_COUNTER",void 0)||0)||(c=Math.floor(Math.random()*mh/2)),c++,c>mh&&(c=1),N("BATCH_CLIENT_COUNTER",c),b={serializedEventId:b,clientCounter:String(c)},a.serializedClientEventId=b,nh&&oh&&O("log_gel_rtt_web")&&(a.previousBatchInfo={serializedClientEventId:nh,roundtripMs:String(oh)}),nh=b,oh=0)}
function Eh(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
function xh(a){var b={};a.videoId?b.videoId=a.videoId:a.playlistId&&(b.playlistId=a.playlistId);return b}
;var Hh=y.ytLoggingGelSequenceIdObj_||{};z("ytLoggingGelSequenceIdObj_",Hh,void 0);function Ih(a,b,c,d){d=void 0===d?{}:d;var e={},f=Math.round(d.timestamp||P());e.eventTimeMs=f<Number.MAX_SAFE_INTEGER?f:0;e[a]=b;a=ng();e.context={lastActivityMs:String(d.timestamp||!isFinite(a)?-1:a)};O("log_sequence_info_on_gel_web")&&d.S&&(a=e.context,b=d.S,Hh[b]=b in Hh?Hh[b]+1:0,a.sequence={index:Hh[b],groupKey:b},d.Ua&&delete Hh[d.S]);(d.pl?Ah:wh)({endpoint:"log_event",payload:e,F:d.F,ja:d.ja},c)}
;function Jh(){if(!y.matchMedia)return"WEB_DISPLAY_MODE_UNKNOWN";try{return y.matchMedia("(display-mode: standalone)").matches?"WEB_DISPLAY_MODE_STANDALONE":y.matchMedia("(display-mode: minimal-ui)").matches?"WEB_DISPLAY_MODE_MINIMAL_UI":y.matchMedia("(display-mode: fullscreen)").matches?"WEB_DISPLAY_MODE_FULLSCREEN":y.matchMedia("(display-mode: browser)").matches?"WEB_DISPLAY_MODE_BROWSER":"WEB_DISPLAY_MODE_UNKNOWN"}catch(a){return"WEB_DISPLAY_MODE_UNKNOWN"}}
;function Kh(a,b,c,d,e){nd.set(""+a,b,{ya:c,path:"/",domain:void 0===d?"youtube.com":d,secure:void 0===e?!1:e})}
;var Lh=B("ytglobal.prefsUserPrefsPrefs_")||{};z("ytglobal.prefsUserPrefsPrefs_",Lh,void 0);function Mh(){this.h=E("ALT_PREF_COOKIE_NAME","PREF");this.i=E("ALT_PREF_COOKIE_DOMAIN","youtube.com");var a=nd.get(""+this.h,void 0);if(a){a=decodeURIComponent(a).split("&");for(var b=0;b<a.length;b++){var c=a[b].split("="),d=c[0];(c=c[1])&&(Lh[d]=c.toString())}}}
Mh.prototype.get=function(a,b){Nh(a);Oh(a);a=void 0!==Lh[a]?Lh[a].toString():null;return null!=a?a:b?b:""};
Mh.prototype.set=function(a,b){Nh(a);Oh(a);if(null==b)throw Error("ExpectedNotNull");Lh[a]=b.toString()};
Mh.prototype.remove=function(a){Nh(a);Oh(a);delete Lh[a]};
Mh.prototype.clear=function(){for(var a in Lh)delete Lh[a]};
function Oh(a){if(/^f([1-9][0-9]*)$/.test(a))throw Error("ExpectedRegexMatch: "+a);}
function Nh(a){if(!/^\w+$/.test(a))throw Error("ExpectedRegexMismatch: "+a);}
function Ph(a){a=void 0!==Lh[a]?Lh[a].toString():null;return null!=a&&/^[A-Fa-f0-9]+$/.test(a)?parseInt(a,16):null}
;var Qh={bluetooth:"CONN_DISCO",cellular:"CONN_CELLULAR_UNKNOWN",ethernet:"CONN_WIFI",none:"CONN_NONE",wifi:"CONN_WIFI",wimax:"CONN_CELLULAR_4G",other:"CONN_UNKNOWN",unknown:"CONN_UNKNOWN","slow-2g":"CONN_CELLULAR_2G","2g":"CONN_CELLULAR_2G","3g":"CONN_CELLULAR_3G","4g":"CONN_CELLULAR_4G"},Rh={"slow-2g":"EFFECTIVE_CONNECTION_TYPE_SLOW_2G","2g":"EFFECTIVE_CONNECTION_TYPE_2G","3g":"EFFECTIVE_CONNECTION_TYPE_3G","4g":"EFFECTIVE_CONNECTION_TYPE_4G"};
function Sh(){var a=y.navigator;return a?a.connection:void 0}
;function Th(){return"INNERTUBE_API_KEY"in Gf&&"INNERTUBE_API_VERSION"in Gf}
function Dh(){return{innertubeApiKey:E("INNERTUBE_API_KEY",void 0),innertubeApiVersion:E("INNERTUBE_API_VERSION",void 0),Wa:E("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),Xa:E("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),innertubeContextClientVersion:E("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0),Za:E("INNERTUBE_CONTEXT_HL",void 0),Ya:E("INNERTUBE_CONTEXT_GL",void 0),ab:E("INNERTUBE_HOST_OVERRIDE",void 0)||"",cb:!!E("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),bb:!!E("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",
!1),appInstallData:E("SERIALIZED_CLIENT_CONFIG_DATA",void 0)}}
function Ch(a){var b={client:{hl:a.Za,gl:a.Ya,clientName:a.Xa,clientVersion:a.innertubeContextClientVersion,configInfo:a.Wa}};navigator.userAgent&&(b.client.userAgent=String(navigator.userAgent));var c=y.devicePixelRatio;c&&1!=c&&(b.client.screenDensityFloat=String(c));c=E("EXPERIMENTS_TOKEN","");""!==c&&(b.client.experimentsToken=c);c=[];var d=E("EXPERIMENTS_FORCED_FLAGS",{});for(e in d)c.push({key:e,value:String(d[e])});var e=E("EXPERIMENT_FLAGS",{});for(var f in e)f.startsWith("force_")&&void 0===
d[f]&&c.push({key:f,value:String(e[f])});0<c.length&&(b.request={internalExperimentFlags:c});f=b.client.clientName;if("WEB"===f||"MWEB"===f||1===f||2===f){if(!O("web_include_display_mode_killswitch")){var g;b.client.mainAppWebInfo=null!=(g=b.client.mainAppWebInfo)?g:{};b.client.mainAppWebInfo.webDisplayMode=Jh()}}else if(g=b.client.clientName,("WEB_REMIX"===g||76===g)&&!O("music_web_display_mode_killswitch")){var h;b.client.Ja=null!=(h=b.client.Ja)?h:{};b.client.Ja.webDisplayMode=Jh()}a.appInstallData&&
(b.client.configInfo=b.client.configInfo||{},b.client.configInfo.appInstallData=a.appInstallData);E("DELEGATED_SESSION_ID")&&!O("pageid_as_header_web")&&(b.user={onBehalfOfUser:E("DELEGATED_SESSION_ID")});a:{if(h=Sh()){a=Qh[h.type||"unknown"]||"CONN_UNKNOWN";h=Qh[h.effectiveType||"unknown"]||"CONN_UNKNOWN";"CONN_CELLULAR_UNKNOWN"===a&&"CONN_UNKNOWN"!==h&&(a=h);if("CONN_UNKNOWN"!==a)break a;if("CONN_UNKNOWN"!==h){a=h;break a}}a=void 0}a&&(b.client.connectionType=a);O("web_log_effective_connection_type")&&
(a=Sh(),a=null!==a&&void 0!==a&&a.effectiveType?Rh.hasOwnProperty(a.effectiveType)?Rh[a.effectiveType]:"EFFECTIVE_CONNECTION_TYPE_UNKNOWN":void 0,a&&(b.client.effectiveConnectionType=a));a=Object;h=a.assign;g=b.client;f={};e=u(Object.entries(xg(E("DEVICE",""))));for(c=e.next();!c.done;c=e.next())d=u(c.value),c=d.next().value,d=d.next().value,"cbrand"===c?f.deviceMake=d:"cmodel"===c?f.deviceModel=d:"cbr"===c?f.browserName=d:"cbrver"===c?f.browserVersion=d:"cos"===c?f.osName=d:"cosver"===c?f.osVersion=
d:"cplatform"===c&&(f.platform=d);b.client=h.call(a,g,f);return b}
function Uh(a,b,c){c=void 0===c?{}:c;var d={"X-Goog-Visitor-Id":c.visitorData||E("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;(b=c.dl||E("AUTHORIZATION"))||(a?b="Bearer "+B("gapi.auth.getToken")().al:b=rd([]));b&&(d.Authorization=b,d["X-Goog-AuthUser"]=E("SESSION_INDEX",0),O("pageid_as_header_web")&&(d["X-Goog-PageId"]=E("DELEGATED_SESSION_ID")));return d}
;function Vh(a){a=Object.assign({},a);delete a.Authorization;var b=rd();if(b){var c=new Ld;c.update(E("INNERTUBE_API_KEY",void 0));c.update(b);a.hash=Ac(c.digest())}return a}
;function Wh(a){var b=new vf;(b=b.isAvailable()?a?new Bf(b,a):b:null)||(a=new wf(a||"UserDataSharedStore"),b=a.isAvailable()?a:null);this.h=(a=b)?new rf(a):null;this.i=document.domain||window.location.hostname}
Wh.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.h)try{this.h.set(a,b,Date.now()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape(Le(b))}catch(f){return}else e=escape(b);Kh(a,e,c,this.i)};
Wh.prototype.get=function(a,b){var c=void 0,d=!this.h;if(!d)try{c=this.h.get(a)}catch(e){d=!0}if(d&&(c=nd.get(""+a,void 0))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
Wh.prototype.remove=function(a){this.h&&this.h.remove(a);var b=this.i;nd.remove(""+a,"/",void 0===b?"youtube.com":b)};var Xh;function Yh(){Xh||(Xh=new Wh("yt.innertube"));return Xh}
function Zh(a,b,c,d){if(d)return null;d=Yh().get("nextId",!0)||1;var e=Yh().get("requests",!0)||{};e[d]={method:a,request:b,authState:Vh(c),requestTime:Math.round(P())};Yh().set("nextId",d+1,86400,!0);Yh().set("requests",e,86400,!0);return d}
function $h(a){var b=Yh().get("requests",!0)||{};delete b[a];Yh().set("requests",b,86400,!0)}
function ai(a){var b=Yh().get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(P())-d.requestTime)){var e=d.authState,f=Vh(Uh(!1));ib(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(P())),Gh(a,d.method,e,{}));delete b[c]}}Yh().set("requests",b,86400,!0)}}
;function bi(a,b){this.version=a;this.args=b}
;function ci(a,b){this.topic=a;this.h=b}
ci.prototype.toString=function(){return this.topic};var di=B("ytPubsub2Pubsub2Instance")||new M;M.prototype.subscribe=M.prototype.subscribe;M.prototype.unsubscribeByKey=M.prototype.da;M.prototype.publish=M.prototype.U;M.prototype.clear=M.prototype.clear;z("ytPubsub2Pubsub2Instance",di,void 0);var ei=B("ytPubsub2Pubsub2SubscribedKeys")||{};z("ytPubsub2Pubsub2SubscribedKeys",ei,void 0);var fi=B("ytPubsub2Pubsub2TopicToKeys")||{};z("ytPubsub2Pubsub2TopicToKeys",fi,void 0);var gi=B("ytPubsub2Pubsub2IsAsync")||{};z("ytPubsub2Pubsub2IsAsync",gi,void 0);
z("ytPubsub2Pubsub2SkipSubKey",null,void 0);function hi(a,b){var c=ii();c&&c.publish.call(c,a.toString(),a,b)}
function ji(a){var b=ki,c=ii();if(!c)return 0;var d=c.subscribe(b.toString(),function(e,f){var g=B("ytPubsub2Pubsub2SkipSubKey");g&&g==d||(g=function(){if(ei[d])try{if(f&&b instanceof ci&&b!=e)try{var h=b.h,k=f;if(!k.args||!k.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");try{if(!h.T){var l=new h;h.T=l.version}var n=h.T}catch(p){}if(!n||k.version!=n)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");try{f=Reflect.construct(h,
ab(k.args))}catch(p){throw p.message="yt.pubsub2.Data.deserialize(): "+p.message,p;}}catch(p){throw p.message="yt.pubsub2.pubsub2 cross-binary conversion error for "+b.toString()+": "+p.message,p;}a.call(window,f)}catch(p){Kf(p)}},gi[b.toString()]?B("yt.scheduler.instance")?gg(g):ag(g,0):g())});
ei[d]=!0;fi[b.toString()]||(fi[b.toString()]=[]);fi[b.toString()].push(d);return d}
function li(){var a=mi,b=ji(function(c){a.apply(void 0,arguments);ni(b)});
return b}
function ni(a){var b=ii();b&&("number"===typeof a&&(a=[a]),D(a,function(c){b.unsubscribeByKey(c);delete ei[c]}))}
function ii(){return B("ytPubsub2Pubsub2Instance")}
;function oi(){}
;var pi=function(){var a;return function(){a||(a=new Wh("ytidb"));return a}}();
function qi(){var a;return null===(a=pi())||void 0===a?void 0:a.get("LAST_RESULT_ENTRY_KEY",!0)}
function ri(a){this.h=void 0===a?!1:a;(a=qi())||(a={hasSucceededOnce:this.h});this.i=a;var b,c;null!==(b=pi())&&void 0!==b&&b.h&&(b={hasSucceededOnce:this.i.hasSucceededOnce||this.h},null===(c=pi())||void 0===c?void 0:c.set("LAST_RESULT_ENTRY_KEY",b,2592E3,!0))}
ri.prototype.isSupported=function(){return this.h};var si=[],ti=!1;function ui(a){ti||(si.push({type:"ERROR",payload:a}),10<si.length&&si.shift())}
function vi(a,b){ti||(si.push({type:"EVENT",eventType:a,payload:b}),10<si.length&&si.shift())}
;function wi(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];d=Error.call(this,a);this.message=d.message;"stack"in d&&(this.stack=d.stack);this.args=[].concat(fa(c))}
v(wi,Error);function xi(){if(void 0!==E("DATASYNC_ID",void 0))return E("DATASYNC_ID",void 0);throw new wi("Datasync ID not set","unknown");}
;function yi(a){if(0<=a.indexOf(":"))throw Error("Database name cannot contain ':'");}
function zi(a){return a.substr(0,a.indexOf(":"))||a}
;var Ai={},Bi=(Ai.AUTH_INVALID="No user identifier specified.",Ai.EXPLICIT_ABORT="Transaction was explicitly aborted.",Ai.IDB_NOT_SUPPORTED="IndexedDB is not supported.",Ai.MISSING_OBJECT_STORE="Object store not created.",Ai.DB_DELETED_BY_MISSING_OBJECT_STORE="Database is deleted because an expected object store was not created.",Ai.UNKNOWN_ABORT="Transaction was aborted for unknown reasons.",Ai.QUOTA_EXCEEDED="The current transaction exceeded its quota limitations.",Ai.QUOTA_MAYBE_EXCEEDED="The current transaction may have failed because of exceeding quota limitations.",
Ai.EXECUTE_TRANSACTION_ON_CLOSED_DB="Can't start a transaction on a closed database",Ai),Ci={},Di=(Ci.AUTH_INVALID="ERROR",Ci.EXECUTE_TRANSACTION_ON_CLOSED_DB="WARNING",Ci.EXPLICIT_ABORT="IGNORED",Ci.IDB_NOT_SUPPORTED="ERROR",Ci.MISSING_OBJECT_STORE="ERROR",Ci.DB_DELETED_BY_MISSING_OBJECT_STORE="WARNING",Ci.QUOTA_EXCEEDED="WARNING",Ci.QUOTA_MAYBE_EXCEEDED="WARNING",Ci.UNKNOWN_ABORT="WARNING",Ci),Ei={},Fi=(Ei.AUTH_INVALID=!1,Ei.EXECUTE_TRANSACTION_ON_CLOSED_DB=!1,Ei.EXPLICIT_ABORT=!1,Ei.IDB_NOT_SUPPORTED=
!1,Ei.MISSING_OBJECT_STORE=!1,Ei.DB_DELETED_BY_MISSING_OBJECT_STORE=!1,Ei.QUOTA_EXCEEDED=!1,Ei.QUOTA_MAYBE_EXCEEDED=!0,Ei.UNKNOWN_ABORT=!0,Ei);function Q(a,b,c,d,e){b=void 0===b?{}:b;c=void 0===c?Bi[a]:c;d=void 0===d?Di[a]:d;e=void 0===e?Fi[a]:e;wi.call(this,c,Object.assign({name:"YtIdbKnownError",isSw:void 0===self.document,isIframe:self!==self.top,type:a},b));this.type=a;this.message=c;this.level=d;this.h=e;Object.setPrototypeOf(this,Q.prototype)}
v(Q,wi);function Gi(a){Q.call(this,"MISSING_OBJECT_STORE",{gb:a},Bi.MISSING_OBJECT_STORE);Object.setPrototypeOf(this,Gi.prototype)}
v(Gi,Q);var Hi=["The database connection is closing","Can't start a transaction on a closed database","A mutation operation was attempted on a database that did not allow mutations"];
function Ii(a,b,c){b=zi(b);var d=a instanceof Error?a:Error("Unexpected error: "+a);if(d instanceof Q)return d;if("QuotaExceededError"===d.name)return new Q("QUOTA_EXCEEDED",{objectStoreNames:c,dbName:b});if(xc&&"UnknownError"===d.name)return new Q("QUOTA_MAYBE_EXCEEDED",{objectStoreNames:c,dbName:b});if("InvalidStateError"===d.name&&Hi.some(function(e){return d.message.includes(e)}))return new Q("EXECUTE_TRANSACTION_ON_CLOSED_DB",{objectStoreNames:c,
dbName:b});if("AbortError"===d.name)return new Q("UNKNOWN_ABORT",{objectStoreNames:c,dbName:b},d.message);d.args=[{name:"IdbError",ll:d.name,dbName:b,objectStoreNames:c}];d.level="WARNING";return d}
;function Ji(a){if(!a)throw Error();throw a;}
function Ki(a){return a}
function Li(a){this.h=a}
function R(a){function b(e){if("PENDING"===d.state.status){d.state={status:"REJECTED",reason:e};e=u(d.onRejected);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
function c(e){if("PENDING"===d.state.status){d.state={status:"FULFILLED",value:e};e=u(d.h);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
var d=this;this.state={status:"PENDING"};this.h=[];this.onRejected=[];a=a.h;try{a(c,b)}catch(e){b(e)}}
R.all=function(a){return new R(new Li(function(b,c){var d=[],e=a.length;0===e&&b(d);for(var f={Z:0};f.Z<a.length;f={Z:f.Z},++f.Z)Mi(R.resolve(a[f.Z]).then(function(g){return function(h){d[g.Z]=h;e--;0===e&&b(d)}}(f)),function(g){c(g)})}))};
R.resolve=function(a){return new R(new Li(function(b,c){a instanceof R?a.then(b,c):b(a)}))};
R.reject=function(a){return new R(new Li(function(b,c){c(a)}))};
R.prototype.then=function(a,b){var c=this,d=null!==a&&void 0!==a?a:Ki,e=null!==b&&void 0!==b?b:Ji;return new R(new Li(function(f,g){"PENDING"===c.state.status?(c.h.push(function(){Ni(c,c,d,f,g)}),c.onRejected.push(function(){Oi(c,c,e,f,g)})):"FULFILLED"===c.state.status?Ni(c,c,d,f,g):"REJECTED"===c.state.status&&Oi(c,c,e,f,g)}))};
function Mi(a,b){a.then(void 0,b)}
function Ni(a,b,c,d,e){try{if("FULFILLED"!==a.state.status)throw Error("calling handleResolve before the promise is fulfilled.");var f=c(a.state.value);f instanceof R?Pi(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Oi(a,b,c,d,e){try{if("REJECTED"!==a.state.status)throw Error("calling handleReject before the promise is rejected.");var f=c(a.state.reason);f instanceof R?Pi(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Pi(a,b,c,d,e){b===c?e(new TypeError("Circular promise chain detected.")):c.then(function(f){f instanceof R?Pi(a,b,f,d,e):d(f)},function(f){e(f)})}
;function Qi(a,b,c){function d(){c(a.error);f()}
function e(){b(a.result);f()}
function f(){try{a.removeEventListener("success",e),a.removeEventListener("error",d)}catch(g){}}
a.addEventListener("success",e);a.addEventListener("error",d)}
function Ri(a){return new Promise(function(b,c){Qi(a,b,c)})}
function Si(a){return new R(new Li(function(b,c){Qi(a,b,c)}))}
;function Ti(a,b){return new R(new Li(function(c,d){function e(){var f=a?b(a):null;f?f.then(function(g){a=g;e()},d):c()}
e()}))}
;function Ui(a,b){this.h=a;this.options=b;this.transactionCount=0;this.j=Math.round(P());this.i=!1}
m=Ui.prototype;m.add=function(a,b,c){return Vi(this,[a],{mode:"readwrite",I:!0},function(d){return Wi(d,a).add(b,c)})};
m.clear=function(a){return Vi(this,[a],{mode:"readwrite",I:!0},function(b){return Wi(b,a).clear()})};
m.close=function(){var a;this.h.close();(null===(a=this.options)||void 0===a?0:a.closed)&&this.options.closed()};
m.count=function(a,b){return Vi(this,[a],{mode:"readonly",I:!0},function(c){return Wi(c,a).count(b)})};
function Xi(a,b,c){a=a.h.createObjectStore(b,c);return new Yi(a)}
m.delete=function(a,b){return Vi(this,[a],{mode:"readwrite",I:!0},function(c){return Wi(c,a).delete(b)})};
m.get=function(a,b){return Vi(this,[a],{mode:"readonly",I:!0},function(c){return Wi(c,a).get(b)})};
function Zi(a,b,c,d){return Vi(a,[b],{mode:"readwrite",I:!0},function(e){e=Wi(e,b);return Si(e.h.put(c,d))})}
m.objectStoreNames=function(){return Array.from(this.h.objectStoreNames)};
function Vi(a,b,c,d){return G(a,function f(){var g=this,h,k,l,n,p,r,q,A,I,J,X,Y;return x(f,function(K){switch(K.h){case 1:var S={mode:"readonly",I:!1,tag:"IDB_TRANSACTION_TAG_UNKNOWN"};"string"===typeof c?S.mode=c:Object.assign(S,c);h=S;g.transactionCount++;k=h.I?3:1;l=0;case 2:if(n){K.B(3);break}l++;p=Math.round(P());ra(K,4);r=g.h.transaction(b,h.mode);S=new $i(r);S=aj(S,d);return w(K,S,6);case 6:return q=K.i,A=Math.round(P()),bj(g,p,A,l,void 0,b.join(),h),K.return(q);case 4:I=sa(K);J=Math.round(P());
X=Ii(I,g.h.name,b.join());if((Y=X instanceof Q&&!X.h)||l>=k)bj(g,p,J,l,X,b.join(),h),n=X;K.B(2);break;case 3:return K.return(Promise.reject(n))}})})}
function bj(a,b,c,d,e,f,g){b=c-b;e?(e instanceof Q&&("QUOTA_EXCEEDED"===e.type||"QUOTA_MAYBE_EXCEEDED"===e.type)&&vi("QUOTA_EXCEEDED",{dbName:zi(a.h.name),objectStoreNames:f,transactionCount:a.transactionCount,transactionMode:g.mode}),e instanceof Q&&"UNKNOWN_ABORT"===e.type&&(c-=a.j,0>c&&c>=Math.pow(2,31)&&(c=0),vi("TRANSACTION_UNEXPECTEDLY_ABORTED",{objectStoreNames:f,transactionDuration:b,transactionCount:a.transactionCount,dbDuration:c}),a.i=!0),cj(a,!1,d,f,b,g.tag),ui(e)):cj(a,!0,d,f,b,g.tag)}
function cj(a,b,c,d,e,f){vi("TRANSACTION_ENDED",{objectStoreNames:d,connectionHasUnknownAbortedTransaction:a.i,duration:e,isSuccessful:b,tryCount:c,tag:void 0===f?"IDB_TRANSACTION_TAG_UNKNOWN":f})}
m.getName=function(){return this.h.name};
function Yi(a){this.h=a}
m=Yi.prototype;m.add=function(a,b){return Si(this.h.add(a,b))};
m.autoIncrement=function(){return this.h.autoIncrement};
m.clear=function(){return Si(this.h.clear()).then(function(){})};
m.count=function(a){return Si(this.h.count(a))};
function dj(a,b){return ej(a,{query:b},function(c){return c.delete().then(function(){return c.continue()})}).then(function(){})}
m.delete=function(a){return a instanceof IDBKeyRange?dj(this,a):Si(this.h.delete(a))};
m.get=function(a){return Si(this.h.get(a))};
m.index=function(a){return new fj(this.h.index(a))};
m.getName=function(){return this.h.name};
m.keyPath=function(){return this.h.keyPath};
function ej(a,b,c){a=a.h.openCursor(b.query,b.direction);return gj(a).then(function(d){return Ti(d,c)})}
function $i(a){var b=this;this.h=a;this.j=new Map;this.i=!1;this.done=new Promise(function(c,d){b.h.addEventListener("complete",function(){c()});
b.h.addEventListener("error",function(e){e.currentTarget===e.target&&d(b.h.error)});
b.h.addEventListener("abort",function(){var e=b.h.error;if(e)d(e);else if(!b.i){e=Q;for(var f=b.h.objectStoreNames,g=[],h=0;h<f.length;h++){var k=f.item(h);if(null===k)throw Error("Invariant: item in DOMStringList is null");g.push(k)}e=new e("UNKNOWN_ABORT",{objectStoreNames:g.join(),dbName:b.h.db.name,mode:b.h.mode});d(e)}})})}
function aj(a,b){var c=new Promise(function(d,e){try{Mi(b(a).then(function(f){d(f)}),e)}catch(f){e(f),a.abort()}});
return Promise.all([c,a.done]).then(function(d){return u(d).next().value})}
$i.prototype.abort=function(){this.h.abort();this.i=!0;throw new Q("EXPLICIT_ABORT");};
function Wi(a,b){b=a.h.objectStore(b);var c=a.j.get(b);c||(c=new Yi(b),a.j.set(b,c));return c}
function fj(a){this.h=a}
m=fj.prototype;m.count=function(a){return Si(this.h.count(a))};
m.delete=function(a){return hj(this,{query:a},function(b){return b.delete().then(function(){return b.continue()})})};
m.get=function(a){return Si(this.h.get(a))};
m.getKey=function(a){return Si(this.h.getKey(a))};
m.keyPath=function(){return this.h.keyPath};
m.unique=function(){return this.h.unique};
function hj(a,b,c){a=a.h.openCursor(void 0===b.query?null:b.query,void 0===b.direction?"next":b.direction);return gj(a).then(function(d){return Ti(d,c)})}
function ij(a,b){this.request=a;this.cursor=b}
function gj(a){return Si(a).then(function(b){return null===b?null:new ij(a,b)})}
m=ij.prototype;m.advance=function(a){this.cursor.advance(a);return gj(this.request)};
m.continue=function(a){this.cursor.continue(a);return gj(this.request)};
m.delete=function(){return Si(this.cursor.delete()).then(function(){})};
m.getKey=function(){return this.cursor.key};
m.getValue=function(){return this.cursor.value};
m.update=function(a){return Si(this.cursor.update(a))};function jj(a,b,c){return new Promise(function(d,e){function f(){r||(r=new Ui(g.result,{closed:p}));return r}
var g=self.indexedDB.open(a,b),h=c.blocked,k=c.blocking,l=c.wb,n=c.upgrade,p=c.closed,r;g.addEventListener("upgradeneeded",function(q){try{if(null===q.newVersion)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");if(null===g.transaction)throw Error("Invariant: transaction on IDbOpenDbRequest is null");q.dataLoss&&"none"!==q.dataLoss&&vi("IDB_DATA_CORRUPTED",{reason:q.dataLossMessage||"unknown reason",dbName:zi(a)});var A=f(),I=new $i(g.transaction);n&&n(A,function(J){return q.oldVersion<
J&&q.newVersion>=J},I);
I.done.catch(function(J){e(J)})}catch(J){e(J)}});
g.addEventListener("success",function(){var q=g.result;k&&q.addEventListener("versionchange",function(){k(f())});
q.addEventListener("close",function(){vi("IDB_UNEXPECTEDLY_CLOSED",{dbName:zi(a),dbVersion:q.version});l&&l()});
d(f())});
g.addEventListener("error",function(){e(g.error)});
h&&g.addEventListener("blocked",function(){h()})})}
function kj(a,b,c){c=void 0===c?{}:c;return jj(a,b,c)}
function lj(a,b){b=void 0===b?{}:b;return G(this,function d(){var e,f,g;return x(d,function(h){e=self.indexedDB.deleteDatabase(a);f=b;(g=f.blocked)&&e.addEventListener("blocked",function(){g()});
return w(h,Ri(e),0)})})}
;function mj(a,b){this.name=a;this.options=b;this.j=!1}
mj.prototype.i=function(a,b,c){c=void 0===c?{}:c;return kj(a,b,c)};
mj.prototype.delete=function(a){a=void 0===a?{}:a;return lj(this.name,a)};
mj.prototype.open=function(){var a=this;if(!this.h){var b,c=function(){a.h===b&&(a.h=void 0)},d={blocking:function(f){f.close()},
closed:c,wb:c,upgrade:this.options.upgrade},e=function(){return G(a,function g(){var h=this,k,l,n;return x(g,function(p){switch(p.h){case 1:return ra(p,2),w(p,h.i(h.name,h.options.version,d),4);case 4:k=p.i;a:{var r=h.options;for(var q=u(Object.keys(r.la)),A=q.next();!A.done;A=q.next()){A=A.value;var I=r.la[A];if("boolean"===typeof I){if(!k.h.objectStoreNames.contains(A)){r=A;break a}}else{var J=void 0===I.mb?Number.MAX_VALUE:I.mb;if(k.h.version>=I.bl&&!(k.h.version>=J)&&!k.h.objectStoreNames.contains(A)){r=
A;break a}}}r=void 0}l=r;if(void 0===l){p.B(5);break}if(h.j){p.B(6);break}h.j=!0;return w(p,h.delete(),7);case 7:return ui(new Q("DB_DELETED_BY_MISSING_OBJECT_STORE",{dbName:h.name,gb:l})),p.return(e());case 6:throw new Gi(l);case 5:return p.return(k);case 2:n=sa(p);if(n instanceof DOMException?"VersionError"===n.name:"DOMError"in self&&n instanceof DOMError?"VersionError"===n.name:n instanceof Object&&"message"in n&&"An attempt was made to open a database using a lower version than the existing version."===
n.message)return p.return(h.i(h.name,void 0,Object.assign(Object.assign({},d),{upgrade:void 0})));c();throw n;}})})};
this.h=b=e()}return this.h};var nj=new mj("YtIdbMeta",{la:{databases:!0},upgrade:function(a,b){b(1)&&Xi(a,"databases",{keyPath:"actualName"})}});
function oj(a){return G(this,function c(){var d;return x(c,function(e){if(1==e.h)return w(e,nj.open(),2);d=e.i;return e.return(Vi(d,["databases"],{I:!0,mode:"readwrite"},function(f){var g=Wi(f,"databases");return g.get(a.actualName).then(function(h){if(h?a.actualName!==h.actualName||a.publicName!==h.publicName||a.userIdentifier!==h.userIdentifier:1)return Si(g.h.put(a,void 0)).then(function(){})})}))})})}
function pj(a){return G(this,function c(){var d;return x(c,function(e){if(1==e.h)return w(e,nj.open(),2);d=e.i;return e.return(d.delete("databases",a))})})}
function qj(a){return G(this,function c(){var d,e;return x(c,function(f){return 1==f.h?(d=[],w(f,nj.open(),2)):3!=f.h?(e=f.i,w(f,Vi(e,["databases"],{I:!0,mode:"readonly"},function(g){d.length=0;return ej(Wi(g,"databases"),{},function(h){a(h.getValue())&&d.push(h.getValue());return h.continue()})}),3)):f.return(d)})})}
function rj(){return qj(function(a){return"LogsDatabaseV2"===a.publicName&&void 0!==a.userIdentifier})}
;var sj;
function tj(){return G(this,function b(){var c,d,e;return x(b,function(f){switch(f.h){case 1:c=qi();if(null===c||void 0===c?0:c.hasSucceededOnce)return f.return(new ri(!0));var g;if(g=Tg)g=/WebKit\/([0-9]+)/.exec(Lb),g=!!(g&&600<=parseInt(g[1],10));g&&(g=/WebKit\/([0-9]+)/.exec(Lb),g=!(g&&602<=parseInt(g[1],10)));if(g||ic)return f.return(new ri(!1));try{if(d=self,!(d.indexedDB&&d.IDBIndex&&d.IDBKeyRange&&d.IDBObjectStore))return f.return(new ri(!1))}catch(h){return f.return(new ri(!1))}if(!("IDBTransaction"in self&&
"objectStoreNames"in IDBTransaction.prototype))return f.return(new ri(!1));ra(f,2);e={actualName:"yt-idb-test-do-not-use",publicName:"yt-idb-test-do-not-use",userIdentifier:void 0};return w(f,oj(e),4);case 4:return w(f,pj("yt-idb-test-do-not-use"),5);case 5:return f.return(new ri(!0));case 2:return sa(f),f.return(new ri(!1))}})})}
function uj(){if(void 0!==sj)return sj;ti=!0;return sj=tj().then(function(a){ti=!1;return a.isSupported()})}
;function vj(a){try{xi();var b=!0}catch(c){b=!1}if(!b)throw a=new Q("AUTH_INVALID"),ui(a),a;b=xi();return{actualName:a+":"+b,publicName:a,userIdentifier:b}}
function wj(a,b,c,d){return G(this,function f(){var g,h;return x(f,function(k){switch(k.h){case 1:return w(k,xj({caller:"openDbImpl",publicName:a,version:b}),2);case 2:return yi(a),g=c?{actualName:a,publicName:a,userIdentifier:void 0}:vj(a),ra(k,3),w(k,oj(g),5);case 5:return w(k,kj(g.actualName,b,d),6);case 6:return k.return(k.i);case 3:return h=sa(k),ra(k,7),w(k,pj(g.actualName),9);case 9:k.h=8;k.m=0;break;case 7:sa(k);case 8:throw h;}})})}
function xj(a){return G(this,function c(){var d;return x(c,function(e){if(1==e.h)return w(e,uj(),2);if(!e.i)throw d=new Q("IDB_NOT_SUPPORTED",{context:a}),ui(d),d;e.h=0})})}
function yj(a,b,c){c=void 0===c?{}:c;return wj(a,b,!1,c)}
function zj(a,b,c){c=void 0===c?{}:c;return wj(a,b,!0,c)}
function Aj(a,b){b=void 0===b?{}:b;return G(this,function d(){var e;return x(d,function(f){if(1==f.h)return w(f,uj(),2);if(3!=f.h){if(!f.i)return f.return();yi(a);e=vj(a);return w(f,lj(e.actualName,b),3)}return w(f,pj(e.actualName),0)})})}
function Bj(a,b){var c=this;a=a.map(function(d){return G(c,function f(){return x(f,function(g){return 1==g.h?w(g,lj(d.actualName,b),2):w(g,pj(d.actualName),0)})})});
return Promise.all(a).then(function(){})}
function Cj(){var a=void 0===a?{}:a;return G(this,function c(){var d;return x(c,function(e){if(1==e.h)return w(e,uj(),2);if(3!=e.h){if(!e.i)return e.return();yi("LogsDatabaseV2");return w(e,rj(),3)}d=e.i;return w(e,Bj(d,a),0)})})}
function Dj(a,b){b=void 0===b?{}:b;return G(this,function d(){return x(d,function(e){if(1==e.h)return w(e,uj(),2);if(3!=e.h){if(!e.i)return e.return();yi(a);return w(e,lj(a,b),3)}return w(e,pj(a),0)})})}
;function Ej(a,b){mj.call(this,a,b);this.options=b;yi(a)}
v(Ej,mj);function Fj(a,b){var c;return function(){c||(c=new Ej(a,b));return c}}
Ej.prototype.i=function(a,b,c){c=void 0===c?{}:c;return(this.options.Aa?zj:yj)(a,b,Object.assign({},c))};
Ej.prototype.delete=function(a){a=void 0===a?{}:a;return(this.options.Aa?Dj:Aj)(this.name,a)};
function Gj(a,b){return Fj(a,b)}
;var Hj;function Ij(){if(Hj)return Hj();var a={};Hj=Gj("LogsDatabaseV2",{la:(a.LogsRequestsStore=!0,a.sapisid=!0,a.SWHealthLog=!0,a),Aa:!1,upgrade:function(b,c){c(2)&&(Xi(b,"LogsRequestsStore",{keyPath:"id",autoIncrement:!0}).h.createIndex("newRequest",["status","authHash","interface","timestamp"],{unique:!1}),Xi(b,"sapisid"));c(3)&&Xi(b,"SWHealthLog",{keyPath:"id",autoIncrement:!0}).h.createIndex("swHealthNewRequest",["interface","timestamp"],{unique:!1})},
version:4});return Hj()}
;function Jj(){return Ij().open()}
function Kj(a){return G(this,function c(){var d,e,f,g,h;return x(c,function(k){switch(k.h){case 1:return d={startTime:P(),transactionType:"YT_IDB_TRANSACTION_TYPE_WRITE"},w(k,Jj(),2);case 2:e=k.i;if(5<=e.h.version){f=Object.assign(Object.assign({},a),{options:JSON.parse(JSON.stringify(a.options)),interface:E("INNERTUBE_CONTEXT_CLIENT_NAME",0)});k.B(3);break}return w(k,Lj(),4);case 4:g=k.i,f=Object.assign(Object.assign({},a),{authHash:g,options:JSON.parse(JSON.stringify(a.options)),interface:E("INNERTUBE_CONTEXT_CLIENT_NAME",
0)});case 3:return w(k,Zi(e,"LogsRequestsStore",f),5);case 5:return h=k.i,d.xb=P(),Mj(d),k.return(h)}})})}
function Nj(a){return G(this,function c(){var d,e,f,g,h,k,l,n,p;return x(c,function(r){switch(r.h){case 1:return d={startTime:P(),transactionType:"YT_IDB_TRANSACTION_TYPE_READ"},w(r,Jj(),2);case 2:e=r.i;f=E("INNERTUBE_CONTEXT_CLIENT_NAME",0);if(5<=e.h.version){g=[a,f,0];h=[a,f,P()];r.B(3);break}return w(r,Lj(),4);case 4:k=r.i,g=[a,k,f,0],h=[a,k,f,P()];case 3:return l=IDBKeyRange.bound(g,h),n=void 0,p=5<=e.h.version?"newRequestV2":"newRequest",w(r,Vi(e,["LogsRequestsStore"],{mode:"readwrite",I:!0},
function(q){return hj(Wi(q,"LogsRequestsStore").index(p),{query:l,direction:"prev"},function(A){A.getValue()&&(n=A.getValue(),"NEW"===a&&(n.status="QUEUED",A.update(n)))})}),5);
case 5:return d.xb=P(),Mj(d),r.return(n)}})})}
function Oj(a){return G(this,function c(){var d;return x(c,function(e){if(1==e.h)return w(e,Jj(),2);d=e.i;return e.return(Vi(d,["LogsRequestsStore"],{mode:"readwrite",I:!0},function(f){var g=Wi(f,"LogsRequestsStore");return g.get(a).then(function(h){if(h)return h.status="QUEUED",Si(g.h.put(h,void 0)).then(function(){return h})})}))})})}
function Pj(a){return G(this,function c(){var d;return x(c,function(e){if(1==e.h)return w(e,Jj(),2);d=e.i;return e.return(Vi(d,["LogsRequestsStore"],{mode:"readwrite",I:!0},function(f){var g=Wi(f,"LogsRequestsStore");return g.get(a).then(function(h){return h?(h.status="NEW",h.sendCount+=1,Si(g.h.put(h,void 0)).then(function(){return h})):R.resolve(void 0)})}))})})}
function Qj(a){return G(this,function c(){var d;return x(c,function(e){if(1==e.h)return w(e,Jj(),2);d=e.i;return e.return(d.delete("LogsRequestsStore",a))})})}
function Rj(){return G(this,function b(){var c;return x(b,function(d){if(1==d.h)return w(d,Jj(),2);c=d.i;return d.return(c.clear("LogsRequestsStore"))})})}
function Sj(){return G(this,function b(){var c,d;return x(b,function(e){if(1==e.h)return w(e,Jj(),2);c=e.i;d=P()-2592E6;return w(e,Vi(c,["LogsRequestsStore"],{mode:"readwrite",I:!0},function(f){return ej(Wi(f,"LogsRequestsStore"),{},function(g){if(g.getValue().timestamp<=d)return g.delete().then(function(){return g.continue()})})}),0)})})}
function Tj(){return G(this,function b(){return x(b,function(c){return w(c,Cj(),0)})})}
function Lj(){return G(this,function b(){var c;return x(b,function(d){if(1==d.h){oi.h||(oi.h=new oi);var e={};var f=rd([]);f&&(e.Authorization=f,f=void 0,void 0===f&&(f=Number(E("SESSION_INDEX",0)),f=isNaN(f)?0:f),e["X-Goog-AuthUser"]=f,"INNERTUBE_HOST_OVERRIDE"in Gf||(e["X-Origin"]=window.location.origin),O("pageid_as_header_web")&&"DELEGATED_SESSION_ID"in Gf&&(e["X-Goog-PageId"]=E("DELEGATED_SESSION_ID")));e instanceof Se||(f=new Se(Ea),Te(f,2,e),e=f);return w(d,e,2)}c=d.i;e=d.return;f=Vh(c);var g=
new Ld;g.update(JSON.stringify(f,Object.keys(f).sort()));f=g.digest();g="";for(var h=0;h<f.length;h++)g+="0123456789ABCDEF".charAt(Math.floor(f[h]/16))+"0123456789ABCDEF".charAt(f[h]%16);return e.call(d,g)})})}
function Uj(a){return G(this,function c(){var d;return x(c,function(e){if(1==e.h)return w(e,Jj(),2);d=e.i;return w(e,Zi(d,"sapisid",a,"sapisid"),0)})})}
function Vj(){return G(this,function b(){var c,d;return x(b,function(e){if(1==e.h)return w(e,Jj(),2);if(3!=e.h)return c=e.i,w(e,c.get("sapisid","sapisid"),3);d=e.i;return e.return(d||"")})})}
function Mj(a){var b=Pf("nwl_latency_sampling_rate",.01);.02<b||Math.random()<=b&&hi("nwl_transaction_latency_payload",a)}
;var Wj={},Xj=Gj("ServiceWorkerLogsDatabase",{la:(Wj.SWHealthLog=!0,Wj),Aa:!0,upgrade:function(a,b){b(1)&&Xi(a,"SWHealthLog",{keyPath:"id",autoIncrement:!0}).h.createIndex("swHealthNewRequest",["interface","timestamp"],{unique:!1})},
version:1});function Yj(){return G(this,function b(){var c,d;return x(b,function(e){if(1==e.h)return O("web_clean_sw_logs_store")?w(e,Xj().open(),3):e.B(0);c=e.i;d=P()-2592E6;return w(e,Vi(c,["SWHealthLog"],{mode:"readwrite",I:!0},function(f){return ej(Wi(f,"SWHealthLog"),{},function(g){if(g.getValue().timestamp<=d)return g.delete().then(function(){return g.continue()})})}),0)})})}
function Zj(){return G(this,function b(){var c,d;return x(b,function(e){switch(e.h){case 1:return w(e,Xj().open(),2);case 2:return c=e.i,w(e,c.clear("SWHealthLog"),3);case 3:return w(e,Jj(),4);case 4:return d=e.i,e.return(d.clear("SWHealthLog"))}})})}
;var ak=["__Secure-1PAPISID","SAPISID","__Secure-3PAPISID"];function bk(){for(var a=u(ak),b=a.next();!b.done;b=a.next())if(b=nd.get(b.value))return b;return"LOGGED_OUT"}
function ck(){Ie.call(this);this.pollingInterval=3E3;this.j=[null,null,null];this.m=!1;dk(this)}
v(ck,Ie);function ek(){ck.h||(ck.h=new ck);var a=ck.h;a.m=!0;a.verifyUser();fk(a)}
ck.prototype.verifyUser=function(){var a=dk(this),b=a.fb;if(!a.vb)return fk(this),!0;Je(this,"ytsessionchange");b&&Je(this,"ytuserinvalid");fk(this);return!1};
function dk(a){var b=ak.map(function(e){var f;return null!==(f=nd.get(e))&&void 0!==f?f:""}),c=b.some(function(e,f){return a.j&&""!==a.j[f]&&""===e}),d=b.some(function(e,f){return a.j&&a.j[f]!==e});
a.j=b;return{fb:c,vb:d}}
function fk(a){a.m&&(gk(a),a.l=eg(function(){a.verifyUser()},a.pollingInterval))}
function gk(a){a.l&&(ig(a.l),a.l=void 0)}
;var hk;function ik(){hk||(hk=new Wh("yt.offline"));return hk}
function jk(a){if(O("offline_error_handling")){var b=ik().get("errors",!0)||{};b[a.message]={name:a.name,stack:a.stack};a.level&&(b[a.message].level=a.level);ik().set("errors",b,2592E3,!0)}}
;var kk=Pf("network_polling_interval",3E4);function T(){Ie.call(this);this.J=0;this.A=this.l=!1;this.G=0;this.K=!1;this.j=this.va();lk(this);mk(this)}
v(T,Ie);function nk(){if(!T.h){var a=B("yt.networkStatusManager.instance")||new T;z("yt.networkStatusManager.instance",a,void 0);T.h=a}return T.h}
m=T.prototype;m.N=function(){return this.j};
m.hb=function(a){this.l=!0;if(void 0===a?0:a)this.J||ok(this)};
m.va=function(){var a=window.navigator.onLine;return void 0===a?!0:a};
m.Ra=function(){this.K=!0};
m.ca=function(a,b){return Ie.prototype.ca.call(this,a,b)};
function mk(a){window.addEventListener("online",function(){return G(a,function c(){var d=this;return x(c,function(e){if(1==e.h)return w(e,d.Y(),2);pk(d);if(d.K&&O("offline_error_handling")){var f=ik().get("errors",!0);if(f){for(var g in f)if(f[g]){var h=new wi(g,"sent via offline_errors");h.name=f[g].name;h.stack=f[g].stack;h.level=f[g].level;Kf(h)}ik().set("errors",{},2592E3,!0)}}e.h=0})})})}
function lk(a){window.addEventListener("offline",function(){return G(a,function c(){var d=this;return x(c,function(e){if(1==e.h)return w(e,d.Y(),2);pk(d);e.h=0})})})}
function ok(a){a.J=eg(function(){return G(a,function c(){var d=this;return x(c,function(e){if(1==e.h){if(!d.j)return w(e,d.Y(),3);if(d.va())return e.B(3);d.A=!0;d.G=P();return d.l?w(e,d.Y(),3):e.B(3)}ok(d);e.h=0})})},kk)}
function pk(a){a.A&&(Lf(new wi("NetworkStatusManager state did not match poll",P()-a.G)),a.A=!1)}
m.Y=function(a){var b=this;return this.m?this.m:this.m=new Promise(function(c){return G(b,function e(){var f,g,h,k=this;return x(e,function(l){switch(l.h){case 1:return f=window.AbortController?new window.AbortController:void 0,g=null===f||void 0===f?void 0:f.signal,h=!1,ra(l,2,3),f&&(k.C=gg(function(){f.abort()},a||2E4)),w(l,fetch("/generate_204",{method:"HEAD",
signal:g}),5);case 5:h=!0;case 3:ta(l);k.m=void 0;k.C&&ig(k.C);h!==k.j&&(k.j=h,k.j&&k.l?Je(k,"ytnetworkstatus-online"):k.l&&Je(k,"ytnetworkstatus-offline"));c(h);ua(l);break;case 2:sa(l),h=!1,l.B(3)}})})})};
T.prototype.sendNetworkCheckRequest=T.prototype.Y;T.prototype.listen=T.prototype.ca;T.prototype.enableErrorFlushing=T.prototype.Ra;T.prototype.getWindowStatus=T.prototype.va;T.prototype.monitorNetworkStatusChange=T.prototype.hb;T.prototype.isNetworkAvailable=T.prototype.N;T.getInstance=nk;function qk(a){a=void 0===a?{}:a;Ie.call(this);var b=this;this.l=this.A=0;this.j=nk();var c=B("yt.networkStatusManager.instance.monitorNetworkStatusChange").bind(this.j);c&&c(a.Sa);a.eb&&(c=B("yt.networkStatusManager.instance.enableErrorFlushing").bind(this.j))&&c();if(c=B("yt.networkStatusManager.instance.listen").bind(this.j))a.na?(this.na=a.na,c("ytnetworkstatus-online",function(){rk(b,"publicytnetworkstatus-online")}),c("ytnetworkstatus-offline",function(){rk(b,"publicytnetworkstatus-offline")})):
(c("ytnetworkstatus-online",function(){Je(b,"publicytnetworkstatus-online")}),c("ytnetworkstatus-offline",function(){Je(b,"publicytnetworkstatus-offline")}))}
v(qk,Ie);qk.prototype.N=function(){var a=B("yt.networkStatusManager.instance.isNetworkAvailable").bind(this.j);return a?a():!0};
qk.prototype.Y=function(a){return G(this,function c(){var d=this,e;return x(c,function(f){return(e=B("yt.networkStatusManager.instance.sendNetworkCheckRequest").bind(d.j))?f.return(e(a)):f.return(!0)})})};
function rk(a,b){a.na?a.l?(ig(a.A),a.A=gg(function(){a.m!==b&&(Je(a,b),a.m=b,a.l=P())},a.na-(P()-a.l))):(Je(a,b),a.m=b,a.l=P()):Je(a,b)}
;var sk=!1,tk=!1,uk=0,vk=0,wk,xk=y.ytNetworklessLoggingInitializationOptions||{isNwlInitialized:sk,isIdbSupported:tk,potentialEsfErrorCounter:vk};O("export_networkless_options")&&z("ytNetworklessLoggingInitializationOptions",xk,void 0);
function yk(){G(this,function b(){var c,d,e,f;return x(b,function(g){switch(g.h){case 1:return w(g,uj(),2);case 2:(c=g.i)&&(tk=!0);d=O("networkless_logging");if(c&&d)return O("nwl_use_ytidb_partitioning")?w(g,Dj("LogsDatabaseV2"),8):w(g,Cj(),8);if(!c){g.B(0);break}return w(g,Tj(),0);case 8:return ek(),document.addEventListener("ytsessionchange",function(){zk()}),w(g,Vj(),11);
case 11:e=g.i;f=bk();if(e===f){g.B(12);break}zk();return w(g,Uj(f),12);case 12:if(!(O("enable_nwl_cleaning_logic")&&Math.random()<=Pf("nwl_cleaning_rate",.1))){g.B(14);break}return w(g,Sj(),15);case 15:return w(g,Yj(),14);case 14:sk=!0;Ak();Bk().N()&&Ck();Bk().ca("publicytnetworkstatus-online",Ck);Bk().ca("publicytnetworkstatus-offline",Dk);if(!O("networkless_immediately_drop_sw_health_store")){g.B(17);break}return w(g,Ek(),17);case 17:if(!O("networkless_immediately_drop_all_requests")){g.B(19);break}return w(g,
Tj(),19);case 19:O("export_networkless_options")&&(xk.isNwlInitialized=sk,xk.isIdbSupported=tk),g.h=0}})})}
function Fk(a,b){function c(d){var e=Bk().N();if(!Gk()||!d||e&&O("vss_networkless_bypass_write"))Hk(a,b);else{var f={url:a,options:b,timestamp:P(),status:"NEW",sendCount:0};Kj(f).then(function(g){f.id=g;(Bk().N()||O("networkless_always_online"))&&Ik(f)}).catch(function(g){Ik(f);
Bk().N()?Kf(g):jk(g)})}}
b=void 0===b?{}:b;O("skip_is_supported_killswitch")?uj().then(function(d){c(d)}):c(Jk())}
function Kk(a,b){function c(d){if(Gk()&&d){var e={url:a,options:b,timestamp:P(),status:"NEW",sendCount:0},f=!1,g=b.onSuccess?b.onSuccess:function(){};
e.options.onSuccess=function(h,k){void 0!==e.id?Qj(e.id):f=!0;g(h,k)};
Hk(e.url,e.options);Kj(e).then(function(h){e.id=h;f&&Qj(e.id)}).catch(function(h){Bk().N()?Kf(h):jk(h)})}else Hk(a,b)}
b=void 0===b?{}:b;O("skip_is_supported_killswitch")?uj().then(function(d){c(d)}):c(Jk())}
function Ck(){var a=this;uk||(uk=gg(function(){return G(a,function c(){var d;return x(c,function(e){if(1==e.h)return w(e,Nj("NEW"),2);if(3!=e.h)return d=e.i,d?w(e,Ik(d),3):(Dk(),e.return());uk&&(uk=0,Ck());e.h=0})})},100))}
function Dk(){ig(uk);uk=0}
function Ik(a){return G(this,function c(){var d;return x(c,function(e){switch(e.h){case 1:if(void 0===a.id){e.B(2);break}return w(e,Oj(a.id),3);case 3:(d=e.i)?a=d:Lf(Error("The request cannot be found in the database."));case 2:if(Lk(a,2592E6)){e.B(4);break}Lf(Error("Networkless Logging: Stored logs request expired age limit"));if(void 0===a.id){e.B(5);break}return w(e,Qj(a.id),5);case 5:return e.return();case 4:var f=a=Mk(a),g,h;if(null===(h=null===(g=null===f||void 0===f?void 0:f.options)||void 0===
g?void 0:g.postParams)||void 0===h?0:h.requestTimeMs)f.options.postParams.requestTimeMs=Math.round(P());(a=f)&&Hk(a.url,a.options);e.h=0}})})}
function Mk(a){var b=this,c=a.options.onError?a.options.onError:function(){};
a.options.onError=function(e,f){return G(b,function h(){return x(h,function(k){switch(k.h){case 1:if(!((B("ytNetworklessLoggingInitializationOptions")?xk.potentialEsfErrorCounter:vk)<=Pf("potential_esf_error_limit",10))){k.B(2);break}return w(k,Bk().Y(),3);case 3:if(Bk().N())B("ytNetworklessLoggingInitializationOptions")&&xk.potentialEsfErrorCounter++,vk++;else return c(e,f),k.return();case 2:if(void 0===(null===a||void 0===a?void 0:a.id)){k.B(4);break}return 1>a.sendCount?w(k,Pj(a.id),8):w(k,Qj(a.id),
4);case 8:gg(function(){Bk().N()&&Ck()},5E3);
case 4:c(e,f),k.h=0}})})};
var d=a.options.onSuccess?a.options.onSuccess:function(){};
a.options.onSuccess=function(e,f){return G(b,function h(){return x(h,function(k){if(1==k.h)return void 0===(null===a||void 0===a?void 0:a.id)?k.B(2):w(k,Qj(a.id),2);d(e,f);k.h=0})})};
return a}
function Lk(a,b){a=a.timestamp;return P()-a>=b?!1:!0}
function Ak(){var a=this;Nj("QUEUED").then(function(b){b&&!Lk(b,12E4)?gg(function(){return G(a,function d(){return x(d,function(e){if(1==e.h)return void 0===b.id?e.B(2):w(e,Pj(b.id),2);Ak();e.h=0})})}):Bk().N()&&Ck()})}
function zk(){Rj().catch(function(a){Kf(a)})}
function Ek(){return G(this,function b(){return x(b,function(c){return c.return(Zj().catch(function(d){Kf(d)}))})})}
function Bk(){wk||(wk=new qk({eb:!0,Sa:!0}));return wk}
function Hk(a,b){if(O("networkless_with_beacon")){var c=["method","postBody"];if(Object.keys(b).length>c.length)var d=!0;else{d=0;c=u(c);for(var e=c.next();!e.done;e=c.next())b.hasOwnProperty(e.value)&&d++;d=Object.keys(b).length!==d}d?Lg(a,b):O("networkless_with_ping_send")&&1===Object.keys(b).length&&b.allowPingSend?Xg(a):$g(a,void 0,b.postBody)}else O("networkless_with_ping_send")&&1===Object.keys(b).length&&b.allowPingSend?Xg(a):Lg(a,b)}
function Gk(){return B("ytNetworklessLoggingInitializationOptions")?xk.isNwlInitialized:sk}
function Jk(){return B("ytNetworklessLoggingInitializationOptions")?xk.isIdbSupported:tk}
;function Nk(a){var b=this;this.config_=null;a?this.config_=a:Th()&&(this.config_=Dh());eg(function(){ai(b)},5E3)}
Nk.prototype.isReady=function(){!this.config_&&Th()&&(this.config_=Dh());return!!this.config_};
function Gh(a,b,c,d){function e(r){r=void 0===r?!1:r;var q;if(d.retry&&"www.youtube-nocookie.com"!=h&&(r||(q=Zh(b,c,l,k)),q)){var A=g.onSuccess,I=g.onFetchSuccess;g.onSuccess=function(J,X){$h(q);A(J,X)};
c.onFetchSuccess=function(J,X){$h(q);I(J,X)}}try{r&&d.retry&&!d.Ka.bypassNetworkless?(g.method="POST",!d.Ka.writeThenSend&&O("nwl_send_fast_on_unload")?Kk(p,g):Fk(p,g)):(g.method="POST",g.postParams||(g.postParams={}),Lg(p,g))}catch(J){if("InvalidAccessError"==J.name)q&&($h(q),q=0),Lf(Error("An extension is blocking network request."));
else throw J;}q&&eg(function(){ai(a)},5E3)}
!E("VISITOR_DATA")&&"visitor_id"!==b&&.01>Math.random()&&Lf(new wi("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady()){var f=new wi("innertube xhrclient not ready",b,c,d);Kf(f);throw f;}var g={headers:{"Content-Type":"application/json"},method:"POST",postParams:c,postBodyFormat:"JSON",onTimeout:function(){d.onTimeout()},
onFetchTimeout:d.onTimeout,onSuccess:function(r,q){if(d.onSuccess)d.onSuccess(q)},
onFetchSuccess:function(r){if(d.onSuccess)d.onSuccess(r)},
onError:function(r,q){if(d.onError)d.onError(q)},
onFetchError:function(r){if(d.onError)d.onError(r)},
timeout:d.timeout,withCredentials:!0},h="";(f=a.config_.ab)&&(h=f);var k=a.config_.cb||!1,l=Uh(k,h,d);Object.assign(g.headers,l);g.headers.Authorization&&!h&&(g.headers["x-origin"]=window.location.origin);f="/youtubei/"+a.config_.innertubeApiVersion+"/"+b;var n={alt:"json"};a.config_.bb&&g.headers.Authorization||(n.key=a.config_.innertubeApiKey);var p=zg(""+h+f,n||{},!0);Gk()?uj().then(function(r){e(r)}):e(!1)}
;function Ok(a,b,c){c=void 0===c?{}:c;var d=Nk;E("ytLoggingEventsDefaultDisabled",!1)&&Nk==Nk&&(d=null);Ih(a,b,d,c)}
;var Pk=[{za:function(a){return"Cannot read property '"+a.key+"'"},
ma:{Error:[{regexp:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}],TypeError:[{regexp:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{regexp:/\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,groups:["value","key"]},{regexp:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,
groups:["value","key"]},{regexp:/No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,groups:["key"]},{regexp:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]},{regexp:/(null) is not an object \(evaluating '(?:([^.]+)\.)?([^']+)'\)/,groups:["value","base","key"]}]}},{za:function(a){return"Cannot call '"+a.key+"'"},
ma:{TypeError:[{regexp:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{regexp:/([^ ]+) called on (null or undefined)/,groups:["key","value"]},{regexp:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{regexp:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{regexp:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,
groups:["key"]},{regexp:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,groups:["key"]}]}},{za:function(a){return a.key+" is not defined"},
ma:{ReferenceError:[{regexp:/(.*) is not defined/,groups:["key"]},{regexp:/Can't find variable: (.*)/,groups:["key"]}]}}];var Rk={R:[],P:[{Da:Qk,weight:500}]};function Qk(a){a=a.stack;return a.includes("chrome://")||a.includes("chrome-extension://")||a.includes("moz-extension://")}
;function Sk(){this.P=[];this.R=[]}
var Tk;function Uk(){if(!Tk){var a=Tk=new Sk;a.R.length=0;a.P.length=0;Rk.R&&a.R.push.apply(a.R,Rk.R);Rk.P&&a.P.push.apply(a.P,Rk.P)}return Tk}
;var Vk=new M;function Wk(a){function b(){return a.charCodeAt(d++)}
var c=a.length,d=0;do{var e=Xk(b);if(Infinity===e)break;var f=e>>3;switch(e&7){case 0:e=Xk(b);if(2===f)return e;break;case 1:if(2===f)return;d+=8;break;case 2:e=Xk(b);if(2===f)return a.substr(d,e);d+=e;break;case 5:if(2===f)return;d+=4;break;default:return}}while(d<c)}
function Xk(a){var b=a(),c=b&127;if(128>b)return c;b=a();c|=(b&127)<<7;if(128>b)return c;b=a();c|=(b&127)<<14;if(128>b)return c;b=a();return 128>b?c|(b&127)<<21:Infinity}
;function Yk(a,b,c,d){if(a)if(Array.isArray(a)){var e=d;for(d=0;d<a.length&&!(a[d]&&(e+=Zk(d,a[d],b,c),500<e));d++);d=e}else if("object"===typeof a)for(e in a){if(a[e]){var f=e;var g=a[e],h=b,k=c;f="string"!==typeof g||"clickTrackingParams"!==f&&"trackingParams"!==f?0:(g=Wk(atob(g.replace(/-/g,"+").replace(/_/g,"/"))))?Zk(f+".ve",g,h,k):0;d+=f;d+=Zk(e,a[e],b,c);if(500<d)break}}else c[b]=$k(a),d+=c[b].length;else c[b]=$k(a),d+=c[b].length;return d}
function Zk(a,b,c,d){c+="."+a;a=$k(b);d[c]=a;return c.length+a.length}
function $k(a){return("string"===typeof a?a:String(JSON.stringify(a))).substr(0,500)}
;var al=new Set,bl=0,cl=0,dl=0,el=[],fl=["PhantomJS","Googlebot","TO STOP THIS SECURITY SCAN go/scan"];function gl(a){hl(a,"WARNING")}
function hl(a,b,c,d,e,f){f=void 0===f?{}:f;f.name=c||E("INNERTUBE_CONTEXT_CLIENT_NAME",1);f.version=d||E("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0);c=f||{};b=void 0===b?"ERROR":b;b=void 0===b?"ERROR":b;if(a&&(a.hasOwnProperty("level")&&a.level&&(b=a.level),O("console_log_js_exceptions")&&(d=[],d.push("Name: "+a.name),d.push("Message: "+a.message),a.hasOwnProperty("params")&&d.push("Error Params: "+JSON.stringify(a.params)),a.hasOwnProperty("args")&&d.push("Error args: "+JSON.stringify(a.args)),d.push("File name: "+
a.fileName),d.push("Stacktrace: "+a.stack),window.console.log(d.join("\n"),a)),!(5<=bl))){var g=Nd(a);d=g.message||"Unknown Error";e=g.name||"UnknownError";var h=g.stack||a.i||"Not available";h.startsWith(e+": "+d)&&(f=h.split("\n"),f.shift(),h=f.join("\n"));f=g.lineNumber||"Not available";g=g.fileName||"Not available";var k=0;if(a.hasOwnProperty("args")&&a.args&&a.args.length)for(var l=0;l<a.args.length&&!(k=Yk(a.args[l],"params."+l,c,k),500<=k);l++);else if(a.hasOwnProperty("params")&&a.params){var n=
a.params;if("object"===typeof a.params)for(l in n){if(n[l]){var p="params."+l,r=$k(n[l]);c[p]=r;k+=p.length+r.length;if(500<k)break}}else c.params=$k(n)}if(el.length)for(l=0;l<el.length&&!(k=Yk(el[l],"params.context."+l,c,k),500<=k);l++);navigator.vendor&&!c.hasOwnProperty("vendor")&&(c["device.vendor"]=navigator.vendor);l={message:d,name:e,lineNumber:f,fileName:g,stack:h,params:c,sampleWeight:1};c=Number(a.columnNumber);isNaN(c)||(l.lineNumber=l.lineNumber+":"+c);if("IGNORED"===a.level)a=0;else a:{a=
Uk();c=u(a.R);for(d=c.next();!d.done;d=c.next())if(d=d.value,l.message&&l.message.match(d.kl)){a=d.weight;break a}a=u(a.P);for(c=a.next();!c.done;c=a.next())if(c=c.value,c.Da(l)){a=c.weight;break a}a=1}l.sampleWeight=a;a=u(Pk);for(c=a.next();!c.done;c=a.next())if(c=c.value,c.ma[l.name])for(e=u(c.ma[l.name]),d=e.next();!d.done;d=e.next())if(f=d.value,d=l.message.match(f.regexp)){l.params["params.error.original"]=d[0];e=f.groups;f={};for(g=0;g<e.length;g++)f[e[g]]=d[g+1],l.params["params.error."+e[g]]=
d[g+1];l.message=c.za(f);break}l.params||(l.params={});a=Uk();l.params["params.errorServiceSignature"]="msg="+a.R.length+"&cb="+a.P.length;l.params["params.serviceWorker"]="false";y.document&&y.document.querySelectorAll&&(l.params["params.fscripts"]=String(document.querySelectorAll("script:not([nonce])").length));window.yterr&&"function"===typeof window.yterr&&window.yterr(l);if(0!==l.sampleWeight&&!al.has(l.message)){"ERROR"===b?(Vk.U("handleError",l),O("record_app_crashed_web")&&0===dl&&1===l.sampleWeight&&
(dl++,Ok("appCrashed",{appCrashType:"APP_CRASH_TYPE_BREAKPAD"})),cl++):"WARNING"===b&&Vk.U("handleWarning",l);if(O("kevlar_gel_error_routing")){a=b;b:{c=u(fl);for(d=c.next();!d.done;d=c.next())if(Ug(d.value.toLowerCase())){c=!0;break b}c=!1}if(c)c=void 0;else{d={stackTrace:l.stack};l.fileName&&(d.filename=l.fileName);c=l.lineNumber&&l.lineNumber.split?l.lineNumber.split(":"):[];0!==c.length&&(1!==c.length||isNaN(Number(c[0]))?2!==c.length||isNaN(Number(c[0]))||isNaN(Number(c[1]))||(d.lineNumber=Number(c[0]),
d.columnNumber=Number(c[1])):d.lineNumber=Number(c[0]));c={level:"ERROR_LEVEL_UNKNOWN",message:l.message,errorClassName:l.name,sampleWeight:l.sampleWeight};"ERROR"===a?c.level="ERROR_LEVEL_ERROR":"WARNING"===a&&(c.level="ERROR_LEVEL_WARNNING");d={isObfuscated:!0,browserStackInfo:d};e={pageUrl:window.location.href,kvPairs:[]};E("FEXP_EXPERIMENTS")&&(e.experimentIds=E("FEXP_EXPERIMENTS"));if(f=l.params)for(g=u(Object.keys(f)),h=g.next();!h.done;h=g.next())h=h.value,e.kvPairs.push({key:"client."+h,value:String(f[h])});
f=E("SERVER_NAME",void 0);g=E("SERVER_VERSION",void 0);f&&g&&(e.kvPairs.push({key:"server.name",value:f}),e.kvPairs.push({key:"server.version",value:g}));c={errorMetadata:e,stackTrace:d,logMessage:c}}c&&(Ok("clientError",c),("ERROR"===a||O("errors_flush_gel_always_killswitch"))&&yh())}if(!O("suppress_error_204_logging")){a=l.params||{};b={urlParams:{a:"logerror",t:"jserror",type:l.name,msg:l.message.substr(0,250),line:l.lineNumber,level:b,"client.name":a.name},postParams:{url:E("PAGE_NAME",window.location.href),
file:l.fileName},method:"POST"};a.version&&(b["client.version"]=a.version);if(b.postParams){l.stack&&(b.postParams.stack=l.stack);c=u(Object.keys(a));for(d=c.next();!d.done;d=c.next())d=d.value,b.postParams["client."+d]=a[d];if(a=E("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS",void 0))for(c=u(Object.keys(a)),d=c.next();!d.done;d=c.next())d=d.value,b.postParams[d]=a[d];a=E("SERVER_NAME",void 0);c=E("SERVER_VERSION",void 0);a&&c&&(b.postParams["server.name"]=a,b.postParams["server.version"]=c)}Lg(E("ECATCHER_REPORT_HOST",
"")+"/error_204",b)}al.add(l.message);bl++}}}
function il(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];a.args||(a.args=[]);a.args.push.apply(a.args,fa(c))}
;var jl={jc:3611,yb:27686,zb:85013,Ab:23462,Cb:42016,Db:62407,Eb:26926,Bb:43781,Fb:51236,Gb:79148,Hb:50160,Ib:77504,Ub:87907,Vb:18630,Wb:54445,Xb:80935,Yb:105675,Zb:37521,ac:47786,cc:98349,dc:123695,ec:6827,fc:29434,hc:7282,ic:124448,mc:32276,lc:76278,nc:93911,oc:106531,pc:27259,qc:27262,sc:27263,uc:21759,wc:27107,xc:62936,yc:49568,zc:38408,Ac:80637,Bc:68727,Cc:68728,Dc:80353,Ec:80356,Fc:74610,Gc:45707,Hc:83962,Ic:83970,Jc:46713,Kc:89711,Lc:74612,Mc:93265,Nc:74611,Oc:128979,Pc:128978,Rc:113533,Sc:93252,
Tc:99357,Vc:94521,Wc:114252,Xc:113532,Yc:94522,Uc:94583,Zc:88E3,bd:93253,cd:93254,dd:94387,ed:94388,fd:93255,gd:97424,Qc:72502,hd:110111,jd:76019,ld:117092,md:117093,kd:89431,nd:110466,od:77240,pd:60508,qd:105350,rd:73393,sd:113534,td:92098,ud:84517,vd:83759,wd:80357,xd:86113,yd:72598,zd:72733,Ad:107349,Bd:124275,Cd:118203,Dd:117431,Ed:117429,Fd:117430,Gd:117432,Hd:120080,Id:117259,Jd:121692,Kd:97615,Ld:31402,Md:84774,Nd:95117,Od:98930,Pd:98931,Qd:98932,Rd:43347,Sd:129889,Td:45474,Ud:100352,Vd:84758,
Wd:98443,Xd:117985,Yd:74613,Zd:74614,ae:64502,be:74615,ce:74616,de:122224,ee:74617,ge:77820,he:74618,ie:93278,je:93274,ke:93275,le:93276,me:22110,ne:29433,pe:120541,re:82047,se:113550,te:75836,ue:75837,we:42352,xe:84512,ye:76065,ze:75989,Ae:16623,Be:32594,Ce:27240,De:32633,Ee:74858,Ge:3945,Fe:16989,He:45520,Ie:25488,Je:25492,Ke:25494,Le:55760,Me:14057,Ne:18451,Oe:57204,Pe:57203,Qe:17897,Re:57205,Se:18198,Te:17898,Ue:17909,Ve:43980,We:46220,Xe:11721,Ye:49954,Ze:96369,af:3854,bf:56251,cf:25624,df:16906,
ef:99999,ff:68172,gf:27068,hf:47973,jf:72773,kf:26970,lf:26971,mf:96805,nf:17752,pf:73233,qf:109512,rf:22256,sf:14115,tf:22696,uf:89278,vf:89277,wf:109513,xf:43278,yf:43459,zf:43464,Af:89279,Bf:43717,Cf:55764,Df:22255,Ef:89281,Ff:40963,Gf:43277,Hf:43442,If:91824,Jf:120137,Kf:96367,Lf:36850,Mf:72694,Nf:37414,Of:36851,Qf:124863,Pf:121343,Rf:73491,Sf:54473,Tf:43375,Uf:46674,Vf:32473,Wf:72901,Xf:72906,Yf:50947,Zf:50612,ag:50613,cg:50942,dg:84938,eg:84943,fg:84939,gg:84941,hg:84944,ig:84940,jg:84942,kg:35585,
lg:51926,mg:79983,ng:63238,og:18921,pg:63241,qg:57893,rg:41182,sg:33424,tg:22207,ug:42993,vg:36229,wg:22206,xg:22205,yg:18993,zg:19001,Ag:18990,Bg:18991,Cg:18997,Dg:18725,Eg:19003,Fg:36874,Gg:44763,Hg:33427,Ig:67793,Jg:22182,Kg:37091,Lg:34650,Mg:50617,Ng:47261,Og:22287,Pg:25144,Qg:97917,Rg:62397,Sg:125598,Tg:36961,Ug:108035,Vg:27426,Wg:27857,Xg:27846,Yg:27854,Zg:69692,ah:61411,bh:39299,dh:38696,eh:62520,fh:36382,gh:108701,hh:50663,ih:36387,jh:14908,kh:37533,lh:105443,mh:61635,nh:62274,oh:65702,ph:65703,
qh:65701,rh:76256,sh:37671,th:49953,vh:36216,wh:28237,xh:39553,yh:29222,zh:26107,Ah:38050,Bh:26108,Dh:120745,Ch:26109,Eh:26110,Fh:66881,Gh:28236,Hh:14586,Ih:57929,Jh:74723,Kh:44098,Lh:44099,Mh:23528,Nh:61699,Oh:59149,Ph:101951,Qh:97346,Rh:118051,Sh:95102,Th:64882,Uh:119505,Vh:63595,Wh:63349,Xh:95101,Yh:75240,Zh:27039,ai:68823,bi:21537,ci:83464,di:75707,fi:83113,gi:101952,hi:101953,ji:79610,ki:125755,li:24402,mi:24400,ni:32925,oi:57173,ri:122502,si:64423,ti:64424,vi:33986,wi:100828,xi:129089,yi:21409,
zi:11070,Ai:11074,Bi:17880,Ci:14001,Ei:30709,Fi:30707,Gi:30711,Hi:30710,Ii:30708,Di:26984,Ji:63648,Ki:63649,Li:51879,Mi:111059,Ni:5754,Oi:20445,Pi:110386,Qi:113746,Ri:66557,Si:17310,Ti:28631,Ui:21589,Vi:68012,Wi:60480,Xi:31571,Yi:76980,Zi:41577,aj:45469,bj:38669,cj:13768,dj:13777,ej:62985,fj:4724,gj:59369,hj:43927,ij:43928,jj:12924,kj:100355,nj:56219,oj:27669,pj:10337,mj:47896,qj:122629,rj:121258,sj:107598,tj:127991,uj:96639,vj:107536,wj:96661,xj:96658,yj:116646,zj:121122,Aj:96660,Bj:127738,Cj:127083,
Dj:104443,Ej:96659,Fj:106442,Gj:63667,Hj:63668,Ij:63669,Jj:78314,Kj:55761,Lj:127098,Mj:96368,Nj:67374,Oj:48992,Pj:49956,Qj:31961,Rj:26388,Sj:23811,Tj:5E4,Uj:126250,Vj:96370,Wj:47355,Xj:47356,Yj:37935,Zj:45521,ak:21760,bk:83769,ck:49977,dk:49974,ek:93497,fk:93498,gk:34325,hk:115803,ik:123707,jk:100081,kk:35309,lk:68314,mk:25602,nk:100339,pk:59018,qk:18248,rk:50625,sk:9729,tk:37168,uk:37169,vk:21667,wk:16749,xk:18635,yk:39305,zk:18046,Ak:53969,Bk:8213,Ck:93926,Dk:102852,Ek:110099,Fk:22678,Gk:69076,
Ik:100856,Jk:17736,Kk:3832,Lk:55759,Mk:64031,Nk:93044,Ok:93045,Pk:34388,Qk:17657,Rk:17655,Sk:39579,Tk:39578,Uk:77448,Vk:8196,Wk:11357,Xk:69877,Yk:8197,Zk:82039};function kl(){var a=jb(ll),b;return Ze(new Se(function(c,d){a.onSuccess=function(e){Fg(e)?c(new ml(e)):d(new nl("Request failed, status="+(e&&"status"in e?e.status:-1),"net.badstatus",e))};
a.onError=function(e){d(new nl("Unknown request error","net.unknown",e))};
a.onTimeout=function(e){d(new nl("Request timed out","net.timeout",e))};
b=Lg("//googleads.g.doubleclick.net/pagead/id",a)}),function(c){c instanceof $e&&b.abort();
return Xe(c)})}
function nl(a,b,c){Ra.call(this,a+", errorCode="+b);this.errorCode=b;this.xhr=c;this.name="PromiseAjaxError"}
v(nl,Ra);function ml(a){this.xhr=a}
;function ol(){this.i=0;this.h=null}
ol.prototype.then=function(a,b,c){return 1===this.i&&a?(a=a.call(c,this.h),Re(a)?a:pl(a)):2===this.i&&b?(a=b.call(c,this.h),Re(a)?a:ql(a)):this};
ol.prototype.getValue=function(){return this.h};
ol.prototype.$goog_Thenable=!0;function ql(a){var b=new ol;a=void 0===a?null:a;b.i=2;b.h=void 0===a?null:a;return b}
function pl(a){var b=new ol;a=void 0===a?null:a;b.i=1;b.h=void 0===a?null:a;return b}
;function rl(){if(pd())return!0;var a=E("INNERTUBE_CLIENT_NAME");return!a||"WEB"!==a&&"MWEB"!==a||Tg&&Ug("applewebkit")&&!Ug("version")&&(!Ug("safari")||Ug("gsa/"))||lc&&Ug("version/")?!0:(a=nd.get("CONSENT",void 0))?a.startsWith("YES+"):!0}
;function sl(a){Ra.call(this,a.message||a.description||a.name);this.isMissing=a instanceof tl;this.isTimeout=a instanceof nl&&"net.timeout"==a.errorCode;this.isCanceled=a instanceof $e}
v(sl,Ra);sl.prototype.name="BiscottiError";function tl(){Ra.call(this,"Biscotti ID is missing from server")}
v(tl,Ra);tl.prototype.name="BiscottiMissingError";var ll={format:"RAW",method:"GET",timeout:5E3,withCredentials:!0},ul=null;function pg(){if(O("condition_biscotti_fetch_on_consent_cookie_html5_clients")&&!rl())return Xe(Error("User has not consented - not fetching biscotti id."));if("1"==hb())return Xe(Error("Biscotti ID is not available in private embed mode"));ul||(ul=Ze(kl().then(vl),function(a){return wl(2,a)}));
return ul}
function vl(a){a=a.xhr.responseText;if(0!=a.lastIndexOf(")]}'",0))throw new tl;a=JSON.parse(a.substr(4));if(1<(a.type||1))throw new tl;a=a.id;qg(a);ul=pl(a);xl(18E5,2);return a}
function wl(a,b){b=new sl(b);qg("");ul=ql(b);0<a&&xl(12E4,a-1);throw b;}
function xl(a,b){ag(function(){Ze(kl().then(vl,function(c){return wl(b,c)}),Ea)},a)}
function yl(){try{var a=B("yt.ads.biscotti.getId_");return a?a():pg()}catch(b){return Xe(b)}}
;function zl(a){if("1"!=hb()){a&&og();try{yl().then(function(){},function(){}),ag(zl,18E5)}catch(b){Kf(b)}}}
;var Al=Date.now().toString();
function Bl(){a:{if(window.crypto&&window.crypto.getRandomValues)try{var a=Array(16),b=new Uint8Array(16);window.crypto.getRandomValues(b);for(var c=0;c<a.length;c++)a[c]=b[c];var d=a;break a}catch(e){}d=Array(16);for(a=0;16>a;a++){b=Date.now();for(c=0;c<b%23;c++)d[a]=Math.random();d[a]=Math.floor(256*Math.random())}if(Al)for(a=1,b=0;b<Al.length;b++)d[a%16]=d[a%16]^d[(a-1)%16]/4^Al.charCodeAt(b),a++}a=[];for(b=0;b<d.length;b++)a.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(d[b]&63));
return a.join("")}
;var Cl,Dl=y.ytLoggingDocDocumentNonce_;Dl||(Dl=Bl(),Pa("ytLoggingDocDocumentNonce_",Dl));Cl=Dl;var El={oe:0,kc:1,tc:2,uh:3,qe:4,Hk:5,ii:6,lj:7,0:"DEFAULT",1:"CHAT",2:"CONVERSATIONS",3:"MINIPLAYER",4:"DIALOG",5:"VOZ",6:"MUSIC_WATCH_TABS",7:"SHARE"};function Fl(a){this.h=a}
function Gl(a){return new Fl({trackingParams:a})}
Fl.prototype.getAsJson=function(){var a={};void 0!==this.h.trackingParams?a.trackingParams=this.h.trackingParams:(a.veType=this.h.veType,void 0!==this.h.veCounter&&(a.veCounter=this.h.veCounter),void 0!==this.h.elementIndex&&(a.elementIndex=this.h.elementIndex));void 0!==this.h.dataElement&&(a.dataElement=this.h.dataElement.getAsJson());void 0!==this.h.youtubeData&&(a.youtubeData=this.h.youtubeData);return a};
Fl.prototype.toString=function(){return JSON.stringify(this.getAsJson())};
Fl.prototype.isClientVe=function(){return!this.h.trackingParams&&!!this.h.veType};function Hl(a){a=void 0===a?0:a;return 0==a?"client-screen-nonce":"client-screen-nonce."+a}
function Il(a){a=void 0===a?0:a;return 0==a?"ROOT_VE_TYPE":"ROOT_VE_TYPE."+a}
function Jl(a){return E(Il(void 0===a?0:a),void 0)}
z("yt_logging_screen.getRootVeType",Jl,void 0);function Kl(a){return(a=Jl(void 0===a?0:a))?new Fl({veType:a,youtubeData:void 0}):null}
function Ll(){var a=E("csn-to-ctt-auth-info");a||(a={},N("csn-to-ctt-auth-info",a));return a}
function Ml(a){a=void 0===a?0:a;var b=E(Hl(a));if(!b&&!E("USE_CSN_FALLBACK",!0))return null;b||0!=a||(b="UNDEFINED_CSN");return b?b:null}
z("yt_logging_screen.getCurrentCsn",Ml,void 0);function Nl(a,b,c){var d=Ll();(c=Ml(c))&&delete d[c];b&&(d[a]=b)}
function Ol(a){return Ll()[a]}
z("yt_logging_screen.getCttAuthInfo",Ol,void 0);function Pl(a,b,c,d){c=void 0===c?0:c;if(a!==E(Hl(c))||b!==E(Il(c)))Nl(a,d,c),N(Hl(c),a),N(Il(c),b),b=function(){setTimeout(function(){a&&Ih("foregroundHeartbeatScreenAssociated",{clientDocumentNonce:Cl,clientScreenNonce:a},Nk)},0)},"requestAnimationFrame"in window?window.requestAnimationFrame(b):b()}
z("yt_logging_screen.setCurrentScreen",Pl,void 0);function Ql(a){bi.call(this,1,arguments);this.csn=a}
v(Ql,bi);var ki=new ci("screen-created",Ql),Rl=[],Tl=Sl,Ul=0;function Vl(a,b,c,d){var e=d.filter(function(f){f.csn!==b?(f.csn=b,f=!0):f=!1;return f});
c={csn:b,parentVe:c.getAsJson(),childVes:Xa(e,function(f){return f.getAsJson()})};
d=u(d);for(e=d.next();!e.done;e=d.next())e=e.value.getAsJson(),(fb(e)||!e.trackingParams&&!e.veType)&&gl(Error("Child VE logged with no data"));d={F:Ol(b),S:b};"UNDEFINED_CSN"==b?Wl("visualElementAttached",c,d):a?Ih("visualElementAttached",c,a,d):Ok("visualElementAttached",c,d)}
function Sl(){for(var a=Math.random()+"",b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);255<e&&(b[c++]=e&255,e>>=8);b[c++]=e}return Ac(b)}
function Wl(a,b,c){Rl.push({payloadName:a,payload:b,options:c});Ul||(Ul=li())}
function mi(a){if(Rl){for(var b=u(Rl),c=b.next();!c.done;c=b.next())c=c.value,c.payload&&(c.payload.csn=a.csn,Ih(c.payloadName,c.payload,null,c.options));Rl.length=0}Ul=0}
;function Xl(){this.i=new Set;this.h=new Set;this.j=new Map}
Xl.prototype.clear=function(){this.i.clear();this.h.clear();this.j.clear()};function Yl(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];if(!Zl(a)||c.some(function(e){return!Zl(e)}))throw Error("Only objects may be merged.");
c=u(c);for(d=c.next();!d.done;d=c.next())$l(a,d.value);return a}
function $l(a,b){for(var c in b)if(Zl(b[c])){if(c in a&&!Zl(a[c]))throw Error("Cannot merge an object into a non-object.");c in a||(a[c]={});$l(a[c],b[c])}else if(am(b[c])){if(c in a&&!am(a[c]))throw Error("Cannot merge an array into a non-array.");c in a||(a[c]=[]);bm(a[c],b[c])}else a[c]=b[c];return a}
function bm(a,b){b=u(b);for(var c=b.next();!c.done;c=b.next())c=c.value,Zl(c)?a.push($l({},c)):am(c)?a.push(bm([],c)):a.push(c);return a}
function Zl(a){return"object"===typeof a&&!Array.isArray(a)}
function am(a){return"object"===typeof a&&Array.isArray(a)}
;function cm(a,b){bi.call(this,1,arguments)}
v(cm,bi);function dm(a,b){bi.call(this,1,arguments)}
v(dm,bi);var em=new ci("aft-recorded",cm),fm=new ci("timing-sent",dm);var gm=window;function hm(){this.timing={};this.clearResourceTimings=function(){};
this.webkitClearResourceTimings=function(){};
this.mozClearResourceTimings=function(){};
this.msClearResourceTimings=function(){};
this.oClearResourceTimings=function(){}}
var U=gm.performance||gm.mozPerformance||gm.msPerformance||gm.webkitPerformance||new hm;var im=!1,jm={'script[name="scheduler/scheduler"]':"sj",'script[name="player/base"]':"pj",'link[rel="stylesheet"][name="www-player"]':"pc",'link[rel="stylesheet"][name="player/www-player"]':"pc",'script[name="desktop_polymer/desktop_polymer"]':"dpj",'link[rel="import"][name="desktop_polymer"]':"dph",'script[name="mobile-c3/mobile-c3"]':"mcj",'link[rel="stylesheet"][name="mobile-c3"]':"mcc",'script[name="player-plasma-ias-phone/base"]':"mcppj",'script[name="player-plasma-ias-tablet/base"]':"mcptj",
'link[rel="stylesheet"][name="mobile-polymer-player-ias"]':"mcpc",'link[rel="stylesheet"][name="mobile-polymer-player-svg-ias"]':"mcpsc",'script[name="mobile_blazer_core_mod"]':"mbcj",'link[rel="stylesheet"][name="mobile_blazer_css"]':"mbc",'script[name="mobile_blazer_logged_in_users_mod"]':"mbliuj",'script[name="mobile_blazer_logged_out_users_mod"]':"mblouj",'script[name="mobile_blazer_noncore_mod"]':"mbnj","#player_css":"mbpc",'script[name="mobile_blazer_desktopplayer_mod"]':"mbpj",'link[rel="stylesheet"][name="mobile_blazer_tablet_css"]':"mbtc",
'script[name="mobile_blazer_watch_mod"]':"mbwj"};Na(U.clearResourceTimings||U.webkitClearResourceTimings||U.mozClearResourceTimings||U.msClearResourceTimings||U.oClearResourceTimings||Ea,U);function km(a){var b=lm(a);if(b.aft)return b.aft;a=E((a||"")+"TIMING_AFT_KEYS",["ol"]);for(var c=a.length,d=0;d<c;d++){var e=b[a[d]];if(e)return e}return NaN}
function mm(){var a;if(O("csi_use_performance_navigation_timing")){var b,c,d,e=null===(d=null===(c=null===(b=null===(a=null===U||void 0===U?void 0:U.getEntriesByType)||void 0===a?void 0:a.call(U,"navigation"))||void 0===b?void 0:b[0])||void 0===c?void 0:c.toJSON)||void 0===d?void 0:d.call(c);e?(e.requestStart=nm(e.requestStart),e.responseEnd=nm(e.responseEnd),e.redirectStart=nm(e.redirectStart),e.redirectEnd=nm(e.redirectEnd),e.domainLookupEnd=nm(e.domainLookupEnd),e.connectStart=nm(e.connectStart),
e.connectEnd=nm(e.connectEnd),e.responseStart=nm(e.responseStart),e.secureConnectionStart=nm(e.secureConnectionStart),e.domainLookupStart=nm(e.domainLookupStart),e.isPerformanceNavigationTiming=!0,a=e):a=U.timing}else a=U.timing;return a}
function om(){return O("csi_use_time_origin")&&U.timeOrigin?Math.floor(U.timeOrigin):U.timing.navigationStart}
function nm(a){return Math.round(om()+a)}
function pm(a){var b;(b=B("ytcsi."+(a||"")+"data_"))||(b={tick:{},info:{}},Pa("ytcsi."+(a||"")+"data_",b));return b}
function qm(a){a=pm(a);a.info||(a.info={});return a.info}
function lm(a){a=pm(a);a.tick||(a.tick={});return a.tick}
function rm(a){var b=pm(a).nonce;b||(b=Bl(),pm(a).nonce=b);return b}
function sm(a){var b=lm(a||""),c=km(a);c&&!im&&(hi(em,new cm(Math.round(c-b._start),a)),im=!0)}
;function tm(){if(U.getEntriesByType){var a=U.getEntriesByType("paint");if(a=Za(a,function(b){return"first-paint"===b.name}))return nm(a.startTime)}a=U.timing;
return a.ib?Math.max(0,a.ib):0}
;function um(){var a=B("ytcsi.debug");a||(a=[],z("ytcsi.debug",a,void 0),z("ytcsi.reference",{},void 0));return a}
function vm(a){a=a||"";var b=B("ytcsi.reference");b||(um(),b=B("ytcsi.reference"));if(b[a])return b[a];var c=um(),d={timerName:a,info:{},tick:{},span:{}};c.push(d);return b[a]=d}
;var wm=y.ytLoggingLatencyUsageStats_||{};z("ytLoggingLatencyUsageStats_",wm,void 0);function xm(){this.h=0}
function ym(){xm.h||(xm.h=new xm);return xm.h}
xm.prototype.tick=function(a,b,c){zm(this,"tick_"+a+"_"+b)||Ok("latencyActionTicked",{tickName:a,clientActionNonce:b},{timestamp:c})};
xm.prototype.info=function(a,b){var c=Object.keys(a).join("");zm(this,"info_"+c+"_"+b)||(a=Object.assign({},a),a.clientActionNonce=b,Ok("latencyActionInfo",a))};
xm.prototype.span=function(a,b){var c=Object.keys(a).join("");zm(this,"span_"+c+"_"+b)||(a.clientActionNonce=b,Ok("latencyActionSpan",a))};
function zm(a,b){wm[b]=wm[b]||{count:0};var c=wm[b];c.count++;c.time=P();a.h||(a.h=eg(function(){var d=P(),e;for(e in wm)wm[e]&&6E4<d-wm[e].time&&delete wm[e];a&&(a.h=0)},5E3));
return 5<c.count?(6===c.count&&1>1E5*Math.random()&&(c=new wi("CSI data exceeded logging limit with key",b.split("_")),0<=b.indexOf("plev")||gl(c)),!0):!1}
;var V={},Am=(V.auto_search="LATENCY_ACTION_AUTO_SEARCH",V.ad_to_ad="LATENCY_ACTION_AD_TO_AD",V.ad_to_video="LATENCY_ACTION_AD_TO_VIDEO",V.app_startup="LATENCY_ACTION_APP_STARTUP",V["artist.analytics"]="LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS",V["artist.events"]="LATENCY_ACTION_CREATOR_ARTIST_CONCERTS",V["artist.presskit"]="LATENCY_ACTION_CREATOR_ARTIST_PROFILE",V.browse="LATENCY_ACTION_BROWSE",V.channels="LATENCY_ACTION_CHANNELS",V.creator_channel_dashboard="LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD",
V["channel.analytics"]="LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS",V["channel.comments"]="LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS",V["channel.content"]="LATENCY_ACTION_CREATOR_POST_LIST",V["channel.copyright"]="LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT",V["channel.editing"]="LATENCY_ACTION_CREATOR_CHANNEL_EDITING",V["channel.monetization"]="LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION",V["channel.music"]="LATENCY_ACTION_CREATOR_CHANNEL_MUSIC",V["channel.translations"]="LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS",
V["channel.videos"]="LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS",V["channel.live_streaming"]="LATENCY_ACTION_CREATOR_LIVE_STREAMING",V.chips="LATENCY_ACTION_CHIPS",V["dialog.copyright_strikes"]="LATENCY_ACTION_CREATOR_DIALOG_COPYRIGHT_STRIKES",V["dialog.uploads"]="LATENCY_ACTION_CREATOR_DIALOG_UPLOADS",V.direct_playback="LATENCY_ACTION_DIRECT_PLAYBACK",V.embed="LATENCY_ACTION_EMBED",V.entity_key_serialization_perf="LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF",V.entity_key_deserialization_perf="LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF",
V.home="LATENCY_ACTION_HOME",V.library="LATENCY_ACTION_LIBRARY",V.live="LATENCY_ACTION_LIVE",V.live_pagination="LATENCY_ACTION_LIVE_PAGINATION",V.onboarding="LATENCY_ACTION_KIDS_ONBOARDING",V.parent_profile_settings="LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS",V.parent_tools_collection="LATENCY_ACTION_PARENT_TOOLS_COLLECTION",V.parent_tools_dashboard="LATENCY_ACTION_PARENT_TOOLS_DASHBOARD",V.player_att="LATENCY_ACTION_PLAYER_ATTESTATION",V["post.comments"]="LATENCY_ACTION_CREATOR_POST_COMMENTS",
V["post.edit"]="LATENCY_ACTION_CREATOR_POST_EDIT",V.prebuffer="LATENCY_ACTION_PREBUFFER",V.prefetch="LATENCY_ACTION_PREFETCH",V.profile_settings="LATENCY_ACTION_KIDS_PROFILE_SETTINGS",V.profile_switcher="LATENCY_ACTION_LOGIN",V.reel_watch="LATENCY_ACTION_REEL_WATCH",V.results="LATENCY_ACTION_RESULTS",V.search_ui="LATENCY_ACTION_SEARCH_UI",V.search_suggest="LATENCY_ACTION_SUGGEST",V.search_zero_state="LATENCY_ACTION_SEARCH_ZERO_STATE",V.secret_code="LATENCY_ACTION_KIDS_SECRET_CODE",V.seek="LATENCY_ACTION_PLAYER_SEEK",
V.settings="LATENCY_ACTION_SETTINGS",V.tenx="LATENCY_ACTION_TENX",V.video_to_ad="LATENCY_ACTION_VIDEO_TO_AD",V.watch="LATENCY_ACTION_WATCH",V.watch_it_again="LATENCY_ACTION_KIDS_WATCH_IT_AGAIN",V["watch,watch7"]="LATENCY_ACTION_WATCH",V["watch,watch7_html5"]="LATENCY_ACTION_WATCH",V["watch,watch7ad"]="LATENCY_ACTION_WATCH",V["watch,watch7ad_html5"]="LATENCY_ACTION_WATCH",V.wn_comments="LATENCY_ACTION_LOAD_COMMENTS",V.ww_rqs="LATENCY_ACTION_WHO_IS_WATCHING",V["video.analytics"]="LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS",
V["video.comments"]="LATENCY_ACTION_CREATOR_VIDEO_COMMENTS",V["video.edit"]="LATENCY_ACTION_CREATOR_VIDEO_EDIT",V["video.translations"]="LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS",V["video.video_editor"]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR",V["video.video_editor_async"]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC",V["video.monetization"]="LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION",V.voice_assistant="LATENCY_ACTION_VOICE_ASSISTANT",V.cast_load_by_entity_to_watch="LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH",
V.networkless_performance="LATENCY_ACTION_NETWORKLESS_PERFORMANCE",V),W={},Bm=(W.ad_allowed="adTypesAllowed",W.yt_abt="adBreakType",W.ad_cpn="adClientPlaybackNonce",W.ad_docid="adVideoId",W.yt_ad_an="adNetworks",W.ad_at="adType",W.aida="appInstallDataAgeMs",W.browse_id="browseId",W.p="httpProtocol",W.t="transportProtocol",W.cpn="clientPlaybackNonce",W.ccs="creatorInfo.creatorCanaryState",W.csn="clientScreenNonce",W.docid="videoId",W.GetHome_rid="requestIds",W.GetSearch_rid="requestIds",W.GetPlayer_rid=
"requestIds",W.GetWatchNext_rid="requestIds",W.GetBrowse_rid="requestIds",W.GetLibrary_rid="requestIds",W.is_continuation="isContinuation",W.is_nav="isNavigation",W.b_p="kabukiInfo.browseParams",W.is_prefetch="kabukiInfo.isPrefetch",W.is_secondary_nav="kabukiInfo.isSecondaryNav",W.prev_browse_id="kabukiInfo.prevBrowseId",W.query_source="kabukiInfo.querySource",W.voz_type="kabukiInfo.vozType",W.yt_lt="loadType",W.mver="creatorInfo.measurementVersion",W.yt_ad="isMonetized",W.nr="webInfo.navigationReason",
W.nrsu="navigationRequestedSameUrl",W.ncnp="webInfo.nonPreloadedNodeCount",W.pnt="performanceNavigationTiming",W.prt="playbackRequiresTap",W.plt="playerInfo.playbackType",W.pis="playerInfo.playerInitializedState",W.paused="playerInfo.isPausedOnLoad",W.yt_pt="playerType",W.fmt="playerInfo.itag",W.yt_pl="watchInfo.isPlaylist",W.yt_pre="playerInfo.preloadType",W.yt_ad_pr="prerollAllowed",W.pa="previousAction",W.yt_red="isRedSubscriber",W.rce="mwebInfo.responseContentEncoding",W.scrh="screenHeight",W.scrw=
"screenWidth",W.st="serverTimeMs",W.ssdm="shellStartupDurationMs",W.br_trs="tvInfo.bedrockTriggerState",W.kebqat="kabukiInfo.earlyBrowseRequestInfo.abandonmentType",W.kebqa="kabukiInfo.earlyBrowseRequestInfo.adopted",W.label="tvInfo.label",W.is_mdx="tvInfo.isMdx",W.preloaded="tvInfo.isPreloaded",W.upg_player_vis="playerInfo.visibilityState",W.query="unpluggedInfo.query",W.upg_chip_ids_string="unpluggedInfo.upgChipIdsString",W.yt_vst="videoStreamType",W.vph="viewportHeight",W.vpw="viewportWidth",W.yt_vis=
"isVisible",W.rcl="mwebInfo.responseContentLength",W.GetSettings_rid="requestIds",W.GetTrending_rid="requestIds",W.GetMusicSearchSuggestions_rid="requestIds",W.REQUEST_ID="requestIds",W),Cm="isContinuation isNavigation kabukiInfo.earlyBrowseRequestInfo.adopted kabukiInfo.isPrefetch kabukiInfo.isSecondaryNav isMonetized navigationRequestedSameUrl performanceNavigationTiming playerInfo.isPausedOnLoad prerollAllowed isRedSubscriber tvInfo.isMdx tvInfo.isPreloaded isVisible watchInfo.isPlaylist playbackRequiresTap".split(" "),
Dm={},Em=(Dm.ccs="CANARY_STATE_",Dm.mver="MEASUREMENT_VERSION_",Dm.pis="PLAYER_INITIALIZED_STATE_",Dm.yt_pt="LATENCY_PLAYER_",Dm.pa="LATENCY_ACTION_",Dm.yt_vst="VIDEO_STREAM_TYPE_",Dm),Fm="all_vc ap aq c cver cbrand cmodel cplatform ctheme ei l_an l_mm plid srt yt_fss yt_li vpst vpni2 vpil2 icrc icrt pa GetAccountOverview_rid GetHistory_rid cmt d_vpct d_vpnfi d_vpni nsru pc pfa pfeh pftr pnc prerender psc rc start tcrt tcrc ssr vpr vps yt_abt yt_fn yt_fs yt_pft yt_pre yt_pt yt_pvis ytu_pvis yt_ref yt_sts tds".split(" ");
function Gm(a){return!!E("FORCE_CSI_ON_GEL",!1)||O("csi_on_gel")||O("enable_csi_on_gel")||!!pm(a).useGel}
function Hm(a,b,c){var d=Im(c);d.gelTicks&&(d.gelTicks["tick_"+a]=!0);c||b||P();return Gm(c)?(vm(c||"").tick[a]=b||P(),d=rm(c),"_start"===a?(a=ym(),zm(a,"baseline_"+d)||Ok("latencyActionBaselined",{clientActionNonce:d},{timestamp:b})):ym().tick(a,d,b),sm(c),!0):!1}
function Jm(a,b,c){c=Im(c);if(c.gelInfos)c.gelInfos["info_"+a]=!0;else{var d={};c.gelInfos=(d["info_"+a]=!0,d)}if(a.match("_rid")){var e=a.split("_rid")[0];a="REQUEST_ID"}if(a in Bm){c=Bm[a];0<=Va(Cm,c)&&(b=!!b);a in Em&&"string"===typeof b&&(b=Em[a]+b.toUpperCase());a=b;b=c.split(".");for(var f=d={},g=0;g<b.length-1;g++){var h=b[g];f[h]={};f=f[h]}f[b[b.length-1]]="requestIds"===c?[{id:a,endpoint:e}]:a;return Yl({},d)}0<=Va(Fm,a)||gl(new wi("Unknown label logged with GEL CSI",a))}
function Im(a){a=pm(a);if(a.gel){var b=a.gel;b.gelInfos||(b.gelInfos={});b.gelTicks||(b.gelTicks={})}else a.gel={gelTicks:{},gelInfos:{}};return a.gel}
function Km(a){a=Im(a);a.gelInfos||(a.gelInfos={});return a.gelInfos}
;function Lm(a,b,c){null!==b&&(qm(c)[a]=b,Gm(c)?(a=Jm(a,b,c))&&Gm(c)&&(b=vm(c||""),Yl(b.info,a),Yl(Km(c),a),c=rm(c),ym().info(a,c)):vm(c||"").info[a]=b)}
function Z(a,b,c){var d=lm(c);if(!b&&"_"!==a[0]){var e=a;U.mark&&(0==e.lastIndexOf("mark_",0)||(e="mark_"+e),c&&(e+=" ("+c+")"),U.mark(e))}e=b||P();d[a]=e;Hm(a,b,c)||(Mm(c),vm(c||"").tick[a]=b||P());return d[a]}
function Nm(a,b){if(Gm(void 0)){var c=Im(void 0);if(c.gelSpans)c.gelSpans[a]=!0;else{var d={};c.gelSpans=(d[a]=!0,d)}a={spanName:a,spanLengthUsec:String(Math.round(1E3*b))};vm("").span[String(a.spanName)]=a;b=Im(void 0);b.gelSpans||(b.gelSpans={});Yl(b.gelSpans,a);b=rm(void 0);ym().span(a,b)}}
function Om(){var a=rm(void 0);requestAnimationFrame(function(){setTimeout(function(){a===rm(void 0)&&Z("ol",void 0,void 0)},0)})}
function Mm(a){if(!B("yt.timing."+(a||"")+"pingSent_")){var b=E((a||"")+"TIMING_ACTION",void 0),c=lm(a);if(b=!!B("ytglobal.timing"+(a||"")+"ready_")&&b)b="_start"in lm(void 0);if(b&&km(a))if(sm(a),a)Pm(a);else{b=!0;var d=E("TIMING_WAIT",[]);if(d.length)for(var e=0,f=d.length;e<f;++e)if(!(d[e]in c)){b=!1;break}b&&Pm(a)}}}
function Qm(){var a=document;if("visibilityState"in a)a=a.visibilityState;else{var b=Rf+"VisibilityState";a=b in a?a[b]:void 0}switch(a){case "hidden":return 0;case "visible":return 1;case "prerender":return 2;case "unloaded":return 3;default:return-1}}
function Pm(a){if(!Gm(a)){var b=lm(a),c=qm(a),d=b._start,e=E("CSI_SERVICE_NAME","youtube"),f={v:2,s:e,action:E((a||"")+"TIMING_ACTION",void 0)},g=c.srt;void 0!==b.srt&&delete c.srt;b.aft=km(a);var h=lm(a),k=h.pbr,l=h.vc;h=h.pbs;k&&l&&h&&k<l&&l<h&&qm(a).yt_pvis&&"youtube"===e&&(Lm("yt_lt","hot_bg",a),e=b.vc,k=b.pbs,delete b.aft,c.aft=Math.round(k-e));for(var n in c)"_"!==n.charAt(0)&&(f[n]=c[n]);b.ps=P();n={};e=[];for(var p in b)"_"!==p.charAt(0)&&(k=Math.round(b[p]-d),n[p]=k,e.push(p+"."+k));f.rt=
e.join(",");b=!!c.ap;c="";for(var r in f)f.hasOwnProperty(r)&&(c+="&"+r+"="+f[r]);f="/csi_204?"+c.substring(1);window.navigator&&window.navigator.sendBeacon&&(b||O("always_send_csi_204_with_beacon"))?$g(f):Xg(f);z("yt.timing."+(a||"")+"pingSent_",!0,void 0);hi(fm,new dm(n.aft+(Number(g)||0),a))}}
function Rm(a,b){a=document.querySelector(a);if(!a)return!1;var c="",d=a.nodeName;"SCRIPT"===d?(c=a.src,c||(c=a.getAttribute("data-timing-href"))&&(c=window.location.protocol+c)):"LINK"===d&&(c=a.href);Ub()&&a.setAttribute("nonce",Ub());return c?(a=U.getEntriesByName(c))&&a[0]&&(a=a[0],c=om(),Z("rsf_"+b,c+Math.round(a.fetchStart)),Z("rse_"+b,c+Math.round(a.responseEnd)),void 0!==a.transferSize&&(b=qm(void 0),c=Km(void 0),"rc"in b||"rc"in c||Lm("rc",""),0===a.transferSize))?!0:!1:!1}
function Sm(){var a=window.location.protocol,b=U.getEntriesByType("resource");b=Wa(b,function(c){return 0===c.name.indexOf(a+"//fonts.gstatic.com/s/")});
(b=Ya(b,function(c,d){return d.duration>c.duration?d:c},{duration:0}))&&0<b.startTime&&0<b.responseEnd&&(Z("wffs",nm(b.startTime)),Z("wffe",nm(b.responseEnd)))}
var Tm=window;Tm.ytcsi&&(Tm.ytcsi.info=Lm,Tm.ytcsi.tick=Z);function Um(){this.l=[];this.o=[];this.h=[];this.i=new Set;this.m=new Map}
function Vm(a,b,c){c=void 0===c?0:c;b.then(function(d){var e,f;a.i.has(c)&&a.j&&a.j();var g=Ml(c),h=Kl(c);g&&h&&(d.csn=g,(null===(e=d.response)||void 0===e?0:e.trackingParams)&&Vl(a.client,g,h,[Gl(d.response.trackingParams)]),(null===(f=d.playerResponse)||void 0===f?0:f.trackingParams)&&Vl(a.client,g,h,[Gl(d.playerResponse.trackingParams)]))})}
function Wm(a,b,c,d){d=void 0===d?0:d;if(a.i.has(d))a.l.push([b,c]);else{var e=Ml(d);c=c||Kl(d);e&&c&&Vl(a.client,e,c,[b])}}
Um.prototype.clickCommand=function(a,b,c){c=Ml(void 0===c?0:c);if(!a.clickTrackingParams||!c)return!1;var d=this.client;var e="INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK";a={csn:c,ve:Gl(a.clickTrackingParams).getAsJson(),gestureType:e};b&&(a.clientData=b);b={F:Ol(c),S:c};"UNDEFINED_CSN"==c?Wl("visualElementGestured",a,b):d?Ih("visualElementGestured",a,d,b):Ok("visualElementGestured",a,b);return!0};
function Xm(a,b,c){c=void 0===c?{}:c;a.i.add(c.layer||0);a.j=function(){Ym(a,b,c);var f=Kl(c.layer);if(f){for(var g=u(a.l),h=g.next();!h.done;h=g.next())h=h.value,Wm(a,h[0],h[1]||f,c.layer);f=u(a.o);for(g=f.next();!g.done;g=f.next()){var k=g.value;g=void 0;g=void 0===g?0:g;h=Ml(g);var l=k[0]||Kl(g);h&&l&&(g=a.client,k=k[1],k={csn:h,ve:l.getAsJson(),clientData:k},l={F:Ol(h),S:h},"UNDEFINED_CSN"==h?Wl("visualElementStateChanged",k,l):g?Ih("visualElementStateChanged",k,g,l):Ok("visualElementStateChanged",
k,l))}}};
Ml(c.layer)||a.j();if(c.Ga)for(var d=u(c.Ga),e=d.next();!e.done;e=d.next())Vm(a,e.value,c.layer);else hl(Error("Delayed screen needs a data promise."))}
function Ym(a,b,c){c=void 0===c?{}:c;c.layer||(c.layer=0);var d=void 0!==c.jb?c.jb:c.layer;var e=Ml(d);d=Kl(d);var f;d&&(void 0!==c.parentCsn?f={clientScreenNonce:c.parentCsn,visualElement:d}:e&&"UNDEFINED_CSN"!==e&&(f={clientScreenNonce:e,visualElement:d}));var g,h=E("EVENT_ID");"UNDEFINED_CSN"===e&&h&&(g={servletData:{serializedServletEventId:h}});try{var k=a.client;h=f;var l=c.Fa,n=c.F,p=Tl(),r={csn:p,pageVe:(new Fl({veType:b,youtubeData:g})).getAsJson()};h&&h.visualElement?r.implicitGesture={parentCsn:h.clientScreenNonce,
gesturedVe:h.visualElement.getAsJson()}:h&&gl(new wi("newScreen() parent element does not have a VE - rootVe",b));l&&(r.cloneCsn=l);l={F:n,S:p};k?Ih("screenCreated",r,k,l):Ok("screenCreated",r,l);hi(ki,new Ql(p));var q=p}catch(A){il(A,{nl:b,rootVe:d,parentVisualElement:void 0,il:e,ml:f,Fa:c.Fa});hl(A);return}Pl(q,b,c.layer,c.F);if((b=e&&"UNDEFINED_CSN"!==e&&d)&&!(b=O("screen_manager_skip_hide_killswitch"))){a:{b=u(Object.values(El));for(f=b.next();!f.done;f=b.next())if(Ml(f.value)==e){b=!0;break a}b=
!1}b=!b}b&&(b=a.client,f=!0,k=(f=void 0===f?!1:f)?16:8,d={csn:e,ve:d.getAsJson(),eventType:k},f={F:Ol(e),S:e,Ua:f},"UNDEFINED_CSN"==e?Wl("visualElementHidden",d,f):b?Ih("visualElementHidden",d,b,f):Ok("visualElementHidden",d,f));a.h[a.h.length-1]&&!a.h[a.h.length-1].csn&&(a.h[a.h.length-1].csn=q||"");Lm("csn",q);mf(Xl).clear();d=Kl(c.layer);e&&"UNDEFINED_CSN"!==e&&d&&(O("web_mark_root_visible")||O("music_web_mark_root_visible"))&&(e=q,q=O("use_default_events_client")?void 0:Nk,b={csn:e,ve:d.getAsJson(),
eventType:1},f={F:Ol(e),S:e},"UNDEFINED_CSN"==e?Wl("visualElementShown",b,f):q?Ih("visualElementShown",b,q,f):Ok("visualElementShown",b,f));a.i.delete(c.layer||0);a.j=void 0;e=u(a.m);for(q=e.next();!q.done;q=e.next())q=u(q.value),b=q.next().value,q.next().value.has(c.layer)&&d&&Wm(a,b,d,c.layer)}
;function Zm(a){a&&(a.dataset?a.dataset[$m("loaded")]="true":a.setAttribute("data-loaded","true"))}
function an(a,b){return a?a.dataset?a.dataset[$m(b)]:a.getAttribute("data-"+b):null}
var bn={};function $m(a){return bn[a]||(bn[a]=String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()}))}
;var cn=/\.vflset|-vfl[a-zA-Z0-9_+=-]+/,dn=/-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/;function en(a,b,c){c=void 0===c?null:c;if(window.spf&&spf.script){c="";if(a){var d=a.indexOf("jsbin/"),e=a.lastIndexOf(".js"),f=d+6;-1<d&&-1<e&&e>f&&(c=a.substring(f,e),c=c.replace(cn,""),c=c.replace(dn,""),c=c.replace("debug-",""),c=c.replace("tracing-",""))}spf.script.load(a,c,b)}else fn(a,b,c)}
function fn(a,b,c){c=void 0===c?null:c;var d=gn(a),e=document.getElementById(d),f=e&&an(e,"loaded"),g=e&&!f;f?b&&b():(b&&(f=eh(d,b),b=""+Ia(b),hn[b]=f),g||(e=jn(a,d,function(){an(e,"loaded")||(Zm(e),hh(d),ag(Oa(ih,d),0))},c)))}
function jn(a,b,c,d){d=void 0===d?null:d;var e=Sc(document,"SCRIPT");e.id=b;e.onload=function(){c&&setTimeout(c,0)};
e.onreadystatechange=function(){switch(e.readyState){case "loaded":case "complete":e.onload()}};
d&&e.setAttribute("nonce",d);Kc(e,cd(a));a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(e,a.firstChild);return e}
function kn(a){a=gn(a);var b=document.getElementById(a);b&&(ih(a),b.parentNode.removeChild(b))}
function ln(a,b){a&&b&&(a=""+Ia(b),(a=hn[a])&&gh(a))}
function gn(a){var b=document.createElement("a");Rb(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+Xb(a)}
var hn={};var mn=[],nn=!1;function on(){if((!O("condition_ad_status_fetch_on_consent_cookie_html5_clients")||rl())&&"1"!=hb()){var a=function(){nn=!0;"google_ad_status"in window?N("DCLKSTAT",1):N("DCLKSTAT",2)};
try{en("//static.doubleclick.net/instream/ad_status.js",a)}catch(b){}mn.push(gg(function(){if(!(nn||"google_ad_status"in window)){try{ln("//static.doubleclick.net/instream/ad_status.js",a)}catch(b){}nn=!0;N("DCLKSTAT",3)}},5E3))}}
function pn(){var a=Number(E("DCLKSTAT",0));return isNaN(a)?0:a}
;function qn(){this.i=!1;this.h=null}
qn.prototype.initialize=function(a,b,c,d){d=void 0===d?!1:d;var e,f;if(a.program){var g=null!==(e=a.interpreterScript)&&void 0!==e?e:null,h=null!==(f=a.interpreterUrl)&&void 0!==f?f:null;if(a.interpreterSafeScript){g=a.interpreterSafeScript.privateDoNotAccessOrElseSafeScriptWrappedValue||"";var k=ob();g=k?k.createScript(g):g;g=(new qb(g)).toString()}a.interpreterSafeUrl&&(h=ub(a.interpreterSafeUrl.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue||"").toString());rn(this,g,h,a.program,b,c,d)}else gl(Error("Cannot initialize botguard without program"))};
function rn(a,b,c,d,e,f,g){g=void 0===g?!1:g;c?(a.i=!0,en(c,function(){a.i=!1;var h=0<=c.indexOf("/th/");(h?window.trayride:window.botguard)?sn(a,d,!!g,h,e):(kn(c),gl(new wi("Unable to load Botguard","from "+c)))},f)):b&&(f=Sc(document,"SCRIPT"),f.textContent=b,f.nonce=Ub(),document.head.appendChild(f),document.head.removeChild(f),((b=b.includes("trayride"))?window.trayride:window.botguard)?sn(a,d,!!g,b,e):gl(Error("Unable to load Botguard from JS")))}
function sn(a,b,c,d,e){var f,g;if(d=d?null===(f=window.trayride)||void 0===f?void 0:f.ad:null===(g=window.botguard)||void 0===g?void 0:g.bg)if(c)try{tn(a,new d(b,e?function(){return e(b)}:Ea))}catch(h){h instanceof Error&&gl(h)}else{try{tn(a,new d(b))}catch(h){h instanceof Error&&gl(h)}e&&e(b)}else gl(Error("Failed to finish initializing VM"))}
qn.prototype.invoke=function(a){a=void 0===a?{}:a;return this.h?this.h.hasOwnProperty("hot")?this.h.hot(void 0,void 0,a):this.h.invoke(void 0,void 0,a):null};
qn.prototype.dispose=function(){this.h=null};
function tn(a,b){a.h=b}
;var un=new qn;function vn(){return!!un.h}
function wn(a){a=void 0===a?{}:a;return un.invoke(a)}
;var xn=window,yn=/[A-Za-z]+\/[0-9.]+/g;function zn(a,b){if(a.replace(yn,"")!==b.replace(yn,""))return!1;a=a.match(yn);b=b.match(yn);if(a.length!==b.length)return!1;for(var c=0;c<a.length;c++){var d=a[c],e=b[c];if(!d.startsWith(e)&&!e.startsWith(d))return!1}return!0}
function An(){var a=xn.uaChPolyfill.state;if(0===a.type)Ok("clientHintsPolyfillEvent",{clientHintsSupported:!1});else{var b=navigator.userAgent,c=void 0!==a.syntheticUa&&zn(a.syntheticUa,b);Ok("clientHintsPolyfillEvent",{clientHintsSupported:!0,uaAccessedBeforePolyfill:a.didAccessUaBeforePolyfillAvailable,syntheticUaMatches:c});c||(b={syntheticUa:a.syntheticUa,ua:b},b.brand=a.data.brands.map(function(d){return'"'+d.brand+'"; v="'+d.version+'"'}),b.mobileness=a.data.mobile,a=a.data.values,a.architecture&&
(b.platformArchitecture=a.architecture),a.model&&(b.model=a.model),a.platform&&(b.platformBrand=a.platform),a.platformVersion&&(b.platformVersion=a.platformVersion),a.uaFullVersion&&(b.fullVersion=a.uaFullVersion),Ok("clientHintsPolyfillDiagnostics",b))}}
var Bn=!1;function Cn(){var a;1===(null===(a=xn.uaChPolyfill)||void 0===a?void 0:a.state.type)?Bn||(xn.uaChPolyfill.onReady=Cn,Bn=!0):xn.uaChPolyfill&&An()}
;function Dn(a,b,c){L.call(this);var d=this;c=c||E("POST_MESSAGE_ORIGIN",void 0)||window.document.location.protocol+"//"+window.document.location.hostname;this.j=b||null;this.C="*";this.l=c;this.sessionId=null;this.channel="widget";this.G=!!a;this.A=function(e){a:if(!("*"!=d.l&&e.origin!=d.l||d.j&&e.source!=d.j||"string"!==typeof e.data)){try{var f=JSON.parse(e.data)}catch(g){break a}if(!(null==f||d.G&&(d.sessionId&&d.sessionId!=f.id||d.channel&&d.channel!=f.channel))&&f)switch(f.event){case "listening":"null"!=
e.origin&&(d.l=d.C=e.origin);d.j=e.source;d.sessionId=f.id;d.i&&(d.i(),d.i=null);break;case "command":d.m&&(!d.u||0<=Va(d.u,f.func))&&d.m(f.func,f.args,e.origin)}}};
this.u=this.i=this.m=null;window.addEventListener("message",this.A)}
v(Dn,L);Dn.prototype.sendMessage=function(a,b){if(b=b||this.j){this.sessionId&&(a.id=this.sessionId);this.channel&&(a.channel=this.channel);try{var c=JSON.stringify(a);b.postMessage(c,this.C)}catch(d){Lf(d)}}};
Dn.prototype.D=function(){window.removeEventListener("message",this.A);L.prototype.D.call(this)};function En(){this.i=[];this.isReady=!1;this.j={};var a=this.h=new Dn(!!E("WIDGET_ID_ENFORCE")),b=this.lb.bind(this);a.m=b;a.u=null;this.h.channel="widget";if(a=E("WIDGET_ID"))this.h.sessionId=a}
m=En.prototype;m.lb=function(a,b,c){"addEventListener"===a&&b?(a=b[0],this.j[a]||"onReady"===a||(this.addEventListener(a,Fn(this,a)),this.j[a]=!0)):this.Ba(a,b,c)};
m.Ba=function(){};
function Fn(a,b){return function(c){return a.sendMessage(b,c)}}
m.addEventListener=function(){};
m.Va=function(){this.isReady=!0;this.sendMessage("initialDelivery",this.ta());this.sendMessage("onReady");D(this.i,this.Ma,this);this.i=[]};
m.ta=function(){return null};
function Gn(a,b){a.sendMessage("infoDelivery",b)}
m.Ma=function(a){this.isReady?this.h.sendMessage(a):this.i.push(a)};
m.sendMessage=function(a,b){this.Ma({event:a,info:void 0===b?null:b})};
m.dispose=function(){this.h=null};function Hn(a){return(0===a.search("cue")||0===a.search("load"))&&"loadModule"!==a}
function In(a,b,c){if("string"===typeof a)return{videoId:a,startSeconds:b,suggestedQuality:c};b=["endSeconds","startSeconds","mediaContentUrl","suggestedQuality","videoId"];c={};for(var d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}
function Jn(a,b,c,d){if(Ha(a)&&!Array.isArray(a)){b="playlist list listType index startSeconds suggestedQuality".split(" ");c={};for(d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}b={index:b,startSeconds:c,suggestedQuality:d};"string"===typeof a&&16===a.length?b.list="PL"+a:b.playlist=a;return b}
;function Kn(a){En.call(this);this.listeners=[];this.api=a;this.addEventListener("onReady",this.onReady.bind(this));this.addEventListener("onVideoProgress",this.sb.bind(this));this.addEventListener("onVolumeChange",this.tb.bind(this));this.addEventListener("onApiChange",this.nb.bind(this));this.addEventListener("onPlaybackQualityChange",this.pb.bind(this));this.addEventListener("onPlaybackRateChange",this.qb.bind(this));this.addEventListener("onStateChange",this.rb.bind(this));this.addEventListener("onWebglSettingsChanged",
this.ub.bind(this))}
v(Kn,En);m=Kn.prototype;
m.Ba=function(a,b,c){if(this.api.isExternalMethodAvailable(a,c)){b=b||[];if(0<b.length&&Hn(a)){var d=b;if(Ha(d[0])&&!Array.isArray(d[0]))var e=d[0];else switch(e={},a){case "loadVideoById":case "cueVideoById":e=In(d[0],void 0!==d[1]?Number(d[1]):void 0,d[2]);break;case "loadVideoByUrl":case "cueVideoByUrl":e=d[0];"string"===typeof e&&(e={mediaContentUrl:e,startSeconds:void 0!==d[1]?Number(d[1]):void 0,suggestedQuality:d[2]});b:{if((d=e.mediaContentUrl)&&(d=/\/([ve]|embed)\/([^#?]+)/.exec(d))&&d[2]){d=
d[2];break b}d=null}e.videoId=d;e=In(e);break;case "loadPlaylist":case "cuePlaylist":e=Jn(d[0],d[1],d[2],d[3])}b.length=1;b[0]=e}this.api.handleExternalCall(a,b,c);Hn(a)&&Gn(this,this.ta())}};
m.onReady=function(){var a=this.Va.bind(this);this.h.i=a};
m.addEventListener=function(a,b){this.listeners.push({eventType:a,listener:b});this.api.addEventListener(a,b)};
m.ta=function(){if(!this.api)return null;var a=this.api.getApiInterface();$a(a,"getVideoData");for(var b={apiInterface:a},c=0,d=a.length;c<d;c++){var e=a[c];if(0===e.search("get")||0===e.search("is")){var f=0;0===e.search("get")?f=3:0===e.search("is")&&(f=2);f=e.charAt(f).toLowerCase()+e.substr(f+1);try{var g=this.api[e]();b[f]=g}catch(h){}}}b.videoData=this.api.getVideoData();b.currentTimeLastUpdated_=Date.now()/1E3;return b};
m.rb=function(a){a={playerState:a,currentTime:this.api.getCurrentTime(),duration:this.api.getDuration(),videoData:this.api.getVideoData(),videoStartBytes:0,videoBytesTotal:this.api.getVideoBytesTotal(),videoLoadedFraction:this.api.getVideoLoadedFraction(),playbackQuality:this.api.getPlaybackQuality(),availableQualityLevels:this.api.getAvailableQualityLevels(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.api.getPlaybackRate(),mediaReferenceTime:this.api.getMediaReferenceTime()};this.api.getVideoUrl&&
(a.videoUrl=this.api.getVideoUrl());this.api.getVideoContentRect&&(a.videoContentRect=this.api.getVideoContentRect());this.api.getProgressState&&(a.progressState=this.api.getProgressState());this.api.getPlaylist&&(a.playlist=this.api.getPlaylist());this.api.getPlaylistIndex&&(a.playlistIndex=this.api.getPlaylistIndex());this.api.getStoryboardFormat&&(a.storyboardFormat=this.api.getStoryboardFormat());Gn(this,a)};
m.pb=function(a){Gn(this,{playbackQuality:a})};
m.qb=function(a){Gn(this,{playbackRate:a})};
m.nb=function(){for(var a=this.api.getOptions(),b={namespaces:a},c=0,d=a.length;c<d;c++){var e=a[c],f=this.api.getOptions(e);b[e]={options:f};for(var g=0,h=f.length;g<h;g++){var k=f[g],l=this.api.getOption(e,k);b[e][k]=l}}this.sendMessage("apiInfoDelivery",b)};
m.tb=function(){Gn(this,{muted:this.api.isMuted(),volume:this.api.getVolume()})};
m.sb=function(a){a={currentTime:a,videoBytesLoaded:this.api.getVideoBytesLoaded(),videoLoadedFraction:this.api.getVideoLoadedFraction(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.api.getPlaybackRate(),mediaReferenceTime:this.api.getMediaReferenceTime()};this.api.getProgressState&&(a.progressState=this.api.getProgressState());Gn(this,a)};
m.ub=function(){var a={sphericalProperties:this.api.getSphericalProperties()};Gn(this,a)};
m.dispose=function(){En.prototype.dispose.call(this);for(var a=0;a<this.listeners.length;a++){var b=this.listeners[a];this.api.removeEventListener(b.eventType,b.listener)}this.listeners=[]};function Ln(a){L.call(this);this.i={};this.started=!1;this.connection=a;this.connection.subscribe("command",this.La,this)}
v(Ln,L);m=Ln.prototype;m.start=function(){this.started||this.h||(this.started=!0,this.connection.X("RECEIVING"))};
m.X=function(a,b){this.started&&!this.h&&this.connection.X(a,b)};
m.La=function(a,b,c){if(this.started&&!this.h){var d=b||{};switch(a){case "addEventListener":"string"===typeof d.event&&this.addListener(d.event);break;case "removeEventListener":"string"===typeof d.event&&this.removeListener(d.event);break;default:this.api.isReady()&&this.api.isExternalMethodAvailable(a,c||null)&&(b=Mn(a,b||{}),c=this.api.handleExternalCall(a,b,c||null),(c=Nn(a,c))&&this.X(a,c))}}};
m.addListener=function(a){if(!(a in this.i)){var b=this.ob.bind(this,a);this.i[a]=b;this.addEventListener(a,b)}};
m.ob=function(a,b){this.started&&!this.h&&this.connection.X(a,this.sa(a,b))};
m.sa=function(a,b){if(null!=b)return{value:b}};
m.removeListener=function(a){a in this.i&&(this.removeEventListener(a,this.i[a]),delete this.i[a])};
m.D=function(){var a=this.connection;a.h||kf(a.i,"command",this.La,this);this.connection=null;for(var b in this.i)this.i.hasOwnProperty(b)&&this.removeListener(b);L.prototype.D.call(this)};function On(a,b){Ln.call(this,b);this.api=a;this.start()}
v(On,Ln);On.prototype.addEventListener=function(a,b){this.api.addEventListener(a,b)};
On.prototype.removeEventListener=function(a,b){this.api.removeEventListener(a,b)};
function Mn(a,b){switch(a){case "loadVideoById":return a=In(b),[a];case "cueVideoById":return a=In(b),[a];case "loadVideoByPlayerVars":return[b];case "cueVideoByPlayerVars":return[b];case "loadPlaylist":return a=Jn(b),[a];case "cuePlaylist":return a=Jn(b),[a];case "seekTo":return[b.seconds,b.allowSeekAhead];case "playVideoAt":return[b.index];case "setVolume":return[b.volume];case "setPlaybackQuality":return[b.suggestedQuality];case "setPlaybackRate":return[b.suggestedRate];case "setLoop":return[b.loopPlaylists];
case "setShuffle":return[b.shufflePlaylist];case "getOptions":return[b.module];case "getOption":return[b.module,b.option];case "setOption":return[b.module,b.option,b.value];case "handleGlobalKeyDown":return[b.keyCode,b.shiftKey,b.ctrlKey,b.altKey,b.metaKey,b.key,b.code]}return[]}
function Nn(a,b){switch(a){case "isMuted":return{muted:b};case "getVolume":return{volume:b};case "getPlaybackRate":return{playbackRate:b};case "getAvailablePlaybackRates":return{availablePlaybackRates:b};case "getVideoLoadedFraction":return{videoLoadedFraction:b};case "getPlayerState":return{playerState:b};case "getCurrentTime":return{currentTime:b};case "getPlaybackQuality":return{playbackQuality:b};case "getAvailableQualityLevels":return{availableQualityLevels:b};case "getDuration":return{duration:b};
case "getVideoUrl":return{videoUrl:b};case "getVideoEmbedCode":return{videoEmbedCode:b};case "getPlaylist":return{playlist:b};case "getPlaylistIndex":return{playlistIndex:b};case "getOptions":return{options:b};case "getOption":return{option:b}}}
On.prototype.sa=function(a,b){switch(a){case "onReady":return;case "onStateChange":return{playerState:b};case "onPlaybackQualityChange":return{playbackQuality:b};case "onPlaybackRateChange":return{playbackRate:b};case "onError":return{errorCode:b}}return Ln.prototype.sa.call(this,a,b)};
On.prototype.D=function(){Ln.prototype.D.call(this);delete this.api};function Pn(a){a=void 0===a?!1:a;L.call(this);this.i=new M(a);Td(this,Oa(Rd,this.i))}
C(Pn,L);Pn.prototype.subscribe=function(a,b,c){return this.h?0:this.i.subscribe(a,b,c)};
Pn.prototype.l=function(a,b){this.h||this.i.U.apply(this.i,arguments)};function Qn(a,b,c){Pn.call(this);this.j=a;this.destination=b;this.id=c}
v(Qn,Pn);Qn.prototype.X=function(a,b){this.h||this.j.X(this.destination,this.id,a,b)};
Qn.prototype.D=function(){this.destination=this.j=null;Pn.prototype.D.call(this)};function Rn(a,b,c){L.call(this);this.destination=a;this.origin=c;this.i=Yf(window,"message",this.j.bind(this));this.connection=new Qn(this,a,b);Td(this,Oa(Rd,this.connection))}
v(Rn,L);Rn.prototype.X=function(a,b,c,d){this.h||a!==this.destination||(a={id:b,command:c},d&&(a.data=d),this.destination.postMessage(Le(a),this.origin))};
Rn.prototype.j=function(a){var b;if(b=!this.h)if(b=a.origin===this.origin)a:{b=this.destination;do{b:{var c=a.source;do{if(c===b){c=!0;break b}if(c===c.parent)break;c=c.parent}while(null!=c);c=!1}if(c){b=!0;break a}b=b.opener}while(null!=b);b=!1}if(b&&(b=a.data,"string"===typeof b)){try{b=JSON.parse(b)}catch(d){return}b.command&&(c=this.connection,c.h||c.l("command",b.command,b.data,a.origin))}};
Rn.prototype.D=function(){Zf(this.i);this.destination=null;L.prototype.D.call(this)};function Sn(){L.call(this);this.i=[]}
v(Sn,L);Sn.prototype.D=function(){for(;this.i.length;){var a=this.i.pop();a.target.removeEventListener(a.name,a.Da)}L.prototype.D.call(this)};function Tn(a){a=a||{};var b={},c={};this.url=a.url||"";this.args=a.args||jb(b);this.assets=a.assets||{};this.attrs=a.attrs||jb(c);this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}}
Tn.prototype.clone=function(){var a=new Tn,b;for(b in this)if(this.hasOwnProperty(b)){var c=this[b];"object"==Fa(c)?a[b]=jb(c):a[b]=c}return a};var Un=/cssbin\/(?:debug-)?([a-zA-Z0-9_-]+?)(?:-2x|-web|-rtl|-vfl|.css)/;function Vn(a){a=a||"";if(window.spf){var b=a.match(Un);spf.style.load(a,b?b[1]:"",void 0)}else Wn(a)}
function Wn(a){var b=Xn(a),c=document.getElementById(b),d=c&&an(c,"loaded");d||c&&!d||(c=Yn(a,b,function(){an(c,"loaded")||(Zm(c),hh(b),ag(Oa(ih,b),0))}))}
function Yn(a,b,c){var d=document.createElement("link");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
a=cd(a);Sb(d,a);(document.getElementsByTagName("head")[0]||document.body).appendChild(d);return d}
function Xn(a){var b=Sc(document,"A");Rb(b,new Eb(a,Fb));a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"css-"+Xb(a)}
;function Zn(a,b,c,d){L.call(this);var e=this;this.G=b;this.webPlayerContextConfig=d;this.oa=!1;this.api={};this.ba=this.m=null;this.J=new M;this.i={};this.M=this.fa=this.elementId=this.qa=this.config=null;this.K=!1;this.l=this.A=null;this.ga={};this.Na=["onReady"];this.lastError=null;this.Ca=NaN;this.C={};this.Oa=new Sn(this);this.aa=0;this.j=this.u=a;Td(this,Oa(Rd,this.J));$n(this);ao(this);Td(this,Oa(Rd,this.Oa));c?this.aa=ag(function(){e.loadNewVideoConfig(c)},0):d&&(bo(this),co(this))}
v(Zn,L);m=Zn.prototype;m.getId=function(){return this.G};
m.loadNewVideoConfig=function(a){if(!this.h){this.aa&&(bg(this.aa),this.aa=0);var b=a||{};b instanceof Tn||(b=new Tn(b));this.config=b;this.setConfig(a);co(this);this.isReady()&&eo(this)}};
function bo(a){var b,c;a.webPlayerContextConfig?c=a.webPlayerContextConfig.rootElementId:c=a.config.attrs.id;a.elementId=c||a.elementId;"video-player"===a.elementId&&(a.elementId=a.G,a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.G:a.config.attrs.id=a.G);(null===(b=a.j)||void 0===b?void 0:b.id)===a.elementId&&(a.elementId+="-player",a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.elementId:a.config.attrs.id=a.elementId)}
m.setConfig=function(a){var b;this.qa=a;this.config=fo(a);bo(this);this.fa||(this.fa=go(this,(null===(b=this.config.args)||void 0===b?void 0:b.jsapicallback)||"onYouTubePlayerReady"));this.config.args?this.config.args.jsapicallback=null:this.config.args={jsapicallback:null};var c;if(null===(c=this.config)||void 0===c?0:c.attrs)a=this.config.attrs,(c=a.width)&&this.j&&(this.j.style.width=ed(Number(c)||c)),(a=a.height)&&this.j&&(this.j.style.height=ed(Number(a)||a))};
function eo(a){var b;a.config&&!0!==a.config.loaded&&(a.config.loaded=!0,!a.config.args||"0"!==a.config.args.autoplay&&0!==a.config.args.autoplay&&!1!==a.config.args.autoplay?a.api.loadVideoByPlayerVars(null!==(b=a.config.args)&&void 0!==b?b:null):a.api.cueVideoByPlayerVars(a.config.args))}
function ho(a){var b=!0,c=io(a);c&&a.config&&(a=jo(a),b=an(c,"version")===a);return b&&!!B("yt.player.Application.create")}
function co(a){if(!a.h&&!a.K){var b=ho(a);if(b&&"html5"===(io(a)?"html5":null))a.M="html5",a.isReady()||ko(a);else if(lo(a),a.M="html5",b&&a.l&&a.u)a.u.appendChild(a.l),ko(a);else{a.config&&(a.config.loaded=!0);var c=!1;a.A=function(){c=!0;var d=mo(a,"player_bootstrap_method")?B("yt.player.Application.createAlternate")||B("yt.player.Application.create"):B("yt.player.Application.create");var e=a.config?fo(a.config):void 0;d&&d(a.u,e,a.webPlayerContextConfig);ko(a)};
a.K=!0;b?a.A():(en(jo(a),a.A),(b=no(a))&&Vn(b),oo(a)&&!c&&z("yt.player.Application.create",null,void 0))}}}
function io(a){var b=Oc(a.elementId);!b&&a.j&&a.j.querySelector&&(b=a.j.querySelector("#"+a.elementId));return b}
function ko(a){var b;if(!a.h){var c=io(a),d=!1;c&&c.getApiInterface&&c.getApiInterface()&&(d=!0);d?(a.K=!1,!mo(a,"html5_remove_not_servable_check_killswitch")&&(null===c||void 0===c?0:c.isNotServable)&&a.config&&(null===c||void 0===c?0:c.isNotServable(null===(b=a.config.args)||void 0===b?void 0:b.video_id))||po(a)):a.Ca=ag(function(){ko(a)},50)}}
function po(a){$n(a);a.oa=!0;var b=io(a);if(b){a.m=qo(a,b,"addEventListener");a.ba=qo(a,b,"removeEventListener");var c=b.getApiInterface();c=c.concat(b.getInternalApiInterface());for(var d=a.api,e=0;e<c.length;e++){var f=c[e];d[f]||(d[f]=qo(a,b,f))}}for(var g in a.i)a.i.hasOwnProperty(g)&&a.m&&a.m(g,a.i[g]);eo(a);a.fa&&a.fa(a.api);a.J.U("onReady",a.api)}
function qo(a,b,c){var d=b[c];return function(e){for(var f=[],g=0;g<arguments.length;++g)f[g-0]=arguments[g];try{return a.lastError=null,d.apply(b,f)}catch(h){"sendAbandonmentPing"!==c&&(h.params=c,a.lastError=h,gl(h))}}}
function $n(a){a.oa=!1;if(a.ba)for(var b in a.i)a.i.hasOwnProperty(b)&&a.ba(b,a.i[b]);for(var c in a.C)a.C.hasOwnProperty(c)&&bg(Number(c));a.C={};a.m=null;a.ba=null;b=a.api;for(var d in b)b.hasOwnProperty(d)&&(b[d]=null);b.addEventListener=function(e,f){a.addEventListener(e,f)};
b.removeEventListener=function(e,f){a.removeEventListener(e,f)};
b.destroy=function(){a.dispose()};
b.getLastError=function(){return a.getLastError()};
b.getPlayerType=function(){return a.getPlayerType()};
b.getCurrentVideoConfig=function(){return a.qa};
b.loadNewVideoConfig=function(e){a.loadNewVideoConfig(e)};
b.isReady=function(){return a.isReady()}}
m.isReady=function(){return this.oa};
function ao(a){a.addEventListener("WATCH_LATER_VIDEO_ADDED",function(b){hh("WATCH_LATER_VIDEO_ADDED",b)});
a.addEventListener("WATCH_LATER_VIDEO_REMOVED",function(b){hh("WATCH_LATER_VIDEO_REMOVED",b)});
a.addEventListener("onAdAnnounce",function(b){hh("a11y-announce",b)})}
m.addEventListener=function(a,b){var c=this,d=go(this,b);d&&(0<=Va(this.Na,a)||this.i[a]||(b=ro(this,a),this.m&&this.m(a,b)),this.J.subscribe(a,d),"onReady"===a&&this.isReady()&&ag(function(){d(c.api)},0))};
m.removeEventListener=function(a,b){this.h||(b=go(this,b))&&kf(this.J,a,b)};
function go(a,b){var c=b;if("string"===typeof b){if(a.ga[b])return a.ga[b];c=function(d){for(var e=[],f=0;f<arguments.length;++f)e[f-0]=arguments[f];if(f=B(b))try{f.apply(y,e)}catch(g){hl(g)}};
a.ga[b]=c}return c?c:null}
function ro(a,b){var c="ytPlayer"+b+a.G;a.i[b]=c;y[c]=function(d){var e=ag(function(){if(!a.h){a.J.U(b,d);var f=a.C,g=String(e);g in f&&delete f[g]}},0);
gb(a.C,String(e))};
return c}
m.getPlayerType=function(){return this.M||(io(this)?"html5":null)};
m.getLastError=function(){return this.lastError};
function lo(a){a.cancel();$n(a);a.M=null;a.config&&(a.config.loaded=!1);var b=io(a);b&&(ho(a)||!oo(a)?a.l=b:(b&&b.destroy&&b.destroy(),a.l=null));if(a.u)for(a=a.u;b=a.firstChild;)a.removeChild(b)}
m.cancel=function(){this.A&&ln(jo(this),this.A);bg(this.Ca);this.K=!1};
m.D=function(){lo(this);if(this.l&&this.config&&this.l.destroy)try{this.l.destroy()}catch(b){hl(b)}this.ga=null;for(var a in this.i)this.i.hasOwnProperty(a)&&(y[this.i[a]]=null);this.qa=this.config=this.api=null;delete this.u;delete this.j;L.prototype.D.call(this)};
function oo(a){var b,c;a=null===(c=null===(b=a.config)||void 0===b?void 0:b.args)||void 0===c?void 0:c.fflags;return!!a&&-1!==a.indexOf("player_destroy_old_version=true")}
function jo(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.jsUrl:(a=a.config.assets)?a.js:""}
function no(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.cssUrl:(a=a.config.assets)?a.css:""}
function mo(a,b){var c;if(a.webPlayerContextConfig)var d=a.webPlayerContextConfig.serializedExperimentFlags;else if(null===(c=a.config)||void 0===c?0:c.args)d=a.config.args.fflags;return"true"===tg(d||"","&")[b]}
function fo(a){for(var b={},c=u(Object.keys(a)),d=c.next();!d.done;d=c.next()){d=d.value;var e=a[d];b[d]="object"===typeof e?jb(e):e}return b}
;var so={},to="player_uid_"+(1E9*Math.random()>>>0);function uo(a,b,c){var d="player";c=void 0===c?!0:c;d="string"===typeof d?Oc(d):d;var e=to+"_"+Ia(d),f=so[e];if(f&&c)return vo(a,b)?f.api.loadVideoByPlayerVars(a.args||null):f.loadNewVideoConfig(a),f.api;f=new Zn(d,e,a,b);so[e]=f;hh("player-added",f.api);Td(f,function(){delete so[f.getId()]});
return f.api}
function vo(a,b){return b&&b.serializedExperimentFlags?b.serializedExperimentFlags.includes("web_player_remove_playerproxy=true"):a&&a.args&&a.args.fflags?a.args.fflags.includes("web_player_remove_playerproxy=true"):!1}
;var wo=null,xo=null,yo=null;function zo(){var a=wo.getVideoData(1);a=a.title?a.title+" - YouTube":"YouTube";document.title!==a&&(document.title=a)}
;function Ao(a,b,c){a="ST-"+Xb(a).toString(36);b=b?bc(b):"";c=c||5;O("drop_st_cookie_before_cb")&&!rl()||Kh(a,b,c)}
;function Bo(a,b,c){b=void 0===b?{}:b;c=void 0===c?!1:c;var d=E("EVENT_ID");d&&(b.ei||(b.ei=d));if(b){d=a;var e=void 0===e?!0:e;var f=E("VALID_SESSION_TEMPDATA_DOMAINS",[]),g=$b(window.location.href);g&&f.push(g);g=$b(d);if(0<=Va(f,g)||!g&&0==d.lastIndexOf("/",0))if(O("autoescape_tempdata_url")&&(f=document.createElement("a"),Rb(f,d),d=f.href),d){g=d.match(Yb);d=g[5];f=g[6];g=g[7];var h="";d&&(h+=d);f&&(h+="?"+f);g&&(h+="#"+g);d=h;f=d.indexOf("#");if(d=0>f?d:d.substr(0,f))if(e&&!b.csn&&(b.itct||b.ved)&&
(b=Object.assign({csn:Ml()},b)),k){var k=parseInt(k,10);isFinite(k)&&0<k&&Ao(d,b,k)}else Ao(d,b)}}if(c)return!1;if((window.ytspf||{}).enabled)spf.navigate(a);else{var l=void 0===l?{}:l;var n=void 0===n?"":n;var p=void 0===p?window:p;c=p.location;a=cc(a,l)+n;var r=void 0===r?bd:r;a:{r=void 0===r?bd:r;for(l=0;l<r.length;++l)if(n=r[l],n instanceof $c&&n.isValid(a)){r=new Hc(a,Fc);break a}r=void 0}c.href=Jc(r||Ic)}return!0}
;z("yt.setConfig",N,void 0);z("yt.config.set",N,void 0);z("yt.setMsg",Nf,void 0);z("yt.msgs.set",Nf,void 0);z("yt.logging.errors.log",hl,void 0);
z("writeEmbed",function(){var a=E("PLAYER_CONFIG",void 0);if(!a){var b=E("PLAYER_VARS",void 0);b&&(a={args:b})}zl(!0);"gvn"===a.args.ps&&(document.body.style.backgroundColor="transparent");a.attrs||(a.attrs={width:"100%",height:"100%",id:"video-player"});var c=document.referrer;b=E("POST_MESSAGE_ORIGIN");window!==window.top&&c&&c!==document.URL&&(a.args.loaderUrl=c);O("embeds_js_api_set_1p_cookie")&&(c=yg(),c.embedsTokenValue&&(a.args.embedsTokenValue=c.embedsTokenValue));N("FORCE_CSI_ON_GEL",!0);
c=["ol"];vm("").info.actionType="embed";c&&N("TIMING_AFT_KEYS",c);N("TIMING_ACTION","embed");c=E("TIMING_INFO",{});for(var d in c)c.hasOwnProperty(d)&&Lm(d,c[d]);Lm("is_nav",1);(d=Ml())&&Lm("csn",d);(d=E("PREVIOUS_ACTION",void 0))&&!Gm()&&Lm("pa",d);d=qm();c=E("CLIENT_PROTOCOL");var e=E("CLIENT_TRANSPORT");c&&Lm("p",c);e&&Lm("t",e);Lm("yt_vis",Qm());Lm("yt_lt","cold");c=mm();if(e=om())Z("srt",c.responseStart),1!==d.prerender&&(Lm("yt_sts","n",void 0),Z("_start",e,void 0));d=tm();0<d&&Z("fpt",d);if(!O("log_deltas_killswitch")){var f,
g,h,k;U&&U.timing&&(U.timeOrigin&&U.timing.navigationStart&&Nm("startTimeDelta",Math.floor(U.timeOrigin)-U.timing.navigationStart),(d=null===(k=null===(h=null===(g=null===(f=U.getEntriesByType)||void 0===f?void 0:f.call(U,"navigation"))||void 0===g?void 0:g[0])||void 0===h?void 0:h.toJSON)||void 0===k?void 0:k.call(h))&&d.responseEnd&&U.timing.responseEnd&&Nm("responseEndDelta",nm(d.responseEnd)-U.timing.responseEnd))}f=mm();f.isPerformanceNavigationTiming&&Lm("pnt",1,void 0);Z("nreqs",f.requestStart,
void 0);Z("nress",f.responseStart,void 0);Z("nrese",f.responseEnd,void 0);0<f.redirectEnd-f.redirectStart&&(Z("nrs",f.redirectStart,void 0),Z("nre",f.redirectEnd,void 0));0<f.domainLookupEnd-f.domainLookupStart&&(Z("ndnss",f.domainLookupStart,void 0),Z("ndnse",f.domainLookupEnd,void 0));0<f.connectEnd-f.connectStart&&(Z("ntcps",f.connectStart,void 0),Z("ntcpe",f.connectEnd,void 0));f.secureConnectionStart>=om()&&0<f.connectEnd-f.secureConnectionStart&&(Z("nstcps",f.secureConnectionStart,void 0),Z("ntcpe",
f.connectEnd,void 0));U&&U.getEntriesByType&&Sm();f=[];if(document.querySelector&&U&&U.getEntriesByName)for(var l in jm)jm.hasOwnProperty(l)&&(g=jm[l],Rm(l,g)&&f.push(g));f.length&&Lm("rc",f.join(","));if(Gm(void 0)){l={actionType:Am[E("TIMING_ACTION",void 0)]||"LATENCY_ACTION_UNKNOWN",previousAction:Am[E("PREVIOUS_ACTION",void 0)]||"LATENCY_ACTION_UNKNOWN"};if(f=Ml())l.clientScreenNonce=f;f=rm(void 0);ym().info(l,f)}l=qm();g=lm();if("cold"===l.yt_lt&&(f=Im(),h=f.gelTicks?f.gelTicks:f.gelTicks={},
f=f.gelInfos?f.gelInfos:f.gelInfos={},Gm())){for(var n in g)"tick_"+n in h||Hm(n,g[n]);n=Km();g=rm();h={};for(var p in l)"info_"+p in f||!(k=Jm(p,l[p]))||(Yl(n,k),Yl(h,k));ym().info(h,g)}z("ytglobal.timingready_",!0,void 0);Mm();(p=E("WEB_PLAYER_CONTEXT_CONFIGS",void 0))&&"WEB_PLAYER_CONTEXT_CONFIG_ID_EMBEDDED_PLAYER"in p?(p=p.WEB_PLAYER_CONTEXT_CONFIG_ID_EMBEDDED_PLAYER,p.serializedForcedExperimentIds||(n=yg(),n.forced_experiments&&(p.serializedForcedExperimentIds=n.forced_experiments)),wo=uo(a,
p,!1)):wo=uo(a);wo.addEventListener("onVideoDataChange",zo);a=E("POST_MESSAGE_ID","player");E("ENABLE_JS_API")?yo=new Kn(wo):E("ENABLE_POST_API")&&"string"===typeof a&&"string"===typeof b&&(xo=new Rn(window.parent,a,b),yo=new On(wo,xo.connection));on();O("networkless_logging_web_embedded")&&yk();O("embeds_enable_ua_ch_polyfill")&&Cn()},void 0);
var Co=Jf(function(){Om();var a=mf(Mh),b=!!((Ph("f"+(Math.floor(119/31)+1))||0)&67108864),c=1<window.devicePixelRatio;if(document.body&&Wd(document.body,"exp-invert-logo"))if(c&&!Wd(document.body,"inverted-hdpi")){var d=document.body;if(d.classList)d.classList.add("inverted-hdpi");else if(!Wd(d,"inverted-hdpi")){var e=Ud(d);Vd(d,e+(0<e.length?" inverted-hdpi":"inverted-hdpi"))}}else!c&&Wd(document.body,"inverted-hdpi")&&Xd();if(b!=c){b="f"+(Math.floor(119/31)+1);d=Ph(b)||0;d=c?d|67108864:d&-67108865;
0==d?delete Lh[b]:(c=d.toString(16),Lh[b]=c.toString());c=!0;O("web_secure_pref_cookie_killswitch")&&(c=!1);b=a.h;d=[];for(var f in Lh)d.push(f+"="+encodeURIComponent(String(Lh[f])));Kh(b,d.join("&"),63072E3,a.i,c)}Um.h||(Um.h=new Um);a=Um.h;f=16623;var g=void 0===g?{}:g;Object.values(jl).includes(f)||(gl(new wi("createClientScreen() called with a non-page VE",f)),f=83769);g.isHistoryNavigation||a.h.push({rootVe:f,key:g.key||""});a.l=[];a.o=[];g.Ga?Xm(a,f,g):Ym(a,f,g)}),Do=Jf(function(){wo&&wo.sendAbandonmentPing&&
wo.sendAbandonmentPing();
E("PL_ATT")&&un.dispose();for(var a=0,b=mn.length;a<b;a++)ig(mn[a]);mn.length=0;kn("//static.doubleclick.net/instream/ad_status.js");nn=!1;N("DCLKSTAT",0);Sd(yo,xo);wo&&(wo.removeEventListener("onVideoDataChange",zo),wo.destroy())});
window.addEventListener?(window.addEventListener("load",Co),window.addEventListener("unload",Do)):window.attachEvent&&(window.attachEvent("onload",Co),window.attachEvent("onunload",Do));Pa("yt.abuse.player.botguardInitialized",B("yt.abuse.player.botguardInitialized")||vn);Pa("yt.abuse.player.invokeBotguard",B("yt.abuse.player.invokeBotguard")||wn);Pa("yt.abuse.dclkstatus.checkDclkStatus",B("yt.abuse.dclkstatus.checkDclkStatus")||pn);
Pa("yt.player.exports.navigate",B("yt.player.exports.navigate")||Bo);Pa("yt.util.activity.init",B("yt.util.activity.init")||kg);Pa("yt.util.activity.getTimeSinceActive",B("yt.util.activity.getTimeSinceActive")||ng);Pa("yt.util.activity.setTimestamp",B("yt.util.activity.setTimestamp")||lg);}).call(this);
