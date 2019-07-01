var b1=document.querySelector("#b1");
var b2=document.querySelector("#b2");
var b3=document.querySelector("#b3");
var h1=document.querySelector("h1");
var span1=document.querySelector("#span1");
var span2=document.querySelector("#span2");
var span3=document.querySelector("h3 span");
var gameOver=false;
var winningPoint=5;
var count1=0;
var count2=0;
var input=document.querySelector("input");

b1.addEventListener("click",function(){
	count1++;
   if(!gameOver){
      span1.textContent=count1;
      if(count1==span3.textContent){
         gameOver=true;
         span1.style.color="red";
      }
   }
  })

b2.addEventListener("click",function() {
		count2++;
   if(!gameOver){
      span2.textContent=count2;
      if(count2==span3.textContent){
         gameOver=true;
         span2.style.color="green";
      }
   }
})

b3.addEventListener("click",function(){
  count2=0;
  count1=0;
  
  
  gameOver=false;
  document.getElementById("span1").textContent="0";
  document.getElementById("span2").textContent="0";
  document.getElementById("span1").style.color="black";
  document.getElementById("span2").style.color="black";
})

input.addEventListener("change",function(){
   span3.textContent=input.value;
})