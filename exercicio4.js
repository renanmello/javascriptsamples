// Pede ao usuário uma opção entre 1, 2 ou 3
let opcao = prompt("Escolha uma opção (1, 2 ou 3):");

// Usa switch-case para tratar a escolha do usuário
switch(opcao) {
    case '1':
        console.log("Você escolheu a Opção 1");
        break;
    case '2':
        console.log("Você escolheu a Opção 2");
        break;
    case '3':
        console.log("Você escolheu a Opção 3");
        break;
    default:
        console.log("Opção inválida!");
}