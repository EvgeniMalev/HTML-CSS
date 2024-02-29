document.getElementById('text1').addEventListener('click', function() {
    toggleImage('Greece');
});

document.getElementById('text2').addEventListener('click', function() {
    toggleImage('Italy');
});

document.getElementById('text3').addEventListener('click', function() {
    toggleImage('Spain');
});

function toggleImage(country) {
    var images = document.getElementsByClassName('country-image');
    for (var i = 0; i < images.length; i++) {
        if (images[i].alt === country) {
            images[i].style.display = 'block';
        } else {
            images[i].style.display = 'none';
        }
    }
    document.getElementById('text-content').style.display = 'none';
    document.getElementById('image-content').style.display = 'block';
}
