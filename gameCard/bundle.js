(()=>{"use strict";var e={};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var a=e.g.document;if(!t&&a&&(a.currentScript&&(t=a.currentScript.src),!t)){var n=a.getElementsByTagName("script");n.length&&(t=n[n.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t})();const t=e.p+"4c3a088f728845b80201.png",a=e.p+"7f74b0fef726c57b8040.png",n=e.p+"125be1d2ef692828ed21.png",d=e.p+"0cd098955d87aae5043d.png",c=e.p+"d08e73aa604791160bd9.png",r=e.p+"24643d54d77c84ae35a1.png",i=e.p+"43b1b67e8f9742bc99dd.png",o=e.p+"33020e5b2555c0f7a17f.png",s=e.p+"56e2b1e8999df31565a9.png",p=e.p+"2a8c6d3f7e4adae18c1d.png",l=e.p+"82c3e9aa977dca6b1b77.png",u=e.p+"a50f42a9a32d391a7ee5.png",m=e.p+"39207df5daee484a7f64.png",v=e.p+"67760458bd93fb6302ec.png",f=e.p+"39e51f7e2f32aeb434a6.png",b=e.p+"890d21c2aba353bacb80.png",g=e.p+"ebaf227cd3852a8dabab.png",h=e.p+"e094a78b1ca2ece2a9a6.png",_=e.p+"f7596610c51b8c467d73.png",L=e.p+"ecd886fcaee984b9db15.png",C=e.p+"ad4df921a25bdfa276d7.png",E=e.p+"f080ffb065d5349c5b6a.png",w=e.p+"15cc56183a1547b0939f.png",k=e.p+"b2faa07734a00b27132e.png",y=e.p+"c3fd760590e7fe8aaf30.png",T=e.p+"f4e62ca65d98130c093e.png",x=e.p+"557fa19aa0643894f288.png",M=e.p+"337d85ba3c5377e45ea2.png",S=e.p+"d86fc921b689244ac256.png",A=e.p+"8640de6efad274874118.png",H=e.p+"19855d276bb50886b73f.png",I=e.p+"6b422070a83c57d97cbf.png",q=e.p+"e800936a160f38f57832.png",$=e.p+"edba6c3a2f933cfaab4f.png",j=e.p+"7408d00255282a1e4f27.png",D=e.p+"a418bad249ef86392285.png";var B=document.querySelector(".app");function F(e,t){var a=document.createElement("div");a.classList.add("wrap");var n=document.createElement("div");n.classList.add("choose-wrap","resault");var d=document.createElement("div");d.classList.add("choose-img"),d.style.backgroundImage='url("'.concat(t,'")');var c=document.createElement("h2");c.classList.add("choose__title","choose__title-resault"),c.textContent="Вы ".concat(e,"!");var r=document.createElement("p");r.classList.add("choose-time"),r.textContent="Затраченное время:";var i=document.querySelector(".timers__seconds").innerHTML,o=document.querySelector(".timers__minutes").innerHTML,s=document.createElement("div");s.classList.add("timer"),s.innerHTML="".concat(o,".").concat(i);var p=document.createElement("button");p.classList.add("choose__btn"),p.textContent="Играть снова",document.createElement("div").classList.add("choose__link-bg"),B.before(a),a.appendChild(n),n.appendChild(d),n.appendChild(c),n.appendChild(r),n.appendChild(s),n.appendChild(p),p.addEventListener("click",(function(e){e.preventDefault(),window.location.reload()}))}const N=e.p+"816a3af59471aa5ab3b0.png",P=e.p+"e3c6d13378fd14838171.png",z=e.p+"e9a23012fa19ebafb807.png";var G=[t,a,n,d,c,r,i,o,s,p,l,u,m,v,f,b,g,h,_,L,C,E,w,k,y,T,x,M,S,A,H,I,q,$,j,D],J=[],K=void 0,O=void 0,Q=0,R=document.querySelector(".app"),U=function(){var e=document.createElement("div");e.classList.add("game__container"),R.appendChild(e)};function V(e){R.innerHTML="",function(){var e=document.querySelector(".app"),t=document.createElement("div");t.classList.add("container");var a=document.createElement("div");a.classList.add("timers");var n=document.createElement("div");n.classList.add("timers__minutes"),n.textContent="00";var d=document.createElement("div");d.classList.add("timers__dot"),d.textContent=".";var c=document.createElement("div");c.classList.add("timers__seconds"),c.textContent="00";var r=document.createElement("button");r.classList.add("timers__btn"),r.textContent="Начать заново",r.addEventListener("click",(function(){window.location.reload()})),e.appendChild(t),t.appendChild(a),t.appendChild(r),a.appendChild(n),a.appendChild(d),a.appendChild(c);var i=0,o=0;window.interval=setInterval((function(){i++,c.innerHTML="0"+i,i>59&&(o++,n.innerHTML="0"+o,i=0,c.innerHTML="0"+i),i>9&&(c.innerHTML=String(i)),o>9&&(n.innerHTML=String(o)),99===o&&clearInterval(void 0)}),1e3)}(),U();for(var t=document.querySelector(".game__container"),a=0;a<e;a++){var n=Math.floor(Math.random()*G.length);J.push(G[n],G[n]),J.sort((function(){return.5-Math.random()}))}J.forEach((function(e){var a=document.createElement("button");a.classList.add("btn__card"),a.style.backgroundImage='url("'.concat(e,'")'),setTimeout((function(){a.classList.add("game__card-back"),a.style.backgroundImage='url("'.concat(N,'")')}),2e3),a.addEventListener("click",(function(t){a.style.backgroundImage='url("'.concat(e,'")'),a.classList.remove("game__card-back"),a.setAttribute("value","".concat(e));var n=a.getAttribute("value");void 0===K?(K=n,a.classList.add("success")):void 0===O&&(O=n),void 0!==O&&void 0!==K&&(O===K&&K===O?(a.classList.add("success"),Q+=2,J.length===Q&&(F("Выиграли",z),clearInterval(window.interval)),K=void 0,O=void 0):O!==K&&(F("Проиграли",P),clearInterval(window.interval)))})),t.appendChild(a)}))}!function(e){var t=document.createElement("div");t.classList.add("choose-wrap");var a=document.createElement("h2");a.classList.add("choose__title"),a.textContent="Выбери сложность";var n=document.createElement("button");n.classList.add("choose__btn"),n.textContent="Старт";var d=document.createElement("div");d.classList.add("choose__link-bg");var c=document.createElement("div");c.classList.add("choose__link-wrap");var r=document.createElement("a");r.classList.add("choose__link","easy"),r.setAttribute("href","#"),r.setAttribute("value","easy"),r.textContent="1";var i=document.createElement("div");i.classList.add("choose__link-wrap");var o=document.createElement("a");o.classList.add("choose__link","average"),o.setAttribute("href","#"),o.setAttribute("value","average"),o.textContent="2";var s=document.createElement("div");s.classList.add("choose__link-wrap");var p=document.createElement("a");p.classList.add("choose__link","hard"),p.setAttribute("href","#"),p.setAttribute("value","hard"),p.textContent="3",e.appendChild(t),t.appendChild(a),t.appendChild(d),d.appendChild(c),c.appendChild(r),d.appendChild(i),i.appendChild(o),d.appendChild(s),s.appendChild(p),t.appendChild(n),[r,o,p].forEach((function(e){e.addEventListener("click",(function(){n.addEventListener("click",(function(t){var a=e.getAttribute("value");t.preventDefault(),"easy"===a?V(3):"average"===a?V(6):"hard"===a?V(9):alert("Выберите уровень сложности")}))}),{once:!0})}))}(document.querySelector(".app"))})();
//# sourceMappingURL=bundle.js.map