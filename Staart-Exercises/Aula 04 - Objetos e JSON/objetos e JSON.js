const dados = {                         // a Inicialização de um Objeto é dada por chaves{}
 nome: 'Gustavo',
 nascimento: '18/05/2005',
 rg: 570843492,
 sexo: 'M'
}

console.table(dados)
console.log(dados.nome)                // acessar uma propriedade expecífica, basta colocar o nome do obj, ponto, e da propriedade


class dados2 {                         // class: possível definir uma estrutura padronizada de como deve ser um object
    constructor( nome, nascimento, rg, sexo){      //constructor é usado para atribuir as propriedades contidas no object
        this.nome = nome
        this.nascimento = nascimento
        this.rg = rg
        this.sexo = sexo
    }
}
var gustavo = new dados2('Gustavo', '18/05/2005', 570843492, 'M')
var Lavinez = new dados2('Lavinez', '07/05/2005', 567583715, 'F')

console.table(gustavo)
console.table(Lavinez)

for(var propriedades in gustavo){
    console.log(`${propriedades}: ${gustavo[propriedades]}`)
}

// Teste

class pessoal{
    constructor(cpf, rg, telefone){
        this.cpf = cpf
        this.rg = rg
        this.telefone = telefone
    }
    
}
var G = new pessoal(54820899830, 570843492, 11991389160)

console.table(G)

for(var propriedades in G){
    console.log(`${propriedades}: ${G[propriedades]}`)
}