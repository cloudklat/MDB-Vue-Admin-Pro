(function(t,e){"object"===typeof exports&&"object"===typeof module?module.exports=e():"function"===typeof define&&define.amd?define([],e):"object"===typeof exports?exports["Notify"]=e():t["Notify"]=e()})("undefined"!==typeof self?self:this,(function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s="fb15")}({"06cf":function(t,e,n){var r=n("83ab"),o=n("d1e7"),i=n("5c6c"),c=n("fc6a"),a=n("c04e"),u=n("5135"),s=n("0cfb"),f=Object.getOwnPropertyDescriptor;e.f=r?f:function(t,e){if(t=c(t),e=a(e,!0),s)try{return f(t,e)}catch(n){}if(u(t,e))return i(!o.f.call(t,e),t[e])}},"0cfb":function(t,e,n){var r=n("83ab"),o=n("d039"),i=n("cc12");t.exports=!r&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},"0d03":function(t,e,n){var r=n("6eeb"),o=Date.prototype,i="Invalid Date",c="toString",a=o[c],u=o.getTime;new Date(NaN)+""!=i&&r(o,c,(function(){var t=u.call(this);return t===t?a.call(this):i}))},1276:function(t,e,n){"use strict";var r=n("d784"),o=n("44e7"),i=n("825a"),c=n("1d80"),a=n("4840"),u=n("8aa5"),s=n("50c4"),f=n("14c3"),l=n("9263"),p=n("d039"),d=[].push,h=Math.min,v=4294967295,g=!p((function(){return!RegExp(v,"y")}));r("split",2,(function(t,e,n){var r;return r="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,n){var r=String(c(this)),i=void 0===n?v:n>>>0;if(0===i)return[];if(void 0===t)return[r];if(!o(t))return e.call(r,t,i);var a,u,s,f=[],p=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),h=0,g=new RegExp(t.source,p+"g");while(a=l.call(g,r)){if(u=g.lastIndex,u>h&&(f.push(r.slice(h,a.index)),a.length>1&&a.index<r.length&&d.apply(f,a.slice(1)),s=a[0].length,h=u,f.length>=i))break;g.lastIndex===a.index&&g.lastIndex++}return h===r.length?!s&&g.test("")||f.push(""):f.push(r.slice(h)),f.length>i?f.slice(0,i):f}:"0".split(void 0,0).length?function(t,n){return void 0===t&&0===n?[]:e.call(this,t,n)}:e,[function(e,n){var o=c(this),i=void 0==e?void 0:e[t];return void 0!==i?i.call(e,o,n):r.call(String(o),e,n)},function(t,o){var c=n(r,t,this,o,r!==e);if(c.done)return c.value;var l=i(t),p=String(this),d=a(l,RegExp),y=l.unicode,b=(l.ignoreCase?"i":"")+(l.multiline?"m":"")+(l.unicode?"u":"")+(g?"y":"g"),x=new d(g?l:"^(?:"+l.source+")",b),m=void 0===o?v:o>>>0;if(0===m)return[];if(0===p.length)return null===f(x,p)?[p]:[];var S=0,w=0,E=[];while(w<p.length){x.lastIndex=g?w:0;var C,O=f(x,g?p:p.slice(w));if(null===O||(C=h(s(x.lastIndex+(g?0:w)),p.length))===S)w=u(p,w,y);else{if(E.push(p.slice(S,w)),E.length===m)return E;for(var j=1;j<=O.length-1;j++)if(E.push(O[j]),E.length===m)return E;w=S=C}}return E.push(p.slice(S)),E}]}),!g)},"14c3":function(t,e,n){var r=n("c6b6"),o=n("9263");t.exports=function(t,e){var n=t.exec;if("function"===typeof n){var i=n.call(t,e);if("object"!==typeof i)throw TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==r(t))throw TypeError("RegExp#exec called on incompatible receiver");return o.call(t,e)}},"159b":function(t,e,n){var r=n("da84"),o=n("fdbc"),i=n("17c2"),c=n("9112");for(var a in o){var u=r[a],s=u&&u.prototype;if(s&&s.forEach!==i)try{c(s,"forEach",i)}catch(f){s.forEach=i}}},"17c2":function(t,e,n){"use strict";var r=n("b727").forEach,o=n("b301");t.exports=o("forEach")?function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}:[].forEach},"1c0b":function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},"1d80":function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on "+t);return t}},"23cb":function(t,e,n){var r=n("a691"),o=Math.max,i=Math.min;t.exports=function(t,e){var n=r(t);return n<0?o(n+e,0):i(n,e)}},"23e7":function(t,e,n){var r=n("da84"),o=n("06cf").f,i=n("9112"),c=n("6eeb"),a=n("ce4e"),u=n("e893"),s=n("94ca");t.exports=function(t,e){var n,f,l,p,d,h,v=t.target,g=t.global,y=t.stat;if(f=g?r:y?r[v]||a(v,{}):(r[v]||{}).prototype,f)for(l in e){if(d=e[l],t.noTargetGet?(h=o(f,l),p=h&&h.value):p=f[l],n=s(g?l:v+(y?".":"#")+l,t.forced),!n&&void 0!==p){if(typeof d===typeof p)continue;u(d,p)}(t.sham||p&&p.sham)&&i(d,"sham",!0),c(f,l,d,t)}}},"241c":function(t,e,n){var r=n("ca84"),o=n("7839"),i=o.concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,i)}},4160:function(t,e,n){"use strict";var r=n("23e7"),o=n("17c2");r({target:"Array",proto:!0,forced:[].forEach!=o},{forEach:o})},"428f":function(t,e,n){t.exports=n("da84")},"44ad":function(t,e,n){var r=n("d039"),o=n("c6b6"),i="".split;t.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},"44e7":function(t,e,n){var r=n("861d"),o=n("c6b6"),i=n("b622"),c=i("match");t.exports=function(t){var e;return r(t)&&(void 0!==(e=t[c])?!!e:"RegExp"==o(t))}},4840:function(t,e,n){var r=n("825a"),o=n("1c0b"),i=n("b622"),c=i("species");t.exports=function(t,e){var n,i=r(t).constructor;return void 0===i||void 0==(n=r(i)[c])?e:o(n)}},4930:function(t,e,n){var r=n("d039");t.exports=!!Object.getOwnPropertySymbols&&!r((function(){return!String(Symbol())}))},"4d64":function(t,e,n){var r=n("fc6a"),o=n("50c4"),i=n("23cb"),c=function(t){return function(e,n,c){var a,u=r(e),s=o(u.length),f=i(c,s);if(t&&n!=n){while(s>f)if(a=u[f++],a!=a)return!0}else for(;s>f;f++)if((t||f in u)&&u[f]===n)return t||f||0;return!t&&-1}};t.exports={includes:c(!0),indexOf:c(!1)}},"50c4":function(t,e,n){var r=n("a691"),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},5135:function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},5692:function(t,e,n){var r=n("c430"),o=n("c6cd");(t.exports=function(t,e){return o[t]||(o[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.3.2",mode:r?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},"56ef":function(t,e,n){var r=n("d066"),o=n("241c"),i=n("7418"),c=n("825a");t.exports=r("Reflect","ownKeys")||function(t){var e=o.f(c(t)),n=i.f;return n?e.concat(n(t)):e}},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,n){var r=n("1d80"),o=n("5899"),i="["+o+"]",c=RegExp("^"+i+i+"*"),a=RegExp(i+i+"*$"),u=function(t){return function(e){var n=String(r(e));return 1&t&&(n=n.replace(c,"")),2&t&&(n=n.replace(a,"")),n}};t.exports={start:u(1),end:u(2),trim:u(3)}},"5c6c":function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},"60da":function(t,e,n){"use strict";var r=n("83ab"),o=n("d039"),i=n("df75"),c=n("7418"),a=n("d1e7"),u=n("7b0b"),s=n("44ad"),f=Object.assign;t.exports=!f||o((function(){var t={},e={},n=Symbol(),r="abcdefghijklmnopqrst";return t[n]=7,r.split("").forEach((function(t){e[t]=t})),7!=f({},t)[n]||i(f({},e)).join("")!=r}))?function(t,e){var n=u(t),o=arguments.length,f=1,l=c.f,p=a.f;while(o>f){var d,h=s(arguments[f++]),v=l?i(h).concat(l(h)):i(h),g=v.length,y=0;while(g>y)d=v[y++],r&&!p.call(h,d)||(n[d]=h[d])}return n}:f},6547:function(t,e,n){var r=n("a691"),o=n("1d80"),i=function(t){return function(e,n){var i,c,a=String(o(e)),u=r(n),s=a.length;return u<0||u>=s?t?"":void 0:(i=a.charCodeAt(u),i<55296||i>56319||u+1===s||(c=a.charCodeAt(u+1))<56320||c>57343?t?a.charAt(u):i:t?a.slice(u,u+2):c-56320+(i-55296<<10)+65536)}};t.exports={codeAt:i(!1),charAt:i(!0)}},"65f0":function(t,e,n){var r=n("861d"),o=n("e8b5"),i=n("b622"),c=i("species");t.exports=function(t,e){var n;return o(t)&&(n=t.constructor,"function"!=typeof n||n!==Array&&!o(n.prototype)?r(n)&&(n=n[c],null===n&&(n=void 0)):n=void 0),new(void 0===n?Array:n)(0===e?0:e)}},"69f3":function(t,e,n){var r,o,i,c=n("7f9a"),a=n("da84"),u=n("861d"),s=n("9112"),f=n("5135"),l=n("f772"),p=n("d012"),d=a.WeakMap,h=function(t){return i(t)?o(t):r(t,{})},v=function(t){return function(e){var n;if(!u(e)||(n=o(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return n}};if(c){var g=new d,y=g.get,b=g.has,x=g.set;r=function(t,e){return x.call(g,t,e),e},o=function(t){return y.call(g,t)||{}},i=function(t){return b.call(g,t)}}else{var m=l("state");p[m]=!0,r=function(t,e){return s(t,m,e),e},o=function(t){return f(t,m)?t[m]:{}},i=function(t){return f(t,m)}}t.exports={set:r,get:o,has:i,enforce:h,getterFor:v}},"6eeb":function(t,e,n){var r=n("da84"),o=n("5692"),i=n("9112"),c=n("5135"),a=n("ce4e"),u=n("9e81"),s=n("69f3"),f=s.get,l=s.enforce,p=String(u).split("toString");o("inspectSource",(function(t){return u.call(t)})),(t.exports=function(t,e,n,o){var u=!!o&&!!o.unsafe,s=!!o&&!!o.enumerable,f=!!o&&!!o.noTargetGet;"function"==typeof n&&("string"!=typeof e||c(n,"name")||i(n,"name",e),l(n).source=p.join("string"==typeof e?e:"")),t!==r?(u?!f&&t[e]&&(s=!0):delete t[e],s?t[e]=n:i(t,e,n)):s?t[e]=n:a(e,n)})(Function.prototype,"toString",(function(){return"function"==typeof this&&f(this).source||u.call(this)}))},"6fe5":function(t,e,n){var r=n("da84"),o=n("58a8").trim,i=n("5899"),c=r.parseFloat,a=1/c(i+"-0")!==-1/0;t.exports=a?function(t){var e=o(String(t)),n=c(e);return 0===n&&"-"==e.charAt(0)?-0:n}:c},7418:function(t,e){e.f=Object.getOwnPropertySymbols},7839:function(t,e){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},"7b0b":function(t,e,n){var r=n("1d80");t.exports=function(t){return Object(r(t))}},"7f9a":function(t,e,n){var r=n("da84"),o=n("9e81"),i=r.WeakMap;t.exports="function"===typeof i&&/native code/.test(o.call(i))},"825a":function(t,e,n){var r=n("861d");t.exports=function(t){if(!r(t))throw TypeError(String(t)+" is not an object");return t}},"83ab":function(t,e,n){var r=n("d039");t.exports=!r((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},"861d":function(t,e){t.exports=function(t){return"object"===typeof t?null!==t:"function"===typeof t}},"8aa5":function(t,e,n){"use strict";var r=n("6547").charAt;t.exports=function(t,e,n){return e+(n?r(t,e).length:1)}},"90e3":function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++n+r).toString(36)}},9112:function(t,e,n){var r=n("83ab"),o=n("9bf2"),i=n("5c6c");t.exports=r?function(t,e,n){return o.f(t,e,i(1,n))}:function(t,e,n){return t[e]=n,t}},9263:function(t,e,n){"use strict";var r=n("ad6d"),o=RegExp.prototype.exec,i=String.prototype.replace,c=o,a=function(){var t=/a/,e=/b*/g;return o.call(t,"a"),o.call(e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),u=void 0!==/()??/.exec("")[1],s=a||u;s&&(c=function(t){var e,n,c,s,f=this;return u&&(n=new RegExp("^"+f.source+"$(?!\\s)",r.call(f))),a&&(e=f.lastIndex),c=o.call(f,t),a&&c&&(f.lastIndex=f.global?c.index+c[0].length:e),u&&c&&c.length>1&&i.call(c[0],n,(function(){for(s=1;s<arguments.length-2;s++)void 0===arguments[s]&&(c[s]=void 0)})),c}),t.exports=c},"94ca":function(t,e,n){var r=n("d039"),o=/#|\.prototype\./,i=function(t,e){var n=a[c(t)];return n==s||n!=u&&("function"==typeof e?r(e):!!e)},c=i.normalize=function(t){return String(t).replace(o,".").toLowerCase()},a=i.data={},u=i.NATIVE="N",s=i.POLYFILL="P";t.exports=i},"9bf2":function(t,e,n){var r=n("83ab"),o=n("0cfb"),i=n("825a"),c=n("c04e"),a=Object.defineProperty;e.f=r?a:function(t,e,n){if(i(t),e=c(e,!0),i(n),o)try{return a(t,e,n)}catch(r){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},"9e81":function(t,e,n){var r=n("5692");t.exports=r("native-function-to-string",Function.toString)},a15b:function(t,e,n){"use strict";var r=n("23e7"),o=n("44ad"),i=n("fc6a"),c=n("b301"),a=[].join,u=o!=Object,s=c("join",",");r({target:"Array",proto:!0,forced:u||s},{join:function(t){return a.call(i(this),void 0===t?",":t)}})},a691:function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},ac1f:function(t,e,n){"use strict";var r=n("23e7"),o=n("9263");r({target:"RegExp",proto:!0,forced:/./.exec!==o},{exec:o})},acd8:function(t,e,n){var r=n("23e7"),o=n("6fe5");r({global:!0,forced:parseFloat!=o},{parseFloat:o})},ad6d:function(t,e,n){"use strict";var r=n("825a");t.exports=function(){var t=r(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},b301:function(t,e,n){"use strict";var r=n("d039");t.exports=function(t,e){var n=[][t];return!n||!r((function(){n.call(null,e||function(){throw 1},1)}))}},b622:function(t,e,n){var r=n("da84"),o=n("5692"),i=n("90e3"),c=n("4930"),a=r.Symbol,u=o("wks");t.exports=function(t){return u[t]||(u[t]=c&&a[t]||(c?a:i)("Symbol."+t))}},b727:function(t,e,n){var r=n("f8c2"),o=n("44ad"),i=n("7b0b"),c=n("50c4"),a=n("65f0"),u=[].push,s=function(t){var e=1==t,n=2==t,s=3==t,f=4==t,l=6==t,p=5==t||l;return function(d,h,v,g){for(var y,b,x=i(d),m=o(x),S=r(h,v,3),w=c(m.length),E=0,C=g||a,O=e?C(d,w):n?C(d,0):void 0;w>E;E++)if((p||E in m)&&(y=m[E],b=S(y,E,x),t))if(e)O[E]=b;else if(b)switch(t){case 3:return!0;case 5:return y;case 6:return E;case 2:u.call(O,y)}else if(f)return!1;return l?-1:s||f?f:O}};t.exports={forEach:s(0),map:s(1),filter:s(2),some:s(3),every:s(4),find:s(5),findIndex:s(6)}},c04e:function(t,e,n){var r=n("861d");t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},c430:function(t,e){t.exports=!1},c6b6:function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},c6cd:function(t,e,n){var r=n("da84"),o=n("ce4e"),i="__core-js_shared__",c=r[i]||o(i,{});t.exports=c},c8ba:function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"===typeof window&&(n=window)}t.exports=n},ca84:function(t,e,n){var r=n("5135"),o=n("fc6a"),i=n("4d64").indexOf,c=n("d012");t.exports=function(t,e){var n,a=o(t),u=0,s=[];for(n in a)!r(c,n)&&r(a,n)&&s.push(n);while(e.length>u)r(a,n=e[u++])&&(~i(s,n)||s.push(n));return s}},cc12:function(t,e,n){var r=n("da84"),o=n("861d"),i=r.document,c=o(i)&&o(i.createElement);t.exports=function(t){return c?i.createElement(t):{}}},cca6:function(t,e,n){var r=n("23e7"),o=n("60da");r({target:"Object",stat:!0,forced:Object.assign!==o},{assign:o})},ce4e:function(t,e,n){var r=n("da84"),o=n("9112");t.exports=function(t,e){try{o(r,t,e)}catch(n){r[t]=e}return e}},d012:function(t,e){t.exports={}},d039:function(t,e){t.exports=function(t){try{return!!t()}catch(e){return!0}}},d066:function(t,e,n){var r=n("428f"),o=n("da84"),i=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,e){return arguments.length<2?i(r[t])||i(o[t]):r[t]&&r[t][e]||o[t]&&o[t][e]}},d1e7:function(t,e,n){"use strict";var r={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,i=o&&!r.call({1:2},1);e.f=i?function(t){var e=o(this,t);return!!e&&e.enumerable}:r},d784:function(t,e,n){"use strict";var r=n("9112"),o=n("6eeb"),i=n("d039"),c=n("b622"),a=n("9263"),u=c("species"),s=!i((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),f=!i((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));t.exports=function(t,e,n,l){var p=c(t),d=!i((function(){var e={};return e[p]=function(){return 7},7!=""[t](e)})),h=d&&!i((function(){var e=!1,n=/a/;return n.exec=function(){return e=!0,null},"split"===t&&(n.constructor={},n.constructor[u]=function(){return n}),n[p](""),!e}));if(!d||!h||"replace"===t&&!s||"split"===t&&!f){var v=/./[p],g=n(p,""[t],(function(t,e,n,r,o){return e.exec===a?d&&!o?{done:!0,value:v.call(e,n,r)}:{done:!0,value:t.call(n,e,r)}:{done:!1}})),y=g[0],b=g[1];o(String.prototype,t,y),o(RegExp.prototype,p,2==e?function(t,e){return b.call(t,this,e)}:function(t){return b.call(t,this)}),l&&r(RegExp.prototype[p],"sham",!0)}}},da84:function(t,e,n){(function(e){var n=function(t){return t&&t.Math==Math&&t};t.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof e&&e)||Function("return this")()}).call(this,n("c8ba"))},df75:function(t,e,n){var r=n("ca84"),o=n("7839");t.exports=Object.keys||function(t){return r(t,o)}},e893:function(t,e,n){var r=n("5135"),o=n("56ef"),i=n("06cf"),c=n("9bf2");t.exports=function(t,e){for(var n=o(e),a=c.f,u=i.f,s=0;s<n.length;s++){var f=n[s];r(t,f)||a(t,f,u(e,f))}}},e8b5:function(t,e,n){var r=n("c6b6");t.exports=Array.isArray||function(t){return"Array"==r(t)}},f6fd:function(t,e){(function(t){var e="currentScript",n=t.getElementsByTagName("script");e in t||Object.defineProperty(t,e,{get:function(){try{throw new Error}catch(r){var t,e=(/.*at [^\(]*\((.*):.+:.+\)$/gi.exec(r.stack)||[!1])[1];for(t in n)if(n[t].src==e||"interactive"==n[t].readyState)return n[t];return null}}})})(document)},f772:function(t,e,n){var r=n("5692"),o=n("90e3"),i=r("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},f8c2:function(t,e,n){var r=n("1c0b");t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 0:return function(){return t.call(e)};case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},fb15:function(t,e,n){"use strict";var r;(n.r(e),"undefined"!==typeof window)&&(n("f6fd"),(r=window.document.currentScript)&&(r=r.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))&&(n.p=r[1]));n("4160"),n("cca6"),n("159b");var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{"enter-active-class":t.enterActiveClass,"leave-active-class":t.leaveActiveClass},on:{"before-enter":t.beforeEnter,"after-enter":t.afterEnter,"before-leave":t.beforeLeave}},[t.show?n("div",{staticClass:"md-toast",class:["md-toast-"+t.type],style:{backgroundColor:t.toastBackgroundColor}},[t.closeButton?n("button",{staticClass:"md-toast-close-button",attrs:{role:"button"},on:{click:t.hideToastr}},[t._v("×")]):t._e(),t.progressBar?n("div",{staticClass:"md-toast-progress",style:"width: "+t.progress.percent+"%"}):t._e(),n("div",{staticClass:"md-toast-title"},[t._v(t._s(t.title))]),n("div",{staticClass:"md-toast-message",domProps:{innerHTML:t._s(t.message)}})]):t._e()])},i=[],c=(n("a15b"),n("0d03"),n("acd8"),n("ac1f"),n("1276"),{name:"Notification",data:function(){return{progress:{hideEta:0,percent:0,intervalId:null},show:!1,defaultIcons:{}}},props:{type:{type:String,default:"success"},position:{type:String,default:"top center"},title:{type:String},message:{type:String},closeButton:{type:Boolean,default:!0},progressBar:{type:Boolean,default:!1},icon:{type:String},timeOut:{default:"1500"},showMethod:{type:String,default:"fadeIn"},hideMethod:{type:String,default:"fadeOut"},showDuration:{default:"1000"},hideDuration:{default:"1000"},delay:{default:"0"},successColor:{type:String},infoColor:{type:String},warningColor:{type:String},errorColor:{type:String},color:{type:String}},mounted:function(){var t=this,e=document.querySelector(".toastr-container.md-toast-".concat(this.positionClass));e||(e=document.createElement("div"),e.classList.add("toastr-container"),e.id="toast-container",e.classList.add("md-toast-".concat(this.positionClass)),document.body.appendChild(e)),e.appendChild(this.$el),setTimeout((function(){return t.showToastr()}),this.delay)},computed:{positionClass:function(){return this.position.split(" ").join("-")},enterActiveClass:function(){return"animated "+this.showMethod},leaveActiveClass:function(){return"animated "+this.hideMethod},toastBackgroundColor:function(){return this.color?this.color:"success"===this.type&&this.successColor?this.successColor:"info"===this.type&&this.infoColor?this.infoColor:"warning"===this.type&&this.warningColor?this.warningColor:"error"===this.type&&this.errorColor?this.errorColor:null},iconSrc:function(){return this.icon?this.icon:this.defaultIcons[this.type]}},methods:{showToastr:function(){var t=this;this.show=!0,this.sto=setTimeout((function(){return t.hideToastr()}),this.timeOut),this.progressBar&&(this.progress.hideEta=(new Date).getTime()+parseFloat(this.timeOut),this.progress.intervalId=setInterval((function(){return t.refreshProgress()}),10))},hideToastr:function(){clearTimeout(this.sto),clearTimeout(this.progress.intervalId),this.show=!1},refreshProgress:function(){this.progress.percent=(this.progress.hideEta-(new Date).getTime())/this.timeOut*100},beforeEnter:function(t){t.style.animationDuration=this.showDuration+"ms"},afterEnter:function(){this.$el.classList.add("animated"),this.$el.classList.add(this.showMethod)},beforeLeave:function(t){t.style.animationDuration=this.hideDuration+"ms"}}}),a=c,u=a;function s(t,e,n,r,o,i,c,a){var u,s="function"===typeof t?t.options:t;if(e&&(s.render=e,s.staticRenderFns=n,s._compiled=!0),r&&(s.functional=!0),i&&(s._scopeId="data-v-"+i),c?(u=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(c)},s._ssrRegister=u):o&&(u=a?function(){o.call(this,this.$root.$options.shadowRoot)}:o),u)if(s.functional){s._injectStyles=u;var f=s.render;s.render=function(t,e){return u.call(e),f(t,e)}}else{var l=s.beforeCreate;s.beforeCreate=l?[].concat(l,u):[u]}return{exports:t,options:s}}var f=s(u,o,i,!1,null,null,null),l=f.exports,p={install:function(t,e){var n;n=e||{};var r=[],o=function(e,o){var i=t.extend(l),c=Object.assign(n,e,{type:o}),a=new i({el:document.createElement("div"),propsData:c});return r.push(a),a};t.prototype.$notify={success:function(t){return o(t,"success")},info:function(t){return o(t,"info")},warn:function(t){return o(t,"warning")},error:function(t){return o(t,"error")},removeAll:function(){r.forEach((function(t){t.hideToastr()})),r=[]}}}},d=p;e["default"]=d},fc6a:function(t,e,n){var r=n("44ad"),o=n("1d80");t.exports=function(t){return r(o(t))}},fdbc:function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}})}));
//# sourceMappingURL=index.umd.min.js.map