function calculate(){
    const value = document.getElementById("inValue").value;
    const fromBase = parseInt(document.getElementById("inBase").value);
    const toBase = parseInt(document.getElementById("outBase").value);

    if(value == ""){
        document.getElementById("outValue").innerHTML = "Esperando entrada...";
        return;
    }
    
    if(fromBase == 2 && !/[0-1]/.test(value)){
        document.getElementById("outValue").innerHTML = "Apenas 0 e 1 aceitos";
        return;
    }
    if(fromBase == 8 || fromBase == 10 && /[A-Za-z]/.test(value)){
        document.getElementById("outValue").innerHTML = "Não utilize letras para essa base";
        return;
    }
    if(fromBase == 16 && /[G-Zg-z]/.test(value)){
        document.getElementById("outValue").innerHTML = "Caracteres inválidos";
        return;
    }

    decimal = parseInt(value, fromBase);

    if(isNaN(decimal)){
        document.getElementById("outValue").innerHTML = "Preencha corretamente";
        return;
    }

    document.getElementById("outValue").innerHTML = decimal.toString(toBase).toUpperCase();
}