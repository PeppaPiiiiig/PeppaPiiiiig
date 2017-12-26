// JavaScript Document
 var td = new Array(),  //保存每个格子的地鼠
 playing = false,  //游戏是否开始
 score = 0, //分数
 beat = 0, //鼠标点击次数
 knock = 0, //鼠标点中老鼠图片的次数
 countDown = 30, //倒计时
 interId = null, //指定 setInterval()的变量
 timeId = null; //指定 setTimeout()的变量
 //游戏结束
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
 //显示当前倒计时所剩时间
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
 //主动停止所有计时
 function timeStop() {
 clearInterval(interId);
 clearTimeout(timeId); 
 }
 //随机循环显示老鼠图片
 function show(){
 if(playing){
 var current = Math.floor(Math.random()*36);
 document.getElementById("td["+current+"]").innerHTML = '<img src="images/pigcry.png">';
 setTimeout("document.getElementById('td["+current+"]').innerHtml=''",1000); //使用 setTimeout()实现3秒后隐藏老鼠图片
 
 }
 }
 //清除所有老鼠图片
 function clearMouse(){
 for(var i=0;i<36;i++){
 document.getElementById("td["+i+"]").innerHTML="";
 }
 }
 //点击事件函数，判断是否点中老鼠
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
 //游戏开始
 function GameStart(){
 playing = true;
 interId = setInterval("show()",1000); 
 document.form1.score.value = score;
 timeShow();
 } 