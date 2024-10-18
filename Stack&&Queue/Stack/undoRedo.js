


// undo and redo using stack






function pop(arr){


    tempStack.push(arr.pop())

    return arr

}

function undo(arr){

    if(tempStack.length>0){

        arr.push(tempStack.pop())
        return arr
    }
}

function redo(arr){

    if(arr.length>0){

        tempStack.push(arr.pop())

        return arr
    }
}












let arr=[10,20,30,40,50]
let tempStack=[]

console.log(pop(arr))
console.log(pop(arr))
// console.log(pop(arr))
// console.log(pop(arr))
console.log(undo(arr))
console.log(undo(arr))
// console.log(tempStack)
// console.log(undo(arr))
// console.log(undo(arr))
// console.log(redo(arr))

