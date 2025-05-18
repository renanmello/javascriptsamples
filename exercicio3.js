// Lê a nota do usuário e converte para número decimal
let nota = parseFloat(prompt("Digite uma nota de 0 a 10:"));

// Avalia a situação do aluno com base na nota
if (nota >= 7) {
    console.log("Aprovado");
} else if (nota >= 5) {
    console.log("Recuperação");
} else {
    console.log("Reprovado");
}