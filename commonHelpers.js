import{a as A,i as p,S as w}from"./assets/vendor-c493984e.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(e){if(e.ep)return;e.ep=!0;const s=i(e);fetch(e.href,s)}})();const h="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEZSURBVHgBrZVRDoMgDIar0fi6m2xH2Y3Ek2w3cFfZXXwBljFQCai0xemfoCaU/xNpKwAirXWrlDY5w8ViPhVmbgwIO14A3zeQKq/2IuwaqOu6A07+zaVUT8iUi+V28rd5NuSIOQs5wxyFUOZKqRtnmIpZQCZz3acWcgcXUjkF0b2bmwFSpAxskMAgYecaWSsFC8AgnHkMqIBR09TCGrnHsZic5iLs3By3ngWsITMgy9yphEyVJZjUM6esHUS9yfea7N7DAmJz/1niM2EhVBZR2UKl8DS/SFO80OhUnCBkoYWgz2MdNAx8q0jFOK/Fy1GQvdqYe50BQc3PgLDmRyCU+aYOfFsoCtPa+yXvp2/ue9rHqLATflCf5QflVUcNIrzeSwAAAABJRU5ErkJggg==";async function b(t,o,i,r){const e=new URLSearchParams({key:`${t}`,q:`${o}`,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:`${r}`,page:`${i}`});return(await A.get(`https://pixabay.com/api/?${e}`)).data}function C(t){return t.map(({webformatURL:o,largeImageURL:i,tags:r,likes:e,views:s,comments:a,downloads:y})=>`<li class="item">
          <a href="${i}"><img class="image" src="${o}" alt="${r}" /></a>
          <ul class="item-list">
            <li class="item-list-item">
              <h3 class="title">Likes</h3>
              <p class="value">${e}</p>
            </li>
            <li class="item-list-item">
              <h3 class="title">Views</h3>
              <p class="value">${s}</p>
            </li>
            <li class="item-list-item">
              <h3 class="title">Comments</h3>
              <p class="value">${a}</p>
            </li>
            <li class="item-list-item">
              <h3 class="title">Downloads</h3>
              <p class="value">${y}</p>
            </li>
          </ul>
        </li>`).join("")}const S="44447356-a60fa6f4c2d7f10e895940a18",g=document.querySelector(".form"),u=document.querySelector(".list"),l=document.querySelector(".loadMoreBtn"),n=document.querySelector(".loader"),d=15;let c=1,m="";g.addEventListener("submit",U);l.addEventListener("click",q);function U(t){l.style.display="none",u.innerHTML="",m=t.target.elements.input.value.trim(),t.preventDefault(),m!=0&&(n.style.display="block",c=1,f())}function q(){n.style.display="block",c+=1,f()}function f(){b(S,m,c,d).then(t=>{const o=t.hits;o.length!==0?(u.insertAdjacentHTML("beforeend",C(o)),t.totalHits>d*c?l.style.display="block":(l.style.display="none",p.show({class:"toast",position:"topRight",messageColor:"white",message:"We're sorry, but you've reached the end of search results."})),new w(".list a",{captions:!0,captionType:"attr",captionsData:"alt",captionPosition:"bottom",captionDelay:250}).refresh()):(n.style.display="none",p.show({class:"toast",position:"topRight",icon:"icon",iconUrl:h,iconColor:"white",messageColor:"white",message:"Sorry, there are no images matching your search query. Please try again!"}))}).catch(t=>{p.show({class:"toast",position:"topRight",icon:"icon",iconUrl:h,iconColor:"white",messageColor:"white",title:"Error",titleColor:"white",message:"Please try again!"}),t.response?console.error("Server error:",t.response.status):t.request?console.error("No response from server"):console.error("Unknown error:",t.message)}).finally(()=>{const t=u.lastChild.getBoundingClientRect();scrollBy({top:t.top+t.height*2,behavior:"smooth"}),n.style.display="none"}),g.reset()}
//# sourceMappingURL=commonHelpers.js.map
