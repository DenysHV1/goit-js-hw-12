import{a as S,S as $,i as l}from"./assets/vendor-DOgVoBmD.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const E="https://pixabay.com/api/",v="21553593-5dff095819739d8fe44d39f5a";function f(i,s){const r=`${E}?key=${v}&q=${i}&image_type=photo&orientation=horizontal&safesearch=true&per_page=15&page=${s}`;return S.get(r)}function h(i,s){const r=i.map(({webformatURL:n,largeImageURL:e,tags:t,likes:o,views:L,comments:b,downloads:_})=>`
            <li class="gallery-list-item">
                <a class="gallery_link" href="${e}">
                    <img class="gallery_img" src="${n}" 
                        alt="${t}" 
                        title="${t}" />
                    <ul class="statistics-list">
                        <li class="statistics-item">
                            <p class="statistics-item_name">Likes</p>
                            <p class="statistics_result">${o}</p>
                        </li>
                        <li class="statistics-item">
                            <p class="statistics-item_name">Views</p>
                            <p class="statistics_result">${L}</p>
                        </li>
                        <li class="statistics-item">
                            <p class="statistics-item_name">Comments</p>
                            <p class="statistics_result">${b}</p>
                        </li>
                        <li class="statistics-item">
                            <p class="statistics-item_name">Downloads</p>
                            <p class="statistics_result">${_}</p>
                        </li>
                    </ul>
                </a>
            </li>`).join("");s.insertAdjacentHTML("beforeend",r)}const d=document.querySelector(".gallery-list"),p=document.querySelector("form"),u=document.querySelector(".loader"),a=document.querySelector(".load-more-btn-js");let y=new $(".gallery-list a",{}),c=1,g=0,m="";//! first function
const w=async i=>{try{if(i.preventDefault(),m=i.target.elements.choiceSearch.value.toLowerCase().trim(),c=1,!m){l.error({message:"Please enter a search word."});return}u.style.display="block";const s=await f(m,c);if(s.data.totalHits===0){a.classList.add("is-hidden"),l.info({message:"Sorry, there are no images matching your search query. Please try again!"}),d.innerHTML="";return}h(s.data.hits,d),g=d.querySelector("li").getBoundingClientRect().height,s.data.totalHits>15&&a.classList.remove("is-hidden"),y.refresh(),p.reset()}catch(s){l.error({message:s.message,messageColor:"#fff",position:"topRight",color:"#ef4040",maxWidth:"350px"})}finally{u.style.display="none",p.reset()}};//! second function
const q=async()=>{try{c+=1,a.classList.add("is-hidden"),u.style.display="block";const i=await f(m,c);h(i.data.hits,d),y.refresh(),scrollBy({top:g*2,behavior:"smooth"}),a.classList.remove("is-hidden"),c===Math.ceil(i.data.totalHits/15)&&(a.classList.add("is-hidden"),l.warning({title:"Info",message:"Were sorry, but you have reached the end of search results.",position:"topRight"}))}catch(i){l.error({message:i.message,messageColor:"#fff",position:"topRight",color:"#ef4040",maxWidth:"350px"})}finally{u.style.display="none"}};p.addEventListener("submit",w);a.addEventListener("click",q);
//# sourceMappingURL=index.js.map
