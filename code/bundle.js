(()=>{"use strict";var e=document.getElementById("secret_button"),t=document.getElementById("secret_text"),n=!1;function c(){t.style.display=n?"block":"none"}c(),e.addEventListener("click",(function(){n=!n,c(),e.textContent=n?"Hide the Secret":"Show the Secret"}))})();