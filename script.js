
var body = document.getElementsByTagName('body')[0];
// var divEven = divOdd=document.querySelectorAll(':nth-child(2n)')[0];


document.addEventListener('DOMContentLoaded',function(){
  setDiv(270);
  var divOdd=document.querySelectorAll('div:nth-child(odd)');
  var divEven=document.querySelectorAll('div:nth-child(even)');
  for(var i=0;i<divOdd.length;i++){
    divOdd[i].style.backgroundColor="red";
    divEven[i].style.backgroundColor="black";
  }
});



function setDiv(number){
  for(var i=0; i<number; i++){
    var div = document.createElement('div');
    div.style.width="11.1%";
    div.style.paddingBottom="11.1%";
    div.style.cssFloat = "left";

    // div.style.backgroundColor="red";
    body.appendChild(div);
  }
}