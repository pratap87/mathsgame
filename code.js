var play = false;
var score;
var timeremaining;
document.getElementById("check").onclick = function () {

	if (play == true) {
		location.reload();

	} else {
		play = true;
		score = 0;
		document.getElementById("scorevalue").innerHTML = score;
		show("timer");
		timeremaining = 60;
		document.getElementById("timeremain").innerHTML = timeremaining;
		//game over box
		hide("gameover");
		document.getElementById("check").innerHTML = "Reset Game";
		startCountdown();
		//generate Q&A
		generate()



	}
}
for (i = 1; i <= 4; i++)
	document.getElementById("box" + i).onclick = function () {
		if (play == true) {
			if (this.innerHTML == correctanswer) {
				score++;
				document.getElementById("scorevalue").innerHTML = score;
				//show coorect box and hide wrong
				hide("wrong");
				show("correct");
				setTimeout(function () {
					hide("correct");
				}, 1000);
				//generatee new q
				generate();
			} else {
				//wrong answer
				hide("correct");
				show("wrong");
				setTimeout(function () {
					hide("wrong");
				}, 1000);
			}
		}
	}


function startCountdown() {
	action = setInterval(function ()

		{
			timeremaining -= 1;
			document.getElementById("timeremain").innerHTML = timeremaining;
			if (timeremaining == 0) {
				stopcount();
				show("gameover");

				document.getElementById("gameover").innerHTML = "<p> Game Over</p><p>your score is: "+ score + "</p>";
				hide("timer");
				hide("correct");
				hide("wrong");

				play = false;
				document.getElementById("check").innerHTML = "Start Game";
			}
		}, 1000);

}

function stopcount() {
	clearInterval(action);
}

function hide(Id) {
	document.getElementById(Id).style.display = "none";
}

function show(Id) {
	document.getElementById(Id).style.display = "block";
}

function generate() {
	var x = 1 + Math.round(9 * Math.random());
	var y = 1 + Math.round(9 * Math.random());
	correctanswer = x * y;
	document.getElementById("question").innerHTML = x + "x" + y;
	var correctpos = 1 + Math.round(3 * Math.random());
	document.getElementById("box" + correctpos).innerHTML = correctanswer; //fill one box with correct answer
	var answer = [correctanswer]
	for (i = 1; i < 5; i++) {
		if (i !== correctpos) {
			var wronganswer;
			do {
				wronganswer = 1 + Math.round(9 * Math.random()) * 1 + Math.round(9 * Math.random());
			}
			while (answer.indexOf(wronganswer) > -1)




			document.getElementById("box" + i).innerHTML = wronganswer;
			answer.push(wronganswer);
		}
	}
}
