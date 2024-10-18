const str = 'apple,orange,32,,joekl,332,dssas'

let start = 0
let end =0
let res =[]
for(let i = 0 ; i<str.length ; i++){
  if(str[i] === ','){
    end = i
    if(str.slice(start,end).length > 1){
    res.push(str.slice(start,end))
    } else{
      res.push(null)
    }
    start=end+1
  }
}

console.log(res)