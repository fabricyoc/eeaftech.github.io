function toggleContent(element) {
    const paragraph = element.nextElementSibling; // Seleciona o próximo elemento (o <p>)
    const arrow = element.querySelector("#arrow"); // Seleciona a seta
    paragraph.classList.toggle('hidden'); // Adiciona ou remove a classe 'hidden'

    // Altera a seta dependendo do estado
    if (paragraph.classList.contains('hidden')) {
        arrow.innerHTML = '&darr;'; // Setas para baixo
    } else {
        arrow.innerHTML = '&uarr;'; // Setas para cima
    }
}