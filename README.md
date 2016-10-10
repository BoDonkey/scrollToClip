# <a href="https://berslucas.github.io/scrollToClip/">Live demo</a>

# scrollToClip
A function to clip two elements on scroll to give a reveal effect

# Compatability
![Chrome](https://raw.github.com/alrra/browser-logos/master/chrome/chrome_24x24.png) | ![Firefox](https://raw.github.com/alrra/browser-logos/master/firefox/firefox_24x24.png) | ![IE](https://raw.github.com/alrra/browser-logos/master/internet-explorer/internet-explorer_24x24.png) | ![Opera](https://raw.github.com/alrra/browser-logos/master/opera/opera_24x24.png) | ![Safari](https://raw.github.com/alrra/browser-logos/master/safari/safari_24x24.png)
--- | --- | --- | --- | --- |
 ✔ | ✔ | 9+ ✔ | ✔ |¯\_(ツ)_/¯|

# Usage 
**HTML**
```HTML
<img class="scrollToClip" src="[image_color1]"/>
<img class="scrollToClip reverse" src="[image_color2]"/>
```
**CSS**
```CSS
.scrollToClip{
  position: fixed;
  z-index: 10;
  /*positioning*/
}

.scrollToClip.reverse{
  z-index: 9;
}
```
**Javascript**
```Javascript
//elem1(object) : The element that will display before being clipped.
//elem2(object) : The element that will display after being clipped.
//background(object) : The element that will serve as a basis for the clipping.
scrollToClip(elem1,elem2,background);
```
