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

  // Initialization
  resetButton.prop('disabled', true);
  elapsedTimeDiv.innerHTML = formatTime(0);
  remainingTimeDiv.innerHTML = formatTime(totalTime);

  $('#timesUpCloseButton').on('click', function () {
    $('#timesUp').modal('hide');
  });

  startButton.on('click', function () {
    $(this).prop('disabled', true);
    resetButton.prop('disabled', false);
    ticking = setInterval(function () {
      rotateHand();
    }, 10);
    ticking2 = setInterval(function () {
      incrementTimer();
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

    timeout = setTimeout(function () {
      $('#timesUp').modal('show');
      endSession();
    }, totalTime * 1000);
  });

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

  resetButton.on('click', function () {
    endSession();
  });
});