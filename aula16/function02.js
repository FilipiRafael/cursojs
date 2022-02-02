// Aplicar default nos parâmetros para funções artméticas 
function soma(n1=0, n2=0) {
    return n1 + n2
}

let resultado = soma(2,5)
console.log(`A soma é: ${resultado}`)