(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&l(c)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();(()=>{const n={openModalBtn:document.querySelector("[data-order-open]"),closeModalBtn:document.querySelector("[data-order-close]"),modal:document.querySelector("[data-modal-order]")};n.openModalBtn.addEventListener("click",o),n.closeModalBtn.addEventListener("click",o);function o(){n.modal.classList.toggle("is-hidden")}})();(()=>{const n={openModalBtn:document.querySelector("[data-thank-open]"),closeModalBtn:document.querySelector("[data-thank-close]"),modal:document.querySelector("[data-modal-thank]")};n.openModalBtn.addEventListener("click",o),n.closeModalBtn.addEventListener("click",o);function o(){n.modal.classList.toggle("is-hidden")}})();(()=>{const n=document.querySelector(".js-menu-container"),o=document.querySelector(".js-open-menu"),r=document.querySelector(".js-close-menu"),l=document.querySelector(".closeBtnIcon"),e=document.querySelector(".openBtnIcon"),t=()=>{const c=o.getAttribute("aria-expanded")==="true"||!1;o.setAttribute("aria-expanded",!c),n.classList.toggle("is-open"),l.classList.toggle("closeIcon"),e.classList.toggle("closeIcon");const s=c?"enableBodyScroll":"disableBodyScroll";bodyScrollLock[s](document.body)};o.addEventListener("click",t),r.addEventListener("click",t),window.matchMedia("(min-width: 768px)").addEventListener("change",c=>{c.matches&&(n.classList.remove("is-open"),o.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))})})();
