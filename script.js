function showCurrentTime() {

	var time = new Date();

	var hours = time.getHours();
	var minutes = time.getMinutes();
	var seconds = time.getSeconds();


	var hexTime = document.getElementsByClassName("showHex")[0];
	hexTime.innerHTML = "#" + hours + minutes + seconds;

}

showCurrentTime();












// hexTime.innerHTML = 

// newDate