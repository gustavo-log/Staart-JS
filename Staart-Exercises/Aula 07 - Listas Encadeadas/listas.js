class No{
    constructor(elemento){
        this.elemento = elemento
        this.proximo = undefined
    }
}

class ListaEncadeada{
    constructor(){
        this.head = undefined
    }

    insertFirst(elemento){
        var novo = new No(elemento)  //transformar em nó
        let atual                    // variavel usada para controlar o elemento q estamos trabalhando
            if(!this.head){          // verificar se o Head é undefined, se sim, a lista está vazia com isso devemos atribuir o head ao novo nó
                this.head = novo     // atribuindo o head ao novo Nó
            }else{                   // se o head não for undefined, vamos usar a variavel atual
                atual = this.head    // esse Nó atual vai receber o conteúdo de head
                novo.proximo = atual // aponta para o atual q é o antigo head
                this.head = novo     // head recebe o novo Nó 
            }
        return elemento
    }

    insertLast(elemento){
        var novo = new No(elemento)
        let atual
            if(!this.head){
                this.head = novo
            }else{
                atual = this.head
            while(atual.proximo){   //laço de repetição criado para chegar ao final da lista, verificando se o atual.proximo não é undefined
                atual = atual.proximo  //cotinuando, enquando a condição de atual.proximo for verdadeira vamos passar para o prox item da lista
            }
            atual.proximo = novo   //inserir o elemento no 'vagã' que tem o ponteiro undefined, para adixionar o elemento no ultimo item da lista
        }
        return elemento
    }

    searchAt(posicao){
        let atual = this.head
            for(let i = 0; i < posicao && atual; i++){
                atual = atual.proximo
            }
        return atual
    }

    insertAt(elemento, posicao){
        const novo = new No(elemento)
            if(posicao == 0){
                this.insertFirst(elemento)
            }else{
                const anterior = this.searchAt(posicao - 1)
                const atual = anterior.proximo
                novo.proximo = atual
                anterior.proximo = novo
            }
        return elemento
    }

    treversal(){
        if(!this.head){
            return undefined
        }else{
            let atual = this.head
            let elementosLista = []
                while(atual){
                    elementosLista.push(atual.elemento)
                    atual = atual.proximo
                }
            return elementosLista
        }
    }

    deleteAt(posicao){
        let atual = this.head
        if(posicao == 0){
            this.head = atual.proximo
        }else{
            let anterior = atual
            for(let i = 0; i < posicao; i++){
                anterior = atual
                atual = atual.proximo
            }
            anterior.proximo = atual.proximo
        }
        return posicao
    }

    indexOf(elemento){
        let atual = this.head
        let contador = 0
        while(atual){
            if(atual.elemento == elemento){
                return contador
                break
            }else{
                atual = atual.proximo
                contador++
            }
        }
        return undefined 
    }
}

const trem = new ListaEncadeada()
console.log(trem.insertFirst('Locomotiva'))
console.log(trem.insertLast('Vagão 1'))
console.log(trem.insertLast('Vagão 2'))
console.log(trem.insertAt('Novo Vagão', 2))
console.log(trem.deleteAt(2))
console.log(trem.searchAt(2))
console.log(`Posição da Locomotiva: ${trem.indexOf('Locomotiva')}`)
console.log(`Posição do Vagão 2: ${trem.indexOf('Vagão 2')}`)
console.table(trem.treversal())
