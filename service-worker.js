"use strict";var precacheConfig=[["./07b7b2a75577d37f9a79f374682b606c.jpg","07b7b2a75577d37f9a79f374682b606c"],["./1c47e68876fcd7c2af3657d53dd23d89.jpg","1c47e68876fcd7c2af3657d53dd23d89"],["./23e2c36c8adbaaa186fc0025753d85f5.jpg","23e2c36c8adbaaa186fc0025753d85f5"],["./3638003cddf54868299a980089f5c373.jpg","3638003cddf54868299a980089f5c373"],["./5b5b5d70619e40db86d240de5e559459.jpg","5b5b5d70619e40db86d240de5e559459"],["./73383293ef46a6cd1d51e45579ebf507.jpg","73383293ef46a6cd1d51e45579ebf507"],["./8d929b6490bff6a286dc06d71313b760.jpg","8d929b6490bff6a286dc06d71313b760"],["./bundle.js","ffe67f49a984a3b797b9c3fe93599b82"],["./dec5cc5caa65ecb6346f968a442f6ac0.jpg","dec5cc5caa65ecb6346f968a442f6ac0"],["./e1aadaac68650bfe00f3fa35c7b4c533.jpg","e1aadaac68650bfe00f3fa35c7b4c533"],["./favicon.ico","37b4976d2857a1dfb54b758ef28e4f3e"],["./index.html","c9d5f8d45936cd4ca119b6f74820183c"],["./logo.png","b891f243c2a0d72b2c6a1263f783b138"],["./manifest.json","6c3cb7c9ef295fbbd35f584ae4a003e7"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,n){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=n),t.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(n){return new Response(n,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,n,t,a){var r=new URL(e);return a&&r.pathname.match(a)||(r.search+=(r.search?"&":"")+encodeURIComponent(n)+"="+encodeURIComponent(t)),r.toString()},isPathWhitelisted=function(e,n){if(0===e.length)return!0;var t=new URL(n).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,n){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return n.every(function(n){return!n.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var n=e[0],t=e[1],a=new URL(n,self.location),r=createCacheKey(a,hashParamName,t,/\.\w{8}\./);return[a.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(n){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!n.has(t)){var a=new Request(t,{credentials:"same-origin"});return fetch(a).then(function(n){if(!n.ok)throw new Error("Request for "+t+" returned a response with status "+n.status);return cleanResponse(n).then(function(n){return e.put(t,n)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var n=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!n.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var n,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(n=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,"index.html"),n=urlsToCacheKeys.has(t));!n&&"navigate"===e.request.mode&&isPathWhitelisted([],e.request.url)&&(t=new URL("/index.html",self.location).toString(),n=urlsToCacheKeys.has(t)),n&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(n){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,n),fetch(e.request)}))}});