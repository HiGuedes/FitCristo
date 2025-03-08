
// funções de botões no index.html
function mostrarLogin() {
    document.getElementById("loginBox").style.display = "block";
}

function validarLogin() {
    let user = document.getElementById("usuario").value;
    let pass = document.getElementById("senha").value;

    if (user === "emanuel" && pass === "iblc2025") {
        window.location.href = "ranking.html";
    } else {
        alert("Usuário ou senha incorretos!");
    }
}

function registrarLogin(){
    window.location.href = "painel.html";
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