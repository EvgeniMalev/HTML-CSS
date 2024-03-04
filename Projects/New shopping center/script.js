document.addEventListener('DOMContentLoaded', function() {
   
    var movingObject = document.getElementById('movingObject');
   
    var leftPosition = 0;
    var topPosition = 0;

    var totalSteps = 24;

    var intervalTime = 1000; 

    var stepSizeX = window.innerWidth / totalSteps;
    var stepSizeY = window.innerHeight / totalSteps;

    function moveObject() {
    
        leftPosition += stepSizeX;
        topPosition += stepSizeY;

        movingObject.style.left = leftPosition + 'px';
        movingObject.style.top = topPosition + 'px';

        if (leftPosition >= window.innerWidth || topPosition >= window.innerHeight) {
            clearInterval(animationInterval);

            startCountdownTimer();
        }
    }

    var animationInterval = setInterval(moveObject, intervalTime);

    function startCountdownTimer() {
        var countDownDate = new Date("Jun 5, 2024 15:37:25").getTime();

        var countdownfunction = setInterval(function() {

            var now = new Date().getTime();

            var distance = countDownDate - now;

            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);

            document.getElementById("demo").innerHTML = days + "d " + hours + "h " +
                minutes + "m " + seconds + "s ";

            if (distance < 0) {
                clearInterval(countdownfunction);
                document.getElementById("demo").innerHTML = "EXPIRED";
            }
        }, 1000);
    }
});
