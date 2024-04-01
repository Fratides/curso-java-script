let amigo = {
    nome: 'José',
    sexo: 'M',
    peso: 85.4, // sem aspas para numero
    engordar: function(p = 0) { // Corrigido a definição da função
        console.log('Engordou')
        this.peso += p
    }
}
amigo.engordar(2) /* adicionei mais 2 quilos no peso */
console.log(`${amigo.nome} pesa ${amigo.peso} Kg`);