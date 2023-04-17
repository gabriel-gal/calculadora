var visor = document.getElementById("visor");
var numVisor = document.getElementById("numVisor");
var num1;

function inserir (num){
    if (visor.textContent == "0"){
        visor.innerHTML = num;
    }else{
        visor.innerHTML += num;
    }
}

function inserirPonto (ponto){
    visorTexto = visor.textContent;

    if (!(String(visorTexto).includes(ponto))) {
        visor.innerHTML += ponto;
    } 
}

function apagarUlt (){
    visorTexto = visor.textContent;

    if ( visorTexto.length == 1){
        visor.innerHTML = "0";
    }else {
        if(visorTexto != "0"){
        visorNew = visorTexto.substring(0, visorTexto.length - 1);
        visor.innerHTML = visorNew;
        }
    }
}

function limpar (){
    visor.innerHTML = "0";
    num1 = "";
}

function operacao (operario) {
    if (operario == "mais"){
        num1 = visor.textContent + "+";
        visor.innerHTML = "0";
        numVisor.innerHTML = num1;
    }else if (operario == "menos"){
        num1 = visor.textContent + "-";
        visor.innerHTML = "0";
        numVisor.innerHTML = num1;
    }else if (operario == "dividir"){
        num1 = visor.textContent + "/";
        visor.innerHTML = "0";
        numVisor.innerHTML = num1;
    }else if (operario == "multip"){
        num1 = visor.textContent + "*";
        visor.innerHTML = "0";
        numVisor.innerHTML = num1;
    }
}

function resultado (){
    if(num1){
        if ( visor.textContent == 0 && num1.includes("/")){
            alert("Não da para dividir por Zero");
            visor.innerHTML = "0";
            numVisor.innerHTML = "";
        }else{
            result = eval(num1 + visor.textContent)
            numVisor.innerHTML = "";
            visor.innerHTML = result;
        }
    }
}   