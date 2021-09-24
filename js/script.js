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

    let links = document.getElementsByClassName("link-menu");

    for (var i = 0; i < links.length; i++) {
        console.log(links[i].style.color);
        links.item(i).style = "";
    }

    element.style.borderBottom = '#00b7ff 2px solid';
}