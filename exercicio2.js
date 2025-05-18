// Lê a idade do usuário
let idade = parseInt(prompt("Digite sua idade:"));

// Classifica conforme faixa etária
if (idade <= 12) {
    console.log("Criança");
} else if (idade <= 17) {
    console.log("Adolescente");
} else if (idade <= 64) {
    console.log("Adulto");
} else {
    console.log("Idoso");
}