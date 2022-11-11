


// Maior Palavra
function clickBigWord() {
    let string = textArea.value;

    let bigger = string.split(" ").reduce((acumulador, valorCorrente) => {
        if (acumulador.length < valorCorrente.length) {
            return valorCorrente;
        }

        return acumulador;
    });

    result.innerHTML = `${bigger}`;
}

// Menor Palavra
function clickSmaller() {
    let string = textArea.value;

    let bigger = string.split(" ").reduce((acumulador, valorCorrente) => {
        if (acumulador.length > valorCorrente.length) {
            return valorCorrente;
        }

        return acumulador;
    });

    result.innerHTML = `${bigger}`;

}

// Converter texto em PDF
function CriaPDF() {
    var texto = textArea.value
    var tela = window.open();
    tela.document.write(texto);
    tela.document.close();
    tela.print();
}
