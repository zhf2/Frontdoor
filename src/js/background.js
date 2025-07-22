window.onload = function () {
    // Offset background gradient by ms since midnight
    const date = new Date();
    let ms = -(date.getTime() - date.setHours(0,0,0));
    document.getElementById("body").style.animationDelay = ms + "ms";

    updateClock();
}

function updateClock() {
    const date = new Date();
    document.getElementById("time_display").textContent =
        date.getHours().toString().padStart(2, "0") + ":" + date.getMinutes().toString().padStart(2, "0");
    setInterval(updateClock, 1000);
}