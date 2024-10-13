testo = document.getElementById("testo");
testo2 = document.getElementById("testo2");
testo3 = document.getElementById("testo3");

function attiva(input){
    testo.value = input
    document.getElementById("acceso").disabled = true;
} 

function attiva2(input){
    testo2.value = input
    document.getElementById("acceso2").disabled = true;
} 

function attiva3(input){
    testo3.value = input
    document.getElementById("acceso3").disabled = true;
} 

function annotazione() {
    document.getElementById("acceso").disabled = false;
}

function annotazione2() {
    document.getElementById("acceso2").disabled = false;
}

function annotazione3() {
    document.getElementById("acceso3").disabled = false;
}
