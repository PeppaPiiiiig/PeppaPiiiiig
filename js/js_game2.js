// JavaScript Document
 var td = new Array(),  
 playing = false,  
 score = 0, 
 beat = 0, 
 knock = 0, 
 countDown = 30, 
 level=0,
 terId = null, 
 timeId = null; 
 //game over 
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
 //show time
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
 //stop time
 function timeStop() {
 clearInterval(terId);
 clearTimeout(timeId); 
 }
 // random loop for pic
 function show(){
 if(playing){
 var current = Math.floor(Math.random()*25);
 document.getElementById("td["+current+"]").innerHTML = '<img src="images/pigcry.png">';
 setTimeout("document.getElementById('td["+current+"]').innerHtml=''",2000); 
 
 }
 }
 //clear pic
 function clearMouse(){
 for(var i=0;i<25;i++){
 document.getElementById("td["+i+"]").innerHTML="";
 }
 }
 //hit event
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
 //game start
function GameStart(){
playing = true;
 terId = setInterval("show()",1000); 
 document.form1.score.value = score;
 timeShow();
 }
