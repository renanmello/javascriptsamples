// Recebe peso e altura do usuário
let peso = parseFloat(prompt("Digite seu peso (kg):"));
let altura = parseFloat(prompt("Digite sua altura (m):"));

// Calcula o IMC usando a fórmula: peso / (altura * altura)
let imc = peso / (altura * altura);

// Determina a categoria com base no valor do IMC
if (imc < 18.5) {
    console.log("Baixo peso");
} else if (imc < 24.9) {
    console.log("Peso normal");
} else if (imc < 29.9) {
    console.log("Sobrepeso");
} else {
    console.log("Obesidade");
}