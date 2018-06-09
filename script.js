$(document).ready(function () {
		const totalTime = 15 * 60;
		let handStep = totalTime - 1;
		let seconds = totalTime - 1;
		let ticking;
		let ticking2;
		let timeout;
		const hand = document.getElementById("hand").style;
		const elapsedTimeDiv = document.getElementById("elapsedTime");
		const remainingTimeDiv = document.getElementById("remainingTime");
		const startButton = $('#startButton');
		const resetButton = $('#resetButton');
		const interval1 = 30;
		const interval2 = 180;
		const interval3 = 270;
		const interval4 = 330;
		const interval5 = 420;
		const interval6 = 720;
		const interval7 = 900;

		// Initialization
		resetButton.prop('disabled', true);
		elapsedTimeDiv.innerHTML = formatTime(0);
		remainingTimeDiv.innerHTML = formatTime(totalTime);

		$('#timesUpCloseButton').on('click', function () {
			$('#timesUp').modal('hide');
		});

		startButton.on('click', function () {
			startSession();
		});

		resetButton.on('click', function () {
			endSession();
		});

		function startSession() {
			startButton.prop('disabled', true);
			resetButton.prop('disabled', false);
			ticking = setInterval(function () {
				rotateHand();
			}, 10);
			ticking2 = setInterval(function () {
				incrementTimer();
				manageHighlight();
			}, 1000);

			function rotateHand() {
				let currentTime = totalTime - handStep;
				hand.transform = "rotate(" + currentTime * (360 / (totalTime * 100)) + "deg)";
				handStep -= 1;
			}

			function incrementTimer() {
				elapsedTimeDiv.innerHTML = formatTime(totalTime - seconds);
				remainingTimeDiv.innerHTML = formatTime(seconds);
				seconds -= 1;
			}

			function manageHighlight() {
				if (totalTime - seconds - 1 < interval1) {
					$('.interval1').addClass('highlight');
				} else if (totalTime - seconds - 1 < interval2 && totalTime - seconds - 1 > interval1) {
					$('.interval').removeClass('highlight');
					$('.interval2').addClass('highlight');
				} else if (totalTime - seconds - 1 < interval3 && totalTime - seconds - 1 > interval2) {
					$('.interval').removeClass('highlight');
					$('.interval3').addClass('highlight');
				} else if (totalTime - seconds - 1 < interval4 && totalTime - seconds - 1 > interval3) {
					$('.interval').removeClass('highlight');
					$('.interval4').addClass('highlight');
				} else if (totalTime - seconds - 1 < interval5 && totalTime - seconds - 1 > interval4) {
					$('.interval').removeClass('highlight');
					$('.interval5').addClass('highlight');
				} else if (totalTime - seconds - 1 < interval6 && totalTime - seconds - 1 > interval5) {
					$('.interval').removeClass('highlight');
					$('.interval6').addClass('highlight');
				} else if (totalTime - seconds - 1 < interval7 && totalTime - seconds - 1 > interval6) {
					$('.interval').removeClass('highlight');
					$('.interval7').addClass('highlight');
				}
			}

			timeout = setTimeout(function () {
				$('#timesUp').modal('show');
				endSession();
			}, totalTime * 1000);
		}

		function endSession() {
			clearInterval(ticking);
			clearInterval(ticking2);
			clearTimeout(timeout);
			handStep = totalTime - 1;
			seconds = totalTime - 1;
			elapsedTimeDiv.innerHTML = formatTime(0);
			remainingTimeDiv.innerHTML = formatTime(totalTime);
			hand.transform = "none";
			startButton.prop('disabled', false);
			resetButton.prop('disabled', true);
		}
	}
);