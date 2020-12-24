/**
 * Fuse.js v6.4.3 - Lightweight fuzzy-search (http://fusejs.io)
 *
 * Copyright (c) 2020 Kiro Risk (http://kiro.me)
 * All Rights Reserved. Apache Software License 2.0
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 */
var e,t;e=this,t=function(){"use strict";function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function r(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function h(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=s(e);if(t){var i=s(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return h(this,n)}}function l(e){return function(e){if(Array.isArray(e))return d(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return d(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?d(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function v(e){return Array.isArray?Array.isArray(e):"[object Array]"===x(e)}function g(e){return"string"==typeof e}function y(e){return"number"==typeof e}function p(e){return!0===e||!1===e||function(e){return m(e)&&null!==e}(e)&&"[object Boolean]"==x(e)}function m(t){return"object"===e(t)}function k(e){return null!=e}function M(e){return!e.trim().length}function x(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Object.prototype.toString.call(e)}var b=function(e){return"Invalid value for key ".concat(e)},L=function(e){return"Pattern length exceeds max of ".concat(e,".")},S=Object.prototype.hasOwnProperty,_=function(){function e(n){var r=this;t(this,e),this._keys=[],this._keyMap={};var i=0;n.forEach((function(e){var t=w(e);i+=t.weight,r._keys.push(t),r._keyMap[t.id]=t,i+=t.weight})),this._keys.forEach((function(e){e.weight/=i}))}return r(e,[{key:"get",value:function(e){return this._keyMap[e]}},{key:"keys",value:function(){return this._keys}},{key:"toJSON",value:function(){return JSON.stringify(this._keys)}}]),e}();function w(e){var t=null,n=null,r=null,i=1;if(g(e)||v(e))r=e,t=O(e),n=j(e);else{if(!S.call(e,"name"))throw new Error(function(e){return"Missing ".concat(e," property in key")}("name"));var o=e.name;if(r=o,S.call(e,"weight")&&(i=e.weight)<=0)throw new Error(function(e){return"Property 'weight' in key '".concat(e,"' must be a positive integer")}(o));t=O(o),n=j(o)}return{path:t,id:n,weight:i,src:r}}function O(e){return v(e)?e:e.split(".")}function j(e){return v(e)?e.join("."):e}var A=c({},{isCaseSensitive:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:function(e,t){return e.score===t.score?e.idx<t.idx?-1:1:e.score<t.score?-1:1}},{},{includeMatches:!1,findAllMatches:!1,minMatchCharLength:1},{},{location:0,threshold:.6,distance:100},{},{useExtendedSearch:!1,getFn:function(e,t){var n=[],r=!1;return function e(t,i,o){if(k(t))if(i[o]){var c=t[i[o]];if(!k(c))return;if(o===i.length-1&&(g(c)||y(c)||p(c)))n.push(function(e){return null==e?"":function(e){if("string"==typeof e)return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t}(e)}(c));else if(v(c)){r=!0;for(var a=0,s=c.length;a<s;a+=1)e(c[a],i,o+1)}else i.length&&e(c,i,o+1)}else n.push(t)}(e,g(t)?t.split("."):t,0),r?n:n[0]},ignoreLocation:!1,ignoreFieldNorm:!1}),I=/[^ ]+/g;function C(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:3,t=new Map;return{get:function(n){var r=n.match(I).length;if(t.has(r))return t.get(r);var i=parseFloat((1/Math.sqrt(r)).toFixed(e));return t.set(r,i),i},clear:function(){t.clear()}}}var E=function(){function e(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=n.getFn,i=void 0===r?A.getFn:r;t(this,e),this.norm=C(3),this.getFn=i,this.isCreated=!1,this.setIndexRecords()}return r(e,[{key:"setSources",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];this.docs=e}},{key:"setIndexRecords",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];this.records=e}},{key:"setKeys",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];this.keys=t,this._keysMap={},t.forEach((function(t,n){e._keysMap[t.id]=n}))}},{key:"create",value:function(){var e=this;!this.isCreated&&this.docs.length&&(this.isCreated=!0,g(this.docs[0])?this.docs.forEach((function(t,n){e._addString(t,n)})):this.docs.forEach((function(t,n){e._addObject(t,n)})),this.norm.clear())}},{key:"add",value:function(e){var t=this.size();g(e)?this._addString(e,t):this._addObject(e,t)}},{key:"removeAt",value:function(e){this.records.splice(e,1);for(var t=e,n=this.size();t<n;t+=1)this.records[t].i-=1}},{key:"getValueForItemAtKeyId",value:function(e,t){return e[this._keysMap[t]]}},{key:"size",value:function(){return this.records.length}},{key:"_addString",value:function(e,t){if(k(e)&&!M(e)){var n={v:e,i:t,n:this.norm.get(e)};this.records.push(n)}}},{key:"_addObject",value:function(e,t){var n=this,r={i:t,$:{}};this.keys.forEach((function(t,i){var o=n.getFn(e,t.path);if(k(o))if(v(o))!function(){for(var e=[],t=[{nestedArrIndex:-1,value:o}];t.length;){var c=t.pop(),a=c.nestedArrIndex,s=c.value;if(k(s))if(g(s)&&!M(s)){var u={v:s,i:a,n:n.norm.get(s)};e.push(u)}else v(s)&&s.forEach((function(e,n){t.push({nestedArrIndex:n,value:e})}))}r.$[i]=e}();else if(!M(o)){var c={v:o,n:n.norm.get(o)};r.$[i]=c}})),this.records.push(r)}},{key:"toJSON",value:function(){return{keys:this.keys,records:this.records}}}]),e}();function $(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.getFn,i=void 0===r?A.getFn:r,o=new E({getFn:i});return o.setKeys(e.map(w)),o.setSources(t),o.create(),o}function R(e,t){var n=e.matches;t.matches=[],k(n)&&n.forEach((function(e){if(k(e.indices)&&e.indices.length){var n={indices:e.indices,value:e.value};e.key&&(n.key=e.key.src),e.idx>-1&&(n.refIndex=e.idx),t.matches.push(n)}}))}function F(e,t){t.score=e.score}function P(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.errors,r=void 0===n?0:n,i=t.currentLocation,o=void 0===i?0:i,c=t.expectedLocation,a=void 0===c?0:c,s=t.distance,u=void 0===s?A.distance:s,h=t.ignoreLocation,f=void 0===h?A.ignoreLocation:h,l=r/e.length;if(f)return l;var d=Math.abs(a-o);return u?l+d/u:d?1:l}function N(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:A.minMatchCharLength,n=[],r=-1,i=-1,o=0,c=e.length;o<c;o+=1){var a=e[o];a&&-1===r?r=o:a||-1===r||((i=o-1)-r+1>=t&&n.push([r,i]),r=-1)}return e[o-1]&&o-r>=t&&n.push([r,o-1]),n}function D(e){for(var t={},n=0,r=e.length;n<r;n+=1){var i=e.charAt(n);t[i]=(t[i]||0)|1<<r-n-1}return t}var z=function(){function e(n){var r=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=i.location,c=void 0===o?A.location:o,a=i.threshold,s=void 0===a?A.threshold:a,u=i.distance,h=void 0===u?A.distance:u,f=i.includeMatches,l=void 0===f?A.includeMatches:f,d=i.findAllMatches,v=void 0===d?A.findAllMatches:d,g=i.minMatchCharLength,y=void 0===g?A.minMatchCharLength:g,p=i.isCaseSensitive,m=void 0===p?A.isCaseSensitive:p,k=i.ignoreLocation,M=void 0===k?A.ignoreLocation:k;if(t(this,e),this.options={location:c,threshold:s,distance:h,includeMatches:l,findAllMatches:v,minMatchCharLength:y,isCaseSensitive:m,ignoreLocation:M},this.pattern=m?n:n.toLowerCase(),this.chunks=[],this.pattern.length){var x=function(e,t){r.chunks.push({pattern:e,alphabet:D(e),startIndex:t})},b=this.pattern.length;if(b>32){for(var L=0,S=b%32,_=b-S;L<_;)x(this.pattern.substr(L,32),L),L+=32;if(S){var w=b-32;x(this.pattern.substr(w),w)}}else x(this.pattern,0)}}return r(e,[{key:"searchIn",value:function(e){var t=this.options,n=t.isCaseSensitive,r=t.includeMatches;if(n||(e=e.toLowerCase()),this.pattern===e){var i={isMatch:!0,score:0};return r&&(i.indices=[[0,e.length-1]]),i}var o=this.options,c=o.location,a=o.distance,s=o.threshold,u=o.findAllMatches,h=o.minMatchCharLength,f=o.ignoreLocation,d=[],v=0,g=!1;this.chunks.forEach((function(t){var n=t.pattern,i=t.alphabet,o=t.startIndex,y=function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},i=r.location,o=void 0===i?A.location:i,c=r.distance,a=void 0===c?A.distance:c,s=r.threshold,u=void 0===s?A.threshold:s,h=r.findAllMatches,f=void 0===h?A.findAllMatches:h,l=r.minMatchCharLength,d=void 0===l?A.minMatchCharLength:l,v=r.includeMatches,g=void 0===v?A.includeMatches:v,y=r.ignoreLocation,p=void 0===y?A.ignoreLocation:y;if(t.length>32)throw new Error(L(32));for(var m,k=t.length,M=e.length,x=Math.max(0,Math.min(o,M)),b=u,S=x,_=d>1||g,w=_?Array(M):[];(m=e.indexOf(t,S))>-1;){var O=P(t,{currentLocation:m,expectedLocation:x,distance:a,ignoreLocation:p});if(b=Math.min(O,b),S=m+k,_)for(var j=0;j<k;)w[m+j]=1,j+=1}S=-1;for(var I=[],C=1,E=k+M,$=1<<k-1,R=0;R<k;R+=1){for(var F=0,D=E;F<D;){var z=P(t,{errors:R,currentLocation:x+D,expectedLocation:x,distance:a,ignoreLocation:p});z<=b?F=D:E=D,D=Math.floor((E-F)/2+F)}E=D;var K=Math.max(1,x-D+1),q=f?M:Math.min(x+D,M)+k,W=Array(q+2);W[q+1]=(1<<R)-1;for(var J=q;J>=K;J-=1){var T=J-1,U=n[e.charAt(T)];if(_&&(w[T]=+!!U),W[J]=(W[J+1]<<1|1)&U,R&&(W[J]|=(I[J+1]|I[J])<<1|1|I[J+1]),W[J]&$&&(C=P(t,{errors:R,currentLocation:T,expectedLocation:x,distance:a,ignoreLocation:p}))<=b){if(b=C,(S=T)<=x)break;K=Math.max(1,2*x-S)}}var V=P(t,{errors:R+1,currentLocation:x,expectedLocation:x,distance:a,ignoreLocation:p});if(V>b)break;I=W}var B={isMatch:S>=0,score:Math.max(.001,C)};if(_){var G=N(w,d);G.length?g&&(B.indices=G):B.isMatch=!1}return B}(e,n,i,{location:c+o,distance:a,threshold:s,findAllMatches:u,minMatchCharLength:h,includeMatches:r,ignoreLocation:f}),p=y.isMatch,m=y.score,k=y.indices;p&&(g=!0),v+=m,p&&k&&(d=[].concat(l(d),l(k)))}));var y={isMatch:g,score:g?v/this.chunks.length:1};return g&&r&&(y.indices=d),y}}]),e}(),K=function(){function e(n){t(this,e),this.pattern=n}return r(e,[{key:"search",value:function(){}}],[{key:"isMultiMatch",value:function(e){return q(e,this.multiRegex)}},{key:"isSingleMatch",value:function(e){return q(e,this.singleRegex)}}]),e}();function q(e,t){var n=e.match(t);return n?n[1]:null}var W=function(e){a(i,e);var n=f(i);function i(e){return t(this,i),n.call(this,e)}return r(i,[{key:"search",value:function(e){var t=e===this.pattern;return{isMatch:t,score:t?0:1,indices:[0,this.pattern.length-1]}}}],[{key:"type",get:function(){return"exact"}},{key:"multiRegex",get:function(){return/^="(.*)"$/}},{key:"singleRegex",get:function(){return/^=(.*)$/}}]),i}(K),J=function(e){a(i,e);var n=f(i);function i(e){return t(this,i),n.call(this,e)}return r(i,[{key:"search",value:function(e){var t=-1===e.indexOf(this.pattern);return{isMatch:t,score:t?0:1,indices:[0,e.length-1]}}}],[{key:"type",get:function(){return"inverse-exact"}},{key:"multiRegex",get:function(){return/^!"(.*)"$/}},{key:"singleRegex",get:function(){return/^!(.*)$/}}]),i}(K),T=function(e){a(i,e);var n=f(i);function i(e){return t(this,i),n.call(this,e)}return r(i,[{key:"search",value:function(e){var t=e.startsWith(this.pattern);return{isMatch:t,score:t?0:1,indices:[0,this.pattern.length-1]}}}],[{key:"type",get:function(){return"prefix-exact"}},{key:"multiRegex",get:function(){return/^\^"(.*)"$/}},{key:"singleRegex",get:function(){return/^\^(.*)$/}}]),i}(K),U=function(e){a(i,e);var n=f(i);function i(e){return t(this,i),n.call(this,e)}return r(i,[{key:"search",value:function(e){var t=!e.startsWith(this.pattern);return{isMatch:t,score:t?0:1,indices:[0,e.length-1]}}}],[{key:"type",get:function(){return"inverse-prefix-exact"}},{key:"multiRegex",get:function(){return/^!\^"(.*)"$/}},{key:"singleRegex",get:function(){return/^!\^(.*)$/}}]),i}(K),V=function(e){a(i,e);var n=f(i);function i(e){return t(this,i),n.call(this,e)}return r(i,[{key:"search",value:function(e){var t=e.endsWith(this.pattern);return{isMatch:t,score:t?0:1,indices:[e.length-this.pattern.length,e.length-1]}}}],[{key:"type",get:function(){return"suffix-exact"}},{key:"multiRegex",get:function(){return/^"(.*)"\$$/}},{key:"singleRegex",get:function(){return/^(.*)\$$/}}]),i}(K),B=function(e){a(i,e);var n=f(i);function i(e){return t(this,i),n.call(this,e)}return r(i,[{key:"search",value:function(e){var t=!e.endsWith(this.pattern);return{isMatch:t,score:t?0:1,indices:[0,e.length-1]}}}],[{key:"type",get:function(){return"inverse-suffix-exact"}},{key:"multiRegex",get:function(){return/^!"(.*)"\$$/}},{key:"singleRegex",get:function(){return/^!(.*)\$$/}}]),i}(K),G=function(e){a(i,e);var n=f(i);function i(e){var r,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},c=o.location,a=void 0===c?A.location:c,s=o.threshold,u=void 0===s?A.threshold:s,h=o.distance,f=void 0===h?A.distance:h,l=o.includeMatches,d=void 0===l?A.includeMatches:l,v=o.findAllMatches,g=void 0===v?A.findAllMatches:v,y=o.minMatchCharLength,p=void 0===y?A.minMatchCharLength:y,m=o.isCaseSensitive,k=void 0===m?A.isCaseSensitive:m,M=o.ignoreLocation,x=void 0===M?A.ignoreLocation:M;return t(this,i),(r=n.call(this,e))._bitapSearch=new z(e,{location:a,threshold:u,distance:f,includeMatches:d,findAllMatches:g,minMatchCharLength:p,isCaseSensitive:k,ignoreLocation:x}),r}return r(i,[{key:"search",value:function(e){return this._bitapSearch.searchIn(e)}}],[{key:"type",get:function(){return"fuzzy"}},{key:"multiRegex",get:function(){return/^"(.*)"$/}},{key:"singleRegex",get:function(){return/^(.*)$/}}]),i}(K),H=function(e){a(i,e);var n=f(i);function i(e){return t(this,i),n.call(this,e)}return r(i,[{key:"search",value:function(e){for(var t,n=0,r=[],i=this.pattern.length;(t=e.indexOf(this.pattern,n))>-1;)n=t+i,r.push([t,n-1]);var o=!!r.length;return{isMatch:o,score:o?1:0,indices:r}}}],[{key:"type",get:function(){return"include"}},{key:"multiRegex",get:function(){return/^'"(.*)"$/}},{key:"singleRegex",get:function(){return/^'(.*)$/}}]),i}(K),Q=[W,H,T,U,B,V,J,G],X=Q.length,Y=/ +(?=([^\"]*\"[^\"]*\")*[^\"]*$)/;function Z(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return e.split("|").map((function(e){for(var n=e.trim().split(Y).filter((function(e){return e&&!!e.trim()})),r=[],i=0,o=n.length;i<o;i+=1){for(var c=n[i],a=!1,s=-1;!a&&++s<X;){var u=Q[s],h=u.isMultiMatch(c);h&&(r.push(new u(h,t)),a=!0)}if(!a)for(s=-1;++s<X;){var f=Q[s],l=f.isSingleMatch(c);if(l){r.push(new f(l,t));break}}}return r}))}var ee=new Set([G.type,H.type]),te=function(){function e(n){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=r.isCaseSensitive,o=void 0===i?A.isCaseSensitive:i,c=r.includeMatches,a=void 0===c?A.includeMatches:c,s=r.minMatchCharLength,u=void 0===s?A.minMatchCharLength:s,h=r.ignoreLocation,f=void 0===h?A.ignoreLocation:h,l=r.findAllMatches,d=void 0===l?A.findAllMatches:l,v=r.location,g=void 0===v?A.location:v,y=r.threshold,p=void 0===y?A.threshold:y,m=r.distance,k=void 0===m?A.distance:m;t(this,e),this.query=null,this.options={isCaseSensitive:o,includeMatches:a,minMatchCharLength:u,findAllMatches:d,ignoreLocation:f,location:g,threshold:p,distance:k},this.pattern=o?n:n.toLowerCase(),this.query=Z(this.pattern,this.options)}return r(e,[{key:"searchIn",value:function(e){var t=this.query;if(!t)return{isMatch:!1,score:1};var n=this.options,r=n.includeMatches;e=n.isCaseSensitive?e:e.toLowerCase();for(var i=0,o=[],c=0,a=0,s=t.length;a<s;a+=1){var u=t[a];o.length=0,i=0;for(var h=0,f=u.length;h<f;h+=1){var d=u[h],v=d.search(e),g=v.isMatch,y=v.indices,p=v.score;if(!g){c=0,i=0,o.length=0;break}if(i+=1,c+=p,r){var m=d.constructor.type;ee.has(m)?o=[].concat(l(o),l(y)):o.push(y)}}if(i){var k={isMatch:!0,score:c/i};return r&&(k.indices=o),k}}return{isMatch:!1,score:1}}}],[{key:"condition",value:function(e,t){return t.useExtendedSearch}}]),e}(),ne=[];function re(e,t){for(var n=0,r=ne.length;n<r;n+=1){var i=ne[n];if(i.condition(e,t))return new i(e,t)}return new z(e,t)}var ie="$and",oe="$or",ce="$path",ae="$val",se=function(e){return!(!e[ie]&&!e[oe])},ue=function(e){return!!e[ce]},he=function(e){return!v(e)&&m(e)&&!se(e)},fe=function(e){return i({},ie,Object.keys(e).map((function(t){return i({},t,e[t])})))},le=function(){function e(n){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=arguments.length>2?arguments[2]:void 0;t(this,e),this.options=c({},A,{},r),this.options.useExtendedSearch,this._keyStore=new _(this.options.keys),this.setCollection(n,i)}return r(e,[{key:"setCollection",value:function(e,t){if(this._docs=e,t&&!(t instanceof E))throw new Error("Incorrect 'index' type");this._myIndex=t||$(this.options.keys,this._docs,{getFn:this.options.getFn})}},{key:"add",value:function(e){k(e)&&(this._docs.push(e),this._myIndex.add(e))}},{key:"remove",value:function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){return!1},t=[],n=0,r=this._docs.length;n<r;n+=1){var i=this._docs[n];e(i,n)&&(this.removeAt(n),n-=1,r-=1,t.push(i))}return t}},{key:"removeAt",value:function(e){this._docs.splice(e,1),this._myIndex.removeAt(e)}},{key:"getIndex",value:function(){return this._myIndex}},{key:"search",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.limit,r=void 0===n?-1:n,i=this.options,o=i.includeMatches,c=i.includeScore,a=i.shouldSort,s=i.sortFn,u=i.ignoreFieldNorm,h=g(e)?g(this._docs[0])?this._searchStringList(e):this._searchObjectList(e):this._searchLogical(e);return de(h,{ignoreFieldNorm:u}),a&&h.sort(s),y(r)&&r>-1&&(h=h.slice(0,r)),ve(h,this._docs,{includeMatches:o,includeScore:c})}},{key:"_searchStringList",value:function(e){var t=re(e,this.options),n=this._myIndex.records,r=[];return n.forEach((function(e){var n=e.v,i=e.i,o=e.n;if(k(n)){var c=t.searchIn(n),a=c.isMatch,s=c.score,u=c.indices;a&&r.push({item:n,idx:i,matches:[{score:s,value:n,norm:o,indices:u}]})}})),r}},{key:"_searchLogical",value:function(e){var t=this,n=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.auto,i=void 0===r||r,o=function e(n){var r=Object.keys(n),o=ue(n);if(!o&&r.length>1&&!se(n))return e(fe(n));if(he(n)){var c=o?n[ce]:r[0],a=o?n[ae]:n[c];if(!g(a))throw new Error(b(c));var s={keyId:j(c),pattern:a};return i&&(s.searcher=re(a,t)),s}var u={children:[],operator:r[0]};return r.forEach((function(t){var r=n[t];v(r)&&r.forEach((function(t){u.children.push(e(t))}))})),u};return se(e)||(e=fe(e)),o(e)}(e,this.options),r=this._myIndex.records,i={},o=[];return r.forEach((function(e){var r=e.$,c=e.i;if(k(r)){var a=function e(n,r,i){if(!n.children){var o=n.keyId,c=n.searcher,a=t._findMatches({key:t._keyStore.get(o),value:t._myIndex.getValueForItemAtKeyId(r,o),searcher:c});return a&&a.length?[{idx:i,item:r,matches:a}]:[]}switch(n.operator){case ie:for(var s=[],u=0,h=n.children.length;u<h;u+=1){var f=e(n.children[u],r,i);if(!f.length)return[];s.push.apply(s,l(f))}return s;case oe:for(var d=[],v=0,g=n.children.length;v<g;v+=1){var y=e(n.children[v],r,i);if(y.length){d.push.apply(d,l(y));break}}return d}}(n,r,c);a.length&&(i[c]||(i[c]={idx:c,item:r,matches:[]},o.push(i[c])),a.forEach((function(e){var t,n=e.matches;(t=i[c].matches).push.apply(t,l(n))})))}})),o}},{key:"_searchObjectList",value:function(e){var t=this,n=re(e,this.options),r=this._myIndex,i=r.keys,o=r.records,c=[];return o.forEach((function(e){var r=e.$,o=e.i;if(k(r)){var a=[];i.forEach((function(e,i){a.push.apply(a,l(t._findMatches({key:e,value:r[i],searcher:n})))})),a.length&&c.push({idx:o,item:r,matches:a})}})),c}},{key:"_findMatches",value:function(e){var t=e.key,n=e.value,r=e.searcher;if(!k(n))return[];var i=[];if(v(n))n.forEach((function(e){var n=e.v,o=e.i,c=e.n;if(k(n)){var a=r.searchIn(n),s=a.isMatch,u=a.score,h=a.indices;s&&i.push({score:u,key:t,value:n,idx:o,norm:c,indices:h})}}));else{var o=n.v,c=n.n,a=r.searchIn(o),s=a.isMatch,u=a.score,h=a.indices;s&&i.push({score:u,key:t,value:o,norm:c,indices:h})}return i}}]),e}();function de(e,t){var n=t.ignoreFieldNorm,r=void 0===n?A.ignoreFieldNorm:n;e.forEach((function(e){var t=1;e.matches.forEach((function(e){var n=e.key,i=e.norm,o=e.score,c=n?n.weight:null;t*=Math.pow(0===o&&c?Number.EPSILON:o,(c||1)*(r?1:i))})),e.score=t}))}function ve(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.includeMatches,i=void 0===r?A.includeMatches:r,o=n.includeScore,c=void 0===o?A.includeScore:o,a=[];return i&&a.push(R),c&&a.push(F),e.map((function(e){var n=e.idx,r={item:t[n],refIndex:n};return a.length&&a.forEach((function(t){t(e,r)})),r}))}return le.version="6.4.3",le.createIndex=$,le.parseIndex=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.getFn,r=void 0===n?A.getFn:n,i=e.keys,o=e.records,c=new E({getFn:r});return c.setKeys(i),c.setIndexRecords(o),c},le.config=A,function(){ne.push.apply(ne,arguments)}(te),le},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self).Fuse=t();
;
const idx = [
  {
    "link": "https://y-net.dev/docs/compose/",
    "title": "Compose Docs",
    "body": `[Welcome to the Compose theme user guide! This guide shows you how to get started creating technical documentation sites using Compose, including site customization and how to use Compose's blocks and templates. Get started now]`.toLowerCase(),
  },
  {
    "link": "https://y-net.dev/docs/",
    "title": "Themes' Docs",
    "body": `[These docs consists of two parts: Hugo Compose Themes docs Hugo Clarity Theme docs. Please note that the features listed under each theme are independent of each other. That is to say, some features may only be found in one theme and not in both. Compose Theme Docs Clarity Theme Docs]`.toLowerCase(),
  },
  {
    "link": "https://y-net.dev/docs/compose/getting-started/",
    "title": "Getting Started",
    "body": `[Prerequisites and installation Install Hugo You need a recent extended version (we recommend version 0.61 or later) of Hugo to do local builds and previews of sites (like this one) that uses this theme. If you install from the release page, make sure to get the extended Hugo version, which supports sass; you may need to scroll down the list of releases to see it. For comprehensive Hugo documentation, see gohugo.io. Run your site with compose theme You could go with the options right below. Option 1 (my favorite) This option enables you to load compose theme as a hugo module. First things first, ensure you have go binary installed on your machine. 1 2 3 git clone https://github.com/onweru/compose/ cd compose/exampleSite/ hugo server To pull in theme updates, run hugo mod get -u ./... from the theme folder. If unsure, learn how to update hugo modules ⚠️ If you choose Option 2 or Option 3 below, ensure you edit these lines in the config.toml file as advised on the comments Option 2 (recommended) Generate a new Hugo site and add this theme as a Git submodule inside your themes folder: 1 2 3 4 5 hugo new site yourSiteName cd yourSiteName git init git submodule add https://github.com/onweru/compose/ themes/compose cp -a themes/compose/exampleSite/* . Then run 1 hugo server Hurray! Option 3 (Great for testing quickly) You can run your site directly from the exampleSite. To do so, use the following commands: 1 2 3 git clone https://github.com/onweru/compose/ cd compose/exampleSite/ hugo server --themesDir ../.. Although, option 3 is great for quick testing, it is somewhat problematic when you want to update your theme. You would need to be careful not to overwrite your changes. Once set, jump over to the config.toml file and start configuring your site.]`.toLowerCase(),
  },
  {
    "link": "https://y-net.dev/docs/compose/use-forestry-cms/",
    "title": "Use forestry CMS",
    "body": `[Do you prefer managing your site using a CMS? Or would you like to make it easier for someone (a non-techie, perhaps) in your team to make edits easily? If interested, follow along. Else, skip to the next section Let's sync your site with forestry CMS. Prerequisites !! Obviously you ought to have a github account. This is where your website source will live. Basically, forestry will read from github and write (commmit) to your github repo. Gitlab or bitbucket will work too. Just check their implementation here. Happy fishing. Requirement 1 : A Forestry account Jump over to forestry and sign up for an account. Consider signing up using your github account. That way, you don't have to deal with passwords. Requirement 2: A Netlify account (optional) If you intend to host with something other than Netlify e.g github pages, please scroll on. Hosting with Netlify is a lot of fun though; I highly recommend it. Step 1 : Fork or Clone Compse theme First we will fork this bigspring template. Step 2 : Add your repository in Forestry The exampleSite already comes with prefilled default forestry settings. If you set up your site using option 2, look for a file .forestry/settings.yml and remove all exampleSite/ strings from it. Go to your forestry account and click on import your site now. Choose hugo github or gitlab. wherever your repo is at. Select your repo]`.toLowerCase(),
  },
  {
    "link": "https://y-net.dev/docs/compose/overview/",
    "title": "Overview",
    "body": `[Instead of writing all your site pages from scratch, Hugo lets you define and use shortcodes. Why shortcodes? While markdown is sufficient to produce simple pages, it's insufficient where complex page structures are needed. Thusly, whenever we need special styling, shortcodes compliment the shortcomings of markdown. This way, you can side step complex html and css boilerplate in your content files.]`.toLowerCase(),
  },
  {
    "link": "https://y-net.dev/docs/compose/shortcodes/",
    "title": "Shortcodes",
    "body": `[Why shortcodes? While markdown is sufficient to produce simple pages, it's insufficient where complex page structures are needed. Thusly, whenever we need special styling, shortcodes compliment the shortcomings of markdown. This way, you can side step complex html and css boilerplate in your content files. Sometimes, the shortcode will wrap content, sometimes it won't. When content is wrapped, a closing shortcode tag is needed. Please see the link I provided above and the markdown files for examples. You'll get the gist pretty quickly. I've setup the following shortcodes: Block Takes positional modifiers Example 1 2 3 4 5 ... {{&lt; block &#34;modifiers&#34; &gt;}} &lt;!-- Nest columns or content --&gt; {{&lt; /block &gt;}} ... Column It takes positional parameters Example 1 2 3 {{&lt; column &#34;mt-2 mb-2&#34; &gt;}} &lt;!-- applied margin top and margin bottom modifiers --&gt; {{&lt; /column &gt;}} Video This allows you to embed a youtube video in you content. You would achieve that using a positional parameter (needs no name )parameter, like so: Example: 1 2 {{&lt; youtube &#34;xWF59rWSceA&#34; &gt;}} &lt;!-- Use the youtube video id --&gt; Button This adds a styled link (styled like a button). It takes two no-optional parameters: PARAMETER PURPOSE OPTIONAL label button text no url button link no Example {{&lt; button &quot;/&quot; &quot;doe nu mee&quot; &gt;}} Picture You want to use darkmode images when darkmode is enabled on a device and a regular image on lightmode? It takes 3 positional parameter Store these images in the static/images directory. 1 2 3 ... {{&lt; picture &#34;lightModeImage.png&#34; &#34;darkModeImage.png&#34; &#34;Image alt text&#34; &gt;}} ... Gallery Include inline galleries within your articles. These galleries can contain N number of images. It takes 2 positional parameters. The 1st parameter is required. It's a comma-separated list (,) of your images' paths. The 2nd parameter is optional. It's a double-collon-separated list (::) of your images' alt/description/captions text. It's always a good SEO practice to include alt text for your images. 1 2 3 ... {{&lt; gallery &#34;images/painting.jpg,images/scribble.jpg,images/painting.jpg&#34; &#34;Gallery Image 1::gallery image 2::gallery image 1 copy&#34; &gt;}} ...]`.toLowerCase(),
  },
  {
    "link": "https://y-net.dev/docs/compose/shortcodes-example/",
    "title": "Shortcodes Applied",
    "body": `[Using blocks, columns &amp; buttons 1 2 3 4 5 6 7 8 9 10 11 12 13 {{&lt; block &#34;grid-2&#34; &gt;}} {{&lt; column &gt;}} #### Coumn 1 Lorem ipsum dolor sit amet, ... {{&lt; button &#34;https://github.com/onweru/compose&#34; &#34;Download Theme&#34; &gt;}} {{&lt; /column &gt;}} {{&lt; column &gt;}} &lt;!-- generates 👇 --&gt; Coumn 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Download Theme Coumn 2 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Read the Docs Youtube 1 2 {{&lt; youtube &#34;q0hyYWKXF0Q&#34; &gt;}} &lt;!-- generates 👇 --&gt; Picture 1 2 {{&lt; picture &#34;compose.svg&#34; &#34;compose-light.svg&#34; &#34;Compose Logo&#34; &gt;}} &lt;!-- generates 👇 --&gt; Gallery Include inline galleries within your articles. These galleries can contain N number of images. It take 2 positional parameters. The 1st parameter is required. It is comma-separated list (,) of your images' paths. The 2nd parameter is optional. It is double-collon-separated list (::) of your images' alt/description/captions text. It's always a good SEO practice to include alt text for your images. 1 2 {{&lt; gallery &#34;images/painting.jpg,images/scribble.jpg,images/painting.jpg&#34; &#34;Gallery Image 1::gallery image 2::gallery image 1 copy&#34; &gt;}} # generates 👇 For legibility, you may include a space after the delimiters , &amp; ::]`.toLowerCase(),
  },
  {
    "link": "https://y-net.dev/docs/compose/search/",
    "title": "Search",
    "body": `[Compose implements fuse.js to enable search functionality. At the time of this writing, search on these theme takes either of this forms: 1. Passive search This occurs only when the user loads the search page i.e /search/. They can directly navigate to that url. Alternatively, the user can type you search query on the search field and click enter. They will be redirected to the search page which will contain matched results if any. 2. Live search This behaviour will be obvious as the user types a search query on the search field. All valid search queries, will yield a list of quick links or a simple no matches found. Else, the user will be prompted to continue typing. Please note that the results under quick links will be a truncated list of the most relevant results. Only a maximum of 8 items will be returned. This number is pragmatic at best if not arbitrary. On the search page, the number is set to 12. Note that live search on the search page will behave differently than on the other pages. Nonetheles, the pages applies the same live search principle. Hitting enter while typing on the search page will be moot. Customize search feedback labels Use the i18n files to do so. What is a valid search query A valid search query must be long enough. If the search query can be cast as a float, then it only need contain one or more characters. Else the search query must be at least 2 characters long.]`.toLowerCase(),
  },
  {
    "link": "https://y-net.dev/docs/compose/graphs-charts-tables/",
    "title": "Bar Graphs, Charts & Tables",
    "body": `[Using chart js library you can display data you have stored in a csv file as a pie chart, bar graph or doughnut chart. At this point if you want to display data from a json or yaml file, you would need to convert it into csv first. Else the template will error out. Once you have a csv file, you display the charts as follows: Example Show a pie, doughnut &amp; bar chart at once Firstly define the data you want to display from the front matter: 1 2 3 4 5 6 7 8 9 10 11 12 13 14 # from front matter ... [dataset1] # this key will in the chart shortcode fileLink = &#34;content/projects.csv&#34; # path to where csv is stored colors = [&#34;#627c62&#34;, &#34;#11819b&#34;, &#34;#ef7f1a&#34;, &#34;#4e1154&#34;] # chart colors columnTitles = [&#34;Section&#34;, &#34;Status&#34;, &#34;Author&#34;] charts = [&#34;bar&#34;, &#34;doughnut&#34;, &#34;pie&#34;, &#34;table&#34;] baseChartOn = 3 # number of column the chart(s) and graph should be drawn from piechart = true doughnutchart = true bargraph = true title = &#34;Projects&#34; table = true # show table listing the chart data ... 1 2 3 4 5 6 // from page content ... {{&lt; grid &#34; mt-2&#34; &gt;}} {{&lt; chart &#34;dataset1&#34; &gt;}} {{&lt; /grid &gt;}} ... Chart.platform.disableCSSInjection = true; function getCanvas(id){ return document.getElementById(id) }; var dataTally = ["2","4","1","5"].map(value = parseInt(value)); var labels = ["dahl","dan","ryan","weru"]; var data = { datasets: [{ data: dataTally, backgroundColor: ["#ef7f1a","#627c62","#11819b","#4e1154"], label: "Projects" }], labels: labels }; var options = {}; var ctx = getCanvas('piedataset1'); var myPieChart = new Chart(ctx, { type: 'pie', data: data, options: options }); var ctx3 = getCanvas('bardataset1'); var barChart = new Chart(ctx3, { type: 'bar', data: data, options: { "scales": { "yAxes": [{ "ticks": { "beginAtZero": true } }] } } }); var ctx2 = getCanvas('doughnutdataset1'); var doughnutChart = new Chart(ctx2, { type: 'doughnut', data: data, options: options }); Show Table at once Section Status Author project 6 alpha weru project 4 beta dan project 4 candidate dahl project y abandoned weru project 1 alpha weru project 4 beta ryan project 4 candidate dan project y abandoned weru project 11 alpha dahl project 4 beta dan project 4 candidate dan project A abandoned weru Chart.platform.disableCSSInjection = true; function getCanvas(id){ return document.getElementById(id) }; var dataTally = ["2","4","1","5"].map(value = parseInt(value)); var labels = ["dahl","dan","ryan","weru"]; var data = { datasets: [{ data: dataTally, backgroundColor: ["#ef7f1a","#627c62","#11819b","#4e1154"], label: "Projects" }], labels: labels }; var options = {}; Example 2 Firstly define the data you want to display from the front matter: 1 2 3 4 5 6 7 8 9 10 11 # from page front matter [dataset2] fileLink = &#34;content/themes.csv&#34; # path to where csv is stored # this key will in the chart shortcode colors = [&#34;#627c62&#34;, &#34;#11819b&#34;, &#34;#ef7f1a&#34;, &#34;#4e1154&#34;] # chart colors columnTitles = [&#34;Theme&#34;, &#34;Latest Version&#34;, &#34;Owner&#34;] title = &#34;Hugo Themes&#34; baseChartOn = 2 # number of column the chart(s) and graph should be drawn from piechart = false doughnutchart = true bargraph = true table = false # show table listing the chart data Show only a pie and a doughnut chart 1 2 3 4 5 6 // from page content ... {{&lt; grid &#34; mt-2&#34; &gt;}} {{&lt; chart &#34;dataset2&#34; &gt;}} {{&lt; /grid &gt;}} ... Chart.platform.disableCSSInjection = true; function getCanvas(id){ return document.getElementById(id) }; var dataTally = ["1","1","1","1"].map(value = parseInt(value)); var labels = ["clarity","compose","newsroom","swift"]; var data = { datasets: [{ data: dataTally, backgroundColor: ["#ef7f1a","#627c62","#11819b","#4e1154"], label: "Hugo Themes" }], labels: labels }; var options = {}; var ctx = getCanvas('piedataset2'); var myPieChart = new Chart(ctx, { type: 'pie', data: data, options: options }); var ctx2 = getCanvas('doughnutdataset2'); var doughnutChart = new Chart(ctx2, { type: 'doughnut', data: data, options: options }); Show table only Theme Latest Version Repo Owner clarity V.1 chipzoller compose V.1 weru swift V.2 weru newsroom V.1 weru Chart.platform.disableCSSInjection = true; function getCanvas(id){ return document.getElementById(id) }; var dataTally = ["3","1"].map(value = parseInt(value)); var labels = ["V.1","V.2"]; var data = { datasets: [{ data: dataTally, backgroundColor: ["#ef7f1a","#627c62","#11819b","#4e1154"], label: "Hugo Themes" }], labels: labels }; var options = {};]`.toLowerCase(),
  },
  {
    "link": "https://y-net.dev/docs/clarity/",
    "title": "Clarity Docs",
    "body": `[Hugo Clarity is a technology-minded theme for Hugo based on VMware's open-source Clarity Design System featuring rich code support, dark/light mode, mobile support, and much more. See a live demo at neonmirrors.net. Get started with Clarity]`.toLowerCase(),
  },
  {
    "link": "https://y-net.dev/docs/clarity/getting-started/",
    "title": "Getting started",
    "body": `[Prerequisites Firstly, ensure you have installed the extended version of Hugo. See installation steps from Hugo's official docs. Getting up and running Read the prerequisites above and verify you're using the extended version of Hugo. There are at least two ways of quickly getting started with Hugo and the VMware Clarity theme: Option 1 (recommended) Generate a new Hugo site and add this theme as a Git submodule inside your themes folder: 1 2 3 4 5 hugo new site yourSiteName cd yourSiteName git init git submodule add https://github.com/chipzoller/hugo-clarity themes/hugo-clarity cp -a themes/hugo-clarity/exampleSite/* . Then run 1 hugo server Hurray! Option 2 (Great for testing quickly) You can run your site directly from the exampleSite. To do so, use the following commands: 1 2 3 git clone https://github.com/chipzoller/hugo-clarity cd hugo-clarity/exampleSite/ hugo server --themesDir ../.. Although, option 2 is great for quick testing, it is somewhat problematic when you want to update your theme. You would need to be careful not to overwrite your changes. Option 3 (The new, most fun &amp; painless approach) This option enables you to load this theme as a hugo module. It arguably requires the least effort to run and maintain in your website. First things first, ensure you have go binary installed on your machine. 1 2 3 git clone https://github.com/chipzoller/hugo-clarity.git clarity cd clarity/exampleSite/ hugo mod init my-site Open config.toml file in your code editor, replace theme = &quot;hugo-clarity&quot; with theme = [&quot;github.com/chipzoller/hugo-clarity&quot;] or just theme = &quot;github.com/chipzoller/hugo-clarity&quot;. Hurray you can now run 1 hugo server To pull in theme updates, run hugo mod get -u ./... from the theme folder. If unsure, learn how to update hugo modules There is more you could do with hugo modules, but this will suffice for our use case here.]`.toLowerCase(),
  },
  {
    "link": "https://y-net.dev/docs/clarity/features/",
    "title": "Features",
    "body": `[Blog with tagging and category options Deeplinks Native Image Lazy Loading Customizable (see config) Dark Mode (with UI controls for user preference setting) Toggleable table of contents Flexible image configuration Logo alignment Mobile support with configurable menu alignment Syntax Highlighting Rich code block functions including: Copy to clipboard Toggle line wrap (dynamic) Toggle line numbers Language label Toggle block expansion/contraction (dynamic) To put it all in context, here is a preview showing all functionality.]`.toLowerCase(),
  },
  {
    "link": "https://y-net.dev/docs/clarity/customize/",
    "title": "Customization",
    "body": `[Configuration If set, jump over to the config.toml file and start configuring your site. This section will mainly cover settings that are unique to this theme. If something is not covered here (or elsewhere in this file), there's a good chance it is covered in this Hugo docs page. Global Parameters These options set global values that some pages or all pages in the site use by default. Parameter Value Type Overidable on Page author string no twitter string no largeTwitterCard boolean no ga_analytics string no description string yes introDescription string no numberOfTagsShown integer no fallBackOgImage file path (string) no codeMaxLines integer yes codeLineNumbers boolean yes mainSections array/string no centerLogo boolean no logo file path (string) no mobileNavigation string no figurePositionShow boolean yes figurePositionLabel string no customCSS array of file path (string) no customJS array of file path (string) no enforceLightMode boolean N/A enforceDarkMode boolean N/A titleSeparator string no comment boolean no Page Parameters These options can be set from a page frontmatter or via archetypes. Parameter Value Type Overrides Global title string N/A date date N/A description string N/A draft boolean N/A featured boolean N/A tags array/string N/A categories array/string N/A toc boolean N/A thumbnail file path (string) N/A featureImage file path (string) N/A shareImage file path (string) N/A codeMaxLines integer yes codeLineNumbers boolean yes figurePositionShow boolean yes figurePositionLabel string no comment boolean no Modify links menu To add, remove, or reorganize top menu items, edit this YAML file. These menu items also display any categories (taxonomies) that might be configured for articles. Social media To edit your social media profile links, edit this YAML file. If you wish to globally use a large Twitter summary card when sharing posts, set the global parameter largeTwitterCard to true. Search engine If using Google Analytics, configure the ga_analytics global parameter in your site with your ID. Forcing light or dark mode By default, sites authored using Clarity will load in the browser with the user's system-wide settings. I.e., if the underlying OS is set to dark mode, the site will automatically load in dark mode. Regardless of the default mode, a UI control switch exists to override the theme mode at the user's discretion. In order to override this behavior and force one mode or another, add either enforceLightMode or enforceDarkMode to your config.toml file. If neither value is present, add it. To enforce Light Mode by default, turn enforceLightMode to true. To enforce Dark Mode by default, turn enforceDarkMode to true 1 2 3 4 [params]...enforceLightMode = true# Force the site to always load in light mode.... Please note that you cannot enforce both modes at the same time. It wouldn't make sense, would it? ⚠️ Please also note that the mode toggle UI will remain in place. That way, if a user prefers dark mode, they can have their way. The best of both worlds. I18N This theme supports Multilingual (i18n / internationalization / translations) The exampleSite gives you some examples already. You may extend the multilingual functionality by following the official documentation. Things to consider in multilingual: supported languages are configured in config/_default/languages.toml add new language support by creating a new file inside i18n directory. Check for missing translations using hugo server --i18n-warnings taxonomy names (tags, categories, etc...) are translated in i18n as well (translate the key) menus are translated manually in the config files config/_default/menus/menu.xx.toml menu's languages list are semi-hardcoded. You may chose another text for the menu entry with languageMenuName. Please, do better and create a PR for that. content must be translated individually. Read the official documentation for information on how to do it. note: if you do NOT want any translations (thus removing the translations menu entry), then you must not have any translations. In the exampleSite that's as easy as removing the extra translations from the config/_default/... or executing this onliner: sed '/^\[pt]$/,$d' -i config/_default/languages.toml &amp;&amp; rm config/_default/menus/menu.pt.toml Comments Clarity supports Hugo built-in Disqus partial, you can enable Disqus simply by setting disqusShortname in your configuration file. ⚠️ disqusShortname should be placed in root level of configuration. You can also create a file named layouts/partials/comments.html for customizing the comments, checkout Comments Alternatives for details.]`.toLowerCase(),
  },
  {
    "link": "https://y-net.dev/docs/clarity/images/",
    "title": "Manipulating Images",
    "body": `[Images Image figure captions You have the option of adding captions to images in blog posts and automatically prepending a desired string such as &quot;Figure N&quot; to the alt text. This is controlled via two global settings. figurePositionLabel is a string which will be prepended to any alt text of an article image. By default, this is set to &quot;Figure.&quot; And figurePositionShow controls, globally, whether to show this label. It does not affect whether to show the image alt text, only the prefix figure caption. For more granular control, figurePositionShow can be overridden at the article level if desired. The number will be automatically calculated and assigned after the figurePositionLabel text starting from the top of the article and counting down. Featured images will be excluded from this figuration. Image figure captions example In this example, figurePositionLabel is set to &quot;Figure&quot; in config.toml and this is the first image in a given article. 1 ![Antrea Kubernetes nodes prepared](./images/image-figure.png) Inline images To make a blog image inline, append :inline to its alt text. Typically, inline images will have no alt text associated with them. Inline images example 1 2 3 4 5 6 &lt;!-- some image without alt text --&gt; ![:inline](someImageUrl) &lt;!-- some image with alt text --&gt; ![some alt text:inline](someOtherImageUrl) Float images to the left To align a blog image to the left, append :left to its alt text. Article text will then flow to the right of the image. Float images left example 1 2 3 4 5 6 &lt;!-- some image without alt text --&gt; ![:left](someImageUrl) &lt;!-- some image with alt text --&gt; ![some alt text:left](someOtherImageUrl) Add classes to images To add a class image to the left, append ::&lt;classname&gt; to its alt text. You can also add multiple classes to an image separated by space. ::&lt;classname1&gt; &lt;classname2&gt;. Image class example 1 2 3 4 5 6 &lt;!-- some image without alt text --&gt; ![::img-medium](someImageUrl) &lt;!-- some image with alt text --&gt; ![some alt text::img-large img-shadow](someOtherImageUrl) Article thumbnail image Blog articles can specify a thumbnail image which will be displayed to the left of the card on the home page. Thumbnails should be square (height:width ratio of 1:1) and a suggested dimension of 150 x 150 pixels. They will be specified using a frontmatter variable as follows: 1 2 3 ...thumbnail:&#34;images/2020-04/capv-overview/thumbnail.jpg&#34;... The thumbnail image will take precedence on opengraph share tags if the shareImage parameter is not specified. Article featured image Each article can specify an image that appears at the top of the content. When sharing the blog article on social media, if a thumnail is not specified, the featured image will be used as a fallback on opengraph share tags. 1 2 3 ...featureImage:&#34;images/2020-04/capv-overview/featured.jpg&#34;... Share Image Sometimes, you want to explicitly set the image that will be used in the preview when you share an article on social media. You can do so in the front matter. 1 2 3 ...shareImage = &#34;images/theImageToBeUsedOnShare.png&#34;... Note that if a share image is not specified, the order of precedence that will be used to determine which image applies is thumbnail =&gt; featureImage =&gt; fallbackOgImage. When sharing a link to the home page address of the site (as opposed to a specific article), the fallbackOgImage will be used. Align logo You can left align or center your site's logo. 1 2 3 ...centerLogo = true# Change to false to align left... If no logo is specified, the title of the site will appear in its place.]`.toLowerCase(),
  },
  {
    "link": "https://y-net.dev/docs/clarity/blogging/",
    "title": "Blogging",
    "body": `[Blog directory Edit the config.toml file and change the mainSections key. Values will be directories where the blogs reside. 1 2 3 4 [params]...mainSections = [&#34;posts&#34;, &#34;docs&#34;, &#34;blogs&#34;]... For more info, see the Hugo docs. Mobile menu positioning The navigation menu when mobile browsing can be configured in config.toml to open right or left depending on preference. The &quot;hamburger&quot; menu icon will always display in the upper right hand corner regardless. 1 2 3 4 [params]...mobileNavigation = &#34;left&#34;# Mobile nav menu will open to the left of the screen.... Tags and Taxonomies Show number of tags The number of tags and taxonomies (including categories) that should be shown can be configured so that any more than this value will only be accessible when clicking the All Tags button. This is to ensure a large number of tags or categories can be easily managed without consuming excess screen real estate. Edit the numberOfTagsShown parameter and set accordingly. 1 2 3 4 [params]...numberOfTagsShown = 14# Applies for all other default &amp; custom taxonomies. e.g categories, brands see https://gohugo.io/content-management/taxonomies#what-is-a-taxonomy... Number of tags example Table of contents Each article can optionally have a table of contents (TOC) generated for it based on top-level links. By configuring the toc parameter in the article frontmatter and setting it to true, a TOC will be generated only for that article. The TOC will then render under the featured image. Table of contents (TOC) example]`.toLowerCase(),
  },
  {
    "link": "https://y-net.dev/search/",
    "title": "Search",
    "body": `[]`.toLowerCase(),
  },
  {
    "link": "https://y-net.dev/docs/clarity/syntax-highlighting/",
    "title": "Syntax Highlighting",
    "body": `[Code Display line numbers Choose whether to display line numbers within a code block globally with the parameter codeLineNumbers setting to true or false. 1 2 3 4 [params]...codeLineNumbers = true# Shows line numbers for all code blocks globally.... Limit code block height You can globally control the number of lines which are displayed by default for your code blocks. Code which has the number of lines exceed this value will dynamically cause two code block expansion buttons to appear, allowing the user to expand to full length and contract. This is useful when sharing code or scripts with tens or hundreds of lines where you wish to control how many are displayed. Under params in config.toml file, add a value as follows: 1 2 3 4 [params]...codeMaxLines = 10# Maximum number of lines to be shown by default across all articles.... If the value already exists, change it to the desired number. This will apply globally. If you need more granular control, this parameter can be overridden at the blog article level. Add the same value to your article frontmatter as follows: 1 2 3 ...codeMaxLines = 15# Maximum number of lines to be shown in code blocks in this blog post.... If codeMaxLines is specified both in config.toml and in the article frontmatter, the value specified in the article frontmatter will apply to the given article. In the above example, the global default is 10 and yet the article value is 15 so code blocks in this article will auto-collapse after 15 lines. If codeMaxLines is not specified anywhere, an internal default value of 100 will be assumed.]`.toLowerCase(),
  },
  {
    "link": "https://y-net.dev/docs/clarity/theme-overrides/",
    "title": "Theme Overrides",
    "body": `[Custom CSS and JS To minimize HTTP requests per page, we would recommend loading CSS styles and JavaScript helpers in single bundles. That is to say, one CSS file and one JavaScript file. Using Hugo minify functions, these files will be minified to optimize the size. Going by the above 👆🏻 reason, we recommend adding custom CSS and JS via this custom SASS file and custom JavaScript file. However, sometimes you may need to load additional style or script files. In such cases, you can add custom .css and .js files by listing them in the config.toml file (see the snippet below). Similar to images, these paths should be relative to the static directory. 1 2 3 4 5 [params]...customCSS = [&#34;css/custom.css&#34;]# Include custom CSS filescustomJS = [&#34;js/custom.js&#34;]# Include custom JS files... Pro Tip: You can change the theme colors via the this variable's SASS file Hooks Clarity provides some hooks for adding code on page. If you need to add some code(CSS import, HTML meta or similar) to the head section on every page, add a partial to your project: layouts/partials/hooks/head-end.html Similar, if you want to add some code right before the body end, create your own version of the following file: layouts/partials/hooks/body-end.html]`.toLowerCase(),
  },
  {
    "link": "https://y-net.dev/",
    "title": "Y-net",
    "body": `[事業内容 ネットワーク運用事業 ブログ運用 doornocへのWebシステム提供 Read the Docs Download Theme --]`.toLowerCase(),
  },
];

const searchKeys = ['title', 'link', 'body', 'id'];

const searchPageElement = elem('#searchpage');

const searchOptions = {
  ignoreLocation: true,
  findAllMatches: true,
  includeScore: true,
  shouldSort: true,
  keys: searchKeys,
  threshold: 0.0
};

const index = new Fuse(idx, searchOptions);

function minQueryLen(query) {
  query = query.trim();
  const queryIsFloat = parseFloat(query);
  const minimumQueryLength = queryIsFloat ? 1 : 2;
  console.log(query, queryIsFloat, minimumQueryLength);
  return minimumQueryLength;
}

function searchResults(results=[], query="", passive = false) {
  let resultsFragment = new DocumentFragment();
  let showResults = elem('.search_results');
  if(passive) {
    showResults = searchPageElement;
  }
  emptyEl(showResults);

  const queryLen = query.length;
  const requiredQueryLen = minQueryLen(query);

  if(results.length && queryLen >= requiredQueryLen) {
    console.log('hmm');
    let resultsTitle = createEl('h3');
    resultsTitle.className = 'search_title';
    resultsTitle.innerText = quickLinks;
    if(passive) {
      resultsTitle.innerText = searchResultsLabel;
    }
    resultsFragment.appendChild(resultsTitle);
    if(!searchPageElement) {
      results = results.slice(0,8);
    } else {
      results = results.slice(0,12);
    }
    results.forEach(function(result){
      let item = createEl('a');
      item.href = `${result.link}?query=${query}`;
      item.className = 'search_result';
      item.style.order = result.score;
      if(passive) {
        pushClass(item, 'passive');
        let itemTitle = createEl('h3');
        itemTitle.textContent = result.title;
        item.appendChild(itemTitle);

        let itemDescription = createEl('p');
        // position of first search term instance
        let queryInstance = result.body.indexOf(query);
        itemDescription.textContent = `... ${result.body.substring(queryInstance, queryInstance + 200)} ...`;
        item.appendChild(itemDescription);
      } else {
        item.textContent = result.title;
      }
      resultsFragment.appendChild(item);
    });
  }

  if(queryLen >= requiredQueryLen) {
    if (!results.length) {
      showResults.innerHTML = `<span class="search_result">${noMatchesFound}</span>`;
    }
  } else {
    if (queryLen > 1) {
      showResults.innerHTML = `<label for="find" class="search_result">${shortSearchQuery}</label>`;
    } else {
      showResults.innerHTML = `<label for="find" class="search_result">${typeToSearch}</label>`;
    }
  }

  showResults.appendChild(resultsFragment);
}

function search(searchTerm, passive = false) {
  if(searchTerm.length) {
    let rawResults = index.search(searchTerm);
    rawResults = rawResults.map(function(result){
      const score = result.score;
      const resultItem = result.item;
      resultItem.score = (parseFloat(score) * 50).toFixed(0);
      return resultItem;
    });

    passive ? searchResults(rawResults, searchTerm, true) : searchResults(rawResults, searchTerm);

  } else {
    passive ? searchResults([], "", true) : searchResults();
  }
}

function liveSearch() {
  const searchField = elem('.search_field');

  if (searchField) {
    searchField.addEventListener('input', function() {
      const searchTerm = searchField.value.trim().toLowerCase();
      search(searchTerm);
    });

    if(!searchPageElement) {
      searchField.addEventListener('search', function(){
        const searchTerm = searchField.value.trim().toLowerCase();
        if(searchTerm.length)  {
          window.location.href = `${parentURL}search/?query=${searchTerm}`;
        }
      });
    }
  }
}

function findQuery(query = 'query') {
  const urlParams = new URLSearchParams(window.location.search);
  if(urlParams.has(query)){
    let c = urlParams.get(query);
    return c;
  }
  return "";
}

function passiveSearch() {
  if(searchPageElement) {
    const searchTerm = findQuery();
    search(searchTerm, true);

    // search actively after search page has loaded
    const searchField = elem('.search_field');

    if(searchField) {
      searchField.addEventListener('input', function() {
        const searchTerm = searchField.value.trim().toLowerCase();
        search(searchTerm, true);
        wrapText(searchTerm, main);
      });
    }
  }
}

function hasSearchResults() {
  const searchResults = elem('.results');
  const body = searchResults.innerHTML.length;
  return [searchResults, body]
}

function clearSearchResults() {
  let searchResults = hasSearchResults();
  let actionable = searchResults[1];
  if(actionable) {
    searchResults = searchResults[0];
    searchResults.innerHTML = "";
    // clear search field
    const searchField = elem('.search_field');
    searchField.value = "";
  }
}

function onEscape(fn){
  window.addEventListener('keydown', function(event){
    if(event.code === "Escape") {
      fn();
    }
  });
}

let main = elem('main');
if(!main) {
  main = elem('.main');
}

window.addEventListener('load', function() {
  searchPageElement ? false : liveSearch();
  passiveSearch();

  wrapText(findQuery(), main);

  onEscape(clearSearchResults);
});

window.addEventListener('click', function(event){
  const target = event.target;
  const isSearch = target.closest('.search') || target.matches('.search');
  if(!isSearch && !searchPageElement) {
    clearSearchResults();
  }
});
