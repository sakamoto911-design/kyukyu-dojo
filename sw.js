/* Replaced by build-pwa.mjs. Only this app's static assets are cached. */
const CACHE_NAME='dojo-'+new URL(self.registration.scope).pathname+'-c339c07eabb0cc82';
const ASSETS=["index.html","style.css","app.js","engine.js","case-data.js","pwa.js","manifest.webmanifest","vendor-qrcode.js","icons-icon-192.png","icons-icon-512.png","icons-icon-maskable.png","icons-apple-touch-icon.png","assets-patients-ACS-001-scene-photo.png","assets-patients-HF-001-scene-photo.png","assets-patients-ABD-001-scene-photo.png","assets-patients-HYPO-001-scene-photo.png","assets-patients-STROKE-001-scene-photo.png"];
const assetURLs=ASSETS.map(p=>new URL(p,self.registration.scope).href);
self.addEventListener('install',event=>event.waitUntil((async()=>{
  const cache=await caches.open(CACHE_NAME);
  try {await cache.addAll(assetURLs.map(url=>new Request(url,{cache:'reload'})));}
  catch(error){await caches.delete(CACHE_NAME);throw error;}
})()));
self.addEventListener('activate',event=>event.waitUntil((async()=>{
  for(const name of await caches.keys())if(name.startsWith('dojo-'+new URL(self.registration.scope).pathname+'-')&&name!==CACHE_NAME)await caches.delete(name);
  await self.clients.claim();
})()));
self.addEventListener('message',event=>{
  if(event.data?.type==='SKIP_WAITING')self.skipWaiting();
  if(event.data?.type==='CACHE_STATUS'&&event.ports[0])event.waitUntil((async()=>{
    const cache=await caches.open(CACHE_NAME);
    const complete=(await Promise.all(assetURLs.map(url=>cache.match(url)))).every(Boolean);
    event.ports[0].postMessage({complete,assetCount:assetURLs.length});
  })());
});
self.addEventListener('fetch',event=>{
  const url=new URL(event.request.url);
  if(event.request.method!=='GET'||url.origin!==self.location.origin)return;
  const bare=url.origin+url.pathname;
  const home=new URL('index.html',self.registration.scope).href;
  const root=self.registration.scope;
  const key=bare===root?home:bare;
  if(!assetURLs.includes(key))return;
  event.respondWith((async()=>{
    const cache=await caches.open(CACHE_NAME),cached=await cache.match(key);
    if(cached)return cached;
    /* Static file recovery only; never sends a training record. */
    const response=await fetch(event.request);
    if(response.ok)await cache.put(key,response.clone());
    return response;
  })());
});
