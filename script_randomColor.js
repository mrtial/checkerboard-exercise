
var body = document.getElementsByTagName('body')[0];
// var divEven = divOdd=document.querySelectorAll(':nth-child(2n)')[0];


document.addEventListener('DOMContentLoaded',function(){
  setDiv(270);
});



function setDiv(number){
  for(var i=0; i<number; i++){
    var div = document.createElement('div');
    div.style.width="11.1%";
    div.style.paddingBottom="11.1%";
    div.style.cssFloat = "left";

    // set radom color
    div.style.backgroundColor= randomColor();
    body.appendChild(div);
  }
}

function randomColor(){
  var R=Math.floor(Math.random()*225),
      G=Math.floor(Math.random()*225),
      B=Math.floor(Math.random()*225);

  var color='RGB('+R+','+G+','+B+')';

  return color;
}