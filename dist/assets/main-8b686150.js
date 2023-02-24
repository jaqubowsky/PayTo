(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function a(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerpolicy&&(r.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?r.credentials="include":n.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(n){if(n.ep)return;n.ep=!0;const r=a(n);fetch(n.href,r)}})();const C=document.querySelectorAll("input"),h=document.querySelectorAll("small");function I(){const e=document.getElementById("alert");e.classList.remove("hidden"),e.classList.contains("hidden")||setTimeout(()=>e.classList.add("hidden"),5e3)}function i(e,t){const a=e.parentElement.querySelector(".input-error");a.classList.remove("visible"),p(e),a.textContent=t,a.classList.add("visible"),e.classList.add("invalid")}function s(e){const t=e.parentElement.querySelector(".input-error");p(e),t.classList.remove("visible"),e.classList.add("valid")}function p(e){e.classList.remove("valid"),e.classList.remove("invalid")}function N(){C.forEach(e=>{e.classList.remove("valid"),e.classList.remove("invalid")})}function x(){h.forEach(e=>{e.classList.remove("visible"),e.textContent=""})}function V(e){const t=new RegExp("^[0-9]{16}$"),a=e.toString();if(!t.test(e))return!1;let o=0;for(let n=0;n<a.length;n++){let r=parseInt(a[n]);n%2==0&&(r*=2,r>9&&(r-=9)),o+=r}return o%10==0}const c=document.getElementById("nameOnCard"),d=document.getElementById("cardNumber"),u=document.getElementById("cardExpirationDate"),m=document.getElementById("cardCvvNumber"),D=document.getElementById("mainForm");function y(){const e=c.value,t=/^[a-zA-ZęóąśłżźćńĘÓĄŚŁŻŹĆŃ ]+$/;e.trim()===""||!t.test(e)?i(c,"Name is not valid"):s(c)}function E(){const e=d.value;V(e)?s(d):i(d,"Card number is not valid")}function b(){const e=u.value,t=new Date(e),a=new Date;e.trim()===""||t<a?i(u,"Expiration date is not valid"):s(u)}function L(){m.value.trim()===""?i(m,"CVV cannot be empty"):s(m)}function B(){S(),I(),N(),x()}function S(){D.reset()}function A(){y(),E(),b(),L()}const g=document.getElementById("mainForm"),f=document.getElementById("cardCvvNumber"),v=document.getElementById("cardNumber"),q=document.querySelectorAll("input");(function(){g.addEventListener("submit",e=>{e.preventDefault(),A(),!g.querySelector(".invalid")&&B()}),q.forEach(e=>{e.addEventListener("change",()=>{e.name==="name-on-card"&&y(),e.name==="card_number"&&E(),e.name==="card_expiration_date"&&b(),e.name==="cvv_number"&&L()})}),f.addEventListener("input",e=>{const t=e.target;f.value=f.value.replace(/[e\+\-]/gi,""),t.value.length>t.maxLength&&(t.value=t.value.slice(0,t.maxLength))}),v.addEventListener("input",()=>{v.value=v.value.replace(/[e\+\-]/gi,"")})})();