$(document).ready(function () {
    var totalTime = 15 * 60;
    var seconds = totalTime;

    $('#start').on('click', function () {
        var ticking = setInterval(function () {
            updateClock();
        }, 100);

        function updateClock() {
            var currentSeconds = totalTime - seconds;
            var timeDiv = document.getElementById("time");
            var hand = document.getElementById("hand").style;
            hand.transform = "rotate(" + currentSeconds * 0.04 + "deg)";
            timeDiv.innerHTML = currentSeconds / 10;
            seconds -= 1;
        }

        setTimeout(function () {
            clearInterval(ticking);
        }, totalTime * 100);
    });
});