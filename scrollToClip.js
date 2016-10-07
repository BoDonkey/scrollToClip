<!doctype>
<head>

<meta name="viewport" content="minimal-ui, width=device-width, user-scalable=no"/>

</head>

<body>
  <div class="logo">Test</div>
  <div class="logo reverse">Test</div>
  
  <div id="red">
  
  </div>
</body>

<style>
html,body{
  margin: 0px;
  background: #efefef;
  height: 200%;
}
  #red{
    width: 100%;
    height: 200px;
    background-color: #de5656;
    position: relative;
  }
  
  .logo{
    position: fixed;
    top: 10px;
    left: 10px;
    font-size: 50px;
    color: #de5656;
    z-index: 2;
    clip: rect(50px, 300px, 60px, 0px)
  }
  
  .reverse{
    color: #fff;
    z-index:1;
    clip: inherit !important;
  }
</style>

<script src="js/jquery.js"></script>
<script>
/*
scrollToClip
Sept. 6th, 2016
Lucas Bersier
*/
  
/*
Initial Function

elem1(object) : The element that will display before being clipped.
elem2(object) : The element that will display after being clipped.
background(object) : The element that will serve as a basis for the clipping.

Tip: Make elem1 and elem2 have position:fixed and the same positioning to have the two elements be overlapping each other.
*/
function scrollToClip(elem1,elem2,background){
  //Bounding boxes
  elem1Box = elem1.getBoundingClientRect();
  backgroundBox = background.getBoundingClientRect();
  
  //Default clip values. (show all)
  elem1.setAttribute("style","clip: rect("+elem1Box.height+", 100vw, 300px, 0px)");
  elem2.setAttribute("style","clip: rect(0px, 100vw, "+elem1Box.height+", 0px)");
  
  //Event listener. Toggled by wheel (scroll) movements
  document.addEventListener("wheel", function(){
    scrollToClipFunc(elem1,elem2,background)
  },false);
  
  document.addEventListener("touchmove", function() {
    scrollToClipFunc(elem1,elem2,background)
  },false);
}  
  
/*
Function called every wheel movement.
*/
function scrollToClipFunc(elem1, elem2, background){
  //Redefine bounding boxes.
  elem1Box = elem1.getBoundingClientRect();
  backgroundBox = background.getBoundingClientRect();
  
  //Distance the scroll is past the bounding box of the background
  var difference = elem1Box.bottom - backgroundBox.bottom;
  
  //Apply clipping
  if (difference > 0 && difference < elem1Box.height){
    elem1.setAttribute("style","clip: rect("+(elem1Box.height - difference)+"px,100vw, 100vh, 0px)");
    elem2.setAttribute("style","clip: rect(0px,100vw,"+(elem1Box.height - difference)+"px, 0px) !important");
  }
  
  //Before clipping (default)
  else if (difference < 0){
    elem1.setAttribute("style","clip: rect("+elem1Box.height+"px,100vw, 100vh, 0px)");
    elem2.setAttribute("style","clip: rect(0px,100vw,"+elem1Box.height+"px, 0px) !important");
  }
  
  //After clipping (prevent infinite variables)
  else if (difference > elem1Box.height){
    elem1.setAttribute("style","clip: rect(0px,100vw, 100vh, 0px)");
    elem2.setAttribute("style","clip: rect(0px,100vw,0px, 0px) !important");
  } 
}


</script>
