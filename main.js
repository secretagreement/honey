var question1_word="请问<br>是唐老鸭的<br>小黄鸭么？";
var question1=document.getElementById("question1");

var boyfriend_yes=document.getElementById("boyfriend-yes");
	boyfriend_no=document.getElementById("boyfriend-no");



var word_code=0;
function fade_out(str){
	var question=document.getElementById(id);
}
var timer=setInterval(function(){
	question1.innerHTML=question1_word.substring(0,word_code);
	word_code++;
	if(question1.innerHTML==question1_word){
		console.log("stop");
		boyfriend_yes.style.animationPlayState="running";
		boyfriend_no.style.animationPlayState="running";
		boyfriend_no.disabled="true";
		clearInterval(timer);
	}
},125)
