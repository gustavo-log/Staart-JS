class Fila{
    constructor(){
         this.itens = []
    }
   enqueue(item){
    this.itens.push(item)
   }
    
   isEmply(){
    return this.itens.length == 0
   }

   dequeue(){
    if(this.isEmply()) return undefined

    return this.itens.shift()
   }

   front(){
    return this.itens[0]
   }

   rear(){
    return this.itens[this.itens.length - 1]
   }
}

var filas = new Fila()
filas.enqueue('Ford Ka')
filas.enqueue('Voyage')
filas.enqueue('Prisma')
filas.enqueue('Onix')
filas.dequeue()

console.table(filas.itens)
console.log(filas.isEmply())
console.log(filas.front())
console.log(filas.rear())


// Deques

class Deques{
    constructor(){
        this.itens = []
    }

    insertFront(item){
       return this.itens.unshift(item)
    }

    insertLast(item){
        return this.itens.push(item)
    }

    deleteFront(){
        return this.itens.shift()
    }

    deleteLast(){
        return this.itens.pop()
    }

    isEmply(){
        return this.itens.length == 0
    }

    front(){
        return this.itens[0]
    }

    rear(){
        return this.itens[this.itens.length - 1]
    }
}

const deque = new Deques
deque.insertFront('Ferrari')
deque.insertFront('Fusca')
deque.insertFront('Del Ray')
deque.insertLast('Camaro')
deque.insertLast('Fusion')

deque.deleteFront()
deque.deleteLast()

console.table(deque.itens)

console.log(deque.front())
console.log(deque.rear())