class Pilhas{
    constructor(){
        this.itens = []
    }

    push(item){
        this.itens.push(item)  // adicionei o método push, q inseri um novo elemento
    }

    pop(){
        this.itens.pop()    //adicionei o método pop()
    }

    top(){
        return this.itens[this.itens.length - 1]
    }
}

const pilhas = new Pilhas()
pilhas.push(10) // base
pilhas.push(20)
pilhas.push(30)
pilhas.push(40) //ultimo valor

pilhas.pop()  //remove sempre o último valor por isso não é necessário passar parametro

console.table(pilhas.top())  