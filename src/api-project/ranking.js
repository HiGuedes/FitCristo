async function carregarMelhorParticipante() {
    const url = 'https://script.google.com/macros/s/AKfycbwgyiURHioe_dIWihaAGVj-aTV-S0vuF7ytj0QTJDKe3kTVcJa47REPqKkdnyLKpHkw/exec'; // Substitua pela URL da sua API

    try {
        const response = await fetch(url);
        const data = await response.json();

        // Supondo que o nome do melhor participante esteja na primeira célula da planilha
        const nomeMelhor = data[0][0];
        document.getElementById('nome-melhor').textContent = nomeMelhor;
    } catch (error) {
        console.error('Erro ao carregar o melhor participante:', error);
    }
}

carregarMelhorParticipante();

// Abre o modal
function abrirModal() {
    document.getElementById("modalGrafico").style.display = "flex";
}

// Fecha o modal
function fecharModal() {
    document.getElementById("modalGrafico").style.display = "none";
}

// Fecha o modal ao clicar fora dele
window.onclick = function(event) {
    let modal = document.getElementById("modalGrafico");
    if (event.target === modal) {
        fecharModal();
    }
};
