// Defina o valor inicial da contagem regressiva
let contador = 10;
// Exiba o valor inicial
console.log(contador);
// Crie uma função para atualizar a contagem regressiva
function atualizarcontagem()
// Diminua o contador em 1
contador--;
// Exiba o valor atual
console.log(contador);
// Verifique se a contagem regressiva chegou a zero
if (contador === 0) {
    // Se a contagem regressiva chegou a zero, pare de chamar a função setInterval
    clearInterval(intervalId);
    console.log("Contagem regressiva concluída")
}