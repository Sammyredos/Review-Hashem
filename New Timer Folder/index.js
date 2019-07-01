const timerVar = setInterval(countTimer, 1000);
let totalSeconds = 0;
function countTimer(){
	++totalSeconds;
	const hour = Math.floor(totalSeconds/3600);
	const minutes = Math.floor((totalSeconds - hour * 3600)/60);
	const seconds = totalSeconds - (hour * 3600 + minutes * 60);
	return timer = hour + ":" + minutes + ":" + seconds;
}

function displayTimer(){
	document.querySelector(".container-prop").innerHTML = timer;
}
