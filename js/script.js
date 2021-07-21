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

function switchColors(element) {
    links = document.getElementsByClassName("link-menu");

    for (var i = 0; i < links.length; i++) {
        links.item(i).style.color = 'black';
        links.item(i).style.borderBottom = '#1052df 0 solid';
    }
    element.style.borderBottom = '#1052df 5px solid';
}