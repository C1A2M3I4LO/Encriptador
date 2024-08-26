function encriptar(traduccion) {
    const warningElement = document.querySelector("#warning");
    const textarea = document.querySelector("#texto");
    const areaDefault = document.querySelector("#default");
    const areaResult = document.querySelector("#result");
    const textoOut = document.querySelector("#texto_out");

    warningElement.removeAttribute("style");
    const texto = textarea.value;

    // Verificar si el texto contiene caracteres no permitidos
    if (/[^\sa-z]/.test(texto)) {
        warningElement.style.color = "red";
        warningElement.style.fontSize = "16px";
        return;
    }

    // Manejar el caso en que el texto es solo espacios en blanco
    if (!texto.trim()) {
        areaDefault.classList.remove("invisible");
        areaResult.classList.add("invisible");
        return;
    }

    // Mapear los caracteres del texto a sus valores en la traducción
    const out = texto.split('').map(char => traduccion[char] || char).join('');

    // Mostrar el resultado
    areaDefault.classList.add("invisible");
    areaResult.classList.remove("invisible");
    textoOut.innerHTML = out;
}



function desencriptar(traduccion){
    document.querySelector("#warning").removeAttribute("style");
    var textarea = document.querySelector("#texto");
    var texto = textarea.value;
    var area_default = document.querySelector("#default");
    var area_result = document.querySelector("#result");
    var texto_out = document.querySelector("#texto_out");
    if (texto != ""){
        for(var i=0; i < texto.length; i++){
            if(((texto[i] < 'a') || (texto[i] > 'z')) && (texto[i] != ' ')){
                document.querySelector("#warning").style.color = "red";
                document.querySelector("#warning").style.fontSize = "16px";
                return;
            }
            else if((texto.length == 1 && texto == " ") || texto.replace(/ /g, "") == ""){
                area_default.classList.remove("invisible");
                area_result.classList.add("invisible");
                return;
            }
        }
        area_default.classList.add("invisible");
        area_result.classList.remove("invisible");
        // texto = texto.replace(new RegExp(traduccion["a"], "g"), "a");
        // texto = texto.replace(new RegExp(traduccion["e"], "g"), "e");
        // texto = texto.replace(new RegExp(traduccion["i"], "g"), "i");
        // texto = texto.replace(new RegExp(traduccion["o"], "g"), "o");
        // texto = texto.replace(new RegExp(traduccion["u"], "g"), "u");

        for (var letra in traduccion) {
            if (traduccion.hasOwnProperty(letra)) {
                // Reemplaza cada valor de la traducción por la letra correspondiente
                texto = texto.replace(new RegExp(traduccion[letra], "g"), letra);
            }
        }
        texto_out.innerHTML = texto;
    }
    return;
}

function clipboard(){
    const texto_out = document.querySelector("#texto_out");
    navigator.clipboard.writeText(texto_out.value);
}

const enc = document.querySelector('#enc');
const des = document.querySelector('#des');
const copy = document.querySelector('#copiar');

var traduccion = {"a": "ai", "e": "enter", "i": "imes", "o": "ober", "u": "ufat"};

enc.addEventListener( 'click', function() {encriptar(traduccion);} );
des.addEventListener( 'click', function() {desencriptar(traduccion);} );
copy.addEventListener( 'click', function() {clipboard();} );

