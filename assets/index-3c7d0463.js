(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function d(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=d(e);fetch(e.href,t)}})();(()=>{const n={openModalBtn:document.querySelector("[data-order-open]"),closeModalBtn:document.querySelector("[data-order-close]"),modal:document.querySelector("[data-modal-order]")};n.openModalBtn.addEventListener("click",o),n.closeModalBtn.addEventListener("click",o);function o(){n.modal.classList.toggle("is-hidden")}})();(()=>{const n={openModalBtn:document.querySelector("[data-thank-open]"),closeModalBtn:document.querySelector("[data-thank-close]"),modal:document.querySelector("[data-modal-thank]")};n.openModalBtn.addEventListener("click",o),n.closeModalBtn.addEventListener("click",o);function o(){n.modal.classList.toggle("is-hidden")}})();(()=>{const n=document.querySelector(".js-menu-container"),o=document.querySelector(".js-open-menu"),d=document.querySelector(".js-close-menu"),r=document.querySelector(".js-close-menu-first"),e=document.querySelector(".js-close-menu-second"),t=document.querySelector(".js-close-menu-third"),c=document.querySelector(".closeBtnIcon"),i=document.querySelector(".openBtnIcon"),l=()=>{const s=o.getAttribute("aria-expanded")==="true"||!1;o.setAttribute("aria-expanded",!s),n.classList.toggle("is-open"),c.classList.toggle("closeIcon"),i.classList.toggle("closeIcon");const a=s?"enableBodyScroll":"disableBodyScroll";bodyScrollLock[a](document.body)};o.addEventListener("click",l),d.addEventListener("click",l),r.addEventListener("click",l),e.addEventListener("click",l),t.addEventListener("click",l),window.matchMedia("(min-width: 768px)").addEventListener("change",s=>{s.matches&&(n.classList.remove("is-open"),o.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))})})();
