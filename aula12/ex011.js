var idade = 17
console.log(`Você tem ${idade} anos de idade.`)
if (idade < 16) {
    console.log('Não vota')
} else if (idade < 18 || idade >= 67) {
    console.log('Voto Opcional')
} else {
    console.log('Voto obrigatório')
}