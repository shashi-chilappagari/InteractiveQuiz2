function populate(){
	if(quiz.isEnded()){
		showScores();
	}
	else{
		//show questions
		var element=document.getElementById("question");
		element.innerHTML=quiz.getQuestionIndex().text;

		//show choices
		var choices=quiz.getQuestionIndex().choices;
		for(var i=0;i<choices.length;i++){
			var element=document.getElementById("choice"+i);
			element.innerHTML=choices[i];
			guess("btn"+i,choices[i]);
		}
		showProgress();
	}
}

function guess(id,guess){
	var button=document.getElementById(id);
	button.onclick=function(){
		quiz.guess(guess);
		populate();
	}
}

function showProgress(){
	var currentQuestionNumber=quiz.questionIndex+1;
	var element=document.getElementById("progress");
	element.innerHTML="Question "+currentQuestionNumber + " of "+quiz.questions.length;

}

function showScores(){
	var gameOverHtml="<h1>Result</h1>";
	gameOverHtml+="<h2 id='score'>Your score: " + quiz.score+ "</h2>";
	var element=document.getElementById("quiz");
	element.innerHTML=gameOverHtml;
}
var questions=[
	new Question("What is the capital of Japan",["Tokyo","Osaka","Seoul","Beijing"],"Tokyo"),
	new Question("What is the capital of Finland",["Oslo","Helsinki","Stockholm","Amsterdam"],"Helsinki"),
	new Question("What is the capital of India",["New Delhi","Dhaka","Calcutta","Mumbai"],"New Delhi"),
	new Question("What is the capital of Argentina",["Kyoto","Buenos Aires","La Paz","San Jose"],"Buenos Aires"),
	new Question("What is the capital of Egypt",["Casablanca","Cape Town","Cairo","Kinshasha"],"Cairo")

];

var quiz = new Quiz(questions);

populate();
