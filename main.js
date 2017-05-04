function check(){
	
	var answer1=document.quiz.question1.value;
	var answer2=document.quiz.question2.value;
	var answer3=document.quiz.question3.value;
	var correct=0;

	if(answer1=="Natrium"){
		correct++;
	}
	if(answer2=="Kalium"){
		correct++;
	}
	if(answer3=="Aurum"){
		correct++;
	}
	
	var messages=["You need to read more chemistry","You did well, but you can improve","You are an expert chemist"];
	
	var range;

	var pictures=["img/beginner.jpg","img/okay.png","img/expert.jpg"];
	
	if(correct<1)
	{
		range=0;
	}
	if(correct>0 && correct<3)
	{
		range=1;
	}

	if(correct>2)
	{
		range=2;
	}

	document.getElementById("after_submit").style.visibility="visible";
	document.getElementById("message").innerHTML=messages[range];
	document.getElementById("number_correct").innerHTML="You got "+ correct +" correct.";
	document.getElementById("picture").src=pictures[range];
}

function givehint(){
	
	document.getElementById("hint").style.visibility="visible";
	document.getElementById("hint_block").style.visibility="visible";
	document.getElementById("hint").innerHTML="Think of anicient Egyptian town Natron";

}
