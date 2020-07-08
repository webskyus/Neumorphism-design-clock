'use strict';

const seconds = document.querySelector('[data-seconds-hand]'),
			hours   = document.querySelector('[data-hour-hand]');

setInterval(setClock, 1000);

function setClock() {
	let date = new Date(),
			secondsRation = date.getSeconds() / 60, 
			minutesRation = (secondsRation + date.getMinutes()) / 60,
			hoursRation = (minutesRation + date.getHours()) / 12;

	setRation(seconds, secondsRation);
	setRation(hours, hoursRation);
}

function setRation(elem, rationRation) {
	elem.style.setProperty('--rotation', rationRation * 360);
}

setClock();