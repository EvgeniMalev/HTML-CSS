document.addEventListener("DOMContentLoaded", function() {
    var video = document.getElementById("myVideo");
    var content = document.getElementsByClassName("center")[0];
    var buttons = document.getElementsByClassName("buttons-container")[0];
    var pauseButton = document.getElementById("myBtn");

    function handleVideoState() {
        if (video.paused) {
            video.play();
            pauseButton.textContent = "Pause";
            content.classList.add("hidden");
            buttons.classList.add("hidden");
        } else {
            video.pause();
            pauseButton.textContent = "Play";
            content.classList.remove("hidden");
            buttons.classList.remove("hidden");
        }
    }

    pauseButton.addEventListener("click", function() {
        handleVideoState();
    });

    video.addEventListener("play", function() {
        content.classList.remove("hidden");
        buttons.classList.remove("hidden");
    });

    video.addEventListener("pause", function() {
        content.classList.add("hidden");
        buttons.classList.add("hidden");
    });
});
