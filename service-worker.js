"use strict";var precacheConfig=[["./07b7b2a75577d37f9a79f374682b606c.jpg","07b7b2a75577d37f9a79f374682b606c"],["./1c47e68876fcd7c2af3657d53dd23d89.jpg","1c47e68876fcd7c2af3657d53dd23d89"],["./23e2c36c8adbaaa186fc0025753d85f5.jpg","23e2c36c8adbaaa186fc0025753d85f5"],["./3638003cddf54868299a980089f5c373.jpg","3638003cddf54868299a980089f5c373"],["./5b5b5d70619e40db86d240de5e559459.jpg","5b5b5d70619e40db86d240de5e559459"],["./73383293ef46a6cd1d51e45579ebf507.jpg","73383293ef46a6cd1d51e45579ebf507"],["./8d929b6490bff6a286dc06d71313b760.jpg","8d929b6490bff6a286dc06d71313b760"],["./bundle.js","c3f53e09fef6c9fdf4118587467f1946"],["./dec5cc5caa65ecb6346f968a442f6ac0.jpg","dec5cc5caa65ecb6346f968a442f6ac0"],["./e1aadaac68650bfe00f3fa35c7b4c533.jpg","e1aadaac68650bfe00f3fa35c7b4c533"],["./favicon.ico","37b4976d2857a1dfb54b758ef28e4f3e"],["./index.html","1267c7900ea971a3dfa69a2d5e4b69f0"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,n,a){var r=new URL(e);return a&&r.pathname.match(a)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,t){var n=new URL(e);return n.hash="",n.search=n.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),n.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],a=new URL(t,self.location),r=createCacheKey(a,hashParamName,n,/\.\w{8}\./);return[a.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(n){if(!t.has(n)){var a=new Request(n,{credentials:"same-origin"});return fetch(a).then(function(t){if(!t.ok)throw new Error("Request for "+n+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(n,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(n){return Promise.all(n.map(function(n){if(!t.has(n.url))return e.delete(n)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,n=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,"index.html"),t=urlsToCacheKeys.has(n));!t&&"navigate"===e.request.mode&&isPathWhitelisted([],e.request.url)&&(n=new URL("/index.html",self.location).toString(),t=urlsToCacheKeys.has(n)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});