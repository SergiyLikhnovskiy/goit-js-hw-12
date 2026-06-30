import{a as g,S as v,i as n}from"./assets/vendor-CucEYOFD.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const w="56458630-d01f51161f93b41d033a282d5",m="https://pixabay.com/api/";g.defaults.baseURL=m;async function p(a,o=1){const t={key:w,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0,page:o,per_page:15};return(await g.get(m,{params:t})).data}const s={formEl:document.querySelector(".form"),galleryEl:document.querySelector(".gallery"),loader:document.querySelector(".loader"),loadMore:document.querySelector(".Load_more"),galleryItem:document.querySelector(".gallery-item")},P=new v(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250});function y(a){const o=a.map(({webformatURL:t,largeImageURL:i,tags:e,likes:r,views:c,comments:E,downloads:M})=>`<li class="gallery-item">
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
            <b>Views:</b> ${c}
          </p>
          <p>
            <b>Comments:</b> ${E}
          </p>
          <p>
            <b>Downloads:</b> ${M}
          </p>
        </div>
      </li>`).join("");s.galleryEl.insertAdjacentHTML("beforeend",o),P.refresh()}function S(){s.galleryEl.innerHTML=""}function u(){s.loader.classList.add("is-hidden")}function h(){s.loader.classList.remove("is-hidden")}function d(){s.loadMore.classList.add("is-hidden")}function b(){s.loadMore.classList.remove("is-hidden")}let l=1,f="";const L=15;s.formEl.addEventListener("submit",async a=>{a.preventDefault();const o=a.currentTarget.elements["search-text"].value.trim();if(o===""){n.error({message:"error"});return}f=o,l=1,S(),h(),d();try{const{hits:t,totalHits:i}=await p(f,l);if(!t||t.length===0){n.warning({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}y(t),Math.ceil(i/L)>l?b():(n.info({title:"info",message:"Were sorry,but you've reached the end of search results.",position:"topRight"}),d())}catch{n.error({title:"Error"})}finally{u(),s.formEl.reset()}});//!loadMore//
s.loadMore&&s.loadMore.addEventListener("click",async()=>{d(),h(),l+=1,console.log(l);try{const{hits:a,totalHits:o}=await p(f,l);y(a),u();let t=s.galleryEl.querySelector(".gallery-item");if(t){const e=t.getBoundingClientRect().height;window.scrollBy({top:e*2,behavior:"smooth"})}Math.ceil(o/L)>l?b():(n.info({title:"info",message:"Were sorry,but you've reached the end of search results.",position:"topRight"}),d())}catch{u(),n.error({title:"Error",message:"Failed to load more images.",position:"topRight"})}});
//# sourceMappingURL=index.js.map
