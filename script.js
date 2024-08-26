function codificar() {
    const texto = document.getElementById("digitarTexto").value;
    const codificado = btoa(texto);
    atualizarResultado(codificado);
}

function decodificar() {
    const texto = document.getElementById("digitarTexto").value;
    try {
        const decodificado = atob(texto);
        atualizarResultado(decodificado);
    } catch (e) {
        atualizarResultado("Texto inválido para decodificação.");
    }
}

function atualizarResultado(resultado) {
    const resultadoElemento = document.querySelector(".naoencontrada");
    resultadoElemento.innerText = resultado;

    const subTexto = document.querySelector(".digitetexto");
    subTexto.style.display = "none";

    const copiarBtnDiv = document.querySelector(".copiarresultado");
    copiarBtnDiv.style.display = "block";

    const traducaoImg = document.querySelector(".traducaoimg");
    if (traducaoImg) {
        traducaoImg.style.display = "none";
    }
}

function copiar() {
    const resultadoElemento = document.querySelector(".naoencontrada");
    const textoParaCopiar = resultadoElemento.innerText;

    navigator.clipboard.writeText(textoParaCopiar).catch(err => {
        console.error("Erro ao copiar o texto: ", err);
    });
}



