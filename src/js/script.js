// funções de botões no index.html
if (localStorage.getItem("token") == null) {
    alert("VocÃª precisa estar logado para acessar essa pÃ¡gina");
    window.location.href = "./assets/html/singin.html";
}
  
  const userLogado = JSON.parse(localStorage.getItem("userLogado"));
  
  const logado = document.querySelector("#logado");
  logado.innerHTML = `OlÃ¡ ${userLogado.nome}`;
  
  function sair() {
    localStorage.removeItem("token");
    localStorage.removeItem("userLogado");
    window.location.href = "./assets/html/signin.html";
  }
  

// Dados do registro no painel.html
async function enviarDados() {
    const url = "https://script.google.com/macros/s/AKfycbwgyiURHioe_dIWihaAGVj-aTV-S0vuF7ytj0QTJDKe3kTVcJa47REPqKkdnyLKpHkw/exec"; // Cole a URL correta do Apps Script

    function mostrarRanking() {
        document.getElementById("rankingBox");
        window.location.href = "ranking.html";
    }

    const data = {
        nome: document.getElementById("nome").value,
        categoria: document.getElementById("categoria").value,
        peso: document.getElementById("peso").value,
        imc: document.getElementById("imc").value || "",
        gordura: document.getElementById("gordura").value || "",
        musculo: document.getElementById("musculo").value || "",
        idade: document.getElementById("idade").value || "",
        visceral: document.getElementById("visceral").value || ""
    };

    try {
        const response = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        });

        const result = await response.text();
        alert(result); // Exibe a resposta do servidor

    } catch (error) {
        console.error("Erro ao enviar dados:", error);
        alert("Erro ao enviar dados: " + error.message);
    }
}