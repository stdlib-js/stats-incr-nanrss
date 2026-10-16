// Copyright (c) 2026 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function n(n){return n!=n}function r(n){return Math.abs(n)}function t(){var n=function(){var n,t,u,e,f,i,o;return n=0,t=0,e=0,function(a){return 0===arguments.length?u?n+e+t:null:(u=!0,i=n+a,o=r(n)>=r(a)?n-i+a:a-i+n,n=i,i=e+o,f=r(e)>=r(o)?e-i+o:o-i+e,n+(e=i)+(t+=f))}}();return function(r,t){var u;if(0===arguments.length)return n();return n((u=t-r)*u)}}function u(){var r=t();return function(t,u){if(0===arguments.length||n(t)||n(u))return r();return r(t,u)}}export{u as default};
//# sourceMappingURL=mod.js.map
