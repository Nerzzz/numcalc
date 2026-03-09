function calculate(){
    const value = document.getElementById("inValue").value;
    const fromBase = parseInt(document.getElementById("inBase").value);
    const toBase = parseInt(document.getElementById("outBase").value);

    decimal = parseInt(value, fromBase);

    if(isNaN(decimal)){
        document.getElementById("outValue").innerHTML = "Preencha corretamente!";
        return;
    }

    document.getElementById("outValue").innerHTML = decimal.toString(toBase).toUpperCase();
}