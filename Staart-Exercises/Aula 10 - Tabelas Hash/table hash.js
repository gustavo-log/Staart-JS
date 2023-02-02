class HashTable{
    constructor(){
        this.table = new Array(127)
        this.size = 0
    }

    _hash(key){
        let hash = 0
        for(let i = 0; i < key.lenght; i++){
            hash += key.charCodeAt(i)
        }
        return hash % this.table.length 
    }

    put(key, value){
        let index = this._hash(key)
        this.table[index] = [key, value]
        this.size++
    }

    get(key){
        const index = this._hash(key)
        return this.table[index]
    }

    delete(key){
        const index =this._hash(key)
        if(this.table[index] && this.table[index].length){
            this.table[index] = undefined
            this.size--
            return true
        }else return false
    }

    clear(){
        this.table = []
        this.size = 0
    }

}

const contatos = new HashTable()

contatos.put('gustavo', '11223344')
contatos.put('edilma', '44556677')
contatos.put('david', '778899101')

console.table(contatos.table)
