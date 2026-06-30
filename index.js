import{a as g,S as w,i as c}from"./assets/vendor-CucEYOFD.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const v="56458630-d01f51161f93b41d033a282d5",m="https://pixabay.com/api/";g.defaults.baseURL=m;async function y(s,o=1){const t={key:v,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,page:o,per_page:15};return await g.get(m,{params:t})}const a={formEl:document.querySelector(".form"),galleryEl:document.querySelector(".gallery"),loader:document.querySelector(".loader"),loadMore:document.querySelector(".Load_more"),galleryItem:document.querySelector(".gallery-item")},P=new w(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250});function p(s){const o=s.map(({webformatURL:t,largeImageURL:i,tags:e,likes:r,views:n,comments:E,downloads:M})=>`<li class="gallery-item">
        <a class="gallery-link" href="${i}">
          <img
            class="gallery-image"
            src="${t}"
            alt="${e}"
            loading="lazy"
          />
        </a>
        <div class="info-box">
          <p>
            <b>Likes:</b> ${r}
          </p>
          <p>
            <b>Views:</b> ${n}
          </p>
          <p>
            <b>Comments:</b> ${E}
          </p>
          <p>
            <b>Downloads:</b> ${M}
          </p>
        </div>
      </li>`).join("");a.galleryEl.insertAdjacentHTML("beforeend",o),P.refresh()}function S(){a.galleryEl.innerHTML=""}function d(){a.loader.classList.add("is-hidden")}function h(){a.loader.classList.remove("is-hidden")}function u(){a.loadMore.classList.add("is-hidden")}function L(){a.loadMore.classList.remove("is-hidden")}let l=1,f="";const b=15;a.formEl.addEventListener("submit",async s=>{s.preventDefault();const o=s.currentTarget.elements["search-text"].value.trim();if(o===""){c.error({message:"error"});return}f=o,l=1,S(),h(),u();try{const{data:{hits:t,totalHits:i}}=await y(f,l);if(!t||t.length===0){c.warning({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}p(t),Math.ceil(i/b)>l?L():u()}catch{c.error({title:"Error"})}finally{d(),a.formEl.reset()}});//!loadMore//
a.loadMore&&a.loadMore.addEventListener("click",async()=>{h(),l+=1,console.log(l);try{const{data:{hits:s,totalHits:o}}=await y(f,l);p(s),d();let t=a.galleryEl.querySelector(".gallery-item");if(t){const e=t.getBoundingClientRect().height;window.scrollBy({top:e*2,behavior:"smooth"})}Math.ceil(o/b)>l?L():(c.info({title:"info",message:"Were sorry,butyou've reached the end of search results.",position:"topRight"}),u())}catch{d(),c.error({title:"Error",message:"Failed to load more images.",position:"topRight"})}});
//# sourceMappingURL=index.js.map
