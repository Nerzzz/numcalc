function calculate(){
    const value = document.getElementById("inValue").value;
    const fromBase = parseInt(document.getElementById("inBase").value);
    const toBase = parseInt(document.getElementById("outBase").value);

    const patterns = {
        2: /^[01]+$/,
        8: /^[0-7]+$/,
        10: /^[0-9]+$/,
        16: /^[0-9A-Fa-f]+$/
    };
    
    const output = document.getElementById("outValue");

    if(value == ""){
        output.value = "Esperando entrada...";
        return;
    }

    if(!patterns[fromBase].test(value)){
        output.value = "Caracteres inválidos";
        return 
    }

    const out_value = parseInt(value, fromBase);

    if(isNaN(decimal)){
        out_value.value = "Preencha corretamente";
        return;
    }

    output.value = out_value.toString(toBase).toUpperCase();
}

function copyOutput(){
    const output = document.getElementById("outValue").value;
    navigator.clipboard.writeText(output);
}