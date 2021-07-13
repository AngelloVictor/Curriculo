
// Atualiza o titulo da pagina de acordo com a hora do dia
function dateTimeTitle() {
    var hour = new Date().getHours();

    if (hour > 6 && hour <= 12) {
        document.getElementById("titulo-adaptativo").innerHTML = "Bom dia! Como esta?"

    } else if (hour > 12 && hour < 18) {
        document.getElementById("titulo-adaptativo").innerHTML = "Boa Tarde! Como esta?"

    } else  {
        document.getElementById("titulo-adaptativo").innerHTML = "Boa Noite! Como esta?"

    }    
}


function backgroundTime() {
    var hour = new Date().getHours();

    if (hour > 6 && hour <= 12) {
        document.body.style.backgroundColor = "#ebe6d6";

    } else if (hour > 12 && hour < 18) {
        document.body.style.backgroundColor = "#bf7e78";

    } else  {
        document.body.style.backgroundColor = "#193d4b";
    } 
}


//arrumo depois xD

window.addEventListener("load",function() { backgroundTime() });
dateTimeTitle();

