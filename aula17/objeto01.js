let amigo = {nome: 'José',
sexo: 'M',
idade: 21, envelhecer(idade=0){
    console.log('Envelheceu!')
    this.idade += idade
}
}

amigo.envelhecer(20)
console.log(`O ${amigo.nome} tem ${amigo.idade} anos de idade.`)