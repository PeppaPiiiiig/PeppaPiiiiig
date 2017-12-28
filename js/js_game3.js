// JavaScript Document
 var td = new Array(),  
 playing = false,  
 score = 0,
 beat = 0,
 knock = 0, 
 countDown = 30, 
 level=0,
 interId = null, 
 timeId = null; 
 
 function GameOver(){
 timeStop();
 playing = false;
 clearMouse();
 alert("GameOver!\n Your score:"+score);
 score = 0;
 knock = 0;
 beat = 0;
 countDown = 30;
 }

 function timeShow(){
 document.form1.remtime.value = countDown;
 if(countDown == 0){
 GameOver();
 return;
 }else{
 countDown = countDown-1;
 timeId = setTimeout("timeShow()",1000);
 }
 }

 function timeStop() {
 clearInterval(interId);
 clearTimeout(timeId); 
 }
 
 function show(){
 if(playing){
 var current = Math.floor(Math.random()*16);
 document.getElementById("td["+current+"]").innerHTML = '<img src="images/pigcry.png">';
 setTimeout("document.getElementById('td["+current+"]').innerHtml=''",1000); 
 
 }
 }

 function clearMouse(){
 for(var i=0;i<16;i++){
 document.getElementById("td["+i+"]").innerHTML="";
 }
 }

 function hit(id){
 if(playing == false){
 alert("StartGame");
 return;
 }else{
 beat += 1;
 if(document.getElementById("td["+id+"]").innerHTML != ""){
 score += 1;
 knock += 1;
 document.form1.score.value = score;
 document.getElementById("td["+id+"]").innerHTML = "";
 

 }else{
 score += -1;
  document.form1.score.value = score;
 }
 }
 }
 
function GameStart(){
playing = true;
 interId = setInterval("show()",1000); 
 document.form1.score.value = score;
 timeShow();
 }
