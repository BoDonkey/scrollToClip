function scrollToClip(t,e,i){elem1Box=t.getBoundingClientRect(),backgroundBox=i.getBoundingClientRect(),t.setAttribute("style","clip: rect("+elem1Box.height+", 100vw, 300px, 0px)"),e.setAttribute("style","clip: rect(0px, 100vw, "+elem1Box.height+", 0px)"),document.addEventListener("wheel",function(){scrollToClipFunc(t,e,i)},!1)}function scrollToClipFunc(t,e,i){elem1Box=t.getBoundingClientRect(),backgroundBox=i.getBoundingClientRect()
var l=elem1Box.bottom-backgroundBox.bottom
l>0&&l<elem1Box.height?(t.setAttribute("style","clip: rect("+(elem1Box.height-l)+"px,100vw, 100vh, 0px)"),e.setAttribute("style","clip: rect(0px,100vw,"+(elem1Box.height-l)+"px, 0px) !important")):0>l?(t.setAttribute("style","clip: rect("+elem1Box.height+"px,100vw, 100vh, 0px)"),e.setAttribute("style","clip: rect(0px,100vw,"+elem1Box.height+"px, 0px) !important")):l>elem1Box.height&&(t.setAttribute("style","clip: rect(0px,100vw, 100vh, 0px)"),e.setAttribute("style","clip: rect(0px,100vw,0px, 0px) !important"))}