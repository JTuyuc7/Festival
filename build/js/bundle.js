function navegacionFija(){const e=document.querySelector(".header");new IntersectionObserver((function(t){t[0].isIntersecting?e.classList.remove("fijo"):e.classList.add("fijo")})).observe(document.querySelector(".sobre-festival"))}function scrollNav(){document.querySelectorAll(".navegacion-principal a").forEach((function(e){e.addEventListener("click",(function(e){e.preventDefault(),console.log(e.target.attributes.href.value);document.querySelector(e.target.attributes.href.value).scrollIntoView({behavior:"smooth"})}))}))}function crearGaleria(){const e=document.querySelector(".galeria-imagenes");for(let t=1;t<=12;t++){const n=document.createElement("img");n.src=`build/img/thumb/${t}.webp`,n.dataset.imagenId=t;const o=document.createElement("li");o.appendChild(n),e.appendChild(o),n.onclick=mostrarImagen}}function mostrarImagen(e){const t=parseInt(e.target.dataset.imagenId),n=document.createElement("img");n.src=`build/img/grande/${t}.webp`,console.log(n);const o=document.createElement("div");o.appendChild(n),o.classList.add("overlay"),o.onclick=function(){o.remove()};const c=document.querySelector("body");c.appendChild(o);const a=document.createElement("p");a.textContent="X",a.classList.add("btn-cerrar"),o.appendChild(a),a.onclick=function(){o.remove()},c.classList.add("fijar-body")}document.addEventListener("DOMContentLoaded",(function(){scrollNav(),navegacionFija()})),document.addEventListener("DOMContentLoaded",(function(){crearGaleria()}));
//# sourceMappingURL=bundle.js.map
