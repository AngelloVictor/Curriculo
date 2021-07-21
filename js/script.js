
function backgroundTime() {
    var hour = new Date().getHours();

    if (hour > 6 && hour <= 12) {
        document.body.style.backgroundColor = "#ebe6d6";

    } else if (hour > 12 && hour < 18) {
        document.body.style.backgroundColor = "#bf7e78";

    } else {
        document.body.style.backgroundColor = "#193d4b";
    }
}



//arrumo depois xD

window.addEventListener("load", function () {
    backgroundTime()
});
dateTimeTitle();