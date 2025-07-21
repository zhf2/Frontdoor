window.onload = function () {
    // Offset background gradient by ms since midnight
    const date = new Date();
    let ms = -(date.getTime() - date.setHours(0,0,0));
    document.getElementById("body").style.animationDelay = ms + "ms";
}