function array(value,row,col)
{
  let arr=[]
  let res =[]
  for(let i=0;i<row;i++)
  {
    arr.push([])
    for(let j=0;j<col;j++)
    {
      arr[i].push(value[i])
      //value.push(col[i])
      res.push(arr[i][j])
    }
  }
  console.log(res)
  return arr
}
  
let value=[1,2,3,4,5,6]
console.log(array(value,5,4))