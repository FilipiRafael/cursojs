function parimpar(n) {
    if (n % 2 == 0) {
        return 'par'
    } else {
        return 'impar'
    }
}

let resultado = parimpar(10)
console.log(`O número digitado é ${resultado}.`)