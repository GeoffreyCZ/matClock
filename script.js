var seconds = 15 * 60;

setInterval(function () {
    updateClock();
}, 1000);

function updateClock() {
    var currentSeconds = 900 - seconds;
    var timeDiv = document.getElementById("time");
    var hand = document.getElementById("hand").style;
    hand.transform = "rotate(" + currentSeconds * 0.4 + "deg)";
    seconds -= 1;
    timeDiv.innerHTML = currentSeconds;
}