!function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,n){"use strict";n(1);var r=function(e){return e.getBoundingClientRect().top+window.pageYOffset},i=document.getElementById("header-sticky"),o=void 0;i&&(o=r(i)),window.addEventListener("scroll",function(){window.pageYOffset>o?i.classList.add("sticky"):i.classList.remove("sticky")});var s=document.getElementById("aside-sticky"),a=void 0,c=void 0;s&&(a=r(s),c=s.getBoundingClientRect().width),window.addEventListener("scroll",function(){var e=window.pageYOffset;s&&(e>a?(s.classList.add("sticky"),s.style.width=c+"px",s.style.top=i.getBoundingClientRect().height+16+"px"):s.classList.remove("sticky"))});var d=function(e){var t=new Date,n=(new Date(e)-t+1e3)/1e3;return{remainTime:n,second:("0"+Math.floor(n%60)).slice(-2),minute:("0"+Math.floor(n/60%60)).slice(-2),hours:("0"+Math.floor(n/3600%24)).slice(-2),days:Math.floor(n/86400)}};!function(e,t,n){var r=document.getElementById(t);if(r){var i=document.createElement("span");i.setAttribute("class","news-timer"),r.appendChild(i);var o=setInterval(function(){var t=d(e);i.innerHTML=" "+t.days+"d:"+t.hours+"h:"+t.minute+"m:"+t.second+"s",t.remainTime<=1&&(clearInterval(o),i.innerHTML=n)},1e3)}}("Jun 28 2018 19:00:00 GMT-0500","news-message","Llego la hora de la verdad")},function(e,t){}]);