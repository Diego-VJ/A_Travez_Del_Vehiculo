function iniciarAPP(){navegacionFija(),scrollNav()}function navegacionFija(){const e=document.querySelector(".header"),o=document.querySelector(".sobre-vehiculo"),n=document.querySelector("body");window.addEventListener("scroll",(function(){o.getBoundingClientRect().bottom<0?(e.classList.add("fijo"),n.classList.add("body-scroll")):(e.classList.remove("fijo"),n.classList.remove("body-scroll"))}))}function scrollNav(){document.querySelectorAll(".navegacion-principal a").forEach(e=>{e.addEventListener("click",(function(e){e.preventDefault();const o=e.target.attributes.href.value;document.querySelector(o).scrollIntoView({behavior:"smooth"})}))})}document.addEventListener("DOMContentLoaded",(function(){iniciarAPP()})),"serviceWorker"in navigator&&window.addEventListener("load",(function(){navigator.serviceWorker.register("/sw.js").then((function(e){console.log("ServiceWorker registration successful with scope: ",e.scope)}),(function(e){console.log("ServiceWorker registration failed: ",e)}))}));
//# sourceMappingURL=app.js.map
