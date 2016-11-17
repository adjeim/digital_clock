function placeZero(here) {
	if (here < 10) {
		here = "0" + here;
	}

	return here;
}


function showCurrentTime() {

	var time = new Date();

	var hours = placeZero(time.getHours());
	var minutes = placeZero(time.getMinutes());
	var seconds = placeZero(time.getSeconds());


	var hexTime = document.getElementsByClassName("showHex")[0];
	hexTime.innerHTML = "#" + hours + minutes + seconds;

	var bgColor = document.getElementsByTagName("body")[0];
	bgColor.style.backgroundColor = "#" + hours + minutes + seconds;

	setTimeout(showCurrentTime, 1000);

}

showCurrentTime();


