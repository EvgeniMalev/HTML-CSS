document.addEventListener("DOMContentLoaded", function() {
    showPopup(1);
});

function showPopup(popupNumber) {
    const popup = document.getElementById(`popup${popupNumber}`);
    if (popup) {
        popup.style.display = "block";
    }
}

function closePopup(popupNumber) {
    const popup = document.getElementById(`popup${popupNumber}`);
    if (popup) {
        popup.style.display = "none";
        showPopup(popupNumber + 1);
    }
}
