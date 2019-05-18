var displayedImage = document.querySelector('.displayed-img');
var thumbBar = document.querySelector('.thumb-bar');

var btn = document.querySelector('button');
var overlay = document.querySelector('.overlay');

/* Looping through images */
for (var i=1; i < 5; i++){
  var newImage = document.createElement('img');
  var dir= "images/";//images/pic1.jpg
  newImage.setAttribute('src',dir+"pic"+i+".jpg");
  thumbBar.appendChild(newImage);

  newImage.onclick=function(e){
    var image  = e.target.getAttribute("src");
    test(image);
  }
  function test(image){
    displayedImage.setAttribute("src",image);

  }
  btn.onclick=function(){
    var cur = btn.getAttribute("class");
    if (cur === "dark"){
      btn.setAttribute("class","light");
      btn.textContent = "Lighten";
      //document.getElementById("overlay").style.backgroundColor ="rgba(0,0,0,0.5)";
      overlay.style.backgroundColor ="rgba(0,0,0,0.5)";
    }
    else {
      btn.setAttribute('class', "dark");
      btn.textContent = "Darken";
      overlay.style.backgroundColor = "rgba(0,0,0,0)"
    };
  }

}



