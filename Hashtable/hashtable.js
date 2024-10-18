class HashTable {
    constructor(size){
        this.table = new Array(size)
        this.size = size
    }

    hash(key){
        let total = 0
        for(let i =0;i<key.length;i++){
            total += key.charCodeAt(i)
        }
        return total%this.size
    }

    
    set(key,value){
        const index = this.hash(key)
        // this.table[index] = value
        const bucket = this.table[index]
        if(!bucket){           
        this.table[index] =[[key,value]]
        }else{
            const sameKey = bucket.find (item => item[0] === key)
            if(sameKey){
                sameKey[1]= value
            }else{
                bucket.push([key,value])
            }
        }
    }

    get(key){
        const index = this.hash(key)
        // return this.table[index]
        const bucket = this.table[index]
        if(bucket){
            const sameKey = bucket.find(item=>item[0]==key)
            if(sameKey){
                return sameKey[1]
            }
        }
        return undefined
    }

    remove(key){
        //check if the value exsist here 

        const index = this.hash(key)
        // this.table[index] = undefined

        const bucket = this.table[index]
        if(bucket){
            const sameKey = bucket.find(item=>item[0]===key)
            if(sameKey){
                bucket.splice(bucket.indexOf(sameKey),1)
            }
        }
    }

    display(){
        for(let i=0;i<this.table.length;i++){
            if(this.table[i]){
                console.log(i,this.table[i])
            }
        }
    }
}


const table = new HashTable(50)

function dupli(str){
    const table = new HashTable(str.length)
    let arr=[]
    for(let i=0;i<str.length;i++){
        char = str[i]
        if(!table.get(char)){
            table.set(char,true)
            arr.push(char)
        }
    }
    return arr.join('')
}
console.log(dupli("joelll"))


table.set("name","Joel")
table.set("age",18)
table.set("place","ekm")
table.set("mane","odi")
// table.remove("name")
table.display()
// console.log(table.get("name"))
// table.display()

