function entrar() {
    var botao = window.document.querySelector('input.botao')
    botao.style.background = '#2E933C'
    botao.style.color = 'white'
}

function sair() {
    var botao = window.document.querySelector('input.botao')
    botao.style.background = 'white'
    botao.style.color = 'black'
}

function gerar() {
    //var resultado = window.document.querySelector('div#res')
    var resultadoSelect = document.getElementById('seltab')
    var txtn = window.document.querySelector('input#txtn')

    if (txtn.value.length == 0) {
        window.alert('[ERRO] Por favor digite um número!')
    } else {
        let numero = Number(txtn.value)
        let contador = 1
        resultadoSelect.innerHTML = ''
        while (contador <= 10) {
            let item = document.createElement('option')
            item.text = `${numero} x ${contador} = ${numero * contador}`
            item.value = `resultadoSelect${contador}`
            resultadoSelect.appendChild(item)
            c++
        }
        
    }
    
}