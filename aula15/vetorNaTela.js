let valores = [8, 1, 7, 4, 2, 9, 1, 7]
valores.sort()

/*
for (let indice = 0; indice < valores.length; indice++) {
    console.log(`O índice ${indice} tem o valor ${valores[indice]}.`)
}
*/

// Funciona apenas para Arrays e Objects
for (let indice in valores) {
    console.log(`O índice ${indice} tem o valor: ${valores[indice]}.`)
}

// Busca de valores dentro de um Array (Vetor)
let posicao = valores.indexOf(1)
if (posicao == -1) {
    console.log(`O valor não foi encontrado.`)
} else {
    console.log(`O valor está na posição ${posicao}.`)
}