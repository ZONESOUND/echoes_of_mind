!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=8)}([function(e,t,n){"use strict";(function(e,r){n.d(t,"a",(function(){return T})),n.d(t,"b",(function(){return D})),n.d(t,"c",(function(){return j})),n.d(t,"d",(function(){return J})),n.d(t,"e",(function(){return a})),n.d(t,"f",(function(){return c})),n.d(t,"g",(function(){return u})),n.d(t,"h",(function(){return f})),n.d(t,"i",(function(){return d})),n.d(t,"j",(function(){return p})),n.d(t,"k",(function(){return W})),n.d(t,"l",(function(){return x})),n.d(t,"m",(function(){return X})),n.d(t,"n",(function(){return g})),n.d(t,"o",(function(){return $})),n.d(t,"p",(function(){return m})),n.d(t,"q",(function(){return ne})),n.d(t,"r",(function(){return Y})),n.d(t,"s",(function(){return w})),n.d(t,"t",(function(){return _})),n.d(t,"u",(function(){return b})),n.d(t,"v",(function(){return C})),n.d(t,"w",(function(){return ae})),n.d(t,"x",(function(){return E})),n.d(t,"y",(function(){return U})),n.d(t,"z",(function(){return I})),n.d(t,"A",(function(){return S})),n.d(t,"B",(function(){return z})),n.d(t,"C",(function(){return N})),n.d(t,"D",(function(){return A})),n.d(t,"E",(function(){return k})),n.d(t,"F",(function(){return P})),n.d(t,"G",(function(){return O})),n.d(t,"H",(function(){return H})),n.d(t,"I",(function(){return M})),n.d(t,"J",(function(){return V})),n.d(t,"K",(function(){return K})),n.d(t,"L",(function(){return G})),n.d(t,"M",(function(){return B})),n.d(t,"N",(function(){return se})),n.d(t,"O",(function(){return oe})),n.d(t,"P",(function(){return q})),n.d(t,"Q",(function(){return te})),n.d(t,"R",(function(){return re})),n.d(t,"S",(function(){return ie})),n.d(t,"T",(function(){return R}));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const i=!1,o=!1,s="${JSCORE_VERSION}",a=function(e,t){if(!e)throw c(t)},c=function(e){return new Error("Firebase Database ("+s+") INTERNAL ASSERT FAILED: "+e)},l=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296==(64512&i)&&r+1<e.length&&56320==(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},u={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let t=0;t<e.length;t+=3){const i=e[t],o=t+1<e.length,s=o?e[t+1]:0,a=t+2<e.length,c=a?e[t+2]:0,l=i>>2,u=(3&i)<<4|s>>4;let h=(15&s)<<2|c>>6,d=63&c;a||(d=64,o||(h=64)),r.push(n[l],n[u],n[h],n[d])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(l(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&o)}else if(i>239&&i<365){const o=((7&i)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[r++]=String.fromCharCode(55296+(o>>10)),t[r++]=String.fromCharCode(56320+(1023&o))}else{const o=e[n++],s=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&o)<<6|63&s)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let t=0;t<e.length;){const i=n[e.charAt(t++)],o=t<e.length?n[e.charAt(t)]:0;++t;const s=t<e.length?n[e.charAt(t)]:64;++t;const a=t<e.length?n[e.charAt(t)]:64;if(++t,null==i||null==o||null==s||null==a)throw new h;const c=i<<2|o>>4;if(r.push(c),64!==s){const e=o<<4&240|s>>2;if(r.push(e),64!==a){const e=s<<6&192|a;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const d=function(e){const t=l(e);return u.encodeByteArray(t,!0)},p=function(e){return d(e).replace(/\./g,"")},f=function(e){try{return u.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function g(e){return m(void 0,e)}function m(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:return new Date(t.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(const n in t)t.hasOwnProperty(n)&&"__proto__"!==n&&(e[n]=m(e[n],t[n]));return e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const v=()=>
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==e)return e;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,y=()=>{try{return v()||(()=>{if(void 0===r||void 0===r.env)return;const e=r.env.__FIREBASE_DEFAULTS__;return e?JSON.parse(e):void 0})()||(()=>{if("undefined"==typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}const t=e&&f(e[1]);return t&&JSON.parse(t)})()}catch(e){return void console.info("Unable to get __FIREBASE_DEFAULTS__ due to: "+e)}},_=e=>{var t,n;return null===(n=null===(t=y())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},b=e=>{const t=_(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),r]:[t.substring(0,n),r]},w=()=>{var e;return null===(e=y())||void 0===e?void 0:e.config},C=e=>{var t;return null===(t=y())||void 0===t?void 0:t["_"+e]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class T{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch(()=>{}),1===e.length?e(t):e(t,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n=t||"demo-project",r=e.iat||0,i=e.sub||e.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:"https://securetoken.google.com/"+n,aud:n,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e);return[p(JSON.stringify({alg:"none",type:"JWT"})),p(JSON.stringify(o)),""].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function k(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(E())}function I(){return"object"==typeof self&&self.self===self}function S(){const e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function O(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function N(){const e=E();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function P(){return!0===i||!0===o}function A(){try{return"object"==typeof indexedDB}catch(e){return!1}}function R(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}})}class j extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,j.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,D.prototype.create)}}class D{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?function(e,t){return e.replace(L,(e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`})}(i,n):"Error",s=`${this.serviceName}: ${o} (${r}).`;return new j(r,s,n)}}const L=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M(e){return JSON.parse(e)}function q(e){return JSON.stringify(e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F=function(e){let t={},n={},r={},i="";try{const o=e.split(".");t=M(f(o[0])||""),n=M(f(o[1])||""),i=o[2],r=n.d||{},delete n.d}catch(e){}return{header:t,claims:n,data:r,signature:i}},H=function(e){const t=F(e).claims;return!!t&&"object"==typeof t&&t.hasOwnProperty("iat")},U=function(e){const t=F(e).claims;return"object"==typeof t&&!0===t.admin};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function W(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function B(e,t){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0}function z(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function V(e,t,n){const r={};for(const i in e)Object.prototype.hasOwnProperty.call(e,i)&&(r[i]=t.call(n,e[i],i,e));return r}function $(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const n=e[i],o=t[i];if(Q(n)&&Q(o)){if(!$(n,o))return!1}else if(n!==o)return!1}for(const e of r)if(!n.includes(e))return!1;return!0}function Q(e){return null!==e&&"object"==typeof e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function K(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function G(e){const t={};return e.replace(/^\?/,"").split("&").forEach(e=>{if(e){const[n,r]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(r)}}),t}function Y(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const n=this.W_;if("string"==typeof e)for(let r=0;r<16;r++)n[r]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let r=0;r<16;r++)n[r]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let e=16;e<80;e++){const t=n[e-3]^n[e-8]^n[e-14]^n[e-16];n[e]=4294967295&(t<<1|t>>>31)}let r,i,o=this.chain_[0],s=this.chain_[1],a=this.chain_[2],c=this.chain_[3],l=this.chain_[4];for(let e=0;e<80;e++){e<40?e<20?(r=c^s&(a^c),i=1518500249):(r=s^a^c,i=1859775393):e<60?(r=s&a|c&(s|a),i=2400959708):(r=s^a^c,i=3395469782);const t=(o<<5|o>>>27)+r+l+i+n[e]&4294967295;l=c,c=a,a=4294967295&(s<<30|s>>>2),s=o,o=t}this.chain_[0]=this.chain_[0]+o&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+a&4294967295,this.chain_[3]=this.chain_[3]+c&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,t){if(null==e)return;void 0===t&&(t=e.length);const n=t-this.blockSize;let r=0;const i=this.buf_;let o=this.inbuf_;for(;r<t;){if(0===o)for(;r<=n;)this.compress_(e,r),r+=this.blockSize;if("string"==typeof e){for(;r<t;)if(i[o]=e.charCodeAt(r),++o,++r,o===this.blockSize){this.compress_(i),o=0;break}}else for(;r<t;)if(i[o]=e[r],++o,++r,o===this.blockSize){this.compress_(i),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let e=this.blockSize-1;e>=56;e--)this.buf_[e]=255&t,t/=256;this.compress_(this.buf_);let n=0;for(let t=0;t<5;t++)for(let r=24;r>=0;r-=8)e[n]=this.chain_[t]>>r&255,++n;return e}}function X(e,t){const n=new Z(e,t);return n.subscribe.bind(n)}class Z{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(e=>{this.error(e)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=function(e,t){if("object"!=typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=ee),void 0===r.error&&(r.error=ee),void 0===r.complete&&(r.complete=ee);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}}),this.observers.push(r),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}})}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function ee(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const te=function(e,t,n,r){let i;if(r<t?i="at least "+t:r>n&&(i=0===n?"none":"no more than "+n),i){throw new Error(e+" failed: Was called with "+r+(1===r?" argument.":" arguments.")+" Expects "+i+".")}};function ne(e,t){return`${e} failed: ${t} argument `}function re(e,t,n,r){if((!r||n)&&"function"!=typeof n)throw new Error(ne(e,t)+"must be a valid function.")}function ie(e,t,n,r){if((!r||n)&&("object"!=typeof n||null===n))throw new Error(ne(e,t)+"must be a valid context object.")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oe=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);if(i>=55296&&i<=56319){const t=i-55296;r++,a(r<e.length,"Surrogate pair missing trail surrogate.");i=65536+(t<<10)+(e.charCodeAt(r)-56320)}i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):i<65536?(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},se=function(e){let t=0;for(let n=0;n<e.length;n++){const r=e.charCodeAt(n);r<128?t++:r<2048?t+=2:r>=55296&&r<=56319?(t+=4,n++):t+=3}return t};
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ae(e){return e&&e._delegate?e._delegate:e}}).call(this,n(13),n(6))},function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return fi})),n.d(t,"b",(function(){return gi})),n.d(t,"c",(function(){return lt})),n.d(t,"d",(function(){return _i})),n.d(t,"e",(function(){return po})),n.d(t,"f",(function(){return l})),n.d(t,"g",(function(){return Or})),n.d(t,"h",(function(){return Nr})),n.d(t,"i",(function(){return Ti})),n.d(t,"j",(function(){return yo})),n.d(t,"k",(function(){return wo})),n.d(t,"l",(function(){return Wi})),n.d(t,"m",(function(){return zi})),n.d(t,"n",(function(){return co})),n.d(t,"o",(function(){return vo})),n.d(t,"p",(function(){return mo})),n.d(t,"q",(function(){return Ni})),n.d(t,"r",(function(){return _o})),n.d(t,"s",(function(){return bo})),n.d(t,"t",(function(){return xo})),n.d(t,"u",(function(){return Yi})),n.d(t,"v",(function(){return Xi})),n.d(t,"w",(function(){return Fi})),n.d(t,"x",(function(){return Di})),n.d(t,"y",(function(){return Li})),n.d(t,"z",(function(){return Mi})),n.d(t,"A",(function(){return qi})),n.d(t,"B",(function(){return ji})),n.d(t,"C",(function(){return eo})),n.d(t,"D",(function(){return no})),n.d(t,"E",(function(){return io})),n.d(t,"F",(function(){return so})),n.d(t,"G",(function(){return xi})),n.d(t,"H",(function(){return lo})),n.d(t,"I",(function(){return wi})),n.d(t,"J",(function(){return Ci})),n.d(t,"K",(function(){return Ei})),n.d(t,"L",(function(){return ko})),n.d(t,"M",(function(){return To})),n.d(t,"N",(function(){return ki})),n.d(t,"O",(function(){return Ii})),n.d(t,"P",(function(){return Si})),n.d(t,"Q",(function(){return Ki})),n.d(t,"R",(function(){return $i})),n.d(t,"S",(function(){return Oi}));var r=n(2),i=n(4),o=n(0),s=n(5);const a="@firebase/database";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let c="";function l(e){c=e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){null==t?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Object(o.P)(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return null==t?null:Object(o.I)(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){null==t?delete this.cache_[e]:this.cache_[e]=t}get(e){return Object(o.k)(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d=function(e){try{if("undefined"!=typeof window&&void 0!==window[e]){const t=window[e];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new u(t)}}catch(e){}return new h},p=d("localStorage"),f=d("sessionStorage"),g=new s.b("@firebase/database"),m=function(){let e=1;return function(){return e++}}(),v=function(e){const t=Object(o.O)(e),n=new o.d;n.update(t);const r=n.digest();return o.g.encodeByteArray(r)},y=function(...e){let t="";for(let n=0;n<e.length;n++){const r=e[n];Array.isArray(r)||r&&"object"==typeof r&&"number"==typeof r.length?t+=y.apply(null,r):t+="object"==typeof r?Object(o.P)(r):r,t+=" "}return t};let _=null,b=!0;const w=function(e,t){Object(o.e)(!t||!0===e||!1===e,"Can't turn on custom loggers persistently."),!0===e?(g.logLevel=s.a.VERBOSE,_=g.log.bind(g),t&&f.set("logging_enabled",!0)):"function"==typeof e?_=e:(_=null,f.remove("logging_enabled"))},C=function(...e){if(!0===b&&(b=!1,null===_&&!0===f.get("logging_enabled")&&w(!0)),_){const t=y.apply(null,e);_(t)}},T=function(e){return function(...t){C(e,...t)}},x=function(...e){const t="FIREBASE INTERNAL ERROR: "+y(...e);g.error(t)},E=function(...e){const t="FIREBASE FATAL ERROR: "+y(...e);throw g.error(t),new Error(t)},k=function(...e){const t="FIREBASE WARNING: "+y(...e);g.warn(t)},I=function(e){return"number"==typeof e&&(e!=e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},S="[MIN_NAME]",O="[MAX_NAME]",N=function(e,t){if(e===t)return 0;if(e===S||t===O)return-1;if(t===S||e===O)return 1;{const n=q(e),r=q(t);return null!==n?null!==r?n-r==0?e.length-t.length:n-r:-1:null!==r?1:e<t?-1:1}},P=function(e,t){return e===t?0:e<t?-1:1},A=function(e,t){if(t&&e in t)return t[e];throw new Error("Missing required key ("+e+") in object: "+Object(o.P)(t))},R=function(e){if("object"!=typeof e||null===e)return Object(o.P)(e);const t=[];for(const n in e)t.push(n);t.sort();let n="{";for(let r=0;r<t.length;r++)0!==r&&(n+=","),n+=Object(o.P)(t[r]),n+=":",n+=R(e[t[r]]);return n+="}",n},j=function(e,t){const n=e.length;if(n<=t)return[e];const r=[];for(let i=0;i<n;i+=t)i+t>n?r.push(e.substring(i,n)):r.push(e.substring(i,i+t));return r};function D(e,t){for(const n in e)e.hasOwnProperty(n)&&t(n,e[n])}const L=function(e){Object(o.e)(!I(e),"Invalid JSON number");let t,n,r,i,s;0===e?(n=0,r=0,t=1/e==-1/0?1:0):(t=e<0,(e=Math.abs(e))>=Math.pow(2,-1022)?(i=Math.min(Math.floor(Math.log(e)/Math.LN2),1023),n=i+1023,r=Math.round(e*Math.pow(2,52-i)-Math.pow(2,52))):(n=0,r=Math.round(e/Math.pow(2,-1074))));const a=[];for(s=52;s;s-=1)a.push(r%2?1:0),r=Math.floor(r/2);for(s=11;s;s-=1)a.push(n%2?1:0),n=Math.floor(n/2);a.push(t?1:0),a.reverse();const c=a.join("");let l="";for(s=0;s<64;s+=8){let e=parseInt(c.substr(s,8),2).toString(16);1===e.length&&(e="0"+e),l+=e}return l.toLowerCase()};const M=new RegExp("^-?(0*)\\d{1,10}$"),q=function(e){if(M.test(e)){const t=Number(e);if(t>=-2147483648&&t<=2147483647)return t}return null},F=function(e){try{e()}catch(e){setTimeout(()=>{const t=e.stack||"";throw k("Exception was thrown by user callback.",t),e},Math.floor(0))}},H=function(e,t){const n=setTimeout(e,t);return"number"==typeof n&&"undefined"!=typeof Deno&&Deno.unrefTimer?Deno.unrefTimer(n):"object"==typeof n&&n.unref&&n.unref(),n};
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class U{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=null==t?void 0:t.getImmediate({optional:!0}),this.appCheck||null==t||t.get().then(e=>this.appCheck=e)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((t,n)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,n):t(null)},0)})}addTokenChangeListener(e){var t;null===(t=this.appCheckProvider)||void 0===t||t.get().then(t=>t.addTokenListener(e))}notifyForInvalidToken(){k(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{constructor(e,t,n){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=n,this.auth_=null,this.auth_=n.getImmediate({optional:!0}),this.auth_||n.onInit(e=>this.auth_=e)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(e=>e&&"auth/token-not-initialized"===e.code?(C("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(e)):new Promise((t,n)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,n):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',k(e)}}class B{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}B.OWNER="owner";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const z=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class V{constructor(e,t,n,r,i=!1,o="",s=!1,a=!1){this.secure=t,this.namespace=n,this.webSocketOnly=r,this.nodeAdmin=i,this.persistenceKey=o,this.includeNamespaceInQueryParams=s,this.isUsingEmulator=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=p.get("host:"+e)||this._host}isCacheableHost(){return"s-"===this.internalHost.substr(0,2)}isCustomHost(){return"firebaseio.com"!==this._domain&&"firebaseio-demo.com"!==this._domain}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&p.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?"?ns="+this.namespace:"";return`${e}${this.host}/${t}`}}function $(e,t,n){let r;if(Object(o.e)("string"==typeof t,"typeof type must == string"),Object(o.e)("object"==typeof n,"typeof params must == object"),"websocket"===t)r=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?";else{if("long_polling"!==t)throw new Error("Unknown connection type: "+t);r=(e.secure?"https://":"http://")+e.internalHost+"/.lp?"}(function(e){return e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams})(e)&&(n.ns=e.namespace);const i=[];return D(n,(e,t)=>{i.push(e+"="+t)}),r+i.join("&")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(){this.counters_={}}incrementCounter(e,t=1){Object(o.k)(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return Object(o.n)(this.counters_)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K={},G={};function Y(e){const t=e.toString();return K[t]||(K[t]=new Q),K[t]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class J{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const e=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let t=0;t<e.length;++t)e[t]&&F(()=>{this.onMessage_(e[t])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(e,t,n,r,i,o,s){this.connId=e,this.repoInfo=t,this.applicationId=n,this.appCheckToken=r,this.authToken=i,this.transportSessionId=o,this.lastSessionId=s,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=T(e),this.stats_=Y(t),this.urlFn=e=>(this.appCheckToken&&(e.ac=this.appCheckToken),$(t,"long_polling",e))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new J(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(3e4)),function(e){if(Object(o.F)()||"complete"===document.readyState)e();else{let t=!1;const n=function(){document.body?t||(t=!0,e()):setTimeout(n,Math.floor(10))};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{"complete"===document.readyState&&n()}),window.attachEvent("onload",n))}}(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Z((...e)=>{const[t,n,r,i,o]=e;if(this.incrementIncomingBytes_(e),this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,"start"===t)this.id=n,this.password=r;else{if("close"!==t)throw new Error("Unrecognized command received: "+t);n?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(n,()=>{this.onClosed_()})):this.onClosed_()}},(...e)=>{const[t,n]=e;this.incrementIncomingBytes_(e),this.myPacketOrderer.handleResponse(t,n)},()=>{this.onClosed_()},this.urlFn);const e={start:"t"};e.ser=Math.floor(1e8*Math.random()),this.scriptTagHolder.uniqueCallbackIdentifier&&(e.cb=this.scriptTagHolder.uniqueCallbackIdentifier),e.v="5",this.transportSessionId&&(e.s=this.transportSessionId),this.lastSessionId&&(e.ls=this.lastSessionId),this.applicationId&&(e.p=this.applicationId),this.appCheckToken&&(e.ac=this.appCheckToken),"undefined"!=typeof location&&location.hostname&&z.test(location.hostname)&&(e.r="f");const t=this.urlFn(e);this.log_("Connecting via long-poll to "+t),this.scriptTagHolder.addTag(t,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){X.forceAllow_=!0}static forceDisallow(){X.forceDisallow_=!0}static isAvailable(){return!Object(o.F)()&&(!!X.forceAllow_||!(X.forceDisallow_||"undefined"==typeof document||null==document.createElement||"object"==typeof window&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href)||"object"==typeof Windows&&"object"==typeof Windows.UI))}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=Object(o.P)(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=Object(o.i)(t),r=j(n,1840);for(let e=0;e<r.length;e++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,r.length,r[e]),this.curSegmentNum++}addDisconnectPingFrame(e,t){if(Object(o.F)())return;this.myDisconnFrame=document.createElement("iframe");const n={dframe:"t"};n.id=e,n.pw=t,this.myDisconnFrame.src=this.urlFn(n),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=Object(o.P)(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class Z{constructor(e,t,n,r){if(this.onDisconnect=n,this.urlFn=r,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(1e8*Math.random()),this.sendNewPolls=!0,Object(o.F)())this.commandCB=e,this.onMessageCB=t;else{this.uniqueCallbackIdentifier=m(),window["pLPCommand"+this.uniqueCallbackIdentifier]=e,window["pRTLPCB"+this.uniqueCallbackIdentifier]=t,this.myIFrame=Z.createIFrame_();let n="";if(this.myIFrame.src&&"javascript:"===this.myIFrame.src.substr(0,"javascript:".length)){n='<script>document.domain="'+document.domain+'";<\/script>'}const r="<html><body>"+n+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(r),this.myIFrame.doc.close()}catch(e){C("frame writing exception"),e.stack&&C(e.stack),C(e)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",!document.body)throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";document.body.appendChild(e);try{e.contentWindow.document||C("No IE domain setting required")}catch(t){const n=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+n+"';document.close();})())"}return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{null!==this.myIFrame&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e.id=this.myID,e.pw=this.myPW,e.ser=this.currentSerial;let t=this.urlFn(e),n="",r=0;for(;this.pendingSegs.length>0;){if(!(this.pendingSegs[0].d.length+30+n.length<=1870))break;{const e=this.pendingSegs.shift();n=n+"&seg"+r+"="+e.seg+"&ts"+r+"="+e.ts+"&d"+r+"="+e.d,r++}}return t+=n,this.addLongPollTag_(t,this.currentSerial),!0}return!1}enqueueSegment(e,t,n){this.pendingSegs.push({seg:e,ts:t,d:n}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const n=()=>{this.outstandingRequests.delete(t),this.newRequest_()},r=setTimeout(n,Math.floor(25e3));this.addTag(e,()=>{clearTimeout(r),n()})}addTag(e,t){Object(o.F)()?this.doNodeLongPoll(e,t):setTimeout(()=>{try{if(!this.sendNewPolls)return;const n=this.myIFrame.doc.createElement("script");n.type="text/javascript",n.async=!0,n.src=e,n.onload=n.onreadystatechange=function(){const e=n.readyState;e&&"loaded"!==e&&"complete"!==e||(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),t())},n.onerror=()=>{C("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(n)}catch(e){}},Math.floor(1))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ee=null;"undefined"!=typeof MozWebSocket?ee=MozWebSocket:"undefined"!=typeof WebSocket&&(ee=WebSocket);class te{constructor(e,t,n,r,i,o,s){this.connId=e,this.applicationId=n,this.appCheckToken=r,this.authToken=i,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=T(this.connId),this.stats_=Y(t),this.connURL=te.connectionURL_(t,o,s,r,n),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,n,r,i){const s={v:"5"};return!Object(o.F)()&&"undefined"!=typeof location&&location.hostname&&z.test(location.hostname)&&(s.r="f"),t&&(s.s=t),n&&(s.ls=n),r&&(s.ac=r),i&&(s.p=i),$(e,"websocket",s)}open(t,n){this.onDisconnect=n,this.onMessage=t,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,p.set("previous_websocket_failure",!0);try{let t;if(Object(o.F)()){const n=this.nodeAdmin?"AdminNode":"Node";t={headers:{"User-Agent":`Firebase/5/${c}/${e.platform}/${n}`,"X-Firebase-GMPID":this.applicationId||""}},this.authToken&&(t.headers.Authorization="Bearer "+this.authToken),this.appCheckToken&&(t.headers["X-Firebase-AppCheck"]=this.appCheckToken);const r=e.env,i=0===this.connURL.indexOf("wss://")?r.HTTPS_PROXY||r.https_proxy:r.HTTP_PROXY||r.http_proxy;i&&(t.proxy={origin:i})}this.mySock=new ee(this.connURL,[],t)}catch(e){this.log_("Error instantiating WebSocket.");const t=e.message||e.data;return t&&this.log_(t),void this.onClosed_()}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=e=>{this.handleIncomingFrame(e)},this.mySock.onerror=e=>{this.log_("WebSocket error.  Closing connection.");const t=e.message||e.data;t&&this.log_(t),this.onClosed_()}}start(){}static forceDisallow(){te.forceDisallow_=!0}static isAvailable(){let e=!1;if("undefined"!=typeof navigator&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,n=navigator.userAgent.match(t);n&&n.length>1&&parseFloat(n[1])<4.4&&(e=!0)}return!e&&null!==ee&&!te.forceDisallow_}static previouslyFailed(){return p.isInMemoryStorage||!0===p.get("previous_websocket_failure")}markConnectionHealthy(){p.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const e=this.frames.join("");this.frames=null;const t=Object(o.I)(e);this.onMessage(t)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(Object(o.e)(null===this.frames,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(null===this.mySock)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),null!==this.frames)this.appendFrame_(t);else{const e=this.extractFrameCount_(t);null!==e&&this.appendFrame_(e)}}send(e){this.resetKeepAlive();const t=Object(o.P)(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=j(t,16384);n.length>1&&this.sendString_(String(n.length));for(let e=0;e<n.length;e++)this.sendString_(n[e])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(45e3))}sendString_(e){try{this.mySock.send(e)}catch(e){this.log_("Exception thrown from WebSocket.send():",e.message||e.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}te.responsesRequiredToBeHealthy=2,te.healthyTimeout=3e4;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ne{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[X,te]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=te&&te.isAvailable();let n=t&&!te.previouslyFailed();if(e.webSocketOnly&&(t||k("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),n=!0),n)this.transports_=[te];else{const e=this.transports_=[];for(const t of ne.ALL_TRANSPORTS)t&&t.isAvailable()&&e.push(t);ne.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}ne.globalTransportInitialized_=!1;class re{constructor(e,t,n,r,i,o,s,a,c,l){this.id=e,this.repoInfo_=t,this.applicationId_=n,this.appCheckToken_=r,this.authToken_=i,this.onMessage_=o,this.onReady_=s,this.onDisconnect_=a,this.onKill_=c,this.lastSessionId=l,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=T("c:"+this.id+":"),this.transportManager_=new ne(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),n=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,n)},Math.floor(0));const r=e.healthyTimeout||0;r>0&&(this.healthyTimeout_=H(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>102400?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>10240?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(r)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{2!==this.state_&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if("t"in e){const t=e.t;"a"===t?this.upgradeIfSecondaryHealthy_():"r"===t?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),this.tx_!==this.secondaryConn_&&this.rx_!==this.secondaryConn_||this.close()):"o"===t&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=A("t",e),n=A("d",e);if("c"===t)this.onSecondaryControl_(n);else{if("d"!==t)throw new Error("Unknown protocol layer: "+t);this.pendingDataMessages.push(n)}}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:"p",d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:"a",d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:"n",d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=A("t",e),n=A("d",e);"c"===t?this.onControl_(n):"d"===t&&this.onDataMessage_(n)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=A("t",e);if("d"in e){const n=e.d;if("h"===t){const e=Object.assign({},n);this.repoInfo_.isUsingEmulator&&(e.h=this.repoInfo_.host),this.onHandshake_(e)}else if("n"===t){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let e=0;e<this.pendingDataMessages.length;++e)this.onDataMessage_(this.pendingDataMessages[e]);this.pendingDataMessages=[],this.tryCleanupConnection()}else"s"===t?this.onConnectionShutdown_(n):"r"===t?this.onReset_(n):"e"===t?x("Server Error: "+n):"o"===t?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):x("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,n=e.v,r=e.h;this.sessionId=e.s,this.repoInfo_.host=r,0===this.state_&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),"5"!==n&&k("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),n=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,n),H(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(6e4))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,1===this.state_?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),0===this.primaryResponsesRequired_?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):H(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(5e3))}sendPingOnPrimaryIfNecessary_(){this.isHealthy_||1!==this.state_||(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:"p",d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,this.tx_!==e&&this.rx_!==e||this.close()}onConnectionLost_(e){this.conn_=null,e||0!==this.state_?1===this.state_&&this.log_("Realtime connection lost."):(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(p.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(1!==this.state_)throw"Connection is not connected";this.tx_.send(e)}close(){2!==this.state_&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ie{put(e,t,n,r){}merge(e,t,n,r){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,n){}onDisconnectMerge(e,t,n){}onDisconnectCancel(e,t){}reportStats(e){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oe{constructor(e){this.allowedEvents_=e,this.listeners_={},Object(o.e)(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const n=[...this.listeners_[e]];for(let e=0;e<n.length;e++)n[e].callback.apply(n[e].context,t)}}on(e,t,n){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:n});const r=this.getInitialEvent(e);r&&t.apply(n,r)}off(e,t,n){this.validateEventType_(e);const r=this.listeners_[e]||[];for(let e=0;e<r.length;e++)if(r[e].callback===t&&(!n||n===r[e].context))return void r.splice(e,1)}validateEventType_(e){Object(o.e)(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se extends oe{constructor(){super(["online"]),this.online_=!0,"undefined"==typeof window||void 0===window.addEventListener||Object(o.E)()||(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new se}getInitialEvent(e){return Object(o.e)("online"===e,"Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ae{constructor(e,t){if(void 0===t){this.pieces_=e.split("/");let t=0;for(let e=0;e<this.pieces_.length;e++)this.pieces_[e].length>0&&(this.pieces_[t]=this.pieces_[e],t++);this.pieces_.length=t,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)""!==this.pieces_[t]&&(e+="/"+this.pieces_[t]);return e||"/"}}function ce(){return new ae("")}function le(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function ue(e){return e.pieces_.length-e.pieceNum_}function he(e){let t=e.pieceNum_;return t<e.pieces_.length&&t++,new ae(e.pieces_,t)}function de(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function pe(e,t=0){return e.pieces_.slice(e.pieceNum_+t)}function fe(e){if(e.pieceNum_>=e.pieces_.length)return null;const t=[];for(let n=e.pieceNum_;n<e.pieces_.length-1;n++)t.push(e.pieces_[n]);return new ae(t,0)}function ge(e,t){const n=[];for(let t=e.pieceNum_;t<e.pieces_.length;t++)n.push(e.pieces_[t]);if(t instanceof ae)for(let e=t.pieceNum_;e<t.pieces_.length;e++)n.push(t.pieces_[e]);else{const e=t.split("/");for(let t=0;t<e.length;t++)e[t].length>0&&n.push(e[t])}return new ae(n,0)}function me(e){return e.pieceNum_>=e.pieces_.length}function ve(e,t){const n=le(e),r=le(t);if(null===n)return t;if(n===r)return ve(he(e),he(t));throw new Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+e+")")}function ye(e,t){const n=pe(e,0),r=pe(t,0);for(let e=0;e<n.length&&e<r.length;e++){const t=N(n[e],r[e]);if(0!==t)return t}return n.length===r.length?0:n.length<r.length?-1:1}function _e(e,t){if(ue(e)!==ue(t))return!1;for(let n=e.pieceNum_,r=t.pieceNum_;n<=e.pieces_.length;n++,r++)if(e.pieces_[n]!==t.pieces_[r])return!1;return!0}function be(e,t){let n=e.pieceNum_,r=t.pieceNum_;if(ue(e)>ue(t))return!1;for(;n<e.pieces_.length;){if(e.pieces_[n]!==t.pieces_[r])return!1;++n,++r}return!0}class we{constructor(e,t){this.errorPrefix_=t,this.parts_=pe(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let e=0;e<this.parts_.length;e++)this.byteLength_+=Object(o.N)(this.parts_[e]);Ce(this)}}function Ce(e){if(e.byteLength_>768)throw new Error(e.errorPrefix_+"has a key path longer than 768 bytes ("+e.byteLength_+").");if(e.parts_.length>32)throw new Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written (32) or object contains a cycle "+Te(e))}function Te(e){return 0===e.parts_.length?"":"in property '"+e.parts_.join(".")+"'"}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe extends oe{constructor(){let e,t;super(["visible"]),"undefined"!=typeof document&&void 0!==document.addEventListener&&(void 0!==document.hidden?(t="visibilitychange",e="hidden"):void 0!==document.mozHidden?(t="mozvisibilitychange",e="mozHidden"):void 0!==document.msHidden?(t="msvisibilitychange",e="msHidden"):void 0!==document.webkitHidden&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const t=!document[e];t!==this.visible_&&(this.visible_=t,this.trigger("visible",t))},!1)}static getInstance(){return new xe}getInitialEvent(e){return Object(o.e)("visible"===e,"Unknown event type: "+e),[this.visible_]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee extends ie{constructor(e,t,n,r,i,s,a,c){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=n,this.onConnectStatus_=r,this.onServerInfoUpdate_=i,this.authTokenProvider_=s,this.appCheckTokenProvider_=a,this.authOverride_=c,this.id=Ee.nextPersistentConnectionId_++,this.log_=T("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=1e3,this.maxReconnectDelay_=3e5,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c&&!Object(o.F)())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");xe.getInstance().on("visible",this.onVisible_,this),-1===e.host.indexOf("fblocal")&&se.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,n){const r=++this.requestNumber_,i={r:r,a:e,b:t};this.log_(Object(o.P)(i)),Object(o.e)(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(i),n&&(this.requestCBHash_[r]=n)}get(e){this.initConnection_();const t=new o.a,n={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:e=>{const n=e.d;"ok"===e.s?t.resolve(n):t.reject(n)}};this.outstandingGets_.push(n),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),t.promise}listen(e,t,n,r){this.initConnection_();const i=e._queryIdentifier,s=e._path.toString();this.log_("Listen called for "+s+" "+i),this.listens.has(s)||this.listens.set(s,new Map),Object(o.e)(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),Object(o.e)(!this.listens.get(s).has(i),"listen() called twice for same path/queryId.");const a={onComplete:r,hashFn:t,query:e,tag:n};this.listens.get(s).set(i,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,n=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(n)})}sendListen_(e){const t=e.query,n=t._path.toString(),r=t._queryIdentifier;this.log_("Listen on "+n+" for "+r);const i={p:n};e.tag&&(i.q=t._queryObject,i.t=e.tag),i.h=e.hashFn(),this.sendRequest("q",i,i=>{const o=i.d,s=i.s;Ee.warnOnListenWarnings_(o,t);(this.listens.get(n)&&this.listens.get(n).get(r))===e&&(this.log_("listen response",i),"ok"!==s&&this.removeListen_(n,r),e.onComplete&&e.onComplete(s,o))})}static warnOnListenWarnings_(e,t){if(e&&"object"==typeof e&&Object(o.k)(e,"w")){const n=Object(o.M)(e,"w");if(Array.isArray(n)&&~n.indexOf("no_index")){const e='".indexOn": "'+t._queryParams.getIndex().toString()+'"',n=t._path.toString();k(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${e} at `+n+" to your security rules for better performance.")}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&40===e.length||Object(o.y)(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=3e4)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=Object(o.H)(e)?"auth":"gauth",n={cred:e};null===this.authOverride_?n.noauth=!0:"object"==typeof this.authOverride_&&(n.authvar=this.authOverride_),this.sendRequest(t,n,t=>{const n=t.s,r=t.d||"error";this.authToken_===e&&("ok"===n?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(n,r))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,n=e.d||"error";"ok"===t?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,n)})}unlisten(e,t){const n=e._path.toString(),r=e._queryIdentifier;this.log_("Unlisten called for "+n+" "+r),Object(o.e)(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query");this.removeListen_(n,r)&&this.connected_&&this.sendUnlisten_(n,r,e._queryObject,t)}sendUnlisten_(e,t,n,r){this.log_("Unlisten on "+e+" for "+t);const i={p:e};r&&(i.q=n,i.t=r),this.sendRequest("n",i)}onDisconnectPut(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:n})}onDisconnectMerge(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:n})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,n,r){const i={p:t,d:n};this.log_("onDisconnect "+e,i),this.sendRequest(e,i,e=>{r&&setTimeout(()=>{r(e.s,e.d)},Math.floor(0))})}put(e,t,n,r){this.putInternal("p",e,t,n,r)}merge(e,t,n,r){this.putInternal("m",e,t,n,r)}putInternal(e,t,n,r,i){this.initConnection_();const o={p:t,d:n};void 0!==i&&(o.h=i),this.outstandingPuts_.push({action:e,request:o,onComplete:r}),this.outstandingPutCount_++;const s=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(s):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,n=this.outstandingPuts_[e].request,r=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,n,n=>{this.log_(t+" response",n),delete this.outstandingPuts_[e],this.outstandingPutCount_--,0===this.outstandingPutCount_&&(this.outstandingPuts_=[]),r&&r(n.s,n.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,e=>{if("ok"!==e.s){const t=e.d;this.log_("reportStats","Error sending stats: "+t)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Object(o.P)(e));const t=e.r,n=this.requestCBHash_[t];n&&(delete this.requestCBHash_[t],n(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),"d"===e?this.onDataUpdate_(t.p,t.d,!1,t.t):"m"===e?this.onDataUpdate_(t.p,t.d,!0,t.t):"c"===e?this.onListenRevoked_(t.p,t.q):"ac"===e?this.onAuthRevoked_(t.s,t.d):"apc"===e?this.onAppCheckRevoked_(t.s,t.d):"sd"===e?this.onSecurityDebugPacket_(t):x("Unrecognized action received from server: "+Object(o.P)(e)+"\nAre you using the latest client?")}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=(new Date).getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){Object(o.e)(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=1e3,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=1e3,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){if(this.visible_){if(this.lastConnectionEstablishedTime_){(new Date).getTime()-this.lastConnectionEstablishedTime_>3e4&&(this.reconnectDelay_=1e3),this.lastConnectionEstablishedTime_=null}}else this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=(new Date).getTime();const e=(new Date).getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,1.3*this.reconnectDelay_)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=(new Date).getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),n=this.onRealtimeDisconnect_.bind(this),r=this.id+":"+Ee.nextConnectionId_++,i=this.lastSessionId;let s=!1,a=null;const c=function(){a?a.close():(s=!0,n())},l=function(e){Object(o.e)(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(e)};this.realtime_={close:c,sendRequest:l};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[o,c]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);s?C("getToken() completed but was canceled"):(C("getToken() completed. Creating connection."),this.authToken_=o&&o.accessToken,this.appCheckToken_=c&&c.token,a=new re(r,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,n,e=>{k(e+" ("+this.repoInfo_.toString()+")"),this.interrupt("server_kill")},i))}catch(e){this.log_("Failed to get token: "+e),s||(this.repoInfo_.nodeAdmin&&k(e),c())}}}interrupt(e){C("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){C("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Object(o.B)(this.interruptReasons_)&&(this.reconnectDelay_=1e3,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-(new Date).getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}0===this.outstandingPutCount_&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let n;n=t?t.map(e=>R(e)).join("$"):"default";const r=this.removeListen_(e,n);r&&r.onComplete&&r.onComplete("permission_denied")}removeListen_(e,t){const n=new ae(e).toString();let r;if(this.listens.has(n)){const e=this.listens.get(n);r=e.get(t),e.delete(t),0===e.size&&this.listens.delete(n)}else r=void 0;return r}onAuthRevoked_(e,t){C("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=3&&(this.reconnectDelay_=3e4,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){C("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=3&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace("\n","\nFIREBASE: "))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";Object(o.F)()&&(t=this.repoInfo_.nodeAdmin?"admin_node":"node"),e["sdk."+t+"."+c.replace(/\./g,"-")]=1,Object(o.E)()?e["framework.cordova"]=1:Object(o.G)()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=se.getInstance().currentlyOnline();return Object(o.B)(this.interruptReasons_)&&e}}Ee.nextPersistentConnectionId_=0,Ee.nextConnectionId_=0;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ke{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new ke(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const n=new ke(S,e),r=new ke(S,t);return 0!==this.compare(n,r)}minPost(){return ke.MIN}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Se;class Oe extends Ie{static get __EMPTY_NODE(){return Se}static set __EMPTY_NODE(e){Se=e}compare(e,t){return N(e.name,t.name)}isDefinedOn(e){throw Object(o.f)("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return ke.MIN}maxPost(){return new ke(O,Se)}makePost(e,t){return Object(o.e)("string"==typeof e,"KeyIndex indexValue must always be a string."),new ke(e,Se)}toString(){return".key"}}const Ne=new Oe;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe{constructor(e,t,n,r,i=null){this.isReverse_=r,this.resultGenerator_=i,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?n(e.key,t):1,r&&(o*=-1),o<0)e=this.isReverse_?e.left:e.right;else{if(0===o){this.nodeStack_.push(e);break}this.nodeStack_.push(e),e=this.isReverse_?e.right:e.left}}getNext(){if(0===this.nodeStack_.length)return null;let e,t=this.nodeStack_.pop();if(e=this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value},this.isReverse_)for(t=t.left;!t.isEmpty();)this.nodeStack_.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack_.push(t),t=t.left;return e}hasNext(){return this.nodeStack_.length>0}peek(){if(0===this.nodeStack_.length)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Ae{constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=null!=n?n:Ae.RED,this.left=null!=r?r:Re.EMPTY_NODE,this.right=null!=i?i:Re.EMPTY_NODE}copy(e,t,n,r,i){return new Ae(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const i=n(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp_()}removeMin_(){if(this.left.isEmpty())return Re.EMPTY_NODE;let e=this;return e.left.isRed_()||e.left.left.isRed_()||(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let n,r;if(n=this,t(e,n.key)<0)n.left.isEmpty()||n.left.isRed_()||n.left.left.isRed_()||(n=n.moveRedLeft_()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed_()&&(n=n.rotateRight_()),n.right.isEmpty()||n.right.isRed_()||n.right.left.isRed_()||(n=n.moveRedRight_()),0===t(e,n.key)){if(n.right.isEmpty())return Re.EMPTY_NODE;r=n.right.min_(),n=n.copy(r.key,r.value,null,null,n.right.removeMin_())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Ae.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Ae.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Ae.RED=!0,Ae.BLACK=!1;class Re{constructor(e,t=Re.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new Re(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,Ae.BLACK,null,null))}remove(e){return new Re(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Ae.BLACK,null,null))}get(e){let t,n=this.root_;for(;!n.isEmpty();){if(t=this.comparator_(e,n.key),0===t)return n.value;t<0?n=n.left:t>0&&(n=n.right)}return null}getPredecessorKey(e){let t,n=this.root_,r=null;for(;!n.isEmpty();){if(t=this.comparator_(e,n.key),0===t){if(n.left.isEmpty())return r?r.key:null;for(n=n.left;!n.right.isEmpty();)n=n.right;return n.key}t<0?n=n.left:t>0&&(r=n,n=n.right)}throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Pe(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Pe(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Pe(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Pe(this.root_,null,this.comparator_,!0,e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function je(e,t){return N(e.name,t.name)}function De(e,t){return N(e,t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Le;Re.EMPTY_NODE=new class{copy(e,t,n,r,i){return this}insert(e,t,n){return new Ae(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}};const Me=function(e){return"number"==typeof e?"number:"+L(e):"string:"+e},qe=function(e){if(e.isLeafNode()){const t=e.val();Object(o.e)("string"==typeof t||"number"==typeof t||"object"==typeof t&&Object(o.k)(t,".sv"),"Priority must be a string or number.")}else Object(o.e)(e===Le||e.isEmpty(),"priority of unexpected type.");Object(o.e)(e===Le||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let Fe,He,Ue;class We{constructor(e,t=We.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,Object(o.e)(void 0!==this.value_&&null!==this.value_,"LeafNode shouldn't be created with null/undefined value."),qe(this.priorityNode_)}static set __childrenNodeConstructor(e){Fe=e}static get __childrenNodeConstructor(){return Fe}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new We(this.value_,e)}getImmediateChild(e){return".priority"===e?this.priorityNode_:We.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return me(e)?this:".priority"===le(e)?this.priorityNode_:We.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return".priority"===e?this.updatePriority(t):t.isEmpty()&&".priority"!==e?this:We.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const n=le(e);return null===n?t:t.isEmpty()&&".priority"!==n?this:(Object(o.e)(".priority"!==n||1===ue(e),".priority must be the last token in a path"),this.updateImmediateChild(n,We.__childrenNodeConstructor.EMPTY_NODE.updateChild(he(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(null===this.lazyHash_){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Me(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",e+="number"===t?L(this.value_):this.value_,this.lazyHash_=v(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===We.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof We.__childrenNodeConstructor?-1:(Object(o.e)(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,n=typeof this.value_,r=We.VALUE_TYPE_ORDER.indexOf(t),i=We.VALUE_TYPE_ORDER.indexOf(n);return Object(o.e)(r>=0,"Unknown leaf type: "+t),Object(o.e)(i>=0,"Unknown leaf type: "+n),r===i?"object"===n?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:i-r}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}return!1}}We.VALUE_TYPE_ORDER=["object","boolean","number","string"];const Be=new class extends Ie{compare(e,t){const n=e.node.getPriority(),r=t.node.getPriority(),i=n.compareTo(r);return 0===i?N(e.name,t.name):i}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return ke.MIN}maxPost(){return new ke(O,new We("[PRIORITY-POST]",Ue))}makePost(e,t){const n=He(e);return new ke(t,new We("[PRIORITY-POST]",n))}toString(){return".priority"}},ze=Math.log(2);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ve{constructor(e){var t;this.count=(t=e+1,parseInt(Math.log(t)/ze,10)),this.current_=this.count-1;const n=(r=this.count,parseInt(Array(r+1).join("1"),2));var r;this.bits_=e+1&n}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const $e=function(e,t,n,r){e.sort(t);const i=function(t,r){const o=r-t;let s,a;if(0===o)return null;if(1===o)return s=e[t],a=n?n(s):s,new Ae(a,s.node,Ae.BLACK,null,null);{const c=parseInt(o/2,10)+t,l=i(t,c),u=i(c+1,r);return s=e[c],a=n?n(s):s,new Ae(a,s.node,Ae.BLACK,l,u)}},o=function(t){let r=null,o=null,s=e.length;const a=function(t,r){const o=s-t,a=s;s-=t;const l=i(o+1,a),u=e[o],h=n?n(u):u;c(new Ae(h,u.node,r,null,l))},c=function(e){r?(r.left=e,r=e):(o=e,r=e)};for(let e=0;e<t.count;++e){const n=t.nextBitIsOne(),r=Math.pow(2,t.count-(e+1));n?a(r,Ae.BLACK):(a(r,Ae.BLACK),a(r,Ae.RED))}return o}(new Ve(e.length));return new Re(r||t,o)};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Qe;const Ke={};class Ge{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return Object(o.e)(Ke&&Be,"ChildrenNode.ts has not been loaded"),Qe=Qe||new Ge({".priority":Ke},{".priority":Be}),Qe}get(e){const t=Object(o.M)(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof Re?t:null}hasIndex(e){return Object(o.k)(this.indexSet_,e.toString())}addIndex(e,t){Object(o.e)(e!==Ne,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const n=[];let r=!1;const i=t.getIterator(ke.Wrap);let s,a=i.getNext();for(;a;)r=r||e.isDefinedOn(a.node),n.push(a),a=i.getNext();s=r?$e(n,e.getCompare()):Ke;const c=e.toString(),l=Object.assign({},this.indexSet_);l[c]=e;const u=Object.assign({},this.indexes_);return u[c]=s,new Ge(u,l)}addToIndexes(e,t){const n=Object(o.J)(this.indexes_,(n,r)=>{const i=Object(o.M)(this.indexSet_,r);if(Object(o.e)(i,"Missing index implementation for "+r),n===Ke){if(i.isDefinedOn(e.node)){const n=[],r=t.getIterator(ke.Wrap);let o=r.getNext();for(;o;)o.name!==e.name&&n.push(o),o=r.getNext();return n.push(e),$e(n,i.getCompare())}return Ke}{const r=t.get(e.name);let i=n;return r&&(i=i.remove(new ke(e.name,r))),i.insert(e,e.node)}});return new Ge(n,this.indexSet_)}removeFromIndexes(e,t){const n=Object(o.J)(this.indexes_,n=>{if(n===Ke)return n;{const r=t.get(e.name);return r?n.remove(new ke(e.name,r)):n}});return new Ge(n,this.indexSet_)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ye;class Je{constructor(e,t,n){this.children_=e,this.priorityNode_=t,this.indexMap_=n,this.lazyHash_=null,this.priorityNode_&&qe(this.priorityNode_),this.children_.isEmpty()&&Object(o.e)(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Ye||(Ye=new Je(new Re(De),null,Ge.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Ye}updatePriority(e){return this.children_.isEmpty()?this:new Je(this.children_,e,this.indexMap_)}getImmediateChild(e){if(".priority"===e)return this.getPriority();{const t=this.children_.get(e);return null===t?Ye:t}}getChild(e){const t=le(e);return null===t?this:this.getImmediateChild(t).getChild(he(e))}hasChild(e){return null!==this.children_.get(e)}updateImmediateChild(e,t){if(Object(o.e)(t,"We should always be passing snapshot nodes"),".priority"===e)return this.updatePriority(t);{const n=new ke(e,t);let r,i;t.isEmpty()?(r=this.children_.remove(e),i=this.indexMap_.removeFromIndexes(n,this.children_)):(r=this.children_.insert(e,t),i=this.indexMap_.addToIndexes(n,this.children_));const o=r.isEmpty()?Ye:this.priorityNode_;return new Je(r,o,i)}}updateChild(e,t){const n=le(e);if(null===n)return t;{Object(o.e)(".priority"!==le(e)||1===ue(e),".priority must be the last token in a path");const r=this.getImmediateChild(n).updateChild(he(e),t);return this.updateImmediateChild(n,r)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let n=0,r=0,i=!0;if(this.forEachChild(Be,(o,s)=>{t[o]=s.val(e),n++,i&&Je.INTEGER_REGEXP_.test(o)?r=Math.max(r,Number(o)):i=!1}),!e&&i&&r<2*n){const e=[];for(const n in t)e[n]=t[n];return e}return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(null===this.lazyHash_){let e="";this.getPriority().isEmpty()||(e+="priority:"+Me(this.getPriority().val())+":"),this.forEachChild(Be,(t,n)=>{const r=n.hash();""!==r&&(e+=":"+t+":"+r)}),this.lazyHash_=""===e?"":v(e)}return this.lazyHash_}getPredecessorChildName(e,t,n){const r=this.resolveIndex_(n);if(r){const n=r.getPredecessorKey(new ke(e,t));return n?n.name:null}return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.minKey();return e&&e.name}return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new ke(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.maxKey();return e&&e.name}return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new ke(t,this.children_.get(t)):null}forEachChild(e,t){const n=this.resolveIndex_(e);return n?n.inorderTraversal(e=>t(e.name,e.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getIteratorFrom(e,e=>e);{const n=this.children_.getIteratorFrom(e.name,ke.Wrap);let r=n.peek();for(;null!=r&&t.compare(r,e)<0;)n.getNext(),r=n.peek();return n}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getReverseIteratorFrom(e,e=>e);{const n=this.children_.getReverseIteratorFrom(e.name,ke.Wrap);let r=n.peek();for(;null!=r&&t.compare(r,e)>0;)n.getNext(),r=n.peek();return n}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Xe?-1:0}withIndex(e){if(e===Ne||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new Je(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Ne||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority())){if(this.children_.count()===t.children_.count()){const e=this.getIterator(Be),n=t.getIterator(Be);let r=e.getNext(),i=n.getNext();for(;r&&i;){if(r.name!==i.name||!r.node.equals(i.node))return!1;r=e.getNext(),i=n.getNext()}return null===r&&null===i}return!1}return!1}}resolveIndex_(e){return e===Ne?null:this.indexMap_.get(e.toString())}}Je.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;const Xe=new class extends Je{constructor(){super(new Re(De),Je.EMPTY_NODE,Ge.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return Je.EMPTY_NODE}isEmpty(){return!1}};Object.defineProperties(ke,{MIN:{value:new ke(S,Je.EMPTY_NODE)},MAX:{value:new ke(O,Xe)}}),Oe.__EMPTY_NODE=Je.EMPTY_NODE,We.__childrenNodeConstructor=Je,Le=Xe,function(e){Ue=e}(Xe);function Ze(e,t=null){if(null===e)return Je.EMPTY_NODE;if("object"==typeof e&&".priority"in e&&(t=e[".priority"]),Object(o.e)(null===t||"string"==typeof t||"number"==typeof t||"object"==typeof t&&".sv"in t,"Invalid priority type found: "+typeof t),"object"==typeof e&&".value"in e&&null!==e[".value"]&&(e=e[".value"]),"object"!=typeof e||".sv"in e){return new We(e,Ze(t))}if(e instanceof Array){let n=Je.EMPTY_NODE;return D(e,(t,r)=>{if(Object(o.k)(e,t)&&"."!==t.substring(0,1)){const e=Ze(r);!e.isLeafNode()&&e.isEmpty()||(n=n.updateImmediateChild(t,e))}}),n.updatePriority(Ze(t))}{const n=[];let r=!1;if(D(e,(e,t)=>{if("."!==e.substring(0,1)){const i=Ze(t);i.isEmpty()||(r=r||!i.getPriority().isEmpty(),n.push(new ke(e,i)))}}),0===n.length)return Je.EMPTY_NODE;const i=$e(n,je,e=>e.name,De);if(r){const e=$e(n,Be.getCompare());return new Je(i,Ze(t),new Ge({".priority":e},{".priority":Be}))}return new Je(i,Ze(t),Ge.Default)}}!function(e){He=e}(Ze);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class et extends Ie{constructor(e){super(),this.indexPath_=e,Object(o.e)(!me(e)&&".priority"!==le(e),"Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const n=this.extractChild(e.node),r=this.extractChild(t.node),i=n.compareTo(r);return 0===i?N(e.name,t.name):i}makePost(e,t){const n=Ze(e),r=Je.EMPTY_NODE.updateChild(this.indexPath_,n);return new ke(t,r)}maxPost(){const e=Je.EMPTY_NODE.updateChild(this.indexPath_,Xe);return new ke(O,e)}toString(){return pe(this.indexPath_,0).join("/")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tt=new class extends Ie{compare(e,t){const n=e.node.compareTo(t.node);return 0===n?N(e.name,t.name):n}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return ke.MIN}maxPost(){return ke.MAX}makePost(e,t){const n=Ze(e);return new ke(t,n)}toString(){return".value"}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nt(e){return{type:"value",snapshotNode:e}}function rt(e,t){return{type:"child_added",snapshotNode:t,childName:e}}function it(e,t){return{type:"child_removed",snapshotNode:t,childName:e}}function ot(e,t,n){return{type:"child_changed",snapshotNode:t,childName:e,oldSnap:n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class st{constructor(e){this.index_=e}updateChild(e,t,n,r,i,s){Object(o.e)(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(t);return a.getChild(r).equals(n.getChild(r))&&a.isEmpty()===n.isEmpty()?e:(null!=s&&(n.isEmpty()?e.hasChild(t)?s.trackChildChange(it(t,a)):Object(o.e)(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?s.trackChildChange(rt(t,n)):s.trackChildChange(ot(t,n,a))),e.isLeafNode()&&n.isEmpty()?e:e.updateImmediateChild(t,n).withIndex(this.index_))}updateFullNode(e,t,n){return null!=n&&(e.isLeafNode()||e.forEachChild(Be,(e,r)=>{t.hasChild(e)||n.trackChildChange(it(e,r))}),t.isLeafNode()||t.forEachChild(Be,(t,r)=>{if(e.hasChild(t)){const i=e.getImmediateChild(t);i.equals(r)||n.trackChildChange(ot(t,r,i))}else n.trackChildChange(rt(t,r))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?Je.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(e){this.indexedFilter_=new st(e.getIndex()),this.index_=e.getIndex(),this.startPost_=at.getStartPost_(e),this.endPost_=at.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,n=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&n}updateChild(e,t,n,r,i,o){return this.matches(new ke(t,n))||(n=Je.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,n,r,i,o)}updateFullNode(e,t,n){t.isLeafNode()&&(t=Je.EMPTY_NODE);let r=t.withIndex(this.index_);r=r.updatePriority(Je.EMPTY_NODE);const i=this;return t.forEachChild(Be,(e,t)=>{i.matches(new ke(e,t))||(r=r.updateImmediateChild(e,Je.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,r,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}return e.getIndex().maxPost()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(e){this.withinDirectionalStart=e=>this.reverse_?this.withinEndPost(e):this.withinStartPost(e),this.withinDirectionalEnd=e=>this.reverse_?this.withinStartPost(e):this.withinEndPost(e),this.withinStartPost=e=>{const t=this.index_.compare(this.rangedFilter_.getStartPost(),e);return this.startIsInclusive_?t<=0:t<0},this.withinEndPost=e=>{const t=this.index_.compare(e,this.rangedFilter_.getEndPost());return this.endIsInclusive_?t<=0:t<0},this.rangedFilter_=new at(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,n,r,i,o){return this.rangedFilter_.matches(new ke(t,n))||(n=Je.EMPTY_NODE),e.getImmediateChild(t).equals(n)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,n,r,i,o):this.fullLimitUpdateChild_(e,t,n,i,o)}updateFullNode(e,t,n){let r;if(t.isLeafNode()||t.isEmpty())r=Je.EMPTY_NODE.withIndex(this.index_);else if(2*this.limit_<t.numChildren()&&t.isIndexed(this.index_)){let e;r=Je.EMPTY_NODE.withIndex(this.index_),e=this.reverse_?t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let n=0;for(;e.hasNext()&&n<this.limit_;){const t=e.getNext();if(this.withinDirectionalStart(t)){if(!this.withinDirectionalEnd(t))break;r=r.updateImmediateChild(t.name,t.node),n++}}}else{let e;r=t.withIndex(this.index_),r=r.updatePriority(Je.EMPTY_NODE),e=this.reverse_?r.getReverseIterator(this.index_):r.getIterator(this.index_);let n=0;for(;e.hasNext();){const t=e.getNext();n<this.limit_&&this.withinDirectionalStart(t)&&this.withinDirectionalEnd(t)?n++:r=r.updateImmediateChild(t.name,Je.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,r,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,n,r,i){let s;if(this.reverse_){const e=this.index_.getCompare();s=(t,n)=>e(n,t)}else s=this.index_.getCompare();const a=e;Object(o.e)(a.numChildren()===this.limit_,"");const c=new ke(t,n),l=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(c);if(a.hasChild(t)){const e=a.getImmediateChild(t);let o=r.getChildAfterChild(this.index_,l,this.reverse_);for(;null!=o&&(o.name===t||a.hasChild(o.name));)o=r.getChildAfterChild(this.index_,o,this.reverse_);const h=null==o?1:s(o,c);if(u&&!n.isEmpty()&&h>=0)return null!=i&&i.trackChildChange(ot(t,n,e)),a.updateImmediateChild(t,n);{null!=i&&i.trackChildChange(it(t,e));const n=a.updateImmediateChild(t,Je.EMPTY_NODE);return null!=o&&this.rangedFilter_.matches(o)?(null!=i&&i.trackChildChange(rt(o.name,o.node)),n.updateImmediateChild(o.name,o.node)):n}}return n.isEmpty()?e:u&&s(l,c)>=0?(null!=i&&(i.trackChildChange(it(l.name,l.node)),i.trackChildChange(rt(t,n))),a.updateImmediateChild(t,n).updateImmediateChild(l.name,Je.EMPTY_NODE)):e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Be}hasStart(){return this.startSet_}isViewFromLeft(){return""===this.viewFrom_?this.startSet_:"l"===this.viewFrom_}getIndexStartValue(){return Object(o.e)(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return Object(o.e)(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:S}hasEnd(){return this.endSet_}getIndexEndValue(){return Object(o.e)(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return Object(o.e)(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:O}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&""!==this.viewFrom_}getLimit(){return Object(o.e)(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Be}copy(){const e=new lt;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function ut(e,t,n){const r=e.copy();return r.startSet_=!0,void 0===t&&(t=null),r.indexStartValue_=t,null!=n?(r.startNameSet_=!0,r.indexStartName_=n):(r.startNameSet_=!1,r.indexStartName_=""),r}function ht(e,t,n){const r=e.copy();return r.endSet_=!0,void 0===t&&(t=null),r.indexEndValue_=t,void 0!==n?(r.endNameSet_=!0,r.indexEndName_=n):(r.endNameSet_=!1,r.indexEndName_=""),r}function dt(e,t){const n=e.copy();return n.index_=t,n}function pt(e){const t={};if(e.isDefault())return t;let n;if(e.index_===Be?n="$priority":e.index_===tt?n="$value":e.index_===Ne?n="$key":(Object(o.e)(e.index_ instanceof et,"Unrecognized index type!"),n=e.index_.toString()),t.orderBy=Object(o.P)(n),e.startSet_){const n=e.startAfterSet_?"startAfter":"startAt";t[n]=Object(o.P)(e.indexStartValue_),e.startNameSet_&&(t[n]+=","+Object(o.P)(e.indexStartName_))}if(e.endSet_){const n=e.endBeforeSet_?"endBefore":"endAt";t[n]=Object(o.P)(e.indexEndValue_),e.endNameSet_&&(t[n]+=","+Object(o.P)(e.indexEndName_))}return e.limitSet_&&(e.isViewFromLeft()?t.limitToFirst=e.limit_:t.limitToLast=e.limit_),t}function ft(e){const t={};if(e.startSet_&&(t.sp=e.indexStartValue_,e.startNameSet_&&(t.sn=e.indexStartName_),t.sin=!e.startAfterSet_),e.endSet_&&(t.ep=e.indexEndValue_,e.endNameSet_&&(t.en=e.indexEndName_),t.ein=!e.endBeforeSet_),e.limitSet_){t.l=e.limit_;let n=e.viewFrom_;""===n&&(n=e.isViewFromLeft()?"l":"r"),t.vf=n}return e.index_!==Be&&(t.i=e.index_.toString()),t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt extends ie{constructor(e,t,n,r){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=n,this.appCheckTokenProvider_=r,this.log_=T("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return void 0!==t?"tag$"+t:(Object(o.e)(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,n,r){const i=e._path.toString();this.log_("Listen called for "+i+" "+e._queryIdentifier);const s=gt.getListenId_(e,n),a={};this.listens_[s]=a;const c=pt(e._queryParams);this.restRequest_(i+".json",c,(e,t)=>{let c=t;if(404===e&&(c=null,e=null),null===e&&this.onDataUpdate_(i,c,!1,n),Object(o.M)(this.listens_,s)===a){let t;t=e?401===e?"permission_denied":"rest_error:"+e:"ok",r(t,null)}})}unlisten(e,t){const n=gt.getListenId_(e,t);delete this.listens_[n]}get(e){const t=pt(e._queryParams),n=e._path.toString(),r=new o.a;return this.restRequest_(n+".json",t,(e,t)=>{let i=t;404===e&&(i=null,e=null),null===e?(this.onDataUpdate_(n,i,!1,null),r.resolve(i)):r.reject(new Error(i))}),r.promise}refreshAuthToken(e){}restRequest_(e,t={},n){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([r,i])=>{r&&r.accessToken&&(t.auth=r.accessToken),i&&i.token&&(t.ac=i.token);const s=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Object(o.K)(t);this.log_("Sending REST request for "+s);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(n&&4===a.readyState){this.log_("REST Response for "+s+" received. status:",a.status,"response:",a.responseText);let e=null;if(a.status>=200&&a.status<300){try{e=Object(o.I)(a.responseText)}catch(e){k("Failed to parse JSON response for "+s+": "+a.responseText)}n(null,e)}else 401!==a.status&&404!==a.status&&k("Got unsuccessful REST response for "+s+" Status: "+a.status),n(a.status);n=null}},a.open("GET",s,!0),a.send()})}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(){this.rootNode_=Je.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vt(){return{value:null,children:new Map}}function yt(e,t,n){if(me(t))e.value=n,e.children.clear();else if(null!==e.value)e.value=e.value.updateChild(t,n);else{const r=le(t);e.children.has(r)||e.children.set(r,vt());yt(e.children.get(r),t=he(t),n)}}function _t(e,t,n){null!==e.value?n(t,e.value):function(e,t){e.children.forEach((e,n)=>{t(n,e)})}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,(e,r)=>{_t(r,new ae(t.toString()+"/"+e),n)})}class bt{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&D(this.last_,(e,n)=>{t[e]=t[e]-n}),this.last_=e,t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new bt(e);const n=1e4+2e4*Math.random();H(this.reportStats_.bind(this),Math.floor(n))}reportStats_(){const e=this.statsListener_.get(),t={};let n=!1;D(e,(e,r)=>{r>0&&Object(o.k)(this.statsToReport_,e)&&(t[e]=r,n=!0)}),n&&this.server_.reportStats(t),H(this.reportStats_.bind(this),Math.floor(2*Math.random()*3e5))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ct;function Tt(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */!function(e){e[e.OVERWRITE=0]="OVERWRITE",e[e.MERGE=1]="MERGE",e[e.ACK_USER_WRITE=2]="ACK_USER_WRITE",e[e.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"}(Ct||(Ct={}));class xt{constructor(e,t,n){this.path=e,this.affectedTree=t,this.revert=n,this.type=Ct.ACK_USER_WRITE,this.source={fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}operationForChild(e){if(me(this.path)){if(null!=this.affectedTree.value)return Object(o.e)(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new ae(e));return new xt(ce(),t,this.revert)}}return Object(o.e)(le(this.path)===e,"operationForChild called for unrelated child."),new xt(he(this.path),this.affectedTree,this.revert)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(e,t){this.source=e,this.path=t,this.type=Ct.LISTEN_COMPLETE}operationForChild(e){return me(this.path)?new Et(this.source,ce()):new Et(this.source,he(this.path))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{constructor(e,t,n){this.source=e,this.path=t,this.snap=n,this.type=Ct.OVERWRITE}operationForChild(e){return me(this.path)?new kt(this.source,ce(),this.snap.getImmediateChild(e)):new kt(this.source,he(this.path),this.snap)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(e,t,n){this.source=e,this.path=t,this.children=n,this.type=Ct.MERGE}operationForChild(e){if(me(this.path)){const t=this.children.subtree(new ae(e));return t.isEmpty()?null:t.value?new kt(this.source,ce(),t.value):new It(this.source,ce(),t)}return Object(o.e)(le(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new It(this.source,he(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{constructor(e,t,n){this.node_=e,this.fullyInitialized_=t,this.filtered_=n}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(me(e))return this.isFullyInitialized()&&!this.filtered_;const t=le(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function Nt(e,t,n,r,i,s){const a=r.filter(e=>e.type===n);a.sort((t,n)=>function(e,t,n){if(null==t.childName||null==n.childName)throw Object(o.f)("Should only compare child_ events.");const r=new ke(t.childName,t.snapshotNode),i=new ke(n.childName,n.snapshotNode);return e.index_.compare(r,i)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,t,n)),a.forEach(n=>{const r=function(e,t,n){return"value"===t.type||"child_removed"===t.type||(t.prevName=n.getPredecessorChildName(t.childName,t.snapshotNode,e.index_)),t}(e,n,s);i.forEach(i=>{i.respondsTo(n.type)&&t.push(i.createEvent(r,e.query_))})})}function Pt(e,t){return{eventCache:e,serverCache:t}}function At(e,t,n,r){return Pt(new St(t,n,r),e.serverCache)}function Rt(e,t,n,r){return Pt(e.eventCache,new St(t,n,r))}function jt(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function Dt(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Lt;class Mt{constructor(e,t=(()=>(Lt||(Lt=new Re(P)),Lt))()){this.value=e,this.children=t}static fromObject(e){let t=new Mt(null);return D(e,(e,n)=>{t=t.set(new ae(e),n)}),t}isEmpty(){return null===this.value&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(null!=this.value&&t(this.value))return{path:ce(),value:this.value};if(me(e))return null;{const n=le(e),r=this.children.get(n);if(null!==r){const i=r.findRootMostMatchingPathAndValue(he(e),t);if(null!=i){return{path:ge(new ae(n),i.path),value:i.value}}return null}return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(me(e))return this;{const t=le(e),n=this.children.get(t);return null!==n?n.subtree(he(e)):new Mt(null)}}set(e,t){if(me(e))return new Mt(t,this.children);{const n=le(e),r=(this.children.get(n)||new Mt(null)).set(he(e),t),i=this.children.insert(n,r);return new Mt(this.value,i)}}remove(e){if(me(e))return this.children.isEmpty()?new Mt(null):new Mt(null,this.children);{const t=le(e),n=this.children.get(t);if(n){const r=n.remove(he(e));let i;return i=r.isEmpty()?this.children.remove(t):this.children.insert(t,r),null===this.value&&i.isEmpty()?new Mt(null):new Mt(this.value,i)}return this}}get(e){if(me(e))return this.value;{const t=le(e),n=this.children.get(t);return n?n.get(he(e)):null}}setTree(e,t){if(me(e))return t;{const n=le(e),r=(this.children.get(n)||new Mt(null)).setTree(he(e),t);let i;return i=r.isEmpty()?this.children.remove(n):this.children.insert(n,r),new Mt(this.value,i)}}fold(e){return this.fold_(ce(),e)}fold_(e,t){const n={};return this.children.inorderTraversal((r,i)=>{n[r]=i.fold_(ge(e,r),t)}),t(e,this.value,n)}findOnPath(e,t){return this.findOnPath_(e,ce(),t)}findOnPath_(e,t,n){const r=!!this.value&&n(t,this.value);if(r)return r;if(me(e))return null;{const r=le(e),i=this.children.get(r);return i?i.findOnPath_(he(e),ge(t,r),n):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,ce(),t)}foreachOnPath_(e,t,n){if(me(e))return this;{this.value&&n(t,this.value);const r=le(e),i=this.children.get(r);return i?i.foreachOnPath_(he(e),ge(t,r),n):new Mt(null)}}foreach(e){this.foreach_(ce(),e)}foreach_(e,t){this.children.inorderTraversal((n,r)=>{r.foreach_(ge(e,n),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,n)=>{n.value&&e(t,n.value)})}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt{constructor(e){this.writeTree_=e}static empty(){return new qt(new Mt(null))}}function Ft(e,t,n){if(me(t))return new qt(new Mt(n));{const r=e.writeTree_.findRootMostValueAndPath(t);if(null!=r){const i=r.path;let o=r.value;const s=ve(i,t);return o=o.updateChild(s,n),new qt(e.writeTree_.set(i,o))}{const r=new Mt(n),i=e.writeTree_.setTree(t,r);return new qt(i)}}}function Ht(e,t,n){let r=e;return D(n,(e,n)=>{r=Ft(r,ge(t,e),n)}),r}function Ut(e,t){if(me(t))return qt.empty();{const n=e.writeTree_.setTree(t,new Mt(null));return new qt(n)}}function Wt(e,t){return null!=Bt(e,t)}function Bt(e,t){const n=e.writeTree_.findRootMostValueAndPath(t);return null!=n?e.writeTree_.get(n.path).getChild(ve(n.path,t)):null}function zt(e){const t=[],n=e.writeTree_.value;return null!=n?n.isLeafNode()||n.forEachChild(Be,(e,n)=>{t.push(new ke(e,n))}):e.writeTree_.children.inorderTraversal((e,n)=>{null!=n.value&&t.push(new ke(e,n.value))}),t}function Vt(e,t){if(me(t))return e;{const n=Bt(e,t);return new qt(null!=n?new Mt(n):e.writeTree_.subtree(t))}}function $t(e){return e.writeTree_.isEmpty()}function Qt(e,t){return function e(t,n,r){if(null!=n.value)return r.updateChild(t,n.value);{let i=null;return n.children.inorderTraversal((n,s)=>{".priority"===n?(Object(o.e)(null!==s.value,"Priority writes must always be leaf nodes"),i=s.value):r=e(ge(t,n),s,r)}),r.getChild(t).isEmpty()||null===i||(r=r.updateChild(ge(t,".priority"),i)),r}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(ce(),e.writeTree_,t)}function Kt(e,t){return cn(t,e)}function Gt(e,t){const n=e.allWrites.findIndex(e=>e.writeId===t);Object(o.e)(n>=0,"removeWrite called with nonexistent writeId.");const r=e.allWrites[n];e.allWrites.splice(n,1);let i=r.visible,s=!1,a=e.allWrites.length-1;for(;i&&a>=0;){const t=e.allWrites[a];t.visible&&(a>=n&&Yt(t,r.path)?i=!1:be(r.path,t.path)&&(s=!0)),a--}if(i){if(s)return function(e){e.visibleWrites=Xt(e.allWrites,Jt,ce()),e.allWrites.length>0?e.lastWriteId=e.allWrites[e.allWrites.length-1].writeId:e.lastWriteId=-1}(e),!0;if(r.snap)e.visibleWrites=Ut(e.visibleWrites,r.path);else{D(r.children,t=>{e.visibleWrites=Ut(e.visibleWrites,ge(r.path,t))})}return!0}return!1}function Yt(e,t){if(e.snap)return be(e.path,t);for(const n in e.children)if(e.children.hasOwnProperty(n)&&be(ge(e.path,n),t))return!0;return!1}function Jt(e){return e.visible}function Xt(e,t,n){let r=qt.empty();for(let i=0;i<e.length;++i){const s=e[i];if(t(s)){const e=s.path;let t;if(s.snap)be(n,e)?(t=ve(n,e),r=Ft(r,t,s.snap)):be(e,n)&&(t=ve(e,n),r=Ft(r,ce(),s.snap.getChild(t)));else{if(!s.children)throw Object(o.f)("WriteRecord should have .snap or .children");if(be(n,e))t=ve(n,e),r=Ht(r,t,s.children);else if(be(e,n))if(t=ve(e,n),me(t))r=Ht(r,ce(),s.children);else{const e=Object(o.M)(s.children,le(t));if(e){const n=e.getChild(he(t));r=Ft(r,ce(),n)}}}}}return r}function Zt(e,t,n,r,i){if(r||i){const o=Vt(e.visibleWrites,t);if(!i&&$t(o))return n;if(i||null!=n||Wt(o,ce())){const o=function(e){return(e.visible||i)&&(!r||!~r.indexOf(e.writeId))&&(be(e.path,t)||be(t,e.path))};return Qt(Xt(e.allWrites,o,t),n||Je.EMPTY_NODE)}return null}{const r=Bt(e.visibleWrites,t);if(null!=r)return r;{const r=Vt(e.visibleWrites,t);if($t(r))return n;if(null!=n||Wt(r,ce())){return Qt(r,n||Je.EMPTY_NODE)}return null}}}function en(e,t,n,r){return Zt(e.writeTree,e.treePath,t,n,r)}function tn(e,t){return function(e,t,n){let r=Je.EMPTY_NODE;const i=Bt(e.visibleWrites,t);if(i)return i.isLeafNode()||i.forEachChild(Be,(e,t)=>{r=r.updateImmediateChild(e,t)}),r;if(n){const i=Vt(e.visibleWrites,t);return n.forEachChild(Be,(e,t)=>{const n=Qt(Vt(i,new ae(e)),t);r=r.updateImmediateChild(e,n)}),zt(i).forEach(e=>{r=r.updateImmediateChild(e.name,e.node)}),r}return zt(Vt(e.visibleWrites,t)).forEach(e=>{r=r.updateImmediateChild(e.name,e.node)}),r}(e.writeTree,e.treePath,t)}function nn(e,t,n,r){return function(e,t,n,r,i){Object(o.e)(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=ge(t,n);if(Wt(e.visibleWrites,s))return null;{const t=Vt(e.visibleWrites,s);return $t(t)?i.getChild(n):Qt(t,i.getChild(n))}}(e.writeTree,e.treePath,t,n,r)}function rn(e,t){return function(e,t){return Bt(e.visibleWrites,t)}(e.writeTree,ge(e.treePath,t))}function on(e,t,n,r,i,o){return function(e,t,n,r,i,o,s){let a;const c=Vt(e.visibleWrites,t),l=Bt(c,ce());if(null!=l)a=l;else{if(null==n)return[];a=Qt(c,n)}if(a=a.withIndex(s),a.isEmpty()||a.isLeafNode())return[];{const e=[],t=s.getCompare(),n=o?a.getReverseIteratorFrom(r,s):a.getIteratorFrom(r,s);let c=n.getNext();for(;c&&e.length<i;)0!==t(c,r)&&e.push(c),c=n.getNext();return e}}(e.writeTree,e.treePath,t,n,r,i,o)}function sn(e,t,n){return function(e,t,n,r){const i=ge(t,n),o=Bt(e.visibleWrites,i);if(null!=o)return o;if(r.isCompleteForChild(n)){return Qt(Vt(e.visibleWrites,i),r.getNode().getImmediateChild(n))}return null}(e.writeTree,e.treePath,t,n)}function an(e,t){return cn(ge(e.treePath,t),e.writeTree)}function cn(e,t){return{treePath:e,writeTree:t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,n=e.childName;Object(o.e)("child_added"===t||"child_changed"===t||"child_removed"===t,"Only child changes supported for tracking"),Object(o.e)(".priority"!==n,"Only non-priority child changes can be tracked.");const r=this.changeMap.get(n);if(r){const i=r.type;if("child_added"===t&&"child_removed"===i)this.changeMap.set(n,ot(n,e.snapshotNode,r.snapshotNode));else if("child_removed"===t&&"child_added"===i)this.changeMap.delete(n);else if("child_removed"===t&&"child_changed"===i)this.changeMap.set(n,it(n,r.oldSnap));else if("child_changed"===t&&"child_added"===i)this.changeMap.set(n,rt(n,e.snapshotNode));else{if("child_changed"!==t||"child_changed"!==i)throw Object(o.f)("Illegal combination of changes: "+e+" occurred after "+r);this.changeMap.set(n,ot(n,e.snapshotNode,r.oldSnap))}}else this.changeMap.set(n,e)}getChanges(){return Array.from(this.changeMap.values())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const un=new class{getCompleteChild(e){return null}getChildAfterChild(e,t,n){return null}};class hn{constructor(e,t,n=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=n}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const t=null!=this.optCompleteServerCache_?new St(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return sn(this.writes_,e,t)}}getChildAfterChild(e,t,n){const r=null!=this.optCompleteServerCache_?this.optCompleteServerCache_:Dt(this.viewCache_),i=on(this.writes_,r,t,1,n,e);return 0===i.length?null:i[0]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dn(e,t,n,r,i){const s=new ln;let a,c;if(n.type===Ct.OVERWRITE){const l=n;l.source.fromUser?a=gn(e,t,l.path,l.snap,r,i,s):(Object(o.e)(l.source.fromServer,"Unknown source."),c=l.source.tagged||t.serverCache.isFiltered()&&!me(l.path),a=fn(e,t,l.path,l.snap,r,i,c,s))}else if(n.type===Ct.MERGE){const l=n;l.source.fromUser?a=function(e,t,n,r,i,o,s){let a=t;return r.foreach((r,c)=>{const l=ge(n,r);mn(t,le(l))&&(a=gn(e,a,l,c,i,o,s))}),r.foreach((r,c)=>{const l=ge(n,r);mn(t,le(l))||(a=gn(e,a,l,c,i,o,s))}),a}(e,t,l.path,l.children,r,i,s):(Object(o.e)(l.source.fromServer,"Unknown source."),c=l.source.tagged||t.serverCache.isFiltered(),a=yn(e,t,l.path,l.children,r,i,c,s))}else if(n.type===Ct.ACK_USER_WRITE){const c=n;a=c.revert?function(e,t,n,r,i,s){let a;if(null!=rn(r,n))return t;{const c=new hn(r,t,i),l=t.eventCache.getNode();let u;if(me(n)||".priority"===le(n)){let n;if(t.serverCache.isFullyInitialized())n=en(r,Dt(t));else{const e=t.serverCache.getNode();Object(o.e)(e instanceof Je,"serverChildren would be complete if leaf node"),n=tn(r,e)}n=n,u=e.filter.updateFullNode(l,n,s)}else{const i=le(n);let o=sn(r,i,t.serverCache);null==o&&t.serverCache.isCompleteForChild(i)&&(o=l.getImmediateChild(i)),u=null!=o?e.filter.updateChild(l,i,o,he(n),c,s):t.eventCache.getNode().hasChild(i)?e.filter.updateChild(l,i,Je.EMPTY_NODE,he(n),c,s):l,u.isEmpty()&&t.serverCache.isFullyInitialized()&&(a=en(r,Dt(t)),a.isLeafNode()&&(u=e.filter.updateFullNode(u,a,s)))}return a=t.serverCache.isFullyInitialized()||null!=rn(r,ce()),At(t,u,a,e.filter.filtersNodes())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,t,c.path,r,i,s):function(e,t,n,r,i,o,s){if(null!=rn(i,n))return t;const a=t.serverCache.isFiltered(),c=t.serverCache;if(null!=r.value){if(me(n)&&c.isFullyInitialized()||c.isCompleteForPath(n))return fn(e,t,n,c.getNode().getChild(n),i,o,a,s);if(me(n)){let r=new Mt(null);return c.getNode().forEachChild(Ne,(e,t)=>{r=r.set(new ae(e),t)}),yn(e,t,n,r,i,o,a,s)}return t}{let l=new Mt(null);return r.foreach((e,t)=>{const r=ge(n,e);c.isCompleteForPath(r)&&(l=l.set(e,c.getNode().getChild(r)))}),yn(e,t,n,l,i,o,a,s)}}(e,t,c.path,c.affectedTree,r,i,s)}else{if(n.type!==Ct.LISTEN_COMPLETE)throw Object(o.f)("Unknown operation type: "+n.type);a=function(e,t,n,r,i){const o=t.serverCache,s=Rt(t,o.getNode(),o.isFullyInitialized()||me(n),o.isFiltered());return pn(e,s,n,r,un,i)}(e,t,n.path,r,s)}const l=s.getChanges();return function(e,t,n){const r=t.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),o=jt(e);(n.length>0||!e.eventCache.isFullyInitialized()||i&&!r.getNode().equals(o)||!r.getNode().getPriority().equals(o.getPriority()))&&n.push(nt(jt(t)))}}(t,a,l),{viewCache:a,changes:l}}function pn(e,t,n,r,i,s){const a=t.eventCache;if(null!=rn(r,n))return t;{let c,l;if(me(n))if(Object(o.e)(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){const n=Dt(t),i=tn(r,n instanceof Je?n:Je.EMPTY_NODE);c=e.filter.updateFullNode(t.eventCache.getNode(),i,s)}else{const n=en(r,Dt(t));c=e.filter.updateFullNode(t.eventCache.getNode(),n,s)}else{const u=le(n);if(".priority"===u){Object(o.e)(1===ue(n),"Can't have a priority with additional path components");const i=a.getNode();l=t.serverCache.getNode();const s=nn(r,n,i,l);c=null!=s?e.filter.updatePriority(i,s):a.getNode()}else{const o=he(n);let h;if(a.isCompleteForChild(u)){l=t.serverCache.getNode();const e=nn(r,n,a.getNode(),l);h=null!=e?a.getNode().getImmediateChild(u).updateChild(o,e):a.getNode().getImmediateChild(u)}else h=sn(r,u,t.serverCache);c=null!=h?e.filter.updateChild(a.getNode(),u,h,o,i,s):a.getNode()}}return At(t,c,a.isFullyInitialized()||me(n),e.filter.filtersNodes())}}function fn(e,t,n,r,i,o,s,a){const c=t.serverCache;let l;const u=s?e.filter:e.filter.getIndexedFilter();if(me(n))l=u.updateFullNode(c.getNode(),r,null);else if(u.filtersNodes()&&!c.isFiltered()){const e=c.getNode().updateChild(n,r);l=u.updateFullNode(c.getNode(),e,null)}else{const e=le(n);if(!c.isCompleteForPath(n)&&ue(n)>1)return t;const i=he(n),o=c.getNode().getImmediateChild(e).updateChild(i,r);l=".priority"===e?u.updatePriority(c.getNode(),o):u.updateChild(c.getNode(),e,o,i,un,null)}const h=Rt(t,l,c.isFullyInitialized()||me(n),u.filtersNodes());return pn(e,h,n,i,new hn(i,h,o),a)}function gn(e,t,n,r,i,o,s){const a=t.eventCache;let c,l;const u=new hn(i,t,o);if(me(n))l=e.filter.updateFullNode(t.eventCache.getNode(),r,s),c=At(t,l,!0,e.filter.filtersNodes());else{const i=le(n);if(".priority"===i)l=e.filter.updatePriority(t.eventCache.getNode(),r),c=At(t,l,a.isFullyInitialized(),a.isFiltered());else{const o=he(n),l=a.getNode().getImmediateChild(i);let h;if(me(o))h=r;else{const e=u.getCompleteChild(i);h=null!=e?".priority"===de(o)&&e.getChild(fe(o)).isEmpty()?e:e.updateChild(o,r):Je.EMPTY_NODE}if(l.equals(h))c=t;else{c=At(t,e.filter.updateChild(a.getNode(),i,h,o,u,s),a.isFullyInitialized(),e.filter.filtersNodes())}}}return c}function mn(e,t){return e.eventCache.isCompleteForChild(t)}function vn(e,t,n){return n.foreach((e,n)=>{t=t.updateChild(e,n)}),t}function yn(e,t,n,r,i,o,s,a){if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;let c,l=t;c=me(n)?r:new Mt(null).setTree(n,r);const u=t.serverCache.getNode();return c.children.inorderTraversal((n,r)=>{if(u.hasChild(n)){const c=vn(0,t.serverCache.getNode().getImmediateChild(n),r);l=fn(e,l,new ae(n),c,i,o,s,a)}}),c.children.inorderTraversal((n,r)=>{const c=!t.serverCache.isCompleteForChild(n)&&null===r.value;if(!u.hasChild(n)&&!c){const c=vn(0,t.serverCache.getNode().getImmediateChild(n),r);l=fn(e,l,new ae(n),c,i,o,s,a)}}),l}class _n{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const n=this.query_._queryParams,r=new st(n.getIndex()),i=(o=n).loadsAllData()?new st(o.getIndex()):o.hasLimit()?new ct(o):new at(o);var o;this.processor_=function(e){return{filter:e}}(i);const s=t.serverCache,a=t.eventCache,c=r.updateFullNode(Je.EMPTY_NODE,s.getNode(),null),l=i.updateFullNode(Je.EMPTY_NODE,a.getNode(),null),u=new St(c,s.isFullyInitialized(),r.filtersNodes()),h=new St(l,a.isFullyInitialized(),i.filtersNodes());this.viewCache_=Pt(h,u),this.eventGenerator_=new Ot(this.query_)}get query(){return this.query_}}function bn(e,t){const n=Dt(e.viewCache_);return n&&(e.query._queryParams.loadsAllData()||!me(t)&&!n.getImmediateChild(le(t)).isEmpty())?n.getChild(t):null}function wn(e){return 0===e.eventRegistrations_.length}function Cn(e,t,n){const r=[];if(n){Object(o.e)(null==t,"A cancel should cancel all event registrations.");const i=e.query._path;e.eventRegistrations_.forEach(e=>{const t=e.createCancelEvent(n,i);t&&r.push(t)})}if(t){let n=[];for(let r=0;r<e.eventRegistrations_.length;++r){const i=e.eventRegistrations_[r];if(i.matches(t)){if(t.hasAnyCallback()){n=n.concat(e.eventRegistrations_.slice(r+1));break}}else n.push(i)}e.eventRegistrations_=n}else e.eventRegistrations_=[];return r}function Tn(e,t,n,r){t.type===Ct.MERGE&&null!==t.source.queryId&&(Object(o.e)(Dt(e.viewCache_),"We should always have a full cache before handling merges"),Object(o.e)(jt(e.viewCache_),"Missing event cache, even though we have a server cache"));const i=e.viewCache_,s=dn(e.processor_,i,t,n,r);var a,c;return a=e.processor_,c=s.viewCache,Object(o.e)(c.eventCache.getNode().isIndexed(a.filter.getIndex()),"Event snap not indexed"),Object(o.e)(c.serverCache.getNode().isIndexed(a.filter.getIndex()),"Server snap not indexed"),Object(o.e)(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=s.viewCache,xn(e,s.changes,s.viewCache.eventCache.getNode(),null)}function xn(e,t,n,r){const i=r?[r]:e.eventRegistrations_;return function(e,t,n,r){const i=[],o=[];return t.forEach(t=>{var n;"child_changed"===t.type&&e.index_.indexedValueChanged(t.oldSnap,t.snapshotNode)&&o.push((n=t.childName,{type:"child_moved",snapshotNode:t.snapshotNode,childName:n}))}),Nt(e,i,"child_removed",t,r,n),Nt(e,i,"child_added",t,r,n),Nt(e,i,"child_moved",o,r,n),Nt(e,i,"child_changed",t,r,n),Nt(e,i,"value",t,r,n),i}(e.eventGenerator_,t,n,i)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let En,kn;class In{constructor(){this.views=new Map}}function Sn(e,t,n,r){const i=t.source.queryId;if(null!==i){const s=e.views.get(i);return Object(o.e)(null!=s,"SyncTree gave us an op for an invalid query."),Tn(s,t,n,r)}{let i=[];for(const o of e.views.values())i=i.concat(Tn(o,t,n,r));return i}}function On(e,t,n,r,i){const o=t._queryIdentifier,s=e.views.get(o);if(!s){let e=en(n,i?r:null),o=!1;e?o=!0:r instanceof Je?(e=tn(n,r),o=!1):(e=Je.EMPTY_NODE,o=!1);const s=Pt(new St(e,o,!1),new St(r,i,!1));return new _n(t,s)}return s}function Nn(e,t,n,r,i,o){const s=On(e,t,r,i,o);return e.views.has(t._queryIdentifier)||e.views.set(t._queryIdentifier,s),function(e,t){e.eventRegistrations_.push(t)}(s,n),function(e,t){const n=e.viewCache_.eventCache,r=[];if(!n.getNode().isLeafNode()){n.getNode().forEachChild(Be,(e,t)=>{r.push(rt(e,t))})}return n.isFullyInitialized()&&r.push(nt(n.getNode())),xn(e,r,n.getNode(),t)}(s,n)}function Pn(e,t,n,r){const i=t._queryIdentifier,s=[];let a=[];const c=Ln(e);if("default"===i)for(const[t,i]of e.views.entries())a=a.concat(Cn(i,n,r)),wn(i)&&(e.views.delete(t),i.query._queryParams.loadsAllData()||s.push(i.query));else{const t=e.views.get(i);t&&(a=a.concat(Cn(t,n,r)),wn(t)&&(e.views.delete(i),t.query._queryParams.loadsAllData()||s.push(t.query)))}return c&&!Ln(e)&&s.push(new(Object(o.e)(En,"Reference.ts has not been loaded"),En)(t._repo,t._path)),{removed:s,events:a}}function An(e){const t=[];for(const n of e.views.values())n.query._queryParams.loadsAllData()||t.push(n);return t}function Rn(e,t){let n=null;for(const r of e.views.values())n=n||bn(r,t);return n}function jn(e,t){if(t._queryParams.loadsAllData())return Mn(e);{const n=t._queryIdentifier;return e.views.get(n)}}function Dn(e,t){return null!=jn(e,t)}function Ln(e){return null!=Mn(e)}function Mn(e){for(const t of e.views.values())if(t.query._queryParams.loadsAllData())return t;return null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qn=1;class Fn{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Mt(null),this.pendingWriteTree_={visibleWrites:qt.empty(),allWrites:[],lastWriteId:-1},this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Hn(e,t,n,r,i){return function(e,t,n,r,i){Object(o.e)(r>e.lastWriteId,"Stacking an older write on top of newer ones"),void 0===i&&(i=!0),e.allWrites.push({path:t,snap:n,writeId:r,visible:i}),i&&(e.visibleWrites=Ft(e.visibleWrites,t,n)),e.lastWriteId=r}(e.pendingWriteTree_,t,n,r,i),i?Gn(e,new kt({fromUser:!0,fromServer:!1,queryId:null,tagged:!1},t,n)):[]}function Un(e,t,n,r){!function(e,t,n,r){Object(o.e)(r>e.lastWriteId,"Stacking an older merge on top of newer ones"),e.allWrites.push({path:t,children:n,writeId:r,visible:!0}),e.visibleWrites=Ht(e.visibleWrites,t,n),e.lastWriteId=r}(e.pendingWriteTree_,t,n,r);const i=Mt.fromObject(n);return Gn(e,new It({fromUser:!0,fromServer:!1,queryId:null,tagged:!1},t,i))}function Wn(e,t,n=!1){const r=function(e,t){for(let n=0;n<e.allWrites.length;n++){const r=e.allWrites[n];if(r.writeId===t)return r}return null}(e.pendingWriteTree_,t);if(Gt(e.pendingWriteTree_,t)){let t=new Mt(null);return null!=r.snap?t=t.set(ce(),!0):D(r.children,e=>{t=t.set(new ae(e),!0)}),Gn(e,new xt(r.path,t,n))}return[]}function Bn(e,t,n){return Gn(e,new kt({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t,n))}function zn(e,t,n,r,i=!1){const o=t._path,s=e.syncPointTree_.get(o);let a=[];if(s&&("default"===t._queryIdentifier||Dn(s,t))){const c=Pn(s,t,n,r);0===s.views.size&&(e.syncPointTree_=e.syncPointTree_.remove(o));const l=c.removed;if(a=c.events,!i){const n=-1!==l.findIndex(e=>e._queryParams.loadsAllData()),i=e.syncPointTree_.findOnPath(o,(e,t)=>Ln(t));if(n&&!i){const t=e.syncPointTree_.subtree(o);if(!t.isEmpty()){const n=function(e){return e.fold((e,t,n)=>{if(t&&Ln(t)){return[Mn(t)]}{let e=[];return t&&(e=An(t)),D(n,(t,n)=>{e=e.concat(n)}),e}})}(t);for(let t=0;t<n.length;++t){const r=n[t],i=r.query,o=Yn(e,r);e.listenProvider_.startListening(nr(i),Jn(e,i),o.hashFn,o.onComplete)}}}if(!i&&l.length>0&&!r)if(n){const n=null;e.listenProvider_.stopListening(nr(t),n)}else l.forEach(t=>{const n=e.queryToTagMap.get(Xn(t));e.listenProvider_.stopListening(nr(t),n)})}!function(e,t){for(let n=0;n<t.length;++n){const r=t[n];if(!r._queryParams.loadsAllData()){const t=Xn(r),n=e.queryToTagMap.get(t);e.queryToTagMap.delete(t),e.tagToQueryMap.delete(n)}}}(e,l)}return a}function Vn(e,t,n,r){const i=Zn(e,r);if(null!=i){const r=er(i),o=r.path,s=r.queryId,a=ve(o,t);return tr(e,o,new kt(Tt(s),a,n))}return[]}function $n(e,t,n,r=!1){const i=t._path;let s=null,a=!1;e.syncPointTree_.foreachOnPath(i,(e,t)=>{const n=ve(e,i);s=s||Rn(t,n),a=a||Ln(t)});let c,l=e.syncPointTree_.get(i);if(l?(a=a||Ln(l),s=s||Rn(l,ce())):(l=new In,e.syncPointTree_=e.syncPointTree_.set(i,l)),null!=s)c=!0;else{c=!1,s=Je.EMPTY_NODE;e.syncPointTree_.subtree(i).foreachChild((e,t)=>{const n=Rn(t,ce());n&&(s=s.updateImmediateChild(e,n))})}const u=Dn(l,t);if(!u&&!t._queryParams.loadsAllData()){const n=Xn(t);Object(o.e)(!e.queryToTagMap.has(n),"View does not exist, but we have a tag");const r=qn++;e.queryToTagMap.set(n,r),e.tagToQueryMap.set(r,n)}let h=Nn(l,t,n,Kt(e.pendingWriteTree_,i),s,c);if(!u&&!a&&!r){const n=jn(l,t);h=h.concat(function(e,t,n){const r=t._path,i=Jn(e,t),s=Yn(e,n),a=e.listenProvider_.startListening(nr(t),i,s.hashFn,s.onComplete),c=e.syncPointTree_.subtree(r);if(i)Object(o.e)(!Ln(c.value),"If we're adding a query, it shouldn't be shadowed");else{const t=c.fold((e,t,n)=>{if(!me(e)&&t&&Ln(t))return[Mn(t).query];{let e=[];return t&&(e=e.concat(An(t).map(e=>e.query))),D(n,(t,n)=>{e=e.concat(n)}),e}});for(let n=0;n<t.length;++n){const r=t[n];e.listenProvider_.stopListening(nr(r),Jn(e,r))}}return a}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,t,n))}return h}function Qn(e,t,n){const r=e.pendingWriteTree_,i=e.syncPointTree_.findOnPath(t,(e,n)=>{const r=Rn(n,ve(e,t));if(r)return r});return Zt(r,t,i,n,!0)}function Kn(e,t){const n=t._path;let r=null;e.syncPointTree_.foreachOnPath(n,(e,t)=>{const i=ve(e,n);r=r||Rn(t,i)});let i=e.syncPointTree_.get(n);i?r=r||Rn(i,ce()):(i=new In,e.syncPointTree_=e.syncPointTree_.set(n,i));const o=null!=r,s=o?new St(r,!0,!1):null;return function(e){return jt(e.viewCache_)}(On(i,t,Kt(e.pendingWriteTree_,t._path),o?s.getNode():Je.EMPTY_NODE,o))}function Gn(e,t){return function e(t,n,r,i){if(me(t.path))return function e(t,n,r,i){const o=n.get(ce());null==r&&null!=o&&(r=Rn(o,ce()));let s=[];n.children.inorderTraversal((n,o)=>{const a=r?r.getImmediateChild(n):null,c=an(i,n),l=t.operationForChild(n);l&&(s=s.concat(e(l,o,a,c)))}),o&&(s=s.concat(Sn(o,t,i,r)));return s}(t,n,r,i);{const o=n.get(ce());null==r&&null!=o&&(r=Rn(o,ce()));let s=[];const a=le(t.path),c=t.operationForChild(a),l=n.children.get(a);if(l&&c){const t=r?r.getImmediateChild(a):null,n=an(i,a);s=s.concat(e(c,l,t,n))}return o&&(s=s.concat(Sn(o,t,i,r))),s}}(t,e.syncPointTree_,null,Kt(e.pendingWriteTree_,ce()))}function Yn(e,t){const n=t.query,r=Jn(e,n);return{hashFn:()=>(function(e){return e.viewCache_.serverCache.getNode()}(t)||Je.EMPTY_NODE).hash(),onComplete:t=>{if("ok"===t)return r?function(e,t,n){const r=Zn(e,n);if(r){const n=er(r),i=n.path,o=n.queryId,s=ve(i,t);return tr(e,i,new Et(Tt(o),s))}return[]}(e,n._path,r):function(e,t){return Gn(e,new Et({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t))}(e,n._path);{const r=function(e,t){let n="Unknown Error";"too_big"===e?n="The data requested exceeds the maximum size that can be accessed with a single request.":"permission_denied"===e?n="Client doesn't have permission to access the desired data.":"unavailable"===e&&(n="The service is unavailable");const r=new Error(e+" at "+t._path.toString()+": "+n);return r.code=e.toUpperCase(),r}(t,n);return zn(e,n,null,r)}}}}function Jn(e,t){const n=Xn(t);return e.queryToTagMap.get(n)}function Xn(e){return e._path.toString()+"$"+e._queryIdentifier}function Zn(e,t){return e.tagToQueryMap.get(t)}function er(e){const t=e.indexOf("$");return Object(o.e)(-1!==t&&t<e.length-1,"Bad queryKey."),{queryId:e.substr(t+1),path:new ae(e.substr(0,t))}}function tr(e,t,n){const r=e.syncPointTree_.get(t);Object(o.e)(r,"Missing sync point for query tag that we're tracking");return Sn(r,n,Kt(e.pendingWriteTree_,t),null)}function nr(e){return e._queryParams.loadsAllData()&&!e._queryParams.isDefault()?new(Object(o.e)(kn,"Reference.ts has not been loaded"),kn)(e._repo,e._path):e}class rr{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new rr(t)}node(){return this.node_}}class ir{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=ge(this.path_,e);return new ir(this.syncTree_,t)}node(){return Qn(this.syncTree_,this.path_)}}const or=function(e,t,n){return e&&"object"==typeof e?(Object(o.e)(".sv"in e,"Unexpected leaf node or priority contents"),"string"==typeof e[".sv"]?sr(e[".sv"],t,n):"object"==typeof e[".sv"]?ar(e[".sv"],t):void Object(o.e)(!1,"Unexpected server value: "+JSON.stringify(e,null,2))):e},sr=function(e,t,n){switch(e){case"timestamp":return n.timestamp;default:Object(o.e)(!1,"Unexpected server value: "+e)}},ar=function(e,t,n){e.hasOwnProperty("increment")||Object(o.e)(!1,"Unexpected server value: "+JSON.stringify(e,null,2));const r=e.increment;"number"!=typeof r&&Object(o.e)(!1,"Unexpected increment value: "+r);const i=t.node();if(Object(o.e)(null!=i,"Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const s=i.getValue();return"number"!=typeof s?r:s+r},cr=function(e,t,n,r){return ur(t,new ir(n,e),r)},lr=function(e,t,n){return ur(e,new rr(t),n)};function ur(e,t,n){const r=e.getPriority().val(),i=or(r,t.getImmediateChild(".priority"),n);let o;if(e.isLeafNode()){const r=e,o=or(r.getValue(),t,n);return o!==r.getValue()||i!==r.getPriority().val()?new We(o,Ze(i)):e}{const r=e;return o=r,i!==r.getPriority().val()&&(o=o.updatePriority(new We(i))),r.forEachChild(Be,(e,r)=>{const i=ur(r,t.getImmediateChild(e),n);i!==r&&(o=o.updateImmediateChild(e,i))}),o}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr{constructor(e="",t=null,n={children:{},childCount:0}){this.name=e,this.parent=t,this.node=n}}function dr(e,t){let n=t instanceof ae?t:new ae(t),r=e,i=le(n);for(;null!==i;){const e=Object(o.M)(r.node.children,i)||{children:{},childCount:0};r=new hr(i,r,e),n=he(n),i=le(n)}return r}function pr(e){return e.node.value}function fr(e,t){e.node.value=t,yr(e)}function gr(e){return e.node.childCount>0}function mr(e,t){D(e.node.children,(n,r)=>{t(new hr(n,e,r))})}function vr(e){return new ae(null===e.parent?e.name:vr(e.parent)+"/"+e.name)}function yr(e){null!==e.parent&&function(e,t,n){const r=function(e){return void 0===pr(e)&&!gr(e)}(n),i=Object(o.k)(e.node.children,t);r&&i?(delete e.node.children[t],e.node.childCount--,yr(e)):r||i||(e.node.children[t]=n.node,e.node.childCount++,yr(e))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e.parent,e.name,e)}const _r=/[\[\].#$\/\u0000-\u001F\u007F]/,br=/[\[\].#$\u0000-\u001F\u007F]/,wr=function(e){return"string"==typeof e&&0!==e.length&&!_r.test(e)},Cr=function(e){return"string"==typeof e&&0!==e.length&&!br.test(e)},Tr=function(e){return null===e||"string"==typeof e||"number"==typeof e&&!I(e)||e&&"object"==typeof e&&Object(o.k)(e,".sv")},xr=function(e,t,n,r){r&&void 0===t||Er(Object(o.q)(e,"value"),t,n)},Er=function(e,t,n){const r=n instanceof ae?new we(n,e):n;if(void 0===t)throw new Error(e+"contains undefined "+Te(r));if("function"==typeof t)throw new Error(e+"contains a function "+Te(r)+" with contents = "+t.toString());if(I(t))throw new Error(e+"contains "+t.toString()+" "+Te(r));if("string"==typeof t&&t.length>10485760/3&&Object(o.N)(t)>10485760)throw new Error(e+"contains a string greater than 10485760 utf8 bytes "+Te(r)+" ('"+t.substring(0,50)+"...')");if(t&&"object"==typeof t){let n=!1,i=!1;if(D(t,(t,s)=>{if(".value"===t)n=!0;else if(".priority"!==t&&".sv"!==t&&(i=!0,!wr(t)))throw new Error(e+" contains an invalid key ("+t+") "+Te(r)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');!function(e,t){e.parts_.length>0&&(e.byteLength_+=1),e.parts_.push(t),e.byteLength_+=Object(o.N)(t),Ce(e)}(r,t),Er(e,s,r),function(e){const t=e.parts_.pop();e.byteLength_-=Object(o.N)(t),e.parts_.length>0&&(e.byteLength_-=1)}(r)}),n&&i)throw new Error(e+' contains ".value" child '+Te(r)+" in addition to actual children.")}},kr=function(e,t,n,r){if(r&&void 0===t)return;const i=Object(o.q)(e,"values");if(!t||"object"!=typeof t||Array.isArray(t))throw new Error(i+" must be an object containing the children to replace.");const s=[];D(t,(e,t)=>{const r=new ae(e);if(Er(i,t,ge(n,r)),".priority"===de(r)&&!Tr(t))throw new Error(i+"contains an invalid value for '"+r.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");s.push(r)}),function(e,t){let n,r;for(n=0;n<t.length;n++){r=t[n];const i=pe(r);for(let t=0;t<i.length;t++)if(".priority"===i[t]&&t===i.length-1);else if(!wr(i[t]))throw new Error(e+"contains an invalid key ("+i[t]+") in path "+r.toString()+'. Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"')}t.sort(ye);let i=null;for(n=0;n<t.length;n++){if(r=t[n],null!==i&&be(i,r))throw new Error(e+"contains a path "+i.toString()+" that is ancestor of another path "+r.toString());i=r}}(i,s)},Ir=function(e,t,n){if(!n||void 0!==t){if(I(t))throw new Error(Object(o.q)(e,"priority")+"is "+t.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!Tr(t))throw new Error(Object(o.q)(e,"priority")+"must be a valid Firebase priority (a string, finite number, server value, or null).")}},Sr=function(e,t,n,r){if(!(r&&void 0===n||wr(n)))throw new Error(Object(o.q)(e,t)+'was an invalid key = "'+n+'".  Firebase keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]").')},Or=function(e,t,n,r){if(!(r&&void 0===n||Cr(n)))throw new Error(Object(o.q)(e,t)+'was an invalid path = "'+n+'". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"')},Nr=function(e,t){if(".info"===le(t))throw new Error(e+" failed = Can't modify data under /.info/")},Pr=function(e,t){const n=t.path.toString();if("string"!=typeof t.repoInfo.host||0===t.repoInfo.host.length||!wr(t.repoInfo.namespace)&&"localhost"!==t.repoInfo.host.split(":")[0]||0!==n.length&&!function(e){return e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),Cr(e)}(n))throw new Error(Object(o.q)(e,"url")+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".')};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ar{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Rr(e,t){let n=null;for(let r=0;r<t.length;r++){const i=t[r],o=i.getPath();null===n||_e(o,n.path)||(e.eventLists_.push(n),n=null),null===n&&(n={events:[],path:o}),n.events.push(i)}n&&e.eventLists_.push(n)}function jr(e,t,n){Rr(e,n),Lr(e,e=>_e(e,t))}function Dr(e,t,n){Rr(e,n),Lr(e,e=>be(e,t)||be(t,e))}function Lr(e,t){e.recursionDepth_++;let n=!0;for(let r=0;r<e.eventLists_.length;r++){const i=e.eventLists_[r];if(i){t(i.path)?(Mr(e.eventLists_[r]),e.eventLists_[r]=null):n=!1}}n&&(e.eventLists_=[]),e.recursionDepth_--}function Mr(e){for(let t=0;t<e.events.length;t++){const n=e.events[t];if(null!==n){e.events[t]=null;const r=n.getEventRunner();_&&C("event: "+n.toString()),F(r)}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qr{constructor(e,t,n,r){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=n,this.appCheckProvider_=r,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Ar,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=vt(),this.transactionQueueTree_=new hr,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Fr(e,t,n){if(e.stats_=Y(e.repoInfo_),e.forceRestClient_||("object"==typeof window&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0)e.server_=new gt(e.repoInfo_,(t,n,r,i)=>{Wr(e,t,n,r,i)},e.authTokenProvider_,e.appCheckProvider_),setTimeout(()=>Br(e,!0),0);else{if(null!=n){if("object"!=typeof n)throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Object(o.P)(n)}catch(e){throw new Error("Invalid authOverride provided: "+e)}}e.persistentConnection_=new Ee(e.repoInfo_,t,(t,n,r,i)=>{Wr(e,t,n,r,i)},t=>{Br(e,t)},t=>{!function(e,t){D(t,(t,n)=>{zr(e,t,n)})}(e,t)},e.authTokenProvider_,e.appCheckProvider_,n),e.server_=e.persistentConnection_}e.authTokenProvider_.addTokenChangeListener(t=>{e.server_.refreshAuthToken(t)}),e.appCheckProvider_.addTokenChangeListener(t=>{e.server_.refreshAppCheckToken(t.token)}),e.statsReporter_=function(e,t){const n=e.toString();return G[n]||(G[n]=t()),G[n]}(e.repoInfo_,()=>new wt(e.stats_,e.server_)),e.infoData_=new mt,e.infoSyncTree_=new Fn({startListening:(t,n,r,i)=>{let o=[];const s=e.infoData_.getNode(t._path);return s.isEmpty()||(o=Bn(e.infoSyncTree_,t._path,s),setTimeout(()=>{i("ok")},0)),o},stopListening:()=>{}}),zr(e,"connected",!1),e.serverSyncTree_=new Fn({startListening:(t,n,r,i)=>(e.server_.listen(t,r,n,(n,r)=>{const o=i(n,r);Dr(e.eventQueue_,t._path,o)}),[]),stopListening:(t,n)=>{e.server_.unlisten(t,n)}})}function Hr(e){const t=e.infoData_.getNode(new ae(".info/serverTimeOffset")).val()||0;return(new Date).getTime()+t}function Ur(e){return(t=(t={timestamp:Hr(e)})||{}).timestamp=t.timestamp||(new Date).getTime(),t;var t}function Wr(e,t,n,r,i){e.dataUpdateCount++;const s=new ae(t);n=e.interceptServerDataCallback_?e.interceptServerDataCallback_(t,n):n;let a=[];if(i)if(r){const t=Object(o.J)(n,e=>Ze(e));a=function(e,t,n,r){const i=Zn(e,r);if(i){const r=er(i),o=r.path,s=r.queryId,a=ve(o,t),c=Mt.fromObject(n);return tr(e,o,new It(Tt(s),a,c))}return[]}(e.serverSyncTree_,s,t,i)}else{const t=Ze(n);a=Vn(e.serverSyncTree_,s,t,i)}else if(r){const t=Object(o.J)(n,e=>Ze(e));a=function(e,t,n){const r=Mt.fromObject(n);return Gn(e,new It({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t,r))}(e.serverSyncTree_,s,t)}else{const t=Ze(n);a=Bn(e.serverSyncTree_,s,t)}let c=s;a.length>0&&(c=ti(e,s)),Dr(e.eventQueue_,c,a)}function Br(e,t){zr(e,"connected",t),!1===t&&function(e){Jr(e,"onDisconnectEvents");const t=Ur(e),n=vt();_t(e.onDisconnect_,ce(),(r,i)=>{const o=cr(r,i,e.serverSyncTree_,t);yt(n,r,o)});let r=[];_t(n,ce(),(t,n)=>{r=r.concat(Bn(e.serverSyncTree_,t,n));const i=oi(e,t);ti(e,i)}),e.onDisconnect_=vt(),Dr(e.eventQueue_,ce(),r)}(e)}function zr(e,t,n){const r=new ae("/.info/"+t),i=Ze(n);e.infoData_.updateSnapshot(r,i);const o=Bn(e.infoSyncTree_,r,i);Dr(e.eventQueue_,r,o)}function Vr(e){return e.nextWriteId_++}function $r(e,t,n,r,i){Jr(e,"set",{path:t.toString(),value:n,priority:r});const o=Ur(e),s=Ze(n,r),a=Qn(e.serverSyncTree_,t),c=lr(s,a,o),l=Vr(e),u=Hn(e.serverSyncTree_,t,c,l,!0);Rr(e.eventQueue_,u),e.server_.put(t.toString(),s.val(!0),(n,r)=>{const o="ok"===n;o||k("set at "+t+" failed: "+n);const s=Wn(e.serverSyncTree_,l,!o);Dr(e.eventQueue_,t,s),Xr(e,i,n,r)});const h=oi(e,t);ti(e,h),Dr(e.eventQueue_,h,[])}function Qr(e,t,n){e.server_.onDisconnectCancel(t.toString(),(r,i)=>{"ok"===r&&function e(t,n){if(me(n))return t.value=null,t.children.clear(),!0;if(null!==t.value){if(t.value.isLeafNode())return!1;{const r=t.value;return t.value=null,r.forEachChild(Be,(e,n)=>{yt(t,new ae(e),n)}),e(t,n)}}if(t.children.size>0){const r=le(n);if(n=he(n),t.children.has(r)){e(t.children.get(r),n)&&t.children.delete(r)}return 0===t.children.size}return!0}(e.onDisconnect_,t),Xr(e,n,r,i)})}function Kr(e,t,n,r){const i=Ze(n);e.server_.onDisconnectPut(t.toString(),i.val(!0),(n,o)=>{"ok"===n&&yt(e.onDisconnect_,t,i),Xr(e,r,n,o)})}function Gr(e,t,n){let r;r=".info"===le(t._path)?zn(e.infoSyncTree_,t,n):zn(e.serverSyncTree_,t,n),jr(e.eventQueue_,t._path,r)}function Yr(e){e.persistentConnection_&&e.persistentConnection_.interrupt("repo_interrupt")}function Jr(e,...t){let n="";e.persistentConnection_&&(n=e.persistentConnection_.id+":"),C(n,...t)}function Xr(e,t,n,r){t&&F(()=>{if("ok"===n)t(null);else{const e=(n||"error").toUpperCase();let i=e;r&&(i+=": "+r);const o=new Error(i);o.code=e,t(o)}})}function Zr(e,t,n){return Qn(e.serverSyncTree_,t,n)||Je.EMPTY_NODE}function ei(e,t=e.transactionQueueTree_){if(t||ii(e,t),pr(t)){const n=ri(e,t);Object(o.e)(n.length>0,"Sending zero length transaction queue");n.every(e=>0===e.status)&&function(e,t,n){const r=n.map(e=>e.currentWriteId),i=Zr(e,t,r);let s=i;const a=i.hash();for(let e=0;e<n.length;e++){const r=n[e];Object(o.e)(0===r.status,"tryToSendTransactionQueue_: items in queue should all be run."),r.status=1,r.retryCount++;const i=ve(t,r.path);s=s.updateChild(i,r.currentOutputSnapshotRaw)}const c=s.val(!0),l=t;e.server_.put(l.toString(),c,r=>{Jr(e,"transaction put response",{path:l.toString(),status:r});let i=[];if("ok"===r){const r=[];for(let t=0;t<n.length;t++)n[t].status=2,i=i.concat(Wn(e.serverSyncTree_,n[t].currentWriteId)),n[t].onComplete&&r.push(()=>n[t].onComplete(null,!0,n[t].currentOutputSnapshotResolved)),n[t].unwatcher();ii(e,dr(e.transactionQueueTree_,t)),ei(e,e.transactionQueueTree_),Dr(e.eventQueue_,t,i);for(let e=0;e<r.length;e++)F(r[e])}else{if("datastale"===r)for(let e=0;e<n.length;e++)3===n[e].status?n[e].status=4:n[e].status=0;else{k("transaction at "+l.toString()+" failed: "+r);for(let e=0;e<n.length;e++)n[e].status=4,n[e].abortReason=r}ti(e,t)}},a)}(e,vr(t),n)}else gr(t)&&mr(t,t=>{ei(e,t)})}function ti(e,t){const n=ni(e,t),r=vr(n);return function(e,t,n){if(0===t.length)return;const r=[];let i=[];const s=t.filter(e=>0===e.status).map(e=>e.currentWriteId);for(let c=0;c<t.length;c++){const l=t[c],u=ve(n,l.path);let h,d=!1;if(Object(o.e)(null!==u,"rerunTransactionsUnderNode_: relativePath should not be null."),4===l.status)d=!0,h=l.abortReason,i=i.concat(Wn(e.serverSyncTree_,l.currentWriteId,!0));else if(0===l.status)if(l.retryCount>=25)d=!0,h="maxretry",i=i.concat(Wn(e.serverSyncTree_,l.currentWriteId,!0));else{const n=Zr(e,l.path,s);l.currentInputSnapshot=n;const r=t[c].update(n.val());if(void 0!==r){Er("transaction failed: Data returned ",r,l.path);let t=Ze(r);"object"==typeof r&&null!=r&&Object(o.k)(r,".priority")||(t=t.updatePriority(n.getPriority()));const a=l.currentWriteId,c=Ur(e),u=lr(t,n,c);l.currentOutputSnapshotRaw=t,l.currentOutputSnapshotResolved=u,l.currentWriteId=Vr(e),s.splice(s.indexOf(a),1),i=i.concat(Hn(e.serverSyncTree_,l.path,u,l.currentWriteId,l.applyLocally)),i=i.concat(Wn(e.serverSyncTree_,a,!0))}else d=!0,h="nodata",i=i.concat(Wn(e.serverSyncTree_,l.currentWriteId,!0))}Dr(e.eventQueue_,n,i),i=[],d&&(t[c].status=2,a=t[c].unwatcher,setTimeout(a,Math.floor(0)),t[c].onComplete&&("nodata"===h?r.push(()=>t[c].onComplete(null,!1,t[c].currentInputSnapshot)):r.push(()=>t[c].onComplete(new Error(h),!1,null))))}var a;ii(e,e.transactionQueueTree_);for(let e=0;e<r.length;e++)F(r[e]);ei(e,e.transactionQueueTree_)}(e,ri(e,n),r),r}function ni(e,t){let n,r=e.transactionQueueTree_;for(n=le(t);null!==n&&void 0===pr(r);)r=dr(r,n),n=le(t=he(t));return r}function ri(e,t){const n=[];return function e(t,n,r){const i=pr(n);if(i)for(let e=0;e<i.length;e++)r.push(i[e]);mr(n,n=>{e(t,n,r)})}(e,t,n),n.sort((e,t)=>e.order-t.order),n}function ii(e,t){const n=pr(t);if(n){let e=0;for(let t=0;t<n.length;t++)2!==n[t].status&&(n[e]=n[t],e++);n.length=e,fr(t,n.length>0?n:void 0)}mr(t,t=>{ii(e,t)})}function oi(e,t){const n=vr(ni(e,t)),r=dr(e.transactionQueueTree_,t);return function(e,t,n){let r=n?e:e.parent;for(;null!==r;){if(t(r))return!0;r=r.parent}}(r,t=>{si(e,t)}),si(e,r),function e(t,n,r,i){r&&!i&&n(t),mr(t,t=>{e(t,n,!0,i)}),r&&i&&n(t)}(r,t=>{si(e,t)}),n}function si(e,t){const n=pr(t);if(n){const r=[];let i=[],s=-1;for(let t=0;t<n.length;t++)3===n[t].status||(1===n[t].status?(Object(o.e)(s===t-1,"All SENT items should be at beginning of queue."),s=t,n[t].status=3,n[t].abortReason="set"):(Object(o.e)(0===n[t].status,"Unexpected transaction status in abort"),n[t].unwatcher(),i=i.concat(Wn(e.serverSyncTree_,n[t].currentWriteId,!0)),n[t].onComplete&&r.push(n[t].onComplete.bind(null,new Error("set"),!1,null))));-1===s?fr(t,void 0):n.length=s+1,Dr(e.eventQueue_,vr(t),i);for(let e=0;e<r.length;e++)F(r[e])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ai=function(e,t){const n=ci(e),r=n.namespace;"firebase.com"===n.domain&&E(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),r&&"undefined"!==r||"localhost"===n.domain||E("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||"undefined"!=typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&k("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().");const i="ws"===n.scheme||"wss"===n.scheme;return{repoInfo:new V(n.host,n.secure,r,i,t,"",r!==n.subdomain),path:new ae(n.pathString)}},ci=function(e){let t="",n="",r="",i="",o="",s=!0,a="https",c=443;if("string"==typeof e){let l=e.indexOf("//");l>=0&&(a=e.substring(0,l-1),e=e.substring(l+2));let u=e.indexOf("/");-1===u&&(u=e.length);let h=e.indexOf("?");-1===h&&(h=e.length),t=e.substring(0,Math.min(u,h)),u<h&&(i=function(e){let t="";const n=e.split("/");for(let e=0;e<n.length;e++)if(n[e].length>0){let r=n[e];try{r=decodeURIComponent(r.replace(/\+/g," "))}catch(e){}t+="/"+r}return t}(e.substring(u,h)));const d=function(e){const t={};"?"===e.charAt(0)&&(e=e.substring(1));for(const n of e.split("&")){if(0===n.length)continue;const r=n.split("=");2===r.length?t[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):k(`Invalid query segment '${n}' in query '${e}'`)}return t}(e.substring(Math.min(e.length,h)));l=t.indexOf(":"),l>=0?(s="https"===a||"wss"===a,c=parseInt(t.substring(l+1),10)):l=t.length;const p=t.slice(0,l);if("localhost"===p.toLowerCase())n="localhost";else if(p.split(".").length<=2)n=p;else{const e=t.indexOf(".");r=t.substring(0,e).toLowerCase(),n=t.substring(e+1),o=r}"ns"in d&&(o=d.ns)}return{host:t,port:c,domain:n,subdomain:r,secure:s,scheme:a,pathString:i,namespace:o}},li="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",ui=function(){let e=0;const t=[];return function(n){const r=n===e;let i;e=n;const s=new Array(8);for(i=7;i>=0;i--)s[i]=li.charAt(n%64),n=Math.floor(n/64);Object(o.e)(0===n,"Cannot push at time == 0");let a=s.join("");if(r){for(i=11;i>=0&&63===t[i];i--)t[i]=0;t[i]++}else for(i=0;i<12;i++)t[i]=Math.floor(64*Math.random());for(i=0;i<12;i++)a+=li.charAt(t[i]);return Object(o.e)(20===a.length,"nextPushId: Length should be 20."),a}}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class hi{constructor(e,t,n,r){this.eventType=e,this.eventRegistration=t,this.snapshot=n,this.prevName=r}getPath(){const e=this.snapshot.ref;return"value"===this.eventType?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Object(o.P)(this.snapshot.exportVal())}}class di{constructor(e,t,n){this.eventRegistration=e,this.error=t,this.path=n}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return Object(o.e)(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||void 0!==this.snapshotCallback.userCallback&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi{constructor(e,t){this._repo=e,this._path=t}cancel(){const e=new o.a;return Qr(this._repo,this._path,e.wrapCallback(()=>{})),e.promise}remove(){Nr("OnDisconnect.remove",this._path);const e=new o.a;return Kr(this._repo,this._path,null,e.wrapCallback(()=>{})),e.promise}set(e){Nr("OnDisconnect.set",this._path),xr("OnDisconnect.set",e,this._path,!1);const t=new o.a;return Kr(this._repo,this._path,e,t.wrapCallback(()=>{})),t.promise}setWithPriority(e,t){Nr("OnDisconnect.setWithPriority",this._path),xr("OnDisconnect.setWithPriority",e,this._path,!1),Ir("OnDisconnect.setWithPriority",t,!1);const n=new o.a;return function(e,t,n,r,i){const o=Ze(n,r);e.server_.onDisconnectPut(t.toString(),o.val(!0),(n,r)=>{"ok"===n&&yt(e.onDisconnect_,t,o),Xr(e,i,n,r)})}(this._repo,this._path,e,t,n.wrapCallback(()=>{})),n.promise}update(e){Nr("OnDisconnect.update",this._path),kr("OnDisconnect.update",e,this._path,!1);const t=new o.a;return function(e,t,n,r){if(Object(o.B)(n))return C("onDisconnect().update() called with empty data.  Don't do anything."),void Xr(e,r,"ok",void 0);e.server_.onDisconnectMerge(t.toString(),n,(i,o)=>{"ok"===i&&D(n,(n,r)=>{const i=Ze(r);yt(e.onDisconnect_,ge(t,n),i)}),Xr(e,r,i,o)})}(this._repo,this._path,e,t.wrapCallback(()=>{})),t.promise}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gi{constructor(e,t,n,r){this._repo=e,this._path=t,this._queryParams=n,this._orderByCalled=r}get key(){return me(this._path)?null:de(this._path)}get ref(){return new _i(this._repo,this._path)}get _queryIdentifier(){const e=ft(this._queryParams),t=R(e);return"{}"===t?"default":t}get _queryObject(){return ft(this._queryParams)}isEqual(e){if(!((e=Object(o.w)(e))instanceof gi))return!1;const t=this._repo===e._repo,n=_e(this._path,e._path),r=this._queryIdentifier===e._queryIdentifier;return t&&n&&r}toJSON(){return this.toString()}toString(){return this._repo.toString()+function(e){let t="";for(let n=e.pieceNum_;n<e.pieces_.length;n++)""!==e.pieces_[n]&&(t+="/"+encodeURIComponent(String(e.pieces_[n])));return t||"/"}(this._path)}}function mi(e,t){if(!0===e._orderByCalled)throw new Error(t+": You can't combine multiple orderBy calls.")}function vi(e){let t=null,n=null;if(e.hasStart()&&(t=e.getIndexStartValue()),e.hasEnd()&&(n=e.getIndexEndValue()),e.getIndex()===Ne){const r="Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().",i="Query: When ordering by key, the argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() must be a string.";if(e.hasStart()){if(e.getIndexStartName()!==S)throw new Error(r);if("string"!=typeof t)throw new Error(i)}if(e.hasEnd()){if(e.getIndexEndName()!==O)throw new Error(r);if("string"!=typeof n)throw new Error(i)}}else if(e.getIndex()===Be){if(null!=t&&!Tr(t)||null!=n&&!Tr(n))throw new Error("Query: When ordering by priority, the first argument passed to startAt(), startAfter() endAt(), endBefore(), or equalTo() must be a valid priority value (null, a number, or a string).")}else if(Object(o.e)(e.getIndex()instanceof et||e.getIndex()===tt,"unknown index type."),null!=t&&"object"==typeof t||null!=n&&"object"==typeof n)throw new Error("Query: First argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() cannot be an object.")}function yi(e){if(e.hasStart()&&e.hasEnd()&&e.hasLimit()&&!e.hasAnchoredLimit())throw new Error("Query: Can't combine startAt(), startAfter(), endAt(), endBefore(), and limit(). Use limitToFirst() or limitToLast() instead.")}class _i extends gi{constructor(e,t){super(e,t,new lt,!1)}get parent(){const e=fe(this._path);return null===e?null:new _i(this._repo,e)}get root(){let e=this;for(;null!==e.parent;)e=e.parent;return e}}class bi{constructor(e,t,n){this._node=e,this.ref=t,this._index=n}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new ae(e),n=Ti(this.ref,e);return new bi(this._node.getChild(t),n,Be)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){if(this._node.isLeafNode())return!1;return!!this._node.forEachChild(this._index,(t,n)=>e(new bi(n,Ti(this.ref,t),Be)))}hasChild(e){const t=new ae(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return!this._node.isLeafNode()&&!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function wi(e,t){return(e=Object(o.w)(e))._checkNotDeleted("ref"),void 0!==t?Ti(e._root,t):e._root}function Ci(e,t){(e=Object(o.w)(e))._checkNotDeleted("refFromURL");const n=ai(t,e._repo.repoInfo_.nodeAdmin);Pr("refFromURL",n);const r=n.repoInfo;return e._repo.repoInfo_.isCustomHost()||r.host===e._repo.repoInfo_.host||E("refFromURL: Host name does not match the current database: (found "+r.host+" but expected "+e._repo.repoInfo_.host+")"),wi(e,n.path.toString())}function Ti(e,t){var n,r,i,s;return null===le((e=Object(o.w)(e))._path)?(n="child",r="path",s=!1,(i=t)&&(i=i.replace(/^\/*\.info(\/|$)/,"/")),Or(n,r,i,s)):Or("child","path",t,!1),new _i(e._repo,ge(e._path,t))}function xi(e,t){e=Object(o.w)(e),Nr("push",e._path),xr("push",t,e._path,!0);const n=Hr(e._repo),r=ui(n),i=Ti(e,r),s=Ti(e,r);let a;return a=null!=t?ki(s,t).then(()=>s):Promise.resolve(s),i.then=a.then.bind(a),i.catch=a.then.bind(a,void 0),i}function Ei(e){return Nr("remove",e._path),ki(e,null)}function ki(e,t){e=Object(o.w)(e),Nr("set",e._path),xr("set",t,e._path,!1);const n=new o.a;return $r(e._repo,e._path,t,null,n.wrapCallback(()=>{})),n.promise}function Ii(e,t){e=Object(o.w)(e),Nr("setPriority",e._path),Ir("setPriority",t,!1);const n=new o.a;return $r(e._repo,ge(e._path,".priority"),t,null,n.wrapCallback(()=>{})),n.promise}function Si(e,t,n){if(Nr("setWithPriority",e._path),xr("setWithPriority",t,e._path,!1),Ir("setWithPriority",n,!1),".length"===e.key||".keys"===e.key)throw"setWithPriority failed: "+e.key+" is a read-only object.";const r=new o.a;return $r(e._repo,e._path,t,n,r.wrapCallback(()=>{})),r.promise}function Oi(e,t){kr("update",t,e._path,!1);const n=new o.a;return function(e,t,n,r){Jr(e,"update",{path:t.toString(),value:n});let i=!0;const o=Ur(e),s={};if(D(n,(n,r)=>{i=!1,s[n]=cr(ge(t,n),Ze(r),e.serverSyncTree_,o)}),i)C("update() called with empty data.  Don't do anything."),Xr(e,r,"ok",void 0);else{const i=Vr(e),o=Un(e.serverSyncTree_,t,s,i);Rr(e.eventQueue_,o),e.server_.merge(t.toString(),n,(n,o)=>{const s="ok"===n;s||k("update at "+t+" failed: "+n);const a=Wn(e.serverSyncTree_,i,!s),c=a.length>0?ti(e,t):t;Dr(e.eventQueue_,c,a),Xr(e,r,n,o)}),D(n,n=>{const r=oi(e,ge(t,n));ti(e,r)}),Dr(e.eventQueue_,t,[])}}(e._repo,e._path,t,n.wrapCallback(()=>{})),n.promise}function Ni(e){e=Object(o.w)(e);const t=new pi(()=>{}),n=new Pi(t);return function(e,t,n){const r=Kn(e.serverSyncTree_,t);return null!=r?Promise.resolve(r):e.server_.get(t).then(r=>{const i=Ze(r).withIndex(t._queryParams.getIndex());let o;if($n(e.serverSyncTree_,t,n,!0),t._queryParams.loadsAllData())o=Bn(e.serverSyncTree_,t._path,i);else{const n=Jn(e.serverSyncTree_,t);o=Vn(e.serverSyncTree_,t._path,i,n)}return Dr(e.eventQueue_,t._path,o),zn(e.serverSyncTree_,t,n,null,!0),i},n=>(Jr(e,"get for query "+Object(o.P)(t)+" failed: "+n),Promise.reject(new Error(n))))}(e._repo,e,n).then(t=>new bi(t,new _i(e._repo,e._path),e._queryParams.getIndex()))}class Pi{constructor(e){this.callbackContext=e}respondsTo(e){return"value"===e}createEvent(e,t){const n=t._queryParams.getIndex();return new hi("value",this,new bi(e.snapshotNode,new _i(t._repo,t._path),n))}getEventRunner(e){return"cancel"===e.getEventType()?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new di(this,e,t):null}matches(e){return e instanceof Pi&&(!e.callbackContext||!this.callbackContext||e.callbackContext.matches(this.callbackContext))}hasAnyCallback(){return null!==this.callbackContext}}class Ai{constructor(e,t){this.eventType=e,this.callbackContext=t}respondsTo(e){let t="children_added"===e?"child_added":e;return t="children_removed"===t?"child_removed":t,this.eventType===t}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new di(this,e,t):null}createEvent(e,t){Object(o.e)(null!=e.childName,"Child events should have a childName.");const n=Ti(new _i(t._repo,t._path),e.childName),r=t._queryParams.getIndex();return new hi(e.type,this,new bi(e.snapshotNode,n,r),e.prevName)}getEventRunner(e){return"cancel"===e.getEventType()?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof Ai&&(this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)))}hasAnyCallback(){return!!this.callbackContext}}function Ri(e,t,n,r,i){let o;if("object"==typeof r&&(o=void 0,i=r),"function"==typeof r&&(o=r),i&&i.onlyOnce){const t=n,r=(n,r)=>{Gr(e._repo,e,a),t(n,r)};r.userCallback=n.userCallback,r.context=n.context,n=r}const s=new pi(n,o||void 0),a="value"===t?new Pi(s):new Ai(t,s);return function(e,t,n){let r;r=".info"===le(t._path)?$n(e.infoSyncTree_,t,n):$n(e.serverSyncTree_,t,n),jr(e.eventQueue_,t._path,r)}(e._repo,e,a),()=>Gr(e._repo,e,a)}function ji(e,t,n,r){return Ri(e,"value",t,n,r)}function Di(e,t,n,r){return Ri(e,"child_added",t,n,r)}function Li(e,t,n,r){return Ri(e,"child_changed",t,n,r)}function Mi(e,t,n,r){return Ri(e,"child_moved",t,n,r)}function qi(e,t,n,r){return Ri(e,"child_removed",t,n,r)}function Fi(e,t,n){let r=null;const i=n?new pi(n):null;"value"===t?r=new Pi(i):t&&(r=new Ai(t,i)),Gr(e._repo,e,r)}class Hi{}class Ui extends Hi{constructor(e,t){super(),this._value=e,this._key=t}_apply(e){xr("endAt",this._value,e._path,!0);const t=ht(e._queryParams,this._value,this._key);if(yi(t),vi(t),e._queryParams.hasEnd())throw new Error("endAt: Starting point was already set (by another call to endAt, endBefore or equalTo).");return new gi(e._repo,e._path,t,e._orderByCalled)}}function Wi(e,t){return Sr("endAt","key",t,!0),new Ui(e,t)}class Bi extends Hi{constructor(e,t){super(),this._value=e,this._key=t}_apply(e){xr("endBefore",this._value,e._path,!1);const t=function(e,t,n){let r;return r=e.index_===Ne||n?ht(e,t,n):ht(e,t,S),r.endBeforeSet_=!0,r}(e._queryParams,this._value,this._key);if(yi(t),vi(t),e._queryParams.hasEnd())throw new Error("endBefore: Starting point was already set (by another call to endAt, endBefore or equalTo).");return new gi(e._repo,e._path,t,e._orderByCalled)}}function zi(e,t){return Sr("endBefore","key",t,!0),new Bi(e,t)}class Vi extends Hi{constructor(e,t){super(),this._value=e,this._key=t}_apply(e){xr("startAt",this._value,e._path,!0);const t=ut(e._queryParams,this._value,this._key);if(yi(t),vi(t),e._queryParams.hasStart())throw new Error("startAt: Starting point was already set (by another call to startAt, startBefore or equalTo).");return new gi(e._repo,e._path,t,e._orderByCalled)}}function $i(e=null,t){return Sr("startAt","key",t,!0),new Vi(e,t)}class Qi extends Hi{constructor(e,t){super(),this._value=e,this._key=t}_apply(e){xr("startAfter",this._value,e._path,!1);const t=function(e,t,n){let r;return r=e.index_===Ne||n?ut(e,t,n):ut(e,t,O),r.startAfterSet_=!0,r}(e._queryParams,this._value,this._key);if(yi(t),vi(t),e._queryParams.hasStart())throw new Error("startAfter: Starting point was already set (by another call to startAt, startAfter, or equalTo).");return new gi(e._repo,e._path,t,e._orderByCalled)}}function Ki(e,t){return Sr("startAfter","key",t,!0),new Qi(e,t)}class Gi extends Hi{constructor(e){super(),this._limit=e}_apply(e){if(e._queryParams.hasLimit())throw new Error("limitToFirst: Limit was already set (by another call to limitToFirst or limitToLast).");return new gi(e._repo,e._path,function(e,t){const n=e.copy();return n.limitSet_=!0,n.limit_=t,n.viewFrom_="l",n}(e._queryParams,this._limit),e._orderByCalled)}}function Yi(e){if("number"!=typeof e||Math.floor(e)!==e||e<=0)throw new Error("limitToFirst: First argument must be a positive integer.");return new Gi(e)}class Ji extends Hi{constructor(e){super(),this._limit=e}_apply(e){if(e._queryParams.hasLimit())throw new Error("limitToLast: Limit was already set (by another call to limitToFirst or limitToLast).");return new gi(e._repo,e._path,function(e,t){const n=e.copy();return n.limitSet_=!0,n.limit_=t,n.viewFrom_="r",n}(e._queryParams,this._limit),e._orderByCalled)}}function Xi(e){if("number"!=typeof e||Math.floor(e)!==e||e<=0)throw new Error("limitToLast: First argument must be a positive integer.");return new Ji(e)}class Zi extends Hi{constructor(e){super(),this._path=e}_apply(e){mi(e,"orderByChild");const t=new ae(this._path);if(me(t))throw new Error("orderByChild: cannot pass in empty path. Use orderByValue() instead.");const n=new et(t),r=dt(e._queryParams,n);return vi(r),new gi(e._repo,e._path,r,!0)}}function eo(e){if("$key"===e)throw new Error('orderByChild: "$key" is invalid.  Use orderByKey() instead.');if("$priority"===e)throw new Error('orderByChild: "$priority" is invalid.  Use orderByPriority() instead.');if("$value"===e)throw new Error('orderByChild: "$value" is invalid.  Use orderByValue() instead.');return Or("orderByChild","path",e,!1),new Zi(e)}class to extends Hi{_apply(e){mi(e,"orderByKey");const t=dt(e._queryParams,Ne);return vi(t),new gi(e._repo,e._path,t,!0)}}function no(){return new to}class ro extends Hi{_apply(e){mi(e,"orderByPriority");const t=dt(e._queryParams,Be);return vi(t),new gi(e._repo,e._path,t,!0)}}function io(){return new ro}class oo extends Hi{_apply(e){mi(e,"orderByValue");const t=dt(e._queryParams,tt);return vi(t),new gi(e._repo,e._path,t,!0)}}function so(){return new oo}class ao extends Hi{constructor(e,t){super(),this._value=e,this._key=t}_apply(e){if(xr("equalTo",this._value,e._path,!1),e._queryParams.hasStart())throw new Error("equalTo: Starting point was already set (by another call to startAt/startAfter or equalTo).");if(e._queryParams.hasEnd())throw new Error("equalTo: Ending point was already set (by another call to endAt/endBefore or equalTo).");return new Ui(this._value,this._key)._apply(new Vi(this._value,this._key)._apply(e))}}function co(e,t){return Sr("equalTo","key",t,!0),new ao(e,t)}function lo(e,...t){let n=Object(o.w)(e);for(const e of t)n=e._apply(n);return n}!function(e){Object(o.e)(!En,"__referenceConstructor has already been defined"),En=e}(_i),function(e){Object(o.e)(!kn,"__referenceConstructor has already been defined"),kn=e}(_i);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const uo={};let ho=!1;function po(t,n,r,i,o){let s=i||t.options.databaseURL;void 0===s&&(t.options.projectId||E("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),C("Using default host for project ",t.options.projectId),s=t.options.projectId+"-default-rtdb.firebaseio.com");let a,c=ai(s,o),l=c.repoInfo,u=void 0;void 0!==e&&e.env&&(u=e.env.FIREBASE_DATABASE_EMULATOR_HOST),u?(a=!0,s=`http://${u}?ns=${l.namespace}`,c=ai(s,o),l=c.repoInfo):a=!c.repoInfo.secure;const h=o&&a?new B(B.OWNER):new W(t.name,t.options,n);Pr("Invalid Firebase Database URL",c),me(c.path)||E("Database URL must point to the root of a Firebase Database (not including a child path).");const d=function(e,t,n,r){let i=uo[t.name];i||(i={},uo[t.name]=i);let o=i[e.toURLString()];o&&E("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call.");return o=new qr(e,ho,n,r),i[e.toURLString()]=o,o}(l,t,h,new U(t.name,r));return new fo(d,t)}class fo{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Fr(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new _i(this._repo,ce())),this._rootInternal}_delete(){return null!==this._rootInternal&&(!function(e,t){const n=uo[t];n&&n[e.key]===e||E(`Database ${t}(${e.repoInfo_}) has already been deleted.`),Yr(e),delete n[e.key]}(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){null===this._rootInternal&&E("Cannot call "+e+" on a deleted database.")}}function go(){ne.IS_TRANSPORT_INITIALIZED&&k("Transport has already been initialized. Please call this function before calling ref or setting up a listener")}function mo(){go(),X.forceDisallow()}function vo(){go(),te.forceDisallow(),X.forceAllow()}function yo(e,t,n,r={}){(e=Object(o.w)(e))._checkNotDeleted("useEmulator"),e._instanceStarted&&E("Cannot call useEmulator() after instance has already been initialized.");const i=e._repoInternal;let s=void 0;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&E('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new B(B.OWNER);else if(r.mockUserToken){const t="string"==typeof r.mockUserToken?r.mockUserToken:Object(o.l)(r.mockUserToken,e.app.options.projectId);s=new B(t)}!function(e,t,n,r){e.repoInfo_=new V(`${t}:${n}`,!1,e.repoInfo_.namespace,e.repoInfo_.webSocketOnly,e.repoInfo_.nodeAdmin,e.repoInfo_.persistenceKey,e.repoInfo_.includeNamespaceInQueryParams,!0),r&&(e.authTokenProvider_=r)}(i,t,n,s)}function _o(e){(e=Object(o.w)(e))._checkNotDeleted("goOffline"),Yr(e._repo)}function bo(e){var t;(e=Object(o.w)(e))._checkNotDeleted("goOnline"),(t=e._repo).persistentConnection_&&t.persistentConnection_.resume("repo_interrupt")}function wo(e,t){w(e,t)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Co={".sv":"timestamp"};function To(){return Co}function xo(e){return{".sv":{increment:e}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eo{constructor(e,t){this.committed=e,this.snapshot=t}toJSON(){return{committed:this.committed,snapshot:this.snapshot.toJSON()}}}function ko(e,t,n){var r;if(e=Object(o.w)(e),Nr("Reference.transaction",e._path),".length"===e.key||".keys"===e.key)throw"Reference.transaction failed: "+e.key+" is a read-only object.";const i=null===(r=null==n?void 0:n.applyLocally)||void 0===r||r,s=new o.a,a=ji(e,()=>{});return function(e,t,n,r,i,s){Jr(e,"transaction on "+t);const a={path:t,update:n,onComplete:r,status:null,order:m(),applyLocally:s,retryCount:0,unwatcher:i,abortReason:null,currentWriteId:null,currentInputSnapshot:null,currentOutputSnapshotRaw:null,currentOutputSnapshotResolved:null},c=Zr(e,t,void 0);a.currentInputSnapshot=c;const l=a.update(c.val());if(void 0===l)a.unwatcher(),a.currentOutputSnapshotRaw=null,a.currentOutputSnapshotResolved=null,a.onComplete&&a.onComplete(null,!1,a.currentInputSnapshot);else{Er("transaction failed: Data returned ",l,a.path),a.status=0;const n=dr(e.transactionQueueTree_,t),r=pr(n)||[];let i;if(r.push(a),fr(n,r),"object"==typeof l&&null!==l&&Object(o.k)(l,".priority"))i=Object(o.M)(l,".priority"),Object(o.e)(Tr(i),"Invalid priority returned by transaction. Priority must be a valid string, finite number, server value, or null.");else{i=(Qn(e.serverSyncTree_,t)||Je.EMPTY_NODE).getPriority().val()}const s=Ur(e),u=Ze(l,i),h=lr(u,c,s);a.currentOutputSnapshotRaw=u,a.currentOutputSnapshotResolved=h,a.currentWriteId=Vr(e);const d=Hn(e.serverSyncTree_,t,h,a.currentWriteId,a.applyLocally);Dr(e.eventQueue_,t,d),ei(e,e.transactionQueueTree_)}}(e._repo,e._path,t,(t,n,r)=>{let i=null;t?s.reject(t):(i=new bi(r,new _i(e._repo,e._path),Be),s.resolve(new Eo(n,i)))},a,i),s.promise}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ee.prototype.simpleListen=function(e,t){this.sendRequest("q",{p:e},t)},Ee.prototype.echo=function(e,t){this.sendRequest("echo",{d:e},t)};var Io;l(r.SDK_VERSION),Object(r._registerComponent)(new i.a("database",(e,{instanceIdentifier:t})=>po(e.getProvider("app").getImmediate(),e.getProvider("auth-internal"),e.getProvider("app-check-internal"),t),"PUBLIC").setMultipleInstances(!0)),Object(r.registerVersion)(a,"0.14.4",Io),Object(r.registerVersion)(a,"0.14.4","esm2017")}).call(this,n(6))},function(e,t,n){"use strict";n.r(t),n.d(t,"FirebaseError",(function(){return o.c})),n.d(t,"SDK_VERSION",(function(){return q})),n.d(t,"_DEFAULT_ENTRY_NAME",(function(){return E})),n.d(t,"_addComponent",(function(){return O})),n.d(t,"_addOrOverwriteComponent",(function(){return N})),n.d(t,"_apps",(function(){return I})),n.d(t,"_clearComponents",(function(){return j})),n.d(t,"_components",(function(){return S})),n.d(t,"_getProvider",(function(){return A})),n.d(t,"_registerComponent",(function(){return P})),n.d(t,"_removeServiceInstance",(function(){return R})),n.d(t,"deleteApp",(function(){return W})),n.d(t,"getApp",(function(){return H})),n.d(t,"getApps",(function(){return U})),n.d(t,"initializeApp",(function(){return F})),n.d(t,"onLog",(function(){return z})),n.d(t,"registerVersion",(function(){return B})),n.d(t,"setLogLevel",(function(){return V}));var r=n(4),i=n(5),o=n(0);let s,a;const c=new WeakMap,l=new WeakMap,u=new WeakMap,h=new WeakMap,d=new WeakMap;let p={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return l.get(e);if("objectStoreNames"===t)return e.objectStoreNames||u.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return m(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function f(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(a||(a=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(v(this),t),m(c.get(this))}:function(...t){return m(e.apply(v(this),t))}:function(t,...n){const r=e.call(v(this),t,...n);return u.set(r,t.sort?t.sort():[t]),m(r)}}function g(e){return"function"==typeof e?f(e):(e instanceof IDBTransaction&&function(e){if(l.has(e))return;const t=new Promise((t,n)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",o),e.removeEventListener("abort",o)},i=()=>{t(),r()},o=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",o),e.addEventListener("abort",o)});l.set(e,t)}(e),t=e,(s||(s=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some(e=>t instanceof e)?new Proxy(e,p):e);var t}function m(e){if(e instanceof IDBRequest)return function(e){const t=new Promise((t,n)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",o)},i=()=>{t(m(e.result)),r()},o=()=>{n(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",o)});return t.then(t=>{t instanceof IDBCursor&&c.set(t,e)}).catch(()=>{}),d.set(t,e),t}(e);if(h.has(e))return h.get(e);const t=g(e);return t!==e&&(h.set(e,t),d.set(t,e)),t}const v=e=>d.get(e);const y=["get","getKey","getAll","getAllKeys","count"],_=["put","add","delete","clear"],b=new Map;function w(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(b.get(t))return b.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=_.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!y.includes(n))return;const o=async function(e,...t){const o=this.transaction(e,i?"readwrite":"readonly");let s=o.store;return r&&(s=s.index(t.shift())),(await Promise.all([s[n](...t),i&&o.done]))[0]};return b.set(t,o),o}p=(e=>({...e,get:(t,n,r)=>w(t,n)||e.get(t,n,r),has:(t,n)=>!!w(t,n)||e.has(t,n)}))(p);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class C{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null}).filter(e=>e).join(" ")}}const T="@firebase/app",x=new i.b("@firebase/app"),E="[DEFAULT]",k={[T]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},I=new Map,S=new Map;function O(e,t){try{e.container.addComponent(t)}catch(n){x.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function N(e,t){e.container.addOrOverwriteComponent(t)}function P(e){const t=e.name;if(S.has(t))return x.debug(`There were multiple attempts to register component ${t}.`),!1;S.set(t,e);for(const t of I.values())O(t,e);return!0}function A(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function R(e,t,n=E){A(e,t).clearInstance(n)}function j(){S.clear()}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},L=new o.b("app","Firebase",D);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class M{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r.a("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw L.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q="9.23.0";function F(e,t={}){let n=e;if("object"!=typeof t){t={name:t}}const i=Object.assign({name:E,automaticDataCollectionEnabled:!1},t),s=i.name;if("string"!=typeof s||!s)throw L.create("bad-app-name",{appName:String(s)});if(n||(n=Object(o.s)()),!n)throw L.create("no-options");const a=I.get(s);if(a){if(Object(o.o)(n,a.options)&&Object(o.o)(i,a.config))return a;throw L.create("duplicate-app",{appName:s})}const c=new r.b(s);for(const e of S.values())c.addComponent(e);const l=new M(n,i,c);return I.set(s,l),l}function H(e=E){const t=I.get(e);if(!t&&e===E&&Object(o.s)())return F();if(!t)throw L.create("no-app",{appName:e});return t}function U(){return Array.from(I.values())}async function W(e){const t=e.name;I.has(t)&&(I.delete(t),await Promise.all(e.container.getProviders().map(e=>e.delete())),e.isDeleted=!0)}function B(e,t,n){var i;let o=null!==(i=k[e])&&void 0!==i?i:e;n&&(o+="-"+n);const s=o.match(/\s|\//),a=t.match(/\s|\//);if(s||a){const e=[`Unable to register library "${o}" with version "${t}":`];return s&&e.push(`library name "${o}" contains illegal characters (whitespace or "/")`),s&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void x.warn(e.join(" "))}P(new r.a(o+"-version",()=>({library:o,version:t}),"VERSION"))}function z(e,t){if(null!==e&&"function"!=typeof e)throw L.create("invalid-log-argument");Object(i.d)(e,t)}function V(e){Object(i.c)(e)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $="firebase-heartbeat-store";let Q=null;function K(){return Q||(Q=function(e,t,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const s=indexedDB.open(e,t),a=m(s);return r&&s.addEventListener("upgradeneeded",e=>{r(m(s.result),e.oldVersion,e.newVersion,m(s.transaction),e)}),n&&s.addEventListener("blocked",e=>n(e.oldVersion,e.newVersion,e)),a.then(e=>{o&&e.addEventListener("close",()=>o()),i&&e.addEventListener("versionchange",e=>i(e.oldVersion,e.newVersion,e))}).catch(()=>{}),a}("firebase-heartbeat-database",1,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore($)}}}).catch(e=>{throw L.create("idb-open",{originalErrorMessage:e.message})})),Q}async function G(e,t){try{const n=(await K()).transaction($,"readwrite"),r=n.objectStore($);await r.put(t,Y(e)),await n.done}catch(e){if(e instanceof o.c)x.warn(e.message);else{const t=L.create("idb-set",{originalErrorMessage:null==e?void 0:e.message});x.warn(t.message)}}}function Y(e){return`${e.name}!${e.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Z(t),this._heartbeatsCachePromise=this._storage.read().then(e=>(this._heartbeatsCache=e,e))}async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),t=X();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==t&&!this._heartbeatsCache.heartbeats.some(e=>e.date===t))return this._heartbeatsCache.heartbeats.push({date:t,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(e=>{const t=new Date(e.date).valueOf();return Date.now()-t<=2592e6}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=X(),{heartbeatsToSend:t,unsentEntries:n}=function(e,t=1024){const n=[];let r=e.slice();for(const i of e){const e=n.find(e=>e.agent===i.agent);if(e){if(e.dates.push(i.date),ee(n)>t){e.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),ee(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}(this._heartbeatsCache.heartbeats),r=Object(o.j)(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function X(){return(new Date).toISOString().substring(0,10)}class Z{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!Object(o.D)()&&Object(o.T)().then(()=>!0).catch(()=>!1)}async read(){if(await this._canUseIndexedDBPromise){return await async function(e){try{const t=await K();return await t.transaction($).objectStore($).get(Y(e))}catch(e){if(e instanceof o.c)x.warn(e.message);else{const t=L.create("idb-get",{originalErrorMessage:null==e?void 0:e.message});x.warn(t.message)}}}(this.app)||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return G(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return G(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function ee(e){return Object(o.j)(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var te;te="",P(new r.a("platform-logger",e=>new C(e),"PRIVATE")),P(new r.a("heartbeat",e=>new J(e),"PRIVATE")),B(T,"0.9.13",te),B(T,"0.9.13","esm2017"),B("fire-js","")},function(e,t,n){var r;
/*!
 * jQuery JavaScript Library v3.7.1
 * https://jquery.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2023-08-28T13:37Z
 */!function(t,n){"use strict";"object"==typeof e.exports?e.exports=t.document?n(t,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return n(e)}:n(t)}("undefined"!=typeof window?window:this,(function(n,i){"use strict";var o=[],s=Object.getPrototypeOf,a=o.slice,c=o.flat?function(e){return o.flat.call(e)}:function(e){return o.concat.apply([],e)},l=o.push,u=o.indexOf,h={},d=h.toString,p=h.hasOwnProperty,f=p.toString,g=f.call(Object),m={},v=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType&&"function"!=typeof e.item},y=function(e){return null!=e&&e===e.window},_=n.document,b={type:!0,src:!0,nonce:!0,noModule:!0};function w(e,t,n){var r,i,o=(n=n||_).createElement("script");if(o.text=e,t)for(r in b)(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i);n.head.appendChild(o).parentNode.removeChild(o)}function C(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?h[d.call(e)]||"object":typeof e}var T=/HTML$/i,x=function(e,t){return new x.fn.init(e,t)};function E(e){var t=!!e&&"length"in e&&e.length,n=C(e);return!v(e)&&!y(e)&&("array"===n||0===t||"number"==typeof t&&t>0&&t-1 in e)}function k(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}x.fn=x.prototype={jquery:"3.7.1",constructor:x,length:0,toArray:function(){return a.call(this)},get:function(e){return null==e?a.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=x.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return x.each(this,e)},map:function(e){return this.pushStack(x.map(this,(function(t,n){return e.call(t,n,t)})))},slice:function(){return this.pushStack(a.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(x.grep(this,(function(e,t){return(t+1)%2})))},odd:function(){return this.pushStack(x.grep(this,(function(e,t){return t%2})))},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(n>=0&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:l,sort:o.sort,splice:o.splice},x.extend=x.fn.extend=function(){var e,t,n,r,i,o,s=arguments[0]||{},a=1,c=arguments.length,l=!1;for("boolean"==typeof s&&(l=s,s=arguments[a]||{},a++),"object"==typeof s||v(s)||(s={}),a===c&&(s=this,a--);a<c;a++)if(null!=(e=arguments[a]))for(t in e)r=e[t],"__proto__"!==t&&s!==r&&(l&&r&&(x.isPlainObject(r)||(i=Array.isArray(r)))?(n=s[t],o=i&&!Array.isArray(n)?[]:i||x.isPlainObject(n)?n:{},i=!1,s[t]=x.extend(l,o,r)):void 0!==r&&(s[t]=r));return s},x.extend({expando:"jQuery"+("3.7.1"+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==d.call(e))&&(!(t=s(e))||"function"==typeof(n=p.call(t,"constructor")&&t.constructor)&&f.call(n)===g)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t,n){w(e,{nonce:t&&t.nonce},n)},each:function(e,t){var n,r=0;if(E(e))for(n=e.length;r<n&&!1!==t.call(e[r],r,e[r]);r++);else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},text:function(e){var t,n="",r=0,i=e.nodeType;if(!i)for(;t=e[r++];)n+=x.text(t);return 1===i||11===i?e.textContent:9===i?e.documentElement.textContent:3===i||4===i?e.nodeValue:n},makeArray:function(e,t){var n=t||[];return null!=e&&(E(Object(e))?x.merge(n,"string"==typeof e?[e]:e):l.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:u.call(t,e,n)},isXMLDoc:function(e){var t=e&&e.namespaceURI,n=e&&(e.ownerDocument||e).documentElement;return!T.test(t||n&&n.nodeName||"HTML")},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,s=!n;i<o;i++)!t(e[i],i)!==s&&r.push(e[i]);return r},map:function(e,t,n){var r,i,o=0,s=[];if(E(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&s.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&s.push(i);return c(s)},guid:1,support:m}),"function"==typeof Symbol&&(x.fn[Symbol.iterator]=o[Symbol.iterator]),x.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),(function(e,t){h["[object "+t+"]"]=t.toLowerCase()}));var I=o.pop,S=o.sort,O=o.splice,N="[\\x20\\t\\r\\n\\f]",P=new RegExp("^"+N+"+|((?:^|[^\\\\])(?:\\\\.)*)"+N+"+$","g");x.contains=function(e,t){var n=t&&t.parentNode;return e===n||!(!n||1!==n.nodeType||!(e.contains?e.contains(n):e.compareDocumentPosition&&16&e.compareDocumentPosition(n)))};var A=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;function R(e,t){return t?"\0"===e?"�":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e}x.escapeSelector=function(e){return(e+"").replace(A,R)};var j=_,D=l;!function(){var e,t,r,i,s,c,l,h,d,f,g=D,v=x.expando,y=0,_=0,b=ee(),w=ee(),C=ee(),T=ee(),E=function(e,t){return e===t&&(s=!0),0},A="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",R="(?:\\\\[\\da-fA-F]{1,6}"+N+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",L="\\["+N+"*("+R+")(?:"+N+"*([*^$|!~]?=)"+N+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+R+"))|)"+N+"*\\]",M=":("+R+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+L+")*)|.*)\\)|)",q=new RegExp(N+"+","g"),F=new RegExp("^"+N+"*,"+N+"*"),H=new RegExp("^"+N+"*([>+~]|"+N+")"+N+"*"),U=new RegExp(N+"|>"),W=new RegExp(M),B=new RegExp("^"+R+"$"),z={ID:new RegExp("^#("+R+")"),CLASS:new RegExp("^\\.("+R+")"),TAG:new RegExp("^("+R+"|[*])"),ATTR:new RegExp("^"+L),PSEUDO:new RegExp("^"+M),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+N+"*(even|odd|(([+-]|)(\\d*)n|)"+N+"*(?:([+-]|)"+N+"*(\\d+)|))"+N+"*\\)|)","i"),bool:new RegExp("^(?:"+A+")$","i"),needsContext:new RegExp("^"+N+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+N+"*((?:-\\d)?\\d*)"+N+"*\\)|)(?=[^-]|$)","i")},V=/^(?:input|select|textarea|button)$/i,$=/^h\d$/i,Q=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,K=/[+~]/,G=new RegExp("\\\\[\\da-fA-F]{1,6}"+N+"?|\\\\([^\\r\\n\\f])","g"),Y=function(e,t){var n="0x"+e.slice(1)-65536;return t||(n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,1023&n|56320))},J=function(){ce()},X=de((function(e){return!0===e.disabled&&k(e,"fieldset")}),{dir:"parentNode",next:"legend"});try{g.apply(o=a.call(j.childNodes),j.childNodes),o[j.childNodes.length].nodeType}catch(e){g={apply:function(e,t){D.apply(e,a.call(t))},call:function(e){D.apply(e,a.call(arguments,1))}}}function Z(e,t,n,r){var i,o,s,a,l,u,p,f=t&&t.ownerDocument,y=t?t.nodeType:9;if(n=n||[],"string"!=typeof e||!e||1!==y&&9!==y&&11!==y)return n;if(!r&&(ce(t),t=t||c,h)){if(11!==y&&(l=Q.exec(e)))if(i=l[1]){if(9===y){if(!(s=t.getElementById(i)))return n;if(s.id===i)return g.call(n,s),n}else if(f&&(s=f.getElementById(i))&&Z.contains(t,s)&&s.id===i)return g.call(n,s),n}else{if(l[2])return g.apply(n,t.getElementsByTagName(e)),n;if((i=l[3])&&t.getElementsByClassName)return g.apply(n,t.getElementsByClassName(i)),n}if(!(T[e+" "]||d&&d.test(e))){if(p=e,f=t,1===y&&(U.test(e)||H.test(e))){for((f=K.test(e)&&ae(t.parentNode)||t)==t&&m.scope||((a=t.getAttribute("id"))?a=x.escapeSelector(a):t.setAttribute("id",a=v)),o=(u=ue(e)).length;o--;)u[o]=(a?"#"+a:":scope")+" "+he(u[o]);p=u.join(",")}try{return g.apply(n,f.querySelectorAll(p)),n}catch(t){T(e,!0)}finally{a===v&&t.removeAttribute("id")}}}return ye(e.replace(P,"$1"),t,n,r)}function ee(){var e=[];return function n(r,i){return e.push(r+" ")>t.cacheLength&&delete n[e.shift()],n[r+" "]=i}}function te(e){return e[v]=!0,e}function ne(e){var t=c.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function re(e){return function(t){return k(t,"input")&&t.type===e}}function ie(e){return function(t){return(k(t,"input")||k(t,"button"))&&t.type===e}}function oe(e){return function(t){return"form"in t?t.parentNode&&!1===t.disabled?"label"in t?"label"in t.parentNode?t.parentNode.disabled===e:t.disabled===e:t.isDisabled===e||t.isDisabled!==!e&&X(t)===e:t.disabled===e:"label"in t&&t.disabled===e}}function se(e){return te((function(t){return t=+t,te((function(n,r){for(var i,o=e([],n.length,t),s=o.length;s--;)n[i=o[s]]&&(n[i]=!(r[i]=n[i]))}))}))}function ae(e){return e&&void 0!==e.getElementsByTagName&&e}function ce(e){var n,r=e?e.ownerDocument||e:j;return r!=c&&9===r.nodeType&&r.documentElement?(l=(c=r).documentElement,h=!x.isXMLDoc(c),f=l.matches||l.webkitMatchesSelector||l.msMatchesSelector,l.msMatchesSelector&&j!=c&&(n=c.defaultView)&&n.top!==n&&n.addEventListener("unload",J),m.getById=ne((function(e){return l.appendChild(e).id=x.expando,!c.getElementsByName||!c.getElementsByName(x.expando).length})),m.disconnectedMatch=ne((function(e){return f.call(e,"*")})),m.scope=ne((function(){return c.querySelectorAll(":scope")})),m.cssHas=ne((function(){try{return c.querySelector(":has(*,:jqfake)"),!1}catch(e){return!0}})),m.getById?(t.filter.ID=function(e){var t=e.replace(G,Y);return function(e){return e.getAttribute("id")===t}},t.find.ID=function(e,t){if(void 0!==t.getElementById&&h){var n=t.getElementById(e);return n?[n]:[]}}):(t.filter.ID=function(e){var t=e.replace(G,Y);return function(e){var n=void 0!==e.getAttributeNode&&e.getAttributeNode("id");return n&&n.value===t}},t.find.ID=function(e,t){if(void 0!==t.getElementById&&h){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];for(i=t.getElementsByName(e),r=0;o=i[r++];)if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),t.find.TAG=function(e,t){return void 0!==t.getElementsByTagName?t.getElementsByTagName(e):t.querySelectorAll(e)},t.find.CLASS=function(e,t){if(void 0!==t.getElementsByClassName&&h)return t.getElementsByClassName(e)},d=[],ne((function(e){var t;l.appendChild(e).innerHTML="<a id='"+v+"' href='' disabled='disabled'></a><select id='"+v+"-\r\\' disabled='disabled'><option selected=''></option></select>",e.querySelectorAll("[selected]").length||d.push("\\["+N+"*(?:value|"+A+")"),e.querySelectorAll("[id~="+v+"-]").length||d.push("~="),e.querySelectorAll("a#"+v+"+*").length||d.push(".#.+[+~]"),e.querySelectorAll(":checked").length||d.push(":checked"),(t=c.createElement("input")).setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),l.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&d.push(":enabled",":disabled"),(t=c.createElement("input")).setAttribute("name",""),e.appendChild(t),e.querySelectorAll("[name='']").length||d.push("\\["+N+"*name"+N+"*="+N+"*(?:''|\"\")")})),m.cssHas||d.push(":has"),d=d.length&&new RegExp(d.join("|")),E=function(e,t){if(e===t)return s=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)==(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!m.sortDetached&&t.compareDocumentPosition(e)===n?e===c||e.ownerDocument==j&&Z.contains(j,e)?-1:t===c||t.ownerDocument==j&&Z.contains(j,t)?1:i?u.call(i,e)-u.call(i,t):0:4&n?-1:1)},c):c}for(e in Z.matches=function(e,t){return Z(e,null,null,t)},Z.matchesSelector=function(e,t){if(ce(e),h&&!T[t+" "]&&(!d||!d.test(t)))try{var n=f.call(e,t);if(n||m.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){T(t,!0)}return Z(t,c,null,[e]).length>0},Z.contains=function(e,t){return(e.ownerDocument||e)!=c&&ce(e),x.contains(e,t)},Z.attr=function(e,n){(e.ownerDocument||e)!=c&&ce(e);var r=t.attrHandle[n.toLowerCase()],i=r&&p.call(t.attrHandle,n.toLowerCase())?r(e,n,!h):void 0;return void 0!==i?i:e.getAttribute(n)},Z.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},x.uniqueSort=function(e){var t,n=[],r=0,o=0;if(s=!m.sortStable,i=!m.sortStable&&a.call(e,0),S.call(e,E),s){for(;t=e[o++];)t===e[o]&&(r=n.push(o));for(;r--;)O.call(e,n[r],1)}return i=null,e},x.fn.uniqueSort=function(){return this.pushStack(x.uniqueSort(a.apply(this)))},(t=x.expr={cacheLength:50,createPseudo:te,match:z,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(G,Y),e[3]=(e[3]||e[4]||e[5]||"").replace(G,Y),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||Z.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&Z.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return z.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&W.test(n)&&(t=ue(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(G,Y).toLowerCase();return"*"===e?function(){return!0}:function(e){return k(e,t)}},CLASS:function(e){var t=b[e+" "];return t||(t=new RegExp("(^|"+N+")"+e+"("+N+"|$)"))&&b(e,(function(e){return t.test("string"==typeof e.className&&e.className||void 0!==e.getAttribute&&e.getAttribute("class")||"")}))},ATTR:function(e,t,n){return function(r){var i=Z.attr(r,e);return null==i?"!="===t:!t||(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i.replace(q," ")+" ").indexOf(n)>-1:"|="===t&&(i===n||i.slice(0,n.length+1)===n+"-"))}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),s="last"!==e.slice(-4),a="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,c){var l,u,h,d,p,f=o!==s?"nextSibling":"previousSibling",g=t.parentNode,m=a&&t.nodeName.toLowerCase(),_=!c&&!a,b=!1;if(g){if(o){for(;f;){for(h=t;h=h[f];)if(a?k(h,m):1===h.nodeType)return!1;p=f="only"===e&&!p&&"nextSibling"}return!0}if(p=[s?g.firstChild:g.lastChild],s&&_){for(b=(d=(l=(u=g[v]||(g[v]={}))[e]||[])[0]===y&&l[1])&&l[2],h=d&&g.childNodes[d];h=++d&&h&&h[f]||(b=d=0)||p.pop();)if(1===h.nodeType&&++b&&h===t){u[e]=[y,d,b];break}}else if(_&&(b=d=(l=(u=t[v]||(t[v]={}))[e]||[])[0]===y&&l[1]),!1===b)for(;(h=++d&&h&&h[f]||(b=d=0)||p.pop())&&(!(a?k(h,m):1===h.nodeType)||!++b||(_&&((u=h[v]||(h[v]={}))[e]=[y,b]),h!==t)););return(b-=i)===r||b%r==0&&b/r>=0}}},PSEUDO:function(e,n){var r,i=t.pseudos[e]||t.setFilters[e.toLowerCase()]||Z.error("unsupported pseudo: "+e);return i[v]?i(n):i.length>1?(r=[e,e,"",n],t.setFilters.hasOwnProperty(e.toLowerCase())?te((function(e,t){for(var r,o=i(e,n),s=o.length;s--;)e[r=u.call(e,o[s])]=!(t[r]=o[s])})):function(e){return i(e,0,r)}):i}},pseudos:{not:te((function(e){var t=[],n=[],r=ve(e.replace(P,"$1"));return r[v]?te((function(e,t,n,i){for(var o,s=r(e,null,i,[]),a=e.length;a--;)(o=s[a])&&(e[a]=!(t[a]=o))})):function(e,i,o){return t[0]=e,r(t,null,o,n),t[0]=null,!n.pop()}})),has:te((function(e){return function(t){return Z(e,t).length>0}})),contains:te((function(e){return e=e.replace(G,Y),function(t){return(t.textContent||x.text(t)).indexOf(e)>-1}})),lang:te((function(e){return B.test(e||"")||Z.error("unsupported lang: "+e),e=e.replace(G,Y).toLowerCase(),function(t){var n;do{if(n=h?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return(n=n.toLowerCase())===e||0===n.indexOf(e+"-")}while((t=t.parentNode)&&1===t.nodeType);return!1}})),target:function(e){var t=n.location&&n.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===l},focus:function(e){return e===function(){try{return c.activeElement}catch(e){}}()&&c.hasFocus()&&!!(e.type||e.href||~e.tabIndex)},enabled:oe(!1),disabled:oe(!0),checked:function(e){return k(e,"input")&&!!e.checked||k(e,"option")&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!t.pseudos.empty(e)},header:function(e){return $.test(e.nodeName)},input:function(e){return V.test(e.nodeName)},button:function(e){return k(e,"input")&&"button"===e.type||k(e,"button")},text:function(e){var t;return k(e,"input")&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:se((function(){return[0]})),last:se((function(e,t){return[t-1]})),eq:se((function(e,t,n){return[n<0?n+t:n]})),even:se((function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e})),odd:se((function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e})),lt:se((function(e,t,n){var r;for(r=n<0?n+t:n>t?t:n;--r>=0;)e.push(r);return e})),gt:se((function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e}))}}).pseudos.nth=t.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})t.pseudos[e]=re(e);for(e in{submit:!0,reset:!0})t.pseudos[e]=ie(e);function le(){}function ue(e,n){var r,i,o,s,a,c,l,u=w[e+" "];if(u)return n?0:u.slice(0);for(a=e,c=[],l=t.preFilter;a;){for(s in r&&!(i=F.exec(a))||(i&&(a=a.slice(i[0].length)||a),c.push(o=[])),r=!1,(i=H.exec(a))&&(r=i.shift(),o.push({value:r,type:i[0].replace(P," ")}),a=a.slice(r.length)),t.filter)!(i=z[s].exec(a))||l[s]&&!(i=l[s](i))||(r=i.shift(),o.push({value:r,type:s,matches:i}),a=a.slice(r.length));if(!r)break}return n?a.length:a?Z.error(e):w(e,c).slice(0)}function he(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function de(e,t,n){var r=t.dir,i=t.next,o=i||r,s=n&&"parentNode"===o,a=_++;return t.first?function(t,n,i){for(;t=t[r];)if(1===t.nodeType||s)return e(t,n,i);return!1}:function(t,n,c){var l,u,h=[y,a];if(c){for(;t=t[r];)if((1===t.nodeType||s)&&e(t,n,c))return!0}else for(;t=t[r];)if(1===t.nodeType||s)if(u=t[v]||(t[v]={}),i&&k(t,i))t=t[r]||t;else{if((l=u[o])&&l[0]===y&&l[1]===a)return h[2]=l[2];if(u[o]=h,h[2]=e(t,n,c))return!0}return!1}}function pe(e){return e.length>1?function(t,n,r){for(var i=e.length;i--;)if(!e[i](t,n,r))return!1;return!0}:e[0]}function fe(e,t,n,r,i){for(var o,s=[],a=0,c=e.length,l=null!=t;a<c;a++)(o=e[a])&&(n&&!n(o,r,i)||(s.push(o),l&&t.push(a)));return s}function ge(e,t,n,r,i,o){return r&&!r[v]&&(r=ge(r)),i&&!i[v]&&(i=ge(i,o)),te((function(o,s,a,c){var l,h,d,p,f=[],m=[],v=s.length,y=o||function(e,t,n){for(var r=0,i=t.length;r<i;r++)Z(e,t[r],n);return n}(t||"*",a.nodeType?[a]:a,[]),_=!e||!o&&t?y:fe(y,f,e,a,c);if(n?n(_,p=i||(o?e:v||r)?[]:s,a,c):p=_,r)for(l=fe(p,m),r(l,[],a,c),h=l.length;h--;)(d=l[h])&&(p[m[h]]=!(_[m[h]]=d));if(o){if(i||e){if(i){for(l=[],h=p.length;h--;)(d=p[h])&&l.push(_[h]=d);i(null,p=[],l,c)}for(h=p.length;h--;)(d=p[h])&&(l=i?u.call(o,d):f[h])>-1&&(o[l]=!(s[l]=d))}}else p=fe(p===s?p.splice(v,p.length):p),i?i(null,s,p,c):g.apply(s,p)}))}function me(e){for(var n,i,o,s=e.length,a=t.relative[e[0].type],c=a||t.relative[" "],l=a?1:0,h=de((function(e){return e===n}),c,!0),d=de((function(e){return u.call(n,e)>-1}),c,!0),p=[function(e,t,i){var o=!a&&(i||t!=r)||((n=t).nodeType?h(e,t,i):d(e,t,i));return n=null,o}];l<s;l++)if(i=t.relative[e[l].type])p=[de(pe(p),i)];else{if((i=t.filter[e[l].type].apply(null,e[l].matches))[v]){for(o=++l;o<s&&!t.relative[e[o].type];o++);return ge(l>1&&pe(p),l>1&&he(e.slice(0,l-1).concat({value:" "===e[l-2].type?"*":""})).replace(P,"$1"),i,l<o&&me(e.slice(l,o)),o<s&&me(e=e.slice(o)),o<s&&he(e))}p.push(i)}return pe(p)}function ve(e,n){var i,o=[],s=[],a=C[e+" "];if(!a){for(n||(n=ue(e)),i=n.length;i--;)(a=me(n[i]))[v]?o.push(a):s.push(a);(a=C(e,function(e,n){var i=n.length>0,o=e.length>0,s=function(s,a,l,u,d){var p,f,m,v=0,_="0",b=s&&[],w=[],C=r,T=s||o&&t.find.TAG("*",d),E=y+=null==C?1:Math.random()||.1,k=T.length;for(d&&(r=a==c||a||d);_!==k&&null!=(p=T[_]);_++){if(o&&p){for(f=0,a||p.ownerDocument==c||(ce(p),l=!h);m=e[f++];)if(m(p,a||c,l)){g.call(u,p);break}d&&(y=E)}i&&((p=!m&&p)&&v--,s&&b.push(p))}if(v+=_,i&&_!==v){for(f=0;m=n[f++];)m(b,w,a,l);if(s){if(v>0)for(;_--;)b[_]||w[_]||(w[_]=I.call(u));w=fe(w)}g.apply(u,w),d&&!s&&w.length>0&&v+n.length>1&&x.uniqueSort(u)}return d&&(y=E,r=C),b};return i?te(s):s}(s,o))).selector=e}return a}function ye(e,n,r,i){var o,s,a,c,l,u="function"==typeof e&&e,d=!i&&ue(e=u.selector||e);if(r=r||[],1===d.length){if((s=d[0]=d[0].slice(0)).length>2&&"ID"===(a=s[0]).type&&9===n.nodeType&&h&&t.relative[s[1].type]){if(!(n=(t.find.ID(a.matches[0].replace(G,Y),n)||[])[0]))return r;u&&(n=n.parentNode),e=e.slice(s.shift().value.length)}for(o=z.needsContext.test(e)?0:s.length;o--&&(a=s[o],!t.relative[c=a.type]);)if((l=t.find[c])&&(i=l(a.matches[0].replace(G,Y),K.test(s[0].type)&&ae(n.parentNode)||n))){if(s.splice(o,1),!(e=i.length&&he(s)))return g.apply(r,i),r;break}}return(u||ve(e,d))(i,n,!h,r,!n||K.test(e)&&ae(n.parentNode)||n),r}le.prototype=t.filters=t.pseudos,t.setFilters=new le,m.sortStable=v.split("").sort(E).join("")===v,ce(),m.sortDetached=ne((function(e){return 1&e.compareDocumentPosition(c.createElement("fieldset"))})),x.find=Z,x.expr[":"]=x.expr.pseudos,x.unique=x.uniqueSort,Z.compile=ve,Z.select=ye,Z.setDocument=ce,Z.tokenize=ue,Z.escape=x.escapeSelector,Z.getText=x.text,Z.isXML=x.isXMLDoc,Z.selectors=x.expr,Z.support=x.support,Z.uniqueSort=x.uniqueSort}();var L=function(e,t,n){for(var r=[],i=void 0!==n;(e=e[t])&&9!==e.nodeType;)if(1===e.nodeType){if(i&&x(e).is(n))break;r.push(e)}return r},M=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},q=x.expr.match.needsContext,F=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function H(e,t,n){return v(t)?x.grep(e,(function(e,r){return!!t.call(e,r,e)!==n})):t.nodeType?x.grep(e,(function(e){return e===t!==n})):"string"!=typeof t?x.grep(e,(function(e){return u.call(t,e)>-1!==n})):x.filter(t,e,n)}x.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?x.find.matchesSelector(r,e)?[r]:[]:x.find.matches(e,x.grep(t,(function(e){return 1===e.nodeType})))},x.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(x(e).filter((function(){for(t=0;t<r;t++)if(x.contains(i[t],this))return!0})));for(n=this.pushStack([]),t=0;t<r;t++)x.find(e,i[t],n);return r>1?x.uniqueSort(n):n},filter:function(e){return this.pushStack(H(this,e||[],!1))},not:function(e){return this.pushStack(H(this,e||[],!0))},is:function(e){return!!H(this,"string"==typeof e&&q.test(e)?x(e):e||[],!1).length}});var U,W=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(x.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||U,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&e.length>=3?[null,e,null]:W.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof x?t[0]:t,x.merge(this,x.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:_,!0)),F.test(r[1])&&x.isPlainObject(t))for(r in t)v(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(i=_.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):v(e)?void 0!==n.ready?n.ready(e):e(x):x.makeArray(e,this)}).prototype=x.fn,U=x(_);var B=/^(?:parents|prev(?:Until|All))/,z={children:!0,contents:!0,next:!0,prev:!0};function V(e,t){for(;(e=e[t])&&1!==e.nodeType;);return e}x.fn.extend({has:function(e){var t=x(e,this),n=t.length;return this.filter((function(){for(var e=0;e<n;e++)if(x.contains(this,t[e]))return!0}))},closest:function(e,t){var n,r=0,i=this.length,o=[],s="string"!=typeof e&&x(e);if(!q.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(s?s.index(n)>-1:1===n.nodeType&&x.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(o.length>1?x.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?u.call(x(e),this[0]):u.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(x.uniqueSort(x.merge(this.get(),x(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),x.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return L(e,"parentNode")},parentsUntil:function(e,t,n){return L(e,"parentNode",n)},next:function(e){return V(e,"nextSibling")},prev:function(e){return V(e,"previousSibling")},nextAll:function(e){return L(e,"nextSibling")},prevAll:function(e){return L(e,"previousSibling")},nextUntil:function(e,t,n){return L(e,"nextSibling",n)},prevUntil:function(e,t,n){return L(e,"previousSibling",n)},siblings:function(e){return M((e.parentNode||{}).firstChild,e)},children:function(e){return M(e.firstChild)},contents:function(e){return null!=e.contentDocument&&s(e.contentDocument)?e.contentDocument:(k(e,"template")&&(e=e.content||e),x.merge([],e.childNodes))}},(function(e,t){x.fn[e]=function(n,r){var i=x.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=x.filter(r,i)),this.length>1&&(z[e]||x.uniqueSort(i),B.test(e)&&i.reverse()),this.pushStack(i)}}));var $=/[^\x20\t\r\n\f]+/g;function Q(e){return e}function K(e){throw e}function G(e,t,n,r){var i;try{e&&v(i=e.promise)?i.call(e).done(t).fail(n):e&&v(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}x.Callbacks=function(e){e="string"==typeof e?function(e){var t={};return x.each(e.match($)||[],(function(e,n){t[n]=!0})),t}(e):x.extend({},e);var t,n,r,i,o=[],s=[],a=-1,c=function(){for(i=i||e.once,r=t=!0;s.length;a=-1)for(n=s.shift();++a<o.length;)!1===o[a].apply(n[0],n[1])&&e.stopOnFalse&&(a=o.length,n=!1);e.memory||(n=!1),t=!1,i&&(o=n?[]:"")},l={add:function(){return o&&(n&&!t&&(a=o.length-1,s.push(n)),function t(n){x.each(n,(function(n,r){v(r)?e.unique&&l.has(r)||o.push(r):r&&r.length&&"string"!==C(r)&&t(r)}))}(arguments),n&&!t&&c()),this},remove:function(){return x.each(arguments,(function(e,t){for(var n;(n=x.inArray(t,o,n))>-1;)o.splice(n,1),n<=a&&a--})),this},has:function(e){return e?x.inArray(e,o)>-1:o.length>0},empty:function(){return o&&(o=[]),this},disable:function(){return i=s=[],o=n="",this},disabled:function(){return!o},lock:function(){return i=s=[],n||t||(o=n=""),this},locked:function(){return!!i},fireWith:function(e,n){return i||(n=[e,(n=n||[]).slice?n.slice():n],s.push(n),t||c()),this},fire:function(){return l.fireWith(this,arguments),this},fired:function(){return!!r}};return l},x.extend({Deferred:function(e){var t=[["notify","progress",x.Callbacks("memory"),x.Callbacks("memory"),2],["resolve","done",x.Callbacks("once memory"),x.Callbacks("once memory"),0,"resolved"],["reject","fail",x.Callbacks("once memory"),x.Callbacks("once memory"),1,"rejected"]],r="pending",i={state:function(){return r},always:function(){return o.done(arguments).fail(arguments),this},catch:function(e){return i.then(null,e)},pipe:function(){var e=arguments;return x.Deferred((function(n){x.each(t,(function(t,r){var i=v(e[r[4]])&&e[r[4]];o[r[1]]((function(){var e=i&&i.apply(this,arguments);e&&v(e.promise)?e.promise().progress(n.notify).done(n.resolve).fail(n.reject):n[r[0]+"With"](this,i?[e]:arguments)}))})),e=null})).promise()},then:function(e,r,i){var o=0;function s(e,t,r,i){return function(){var a=this,c=arguments,l=function(){var n,l;if(!(e<o)){if((n=r.apply(a,c))===t.promise())throw new TypeError("Thenable self-resolution");l=n&&("object"==typeof n||"function"==typeof n)&&n.then,v(l)?i?l.call(n,s(o,t,Q,i),s(o,t,K,i)):(o++,l.call(n,s(o,t,Q,i),s(o,t,K,i),s(o,t,Q,t.notifyWith))):(r!==Q&&(a=void 0,c=[n]),(i||t.resolveWith)(a,c))}},u=i?l:function(){try{l()}catch(n){x.Deferred.exceptionHook&&x.Deferred.exceptionHook(n,u.error),e+1>=o&&(r!==K&&(a=void 0,c=[n]),t.rejectWith(a,c))}};e?u():(x.Deferred.getErrorHook?u.error=x.Deferred.getErrorHook():x.Deferred.getStackHook&&(u.error=x.Deferred.getStackHook()),n.setTimeout(u))}}return x.Deferred((function(n){t[0][3].add(s(0,n,v(i)?i:Q,n.notifyWith)),t[1][3].add(s(0,n,v(e)?e:Q)),t[2][3].add(s(0,n,v(r)?r:K))})).promise()},promise:function(e){return null!=e?x.extend(e,i):i}},o={};return x.each(t,(function(e,n){var s=n[2],a=n[5];i[n[1]]=s.add,a&&s.add((function(){r=a}),t[3-e][2].disable,t[3-e][3].disable,t[0][2].lock,t[0][3].lock),s.add(n[3].fire),o[n[0]]=function(){return o[n[0]+"With"](this===o?void 0:this,arguments),this},o[n[0]+"With"]=s.fireWith})),i.promise(o),e&&e.call(o,o),o},when:function(e){var t=arguments.length,n=t,r=Array(n),i=a.call(arguments),o=x.Deferred(),s=function(e){return function(n){r[e]=this,i[e]=arguments.length>1?a.call(arguments):n,--t||o.resolveWith(r,i)}};if(t<=1&&(G(e,o.done(s(n)).resolve,o.reject,!t),"pending"===o.state()||v(i[n]&&i[n].then)))return o.then();for(;n--;)G(i[n],s(n),o.reject);return o.promise()}});var Y=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;x.Deferred.exceptionHook=function(e,t){n.console&&n.console.warn&&e&&Y.test(e.name)&&n.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},x.readyException=function(e){n.setTimeout((function(){throw e}))};var J=x.Deferred();function X(){_.removeEventListener("DOMContentLoaded",X),n.removeEventListener("load",X),x.ready()}x.fn.ready=function(e){return J.then(e).catch((function(e){x.readyException(e)})),this},x.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--x.readyWait:x.isReady)||(x.isReady=!0,!0!==e&&--x.readyWait>0||J.resolveWith(_,[x]))}}),x.ready.then=J.then,"complete"===_.readyState||"loading"!==_.readyState&&!_.documentElement.doScroll?n.setTimeout(x.ready):(_.addEventListener("DOMContentLoaded",X),n.addEventListener("load",X));var Z=function(e,t,n,r,i,o,s){var a=0,c=e.length,l=null==n;if("object"===C(n))for(a in i=!0,n)Z(e,t,a,n[a],!0,o,s);else if(void 0!==r&&(i=!0,v(r)||(s=!0),l&&(s?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(x(e),n)})),t))for(;a<c;a++)t(e[a],n,s?r:r.call(e[a],a,t(e[a],n)));return i?e:l?t.call(e):c?t(e[0],n):o},ee=/^-ms-/,te=/-([a-z])/g;function ne(e,t){return t.toUpperCase()}function re(e){return e.replace(ee,"ms-").replace(te,ne)}var ie=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function oe(){this.expando=x.expando+oe.uid++}oe.uid=1,oe.prototype={cache:function(e){var t=e[this.expando];return t||(t={},ie(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[re(t)]=n;else for(r in t)i[re(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][re(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(re):(t=re(t))in r?[t]:t.match($)||[]).length;for(;n--;)delete r[t[n]]}(void 0===t||x.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!x.isEmptyObject(t)}};var se=new oe,ae=new oe,ce=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,le=/[A-Z]/g;function ue(e,t,n){var r;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(le,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n=function(e){return"true"===e||"false"!==e&&("null"===e?null:e===+e+""?+e:ce.test(e)?JSON.parse(e):e)}(n)}catch(e){}ae.set(e,t,n)}else n=void 0;return n}x.extend({hasData:function(e){return ae.hasData(e)||se.hasData(e)},data:function(e,t,n){return ae.access(e,t,n)},removeData:function(e,t){ae.remove(e,t)},_data:function(e,t,n){return se.access(e,t,n)},_removeData:function(e,t){se.remove(e,t)}}),x.fn.extend({data:function(e,t){var n,r,i,o=this[0],s=o&&o.attributes;if(void 0===e){if(this.length&&(i=ae.get(o),1===o.nodeType&&!se.get(o,"hasDataAttrs"))){for(n=s.length;n--;)s[n]&&0===(r=s[n].name).indexOf("data-")&&(r=re(r.slice(5)),ue(o,r,i[r]));se.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof e?this.each((function(){ae.set(this,e)})):Z(this,(function(t){var n;if(o&&void 0===t)return void 0!==(n=ae.get(o,e))||void 0!==(n=ue(o,e))?n:void 0;this.each((function(){ae.set(this,e,t)}))}),null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each((function(){ae.remove(this,e)}))}}),x.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=se.get(e,t),n&&(!r||Array.isArray(n)?r=se.access(e,t,x.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=x.queue(e,t),r=n.length,i=n.shift(),o=x._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,(function(){x.dequeue(e,t)}),o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return se.get(e,n)||se.access(e,n,{empty:x.Callbacks("once memory").add((function(){se.remove(e,[t+"queue",n])}))})}}),x.fn.extend({queue:function(e,t){var n=2;return"string"!=typeof e&&(t=e,e="fx",n--),arguments.length<n?x.queue(this[0],e):void 0===t?this:this.each((function(){var n=x.queue(this,e,t);x._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&x.dequeue(this,e)}))},dequeue:function(e){return this.each((function(){x.dequeue(this,e)}))},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=x.Deferred(),o=this,s=this.length,a=function(){--r||i.resolveWith(o,[o])};for("string"!=typeof e&&(t=e,e=void 0),e=e||"fx";s--;)(n=se.get(o[s],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(a));return a(),i.promise(t)}});var he=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,de=new RegExp("^(?:([+-])=|)("+he+")([a-z%]*)$","i"),pe=["Top","Right","Bottom","Left"],fe=_.documentElement,ge=function(e){return x.contains(e.ownerDocument,e)},me={composed:!0};fe.getRootNode&&(ge=function(e){return x.contains(e.ownerDocument,e)||e.getRootNode(me)===e.ownerDocument});var ve=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&ge(e)&&"none"===x.css(e,"display")};function ye(e,t,n,r){var i,o,s=20,a=r?function(){return r.cur()}:function(){return x.css(e,t,"")},c=a(),l=n&&n[3]||(x.cssNumber[t]?"":"px"),u=e.nodeType&&(x.cssNumber[t]||"px"!==l&&+c)&&de.exec(x.css(e,t));if(u&&u[3]!==l){for(c/=2,l=l||u[3],u=+c||1;s--;)x.style(e,t,u+l),(1-o)*(1-(o=a()/c||.5))<=0&&(s=0),u/=o;u*=2,x.style(e,t,u+l),n=n||[]}return n&&(u=+u||+c||0,i=n[1]?u+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=u,r.end=i)),i}var _e={};function be(e){var t,n=e.ownerDocument,r=e.nodeName,i=_e[r];return i||(t=n.body.appendChild(n.createElement(r)),i=x.css(t,"display"),t.parentNode.removeChild(t),"none"===i&&(i="block"),_e[r]=i,i)}function we(e,t){for(var n,r,i=[],o=0,s=e.length;o<s;o++)(r=e[o]).style&&(n=r.style.display,t?("none"===n&&(i[o]=se.get(r,"display")||null,i[o]||(r.style.display="")),""===r.style.display&&ve(r)&&(i[o]=be(r))):"none"!==n&&(i[o]="none",se.set(r,"display",n)));for(o=0;o<s;o++)null!=i[o]&&(e[o].style.display=i[o]);return e}x.fn.extend({show:function(){return we(this,!0)},hide:function(){return we(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each((function(){ve(this)?x(this).show():x(this).hide()}))}});var Ce,Te,xe=/^(?:checkbox|radio)$/i,Ee=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,ke=/^$|^module$|\/(?:java|ecma)script/i;Ce=_.createDocumentFragment().appendChild(_.createElement("div")),(Te=_.createElement("input")).setAttribute("type","radio"),Te.setAttribute("checked","checked"),Te.setAttribute("name","t"),Ce.appendChild(Te),m.checkClone=Ce.cloneNode(!0).cloneNode(!0).lastChild.checked,Ce.innerHTML="<textarea>x</textarea>",m.noCloneChecked=!!Ce.cloneNode(!0).lastChild.defaultValue,Ce.innerHTML="<option></option>",m.option=!!Ce.lastChild;var Ie={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function Se(e,t){var n;return n=void 0!==e.getElementsByTagName?e.getElementsByTagName(t||"*"):void 0!==e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&k(e,t)?x.merge([e],n):n}function Oe(e,t){for(var n=0,r=e.length;n<r;n++)se.set(e[n],"globalEval",!t||se.get(t[n],"globalEval"))}Ie.tbody=Ie.tfoot=Ie.colgroup=Ie.caption=Ie.thead,Ie.th=Ie.td,m.option||(Ie.optgroup=Ie.option=[1,"<select multiple='multiple'>","</select>"]);var Ne=/<|&#?\w+;/;function Pe(e,t,n,r,i){for(var o,s,a,c,l,u,h=t.createDocumentFragment(),d=[],p=0,f=e.length;p<f;p++)if((o=e[p])||0===o)if("object"===C(o))x.merge(d,o.nodeType?[o]:o);else if(Ne.test(o)){for(s=s||h.appendChild(t.createElement("div")),a=(Ee.exec(o)||["",""])[1].toLowerCase(),c=Ie[a]||Ie._default,s.innerHTML=c[1]+x.htmlPrefilter(o)+c[2],u=c[0];u--;)s=s.lastChild;x.merge(d,s.childNodes),(s=h.firstChild).textContent=""}else d.push(t.createTextNode(o));for(h.textContent="",p=0;o=d[p++];)if(r&&x.inArray(o,r)>-1)i&&i.push(o);else if(l=ge(o),s=Se(h.appendChild(o),"script"),l&&Oe(s),n)for(u=0;o=s[u++];)ke.test(o.type||"")&&n.push(o);return h}var Ae=/^([^.]*)(?:\.(.+)|)/;function Re(){return!0}function je(){return!1}function De(e,t,n,r,i,o){var s,a;if("object"==typeof t){for(a in"string"!=typeof n&&(r=r||n,n=void 0),t)De(e,a,n,r,t[a],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=je;else if(!i)return e;return 1===o&&(s=i,(i=function(e){return x().off(e),s.apply(this,arguments)}).guid=s.guid||(s.guid=x.guid++)),e.each((function(){x.event.add(this,t,i,r,n)}))}function Le(e,t,n){n?(se.set(e,t,!1),x.event.add(e,t,{namespace:!1,handler:function(e){var n,r=se.get(this,t);if(1&e.isTrigger&&this[t]){if(r)(x.event.special[t]||{}).delegateType&&e.stopPropagation();else if(r=a.call(arguments),se.set(this,t,r),this[t](),n=se.get(this,t),se.set(this,t,!1),r!==n)return e.stopImmediatePropagation(),e.preventDefault(),n}else r&&(se.set(this,t,x.event.trigger(r[0],r.slice(1),this)),e.stopPropagation(),e.isImmediatePropagationStopped=Re)}})):void 0===se.get(e,t)&&x.event.add(e,t,Re)}x.event={global:{},add:function(e,t,n,r,i){var o,s,a,c,l,u,h,d,p,f,g,m=se.get(e);if(ie(e))for(n.handler&&(n=(o=n).handler,i=o.selector),i&&x.find.matchesSelector(fe,i),n.guid||(n.guid=x.guid++),(c=m.events)||(c=m.events=Object.create(null)),(s=m.handle)||(s=m.handle=function(t){return void 0!==x&&x.event.triggered!==t.type?x.event.dispatch.apply(e,arguments):void 0}),l=(t=(t||"").match($)||[""]).length;l--;)p=g=(a=Ae.exec(t[l])||[])[1],f=(a[2]||"").split(".").sort(),p&&(h=x.event.special[p]||{},p=(i?h.delegateType:h.bindType)||p,h=x.event.special[p]||{},u=x.extend({type:p,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&x.expr.match.needsContext.test(i),namespace:f.join(".")},o),(d=c[p])||((d=c[p]=[]).delegateCount=0,h.setup&&!1!==h.setup.call(e,r,f,s)||e.addEventListener&&e.addEventListener(p,s)),h.add&&(h.add.call(e,u),u.handler.guid||(u.handler.guid=n.guid)),i?d.splice(d.delegateCount++,0,u):d.push(u),x.event.global[p]=!0)},remove:function(e,t,n,r,i){var o,s,a,c,l,u,h,d,p,f,g,m=se.hasData(e)&&se.get(e);if(m&&(c=m.events)){for(l=(t=(t||"").match($)||[""]).length;l--;)if(p=g=(a=Ae.exec(t[l])||[])[1],f=(a[2]||"").split(".").sort(),p){for(h=x.event.special[p]||{},d=c[p=(r?h.delegateType:h.bindType)||p]||[],a=a[2]&&new RegExp("(^|\\.)"+f.join("\\.(?:.*\\.|)")+"(\\.|$)"),s=o=d.length;o--;)u=d[o],!i&&g!==u.origType||n&&n.guid!==u.guid||a&&!a.test(u.namespace)||r&&r!==u.selector&&("**"!==r||!u.selector)||(d.splice(o,1),u.selector&&d.delegateCount--,h.remove&&h.remove.call(e,u));s&&!d.length&&(h.teardown&&!1!==h.teardown.call(e,f,m.handle)||x.removeEvent(e,p,m.handle),delete c[p])}else for(p in c)x.event.remove(e,p+t[l],n,r,!0);x.isEmptyObject(c)&&se.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,s,a=new Array(arguments.length),c=x.event.fix(e),l=(se.get(this,"events")||Object.create(null))[c.type]||[],u=x.event.special[c.type]||{};for(a[0]=c,t=1;t<arguments.length;t++)a[t]=arguments[t];if(c.delegateTarget=this,!u.preDispatch||!1!==u.preDispatch.call(this,c)){for(s=x.event.handlers.call(this,c,l),t=0;(i=s[t++])&&!c.isPropagationStopped();)for(c.currentTarget=i.elem,n=0;(o=i.handlers[n++])&&!c.isImmediatePropagationStopped();)c.rnamespace&&!1!==o.namespace&&!c.rnamespace.test(o.namespace)||(c.handleObj=o,c.data=o.data,void 0!==(r=((x.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,a))&&!1===(c.result=r)&&(c.preventDefault(),c.stopPropagation()));return u.postDispatch&&u.postDispatch.call(this,c),c.result}},handlers:function(e,t){var n,r,i,o,s,a=[],c=t.delegateCount,l=e.target;if(c&&l.nodeType&&!("click"===e.type&&e.button>=1))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],s={},n=0;n<c;n++)void 0===s[i=(r=t[n]).selector+" "]&&(s[i]=r.needsContext?x(i,this).index(l)>-1:x.find(i,this,null,[l]).length),s[i]&&o.push(r);o.length&&a.push({elem:l,handlers:o})}return l=this,c<t.length&&a.push({elem:l,handlers:t.slice(c)}),a},addProp:function(e,t){Object.defineProperty(x.Event.prototype,e,{enumerable:!0,configurable:!0,get:v(t)?function(){if(this.originalEvent)return t(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[e]},set:function(t){Object.defineProperty(this,e,{enumerable:!0,configurable:!0,writable:!0,value:t})}})},fix:function(e){return e[x.expando]?e:new x.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return xe.test(t.type)&&t.click&&k(t,"input")&&Le(t,"click",!0),!1},trigger:function(e){var t=this||e;return xe.test(t.type)&&t.click&&k(t,"input")&&Le(t,"click"),!0},_default:function(e){var t=e.target;return xe.test(t.type)&&t.click&&k(t,"input")&&se.get(t,"click")||k(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},x.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},x.Event=function(e,t){if(!(this instanceof x.Event))return new x.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?Re:je,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&x.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[x.expando]=!0},x.Event.prototype={constructor:x.Event,isDefaultPrevented:je,isPropagationStopped:je,isImmediatePropagationStopped:je,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=Re,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=Re,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=Re,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},x.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},x.event.addProp),x.each({focus:"focusin",blur:"focusout"},(function(e,t){function n(e){if(_.documentMode){var n=se.get(this,"handle"),r=x.event.fix(e);r.type="focusin"===e.type?"focus":"blur",r.isSimulated=!0,n(e),r.target===r.currentTarget&&n(r)}else x.event.simulate(t,e.target,x.event.fix(e))}x.event.special[e]={setup:function(){var r;if(Le(this,e,!0),!_.documentMode)return!1;(r=se.get(this,t))||this.addEventListener(t,n),se.set(this,t,(r||0)+1)},trigger:function(){return Le(this,e),!0},teardown:function(){var e;if(!_.documentMode)return!1;(e=se.get(this,t)-1)?se.set(this,t,e):(this.removeEventListener(t,n),se.remove(this,t))},_default:function(t){return se.get(t.target,e)},delegateType:t},x.event.special[t]={setup:function(){var r=this.ownerDocument||this.document||this,i=_.documentMode?this:r,o=se.get(i,t);o||(_.documentMode?this.addEventListener(t,n):r.addEventListener(e,n,!0)),se.set(i,t,(o||0)+1)},teardown:function(){var r=this.ownerDocument||this.document||this,i=_.documentMode?this:r,o=se.get(i,t)-1;o?se.set(i,t,o):(_.documentMode?this.removeEventListener(t,n):r.removeEventListener(e,n,!0),se.remove(i,t))}}})),x.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},(function(e,t){x.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return i&&(i===r||x.contains(r,i))||(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}})),x.fn.extend({on:function(e,t,n,r){return De(this,e,t,n,r)},one:function(e,t,n,r){return De(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,x(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=je),this.each((function(){x.event.remove(this,e,n,t)}))}});var Me=/<script|<style|<link/i,qe=/checked\s*(?:[^=]|=\s*.checked.)/i,Fe=/^\s*<!\[CDATA\[|\]\]>\s*$/g;function He(e,t){return k(e,"table")&&k(11!==t.nodeType?t:t.firstChild,"tr")&&x(e).children("tbody")[0]||e}function Ue(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function We(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Be(e,t){var n,r,i,o,s,a;if(1===t.nodeType){if(se.hasData(e)&&(a=se.get(e).events))for(i in se.remove(t,"handle events"),a)for(n=0,r=a[i].length;n<r;n++)x.event.add(t,i,a[i][n]);ae.hasData(e)&&(o=ae.access(e),s=x.extend({},o),ae.set(t,s))}}function ze(e,t){var n=t.nodeName.toLowerCase();"input"===n&&xe.test(e.type)?t.checked=e.checked:"input"!==n&&"textarea"!==n||(t.defaultValue=e.defaultValue)}function Ve(e,t,n,r){t=c(t);var i,o,s,a,l,u,h=0,d=e.length,p=d-1,f=t[0],g=v(f);if(g||d>1&&"string"==typeof f&&!m.checkClone&&qe.test(f))return e.each((function(i){var o=e.eq(i);g&&(t[0]=f.call(this,i,o.html())),Ve(o,t,n,r)}));if(d&&(o=(i=Pe(t,e[0].ownerDocument,!1,e,r)).firstChild,1===i.childNodes.length&&(i=o),o||r)){for(a=(s=x.map(Se(i,"script"),Ue)).length;h<d;h++)l=i,h!==p&&(l=x.clone(l,!0,!0),a&&x.merge(s,Se(l,"script"))),n.call(e[h],l,h);if(a)for(u=s[s.length-1].ownerDocument,x.map(s,We),h=0;h<a;h++)l=s[h],ke.test(l.type||"")&&!se.access(l,"globalEval")&&x.contains(u,l)&&(l.src&&"module"!==(l.type||"").toLowerCase()?x._evalUrl&&!l.noModule&&x._evalUrl(l.src,{nonce:l.nonce||l.getAttribute("nonce")},u):w(l.textContent.replace(Fe,""),l,u))}return e}function $e(e,t,n){for(var r,i=t?x.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||x.cleanData(Se(r)),r.parentNode&&(n&&ge(r)&&Oe(Se(r,"script")),r.parentNode.removeChild(r));return e}x.extend({htmlPrefilter:function(e){return e},clone:function(e,t,n){var r,i,o,s,a=e.cloneNode(!0),c=ge(e);if(!(m.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||x.isXMLDoc(e)))for(s=Se(a),r=0,i=(o=Se(e)).length;r<i;r++)ze(o[r],s[r]);if(t)if(n)for(o=o||Se(e),s=s||Se(a),r=0,i=o.length;r<i;r++)Be(o[r],s[r]);else Be(e,a);return(s=Se(a,"script")).length>0&&Oe(s,!c&&Se(e,"script")),a},cleanData:function(e){for(var t,n,r,i=x.event.special,o=0;void 0!==(n=e[o]);o++)if(ie(n)){if(t=n[se.expando]){if(t.events)for(r in t.events)i[r]?x.event.remove(n,r):x.removeEvent(n,r,t.handle);n[se.expando]=void 0}n[ae.expando]&&(n[ae.expando]=void 0)}}}),x.fn.extend({detach:function(e){return $e(this,e,!0)},remove:function(e){return $e(this,e)},text:function(e){return Z(this,(function(e){return void 0===e?x.text(this):this.empty().each((function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)}))}),null,e,arguments.length)},append:function(){return Ve(this,arguments,(function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||He(this,e).appendChild(e)}))},prepend:function(){return Ve(this,arguments,(function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=He(this,e);t.insertBefore(e,t.firstChild)}}))},before:function(){return Ve(this,arguments,(function(e){this.parentNode&&this.parentNode.insertBefore(e,this)}))},after:function(){return Ve(this,arguments,(function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)}))},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(x.cleanData(Se(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map((function(){return x.clone(this,e,t)}))},html:function(e){return Z(this,(function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!Me.test(e)&&!Ie[(Ee.exec(e)||["",""])[1].toLowerCase()]){e=x.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(x.cleanData(Se(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)}),null,e,arguments.length)},replaceWith:function(){var e=[];return Ve(this,arguments,(function(t){var n=this.parentNode;x.inArray(this,e)<0&&(x.cleanData(Se(this)),n&&n.replaceChild(t,this))}),e)}}),x.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},(function(e,t){x.fn[e]=function(e){for(var n,r=[],i=x(e),o=i.length-1,s=0;s<=o;s++)n=s===o?this:this.clone(!0),x(i[s])[t](n),l.apply(r,n.get());return this.pushStack(r)}}));var Qe=new RegExp("^("+he+")(?!px)[a-z%]+$","i"),Ke=/^--/,Ge=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=n),t.getComputedStyle(e)},Ye=function(e,t,n){var r,i,o={};for(i in t)o[i]=e.style[i],e.style[i]=t[i];for(i in r=n.call(e),t)e.style[i]=o[i];return r},Je=new RegExp(pe.join("|"),"i");function Xe(e,t,n){var r,i,o,s,a=Ke.test(t),c=e.style;return(n=n||Ge(e))&&(s=n.getPropertyValue(t)||n[t],a&&s&&(s=s.replace(P,"$1")||void 0),""!==s||ge(e)||(s=x.style(e,t)),!m.pixelBoxStyles()&&Qe.test(s)&&Je.test(t)&&(r=c.width,i=c.minWidth,o=c.maxWidth,c.minWidth=c.maxWidth=c.width=s,s=n.width,c.width=r,c.minWidth=i,c.maxWidth=o)),void 0!==s?s+"":s}function Ze(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function e(){if(u){l.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",u.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",fe.appendChild(l).appendChild(u);var e=n.getComputedStyle(u);r="1%"!==e.top,c=12===t(e.marginLeft),u.style.right="60%",s=36===t(e.right),i=36===t(e.width),u.style.position="absolute",o=12===t(u.offsetWidth/3),fe.removeChild(l),u=null}}function t(e){return Math.round(parseFloat(e))}var r,i,o,s,a,c,l=_.createElement("div"),u=_.createElement("div");u.style&&(u.style.backgroundClip="content-box",u.cloneNode(!0).style.backgroundClip="",m.clearCloneStyle="content-box"===u.style.backgroundClip,x.extend(m,{boxSizingReliable:function(){return e(),i},pixelBoxStyles:function(){return e(),s},pixelPosition:function(){return e(),r},reliableMarginLeft:function(){return e(),c},scrollboxSize:function(){return e(),o},reliableTrDimensions:function(){var e,t,r,i;return null==a&&(e=_.createElement("table"),t=_.createElement("tr"),r=_.createElement("div"),e.style.cssText="position:absolute;left:-11111px;border-collapse:separate",t.style.cssText="box-sizing:content-box;border:1px solid",t.style.height="1px",r.style.height="9px",r.style.display="block",fe.appendChild(e).appendChild(t).appendChild(r),i=n.getComputedStyle(t),a=parseInt(i.height,10)+parseInt(i.borderTopWidth,10)+parseInt(i.borderBottomWidth,10)===t.offsetHeight,fe.removeChild(e)),a}}))}();var et=["Webkit","Moz","ms"],tt=_.createElement("div").style,nt={};function rt(e){var t=x.cssProps[e]||nt[e];return t||(e in tt?e:nt[e]=function(e){for(var t=e[0].toUpperCase()+e.slice(1),n=et.length;n--;)if((e=et[n]+t)in tt)return e}(e)||e)}var it=/^(none|table(?!-c[ea]).+)/,ot={position:"absolute",visibility:"hidden",display:"block"},st={letterSpacing:"0",fontWeight:"400"};function at(e,t,n){var r=de.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function ct(e,t,n,r,i,o){var s="width"===t?1:0,a=0,c=0,l=0;if(n===(r?"border":"content"))return 0;for(;s<4;s+=2)"margin"===n&&(l+=x.css(e,n+pe[s],!0,i)),r?("content"===n&&(c-=x.css(e,"padding"+pe[s],!0,i)),"margin"!==n&&(c-=x.css(e,"border"+pe[s]+"Width",!0,i))):(c+=x.css(e,"padding"+pe[s],!0,i),"padding"!==n?c+=x.css(e,"border"+pe[s]+"Width",!0,i):a+=x.css(e,"border"+pe[s]+"Width",!0,i));return!r&&o>=0&&(c+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-c-a-.5))||0),c+l}function lt(e,t,n){var r=Ge(e),i=(!m.boxSizingReliable()||n)&&"border-box"===x.css(e,"boxSizing",!1,r),o=i,s=Xe(e,t,r),a="offset"+t[0].toUpperCase()+t.slice(1);if(Qe.test(s)){if(!n)return s;s="auto"}return(!m.boxSizingReliable()&&i||!m.reliableTrDimensions()&&k(e,"tr")||"auto"===s||!parseFloat(s)&&"inline"===x.css(e,"display",!1,r))&&e.getClientRects().length&&(i="border-box"===x.css(e,"boxSizing",!1,r),(o=a in e)&&(s=e[a])),(s=parseFloat(s)||0)+ct(e,t,n||(i?"border":"content"),o,r,s)+"px"}function ut(e,t,n,r,i){return new ut.prototype.init(e,t,n,r,i)}x.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Xe(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,aspectRatio:!0,borderImageSlice:!0,columnCount:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,scale:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeMiterlimit:!0,strokeOpacity:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,s,a=re(t),c=Ke.test(t),l=e.style;if(c||(t=rt(a)),s=x.cssHooks[t]||x.cssHooks[a],void 0===n)return s&&"get"in s&&void 0!==(i=s.get(e,!1,r))?i:l[t];"string"===(o=typeof n)&&(i=de.exec(n))&&i[1]&&(n=ye(e,t,i),o="number"),null!=n&&n==n&&("number"!==o||c||(n+=i&&i[3]||(x.cssNumber[a]?"":"px")),m.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),s&&"set"in s&&void 0===(n=s.set(e,n,r))||(c?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,s,a=re(t);return Ke.test(t)||(t=rt(a)),(s=x.cssHooks[t]||x.cssHooks[a])&&"get"in s&&(i=s.get(e,!0,n)),void 0===i&&(i=Xe(e,t,r)),"normal"===i&&t in st&&(i=st[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),x.each(["height","width"],(function(e,t){x.cssHooks[t]={get:function(e,n,r){if(n)return!it.test(x.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?lt(e,t,r):Ye(e,ot,(function(){return lt(e,t,r)}))},set:function(e,n,r){var i,o=Ge(e),s=!m.scrollboxSize()&&"absolute"===o.position,a=(s||r)&&"border-box"===x.css(e,"boxSizing",!1,o),c=r?ct(e,t,r,a,o):0;return a&&s&&(c-=Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-parseFloat(o[t])-ct(e,t,"border",!1,o)-.5)),c&&(i=de.exec(n))&&"px"!==(i[3]||"px")&&(e.style[t]=n,n=x.css(e,t)),at(0,n,c)}}})),x.cssHooks.marginLeft=Ze(m.reliableMarginLeft,(function(e,t){if(t)return(parseFloat(Xe(e,"marginLeft"))||e.getBoundingClientRect().left-Ye(e,{marginLeft:0},(function(){return e.getBoundingClientRect().left})))+"px"})),x.each({margin:"",padding:"",border:"Width"},(function(e,t){x.cssHooks[e+t]={expand:function(n){for(var r=0,i={},o="string"==typeof n?n.split(" "):[n];r<4;r++)i[e+pe[r]+t]=o[r]||o[r-2]||o[0];return i}},"margin"!==e&&(x.cssHooks[e+t].set=at)})),x.fn.extend({css:function(e,t){return Z(this,(function(e,t,n){var r,i,o={},s=0;if(Array.isArray(t)){for(r=Ge(e),i=t.length;s<i;s++)o[t[s]]=x.css(e,t[s],!1,r);return o}return void 0!==n?x.style(e,t,n):x.css(e,t)}),e,t,arguments.length>1)}}),x.Tween=ut,ut.prototype={constructor:ut,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||x.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(x.cssNumber[n]?"":"px")},cur:function(){var e=ut.propHooks[this.prop];return e&&e.get?e.get(this):ut.propHooks._default.get(this)},run:function(e){var t,n=ut.propHooks[this.prop];return this.options.duration?this.pos=t=x.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):ut.propHooks._default.set(this),this}},ut.prototype.init.prototype=ut.prototype,ut.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=x.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){x.fx.step[e.prop]?x.fx.step[e.prop](e):1!==e.elem.nodeType||!x.cssHooks[e.prop]&&null==e.elem.style[rt(e.prop)]?e.elem[e.prop]=e.now:x.style(e.elem,e.prop,e.now+e.unit)}}},ut.propHooks.scrollTop=ut.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},x.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},x.fx=ut.prototype.init,x.fx.step={};var ht,dt,pt=/^(?:toggle|show|hide)$/,ft=/queueHooks$/;function gt(){dt&&(!1===_.hidden&&n.requestAnimationFrame?n.requestAnimationFrame(gt):n.setTimeout(gt,x.fx.interval),x.fx.tick())}function mt(){return n.setTimeout((function(){ht=void 0})),ht=Date.now()}function vt(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=pe[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function yt(e,t,n){for(var r,i=(_t.tweeners[t]||[]).concat(_t.tweeners["*"]),o=0,s=i.length;o<s;o++)if(r=i[o].call(n,t,e))return r}function _t(e,t,n){var r,i,o=0,s=_t.prefilters.length,a=x.Deferred().always((function(){delete c.elem})),c=function(){if(i)return!1;for(var t=ht||mt(),n=Math.max(0,l.startTime+l.duration-t),r=1-(n/l.duration||0),o=0,s=l.tweens.length;o<s;o++)l.tweens[o].run(r);return a.notifyWith(e,[l,r,n]),r<1&&s?n:(s||a.notifyWith(e,[l,1,0]),a.resolveWith(e,[l]),!1)},l=a.promise({elem:e,props:x.extend({},t),opts:x.extend(!0,{specialEasing:{},easing:x.easing._default},n),originalProperties:t,originalOptions:n,startTime:ht||mt(),duration:n.duration,tweens:[],createTween:function(t,n){var r=x.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0;if(i)return this;for(i=!0;n<r;n++)l.tweens[n].run(1);return t?(a.notifyWith(e,[l,1,0]),a.resolveWith(e,[l,t])):a.rejectWith(e,[l,t]),this}}),u=l.props;for(!function(e,t){var n,r,i,o,s;for(n in e)if(i=t[r=re(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(s=x.cssHooks[r])&&"expand"in s)for(n in o=s.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(u,l.opts.specialEasing);o<s;o++)if(r=_t.prefilters[o].call(l,e,u,l.opts))return v(r.stop)&&(x._queueHooks(l.elem,l.opts.queue).stop=r.stop.bind(r)),r;return x.map(u,yt,l),v(l.opts.start)&&l.opts.start.call(e,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),x.fx.timer(x.extend(c,{elem:e,anim:l,queue:l.opts.queue})),l}x.Animation=x.extend(_t,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return ye(n.elem,e,de.exec(t),n),n}]},tweener:function(e,t){v(e)?(t=e,e=["*"]):e=e.match($);for(var n,r=0,i=e.length;r<i;r++)n=e[r],_t.tweeners[n]=_t.tweeners[n]||[],_t.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,s,a,c,l,u,h="width"in t||"height"in t,d=this,p={},f=e.style,g=e.nodeType&&ve(e),m=se.get(e,"fxshow");for(r in n.queue||(null==(s=x._queueHooks(e,"fx")).unqueued&&(s.unqueued=0,a=s.empty.fire,s.empty.fire=function(){s.unqueued||a()}),s.unqueued++,d.always((function(){d.always((function(){s.unqueued--,x.queue(e,"fx").length||s.empty.fire()}))}))),t)if(i=t[r],pt.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!m||void 0===m[r])continue;g=!0}p[r]=m&&m[r]||x.style(e,r)}if((c=!x.isEmptyObject(t))||!x.isEmptyObject(p))for(r in h&&1===e.nodeType&&(n.overflow=[f.overflow,f.overflowX,f.overflowY],null==(l=m&&m.display)&&(l=se.get(e,"display")),"none"===(u=x.css(e,"display"))&&(l?u=l:(we([e],!0),l=e.style.display||l,u=x.css(e,"display"),we([e]))),("inline"===u||"inline-block"===u&&null!=l)&&"none"===x.css(e,"float")&&(c||(d.done((function(){f.display=l})),null==l&&(u=f.display,l="none"===u?"":u)),f.display="inline-block")),n.overflow&&(f.overflow="hidden",d.always((function(){f.overflow=n.overflow[0],f.overflowX=n.overflow[1],f.overflowY=n.overflow[2]}))),c=!1,p)c||(m?"hidden"in m&&(g=m.hidden):m=se.access(e,"fxshow",{display:l}),o&&(m.hidden=!g),g&&we([e],!0),d.done((function(){for(r in g||we([e]),se.remove(e,"fxshow"),p)x.style(e,r,p[r])}))),c=yt(g?m[r]:0,r,d),r in m||(m[r]=c.start,g&&(c.end=c.start,c.start=0))}],prefilter:function(e,t){t?_t.prefilters.unshift(e):_t.prefilters.push(e)}}),x.speed=function(e,t,n){var r=e&&"object"==typeof e?x.extend({},e):{complete:n||!n&&t||v(e)&&e,duration:e,easing:n&&t||t&&!v(t)&&t};return x.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in x.fx.speeds?r.duration=x.fx.speeds[r.duration]:r.duration=x.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){v(r.old)&&r.old.call(this),r.queue&&x.dequeue(this,r.queue)},r},x.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ve).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=x.isEmptyObject(e),o=x.speed(t,n,r),s=function(){var t=_t(this,x.extend({},e),o);(i||se.get(this,"finish"))&&t.stop(!0)};return s.finish=s,i||!1===o.queue?this.each(s):this.queue(o.queue,s)},stop:function(e,t,n){var r=function(e){var t=e.stop;delete e.stop,t(n)};return"string"!=typeof e&&(n=t,t=e,e=void 0),t&&this.queue(e||"fx",[]),this.each((function(){var t=!0,i=null!=e&&e+"queueHooks",o=x.timers,s=se.get(this);if(i)s[i]&&s[i].stop&&r(s[i]);else for(i in s)s[i]&&s[i].stop&&ft.test(i)&&r(s[i]);for(i=o.length;i--;)o[i].elem!==this||null!=e&&o[i].queue!==e||(o[i].anim.stop(n),t=!1,o.splice(i,1));!t&&n||x.dequeue(this,e)}))},finish:function(e){return!1!==e&&(e=e||"fx"),this.each((function(){var t,n=se.get(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=x.timers,s=r?r.length:0;for(n.finish=!0,x.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;t<s;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish}))}}),x.each(["toggle","show","hide"],(function(e,t){var n=x.fn[t];x.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(vt(t,!0),e,r,i)}})),x.each({slideDown:vt("show"),slideUp:vt("hide"),slideToggle:vt("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},(function(e,t){x.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}})),x.timers=[],x.fx.tick=function(){var e,t=0,n=x.timers;for(ht=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||x.fx.stop(),ht=void 0},x.fx.timer=function(e){x.timers.push(e),x.fx.start()},x.fx.interval=13,x.fx.start=function(){dt||(dt=!0,gt())},x.fx.stop=function(){dt=null},x.fx.speeds={slow:600,fast:200,_default:400},x.fn.delay=function(e,t){return e=x.fx&&x.fx.speeds[e]||e,t=t||"fx",this.queue(t,(function(t,r){var i=n.setTimeout(t,e);r.stop=function(){n.clearTimeout(i)}}))},function(){var e=_.createElement("input"),t=_.createElement("select").appendChild(_.createElement("option"));e.type="checkbox",m.checkOn=""!==e.value,m.optSelected=t.selected,(e=_.createElement("input")).value="t",e.type="radio",m.radioValue="t"===e.value}();var bt,wt=x.expr.attrHandle;x.fn.extend({attr:function(e,t){return Z(this,x.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each((function(){x.removeAttr(this,e)}))}}),x.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return void 0===e.getAttribute?x.prop(e,t,n):(1===o&&x.isXMLDoc(e)||(i=x.attrHooks[t.toLowerCase()]||(x.expr.match.bool.test(t)?bt:void 0)),void 0!==n?null===n?void x.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=x.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!m.radioValue&&"radio"===t&&k(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match($);if(i&&1===e.nodeType)for(;n=i[r++];)e.removeAttribute(n)}}),bt={set:function(e,t,n){return!1===t?x.removeAttr(e,n):e.setAttribute(n,n),n}},x.each(x.expr.match.bool.source.match(/\w+/g),(function(e,t){var n=wt[t]||x.find.attr;wt[t]=function(e,t,r){var i,o,s=t.toLowerCase();return r||(o=wt[s],wt[s]=i,i=null!=n(e,t,r)?s:null,wt[s]=o),i}}));var Ct=/^(?:input|select|textarea|button)$/i,Tt=/^(?:a|area)$/i;function xt(e){return(e.match($)||[]).join(" ")}function Et(e){return e.getAttribute&&e.getAttribute("class")||""}function kt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match($)||[]}x.fn.extend({prop:function(e,t){return Z(this,x.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each((function(){delete this[x.propFix[e]||e]}))}}),x.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&x.isXMLDoc(e)||(t=x.propFix[t]||t,i=x.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=x.find.attr(e,"tabindex");return t?parseInt(t,10):Ct.test(e.nodeName)||Tt.test(e.nodeName)&&e.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),m.optSelected||(x.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),x.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],(function(){x.propFix[this.toLowerCase()]=this})),x.fn.extend({addClass:function(e){var t,n,r,i,o,s;return v(e)?this.each((function(t){x(this).addClass(e.call(this,t,Et(this)))})):(t=kt(e)).length?this.each((function(){if(r=Et(this),n=1===this.nodeType&&" "+xt(r)+" "){for(o=0;o<t.length;o++)i=t[o],n.indexOf(" "+i+" ")<0&&(n+=i+" ");s=xt(n),r!==s&&this.setAttribute("class",s)}})):this},removeClass:function(e){var t,n,r,i,o,s;return v(e)?this.each((function(t){x(this).removeClass(e.call(this,t,Et(this)))})):arguments.length?(t=kt(e)).length?this.each((function(){if(r=Et(this),n=1===this.nodeType&&" "+xt(r)+" "){for(o=0;o<t.length;o++)for(i=t[o];n.indexOf(" "+i+" ")>-1;)n=n.replace(" "+i+" "," ");s=xt(n),r!==s&&this.setAttribute("class",s)}})):this:this.attr("class","")},toggleClass:function(e,t){var n,r,i,o,s=typeof e,a="string"===s||Array.isArray(e);return v(e)?this.each((function(n){x(this).toggleClass(e.call(this,n,Et(this),t),t)})):"boolean"==typeof t&&a?t?this.addClass(e):this.removeClass(e):(n=kt(e),this.each((function(){if(a)for(o=x(this),i=0;i<n.length;i++)r=n[i],o.hasClass(r)?o.removeClass(r):o.addClass(r);else void 0!==e&&"boolean"!==s||((r=Et(this))&&se.set(this,"__className__",r),this.setAttribute&&this.setAttribute("class",r||!1===e?"":se.get(this,"__className__")||""))})))},hasClass:function(e){var t,n,r=0;for(t=" "+e+" ";n=this[r++];)if(1===n.nodeType&&(" "+xt(Et(n))+" ").indexOf(t)>-1)return!0;return!1}});var It=/\r/g;x.fn.extend({val:function(e){var t,n,r,i=this[0];return arguments.length?(r=v(e),this.each((function(n){var i;1===this.nodeType&&(null==(i=r?e.call(this,n,x(this).val()):e)?i="":"number"==typeof i?i+="":Array.isArray(i)&&(i=x.map(i,(function(e){return null==e?"":e+""}))),(t=x.valHooks[this.type]||x.valHooks[this.nodeName.toLowerCase()])&&"set"in t&&void 0!==t.set(this,i,"value")||(this.value=i))}))):i?(t=x.valHooks[i.type]||x.valHooks[i.nodeName.toLowerCase()])&&"get"in t&&void 0!==(n=t.get(i,"value"))?n:"string"==typeof(n=i.value)?n.replace(It,""):null==n?"":n:void 0}}),x.extend({valHooks:{option:{get:function(e){var t=x.find.attr(e,"value");return null!=t?t:xt(x.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,s="select-one"===e.type,a=s?null:[],c=s?o+1:i.length;for(r=o<0?c:s?o:0;r<c;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!k(n.parentNode,"optgroup"))){if(t=x(n).val(),s)return t;a.push(t)}return a},set:function(e,t){for(var n,r,i=e.options,o=x.makeArray(t),s=i.length;s--;)((r=i[s]).selected=x.inArray(x.valHooks.option.get(r),o)>-1)&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),x.each(["radio","checkbox"],(function(){x.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=x.inArray(x(e).val(),t)>-1}},m.checkOn||(x.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}));var St=n.location,Ot={guid:Date.now()},Nt=/\?/;x.parseXML=function(e){var t,r;if(!e||"string"!=typeof e)return null;try{t=(new n.DOMParser).parseFromString(e,"text/xml")}catch(e){}return r=t&&t.getElementsByTagName("parsererror")[0],t&&!r||x.error("Invalid XML: "+(r?x.map(r.childNodes,(function(e){return e.textContent})).join("\n"):e)),t};var Pt=/^(?:focusinfocus|focusoutblur)$/,At=function(e){e.stopPropagation()};x.extend(x.event,{trigger:function(e,t,r,i){var o,s,a,c,l,u,h,d,f=[r||_],g=p.call(e,"type")?e.type:e,m=p.call(e,"namespace")?e.namespace.split("."):[];if(s=d=a=r=r||_,3!==r.nodeType&&8!==r.nodeType&&!Pt.test(g+x.event.triggered)&&(g.indexOf(".")>-1&&(m=g.split("."),g=m.shift(),m.sort()),l=g.indexOf(":")<0&&"on"+g,(e=e[x.expando]?e:new x.Event(g,"object"==typeof e&&e)).isTrigger=i?2:3,e.namespace=m.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+m.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=r),t=null==t?[e]:x.makeArray(t,[e]),h=x.event.special[g]||{},i||!h.trigger||!1!==h.trigger.apply(r,t))){if(!i&&!h.noBubble&&!y(r)){for(c=h.delegateType||g,Pt.test(c+g)||(s=s.parentNode);s;s=s.parentNode)f.push(s),a=s;a===(r.ownerDocument||_)&&f.push(a.defaultView||a.parentWindow||n)}for(o=0;(s=f[o++])&&!e.isPropagationStopped();)d=s,e.type=o>1?c:h.bindType||g,(u=(se.get(s,"events")||Object.create(null))[e.type]&&se.get(s,"handle"))&&u.apply(s,t),(u=l&&s[l])&&u.apply&&ie(s)&&(e.result=u.apply(s,t),!1===e.result&&e.preventDefault());return e.type=g,i||e.isDefaultPrevented()||h._default&&!1!==h._default.apply(f.pop(),t)||!ie(r)||l&&v(r[g])&&!y(r)&&((a=r[l])&&(r[l]=null),x.event.triggered=g,e.isPropagationStopped()&&d.addEventListener(g,At),r[g](),e.isPropagationStopped()&&d.removeEventListener(g,At),x.event.triggered=void 0,a&&(r[l]=a)),e.result}},simulate:function(e,t,n){var r=x.extend(new x.Event,n,{type:e,isSimulated:!0});x.event.trigger(r,null,t)}}),x.fn.extend({trigger:function(e,t){return this.each((function(){x.event.trigger(e,t,this)}))},triggerHandler:function(e,t){var n=this[0];if(n)return x.event.trigger(e,t,n,!0)}});var Rt=/\[\]$/,jt=/\r?\n/g,Dt=/^(?:submit|button|image|reset|file)$/i,Lt=/^(?:input|select|textarea|keygen)/i;function Mt(e,t,n,r){var i;if(Array.isArray(t))x.each(t,(function(t,i){n||Rt.test(e)?r(e,i):Mt(e+"["+("object"==typeof i&&null!=i?t:"")+"]",i,n,r)}));else if(n||"object"!==C(t))r(e,t);else for(i in t)Mt(e+"["+i+"]",t[i],n,r)}x.param=function(e,t){var n,r=[],i=function(e,t){var n=v(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!x.isPlainObject(e))x.each(e,(function(){i(this.name,this.value)}));else for(n in e)Mt(n,e[n],t,i);return r.join("&")},x.fn.extend({serialize:function(){return x.param(this.serializeArray())},serializeArray:function(){return this.map((function(){var e=x.prop(this,"elements");return e?x.makeArray(e):this})).filter((function(){var e=this.type;return this.name&&!x(this).is(":disabled")&&Lt.test(this.nodeName)&&!Dt.test(e)&&(this.checked||!xe.test(e))})).map((function(e,t){var n=x(this).val();return null==n?null:Array.isArray(n)?x.map(n,(function(e){return{name:t.name,value:e.replace(jt,"\r\n")}})):{name:t.name,value:n.replace(jt,"\r\n")}})).get()}});var qt=/%20/g,Ft=/#.*$/,Ht=/([?&])_=[^&]*/,Ut=/^(.*?):[ \t]*([^\r\n]*)$/gm,Wt=/^(?:GET|HEAD)$/,Bt=/^\/\//,zt={},Vt={},$t="*/".concat("*"),Qt=_.createElement("a");function Kt(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match($)||[];if(v(n))for(;r=o[i++];)"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function Gt(e,t,n,r){var i={},o=e===Vt;function s(a){var c;return i[a]=!0,x.each(e[a]||[],(function(e,a){var l=a(t,n,r);return"string"!=typeof l||o||i[l]?o?!(c=l):void 0:(t.dataTypes.unshift(l),s(l),!1)})),c}return s(t.dataTypes[0])||!i["*"]&&s("*")}function Yt(e,t){var n,r,i=x.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&x.extend(!0,e,r),e}Qt.href=St.href,x.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:St.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(St.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":$t,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":x.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?Yt(Yt(e,x.ajaxSettings),t):Yt(x.ajaxSettings,e)},ajaxPrefilter:Kt(zt),ajaxTransport:Kt(Vt),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var r,i,o,s,a,c,l,u,h,d,p=x.ajaxSetup({},t),f=p.context||p,g=p.context&&(f.nodeType||f.jquery)?x(f):x.event,m=x.Deferred(),v=x.Callbacks("once memory"),y=p.statusCode||{},b={},w={},C="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(l){if(!s)for(s={};t=Ut.exec(o);)s[t[1].toLowerCase()+" "]=(s[t[1].toLowerCase()+" "]||[]).concat(t[2]);t=s[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return l?o:null},setRequestHeader:function(e,t){return null==l&&(e=w[e.toLowerCase()]=w[e.toLowerCase()]||e,b[e]=t),this},overrideMimeType:function(e){return null==l&&(p.mimeType=e),this},statusCode:function(e){var t;if(e)if(l)T.always(e[T.status]);else for(t in e)y[t]=[y[t],e[t]];return this},abort:function(e){var t=e||C;return r&&r.abort(t),E(0,t),this}};if(m.promise(T),p.url=((e||p.url||St.href)+"").replace(Bt,St.protocol+"//"),p.type=t.method||t.type||p.method||p.type,p.dataTypes=(p.dataType||"*").toLowerCase().match($)||[""],null==p.crossDomain){c=_.createElement("a");try{c.href=p.url,c.href=c.href,p.crossDomain=Qt.protocol+"//"+Qt.host!=c.protocol+"//"+c.host}catch(e){p.crossDomain=!0}}if(p.data&&p.processData&&"string"!=typeof p.data&&(p.data=x.param(p.data,p.traditional)),Gt(zt,p,t,T),l)return T;for(h in(u=x.event&&p.global)&&0==x.active++&&x.event.trigger("ajaxStart"),p.type=p.type.toUpperCase(),p.hasContent=!Wt.test(p.type),i=p.url.replace(Ft,""),p.hasContent?p.data&&p.processData&&0===(p.contentType||"").indexOf("application/x-www-form-urlencoded")&&(p.data=p.data.replace(qt,"+")):(d=p.url.slice(i.length),p.data&&(p.processData||"string"==typeof p.data)&&(i+=(Nt.test(i)?"&":"?")+p.data,delete p.data),!1===p.cache&&(i=i.replace(Ht,"$1"),d=(Nt.test(i)?"&":"?")+"_="+Ot.guid+++d),p.url=i+d),p.ifModified&&(x.lastModified[i]&&T.setRequestHeader("If-Modified-Since",x.lastModified[i]),x.etag[i]&&T.setRequestHeader("If-None-Match",x.etag[i])),(p.data&&p.hasContent&&!1!==p.contentType||t.contentType)&&T.setRequestHeader("Content-Type",p.contentType),T.setRequestHeader("Accept",p.dataTypes[0]&&p.accepts[p.dataTypes[0]]?p.accepts[p.dataTypes[0]]+("*"!==p.dataTypes[0]?", "+$t+"; q=0.01":""):p.accepts["*"]),p.headers)T.setRequestHeader(h,p.headers[h]);if(p.beforeSend&&(!1===p.beforeSend.call(f,T,p)||l))return T.abort();if(C="abort",v.add(p.complete),T.done(p.success),T.fail(p.error),r=Gt(Vt,p,t,T)){if(T.readyState=1,u&&g.trigger("ajaxSend",[T,p]),l)return T;p.async&&p.timeout>0&&(a=n.setTimeout((function(){T.abort("timeout")}),p.timeout));try{l=!1,r.send(b,E)}catch(e){if(l)throw e;E(-1,e)}}else E(-1,"No Transport");function E(e,t,s,c){var h,d,_,b,w,C=t;l||(l=!0,a&&n.clearTimeout(a),r=void 0,o=c||"",T.readyState=e>0?4:0,h=e>=200&&e<300||304===e,s&&(b=function(e,t,n){for(var r,i,o,s,a=e.contents,c=e.dataTypes;"*"===c[0];)c.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in a)if(a[i]&&a[i].test(r)){c.unshift(i);break}if(c[0]in n)o=c[0];else{for(i in n){if(!c[0]||e.converters[i+" "+c[0]]){o=i;break}s||(s=i)}o=o||s}if(o)return o!==c[0]&&c.unshift(o),n[o]}(p,T,s)),!h&&x.inArray("script",p.dataTypes)>-1&&x.inArray("json",p.dataTypes)<0&&(p.converters["text script"]=function(){}),b=function(e,t,n,r){var i,o,s,a,c,l={},u=e.dataTypes.slice();if(u[1])for(s in e.converters)l[s.toLowerCase()]=e.converters[s];for(o=u.shift();o;)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!c&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),c=o,o=u.shift())if("*"===o)o=c;else if("*"!==c&&c!==o){if(!(s=l[c+" "+o]||l["* "+o]))for(i in l)if((a=i.split(" "))[1]===o&&(s=l[c+" "+a[0]]||l["* "+a[0]])){!0===s?s=l[i]:!0!==l[i]&&(o=a[0],u.unshift(a[1]));break}if(!0!==s)if(s&&e.throws)t=s(t);else try{t=s(t)}catch(e){return{state:"parsererror",error:s?e:"No conversion from "+c+" to "+o}}}return{state:"success",data:t}}(p,b,T,h),h?(p.ifModified&&((w=T.getResponseHeader("Last-Modified"))&&(x.lastModified[i]=w),(w=T.getResponseHeader("etag"))&&(x.etag[i]=w)),204===e||"HEAD"===p.type?C="nocontent":304===e?C="notmodified":(C=b.state,d=b.data,h=!(_=b.error))):(_=C,!e&&C||(C="error",e<0&&(e=0))),T.status=e,T.statusText=(t||C)+"",h?m.resolveWith(f,[d,C,T]):m.rejectWith(f,[T,C,_]),T.statusCode(y),y=void 0,u&&g.trigger(h?"ajaxSuccess":"ajaxError",[T,p,h?d:_]),v.fireWith(f,[T,C]),u&&(g.trigger("ajaxComplete",[T,p]),--x.active||x.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return x.get(e,t,n,"json")},getScript:function(e,t){return x.get(e,void 0,t,"script")}}),x.each(["get","post"],(function(e,t){x[t]=function(e,n,r,i){return v(n)&&(i=i||r,r=n,n=void 0),x.ajax(x.extend({url:e,type:t,dataType:i,data:n,success:r},x.isPlainObject(e)&&e))}})),x.ajaxPrefilter((function(e){var t;for(t in e.headers)"content-type"===t.toLowerCase()&&(e.contentType=e.headers[t]||"")})),x._evalUrl=function(e,t,n){return x.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){x.globalEval(e,t,n)}})},x.fn.extend({wrapAll:function(e){var t;return this[0]&&(v(e)&&(e=e.call(this[0])),t=x(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map((function(){for(var e=this;e.firstElementChild;)e=e.firstElementChild;return e})).append(this)),this},wrapInner:function(e){return v(e)?this.each((function(t){x(this).wrapInner(e.call(this,t))})):this.each((function(){var t=x(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)}))},wrap:function(e){var t=v(e);return this.each((function(n){x(this).wrapAll(t?e.call(this,n):e)}))},unwrap:function(e){return this.parent(e).not("body").each((function(){x(this).replaceWith(this.childNodes)})),this}}),x.expr.pseudos.hidden=function(e){return!x.expr.pseudos.visible(e)},x.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},x.ajaxSettings.xhr=function(){try{return new n.XMLHttpRequest}catch(e){}};var Jt={0:200,1223:204},Xt=x.ajaxSettings.xhr();m.cors=!!Xt&&"withCredentials"in Xt,m.ajax=Xt=!!Xt,x.ajaxTransport((function(e){var t,r;if(m.cors||Xt&&!e.crossDomain)return{send:function(i,o){var s,a=e.xhr();if(a.open(e.type,e.url,e.async,e.username,e.password),e.xhrFields)for(s in e.xhrFields)a[s]=e.xhrFields[s];for(s in e.mimeType&&a.overrideMimeType&&a.overrideMimeType(e.mimeType),e.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest"),i)a.setRequestHeader(s,i[s]);t=function(e){return function(){t&&(t=r=a.onload=a.onerror=a.onabort=a.ontimeout=a.onreadystatechange=null,"abort"===e?a.abort():"error"===e?"number"!=typeof a.status?o(0,"error"):o(a.status,a.statusText):o(Jt[a.status]||a.status,a.statusText,"text"!==(a.responseType||"text")||"string"!=typeof a.responseText?{binary:a.response}:{text:a.responseText},a.getAllResponseHeaders()))}},a.onload=t(),r=a.onerror=a.ontimeout=t("error"),void 0!==a.onabort?a.onabort=r:a.onreadystatechange=function(){4===a.readyState&&n.setTimeout((function(){t&&r()}))},t=t("abort");try{a.send(e.hasContent&&e.data||null)}catch(e){if(t)throw e}},abort:function(){t&&t()}}})),x.ajaxPrefilter((function(e){e.crossDomain&&(e.contents.script=!1)})),x.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return x.globalEval(e),e}}}),x.ajaxPrefilter("script",(function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")})),x.ajaxTransport("script",(function(e){var t,n;if(e.crossDomain||e.scriptAttrs)return{send:function(r,i){t=x("<script>").attr(e.scriptAttrs||{}).prop({charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&i("error"===e.type?404:200,e.type)}),_.head.appendChild(t[0])},abort:function(){n&&n()}}}));var Zt,en=[],tn=/(=)\?(?=&|$)|\?\?/;x.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=en.pop()||x.expando+"_"+Ot.guid++;return this[e]=!0,e}}),x.ajaxPrefilter("json jsonp",(function(e,t,r){var i,o,s,a=!1!==e.jsonp&&(tn.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&tn.test(e.data)&&"data");if(a||"jsonp"===e.dataTypes[0])return i=e.jsonpCallback=v(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(tn,"$1"+i):!1!==e.jsonp&&(e.url+=(Nt.test(e.url)?"&":"?")+e.jsonp+"="+i),e.converters["script json"]=function(){return s||x.error(i+" was not called"),s[0]},e.dataTypes[0]="json",o=n[i],n[i]=function(){s=arguments},r.always((function(){void 0===o?x(n).removeProp(i):n[i]=o,e[i]&&(e.jsonpCallback=t.jsonpCallback,en.push(i)),s&&v(o)&&o(s[0]),s=o=void 0})),"script"})),m.createHTMLDocument=((Zt=_.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===Zt.childNodes.length),x.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(m.createHTMLDocument?((r=(t=_.implementation.createHTMLDocument("")).createElement("base")).href=_.location.href,t.head.appendChild(r)):t=_),o=!n&&[],(i=F.exec(e))?[t.createElement(i[1])]:(i=Pe([e],t,o),o&&o.length&&x(o).remove(),x.merge([],i.childNodes)));var r,i,o},x.fn.load=function(e,t,n){var r,i,o,s=this,a=e.indexOf(" ");return a>-1&&(r=xt(e.slice(a)),e=e.slice(0,a)),v(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),s.length>0&&x.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done((function(e){o=arguments,s.html(r?x("<div>").append(x.parseHTML(e)).find(r):e)})).always(n&&function(e,t){s.each((function(){n.apply(this,o||[e.responseText,t,e])}))}),this},x.expr.pseudos.animated=function(e){return x.grep(x.timers,(function(t){return e===t.elem})).length},x.offset={setOffset:function(e,t,n){var r,i,o,s,a,c,l=x.css(e,"position"),u=x(e),h={};"static"===l&&(e.style.position="relative"),a=u.offset(),o=x.css(e,"top"),c=x.css(e,"left"),("absolute"===l||"fixed"===l)&&(o+c).indexOf("auto")>-1?(s=(r=u.position()).top,i=r.left):(s=parseFloat(o)||0,i=parseFloat(c)||0),v(t)&&(t=t.call(e,n,x.extend({},a))),null!=t.top&&(h.top=t.top-a.top+s),null!=t.left&&(h.left=t.left-a.left+i),"using"in t?t.using.call(e,h):u.css(h)}},x.fn.extend({offset:function(e){if(arguments.length)return void 0===e?this:this.each((function(t){x.offset.setOffset(this,e,t)}));var t,n,r=this[0];return r?r.getClientRects().length?(t=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:t.top+n.pageYOffset,left:t.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===x.css(r,"position"))t=r.getBoundingClientRect();else{for(t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;e&&(e===n.body||e===n.documentElement)&&"static"===x.css(e,"position");)e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=x(e).offset()).top+=x.css(e,"borderTopWidth",!0),i.left+=x.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-x.css(r,"marginTop",!0),left:t.left-i.left-x.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map((function(){for(var e=this.offsetParent;e&&"static"===x.css(e,"position");)e=e.offsetParent;return e||fe}))}}),x.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},(function(e,t){var n="pageYOffset"===t;x.fn[e]=function(r){return Z(this,(function(e,r,i){var o;if(y(e)?o=e:9===e.nodeType&&(o=e.defaultView),void 0===i)return o?o[t]:e[r];o?o.scrollTo(n?o.pageXOffset:i,n?i:o.pageYOffset):e[r]=i}),e,r,arguments.length)}})),x.each(["top","left"],(function(e,t){x.cssHooks[t]=Ze(m.pixelPosition,(function(e,n){if(n)return n=Xe(e,t),Qe.test(n)?x(e).position()[t]+"px":n}))})),x.each({Height:"height",Width:"width"},(function(e,t){x.each({padding:"inner"+e,content:t,"":"outer"+e},(function(n,r){x.fn[r]=function(i,o){var s=arguments.length&&(n||"boolean"!=typeof i),a=n||(!0===i||!0===o?"margin":"border");return Z(this,(function(t,n,i){var o;return y(t)?0===r.indexOf("outer")?t["inner"+e]:t.document.documentElement["client"+e]:9===t.nodeType?(o=t.documentElement,Math.max(t.body["scroll"+e],o["scroll"+e],t.body["offset"+e],o["offset"+e],o["client"+e])):void 0===i?x.css(t,n,a):x.style(t,n,i,a)}),t,s?i:void 0,s)}}))})),x.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],(function(e,t){x.fn[t]=function(e){return this.on(t,e)}})),x.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},hover:function(e,t){return this.on("mouseenter",e).on("mouseleave",t||e)}}),x.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),(function(e,t){x.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}));var nn=/^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;x.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),v(e))return r=a.call(arguments,2),(i=function(){return e.apply(t||this,r.concat(a.call(arguments)))}).guid=e.guid=e.guid||x.guid++,i},x.holdReady=function(e){e?x.readyWait++:x.ready(!0)},x.isArray=Array.isArray,x.parseJSON=JSON.parse,x.nodeName=k,x.isFunction=v,x.isWindow=y,x.camelCase=re,x.type=C,x.now=Date.now,x.isNumeric=function(e){var t=x.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},x.trim=function(e){return null==e?"":(e+"").replace(nn,"$1")},void 0===(r=function(){return x}.apply(t,[]))||(e.exports=r);var rn=n.jQuery,on=n.$;return x.noConflict=function(e){return n.$===x&&(n.$=on),e&&n.jQuery===x&&(n.jQuery=rn),x},void 0===i&&(n.jQuery=n.$=x),x}))},function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return s})),n.d(t,"c",(function(){return o}));var r=n(0);class i{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class o{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new r.a;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(r)return null;throw e}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e))try{this.getOrInitializeService({instanceIdentifier:"[DEFAULT]"})}catch(e){}for(const[e,t]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(e){}}}}clearInstance(e="[DEFAULT]"){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...e.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return null!=this.component}isInitialized(e="[DEFAULT]"){return this.instances.has(e)}getOptions(e="[DEFAULT]"){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[e,t]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(e)&&t.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const r of n)try{r(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(r=e,"[DEFAULT]"===r?void 0:r),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(e){}var r;return n||null}normalizeInstanceIdentifier(e="[DEFAULT]"){return this.component?this.component.multipleInstances?e:"[DEFAULT]":e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class s{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new o(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}},function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return l})),n.d(t,"c",(function(){return u})),n.d(t,"d",(function(){return h}));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r=[];var i;!function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"}(i||(i={}));const o={debug:i.DEBUG,verbose:i.VERBOSE,info:i.INFO,warn:i.WARN,error:i.ERROR,silent:i.SILENT},s=i.INFO,a={[i.DEBUG]:"log",[i.VERBOSE]:"log",[i.INFO]:"info",[i.WARN]:"warn",[i.ERROR]:"error"},c=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),i=a[t];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[i](`[${r}]  ${e.name}:`,...n)};class l{constructor(e){this.name=e,this._logLevel=s,this._logHandler=c,this._userLogHandler=null,r.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in i))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?o[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,i.DEBUG,...e),this._logHandler(this,i.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,i.VERBOSE,...e),this._logHandler(this,i.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,i.INFO,...e),this._logHandler(this,i.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,i.WARN,...e),this._logHandler(this,i.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,i.ERROR,...e),this._logHandler(this,i.ERROR,...e)}}function u(e){r.forEach(t=>{t.setLogLevel(e)})}function h(e,t){for(const n of r){let r=null;t&&t.level&&(r=o[t.level]),n.userLogHandler=null===e?null:(t,n,...o)=>{const s=o.map(e=>{if(null==e)return null;if("string"==typeof e)return e;if("number"==typeof e||"boolean"==typeof e)return e.toString();if(e instanceof Error)return e.message;try{return JSON.stringify(e)}catch(e){return null}}).filter(e=>e).join(" ");n>=(null!=r?r:t.logLevel)&&e({level:i[n].toLowerCase(),message:s,args:o,type:t.name})}}}},function(e,t){var n,r,i=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}function a(e){if(n===setTimeout)return setTimeout(e,0);if((n===o||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:o}catch(e){n=o}try{r="function"==typeof clearTimeout?clearTimeout:s}catch(e){r=s}}();var c,l=[],u=!1,h=-1;function d(){u&&c&&(u=!1,c.length?l=c.concat(l):h=-1,l.length&&p())}function p(){if(!u){var e=a(d);u=!0;for(var t=l.length;t;){for(c=l,l=[];++h<t;)c&&c[h].run();h=-1,t=l.length}c=null,u=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===s||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function f(e,t){this.fun=e,this.array=t}function g(){}i.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];l.push(new f(e,t)),1!==l.length||u||a(p)},f.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=g,i.addListener=g,i.once=g,i.off=g,i.removeListener=g,i.removeAllListeners=g,i.emit=g,i.prependListener=g,i.prependOnceListener=g,i.listeners=function(e){return[]},i.binding=function(e){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},function(e,t){e.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){var r;
/*!
 * jQuery JavaScript Library v3.6.0
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2021-03-02T17:08Z
 */!function(t,n){"use strict";"object"==typeof e.exports?e.exports=t.document?n(t,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return n(e)}:n(t)}("undefined"!=typeof window?window:this,(function(n,i){"use strict";var o=[],s=Object.getPrototypeOf,a=o.slice,c=o.flat?function(e){return o.flat.call(e)}:function(e){return o.concat.apply([],e)},l=o.push,u=o.indexOf,h={},d=h.toString,p=h.hasOwnProperty,f=p.toString,g=f.call(Object),m={},v=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType&&"function"!=typeof e.item},y=function(e){return null!=e&&e===e.window},_=n.document,b={type:!0,src:!0,nonce:!0,noModule:!0};function w(e,t,n){var r,i,o=(n=n||_).createElement("script");if(o.text=e,t)for(r in b)(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i);n.head.appendChild(o).parentNode.removeChild(o)}function C(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?h[d.call(e)]||"object":typeof e}var T=function(e,t){return new T.fn.init(e,t)};function x(e){var t=!!e&&"length"in e&&e.length,n=C(e);return!v(e)&&!y(e)&&("array"===n||0===t||"number"==typeof t&&t>0&&t-1 in e)}T.fn=T.prototype={jquery:"3.6.0",constructor:T,length:0,toArray:function(){return a.call(this)},get:function(e){return null==e?a.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=T.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return T.each(this,e)},map:function(e){return this.pushStack(T.map(this,(function(t,n){return e.call(t,n,t)})))},slice:function(){return this.pushStack(a.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(T.grep(this,(function(e,t){return(t+1)%2})))},odd:function(){return this.pushStack(T.grep(this,(function(e,t){return t%2})))},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(n>=0&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:l,sort:o.sort,splice:o.splice},T.extend=T.fn.extend=function(){var e,t,n,r,i,o,s=arguments[0]||{},a=1,c=arguments.length,l=!1;for("boolean"==typeof s&&(l=s,s=arguments[a]||{},a++),"object"==typeof s||v(s)||(s={}),a===c&&(s=this,a--);a<c;a++)if(null!=(e=arguments[a]))for(t in e)r=e[t],"__proto__"!==t&&s!==r&&(l&&r&&(T.isPlainObject(r)||(i=Array.isArray(r)))?(n=s[t],o=i&&!Array.isArray(n)?[]:i||T.isPlainObject(n)?n:{},i=!1,s[t]=T.extend(l,o,r)):void 0!==r&&(s[t]=r));return s},T.extend({expando:"jQuery"+("3.6.0"+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==d.call(e)||(t=s(e))&&("function"!=typeof(n=p.call(t,"constructor")&&t.constructor)||f.call(n)!==g))},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t,n){w(e,{nonce:t&&t.nonce},n)},each:function(e,t){var n,r=0;if(x(e))for(n=e.length;r<n&&!1!==t.call(e[r],r,e[r]);r++);else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},makeArray:function(e,t){var n=t||[];return null!=e&&(x(Object(e))?T.merge(n,"string"==typeof e?[e]:e):l.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:u.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,s=!n;i<o;i++)!t(e[i],i)!==s&&r.push(e[i]);return r},map:function(e,t,n){var r,i,o=0,s=[];if(x(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&s.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&s.push(i);return c(s)},guid:1,support:m}),"function"==typeof Symbol&&(T.fn[Symbol.iterator]=o[Symbol.iterator]),T.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),(function(e,t){h["[object "+t+"]"]=t.toLowerCase()}));var E=
/*!
 * Sizzle CSS Selector Engine v2.3.6
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://js.foundation/
 *
 * Date: 2021-02-16
 */
function(e){var t,n,r,i,o,s,a,c,l,u,h,d,p,f,g,m,v,y,_,b="sizzle"+1*new Date,w=e.document,C=0,T=0,x=ce(),E=ce(),k=ce(),I=ce(),S=function(e,t){return e===t&&(h=!0),0},O={}.hasOwnProperty,N=[],P=N.pop,A=N.push,R=N.push,j=N.slice,D=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},L="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",q="(?:\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",F="\\["+M+"*("+q+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+q+"))|)"+M+"*\\]",H=":("+q+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+F+")*)|.*)\\)|)",U=new RegExp(M+"+","g"),W=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),B=new RegExp("^"+M+"*,"+M+"*"),z=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),V=new RegExp(M+"|>"),$=new RegExp(H),Q=new RegExp("^"+q+"$"),K={ID:new RegExp("^#("+q+")"),CLASS:new RegExp("^\\.("+q+")"),TAG:new RegExp("^("+q+"|[*])"),ATTR:new RegExp("^"+F),PSEUDO:new RegExp("^"+H),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+L+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},G=/HTML$/i,Y=/^(?:input|select|textarea|button)$/i,J=/^h\d$/i,X=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee=/[+~]/,te=new RegExp("\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\([^\\r\\n\\f])","g"),ne=function(e,t){var n="0x"+e.slice(1)-65536;return t||(n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,1023&n|56320))},re=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ie=function(e,t){return t?"\0"===e?"�":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},oe=function(){d()},se=be((function(e){return!0===e.disabled&&"fieldset"===e.nodeName.toLowerCase()}),{dir:"parentNode",next:"legend"});try{R.apply(N=j.call(w.childNodes),w.childNodes),N[w.childNodes.length].nodeType}catch(e){R={apply:N.length?function(e,t){A.apply(e,j.call(t))}:function(e,t){for(var n=e.length,r=0;e[n++]=t[r++];);e.length=n-1}}}function ae(e,t,r,i){var o,a,l,u,h,f,v,y=t&&t.ownerDocument,w=t?t.nodeType:9;if(r=r||[],"string"!=typeof e||!e||1!==w&&9!==w&&11!==w)return r;if(!i&&(d(t),t=t||p,g)){if(11!==w&&(h=Z.exec(e)))if(o=h[1]){if(9===w){if(!(l=t.getElementById(o)))return r;if(l.id===o)return r.push(l),r}else if(y&&(l=y.getElementById(o))&&_(t,l)&&l.id===o)return r.push(l),r}else{if(h[2])return R.apply(r,t.getElementsByTagName(e)),r;if((o=h[3])&&n.getElementsByClassName&&t.getElementsByClassName)return R.apply(r,t.getElementsByClassName(o)),r}if(n.qsa&&!I[e+" "]&&(!m||!m.test(e))&&(1!==w||"object"!==t.nodeName.toLowerCase())){if(v=e,y=t,1===w&&(V.test(e)||z.test(e))){for((y=ee.test(e)&&ve(t.parentNode)||t)===t&&n.scope||((u=t.getAttribute("id"))?u=u.replace(re,ie):t.setAttribute("id",u=b)),a=(f=s(e)).length;a--;)f[a]=(u?"#"+u:":scope")+" "+_e(f[a]);v=f.join(",")}try{return R.apply(r,y.querySelectorAll(v)),r}catch(t){I(e,!0)}finally{u===b&&t.removeAttribute("id")}}}return c(e.replace(W,"$1"),t,r,i)}function ce(){var e=[];return function t(n,i){return e.push(n+" ")>r.cacheLength&&delete t[e.shift()],t[n+" "]=i}}function le(e){return e[b]=!0,e}function ue(e){var t=p.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function he(e,t){for(var n=e.split("|"),i=n.length;i--;)r.attrHandle[n[i]]=t}function de(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)for(;n=n.nextSibling;)if(n===t)return-1;return e?1:-1}function pe(e){return function(t){return"input"===t.nodeName.toLowerCase()&&t.type===e}}function fe(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function ge(e){return function(t){return"form"in t?t.parentNode&&!1===t.disabled?"label"in t?"label"in t.parentNode?t.parentNode.disabled===e:t.disabled===e:t.isDisabled===e||t.isDisabled!==!e&&se(t)===e:t.disabled===e:"label"in t&&t.disabled===e}}function me(e){return le((function(t){return t=+t,le((function(n,r){for(var i,o=e([],n.length,t),s=o.length;s--;)n[i=o[s]]&&(n[i]=!(r[i]=n[i]))}))}))}function ve(e){return e&&void 0!==e.getElementsByTagName&&e}for(t in n=ae.support={},o=ae.isXML=function(e){var t=e&&e.namespaceURI,n=e&&(e.ownerDocument||e).documentElement;return!G.test(t||n&&n.nodeName||"HTML")},d=ae.setDocument=function(e){var t,i,s=e?e.ownerDocument||e:w;return s!=p&&9===s.nodeType&&s.documentElement?(f=(p=s).documentElement,g=!o(p),w!=p&&(i=p.defaultView)&&i.top!==i&&(i.addEventListener?i.addEventListener("unload",oe,!1):i.attachEvent&&i.attachEvent("onunload",oe)),n.scope=ue((function(e){return f.appendChild(e).appendChild(p.createElement("div")),void 0!==e.querySelectorAll&&!e.querySelectorAll(":scope fieldset div").length})),n.attributes=ue((function(e){return e.className="i",!e.getAttribute("className")})),n.getElementsByTagName=ue((function(e){return e.appendChild(p.createComment("")),!e.getElementsByTagName("*").length})),n.getElementsByClassName=X.test(p.getElementsByClassName),n.getById=ue((function(e){return f.appendChild(e).id=b,!p.getElementsByName||!p.getElementsByName(b).length})),n.getById?(r.filter.ID=function(e){var t=e.replace(te,ne);return function(e){return e.getAttribute("id")===t}},r.find.ID=function(e,t){if(void 0!==t.getElementById&&g){var n=t.getElementById(e);return n?[n]:[]}}):(r.filter.ID=function(e){var t=e.replace(te,ne);return function(e){var n=void 0!==e.getAttributeNode&&e.getAttributeNode("id");return n&&n.value===t}},r.find.ID=function(e,t){if(void 0!==t.getElementById&&g){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];for(i=t.getElementsByName(e),r=0;o=i[r++];)if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),r.find.TAG=n.getElementsByTagName?function(e,t){return void 0!==t.getElementsByTagName?t.getElementsByTagName(e):n.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){for(;n=o[i++];)1===n.nodeType&&r.push(n);return r}return o},r.find.CLASS=n.getElementsByClassName&&function(e,t){if(void 0!==t.getElementsByClassName&&g)return t.getElementsByClassName(e)},v=[],m=[],(n.qsa=X.test(p.querySelectorAll))&&(ue((function(e){var t;f.appendChild(e).innerHTML="<a id='"+b+"'></a><select id='"+b+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&m.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||m.push("\\["+M+"*(?:value|"+L+")"),e.querySelectorAll("[id~="+b+"-]").length||m.push("~="),(t=p.createElement("input")).setAttribute("name",""),e.appendChild(t),e.querySelectorAll("[name='']").length||m.push("\\["+M+"*name"+M+"*="+M+"*(?:''|\"\")"),e.querySelectorAll(":checked").length||m.push(":checked"),e.querySelectorAll("a#"+b+"+*").length||m.push(".#.+[+~]"),e.querySelectorAll("\\\f"),m.push("[\\r\\n\\f]")})),ue((function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=p.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&m.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&m.push(":enabled",":disabled"),f.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&m.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),m.push(",.*:")}))),(n.matchesSelector=X.test(y=f.matches||f.webkitMatchesSelector||f.mozMatchesSelector||f.oMatchesSelector||f.msMatchesSelector))&&ue((function(e){n.disconnectedMatch=y.call(e,"*"),y.call(e,"[s!='']:x"),v.push("!=",H)})),m=m.length&&new RegExp(m.join("|")),v=v.length&&new RegExp(v.join("|")),t=X.test(f.compareDocumentPosition),_=t||X.test(f.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)for(;t=t.parentNode;)if(t===e)return!0;return!1},S=t?function(e,t){if(e===t)return h=!0,0;var r=!e.compareDocumentPosition-!t.compareDocumentPosition;return r||(1&(r=(e.ownerDocument||e)==(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!n.sortDetached&&t.compareDocumentPosition(e)===r?e==p||e.ownerDocument==w&&_(w,e)?-1:t==p||t.ownerDocument==w&&_(w,t)?1:u?D(u,e)-D(u,t):0:4&r?-1:1)}:function(e,t){if(e===t)return h=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,s=[e],a=[t];if(!i||!o)return e==p?-1:t==p?1:i?-1:o?1:u?D(u,e)-D(u,t):0;if(i===o)return de(e,t);for(n=e;n=n.parentNode;)s.unshift(n);for(n=t;n=n.parentNode;)a.unshift(n);for(;s[r]===a[r];)r++;return r?de(s[r],a[r]):s[r]==w?-1:a[r]==w?1:0},p):p},ae.matches=function(e,t){return ae(e,null,null,t)},ae.matchesSelector=function(e,t){if(d(e),n.matchesSelector&&g&&!I[t+" "]&&(!v||!v.test(t))&&(!m||!m.test(t)))try{var r=y.call(e,t);if(r||n.disconnectedMatch||e.document&&11!==e.document.nodeType)return r}catch(e){I(t,!0)}return ae(t,p,null,[e]).length>0},ae.contains=function(e,t){return(e.ownerDocument||e)!=p&&d(e),_(e,t)},ae.attr=function(e,t){(e.ownerDocument||e)!=p&&d(e);var i=r.attrHandle[t.toLowerCase()],o=i&&O.call(r.attrHandle,t.toLowerCase())?i(e,t,!g):void 0;return void 0!==o?o:n.attributes||!g?e.getAttribute(t):(o=e.getAttributeNode(t))&&o.specified?o.value:null},ae.escape=function(e){return(e+"").replace(re,ie)},ae.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},ae.uniqueSort=function(e){var t,r=[],i=0,o=0;if(h=!n.detectDuplicates,u=!n.sortStable&&e.slice(0),e.sort(S),h){for(;t=e[o++];)t===e[o]&&(i=r.push(o));for(;i--;)e.splice(r[i],1)}return u=null,e},i=ae.getText=function(e){var t,n="",r=0,o=e.nodeType;if(o){if(1===o||9===o||11===o){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=i(e)}else if(3===o||4===o)return e.nodeValue}else for(;t=e[r++];)n+=i(t);return n},(r=ae.selectors={cacheLength:50,createPseudo:le,match:K,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(te,ne),e[3]=(e[3]||e[4]||e[5]||"").replace(te,ne),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||ae.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&ae.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return K.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&$.test(n)&&(t=s(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(te,ne).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=x[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&x(e,(function(e){return t.test("string"==typeof e.className&&e.className||void 0!==e.getAttribute&&e.getAttribute("class")||"")}))},ATTR:function(e,t,n){return function(r){var i=ae.attr(r,e);return null==i?"!="===t:!t||(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i.replace(U," ")+" ").indexOf(n)>-1:"|="===t&&(i===n||i.slice(0,n.length+1)===n+"-"))}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),s="last"!==e.slice(-4),a="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,c){var l,u,h,d,p,f,g=o!==s?"nextSibling":"previousSibling",m=t.parentNode,v=a&&t.nodeName.toLowerCase(),y=!c&&!a,_=!1;if(m){if(o){for(;g;){for(d=t;d=d[g];)if(a?d.nodeName.toLowerCase()===v:1===d.nodeType)return!1;f=g="only"===e&&!f&&"nextSibling"}return!0}if(f=[s?m.firstChild:m.lastChild],s&&y){for(_=(p=(l=(u=(h=(d=m)[b]||(d[b]={}))[d.uniqueID]||(h[d.uniqueID]={}))[e]||[])[0]===C&&l[1])&&l[2],d=p&&m.childNodes[p];d=++p&&d&&d[g]||(_=p=0)||f.pop();)if(1===d.nodeType&&++_&&d===t){u[e]=[C,p,_];break}}else if(y&&(_=p=(l=(u=(h=(d=t)[b]||(d[b]={}))[d.uniqueID]||(h[d.uniqueID]={}))[e]||[])[0]===C&&l[1]),!1===_)for(;(d=++p&&d&&d[g]||(_=p=0)||f.pop())&&((a?d.nodeName.toLowerCase()!==v:1!==d.nodeType)||!++_||(y&&((u=(h=d[b]||(d[b]={}))[d.uniqueID]||(h[d.uniqueID]={}))[e]=[C,_]),d!==t)););return(_-=i)===r||_%r==0&&_/r>=0}}},PSEUDO:function(e,t){var n,i=r.pseudos[e]||r.setFilters[e.toLowerCase()]||ae.error("unsupported pseudo: "+e);return i[b]?i(t):i.length>1?(n=[e,e,"",t],r.setFilters.hasOwnProperty(e.toLowerCase())?le((function(e,n){for(var r,o=i(e,t),s=o.length;s--;)e[r=D(e,o[s])]=!(n[r]=o[s])})):function(e){return i(e,0,n)}):i}},pseudos:{not:le((function(e){var t=[],n=[],r=a(e.replace(W,"$1"));return r[b]?le((function(e,t,n,i){for(var o,s=r(e,null,i,[]),a=e.length;a--;)(o=s[a])&&(e[a]=!(t[a]=o))})):function(e,i,o){return t[0]=e,r(t,null,o,n),t[0]=null,!n.pop()}})),has:le((function(e){return function(t){return ae(e,t).length>0}})),contains:le((function(e){return e=e.replace(te,ne),function(t){return(t.textContent||i(t)).indexOf(e)>-1}})),lang:le((function(e){return Q.test(e||"")||ae.error("unsupported lang: "+e),e=e.replace(te,ne).toLowerCase(),function(t){var n;do{if(n=g?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return(n=n.toLowerCase())===e||0===n.indexOf(e+"-")}while((t=t.parentNode)&&1===t.nodeType);return!1}})),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===f},focus:function(e){return e===p.activeElement&&(!p.hasFocus||p.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:ge(!1),disabled:ge(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!r.pseudos.empty(e)},header:function(e){return J.test(e.nodeName)},input:function(e){return Y.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:me((function(){return[0]})),last:me((function(e,t){return[t-1]})),eq:me((function(e,t,n){return[n<0?n+t:n]})),even:me((function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e})),odd:me((function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e})),lt:me((function(e,t,n){for(var r=n<0?n+t:n>t?t:n;--r>=0;)e.push(r);return e})),gt:me((function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e}))}}).pseudos.nth=r.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})r.pseudos[t]=pe(t);for(t in{submit:!0,reset:!0})r.pseudos[t]=fe(t);function ye(){}function _e(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function be(e,t,n){var r=t.dir,i=t.next,o=i||r,s=n&&"parentNode"===o,a=T++;return t.first?function(t,n,i){for(;t=t[r];)if(1===t.nodeType||s)return e(t,n,i);return!1}:function(t,n,c){var l,u,h,d=[C,a];if(c){for(;t=t[r];)if((1===t.nodeType||s)&&e(t,n,c))return!0}else for(;t=t[r];)if(1===t.nodeType||s)if(u=(h=t[b]||(t[b]={}))[t.uniqueID]||(h[t.uniqueID]={}),i&&i===t.nodeName.toLowerCase())t=t[r]||t;else{if((l=u[o])&&l[0]===C&&l[1]===a)return d[2]=l[2];if(u[o]=d,d[2]=e(t,n,c))return!0}return!1}}function we(e){return e.length>1?function(t,n,r){for(var i=e.length;i--;)if(!e[i](t,n,r))return!1;return!0}:e[0]}function Ce(e,t,n,r,i){for(var o,s=[],a=0,c=e.length,l=null!=t;a<c;a++)(o=e[a])&&(n&&!n(o,r,i)||(s.push(o),l&&t.push(a)));return s}function Te(e,t,n,r,i,o){return r&&!r[b]&&(r=Te(r)),i&&!i[b]&&(i=Te(i,o)),le((function(o,s,a,c){var l,u,h,d=[],p=[],f=s.length,g=o||function(e,t,n){for(var r=0,i=t.length;r<i;r++)ae(e,t[r],n);return n}(t||"*",a.nodeType?[a]:a,[]),m=!e||!o&&t?g:Ce(g,d,e,a,c),v=n?i||(o?e:f||r)?[]:s:m;if(n&&n(m,v,a,c),r)for(l=Ce(v,p),r(l,[],a,c),u=l.length;u--;)(h=l[u])&&(v[p[u]]=!(m[p[u]]=h));if(o){if(i||e){if(i){for(l=[],u=v.length;u--;)(h=v[u])&&l.push(m[u]=h);i(null,v=[],l,c)}for(u=v.length;u--;)(h=v[u])&&(l=i?D(o,h):d[u])>-1&&(o[l]=!(s[l]=h))}}else v=Ce(v===s?v.splice(f,v.length):v),i?i(null,s,v,c):R.apply(s,v)}))}function xe(e){for(var t,n,i,o=e.length,s=r.relative[e[0].type],a=s||r.relative[" "],c=s?1:0,u=be((function(e){return e===t}),a,!0),h=be((function(e){return D(t,e)>-1}),a,!0),d=[function(e,n,r){var i=!s&&(r||n!==l)||((t=n).nodeType?u(e,n,r):h(e,n,r));return t=null,i}];c<o;c++)if(n=r.relative[e[c].type])d=[be(we(d),n)];else{if((n=r.filter[e[c].type].apply(null,e[c].matches))[b]){for(i=++c;i<o&&!r.relative[e[i].type];i++);return Te(c>1&&we(d),c>1&&_e(e.slice(0,c-1).concat({value:" "===e[c-2].type?"*":""})).replace(W,"$1"),n,c<i&&xe(e.slice(c,i)),i<o&&xe(e=e.slice(i)),i<o&&_e(e))}d.push(n)}return we(d)}return ye.prototype=r.filters=r.pseudos,r.setFilters=new ye,s=ae.tokenize=function(e,t){var n,i,o,s,a,c,l,u=E[e+" "];if(u)return t?0:u.slice(0);for(a=e,c=[],l=r.preFilter;a;){for(s in n&&!(i=B.exec(a))||(i&&(a=a.slice(i[0].length)||a),c.push(o=[])),n=!1,(i=z.exec(a))&&(n=i.shift(),o.push({value:n,type:i[0].replace(W," ")}),a=a.slice(n.length)),r.filter)!(i=K[s].exec(a))||l[s]&&!(i=l[s](i))||(n=i.shift(),o.push({value:n,type:s,matches:i}),a=a.slice(n.length));if(!n)break}return t?a.length:a?ae.error(e):E(e,c).slice(0)},a=ae.compile=function(e,t){var n,i=[],o=[],a=k[e+" "];if(!a){for(t||(t=s(e)),n=t.length;n--;)(a=xe(t[n]))[b]?i.push(a):o.push(a);(a=k(e,function(e,t){var n=t.length>0,i=e.length>0,o=function(o,s,a,c,u){var h,f,m,v=0,y="0",_=o&&[],b=[],w=l,T=o||i&&r.find.TAG("*",u),x=C+=null==w?1:Math.random()||.1,E=T.length;for(u&&(l=s==p||s||u);y!==E&&null!=(h=T[y]);y++){if(i&&h){for(f=0,s||h.ownerDocument==p||(d(h),a=!g);m=e[f++];)if(m(h,s||p,a)){c.push(h);break}u&&(C=x)}n&&((h=!m&&h)&&v--,o&&_.push(h))}if(v+=y,n&&y!==v){for(f=0;m=t[f++];)m(_,b,s,a);if(o){if(v>0)for(;y--;)_[y]||b[y]||(b[y]=P.call(c));b=Ce(b)}R.apply(c,b),u&&!o&&b.length>0&&v+t.length>1&&ae.uniqueSort(c)}return u&&(C=x,l=w),_};return n?le(o):o}(o,i))).selector=e}return a},c=ae.select=function(e,t,n,i){var o,c,l,u,h,d="function"==typeof e&&e,p=!i&&s(e=d.selector||e);if(n=n||[],1===p.length){if((c=p[0]=p[0].slice(0)).length>2&&"ID"===(l=c[0]).type&&9===t.nodeType&&g&&r.relative[c[1].type]){if(!(t=(r.find.ID(l.matches[0].replace(te,ne),t)||[])[0]))return n;d&&(t=t.parentNode),e=e.slice(c.shift().value.length)}for(o=K.needsContext.test(e)?0:c.length;o--&&(l=c[o],!r.relative[u=l.type]);)if((h=r.find[u])&&(i=h(l.matches[0].replace(te,ne),ee.test(c[0].type)&&ve(t.parentNode)||t))){if(c.splice(o,1),!(e=i.length&&_e(c)))return R.apply(n,i),n;break}}return(d||a(e,p))(i,t,!g,n,!t||ee.test(e)&&ve(t.parentNode)||t),n},n.sortStable=b.split("").sort(S).join("")===b,n.detectDuplicates=!!h,d(),n.sortDetached=ue((function(e){return 1&e.compareDocumentPosition(p.createElement("fieldset"))})),ue((function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")}))||he("type|href|height|width",(function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)})),n.attributes&&ue((function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")}))||he("value",(function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue})),ue((function(e){return null==e.getAttribute("disabled")}))||he(L,(function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null})),ae}(n);T.find=E,T.expr=E.selectors,T.expr[":"]=T.expr.pseudos,T.uniqueSort=T.unique=E.uniqueSort,T.text=E.getText,T.isXMLDoc=E.isXML,T.contains=E.contains,T.escapeSelector=E.escape;var k=function(e,t,n){for(var r=[],i=void 0!==n;(e=e[t])&&9!==e.nodeType;)if(1===e.nodeType){if(i&&T(e).is(n))break;r.push(e)}return r},I=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},S=T.expr.match.needsContext;function O(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var N=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function P(e,t,n){return v(t)?T.grep(e,(function(e,r){return!!t.call(e,r,e)!==n})):t.nodeType?T.grep(e,(function(e){return e===t!==n})):"string"!=typeof t?T.grep(e,(function(e){return u.call(t,e)>-1!==n})):T.filter(t,e,n)}T.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?T.find.matchesSelector(r,e)?[r]:[]:T.find.matches(e,T.grep(t,(function(e){return 1===e.nodeType})))},T.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(T(e).filter((function(){for(t=0;t<r;t++)if(T.contains(i[t],this))return!0})));for(n=this.pushStack([]),t=0;t<r;t++)T.find(e,i[t],n);return r>1?T.uniqueSort(n):n},filter:function(e){return this.pushStack(P(this,e||[],!1))},not:function(e){return this.pushStack(P(this,e||[],!0))},is:function(e){return!!P(this,"string"==typeof e&&S.test(e)?T(e):e||[],!1).length}});var A,R=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(T.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||A,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&e.length>=3?[null,e,null]:R.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof T?t[0]:t,T.merge(this,T.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:_,!0)),N.test(r[1])&&T.isPlainObject(t))for(r in t)v(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(i=_.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):v(e)?void 0!==n.ready?n.ready(e):e(T):T.makeArray(e,this)}).prototype=T.fn,A=T(_);var j=/^(?:parents|prev(?:Until|All))/,D={children:!0,contents:!0,next:!0,prev:!0};function L(e,t){for(;(e=e[t])&&1!==e.nodeType;);return e}T.fn.extend({has:function(e){var t=T(e,this),n=t.length;return this.filter((function(){for(var e=0;e<n;e++)if(T.contains(this,t[e]))return!0}))},closest:function(e,t){var n,r=0,i=this.length,o=[],s="string"!=typeof e&&T(e);if(!S.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(s?s.index(n)>-1:1===n.nodeType&&T.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(o.length>1?T.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?u.call(T(e),this[0]):u.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(T.uniqueSort(T.merge(this.get(),T(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),T.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return k(e,"parentNode")},parentsUntil:function(e,t,n){return k(e,"parentNode",n)},next:function(e){return L(e,"nextSibling")},prev:function(e){return L(e,"previousSibling")},nextAll:function(e){return k(e,"nextSibling")},prevAll:function(e){return k(e,"previousSibling")},nextUntil:function(e,t,n){return k(e,"nextSibling",n)},prevUntil:function(e,t,n){return k(e,"previousSibling",n)},siblings:function(e){return I((e.parentNode||{}).firstChild,e)},children:function(e){return I(e.firstChild)},contents:function(e){return null!=e.contentDocument&&s(e.contentDocument)?e.contentDocument:(O(e,"template")&&(e=e.content||e),T.merge([],e.childNodes))}},(function(e,t){T.fn[e]=function(n,r){var i=T.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=T.filter(r,i)),this.length>1&&(D[e]||T.uniqueSort(i),j.test(e)&&i.reverse()),this.pushStack(i)}}));var M=/[^\x20\t\r\n\f]+/g;function q(e){return e}function F(e){throw e}function H(e,t,n,r){var i;try{e&&v(i=e.promise)?i.call(e).done(t).fail(n):e&&v(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}T.Callbacks=function(e){e="string"==typeof e?function(e){var t={};return T.each(e.match(M)||[],(function(e,n){t[n]=!0})),t}(e):T.extend({},e);var t,n,r,i,o=[],s=[],a=-1,c=function(){for(i=i||e.once,r=t=!0;s.length;a=-1)for(n=s.shift();++a<o.length;)!1===o[a].apply(n[0],n[1])&&e.stopOnFalse&&(a=o.length,n=!1);e.memory||(n=!1),t=!1,i&&(o=n?[]:"")},l={add:function(){return o&&(n&&!t&&(a=o.length-1,s.push(n)),function t(n){T.each(n,(function(n,r){v(r)?e.unique&&l.has(r)||o.push(r):r&&r.length&&"string"!==C(r)&&t(r)}))}(arguments),n&&!t&&c()),this},remove:function(){return T.each(arguments,(function(e,t){for(var n;(n=T.inArray(t,o,n))>-1;)o.splice(n,1),n<=a&&a--})),this},has:function(e){return e?T.inArray(e,o)>-1:o.length>0},empty:function(){return o&&(o=[]),this},disable:function(){return i=s=[],o=n="",this},disabled:function(){return!o},lock:function(){return i=s=[],n||t||(o=n=""),this},locked:function(){return!!i},fireWith:function(e,n){return i||(n=[e,(n=n||[]).slice?n.slice():n],s.push(n),t||c()),this},fire:function(){return l.fireWith(this,arguments),this},fired:function(){return!!r}};return l},T.extend({Deferred:function(e){var t=[["notify","progress",T.Callbacks("memory"),T.Callbacks("memory"),2],["resolve","done",T.Callbacks("once memory"),T.Callbacks("once memory"),0,"resolved"],["reject","fail",T.Callbacks("once memory"),T.Callbacks("once memory"),1,"rejected"]],r="pending",i={state:function(){return r},always:function(){return o.done(arguments).fail(arguments),this},catch:function(e){return i.then(null,e)},pipe:function(){var e=arguments;return T.Deferred((function(n){T.each(t,(function(t,r){var i=v(e[r[4]])&&e[r[4]];o[r[1]]((function(){var e=i&&i.apply(this,arguments);e&&v(e.promise)?e.promise().progress(n.notify).done(n.resolve).fail(n.reject):n[r[0]+"With"](this,i?[e]:arguments)}))})),e=null})).promise()},then:function(e,r,i){var o=0;function s(e,t,r,i){return function(){var a=this,c=arguments,l=function(){var n,l;if(!(e<o)){if((n=r.apply(a,c))===t.promise())throw new TypeError("Thenable self-resolution");l=n&&("object"==typeof n||"function"==typeof n)&&n.then,v(l)?i?l.call(n,s(o,t,q,i),s(o,t,F,i)):(o++,l.call(n,s(o,t,q,i),s(o,t,F,i),s(o,t,q,t.notifyWith))):(r!==q&&(a=void 0,c=[n]),(i||t.resolveWith)(a,c))}},u=i?l:function(){try{l()}catch(n){T.Deferred.exceptionHook&&T.Deferred.exceptionHook(n,u.stackTrace),e+1>=o&&(r!==F&&(a=void 0,c=[n]),t.rejectWith(a,c))}};e?u():(T.Deferred.getStackHook&&(u.stackTrace=T.Deferred.getStackHook()),n.setTimeout(u))}}return T.Deferred((function(n){t[0][3].add(s(0,n,v(i)?i:q,n.notifyWith)),t[1][3].add(s(0,n,v(e)?e:q)),t[2][3].add(s(0,n,v(r)?r:F))})).promise()},promise:function(e){return null!=e?T.extend(e,i):i}},o={};return T.each(t,(function(e,n){var s=n[2],a=n[5];i[n[1]]=s.add,a&&s.add((function(){r=a}),t[3-e][2].disable,t[3-e][3].disable,t[0][2].lock,t[0][3].lock),s.add(n[3].fire),o[n[0]]=function(){return o[n[0]+"With"](this===o?void 0:this,arguments),this},o[n[0]+"With"]=s.fireWith})),i.promise(o),e&&e.call(o,o),o},when:function(e){var t=arguments.length,n=t,r=Array(n),i=a.call(arguments),o=T.Deferred(),s=function(e){return function(n){r[e]=this,i[e]=arguments.length>1?a.call(arguments):n,--t||o.resolveWith(r,i)}};if(t<=1&&(H(e,o.done(s(n)).resolve,o.reject,!t),"pending"===o.state()||v(i[n]&&i[n].then)))return o.then();for(;n--;)H(i[n],s(n),o.reject);return o.promise()}});var U=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;T.Deferred.exceptionHook=function(e,t){n.console&&n.console.warn&&e&&U.test(e.name)&&n.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},T.readyException=function(e){n.setTimeout((function(){throw e}))};var W=T.Deferred();function B(){_.removeEventListener("DOMContentLoaded",B),n.removeEventListener("load",B),T.ready()}T.fn.ready=function(e){return W.then(e).catch((function(e){T.readyException(e)})),this},T.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--T.readyWait:T.isReady)||(T.isReady=!0,!0!==e&&--T.readyWait>0||W.resolveWith(_,[T]))}}),T.ready.then=W.then,"complete"===_.readyState||"loading"!==_.readyState&&!_.documentElement.doScroll?n.setTimeout(T.ready):(_.addEventListener("DOMContentLoaded",B),n.addEventListener("load",B));var z=function(e,t,n,r,i,o,s){var a=0,c=e.length,l=null==n;if("object"===C(n))for(a in i=!0,n)z(e,t,a,n[a],!0,o,s);else if(void 0!==r&&(i=!0,v(r)||(s=!0),l&&(s?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(T(e),n)})),t))for(;a<c;a++)t(e[a],n,s?r:r.call(e[a],a,t(e[a],n)));return i?e:l?t.call(e):c?t(e[0],n):o},V=/^-ms-/,$=/-([a-z])/g;function Q(e,t){return t.toUpperCase()}function K(e){return e.replace(V,"ms-").replace($,Q)}var G=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function Y(){this.expando=T.expando+Y.uid++}Y.uid=1,Y.prototype={cache:function(e){var t=e[this.expando];return t||(t={},G(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[K(t)]=n;else for(r in t)i[K(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][K(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(K):(t=K(t))in r?[t]:t.match(M)||[]).length;for(;n--;)delete r[t[n]]}(void 0===t||T.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!T.isEmptyObject(t)}};var J=new Y,X=new Y,Z=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,ee=/[A-Z]/g;function te(e,t,n){var r;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(ee,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n=function(e){return"true"===e||"false"!==e&&("null"===e?null:e===+e+""?+e:Z.test(e)?JSON.parse(e):e)}(n)}catch(e){}X.set(e,t,n)}else n=void 0;return n}T.extend({hasData:function(e){return X.hasData(e)||J.hasData(e)},data:function(e,t,n){return X.access(e,t,n)},removeData:function(e,t){X.remove(e,t)},_data:function(e,t,n){return J.access(e,t,n)},_removeData:function(e,t){J.remove(e,t)}}),T.fn.extend({data:function(e,t){var n,r,i,o=this[0],s=o&&o.attributes;if(void 0===e){if(this.length&&(i=X.get(o),1===o.nodeType&&!J.get(o,"hasDataAttrs"))){for(n=s.length;n--;)s[n]&&0===(r=s[n].name).indexOf("data-")&&(r=K(r.slice(5)),te(o,r,i[r]));J.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof e?this.each((function(){X.set(this,e)})):z(this,(function(t){var n;if(o&&void 0===t)return void 0!==(n=X.get(o,e))||void 0!==(n=te(o,e))?n:void 0;this.each((function(){X.set(this,e,t)}))}),null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each((function(){X.remove(this,e)}))}}),T.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=J.get(e,t),n&&(!r||Array.isArray(n)?r=J.access(e,t,T.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=T.queue(e,t),r=n.length,i=n.shift(),o=T._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,(function(){T.dequeue(e,t)}),o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return J.get(e,n)||J.access(e,n,{empty:T.Callbacks("once memory").add((function(){J.remove(e,[t+"queue",n])}))})}}),T.fn.extend({queue:function(e,t){var n=2;return"string"!=typeof e&&(t=e,e="fx",n--),arguments.length<n?T.queue(this[0],e):void 0===t?this:this.each((function(){var n=T.queue(this,e,t);T._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&T.dequeue(this,e)}))},dequeue:function(e){return this.each((function(){T.dequeue(this,e)}))},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=T.Deferred(),o=this,s=this.length,a=function(){--r||i.resolveWith(o,[o])};for("string"!=typeof e&&(t=e,e=void 0),e=e||"fx";s--;)(n=J.get(o[s],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(a));return a(),i.promise(t)}});var ne=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,re=new RegExp("^(?:([+-])=|)("+ne+")([a-z%]*)$","i"),ie=["Top","Right","Bottom","Left"],oe=_.documentElement,se=function(e){return T.contains(e.ownerDocument,e)},ae={composed:!0};oe.getRootNode&&(se=function(e){return T.contains(e.ownerDocument,e)||e.getRootNode(ae)===e.ownerDocument});var ce=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&se(e)&&"none"===T.css(e,"display")};function le(e,t,n,r){var i,o,s=20,a=r?function(){return r.cur()}:function(){return T.css(e,t,"")},c=a(),l=n&&n[3]||(T.cssNumber[t]?"":"px"),u=e.nodeType&&(T.cssNumber[t]||"px"!==l&&+c)&&re.exec(T.css(e,t));if(u&&u[3]!==l){for(c/=2,l=l||u[3],u=+c||1;s--;)T.style(e,t,u+l),(1-o)*(1-(o=a()/c||.5))<=0&&(s=0),u/=o;u*=2,T.style(e,t,u+l),n=n||[]}return n&&(u=+u||+c||0,i=n[1]?u+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=u,r.end=i)),i}var ue={};function he(e){var t,n=e.ownerDocument,r=e.nodeName,i=ue[r];return i||(t=n.body.appendChild(n.createElement(r)),i=T.css(t,"display"),t.parentNode.removeChild(t),"none"===i&&(i="block"),ue[r]=i,i)}function de(e,t){for(var n,r,i=[],o=0,s=e.length;o<s;o++)(r=e[o]).style&&(n=r.style.display,t?("none"===n&&(i[o]=J.get(r,"display")||null,i[o]||(r.style.display="")),""===r.style.display&&ce(r)&&(i[o]=he(r))):"none"!==n&&(i[o]="none",J.set(r,"display",n)));for(o=0;o<s;o++)null!=i[o]&&(e[o].style.display=i[o]);return e}T.fn.extend({show:function(){return de(this,!0)},hide:function(){return de(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each((function(){ce(this)?T(this).show():T(this).hide()}))}});var pe,fe,ge=/^(?:checkbox|radio)$/i,me=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,ve=/^$|^module$|\/(?:java|ecma)script/i;pe=_.createDocumentFragment().appendChild(_.createElement("div")),(fe=_.createElement("input")).setAttribute("type","radio"),fe.setAttribute("checked","checked"),fe.setAttribute("name","t"),pe.appendChild(fe),m.checkClone=pe.cloneNode(!0).cloneNode(!0).lastChild.checked,pe.innerHTML="<textarea>x</textarea>",m.noCloneChecked=!!pe.cloneNode(!0).lastChild.defaultValue,pe.innerHTML="<option></option>",m.option=!!pe.lastChild;var ye={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function _e(e,t){var n;return n=void 0!==e.getElementsByTagName?e.getElementsByTagName(t||"*"):void 0!==e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&O(e,t)?T.merge([e],n):n}function be(e,t){for(var n=0,r=e.length;n<r;n++)J.set(e[n],"globalEval",!t||J.get(t[n],"globalEval"))}ye.tbody=ye.tfoot=ye.colgroup=ye.caption=ye.thead,ye.th=ye.td,m.option||(ye.optgroup=ye.option=[1,"<select multiple='multiple'>","</select>"]);var we=/<|&#?\w+;/;function Ce(e,t,n,r,i){for(var o,s,a,c,l,u,h=t.createDocumentFragment(),d=[],p=0,f=e.length;p<f;p++)if((o=e[p])||0===o)if("object"===C(o))T.merge(d,o.nodeType?[o]:o);else if(we.test(o)){for(s=s||h.appendChild(t.createElement("div")),a=(me.exec(o)||["",""])[1].toLowerCase(),c=ye[a]||ye._default,s.innerHTML=c[1]+T.htmlPrefilter(o)+c[2],u=c[0];u--;)s=s.lastChild;T.merge(d,s.childNodes),(s=h.firstChild).textContent=""}else d.push(t.createTextNode(o));for(h.textContent="",p=0;o=d[p++];)if(r&&T.inArray(o,r)>-1)i&&i.push(o);else if(l=se(o),s=_e(h.appendChild(o),"script"),l&&be(s),n)for(u=0;o=s[u++];)ve.test(o.type||"")&&n.push(o);return h}var Te=/^([^.]*)(?:\.(.+)|)/;function xe(){return!0}function Ee(){return!1}function ke(e,t){return e===function(){try{return _.activeElement}catch(e){}}()==("focus"===t)}function Ie(e,t,n,r,i,o){var s,a;if("object"==typeof t){for(a in"string"!=typeof n&&(r=r||n,n=void 0),t)Ie(e,a,n,r,t[a],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=Ee;else if(!i)return e;return 1===o&&(s=i,(i=function(e){return T().off(e),s.apply(this,arguments)}).guid=s.guid||(s.guid=T.guid++)),e.each((function(){T.event.add(this,t,i,r,n)}))}function Se(e,t,n){n?(J.set(e,t,!1),T.event.add(e,t,{namespace:!1,handler:function(e){var r,i,o=J.get(this,t);if(1&e.isTrigger&&this[t]){if(o.length)(T.event.special[t]||{}).delegateType&&e.stopPropagation();else if(o=a.call(arguments),J.set(this,t,o),r=n(this,t),this[t](),o!==(i=J.get(this,t))||r?J.set(this,t,!1):i={},o!==i)return e.stopImmediatePropagation(),e.preventDefault(),i&&i.value}else o.length&&(J.set(this,t,{value:T.event.trigger(T.extend(o[0],T.Event.prototype),o.slice(1),this)}),e.stopImmediatePropagation())}})):void 0===J.get(e,t)&&T.event.add(e,t,xe)}T.event={global:{},add:function(e,t,n,r,i){var o,s,a,c,l,u,h,d,p,f,g,m=J.get(e);if(G(e))for(n.handler&&(n=(o=n).handler,i=o.selector),i&&T.find.matchesSelector(oe,i),n.guid||(n.guid=T.guid++),(c=m.events)||(c=m.events=Object.create(null)),(s=m.handle)||(s=m.handle=function(t){return void 0!==T&&T.event.triggered!==t.type?T.event.dispatch.apply(e,arguments):void 0}),l=(t=(t||"").match(M)||[""]).length;l--;)p=g=(a=Te.exec(t[l])||[])[1],f=(a[2]||"").split(".").sort(),p&&(h=T.event.special[p]||{},p=(i?h.delegateType:h.bindType)||p,h=T.event.special[p]||{},u=T.extend({type:p,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&T.expr.match.needsContext.test(i),namespace:f.join(".")},o),(d=c[p])||((d=c[p]=[]).delegateCount=0,h.setup&&!1!==h.setup.call(e,r,f,s)||e.addEventListener&&e.addEventListener(p,s)),h.add&&(h.add.call(e,u),u.handler.guid||(u.handler.guid=n.guid)),i?d.splice(d.delegateCount++,0,u):d.push(u),T.event.global[p]=!0)},remove:function(e,t,n,r,i){var o,s,a,c,l,u,h,d,p,f,g,m=J.hasData(e)&&J.get(e);if(m&&(c=m.events)){for(l=(t=(t||"").match(M)||[""]).length;l--;)if(p=g=(a=Te.exec(t[l])||[])[1],f=(a[2]||"").split(".").sort(),p){for(h=T.event.special[p]||{},d=c[p=(r?h.delegateType:h.bindType)||p]||[],a=a[2]&&new RegExp("(^|\\.)"+f.join("\\.(?:.*\\.|)")+"(\\.|$)"),s=o=d.length;o--;)u=d[o],!i&&g!==u.origType||n&&n.guid!==u.guid||a&&!a.test(u.namespace)||r&&r!==u.selector&&("**"!==r||!u.selector)||(d.splice(o,1),u.selector&&d.delegateCount--,h.remove&&h.remove.call(e,u));s&&!d.length&&(h.teardown&&!1!==h.teardown.call(e,f,m.handle)||T.removeEvent(e,p,m.handle),delete c[p])}else for(p in c)T.event.remove(e,p+t[l],n,r,!0);T.isEmptyObject(c)&&J.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,s,a=new Array(arguments.length),c=T.event.fix(e),l=(J.get(this,"events")||Object.create(null))[c.type]||[],u=T.event.special[c.type]||{};for(a[0]=c,t=1;t<arguments.length;t++)a[t]=arguments[t];if(c.delegateTarget=this,!u.preDispatch||!1!==u.preDispatch.call(this,c)){for(s=T.event.handlers.call(this,c,l),t=0;(i=s[t++])&&!c.isPropagationStopped();)for(c.currentTarget=i.elem,n=0;(o=i.handlers[n++])&&!c.isImmediatePropagationStopped();)c.rnamespace&&!1!==o.namespace&&!c.rnamespace.test(o.namespace)||(c.handleObj=o,c.data=o.data,void 0!==(r=((T.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,a))&&!1===(c.result=r)&&(c.preventDefault(),c.stopPropagation()));return u.postDispatch&&u.postDispatch.call(this,c),c.result}},handlers:function(e,t){var n,r,i,o,s,a=[],c=t.delegateCount,l=e.target;if(c&&l.nodeType&&!("click"===e.type&&e.button>=1))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],s={},n=0;n<c;n++)void 0===s[i=(r=t[n]).selector+" "]&&(s[i]=r.needsContext?T(i,this).index(l)>-1:T.find(i,this,null,[l]).length),s[i]&&o.push(r);o.length&&a.push({elem:l,handlers:o})}return l=this,c<t.length&&a.push({elem:l,handlers:t.slice(c)}),a},addProp:function(e,t){Object.defineProperty(T.Event.prototype,e,{enumerable:!0,configurable:!0,get:v(t)?function(){if(this.originalEvent)return t(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[e]},set:function(t){Object.defineProperty(this,e,{enumerable:!0,configurable:!0,writable:!0,value:t})}})},fix:function(e){return e[T.expando]?e:new T.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return ge.test(t.type)&&t.click&&O(t,"input")&&Se(t,"click",xe),!1},trigger:function(e){var t=this||e;return ge.test(t.type)&&t.click&&O(t,"input")&&Se(t,"click"),!0},_default:function(e){var t=e.target;return ge.test(t.type)&&t.click&&O(t,"input")&&J.get(t,"click")||O(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},T.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},T.Event=function(e,t){if(!(this instanceof T.Event))return new T.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?xe:Ee,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&T.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[T.expando]=!0},T.Event.prototype={constructor:T.Event,isDefaultPrevented:Ee,isPropagationStopped:Ee,isImmediatePropagationStopped:Ee,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=xe,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=xe,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=xe,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},T.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},T.event.addProp),T.each({focus:"focusin",blur:"focusout"},(function(e,t){T.event.special[e]={setup:function(){return Se(this,e,ke),!1},trigger:function(){return Se(this,e),!0},_default:function(){return!0},delegateType:t}})),T.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},(function(e,t){T.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return i&&(i===r||T.contains(r,i))||(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}})),T.fn.extend({on:function(e,t,n,r){return Ie(this,e,t,n,r)},one:function(e,t,n,r){return Ie(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,T(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=Ee),this.each((function(){T.event.remove(this,e,n,t)}))}});var Oe=/<script|<style|<link/i,Ne=/checked\s*(?:[^=]|=\s*.checked.)/i,Pe=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Ae(e,t){return O(e,"table")&&O(11!==t.nodeType?t:t.firstChild,"tr")&&T(e).children("tbody")[0]||e}function Re(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function je(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function De(e,t){var n,r,i,o,s,a;if(1===t.nodeType){if(J.hasData(e)&&(a=J.get(e).events))for(i in J.remove(t,"handle events"),a)for(n=0,r=a[i].length;n<r;n++)T.event.add(t,i,a[i][n]);X.hasData(e)&&(o=X.access(e),s=T.extend({},o),X.set(t,s))}}function Le(e,t){var n=t.nodeName.toLowerCase();"input"===n&&ge.test(e.type)?t.checked=e.checked:"input"!==n&&"textarea"!==n||(t.defaultValue=e.defaultValue)}function Me(e,t,n,r){t=c(t);var i,o,s,a,l,u,h=0,d=e.length,p=d-1,f=t[0],g=v(f);if(g||d>1&&"string"==typeof f&&!m.checkClone&&Ne.test(f))return e.each((function(i){var o=e.eq(i);g&&(t[0]=f.call(this,i,o.html())),Me(o,t,n,r)}));if(d&&(o=(i=Ce(t,e[0].ownerDocument,!1,e,r)).firstChild,1===i.childNodes.length&&(i=o),o||r)){for(a=(s=T.map(_e(i,"script"),Re)).length;h<d;h++)l=i,h!==p&&(l=T.clone(l,!0,!0),a&&T.merge(s,_e(l,"script"))),n.call(e[h],l,h);if(a)for(u=s[s.length-1].ownerDocument,T.map(s,je),h=0;h<a;h++)l=s[h],ve.test(l.type||"")&&!J.access(l,"globalEval")&&T.contains(u,l)&&(l.src&&"module"!==(l.type||"").toLowerCase()?T._evalUrl&&!l.noModule&&T._evalUrl(l.src,{nonce:l.nonce||l.getAttribute("nonce")},u):w(l.textContent.replace(Pe,""),l,u))}return e}function qe(e,t,n){for(var r,i=t?T.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||T.cleanData(_e(r)),r.parentNode&&(n&&se(r)&&be(_e(r,"script")),r.parentNode.removeChild(r));return e}T.extend({htmlPrefilter:function(e){return e},clone:function(e,t,n){var r,i,o,s,a=e.cloneNode(!0),c=se(e);if(!(m.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||T.isXMLDoc(e)))for(s=_e(a),r=0,i=(o=_e(e)).length;r<i;r++)Le(o[r],s[r]);if(t)if(n)for(o=o||_e(e),s=s||_e(a),r=0,i=o.length;r<i;r++)De(o[r],s[r]);else De(e,a);return(s=_e(a,"script")).length>0&&be(s,!c&&_e(e,"script")),a},cleanData:function(e){for(var t,n,r,i=T.event.special,o=0;void 0!==(n=e[o]);o++)if(G(n)){if(t=n[J.expando]){if(t.events)for(r in t.events)i[r]?T.event.remove(n,r):T.removeEvent(n,r,t.handle);n[J.expando]=void 0}n[X.expando]&&(n[X.expando]=void 0)}}}),T.fn.extend({detach:function(e){return qe(this,e,!0)},remove:function(e){return qe(this,e)},text:function(e){return z(this,(function(e){return void 0===e?T.text(this):this.empty().each((function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)}))}),null,e,arguments.length)},append:function(){return Me(this,arguments,(function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||Ae(this,e).appendChild(e)}))},prepend:function(){return Me(this,arguments,(function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Ae(this,e);t.insertBefore(e,t.firstChild)}}))},before:function(){return Me(this,arguments,(function(e){this.parentNode&&this.parentNode.insertBefore(e,this)}))},after:function(){return Me(this,arguments,(function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)}))},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(T.cleanData(_e(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map((function(){return T.clone(this,e,t)}))},html:function(e){return z(this,(function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!Oe.test(e)&&!ye[(me.exec(e)||["",""])[1].toLowerCase()]){e=T.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(T.cleanData(_e(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)}),null,e,arguments.length)},replaceWith:function(){var e=[];return Me(this,arguments,(function(t){var n=this.parentNode;T.inArray(this,e)<0&&(T.cleanData(_e(this)),n&&n.replaceChild(t,this))}),e)}}),T.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},(function(e,t){T.fn[e]=function(e){for(var n,r=[],i=T(e),o=i.length-1,s=0;s<=o;s++)n=s===o?this:this.clone(!0),T(i[s])[t](n),l.apply(r,n.get());return this.pushStack(r)}}));var Fe=new RegExp("^("+ne+")(?!px)[a-z%]+$","i"),He=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=n),t.getComputedStyle(e)},Ue=function(e,t,n){var r,i,o={};for(i in t)o[i]=e.style[i],e.style[i]=t[i];for(i in r=n.call(e),t)e.style[i]=o[i];return r},We=new RegExp(ie.join("|"),"i");function Be(e,t,n){var r,i,o,s,a=e.style;return(n=n||He(e))&&(""!==(s=n.getPropertyValue(t)||n[t])||se(e)||(s=T.style(e,t)),!m.pixelBoxStyles()&&Fe.test(s)&&We.test(t)&&(r=a.width,i=a.minWidth,o=a.maxWidth,a.minWidth=a.maxWidth=a.width=s,s=n.width,a.width=r,a.minWidth=i,a.maxWidth=o)),void 0!==s?s+"":s}function ze(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function e(){if(u){l.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",u.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",oe.appendChild(l).appendChild(u);var e=n.getComputedStyle(u);r="1%"!==e.top,c=12===t(e.marginLeft),u.style.right="60%",s=36===t(e.right),i=36===t(e.width),u.style.position="absolute",o=12===t(u.offsetWidth/3),oe.removeChild(l),u=null}}function t(e){return Math.round(parseFloat(e))}var r,i,o,s,a,c,l=_.createElement("div"),u=_.createElement("div");u.style&&(u.style.backgroundClip="content-box",u.cloneNode(!0).style.backgroundClip="",m.clearCloneStyle="content-box"===u.style.backgroundClip,T.extend(m,{boxSizingReliable:function(){return e(),i},pixelBoxStyles:function(){return e(),s},pixelPosition:function(){return e(),r},reliableMarginLeft:function(){return e(),c},scrollboxSize:function(){return e(),o},reliableTrDimensions:function(){var e,t,r,i;return null==a&&(e=_.createElement("table"),t=_.createElement("tr"),r=_.createElement("div"),e.style.cssText="position:absolute;left:-11111px;border-collapse:separate",t.style.cssText="border:1px solid",t.style.height="1px",r.style.height="9px",r.style.display="block",oe.appendChild(e).appendChild(t).appendChild(r),i=n.getComputedStyle(t),a=parseInt(i.height,10)+parseInt(i.borderTopWidth,10)+parseInt(i.borderBottomWidth,10)===t.offsetHeight,oe.removeChild(e)),a}}))}();var Ve=["Webkit","Moz","ms"],$e=_.createElement("div").style,Qe={};function Ke(e){return T.cssProps[e]||Qe[e]||(e in $e?e:Qe[e]=function(e){for(var t=e[0].toUpperCase()+e.slice(1),n=Ve.length;n--;)if((e=Ve[n]+t)in $e)return e}(e)||e)}var Ge=/^(none|table(?!-c[ea]).+)/,Ye=/^--/,Je={position:"absolute",visibility:"hidden",display:"block"},Xe={letterSpacing:"0",fontWeight:"400"};function Ze(e,t,n){var r=re.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function et(e,t,n,r,i,o){var s="width"===t?1:0,a=0,c=0;if(n===(r?"border":"content"))return 0;for(;s<4;s+=2)"margin"===n&&(c+=T.css(e,n+ie[s],!0,i)),r?("content"===n&&(c-=T.css(e,"padding"+ie[s],!0,i)),"margin"!==n&&(c-=T.css(e,"border"+ie[s]+"Width",!0,i))):(c+=T.css(e,"padding"+ie[s],!0,i),"padding"!==n?c+=T.css(e,"border"+ie[s]+"Width",!0,i):a+=T.css(e,"border"+ie[s]+"Width",!0,i));return!r&&o>=0&&(c+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-c-a-.5))||0),c}function tt(e,t,n){var r=He(e),i=(!m.boxSizingReliable()||n)&&"border-box"===T.css(e,"boxSizing",!1,r),o=i,s=Be(e,t,r),a="offset"+t[0].toUpperCase()+t.slice(1);if(Fe.test(s)){if(!n)return s;s="auto"}return(!m.boxSizingReliable()&&i||!m.reliableTrDimensions()&&O(e,"tr")||"auto"===s||!parseFloat(s)&&"inline"===T.css(e,"display",!1,r))&&e.getClientRects().length&&(i="border-box"===T.css(e,"boxSizing",!1,r),(o=a in e)&&(s=e[a])),(s=parseFloat(s)||0)+et(e,t,n||(i?"border":"content"),o,r,s)+"px"}function nt(e,t,n,r,i){return new nt.prototype.init(e,t,n,r,i)}T.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Be(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,s,a=K(t),c=Ye.test(t),l=e.style;if(c||(t=Ke(a)),s=T.cssHooks[t]||T.cssHooks[a],void 0===n)return s&&"get"in s&&void 0!==(i=s.get(e,!1,r))?i:l[t];"string"==(o=typeof n)&&(i=re.exec(n))&&i[1]&&(n=le(e,t,i),o="number"),null!=n&&n==n&&("number"!==o||c||(n+=i&&i[3]||(T.cssNumber[a]?"":"px")),m.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),s&&"set"in s&&void 0===(n=s.set(e,n,r))||(c?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,s,a=K(t);return Ye.test(t)||(t=Ke(a)),(s=T.cssHooks[t]||T.cssHooks[a])&&"get"in s&&(i=s.get(e,!0,n)),void 0===i&&(i=Be(e,t,r)),"normal"===i&&t in Xe&&(i=Xe[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),T.each(["height","width"],(function(e,t){T.cssHooks[t]={get:function(e,n,r){if(n)return!Ge.test(T.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?tt(e,t,r):Ue(e,Je,(function(){return tt(e,t,r)}))},set:function(e,n,r){var i,o=He(e),s=!m.scrollboxSize()&&"absolute"===o.position,a=(s||r)&&"border-box"===T.css(e,"boxSizing",!1,o),c=r?et(e,t,r,a,o):0;return a&&s&&(c-=Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-parseFloat(o[t])-et(e,t,"border",!1,o)-.5)),c&&(i=re.exec(n))&&"px"!==(i[3]||"px")&&(e.style[t]=n,n=T.css(e,t)),Ze(0,n,c)}}})),T.cssHooks.marginLeft=ze(m.reliableMarginLeft,(function(e,t){if(t)return(parseFloat(Be(e,"marginLeft"))||e.getBoundingClientRect().left-Ue(e,{marginLeft:0},(function(){return e.getBoundingClientRect().left})))+"px"})),T.each({margin:"",padding:"",border:"Width"},(function(e,t){T.cssHooks[e+t]={expand:function(n){for(var r=0,i={},o="string"==typeof n?n.split(" "):[n];r<4;r++)i[e+ie[r]+t]=o[r]||o[r-2]||o[0];return i}},"margin"!==e&&(T.cssHooks[e+t].set=Ze)})),T.fn.extend({css:function(e,t){return z(this,(function(e,t,n){var r,i,o={},s=0;if(Array.isArray(t)){for(r=He(e),i=t.length;s<i;s++)o[t[s]]=T.css(e,t[s],!1,r);return o}return void 0!==n?T.style(e,t,n):T.css(e,t)}),e,t,arguments.length>1)}}),T.Tween=nt,nt.prototype={constructor:nt,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||T.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(T.cssNumber[n]?"":"px")},cur:function(){var e=nt.propHooks[this.prop];return e&&e.get?e.get(this):nt.propHooks._default.get(this)},run:function(e){var t,n=nt.propHooks[this.prop];return this.options.duration?this.pos=t=T.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):nt.propHooks._default.set(this),this}},nt.prototype.init.prototype=nt.prototype,nt.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=T.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){T.fx.step[e.prop]?T.fx.step[e.prop](e):1!==e.elem.nodeType||!T.cssHooks[e.prop]&&null==e.elem.style[Ke(e.prop)]?e.elem[e.prop]=e.now:T.style(e.elem,e.prop,e.now+e.unit)}}},nt.propHooks.scrollTop=nt.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},T.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},T.fx=nt.prototype.init,T.fx.step={};var rt,it,ot=/^(?:toggle|show|hide)$/,st=/queueHooks$/;function at(){it&&(!1===_.hidden&&n.requestAnimationFrame?n.requestAnimationFrame(at):n.setTimeout(at,T.fx.interval),T.fx.tick())}function ct(){return n.setTimeout((function(){rt=void 0})),rt=Date.now()}function lt(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=ie[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function ut(e,t,n){for(var r,i=(ht.tweeners[t]||[]).concat(ht.tweeners["*"]),o=0,s=i.length;o<s;o++)if(r=i[o].call(n,t,e))return r}function ht(e,t,n){var r,i,o=0,s=ht.prefilters.length,a=T.Deferred().always((function(){delete c.elem})),c=function(){if(i)return!1;for(var t=rt||ct(),n=Math.max(0,l.startTime+l.duration-t),r=1-(n/l.duration||0),o=0,s=l.tweens.length;o<s;o++)l.tweens[o].run(r);return a.notifyWith(e,[l,r,n]),r<1&&s?n:(s||a.notifyWith(e,[l,1,0]),a.resolveWith(e,[l]),!1)},l=a.promise({elem:e,props:T.extend({},t),opts:T.extend(!0,{specialEasing:{},easing:T.easing._default},n),originalProperties:t,originalOptions:n,startTime:rt||ct(),duration:n.duration,tweens:[],createTween:function(t,n){var r=T.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0;if(i)return this;for(i=!0;n<r;n++)l.tweens[n].run(1);return t?(a.notifyWith(e,[l,1,0]),a.resolveWith(e,[l,t])):a.rejectWith(e,[l,t]),this}}),u=l.props;for(function(e,t){var n,r,i,o,s;for(n in e)if(i=t[r=K(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(s=T.cssHooks[r])&&"expand"in s)for(n in o=s.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(u,l.opts.specialEasing);o<s;o++)if(r=ht.prefilters[o].call(l,e,u,l.opts))return v(r.stop)&&(T._queueHooks(l.elem,l.opts.queue).stop=r.stop.bind(r)),r;return T.map(u,ut,l),v(l.opts.start)&&l.opts.start.call(e,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),T.fx.timer(T.extend(c,{elem:e,anim:l,queue:l.opts.queue})),l}T.Animation=T.extend(ht,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return le(n.elem,e,re.exec(t),n),n}]},tweener:function(e,t){v(e)?(t=e,e=["*"]):e=e.match(M);for(var n,r=0,i=e.length;r<i;r++)n=e[r],ht.tweeners[n]=ht.tweeners[n]||[],ht.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,s,a,c,l,u,h="width"in t||"height"in t,d=this,p={},f=e.style,g=e.nodeType&&ce(e),m=J.get(e,"fxshow");for(r in n.queue||(null==(s=T._queueHooks(e,"fx")).unqueued&&(s.unqueued=0,a=s.empty.fire,s.empty.fire=function(){s.unqueued||a()}),s.unqueued++,d.always((function(){d.always((function(){s.unqueued--,T.queue(e,"fx").length||s.empty.fire()}))}))),t)if(i=t[r],ot.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!m||void 0===m[r])continue;g=!0}p[r]=m&&m[r]||T.style(e,r)}if((c=!T.isEmptyObject(t))||!T.isEmptyObject(p))for(r in h&&1===e.nodeType&&(n.overflow=[f.overflow,f.overflowX,f.overflowY],null==(l=m&&m.display)&&(l=J.get(e,"display")),"none"===(u=T.css(e,"display"))&&(l?u=l:(de([e],!0),l=e.style.display||l,u=T.css(e,"display"),de([e]))),("inline"===u||"inline-block"===u&&null!=l)&&"none"===T.css(e,"float")&&(c||(d.done((function(){f.display=l})),null==l&&(u=f.display,l="none"===u?"":u)),f.display="inline-block")),n.overflow&&(f.overflow="hidden",d.always((function(){f.overflow=n.overflow[0],f.overflowX=n.overflow[1],f.overflowY=n.overflow[2]}))),c=!1,p)c||(m?"hidden"in m&&(g=m.hidden):m=J.access(e,"fxshow",{display:l}),o&&(m.hidden=!g),g&&de([e],!0),d.done((function(){for(r in g||de([e]),J.remove(e,"fxshow"),p)T.style(e,r,p[r])}))),c=ut(g?m[r]:0,r,d),r in m||(m[r]=c.start,g&&(c.end=c.start,c.start=0))}],prefilter:function(e,t){t?ht.prefilters.unshift(e):ht.prefilters.push(e)}}),T.speed=function(e,t,n){var r=e&&"object"==typeof e?T.extend({},e):{complete:n||!n&&t||v(e)&&e,duration:e,easing:n&&t||t&&!v(t)&&t};return T.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in T.fx.speeds?r.duration=T.fx.speeds[r.duration]:r.duration=T.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){v(r.old)&&r.old.call(this),r.queue&&T.dequeue(this,r.queue)},r},T.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ce).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=T.isEmptyObject(e),o=T.speed(t,n,r),s=function(){var t=ht(this,T.extend({},e),o);(i||J.get(this,"finish"))&&t.stop(!0)};return s.finish=s,i||!1===o.queue?this.each(s):this.queue(o.queue,s)},stop:function(e,t,n){var r=function(e){var t=e.stop;delete e.stop,t(n)};return"string"!=typeof e&&(n=t,t=e,e=void 0),t&&this.queue(e||"fx",[]),this.each((function(){var t=!0,i=null!=e&&e+"queueHooks",o=T.timers,s=J.get(this);if(i)s[i]&&s[i].stop&&r(s[i]);else for(i in s)s[i]&&s[i].stop&&st.test(i)&&r(s[i]);for(i=o.length;i--;)o[i].elem!==this||null!=e&&o[i].queue!==e||(o[i].anim.stop(n),t=!1,o.splice(i,1));!t&&n||T.dequeue(this,e)}))},finish:function(e){return!1!==e&&(e=e||"fx"),this.each((function(){var t,n=J.get(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=T.timers,s=r?r.length:0;for(n.finish=!0,T.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;t<s;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish}))}}),T.each(["toggle","show","hide"],(function(e,t){var n=T.fn[t];T.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(lt(t,!0),e,r,i)}})),T.each({slideDown:lt("show"),slideUp:lt("hide"),slideToggle:lt("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},(function(e,t){T.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}})),T.timers=[],T.fx.tick=function(){var e,t=0,n=T.timers;for(rt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||T.fx.stop(),rt=void 0},T.fx.timer=function(e){T.timers.push(e),T.fx.start()},T.fx.interval=13,T.fx.start=function(){it||(it=!0,at())},T.fx.stop=function(){it=null},T.fx.speeds={slow:600,fast:200,_default:400},T.fn.delay=function(e,t){return e=T.fx&&T.fx.speeds[e]||e,t=t||"fx",this.queue(t,(function(t,r){var i=n.setTimeout(t,e);r.stop=function(){n.clearTimeout(i)}}))},function(){var e=_.createElement("input"),t=_.createElement("select").appendChild(_.createElement("option"));e.type="checkbox",m.checkOn=""!==e.value,m.optSelected=t.selected,(e=_.createElement("input")).value="t",e.type="radio",m.radioValue="t"===e.value}();var dt,pt=T.expr.attrHandle;T.fn.extend({attr:function(e,t){return z(this,T.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each((function(){T.removeAttr(this,e)}))}}),T.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return void 0===e.getAttribute?T.prop(e,t,n):(1===o&&T.isXMLDoc(e)||(i=T.attrHooks[t.toLowerCase()]||(T.expr.match.bool.test(t)?dt:void 0)),void 0!==n?null===n?void T.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=T.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!m.radioValue&&"radio"===t&&O(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(M);if(i&&1===e.nodeType)for(;n=i[r++];)e.removeAttribute(n)}}),dt={set:function(e,t,n){return!1===t?T.removeAttr(e,n):e.setAttribute(n,n),n}},T.each(T.expr.match.bool.source.match(/\w+/g),(function(e,t){var n=pt[t]||T.find.attr;pt[t]=function(e,t,r){var i,o,s=t.toLowerCase();return r||(o=pt[s],pt[s]=i,i=null!=n(e,t,r)?s:null,pt[s]=o),i}}));var ft=/^(?:input|select|textarea|button)$/i,gt=/^(?:a|area)$/i;function mt(e){return(e.match(M)||[]).join(" ")}function vt(e){return e.getAttribute&&e.getAttribute("class")||""}function yt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(M)||[]}T.fn.extend({prop:function(e,t){return z(this,T.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each((function(){delete this[T.propFix[e]||e]}))}}),T.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&T.isXMLDoc(e)||(t=T.propFix[t]||t,i=T.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=T.find.attr(e,"tabindex");return t?parseInt(t,10):ft.test(e.nodeName)||gt.test(e.nodeName)&&e.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),m.optSelected||(T.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),T.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],(function(){T.propFix[this.toLowerCase()]=this})),T.fn.extend({addClass:function(e){var t,n,r,i,o,s,a,c=0;if(v(e))return this.each((function(t){T(this).addClass(e.call(this,t,vt(this)))}));if((t=yt(e)).length)for(;n=this[c++];)if(i=vt(n),r=1===n.nodeType&&" "+mt(i)+" "){for(s=0;o=t[s++];)r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(a=mt(r))&&n.setAttribute("class",a)}return this},removeClass:function(e){var t,n,r,i,o,s,a,c=0;if(v(e))return this.each((function(t){T(this).removeClass(e.call(this,t,vt(this)))}));if(!arguments.length)return this.attr("class","");if((t=yt(e)).length)for(;n=this[c++];)if(i=vt(n),r=1===n.nodeType&&" "+mt(i)+" "){for(s=0;o=t[s++];)for(;r.indexOf(" "+o+" ")>-1;)r=r.replace(" "+o+" "," ");i!==(a=mt(r))&&n.setAttribute("class",a)}return this},toggleClass:function(e,t){var n=typeof e,r="string"===n||Array.isArray(e);return"boolean"==typeof t&&r?t?this.addClass(e):this.removeClass(e):v(e)?this.each((function(n){T(this).toggleClass(e.call(this,n,vt(this),t),t)})):this.each((function(){var t,i,o,s;if(r)for(i=0,o=T(this),s=yt(e);t=s[i++];)o.hasClass(t)?o.removeClass(t):o.addClass(t);else void 0!==e&&"boolean"!==n||((t=vt(this))&&J.set(this,"__className__",t),this.setAttribute&&this.setAttribute("class",t||!1===e?"":J.get(this,"__className__")||""))}))},hasClass:function(e){var t,n,r=0;for(t=" "+e+" ";n=this[r++];)if(1===n.nodeType&&(" "+mt(vt(n))+" ").indexOf(t)>-1)return!0;return!1}});var _t=/\r/g;T.fn.extend({val:function(e){var t,n,r,i=this[0];return arguments.length?(r=v(e),this.each((function(n){var i;1===this.nodeType&&(null==(i=r?e.call(this,n,T(this).val()):e)?i="":"number"==typeof i?i+="":Array.isArray(i)&&(i=T.map(i,(function(e){return null==e?"":e+""}))),(t=T.valHooks[this.type]||T.valHooks[this.nodeName.toLowerCase()])&&"set"in t&&void 0!==t.set(this,i,"value")||(this.value=i))}))):i?(t=T.valHooks[i.type]||T.valHooks[i.nodeName.toLowerCase()])&&"get"in t&&void 0!==(n=t.get(i,"value"))?n:"string"==typeof(n=i.value)?n.replace(_t,""):null==n?"":n:void 0}}),T.extend({valHooks:{option:{get:function(e){var t=T.find.attr(e,"value");return null!=t?t:mt(T.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,s="select-one"===e.type,a=s?null:[],c=s?o+1:i.length;for(r=o<0?c:s?o:0;r<c;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!O(n.parentNode,"optgroup"))){if(t=T(n).val(),s)return t;a.push(t)}return a},set:function(e,t){for(var n,r,i=e.options,o=T.makeArray(t),s=i.length;s--;)((r=i[s]).selected=T.inArray(T.valHooks.option.get(r),o)>-1)&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),T.each(["radio","checkbox"],(function(){T.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=T.inArray(T(e).val(),t)>-1}},m.checkOn||(T.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})})),m.focusin="onfocusin"in n;var bt=/^(?:focusinfocus|focusoutblur)$/,wt=function(e){e.stopPropagation()};T.extend(T.event,{trigger:function(e,t,r,i){var o,s,a,c,l,u,h,d,f=[r||_],g=p.call(e,"type")?e.type:e,m=p.call(e,"namespace")?e.namespace.split("."):[];if(s=d=a=r=r||_,3!==r.nodeType&&8!==r.nodeType&&!bt.test(g+T.event.triggered)&&(g.indexOf(".")>-1&&(m=g.split("."),g=m.shift(),m.sort()),l=g.indexOf(":")<0&&"on"+g,(e=e[T.expando]?e:new T.Event(g,"object"==typeof e&&e)).isTrigger=i?2:3,e.namespace=m.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+m.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=r),t=null==t?[e]:T.makeArray(t,[e]),h=T.event.special[g]||{},i||!h.trigger||!1!==h.trigger.apply(r,t))){if(!i&&!h.noBubble&&!y(r)){for(c=h.delegateType||g,bt.test(c+g)||(s=s.parentNode);s;s=s.parentNode)f.push(s),a=s;a===(r.ownerDocument||_)&&f.push(a.defaultView||a.parentWindow||n)}for(o=0;(s=f[o++])&&!e.isPropagationStopped();)d=s,e.type=o>1?c:h.bindType||g,(u=(J.get(s,"events")||Object.create(null))[e.type]&&J.get(s,"handle"))&&u.apply(s,t),(u=l&&s[l])&&u.apply&&G(s)&&(e.result=u.apply(s,t),!1===e.result&&e.preventDefault());return e.type=g,i||e.isDefaultPrevented()||h._default&&!1!==h._default.apply(f.pop(),t)||!G(r)||l&&v(r[g])&&!y(r)&&((a=r[l])&&(r[l]=null),T.event.triggered=g,e.isPropagationStopped()&&d.addEventListener(g,wt),r[g](),e.isPropagationStopped()&&d.removeEventListener(g,wt),T.event.triggered=void 0,a&&(r[l]=a)),e.result}},simulate:function(e,t,n){var r=T.extend(new T.Event,n,{type:e,isSimulated:!0});T.event.trigger(r,null,t)}}),T.fn.extend({trigger:function(e,t){return this.each((function(){T.event.trigger(e,t,this)}))},triggerHandler:function(e,t){var n=this[0];if(n)return T.event.trigger(e,t,n,!0)}}),m.focusin||T.each({focus:"focusin",blur:"focusout"},(function(e,t){var n=function(e){T.event.simulate(t,e.target,T.event.fix(e))};T.event.special[t]={setup:function(){var r=this.ownerDocument||this.document||this,i=J.access(r,t);i||r.addEventListener(e,n,!0),J.access(r,t,(i||0)+1)},teardown:function(){var r=this.ownerDocument||this.document||this,i=J.access(r,t)-1;i?J.access(r,t,i):(r.removeEventListener(e,n,!0),J.remove(r,t))}}}));var Ct=n.location,Tt={guid:Date.now()},xt=/\?/;T.parseXML=function(e){var t,r;if(!e||"string"!=typeof e)return null;try{t=(new n.DOMParser).parseFromString(e,"text/xml")}catch(e){}return r=t&&t.getElementsByTagName("parsererror")[0],t&&!r||T.error("Invalid XML: "+(r?T.map(r.childNodes,(function(e){return e.textContent})).join("\n"):e)),t};var Et=/\[\]$/,kt=/\r?\n/g,It=/^(?:submit|button|image|reset|file)$/i,St=/^(?:input|select|textarea|keygen)/i;function Ot(e,t,n,r){var i;if(Array.isArray(t))T.each(t,(function(t,i){n||Et.test(e)?r(e,i):Ot(e+"["+("object"==typeof i&&null!=i?t:"")+"]",i,n,r)}));else if(n||"object"!==C(t))r(e,t);else for(i in t)Ot(e+"["+i+"]",t[i],n,r)}T.param=function(e,t){var n,r=[],i=function(e,t){var n=v(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!T.isPlainObject(e))T.each(e,(function(){i(this.name,this.value)}));else for(n in e)Ot(n,e[n],t,i);return r.join("&")},T.fn.extend({serialize:function(){return T.param(this.serializeArray())},serializeArray:function(){return this.map((function(){var e=T.prop(this,"elements");return e?T.makeArray(e):this})).filter((function(){var e=this.type;return this.name&&!T(this).is(":disabled")&&St.test(this.nodeName)&&!It.test(e)&&(this.checked||!ge.test(e))})).map((function(e,t){var n=T(this).val();return null==n?null:Array.isArray(n)?T.map(n,(function(e){return{name:t.name,value:e.replace(kt,"\r\n")}})):{name:t.name,value:n.replace(kt,"\r\n")}})).get()}});var Nt=/%20/g,Pt=/#.*$/,At=/([?&])_=[^&]*/,Rt=/^(.*?):[ \t]*([^\r\n]*)$/gm,jt=/^(?:GET|HEAD)$/,Dt=/^\/\//,Lt={},Mt={},qt="*/".concat("*"),Ft=_.createElement("a");function Ht(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(M)||[];if(v(n))for(;r=o[i++];)"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function Ut(e,t,n,r){var i={},o=e===Mt;function s(a){var c;return i[a]=!0,T.each(e[a]||[],(function(e,a){var l=a(t,n,r);return"string"!=typeof l||o||i[l]?o?!(c=l):void 0:(t.dataTypes.unshift(l),s(l),!1)})),c}return s(t.dataTypes[0])||!i["*"]&&s("*")}function Wt(e,t){var n,r,i=T.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&T.extend(!0,e,r),e}Ft.href=Ct.href,T.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Ct.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Ct.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":qt,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":T.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?Wt(Wt(e,T.ajaxSettings),t):Wt(T.ajaxSettings,e)},ajaxPrefilter:Ht(Lt),ajaxTransport:Ht(Mt),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var r,i,o,s,a,c,l,u,h,d,p=T.ajaxSetup({},t),f=p.context||p,g=p.context&&(f.nodeType||f.jquery)?T(f):T.event,m=T.Deferred(),v=T.Callbacks("once memory"),y=p.statusCode||{},b={},w={},C="canceled",x={readyState:0,getResponseHeader:function(e){var t;if(l){if(!s)for(s={};t=Rt.exec(o);)s[t[1].toLowerCase()+" "]=(s[t[1].toLowerCase()+" "]||[]).concat(t[2]);t=s[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return l?o:null},setRequestHeader:function(e,t){return null==l&&(e=w[e.toLowerCase()]=w[e.toLowerCase()]||e,b[e]=t),this},overrideMimeType:function(e){return null==l&&(p.mimeType=e),this},statusCode:function(e){var t;if(e)if(l)x.always(e[x.status]);else for(t in e)y[t]=[y[t],e[t]];return this},abort:function(e){var t=e||C;return r&&r.abort(t),E(0,t),this}};if(m.promise(x),p.url=((e||p.url||Ct.href)+"").replace(Dt,Ct.protocol+"//"),p.type=t.method||t.type||p.method||p.type,p.dataTypes=(p.dataType||"*").toLowerCase().match(M)||[""],null==p.crossDomain){c=_.createElement("a");try{c.href=p.url,c.href=c.href,p.crossDomain=Ft.protocol+"//"+Ft.host!=c.protocol+"//"+c.host}catch(e){p.crossDomain=!0}}if(p.data&&p.processData&&"string"!=typeof p.data&&(p.data=T.param(p.data,p.traditional)),Ut(Lt,p,t,x),l)return x;for(h in(u=T.event&&p.global)&&0==T.active++&&T.event.trigger("ajaxStart"),p.type=p.type.toUpperCase(),p.hasContent=!jt.test(p.type),i=p.url.replace(Pt,""),p.hasContent?p.data&&p.processData&&0===(p.contentType||"").indexOf("application/x-www-form-urlencoded")&&(p.data=p.data.replace(Nt,"+")):(d=p.url.slice(i.length),p.data&&(p.processData||"string"==typeof p.data)&&(i+=(xt.test(i)?"&":"?")+p.data,delete p.data),!1===p.cache&&(i=i.replace(At,"$1"),d=(xt.test(i)?"&":"?")+"_="+Tt.guid+++d),p.url=i+d),p.ifModified&&(T.lastModified[i]&&x.setRequestHeader("If-Modified-Since",T.lastModified[i]),T.etag[i]&&x.setRequestHeader("If-None-Match",T.etag[i])),(p.data&&p.hasContent&&!1!==p.contentType||t.contentType)&&x.setRequestHeader("Content-Type",p.contentType),x.setRequestHeader("Accept",p.dataTypes[0]&&p.accepts[p.dataTypes[0]]?p.accepts[p.dataTypes[0]]+("*"!==p.dataTypes[0]?", "+qt+"; q=0.01":""):p.accepts["*"]),p.headers)x.setRequestHeader(h,p.headers[h]);if(p.beforeSend&&(!1===p.beforeSend.call(f,x,p)||l))return x.abort();if(C="abort",v.add(p.complete),x.done(p.success),x.fail(p.error),r=Ut(Mt,p,t,x)){if(x.readyState=1,u&&g.trigger("ajaxSend",[x,p]),l)return x;p.async&&p.timeout>0&&(a=n.setTimeout((function(){x.abort("timeout")}),p.timeout));try{l=!1,r.send(b,E)}catch(e){if(l)throw e;E(-1,e)}}else E(-1,"No Transport");function E(e,t,s,c){var h,d,_,b,w,C=t;l||(l=!0,a&&n.clearTimeout(a),r=void 0,o=c||"",x.readyState=e>0?4:0,h=e>=200&&e<300||304===e,s&&(b=function(e,t,n){for(var r,i,o,s,a=e.contents,c=e.dataTypes;"*"===c[0];)c.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in a)if(a[i]&&a[i].test(r)){c.unshift(i);break}if(c[0]in n)o=c[0];else{for(i in n){if(!c[0]||e.converters[i+" "+c[0]]){o=i;break}s||(s=i)}o=o||s}if(o)return o!==c[0]&&c.unshift(o),n[o]}(p,x,s)),!h&&T.inArray("script",p.dataTypes)>-1&&T.inArray("json",p.dataTypes)<0&&(p.converters["text script"]=function(){}),b=function(e,t,n,r){var i,o,s,a,c,l={},u=e.dataTypes.slice();if(u[1])for(s in e.converters)l[s.toLowerCase()]=e.converters[s];for(o=u.shift();o;)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!c&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),c=o,o=u.shift())if("*"===o)o=c;else if("*"!==c&&c!==o){if(!(s=l[c+" "+o]||l["* "+o]))for(i in l)if((a=i.split(" "))[1]===o&&(s=l[c+" "+a[0]]||l["* "+a[0]])){!0===s?s=l[i]:!0!==l[i]&&(o=a[0],u.unshift(a[1]));break}if(!0!==s)if(s&&e.throws)t=s(t);else try{t=s(t)}catch(e){return{state:"parsererror",error:s?e:"No conversion from "+c+" to "+o}}}return{state:"success",data:t}}(p,b,x,h),h?(p.ifModified&&((w=x.getResponseHeader("Last-Modified"))&&(T.lastModified[i]=w),(w=x.getResponseHeader("etag"))&&(T.etag[i]=w)),204===e||"HEAD"===p.type?C="nocontent":304===e?C="notmodified":(C=b.state,d=b.data,h=!(_=b.error))):(_=C,!e&&C||(C="error",e<0&&(e=0))),x.status=e,x.statusText=(t||C)+"",h?m.resolveWith(f,[d,C,x]):m.rejectWith(f,[x,C,_]),x.statusCode(y),y=void 0,u&&g.trigger(h?"ajaxSuccess":"ajaxError",[x,p,h?d:_]),v.fireWith(f,[x,C]),u&&(g.trigger("ajaxComplete",[x,p]),--T.active||T.event.trigger("ajaxStop")))}return x},getJSON:function(e,t,n){return T.get(e,t,n,"json")},getScript:function(e,t){return T.get(e,void 0,t,"script")}}),T.each(["get","post"],(function(e,t){T[t]=function(e,n,r,i){return v(n)&&(i=i||r,r=n,n=void 0),T.ajax(T.extend({url:e,type:t,dataType:i,data:n,success:r},T.isPlainObject(e)&&e))}})),T.ajaxPrefilter((function(e){var t;for(t in e.headers)"content-type"===t.toLowerCase()&&(e.contentType=e.headers[t]||"")})),T._evalUrl=function(e,t,n){return T.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){T.globalEval(e,t,n)}})},T.fn.extend({wrapAll:function(e){var t;return this[0]&&(v(e)&&(e=e.call(this[0])),t=T(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map((function(){for(var e=this;e.firstElementChild;)e=e.firstElementChild;return e})).append(this)),this},wrapInner:function(e){return v(e)?this.each((function(t){T(this).wrapInner(e.call(this,t))})):this.each((function(){var t=T(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)}))},wrap:function(e){var t=v(e);return this.each((function(n){T(this).wrapAll(t?e.call(this,n):e)}))},unwrap:function(e){return this.parent(e).not("body").each((function(){T(this).replaceWith(this.childNodes)})),this}}),T.expr.pseudos.hidden=function(e){return!T.expr.pseudos.visible(e)},T.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},T.ajaxSettings.xhr=function(){try{return new n.XMLHttpRequest}catch(e){}};var Bt={0:200,1223:204},zt=T.ajaxSettings.xhr();m.cors=!!zt&&"withCredentials"in zt,m.ajax=zt=!!zt,T.ajaxTransport((function(e){var t,r;if(m.cors||zt&&!e.crossDomain)return{send:function(i,o){var s,a=e.xhr();if(a.open(e.type,e.url,e.async,e.username,e.password),e.xhrFields)for(s in e.xhrFields)a[s]=e.xhrFields[s];for(s in e.mimeType&&a.overrideMimeType&&a.overrideMimeType(e.mimeType),e.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest"),i)a.setRequestHeader(s,i[s]);t=function(e){return function(){t&&(t=r=a.onload=a.onerror=a.onabort=a.ontimeout=a.onreadystatechange=null,"abort"===e?a.abort():"error"===e?"number"!=typeof a.status?o(0,"error"):o(a.status,a.statusText):o(Bt[a.status]||a.status,a.statusText,"text"!==(a.responseType||"text")||"string"!=typeof a.responseText?{binary:a.response}:{text:a.responseText},a.getAllResponseHeaders()))}},a.onload=t(),r=a.onerror=a.ontimeout=t("error"),void 0!==a.onabort?a.onabort=r:a.onreadystatechange=function(){4===a.readyState&&n.setTimeout((function(){t&&r()}))},t=t("abort");try{a.send(e.hasContent&&e.data||null)}catch(e){if(t)throw e}},abort:function(){t&&t()}}})),T.ajaxPrefilter((function(e){e.crossDomain&&(e.contents.script=!1)})),T.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return T.globalEval(e),e}}}),T.ajaxPrefilter("script",(function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")})),T.ajaxTransport("script",(function(e){var t,n;if(e.crossDomain||e.scriptAttrs)return{send:function(r,i){t=T("<script>").attr(e.scriptAttrs||{}).prop({charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&i("error"===e.type?404:200,e.type)}),_.head.appendChild(t[0])},abort:function(){n&&n()}}}));var Vt,$t=[],Qt=/(=)\?(?=&|$)|\?\?/;T.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=$t.pop()||T.expando+"_"+Tt.guid++;return this[e]=!0,e}}),T.ajaxPrefilter("json jsonp",(function(e,t,r){var i,o,s,a=!1!==e.jsonp&&(Qt.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Qt.test(e.data)&&"data");if(a||"jsonp"===e.dataTypes[0])return i=e.jsonpCallback=v(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Qt,"$1"+i):!1!==e.jsonp&&(e.url+=(xt.test(e.url)?"&":"?")+e.jsonp+"="+i),e.converters["script json"]=function(){return s||T.error(i+" was not called"),s[0]},e.dataTypes[0]="json",o=n[i],n[i]=function(){s=arguments},r.always((function(){void 0===o?T(n).removeProp(i):n[i]=o,e[i]&&(e.jsonpCallback=t.jsonpCallback,$t.push(i)),s&&v(o)&&o(s[0]),s=o=void 0})),"script"})),m.createHTMLDocument=((Vt=_.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===Vt.childNodes.length),T.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(m.createHTMLDocument?((r=(t=_.implementation.createHTMLDocument("")).createElement("base")).href=_.location.href,t.head.appendChild(r)):t=_),o=!n&&[],(i=N.exec(e))?[t.createElement(i[1])]:(i=Ce([e],t,o),o&&o.length&&T(o).remove(),T.merge([],i.childNodes)));var r,i,o},T.fn.load=function(e,t,n){var r,i,o,s=this,a=e.indexOf(" ");return a>-1&&(r=mt(e.slice(a)),e=e.slice(0,a)),v(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),s.length>0&&T.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done((function(e){o=arguments,s.html(r?T("<div>").append(T.parseHTML(e)).find(r):e)})).always(n&&function(e,t){s.each((function(){n.apply(this,o||[e.responseText,t,e])}))}),this},T.expr.pseudos.animated=function(e){return T.grep(T.timers,(function(t){return e===t.elem})).length},T.offset={setOffset:function(e,t,n){var r,i,o,s,a,c,l=T.css(e,"position"),u=T(e),h={};"static"===l&&(e.style.position="relative"),a=u.offset(),o=T.css(e,"top"),c=T.css(e,"left"),("absolute"===l||"fixed"===l)&&(o+c).indexOf("auto")>-1?(s=(r=u.position()).top,i=r.left):(s=parseFloat(o)||0,i=parseFloat(c)||0),v(t)&&(t=t.call(e,n,T.extend({},a))),null!=t.top&&(h.top=t.top-a.top+s),null!=t.left&&(h.left=t.left-a.left+i),"using"in t?t.using.call(e,h):u.css(h)}},T.fn.extend({offset:function(e){if(arguments.length)return void 0===e?this:this.each((function(t){T.offset.setOffset(this,e,t)}));var t,n,r=this[0];return r?r.getClientRects().length?(t=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:t.top+n.pageYOffset,left:t.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===T.css(r,"position"))t=r.getBoundingClientRect();else{for(t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;e&&(e===n.body||e===n.documentElement)&&"static"===T.css(e,"position");)e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=T(e).offset()).top+=T.css(e,"borderTopWidth",!0),i.left+=T.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-T.css(r,"marginTop",!0),left:t.left-i.left-T.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map((function(){for(var e=this.offsetParent;e&&"static"===T.css(e,"position");)e=e.offsetParent;return e||oe}))}}),T.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},(function(e,t){var n="pageYOffset"===t;T.fn[e]=function(r){return z(this,(function(e,r,i){var o;if(y(e)?o=e:9===e.nodeType&&(o=e.defaultView),void 0===i)return o?o[t]:e[r];o?o.scrollTo(n?o.pageXOffset:i,n?i:o.pageYOffset):e[r]=i}),e,r,arguments.length)}})),T.each(["top","left"],(function(e,t){T.cssHooks[t]=ze(m.pixelPosition,(function(e,n){if(n)return n=Be(e,t),Fe.test(n)?T(e).position()[t]+"px":n}))})),T.each({Height:"height",Width:"width"},(function(e,t){T.each({padding:"inner"+e,content:t,"":"outer"+e},(function(n,r){T.fn[r]=function(i,o){var s=arguments.length&&(n||"boolean"!=typeof i),a=n||(!0===i||!0===o?"margin":"border");return z(this,(function(t,n,i){var o;return y(t)?0===r.indexOf("outer")?t["inner"+e]:t.document.documentElement["client"+e]:9===t.nodeType?(o=t.documentElement,Math.max(t.body["scroll"+e],o["scroll"+e],t.body["offset"+e],o["offset"+e],o["client"+e])):void 0===i?T.css(t,n,a):T.style(t,n,i,a)}),t,s?i:void 0,s)}}))})),T.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],(function(e,t){T.fn[t]=function(e){return this.on(t,e)}})),T.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),T.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),(function(e,t){T.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}));var Kt=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;T.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),v(e))return r=a.call(arguments,2),(i=function(){return e.apply(t||this,r.concat(a.call(arguments)))}).guid=e.guid=e.guid||T.guid++,i},T.holdReady=function(e){e?T.readyWait++:T.ready(!0)},T.isArray=Array.isArray,T.parseJSON=JSON.parse,T.nodeName=O,T.isFunction=v,T.isWindow=y,T.camelCase=K,T.type=C,T.now=Date.now,T.isNumeric=function(e){var t=T.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},T.trim=function(e){return null==e?"":(e+"").replace(Kt,"")},void 0===(r=function(){return T}.apply(t,[]))||(e.exports=r);var Gt=n.jQuery,Yt=n.$;return T.noConflict=function(e){return n.$===T&&(n.$=Yt),e&&n.jQuery===T&&(n.jQuery=Gt),T},void 0===i&&(n.jQuery=n.$=T),T}))},function(e,t,n){e.exports=n(2)},function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return d}));var r=n(0),i=n.n(r);function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(e,t,n){!function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}(e,t),t.set(e,n)}function c(e,t){return function(e,t){return t.get?t.get.call(e):t.value}(e,u(e,t,"get"))}function l(e,t,n){return function(e,t,n){if(t.set)t.set.call(e,n);else{if(!t.writable)throw new TypeError("attempted to set read only private field");t.value=n}}(e,u(e,t,"set"),n),n}function u(e,t,n){if(!t.has(e))throw new TypeError("attempted to "+n+" private field on non-instance");return t.get(e)}var h=new WeakMap,d=function(){function e(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},c=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0;o(this,e),a(this,h,{writable:!0,value:0}),this.prefix=t,l(this,h,n),this.initFunc=s,this.fade=c;for(var u=1;u<=r;u++)u!=n&&i()(this.getNowId)&&(console.log(this.getNowId(u)),this.vhide(this.getNowId(u)))}var t,n;return t=e,(n=[{key:"showNext",value:function(){var e=this,t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1/0,o=0;return!(c(this,h)>=r||(t&&(this.vhide(this.getNowId()),o=this.fade),!i()(this.getNowId(c(this,h)+1))||(l(this,h,c(this,h)+1),setTimeout((function(){e.vshow(e.getNowId())}),o),n&&c(this,h)in this.initFunc&&this.initFunc[c(this,h)](),0)))}},{key:"showPrev",value:function(){var e=this,t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=0;return t&&(this.vhide(this.getNowId()),r=this.fade),!!i()(this.getNowId(c(this,h)-1))&&(l(this,h,c(this,h)-1),setTimeout((function(){e.vshow(e.getNowId())}),r),n&&c(this,h)in this.initFunc&&this.initFunc[c(this,h)](),!0)}},{key:"getNowId",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c(this,h);return"".concat(this.prefix,"-").concat(e)}},{key:"getNowView",value:function(){return c(this,h)}},{key:"vshow",value:function(e){i()(e).fadeIn(this.fade)}},{key:"vhide",value:function(e){i()(e).fadeOut(this.fade)}}])&&s(t.prototype,n),e}()}])},function(e,t,n){e.exports=n(14)},function(e,t,n){var r=n(10),i=n(11);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var o={insert:"head",singleton:!1};r(i,o);e.exports=i.locals||{}},function(e,t,n){"use strict";var r,i=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},o=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),s=[];function a(e){for(var t=-1,n=0;n<s.length;n++)if(s[n].identifier===e){t=n;break}return t}function c(e,t){for(var n={},r=[],i=0;i<e.length;i++){var o=e[i],c=t.base?o[0]+t.base:o[0],l=n[c]||0,u="".concat(c," ").concat(l);n[c]=l+1;var h=a(u),d={css:o[1],media:o[2],sourceMap:o[3]};-1!==h?(s[h].references++,s[h].updater(d)):s.push({identifier:u,updater:m(d,t),references:1}),r.push(u)}return r}function l(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var i=n.nc;i&&(r.nonce=i)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var s=o(e.insert||"head");if(!s)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");s.appendChild(t)}return t}var u,h=(u=[],function(e,t){return u[e]=t,u.filter(Boolean).join("\n")});function d(e,t,n,r){var i=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=h(t,i);else{var o=document.createTextNode(i),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(o,s[t]):e.appendChild(o)}}function p(e,t,n){var r=n.css,i=n.media,o=n.sourceMap;if(i?e.setAttribute("media",i):e.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var f=null,g=0;function m(e,t){var n,r,i;if(t.singleton){var o=g++;n=f||(f=l(t)),r=d.bind(null,n,o,!1),i=d.bind(null,n,o,!0)}else n=l(t),r=p.bind(null,n,t),i=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else i()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=i());var n=c(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var i=a(n[r]);s[i].references--}for(var o=c(e,t),l=0;l<n.length;l++){var u=a(n[l]);0===s[u].references&&(s[u].updater(),s.splice(u,1))}n=o}}}},function(e,t,n){(t=n(12)(!1)).push([e.i,"html, body {\n    width: 100%;\n    text-align: center;\n    color: black;\n    background-color: white;\n    height: 100%;\n    line-height: 1.5;\n    font-family: 'Noto Sans TC', 'Nunito Sans', sans-serif;\n    font-size: 1rem;\n    font-weight: 400;\n    margin: 0;\n    -webkit-text-size-adjust: 100%;\n    \n}\n\n#wrapper {\n    position:absolute;\n    top:10px; \n    left:0;\n    min-height: calc(100% - 5px);\n}\n\n#background {\n    position:fixed; \n    top:0; \n    left:0;\n    width: 100%;\n    min-height: 100%;\n    /* background-size: 100%;  */\n    /* height: 100%; */\n    display: block;\n    opacity: 1;\n}\n\n#title, #footer {\n    width: 80%;\n    margin-top: 20%;\n}\n\n#footer {\n    position: absolute;\n    left: 0;\n    bottom: 0;\n    width: 70%;\n    left: 15%;\n    bottom: 3%;\n}\n\n.step-2 {\n    padding: 0 20px;\n    margin: 0;\n    position: absolute;\n    top: 50%;\n    -ms-transform: translateY(-50%);\n    transform: translateY(-50%);\n    width: calc(100% - 30px);\n}\n\n.step-2 p{\n    margin-bottom: 50px;\n    line-height: 1.5;\n}\n\n#turn {\n    display: none;\n    z-index: 100;\n    position: fixed;\n    width: 100%;\n    height: 100%;\n    margin: 0;\n}\n\n#turnwarning {\n    z-index: 102;\n    position: absolute;\n    top: 50%;\n    -ms-transform: translateY(-50%);\n    transform: translateY(-50%);\n    width: 100%;\n    font-size: 1.2em;\n}\n  \n@media (orientation: landscape) {\n    #turn {\n        display:block;\n    }\n}\n  \nbutton {\n    color: black;\n    border: 1px solid black;\n    border-radius: 3px;\n    padding: 8px;\n    background: transparent;\n}\n\nbutton:disabled,\nbutton[disabled]{\n  border: 1px solid #666666;\n  color: #666666;\n}\n\nbutton:focus {\n    background: white;\n}\n\n#start {\n    margin-top: 60%;\n    animation: fadeIn 3s;\n    -moz-animation: fadeIn 1s;\n    border-color: #38806c;\n    color: #38806c;\n    border-width: thick;\n    font-weight: bolder;\n    padding: 5px;\n    /* animation-iteration-count: infinite;\n    animation-direction: alternate;\n    -moz-animation-iteration-count: infinite;\n    -moz-animation-direction: alternate; */\n}\n\n#answer {\n    margin-top: 10%;\n    margin-left: 5px;\n    animation: fadeIn 1s;\n    -moz-animation: fadeIn 1s;\n    color: black;\n    background: white;\n    border:none;\n    font-weight: bolder;\n}\n\n#answer:disabled,\n#answer[disabled]{\n  color: #e9e9e9;\n  background: #c2c2c2;\n}\n\n#change {\n    margin-top: 10%;\n    margin-right: 5px;\n    animation: fadeIn 1s;\n    -moz-animation: fadeIn 1s;\n    border-color: white;\n    color: white;\n    font-weight: bolder;\n}\n\n\n#replay {\n    border: none;\n    margin-top: 10%;\n    display: none;\n    animation: fadeIn 1s;\n    -moz-animation: fadeIn 1s;\n    margin-right: 5%;\n    color: white;\n}\n\n#replay:focus {\n    background: transparent;\n    color: gray;\n}\n\n#intro {\n    border: none;\n    margin-top: 10%;\n    display: none;\n    animation: fadeIn 1s;\n    -moz-animation: fadeIn 1s;\n    margin-left: 5%;\n    color: white;\n}\n\n#intro:focus {\n    background: transparent;\n    color: gray;\n}\n\n\n.fullwrapper {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    overflow: hidden;\n    box-sizing: border-box;\n}\n\n#intropage {\n    text-align: left;\n    padding: 0 20px;\n}\n\n.logo {\n    margin: 10px;\n    height: 50px;\n}\n\n.progressimg {\n    display: block;\n    width: calc(100% + 70px);\n    height: auto;\n    margin-right: -35px;\n    margin-left: -35px;\n}\n\n#previmg {\n    width: 15%;\n}\n\n@keyframes fadeIn {\n    from {\n      opacity: 0;\n    }\n    to {\n      opacity: 1;\n    }\n}\n\n@keyframes fadeOut {\n    from {\n      opacity: 1;\n    }\n    to {\n      opacity: 0;\n      \n    }\n}\n\n@keyframes bgfade{\n    from {\n        opacity: 1;\n    }\n    to {\n        opacity: 0.8;\n    }\n}\n\n@-moz-keyframes fadeIn {\n    from {\n      opacity: 0;\n    }\n    to {\n      opacity: 1;\n    }\n}\n\n@-moz-keyframes fadeOut {\n    from {\n      opacity: 1;\n    }\n    to {\n      opacity: 0;\n    }\n}\n\n@-moz-keyframes bgfade {\n    from {\n        opacity: 1;\n    }\n    to {\n        opacity: 0.8;\n    }\n}\n\n\n/* put at the end */\n#loadOverlay {\n    display:none;\n    animation: fadeOut 1s;\n    -moz-animation: fadeOut 1s;\n}",""]),e.exports=t},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var i=(s=r,a=btoa(unescape(encodeURIComponent(JSON.stringify(s)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a),"/*# ".concat(c," */")),o=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")}));return[n].concat(o).concat([i]).join("\n")}var s,a,c;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var i={};if(r)for(var o=0;o<this.length;o++){var s=this[o][0];null!=s&&(i[s]=!0)}for(var a=0;a<e.length;a++){var c=[].concat(e[a]);r&&i[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),t.push(c))}},t}},function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){"use strict";n.r(t);var r=n(3),i=n.n(r);n(9);window.onorientationchange=function(){var e=window.orientation;90===e?(console.log("scroll?"),i()("body").animate({scrollTop:"0"},0)):-90===e&&i()("body").animate({scrollTop:"0"},0)};var o=n(7),s=n.n(o),a=["你在博物館裡看到了哪件展品最讓你覺得有趣？為什麼？請寫下你的想法，讓井幫你說故事~\n","你今天在博物館裡學到了一個新的知識嗎？那是什麼？請寫下來，讓井幫你說故事~\n","博物館裡有很多不同時代的展品，你最喜歡哪個時代的展品？請寫下你的選擇，讓井幫你說故事~\n","你在博物館裡看到的哪個展品讓你想到了學校裡學到的知識？請寫下你的發現，讓井幫你說故事~\n","如果你可以把博物館裡的一件展品帶回家，你會選擇哪一件？為什麼？請寫下你的理由，讓井幫你說故事~\n","博物館裡有很多有趣的故事和歷史，你最喜歡聽到哪個故事？請寫下來，讓井幫你說故事~\n","今天在博物館裡，你有沒有和其他小朋友一起玩或一起參觀？請寫下你的經歷，讓井幫你說故事~\n","如果你能變成博物館裡的一件展品，你會選擇變成什麼？為什麼？請寫下你的選擇，讓井幫你說故事~\n","你今天在博物館裡有沒有做過手工藝或參加過特別的活動？那是什麼？請寫下來，讓井幫你說故事~\n","博物館裡有很多圖片和影片，你最喜歡哪一個？為什麼？請寫下你的想法，讓井幫你說故事~\n","博物館裡有哪些展品或展覽內容勾起你個人的回憶呢？請你寫下分享內容，讓井幫你說故事～\n","你的家鄉在哪裡？你記憶中的家鄉，有沒有很值得分享的故事？請你寫下分享內容，讓井幫你說故事～\n","今天來到臺史博，什麼讓你感到最印象深刻？請你寫下分享內容，讓井幫你說故事～\n"],c=n(0),l=n(4),u=n(2),h=n(5);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class d{constructor(e,t){this._delegate=e,this.firebase=t,Object(u._addComponent)(e,new l.a("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),Object(u.deleteApp)(this._delegate)))}_getService(e,t=u._DEFAULT_ENTRY_NAME){var n;this._delegate.checkDestroyed();const r=this._delegate.container.getProvider(e);return r.isInitialized()||"EXPLICIT"!==(null===(n=r.getComponent())||void 0===n?void 0:n.instantiationMode)||r.initialize(),r.getImmediate({identifier:t})}_removeServiceInstance(e,t=u._DEFAULT_ENTRY_NAME){this._delegate.container.getProvider(e).clearInstance(t)}_addComponent(e){Object(u._addComponent)(this._delegate,e)}_addOrOverwriteComponent(e){Object(u._addOrOverwriteComponent)(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance."},f=new c.b("app-compat","Firebase",p);const g=
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function e(){const t=
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e){const t={},n={__esModule:!0,initializeApp:function(r,i={}){const o=u.initializeApp(r,i);if(Object(c.k)(t,o.name))return t[o.name];const s=new e(o,n);return t[o.name]=s,s},app:r,registerVersion:u.registerVersion,setLogLevel:u.setLogLevel,onLog:u.onLog,apps:null,SDK_VERSION:u.SDK_VERSION,INTERNAL:{registerComponent:function(t){const i=t.name,o=i.replace("-compat","");if(u._registerComponent(t)&&"PUBLIC"===t.type){const s=(e=r())=>{if("function"!=typeof e[o])throw f.create("invalid-app-argument",{appName:i});return e[o]()};void 0!==t.serviceProps&&Object(c.p)(s,t.serviceProps),n[o]=s,e.prototype[o]=function(...e){return this._getService.bind(this,i).apply(this,t.multipleInstances?e:[])}}return"PUBLIC"===t.type?n[o]:null},removeApp:function(e){delete t[e]},useAsService:function(e,t){if("serverAuth"===t)return null;return t},modularAPIs:u}};function r(e){if(e=e||u._DEFAULT_ENTRY_NAME,!Object(c.k)(t,e))throw f.create("no-app",{appName:e});return t[e]}return n.default=n,Object.defineProperty(n,"apps",{get:function(){return Object.keys(t).map(e=>t[e])}}),r.App=e,n}(d);return t.INTERNAL=Object.assign(Object.assign({},t.INTERNAL),{createFirebaseNamespace:e,extendNamespace:function(e){Object(c.p)(t,e)},createSubscribe:c.m,ErrorFactory:c.b,deepExtend:c.p}),t}(),m=new h.b("@firebase/app-compat");
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
if(Object(c.z)()&&void 0!==self.firebase){m.warn("\n    Warning: Firebase is already defined in the global scope. Please make sure\n    Firebase library is only loaded once.\n  ");const e=self.firebase.SDK_VERSION;e&&e.indexOf("LITE")>=0&&m.warn("\n    Warning: You are trying to load Firebase while using Firebase Performance standalone script.\n    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.\n    ")}const v=g;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var y;Object(u.registerVersion)("@firebase/app-compat","0.2.13",y);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
v.registerVersion("firebase","9.23.0","app-compat");var _=n(1);const b=new h.b("@firebase/database-compat"),w=function(e){const t="FIREBASE WARNING: "+e;b.warn(t)};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class C{constructor(e){this._delegate=e}cancel(e){Object(c.Q)("OnDisconnect.cancel",0,1,arguments.length),Object(c.R)("OnDisconnect.cancel","onComplete",e,!0);const t=this._delegate.cancel();return e&&t.then(()=>e(null),t=>e(t)),t}remove(e){Object(c.Q)("OnDisconnect.remove",0,1,arguments.length),Object(c.R)("OnDisconnect.remove","onComplete",e,!0);const t=this._delegate.remove();return e&&t.then(()=>e(null),t=>e(t)),t}set(e,t){Object(c.Q)("OnDisconnect.set",1,2,arguments.length),Object(c.R)("OnDisconnect.set","onComplete",t,!0);const n=this._delegate.set(e);return t&&n.then(()=>t(null),e=>t(e)),n}setWithPriority(e,t,n){Object(c.Q)("OnDisconnect.setWithPriority",2,3,arguments.length),Object(c.R)("OnDisconnect.setWithPriority","onComplete",n,!0);const r=this._delegate.setWithPriority(e,t);return n&&r.then(()=>n(null),e=>n(e)),r}update(e,t){if(Object(c.Q)("OnDisconnect.update",1,2,arguments.length),Array.isArray(e)){const t={};for(let n=0;n<e.length;++n)t[""+n]=e[n];e=t,w("Passing an Array to firebase.database.onDisconnect().update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")}Object(c.R)("OnDisconnect.update","onComplete",t,!0);const n=this._delegate.update(e);return t&&n.then(()=>t(null),e=>t(e)),n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T{constructor(e,t){this.committed=e,this.snapshot=t}toJSON(){return Object(c.Q)("TransactionResult.toJSON",0,1,arguments.length),{committed:this.committed,snapshot:this.snapshot.toJSON()}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x{constructor(e,t){this._database=e,this._delegate=t}val(){return Object(c.Q)("DataSnapshot.val",0,0,arguments.length),this._delegate.val()}exportVal(){return Object(c.Q)("DataSnapshot.exportVal",0,0,arguments.length),this._delegate.exportVal()}toJSON(){return Object(c.Q)("DataSnapshot.toJSON",0,1,arguments.length),this._delegate.toJSON()}exists(){return Object(c.Q)("DataSnapshot.exists",0,0,arguments.length),this._delegate.exists()}child(e){return Object(c.Q)("DataSnapshot.child",0,1,arguments.length),e=String(e),Object(_.g)("DataSnapshot.child","path",e,!1),new x(this._database,this._delegate.child(e))}hasChild(e){return Object(c.Q)("DataSnapshot.hasChild",1,1,arguments.length),Object(_.g)("DataSnapshot.hasChild","path",e,!1),this._delegate.hasChild(e)}getPriority(){return Object(c.Q)("DataSnapshot.getPriority",0,0,arguments.length),this._delegate.priority}forEach(e){return Object(c.Q)("DataSnapshot.forEach",1,1,arguments.length),Object(c.R)("DataSnapshot.forEach","action",e,!1),this._delegate.forEach(t=>e(new x(this._database,t)))}hasChildren(){return Object(c.Q)("DataSnapshot.hasChildren",0,0,arguments.length),this._delegate.hasChildren()}get key(){return this._delegate.key}numChildren(){return Object(c.Q)("DataSnapshot.numChildren",0,0,arguments.length),this._delegate.size}getRef(){return Object(c.Q)("DataSnapshot.ref",0,0,arguments.length),new k(this._database,this._delegate.ref)}get ref(){return this.getRef()}}class E{constructor(e,t){this.database=e,this._delegate=t}on(e,t,n,r){var i;Object(c.Q)("Query.on",2,4,arguments.length),Object(c.R)("Query.on","callback",t,!1);const o=E.getCancelAndContextArgs_("Query.on",n,r),s=(e,n)=>{t.call(o.context,new x(this.database,e),n)};s.userCallback=t,s.context=o.context;const a=null===(i=o.cancel)||void 0===i?void 0:i.bind(o.context);switch(e){case"value":return Object(_.B)(this._delegate,s,a),t;case"child_added":return Object(_.x)(this._delegate,s,a),t;case"child_removed":return Object(_.A)(this._delegate,s,a),t;case"child_changed":return Object(_.y)(this._delegate,s,a),t;case"child_moved":return Object(_.z)(this._delegate,s,a),t;default:throw new Error(Object(c.q)("Query.on","eventType")+'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".')}}off(e,t,n){if(Object(c.Q)("Query.off",0,3,arguments.length),function(e,t,n){if(!n||void 0!==t)switch(t){case"value":case"child_added":case"child_removed":case"child_changed":case"child_moved":break;default:throw new Error(Object(c.q)(e,"eventType")+'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".')}}("Query.off",e,!0),Object(c.R)("Query.off","callback",t,!0),Object(c.S)("Query.off","context",n,!0),t){const r=()=>{};r.userCallback=t,r.context=n,Object(_.w)(this._delegate,e,r)}else Object(_.w)(this._delegate,e)}get(){return Object(_.q)(this._delegate).then(e=>new x(this.database,e))}once(e,t,n,r){Object(c.Q)("Query.once",1,4,arguments.length),Object(c.R)("Query.once","callback",t,!0);const i=E.getCancelAndContextArgs_("Query.once",n,r),o=new c.a,s=(e,n)=>{const r=new x(this.database,e);t&&t.call(i.context,r,n),o.resolve(r)};s.userCallback=t,s.context=i.context;const a=e=>{i.cancel&&i.cancel.call(i.context,e),o.reject(e)};switch(e){case"value":Object(_.B)(this._delegate,s,a,{onlyOnce:!0});break;case"child_added":Object(_.x)(this._delegate,s,a,{onlyOnce:!0});break;case"child_removed":Object(_.A)(this._delegate,s,a,{onlyOnce:!0});break;case"child_changed":Object(_.y)(this._delegate,s,a,{onlyOnce:!0});break;case"child_moved":Object(_.z)(this._delegate,s,a,{onlyOnce:!0});break;default:throw new Error(Object(c.q)("Query.once","eventType")+'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".')}return o.promise}limitToFirst(e){return Object(c.Q)("Query.limitToFirst",1,1,arguments.length),new E(this.database,Object(_.H)(this._delegate,Object(_.u)(e)))}limitToLast(e){return Object(c.Q)("Query.limitToLast",1,1,arguments.length),new E(this.database,Object(_.H)(this._delegate,Object(_.v)(e)))}orderByChild(e){return Object(c.Q)("Query.orderByChild",1,1,arguments.length),new E(this.database,Object(_.H)(this._delegate,Object(_.C)(e)))}orderByKey(){return Object(c.Q)("Query.orderByKey",0,0,arguments.length),new E(this.database,Object(_.H)(this._delegate,Object(_.D)()))}orderByPriority(){return Object(c.Q)("Query.orderByPriority",0,0,arguments.length),new E(this.database,Object(_.H)(this._delegate,Object(_.E)()))}orderByValue(){return Object(c.Q)("Query.orderByValue",0,0,arguments.length),new E(this.database,Object(_.H)(this._delegate,Object(_.F)()))}startAt(e=null,t){return Object(c.Q)("Query.startAt",0,2,arguments.length),new E(this.database,Object(_.H)(this._delegate,Object(_.R)(e,t)))}startAfter(e=null,t){return Object(c.Q)("Query.startAfter",0,2,arguments.length),new E(this.database,Object(_.H)(this._delegate,Object(_.Q)(e,t)))}endAt(e=null,t){return Object(c.Q)("Query.endAt",0,2,arguments.length),new E(this.database,Object(_.H)(this._delegate,Object(_.l)(e,t)))}endBefore(e=null,t){return Object(c.Q)("Query.endBefore",0,2,arguments.length),new E(this.database,Object(_.H)(this._delegate,Object(_.m)(e,t)))}equalTo(e,t){return Object(c.Q)("Query.equalTo",1,2,arguments.length),new E(this.database,Object(_.H)(this._delegate,Object(_.n)(e,t)))}toString(){return Object(c.Q)("Query.toString",0,0,arguments.length),this._delegate.toString()}toJSON(){return Object(c.Q)("Query.toJSON",0,1,arguments.length),this._delegate.toJSON()}isEqual(e){if(Object(c.Q)("Query.isEqual",1,1,arguments.length),!(e instanceof E)){throw new Error("Query.isEqual failed: First argument must be an instance of firebase.database.Query.")}return this._delegate.isEqual(e._delegate)}static getCancelAndContextArgs_(e,t,n){const r={cancel:void 0,context:void 0};if(t&&n)r.cancel=t,Object(c.R)(e,"cancel",r.cancel,!0),r.context=n,Object(c.S)(e,"context",r.context,!0);else if(t)if("object"==typeof t&&null!==t)r.context=t;else{if("function"!=typeof t)throw new Error(Object(c.q)(e,"cancelOrContext")+" must either be a cancel callback or a context object.");r.cancel=t}return r}get ref(){return new k(this.database,new _.d(this._delegate._repo,this._delegate._path))}}class k extends E{constructor(e,t){super(e,new _.b(t._repo,t._path,new _.c,!1)),this.database=e,this._delegate=t}getKey(){return Object(c.Q)("Reference.key",0,0,arguments.length),this._delegate.key}child(e){return Object(c.Q)("Reference.child",1,1,arguments.length),"number"==typeof e&&(e=String(e)),new k(this.database,Object(_.i)(this._delegate,e))}getParent(){Object(c.Q)("Reference.parent",0,0,arguments.length);const e=this._delegate.parent;return e?new k(this.database,e):null}getRoot(){return Object(c.Q)("Reference.root",0,0,arguments.length),new k(this.database,this._delegate.root)}set(e,t){Object(c.Q)("Reference.set",1,2,arguments.length),Object(c.R)("Reference.set","onComplete",t,!0);const n=Object(_.N)(this._delegate,e);return t&&n.then(()=>t(null),e=>t(e)),n}update(e,t){if(Object(c.Q)("Reference.update",1,2,arguments.length),Array.isArray(e)){const t={};for(let n=0;n<e.length;++n)t[""+n]=e[n];e=t,w("Passing an Array to Firebase.update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")}Object(_.h)("Reference.update",this._delegate._path),Object(c.R)("Reference.update","onComplete",t,!0);const n=Object(_.S)(this._delegate,e);return t&&n.then(()=>t(null),e=>t(e)),n}setWithPriority(e,t,n){Object(c.Q)("Reference.setWithPriority",2,3,arguments.length),Object(c.R)("Reference.setWithPriority","onComplete",n,!0);const r=Object(_.P)(this._delegate,e,t);return n&&r.then(()=>n(null),e=>n(e)),r}remove(e){Object(c.Q)("Reference.remove",0,1,arguments.length),Object(c.R)("Reference.remove","onComplete",e,!0);const t=Object(_.K)(this._delegate);return e&&t.then(()=>e(null),t=>e(t)),t}transaction(e,t,n){Object(c.Q)("Reference.transaction",1,3,arguments.length),Object(c.R)("Reference.transaction","transactionUpdate",e,!1),Object(c.R)("Reference.transaction","onComplete",t,!0),function(e,t,n,r){if((!r||void 0!==n)&&"boolean"!=typeof n)throw new Error(Object(c.q)(e,t)+"must be a boolean.")}("Reference.transaction","applyLocally",n,!0);const r=Object(_.L)(this._delegate,e,{applyLocally:n}).then(e=>new T(e.committed,new x(this.database,e.snapshot)));return t&&r.then(e=>t(null,e.committed,e.snapshot),e=>t(e,!1,null)),r}setPriority(e,t){Object(c.Q)("Reference.setPriority",1,2,arguments.length),Object(c.R)("Reference.setPriority","onComplete",t,!0);const n=Object(_.O)(this._delegate,e);return t&&n.then(()=>t(null),e=>t(e)),n}push(e,t){Object(c.Q)("Reference.push",0,2,arguments.length),Object(c.R)("Reference.push","onComplete",t,!0);const n=Object(_.G)(this._delegate,e),r=n.then(e=>new k(this.database,e));t&&r.then(()=>t(null),e=>t(e));const i=new k(this.database,n);return i.then=r.then.bind(r),i.catch=r.catch.bind(r,void 0),i}onDisconnect(){return Object(_.h)("Reference.onDisconnect",this._delegate._path),new C(new _.a(this._delegate._repo,this._delegate._path))}get key(){return this.getKey()}get parent(){return this.getParent()}get root(){return this.getRoot()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I{constructor(e,t){this._delegate=e,this.app=t,this.INTERNAL={delete:()=>this._delegate._delete(),forceWebSockets:_.p,forceLongPolling:_.o}}useEmulator(e,t,n={}){Object(_.j)(this._delegate,e,t,n)}ref(e){if(Object(c.Q)("database.ref",0,1,arguments.length),e instanceof k){const t=Object(_.J)(this._delegate,e.toString());return new k(this,t)}{const t=Object(_.I)(this._delegate,e);return new k(this,t)}}refFromURL(e){Object(c.Q)("database.refFromURL",1,1,arguments.length);const t=Object(_.J)(this._delegate,e);return new k(this,t)}goOffline(){return Object(c.Q)("database.goOffline",0,0,arguments.length),Object(_.r)(this._delegate)}goOnline(){return Object(c.Q)("database.goOnline",0,0,arguments.length),Object(_.s)(this._delegate)}}I.ServerValue={TIMESTAMP:Object(_.M)(),increment:e=>Object(_.t)(e)};var S=Object.freeze({__proto__:null,initStandalone:
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function({app:e,url:t,version:n,customAuthImpl:r,namespace:i,nodeAdmin:o=!1}){Object(_.f)(n);const s=new l.c("auth-internal",new l.b("database-standalone"));return s.setComponent(new l.a("auth-internal",()=>r,"PRIVATE")),{instance:new I(Object(_.e)(e,s,void 0,t,o),e),namespace:i}}});
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O=I.ServerValue;var N;(N=v).INTERNAL.registerComponent(new l.a("database-compat",(e,{instanceIdentifier:t})=>{const n=e.getProvider("app-compat").getImmediate(),r=e.getProvider("database").getImmediate({identifier:t});return new I(r,n)},"PUBLIC").setServiceProps({Reference:k,Query:E,Database:I,DataSnapshot:x,enableLogging:_.k,INTERNAL:S,ServerValue:O}).setMultipleInstances(!0)),N.registerVersion("@firebase/database-compat","0.3.4");function P(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}Object.create;Object.create;"function"==typeof SuppressedError&&SuppressedError;function A(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const R=A,j=new c.b("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),D=new h.b("@firebase/auth");function L(e,...t){D.logLevel<=h.a.ERROR&&D.error(`Auth (${u.SDK_VERSION}): ${e}`,...t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M(e,...t){throw H(e,...t)}function q(e,...t){return H(e,...t)}function F(e,t,n){const r=Object.assign(Object.assign({},R()),{[t]:n});return new c.b("auth","Firebase",r).create(t,{appName:e.name})}function H(e,...t){if("string"!=typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return j.create(e,...t)}function U(e,t,...n){if(!e)throw H(t,...n)}function W(e){const t="INTERNAL ASSERTION FAILED: "+e;throw L(t),new Error(t)}function B(e,t){e||W(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function V(){return"http:"===$()||"https:"===$()}function $(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Q{constructor(e,t){this.shortDelay=e,this.longDelay=t,B(t>e,"Short delay should be less than long delay!"),this.isMobile=Object(c.E)()||Object(c.G)()}get(){return"undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&(V()||Object(c.A)()||"connection"in navigator)&&!navigator.onLine?Math.min(5e3,this.shortDelay):this.isMobile?this.longDelay:this.shortDelay}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K(e,t){B(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void W("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void W("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void W("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"},J=new Q(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function Z(e,t,n,r,i={}){return ee(e,i,async()=>{let i={},o={};r&&("GET"===t?o=r:i={body:JSON.stringify(r)});const s=Object(c.K)(Object.assign({key:e.config.apiKey},o)).slice(1),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/json",e.languageCode&&(a["X-Firebase-Locale"]=e.languageCode),G.fetch()(ne(e,e.config.apiHost,n,s),Object.assign({method:t,headers:a,referrerPolicy:"no-referrer"},i))})}async function ee(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},Y),t);try{const t=new re(e),i=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw ie(e,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const t=i.ok?o.errorMessage:o.error.message,[n,s]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw ie(e,"credential-already-in-use",o);if("EMAIL_EXISTS"===n)throw ie(e,"email-already-in-use",o);if("USER_DISABLED"===n)throw ie(e,"user-disabled",o);const a=r[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(s)throw F(e,a,s);M(e,a)}}catch(t){if(t instanceof c.c)throw t;M(e,"network-request-failed",{message:String(t)})}}async function te(e,t,n,r,i={}){const o=await Z(e,t,n,r,i);return"mfaPendingCredential"in o&&M(e,"multi-factor-auth-required",{_serverResponse:o}),o}function ne(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?K(e.config,i):`${e.config.apiScheme}://${i}`}class re{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((e,t)=>{this.timer=setTimeout(()=>t(q(this.auth,"network-request-failed")),J.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ie(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=q(e,t,r);return i.customData._tokenResponse=n,i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function oe(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function se(e){return 1e3*Number(e)}function ae(e){const[t,n,r]=e.split(".");if(void 0===t||void 0===n||void 0===r)return L("JWT malformed, contained fewer than 3 sections"),null;try{const e=Object(c.h)(n);return e?JSON.parse(e):(L("Failed to decode base64 JWT payload"),null)}catch(e){return L("Caught error parsing JWT payload as JSON",null==e?void 0:e.toString()),null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function ce(e,t,n=!1){if(n)return t;try{return await t}catch(t){throw t instanceof c.c&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t)&&e.auth.currentUser===e&&await e.auth.signOut(),t}}class le{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,e)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===(null==e?void 0:e.code)&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=oe(this.lastLoginAt),this.creationTime=oe(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function he(e){var t;const n=e.auth,r=await e.getIdToken(),i=await ce(e,async function(e,t){return Z(e,"POST","/v1/accounts:lookup",t)}(n,{idToken:r}));U(null==i?void 0:i.users.length,n,"internal-error");const o=i.users[0];e._notifyReloadListener(o);const s=(null===(t=o.providerUserInfo)||void 0===t?void 0:t.length)?o.providerUserInfo.map(e=>{var{providerId:t}=e,n=P(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}}):[];const a=(c=e.providerData,l=s,[...c.filter(e=>!l.some(t=>t.providerId===e.providerId)),...l]);var c,l;const u=e.isAnonymous,h=!(e.email&&o.passwordHash||(null==a?void 0:a.length)),d=!!u&&h,p={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new ue(o.createdAt,o.lastLoginAt),isAnonymous:d};Object.assign(e,p)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class de{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){U(e.idToken,"internal-error"),U(void 0!==e.idToken,"internal-error"),U(void 0!==e.refreshToken,"internal-error");const t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):function(e){const t=ae(e);return U(t,"internal-error"),U(void 0!==t.exp,"internal-error"),U(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return U(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:i}=await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function(e,t){const n=await ee(e,{},async()=>{const n=Object(c.K)({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:i}=e.config,o=ne(e,r,"/v1/token","key="+i),s=await e._getAdditionalHeaders();return s["Content-Type"]="application/x-www-form-urlencoded",G.fetch()(o,{method:"POST",headers:s,body:n})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(e,t);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:i}=t,o=new de;return n&&(U("string"==typeof n,"internal-error",{appName:e}),o.refreshToken=n),r&&(U("string"==typeof r,"internal-error",{appName:e}),o.accessToken=r),i&&(U("number"==typeof i,"internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new de,this.toJSON())}_performRefresh(){return W("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pe(e,t){U("string"==typeof e||void 0===e,"internal-error",{appName:t})}class fe{constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,i=P(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new le(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new ue(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await ce(this,this.stsTokenManager.getToken(this.auth,e));return U(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return async function(e,t=!1){const n=Object(c.w)(e),r=await n.getIdToken(t),i=ae(r);U(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const o="object"==typeof i.firebase?i.firebase:void 0,s=null==o?void 0:o.sign_in_provider;return{claims:i,token:r,authTime:oe(se(i.auth_time)),issuedAtTime:oe(se(i.iat)),expirationTime:oe(se(i.exp)),signInProvider:s||null,signInSecondFactor:(null==o?void 0:o.sign_in_second_factor)||null}}(this,e)}reload(){return async function(e){const t=Object(c.w)(e);await he(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}(this)}_assign(e){this!==e&&(U(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(e=>Object.assign({},e)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new fe(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){U(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await he(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await ce(this,async function(e,t){return Z(e,"POST","/v1/accounts:delete",t)}(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,i,o,s,a,c,l;const u=null!==(n=t.displayName)&&void 0!==n?n:void 0,h=null!==(r=t.email)&&void 0!==r?r:void 0,d=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,p=null!==(o=t.photoURL)&&void 0!==o?o:void 0,f=null!==(s=t.tenantId)&&void 0!==s?s:void 0,g=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,m=null!==(c=t.createdAt)&&void 0!==c?c:void 0,v=null!==(l=t.lastLoginAt)&&void 0!==l?l:void 0,{uid:y,emailVerified:_,isAnonymous:b,providerData:w,stsTokenManager:C}=t;U(y&&C,e,"internal-error");const T=de.fromJSON(this.name,C);U("string"==typeof y,e,"internal-error"),pe(u,e.name),pe(h,e.name),U("boolean"==typeof _,e,"internal-error"),U("boolean"==typeof b,e,"internal-error"),pe(d,e.name),pe(p,e.name),pe(f,e.name),pe(g,e.name),pe(m,e.name),pe(v,e.name);const x=new fe({uid:y,auth:e,email:h,emailVerified:_,displayName:u,isAnonymous:b,photoURL:p,phoneNumber:d,tenantId:f,stsTokenManager:T,createdAt:m,lastLoginAt:v});return w&&Array.isArray(w)&&(x.providerData=w.map(e=>Object.assign({},e))),g&&(x._redirectEventId=g),x}static async _fromIdTokenResponse(e,t,n=!1){const r=new de;r.updateFromServerResponse(t);const i=new fe({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await he(i),i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ge=new Map;function me(e){B(e instanceof Function,"Expected a class definition");let t=ge.get(e);return t?(B(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,ge.set(e,t),t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}ve.type="NONE";const ye=ve;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _e(e,t,n){return`firebase:${e}:${t}:${n}`}class be{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=_e(this.userKey,r.apiKey,i),this.fullPersistenceKey=_e("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?fe._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new be(me(ye),e,n);const r=(await Promise.all(t.map(async e=>{if(await e._isAvailable())return e}))).filter(e=>e);let i=r[0]||me(ye);const o=_e(n,e.config.apiKey,e.name);let s=null;for(const n of t)try{const t=await n._get(o);if(t){const r=fe._fromJSON(e,t);n!==i&&(s=r),i=n;break}}catch(e){}const a=r.filter(e=>e._shouldAllowMigration);return i._shouldAllowMigration&&a.length?(i=a[0],s&&await i._set(o,s.toJSON()),await Promise.all(t.map(async e=>{if(e!==i)try{await e._remove(o)}catch(e){}})),new be(i,e,n)):new be(i,e,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function we(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Ee(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Ce(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Ie(t))return"Blackberry";if(Se(t))return"Webos";if(Te(t))return"Safari";if((t.includes("chrome/")||xe(t))&&!t.includes("edge/"))return"Chrome";if(ke(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function Ce(e=Object(c.x)()){return/firefox\//i.test(e)}function Te(e=Object(c.x)()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function xe(e=Object(c.x)()){return/crios\//i.test(e)}function Ee(e=Object(c.x)()){return/iemobile/i.test(e)}function ke(e=Object(c.x)()){return/android/i.test(e)}function Ie(e=Object(c.x)()){return/blackberry/i.test(e)}function Se(e=Object(c.x)()){return/webos/i.test(e)}function Oe(e=Object(c.x)()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function Ne(e=Object(c.x)()){return Oe(e)||ke(e)||Se(e)||Ie(e)||/windows phone/i.test(e)||Ee(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Pe(e,t=[]){let n;switch(e){case"Browser":n=we(Object(c.x)());break;case"Worker":n=`${we(Object(c.x)())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${u.SDK_VERSION}/${r}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ae(e,t){return Z(e,"GET","/v2/recaptchaConfig",X(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Re(e){return void 0!==e&&void 0!==e.enterprise}class je{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,void 0===e.recaptchaKey)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(e=>"EMAIL_PASSWORD_PROVIDER"===e.provider&&"OFF"!==e.enforcementState)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function De(e){return new Promise((t,n)=>{const r=document.createElement("script");var i,o;r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=q("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",(null!==(o=null===(i=document.getElementsByTagName("head"))||void 0===i?void 0:i[0])&&void 0!==o?o:document).appendChild(r)})}function Le(e){return`__${e}${Math.floor(1e6*Math.random())}`}class Me{constructor(e){this.type="recaptcha-enterprise",this.auth=Ue(e)}async verify(e="verify",t=!1){function n(t,n,r){const i=window.grecaptcha;Re(i)?i.enterprise.ready(()=>{i.enterprise.execute(t,{action:e}).then(e=>{n(e)}).catch(()=>{n("NO_RECAPTCHA")})}):r(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((e,r)=>{(async function(e){if(!t){if(null==e.tenantId&&null!=e._agentRecaptchaConfig)return e._agentRecaptchaConfig.siteKey;if(null!=e.tenantId&&void 0!==e._tenantRecaptchaConfigs[e.tenantId])return e._tenantRecaptchaConfigs[e.tenantId].siteKey}return new Promise(async(t,n)=>{Ae(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(r=>{if(void 0!==r.recaptchaKey){const n=new je(r);return null==e.tenantId?e._agentRecaptchaConfig=n:e._tenantRecaptchaConfigs[e.tenantId]=n,t(n.siteKey)}n(new Error("recaptcha Enterprise site key undefined"))}).catch(e=>{n(e)})})})(this.auth).then(i=>{if(!t&&Re(window.grecaptcha))n(i,e,r);else{if("undefined"==typeof window)return void r(new Error("RecaptchaVerifier is only supported in browser"));De("https://www.google.com/recaptcha/enterprise.js?render="+i).then(()=>{n(i,e,r)}).catch(e=>{r(e)})}}).catch(e=>{r(e)})})}}async function qe(e,t,n,r=!1){const i=new Me(e);let o;try{o=await i.verify(n)}catch(e){o=await i.verify(n,!0)}const s=Object.assign({},t);return r?Object.assign(s,{captchaResp:o}):Object.assign(s,{captchaResponse:o}),Object.assign(s,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(s,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),s}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=t=>new Promise((n,r)=>{try{n(e(t))}catch(e){r(e)}});n.onAbort=t,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(e){t.reverse();for(const e of t)try{e()}catch(e){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null==e?void 0:e.message})}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He{constructor(e,t,n,r){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new We(this),this.idTokenSubscription=new We(this),this.beforeStateQueue=new Fe(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=j,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=me(t)),this._initializationPromise=this.queue(async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await be.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(e){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUser(e){var t;const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,o=null==r?void 0:r._redirectEventId,s=await this.tryRedirectSignIn(e);n&&n!==o||!(null==s?void 0:s.user)||(r=s.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(e){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(e))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return U(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(e){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await he(e)}catch(e){if("auth/network-request-failed"!==(null==e?void 0:e.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?Object(c.w)(e):null;return t&&U(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&U(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(me(e))})}async initializeRecaptchaConfig(){const e=await Ae(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),t=new je(e);if(null==this.tenantId?this._agentRecaptchaConfig=t:this._tenantRecaptchaConfigs[this.tenantId]=t,t.emailPasswordEnabled){new Me(this).verify()}}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new c.b("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&me(e)||this._popupRedirectResolver;U(t,this,"argument-error"),this.redirectPersistenceManager=await be.create(this,[me(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue(async()=>{}),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const i="function"==typeof t?t:t.next.bind(t),o=this._isInitialized?Promise.resolve():this._initializationPromise;return U(o,this,"internal-error"),o.then(()=>i(this.currentUser)),"function"==typeof t?e.addObserver(t,n,r):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return U(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Pe(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());n&&(t["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(t["X-Firebase-AppCheck"]=r),t}async _getAppCheckToken(){var e;const t=await(null===(e=this.appCheckServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getToken());return(null==t?void 0:t.error)&&function(e,...t){D.logLevel<=h.a.WARN&&D.warn(`Auth (${u.SDK_VERSION}): ${e}`,...t)}("Error while retrieving App Check token: "+t.error),null==t?void 0:t.token}}function Ue(e){return Object(c.w)(e)}class We{constructor(e){this.auth=e,this.observer=null,this.addObserver=Object(c.m)(e=>this.observer=e)}get next(){return U(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Be(e,t,n){const r=Ue(e);U(r._canInitEmulator,r,"emulator-config-failed"),U(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(null==n?void 0:n.disableWarnings),o=ze(t),{host:s,port:a}=function(e){const t=ze(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const e=i[1];return{host:e,port:Ve(r.substr(e.length+1))}}{const[e,t]=r.split(":");return{host:e,port:Ve(t)}}}(t),c=null===a?"":":"+a;r.config.emulator={url:`${o}//${s}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:s,port:a,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||function(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */()}function ze(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Ve(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}class $e{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return W("not implemented")}_getIdTokenResponse(e){return W("not implemented")}_linkToIdToken(e,t){return W("not implemented")}_getReauthenticationResolver(e){return W("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qe(e,t){return Z(e,"POST","/v1/accounts:update",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Ke(e,t){return te(e,"POST","/v1/accounts:signInWithPassword",X(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ge extends $e{constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new Ge(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new Ge(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){var t;switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(null===(t=e._getRecaptchaConfig())||void 0===t?void 0:t.emailPasswordEnabled){const t=await qe(e,n,"signInWithPassword");return Ke(e,t)}return Ke(e,n).catch(async t=>{if("auth/missing-recaptcha-token"===t.code){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const t=await qe(e,n,"signInWithPassword");return Ke(e,t)}return Promise.reject(t)});case"emailLink":
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return async function(e,t){return te(e,"POST","/v1/accounts:signInWithEmailLink",X(e,t))}(e,{email:this._email,oobCode:this._password});default:M(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return Qe(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return async function(e,t){return te(e,"POST","/v1/accounts:signInWithEmailLink",X(e,t))}(e,{idToken:t,email:this._email,oobCode:this._password});default:M(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ye(e,t){return te(e,"POST","/v1/accounts:signInWithIdp",X(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je extends $e{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Je(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):M("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,i=P(t,["providerId","signInMethod"]);if(!n||!r)return null;const o=new Je(n,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){return Ye(e,this.buildRequest())}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Ye(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Ye(e,t)}buildRequest(){const e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Object(c.K)(t)}return e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xe={USER_NOT_FOUND:"user-not-found"};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ze extends $e{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new Ze({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new Ze({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return async function(e,t){return te(e,"POST","/v1/accounts:signInWithPhoneNumber",X(e,t))}(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return async function(e,t){const n=await te(e,"POST","/v1/accounts:signInWithPhoneNumber",X(e,t));if(n.temporaryProof)throw ie(e,"account-exists-with-different-credential",n);return n}(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return async function(e,t){return te(e,"POST","/v1/accounts:signInWithPhoneNumber",X(e,Object.assign(Object.assign({},t),{operation:"REAUTH"})),Xe)}(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:r}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"==typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}=e;return n||t||r||i?new Ze({verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(e){var t,n,r,i,o,s;const a=Object(c.L)(Object(c.r)(e)),l=null!==(t=a.apiKey)&&void 0!==t?t:null,u=null!==(n=a.oobCode)&&void 0!==n?n:null,h=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(r=a.mode)&&void 0!==r?r:null);U(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=null!==(i=a.continueUrl)&&void 0!==i?i:null,this.languageCode=null!==(o=a.languageCode)&&void 0!==o?o:null,this.tenantId=null!==(s=a.tenantId)&&void 0!==s?s:null}static parseLink(e){const t=function(e){const t=Object(c.L)(Object(c.r)(e)).link,n=t?Object(c.L)(Object(c.r)(t)).deep_link_id:null,r=Object(c.L)(Object(c.r)(e)).deep_link_id;return(r?Object(c.L)(Object(c.r)(r)).link:null)||r||n||t||e}(e);try{return new et(t)}catch(e){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class tt{constructor(){this.providerId=tt.PROVIDER_ID}static credential(e,t){return Ge._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=et.parseLink(t);return U(n,"argument-error"),Ge._fromEmailAndCode(e,n.code,n.tenantId)}}tt.PROVIDER_ID="password",tt.EMAIL_PASSWORD_SIGN_IN_METHOD="password",tt.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class nt{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt extends nt{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class it extends rt{constructor(){super("facebook.com")}static credential(e){return Je._fromParams({providerId:it.PROVIDER_ID,signInMethod:it.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return it.credentialFromTaggedObject(e)}static credentialFromError(e){return it.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return it.credential(e.oauthAccessToken)}catch(e){return null}}}it.FACEBOOK_SIGN_IN_METHOD="facebook.com",it.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ot extends rt{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Je._fromParams({providerId:ot.PROVIDER_ID,signInMethod:ot.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return ot.credentialFromTaggedObject(e)}static credentialFromError(e){return ot.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return ot.credential(t,n)}catch(e){return null}}}ot.GOOGLE_SIGN_IN_METHOD="google.com",ot.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class st extends rt{constructor(){super("github.com")}static credential(e){return Je._fromParams({providerId:st.PROVIDER_ID,signInMethod:st.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return st.credentialFromTaggedObject(e)}static credentialFromError(e){return st.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return st.credential(e.oauthAccessToken)}catch(e){return null}}}st.GITHUB_SIGN_IN_METHOD="github.com",st.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class at extends rt{constructor(){super("twitter.com")}static credential(e,t){return Je._fromParams({providerId:at.PROVIDER_ID,signInMethod:at.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return at.credentialFromTaggedObject(e)}static credentialFromError(e){return at.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return at.credential(t,n)}catch(e){return null}}}at.TWITTER_SIGN_IN_METHOD="twitter.com",at.PROVIDER_ID="twitter.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ct{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const i=await fe._fromIdTokenResponse(e,n,r),o=lt(n);return new ct({user:i,providerId:o,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=lt(n);return new ct({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function lt(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ut extends c.c{constructor(e,t,n,r){var i;super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,ut.prototype),this.customData={appName:e.name,tenantId:null!==(i=e.tenantId)&&void 0!==i?i:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,r){return new ut(e,t,n,r)}}function ht(e,t,n,r){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(n=>{if("auth/multi-factor-auth-required"===n.code)throw ut._fromErrorAndOperation(e,n,t,r);throw n})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dt(e,t,n=!1){const r=await ce(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return ct._forOperation(e,"link",r)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function pt(e,t,n=!1){const{auth:r}=e;try{const i=await ce(e,ht(r,"reauthenticate",t,e),n);U(i.idToken,r,"internal-error");const o=ae(i.idToken);U(o,r,"internal-error");const{sub:s}=o;return U(e.uid===s,r,"user-mismatch"),ct._forOperation(e,"reauthenticate",i)}catch(e){throw"auth/user-not-found"===(null==e?void 0:e.code)&&M(r,"user-mismatch"),e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ft(e,t,n=!1){const r=await ht(e,"signIn",t),i=await ct._fromIdTokenResponse(e,"signIn",r);return n||await e._updateCurrentUser(i.user),i}new WeakMap;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class gt{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem("__sak","1"),this.storage.removeItem("__sak"),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt extends gt{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const e=Object(c.x)();return Te(e)||Oe(e)}()&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),this.fallbackToPolling=Ne(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys((e,t,n)=>{this.notifyListeners(e,n)});const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(e.newValue!==r)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},i=this.storage.getItem(n);Object(c.C)()&&10===document.documentMode&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,10):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)})},1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}mt.type="LOCAL";const vt=mt;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt extends gt{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}yt.type="SESSION";const _t=yt;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class bt{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(t=>t.isListeningto(e));if(t)return t;const n=new bt(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:i}=t.data,o=this.handlersMap[r];if(!(null==o?void 0:o.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const s=Array.from(o).map(async e=>e(t.origin,i)),a=await function(e){return Promise.all(e.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(e){return{fulfilled:!1,reason:e}}}))}(s);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function wt(e="",t=10){let n="";for(let e=0;e<t;e++)n+=Math.floor(10*Math.random());return e+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */bt.receivers=[];class Ct{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((s,a)=>{const c=wt("",20);r.port1.start();const l=setTimeout(()=>{a(new Error("unsupported_event"))},n);o={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===c)switch(t.data.status){case"ack":clearTimeout(l),i=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),s(t.data.response);break;default:clearTimeout(l),clearTimeout(i),a(new Error("invalid_response"))}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tt(){return window}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function xt(){return void 0!==Tt().WorkerGlobalScope&&"function"==typeof Tt().importScripts}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Et="firebaseLocalStorageDb";class kt{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function It(e,t){return e.transaction(["firebaseLocalStorage"],t?"readwrite":"readonly").objectStore("firebaseLocalStorage")}function St(){const e=indexedDB.open(Et,1);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const t=e.result;try{t.createObjectStore("firebaseLocalStorage",{keyPath:"fbase_key"})}catch(e){n(e)}}),e.addEventListener("success",async()=>{const n=e.result;n.objectStoreNames.contains("firebaseLocalStorage")?t(n):(n.close(),await function(){const e=indexedDB.deleteDatabase(Et);return new kt(e).toPromise()}(),t(await St()))})})}async function Ot(e,t,n){const r=It(e,!0).put({fbase_key:t,value:n});return new kt(r).toPromise()}function Nt(e,t){const n=It(e,!0).delete(t);return new kt(n).toPromise()}class Pt{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db||(this.db=await St()),this.db}async _withRetries(e){let t=0;for(;;)try{const t=await this._openDb();return await e(t)}catch(e){if(t++>3)throw e;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return xt()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=bt._getInstance(xt()?self:null),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(e){return null}}(),!this.activeServiceWorker)return;this.sender=new Ct(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){var t;if(this.sender&&this.activeServiceWorker&&((null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await St();return await Ot(e,"__sak","1"),await Nt(e,"__sak"),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Ot(n,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(t=>async function(e,t){const n=It(e,!1).get(t),r=await new kt(n).toPromise();return void 0===r?null:r.value}(t,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Nt(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(e=>{const t=It(e,!1).getAll();return new kt(t).toPromise()});if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const e of Object.keys(this.localCache))this.localCache[e]&&!n.has(e)&&(this.notifyListeners(e,null),t.push(e));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}Pt.type="LOCAL";const At=Pt;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Le("rcb"),new Q(3e4,6e4);async function Rt(e,t,n){var r;const i=await n.verify();try{let o;if(U("string"==typeof i,e,"argument-error"),U("recaptcha"===n.type,e,"argument-error"),o="string"==typeof t?{phoneNumber:t}:t,"session"in o){const t=o.session;if("phoneNumber"in o){U("enroll"===t.type,e,"internal-error");return(await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e,t){return Z(e,"POST","/v2/accounts/mfaEnrollment:start",X(e,t))}(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:o.phoneNumber,recaptchaToken:i}})).phoneSessionInfo.sessionInfo}{U("signin"===t.type,e,"internal-error");const n=(null===(r=o.multiFactorHint)||void 0===r?void 0:r.uid)||o.multiFactorUid;U(n,e,"missing-multi-factor-info");return(await function(e,t){return Z(e,"POST","/v2/accounts/mfaSignIn:start",X(e,t))}(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:i}})).phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await async function(e,t){return Z(e,"POST","/v1/accounts:sendVerificationCode",X(e,t))}(e,{phoneNumber:o.phoneNumber,recaptchaToken:i});return t}}finally{n._reset()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class jt{constructor(e){this.providerId=jt.PROVIDER_ID,this.auth=Ue(e)}verifyPhoneNumber(e,t){return Rt(this.auth,e,Object(c.w)(t))}static credential(e,t){return Ze._fromVerification(e,t)}static credentialFromResult(e){const t=e;return jt.credentialFromTaggedObject(t)}static credentialFromError(e){return jt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?Ze._fromTokenResponse(t,n):null}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Dt(e,t){return t?me(t):(U(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */jt.PROVIDER_ID="phone",jt.PHONE_SIGN_IN_METHOD="phone";class Lt extends $e{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ye(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Ye(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Ye(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Mt(e){return ft(e.auth,new Lt(e),e.bypassAuthState)}function qt(e){const{auth:t,user:n}=e;return U(n,t,"internal-error"),pt(n,new Lt(e),e.bypassAuthState)}async function Ft(e){const{auth:t,user:n}=e;return U(n,t,"internal-error"),dt(n,new Lt(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht{constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(e){this.reject(e)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:o,type:s}=e;if(o)return void this.reject(o);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(s)(a))}catch(e){this.reject(e)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Mt;case"linkViaPopup":case"linkViaRedirect":return Ft;case"reauthViaPopup":case"reauthViaRedirect":return qt;default:M(this.auth,"internal-error")}}resolve(e){B(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){B(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ut=new Q(2e3,1e4);class Wt extends Ht{constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,Wt.currentPopupAction&&Wt.currentPopupAction.cancel(),Wt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return U(e,this.auth,"internal-error"),e}async onExecution(){B(1===this.filter.length,"Popup operations only handle one event");const e=wt();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(e=>{this.reject(e)}),this.resolver._isIframeWebStorageSupported(this.auth,e=>{e||this.reject(q(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(q(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Wt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(q(this.auth,"popup-closed-by-user"))},8e3):this.pollId=window.setTimeout(e,Ut.get())};e()}}Wt.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Bt=new Map;class zt extends Ht{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=Bt.get(this.auth._key());if(!e){try{const t=await async function(e,t){const n=Qt(t),r=$t(e);if(!await r._isAvailable())return!1;const i="true"===await r._get(n);return await r._remove(n),i}(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(t)}catch(t){e=()=>Promise.reject(t)}Bt.set(this.auth._key(),e)}return this.bypassAuthState||Bt.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}function Vt(e,t){Bt.set(e._key(),t)}function $t(e){return me(e._redirectPersistence)}function Qt(e){return _e("pendingRedirect",e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kt(e,t,n=!1){const r=Ue(e),i=Dt(r,t),o=new zt(r,i,n),s=await o.execute();return s&&!n&&(delete s.user._redirectEventId,await r._persistUserIfCurrent(s.user),await r._setRedirectUser(null,t)),s}class Gt{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Jt(e);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!Jt(e)){const r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(q(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(Yt(e))}saveEventToCache(e){this.cachedEventUids.add(Yt(e)),this.lastProcessedEventTime=Date.now()}}function Yt(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(e=>e).join("-")}function Jt({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null==t?void 0:t.code)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Xt=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Zt=/^https?/;async function en(e){if(e.config.emulator)return;const{authorizedDomains:t}=await async function(e,t={}){return Z(e,"GET","/v1/projects",t)}(e);for(const e of t)try{if(tn(e))return}catch(e){}M(e,"unauthorized-domain")}function tn(e){const t=z(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const i=new URL(e);return""===i.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!Zt.test(n))return!1;if(Xt.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nn=new Q(3e4,6e4);function rn(){const e=Tt().___jsl;if(null==e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let t=0;t<e.CP.length;t++)e.CP[t]=null}let on=null;function sn(e){return on=on||function(e){return new Promise((t,n)=>{var r,i,o;function s(){rn(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{rn(),n(q(e,"network-request-failed"))},timeout:nn.get()})}if(null===(i=null===(r=Tt().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(o=Tt().gapi)||void 0===o?void 0:o.load)){const t=Le("iframefcb");return Tt()[t]=()=>{gapi.load?s():n(q(e,"network-request-failed"))},De("https://apis.google.com/js/api.js?onload="+t).catch(e=>n(e))}s()}}).catch(e=>{throw on=null,e})}(e),on}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const an=new Q(5e3,15e3),cn={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ln=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function un(e){const t=e.config;U(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?K(t,"emulator/auth/iframe"):`https://${e.config.authDomain}/__/auth/iframe`,r={apiKey:t.apiKey,appName:e.name,v:u.SDK_VERSION},i=ln.get(e.config.apiHost);i&&(r.eid=i);const o=e._getFrameworks();return o.length&&(r.fw=o.join(",")),`${n}?${Object(c.K)(r).slice(1)}`}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const hn={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class dn{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function pn(e,t,n,r=500,i=600){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),s=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},hn),{width:r.toString(),height:i.toString(),top:o,left:s}),u=Object(c.x)().toLowerCase();n&&(a=xe(u)?"_blank":n),Ce(u)&&(t=t||"http://localhost",l.scrollbars="yes");const h=Object.entries(l).reduce((e,[t,n])=>`${e}${t}=${n},`,"");if(function(e=Object(c.x)()){var t;return Oe(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(u)&&"_self"!==a)return function(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t||"",a),new dn(null);const d=window.open(t||"",a,h);U(d,e,"popup-blocked");try{d.focus()}catch(e){}return new dn(d)}const fn=encodeURIComponent("fac");async function gn(e,t,n,r,i,o){U(e.config.authDomain,e,"auth-domain-config-required"),U(e.config.apiKey,e,"invalid-api-key");const s={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:u.SDK_VERSION,eventId:i};if(t instanceof nt){t.setDefaultLanguage(e.languageCode),s.providerId=t.providerId||"",Object(c.B)(t.getCustomParameters())||(s.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(o||{}))s[e]=t}if(t instanceof rt){const e=t.getScopes().filter(e=>""!==e);e.length>0&&(s.scopes=e.join(","))}e.tenantId&&(s.tid=e.tenantId);const a=s;for(const e of Object.keys(a))void 0===a[e]&&delete a[e];const l=await e._getAppCheckToken(),h=l?`#${fn}=${encodeURIComponent(l)}`:"";return`${function({config:e}){if(!e.emulator)return`https://${e.authDomain}/__/auth/handler`;return K(e,"emulator/auth/handler")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)}?${Object(c.K)(a).slice(1)}${h}`}const mn=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=_t,this._completeRedirectFn=Kt,this._overrideRedirectResult=Vt}async _openPopup(e,t,n,r){var i;B(null===(i=this.eventManagers[e._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");return pn(e,await gn(e,t,n,z(),r),wt())}async _openRedirect(e,t,n,r){await this._originValidation(e);return function(e){Tt().location.href=e}(await gn(e,t,n,z(),r)),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(B(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch(()=>{delete this.eventManagers[t]}),n}async initAndGetManager(e){const t=await async function(e){const t=await sn(e),n=Tt().gapi;return U(n,e,"internal-error"),t.open({where:document.body,url:un(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:cn,dontclear:!0},t=>new Promise(async(n,r)=>{await t.restyle({setHideOnLeave:!1});const i=q(e,"network-request-failed"),o=Tt().setTimeout(()=>{r(i)},an.get());function s(){Tt().clearTimeout(o),n(t)}t.ping(s).then(s,()=>{r(i)})}))}(e),n=new Gt(e);return t.register("authEvent",t=>{U(null==t?void 0:t.authEvent,e,"invalid-auth-event");return{status:n.onEvent(t.authEvent)?"ACK":"ERROR"}},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send("webStorageSupport",{type:"webStorageSupport"},n=>{var r;const i=null===(r=null==n?void 0:n[0])||void 0===r?void 0:r.webStorageSupport;void 0!==i&&t(!!i),M(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=en(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Ne()||Te()||Oe()}};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class vn{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(e)}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(t=>{e((null==t?void 0:t.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){U(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const yn=Object(c.v)("authIdTokenMaxAge")||300;let _n=null;var bn;bn="Browser",Object(u._registerComponent)(new l.a("auth",(e,{options:t})=>{const n=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:s}=n.options;U(o&&!o.includes(":"),"invalid-api-key",{appName:n.name});const a={apiKey:o,authDomain:s,clientPlatform:bn,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Pe(bn)},c=new He(n,r,i,a);return function(e,t){const n=(null==t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(me);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null==t?void 0:t.popupRedirectResolver)}(c,t),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,n)=>{e.getProvider("auth-internal").initialize()})),Object(u._registerComponent)(new l.a("auth-internal",e=>(e=>new vn(e))(Ue(e.getProvider("auth").getImmediate())),"PRIVATE").setInstantiationMode("EXPLICIT")),Object(u.registerVersion)("@firebase/auth","0.23.2",function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(bn)),Object(u.registerVersion)("@firebase/auth","0.23.2","esm2017");!function(e=Object(u.getApp)()){const t=Object(u._getProvider)(e,"auth");if(t.isInitialized())return t.getImmediate();const n=function(e,t){const n=Object(u._getProvider)(e,"auth");if(n.isInitialized()){const e=n.getImmediate(),r=n.getOptions();if(Object(c.o)(r,null!=t?t:{}))return e;M(e,"already-initialized")}return n.initialize({options:t})}(e,{popupRedirectResolver:mn,persistence:[At,vt,_t]}),r=Object(c.v)("authTokenSyncURL");if(r){const e=(i=r,async e=>{const t=e&&await e.getIdTokenResult(),n=t&&((new Date).getTime()-Date.parse(t.issuedAtTime))/1e3;if(n&&n>yn)return;const r=null==t?void 0:t.token;_n!==r&&(_n=r,await fetch(i,{method:r?"POST":"DELETE",headers:r?{Authorization:"Bearer "+r}:{}}))});!function(e,t,n){Object(c.w)(e).beforeAuthStateChanged(t,n)}(n,e,()=>e(n.currentUser)),function(e,t,n,r){Object(c.w)(e).onIdTokenChanged(t,n,r)}(n,t=>e(t))}var i;const o=Object(c.t)("auth");o&&Be(n,"http://"+o)}(v.initializeApp({apiKey:"AIzaSyBAdav54UI0MV2XeclR9Yzzmr6zmTfMf54",authDomain:"well-speak.firebaseapp.com",databaseURL:"https://well-speak-default-rtdb.firebaseio.com",projectId:"well-speak",storageBucket:"well-speak.appspot.com",messagingSenderId:"586789207353",appId:"1:586789207353:web:197c62ca0ce8ff10577ce8",measurementId:"G-KF5SHD3MYL"}));var wn=v.database().ref().child("collections");console.log(wn);var Cn,Tn=new s.a(".step",1,2,{2:Pn},500),xn=-1,En=new Date,kn=!1,In=!1,Sn=window.speechSynthesis,On=Sn.getVoices().find((function(e){return"zh-TW"===e.lang}));function Nn(){Pn(),i()("#input").val(""),setTimeout((function(){Rn(["#answer","#change"],["#replay","#intro"])}),0),i()("#input").prop("disabled",!1)}function Pn(){for(var e=xn;xn==e;)e=Math.floor(Math.random()*a.length);xn=e,i()("#question").fadeOut(500,(function(){i()(this).text(a[xn]).fadeIn(500)}))}function An(e){Sn.cancel(),kn=!0;var t=new SpeechSynthesisUtterance(e);t.lang="zh-TW",t.text=e,t.rate=.6,t.pitch=.3,t.voice=On,console.log("sayning",t),Sn.speak(t),t.onend=function(e){kn=!1},En=new Date}function Rn(e,t){for(var n=0;n<e.length;n++)i()(e[n]).css("visibility","hidden"),i()(e[n]).css("display","inline");for(var r=0;r<t.length;r++)i()(t[r]).css("display","none");for(var o=0;o<e.length;o++)i()(e[o]).css("display","none"),i()(e[o]).css("visibility","visible"),i()(e[o]).css("display","inline")}i()((function(){i()("#start").on("click",(function(){Tn.showNext(),i()("#answer").prop("disabled",!0),i()("#background").animate({opacity:.8},1e3),An("")})),i()("#answer").on("click",(function(){var e,t;i()("#input").prop("disabled",!0),i()("#answer").prop("disabled",!0),i()("#answer").css("visibility","hidden"),i()("#change").css("visibility","hidden"),e=i()("#input").val(),t=wn.push(e),console.log(t),t.set({text:e,date:(new Date).toString(),question:xn}),Rn(["#replay","#intro"],["#answer","#change"])})),i()("#replay").on("click",(function(){Nn()})),i()("#change").on("click",(function(){Nn()})),i()("#intro").on("click",(function(){Tn.showNext()})),i()("#previmg").on("click",(function(){Nn(),Tn.showPrev()})),i()("#input").on("keyup",(function(){0!=i()(this).val().length?i()("#answer").prop("disabled",!1):i()("#answer").prop("disabled",!0)}))})),setInterval((function(){!function(){0;if((new Date-En)/1e3>600){console.log("gogo!");var e=Object.keys(Cn).length;console.log("len ",e);var t=[];for(var n in Cn)Date.parse(Cn[n].date)>17224416e5&&t.push(n);!function(e){for(var t=e.length-1;t>0;t--){var n=Math.floor(Math.random()*(t+1)),r=[e[n],e[t]];e[t]=r[0],e[n]=r[1]}}(t);for(var r=0;r<5&&!kn;r++)console.log(kn,Cn[t[r]]),An(Cn[t[r]].text)}}()}),6e5),wn.on("value",(function(e){var t=(Cn=e.val())[Object.keys(Cn).pop()];null!=t.text&&(In&&An(t.text),t,In=!0)}))}]);