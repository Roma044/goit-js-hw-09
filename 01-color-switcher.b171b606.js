!function(){var t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),d=null;e.disabled=!0;t.addEventListener("click",(function(){d=setInterval((function(){document.body.style.background="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3),t.disabled=!0,e.disabled=!1})),e.addEventListener("click",(function(){clearInterval(d),t.disabled=!1,e.disabled=!0}))}();
//# sourceMappingURL=01-color-switcher.b171b606.js.map
