let arr="MadaM"
let res=countfrequency(arr)
console.log(res);

function removeduplicates(arr)
{
   let hashtable={}
   let result=[]
   for(let i=0;i<arr.length;i++)
   {
       let num=arr[i]
       if(!hashtable[num])
       {
           hashtable[num]=true
           result.push(num)
       }
   }
    console.log("hashtable",hashtable);
   return result.join('')
}

function countfrequency(arr)
{
   let hashtable={}
   for(let i=0;i<arr.length;i++)
   {
     let num=arr[i]
     hashtable[num]=(hashtable[num]||0)+1
   }

   return hashtable
}

function hasduplicates(arr)
{
   let hashtable={}
   for(let i=0;i<arr.length;i++)
   {
       let num=arr[i]
       if(hashtable[num])
       {
           return true
       }
       hashtable[num]=true
   }
   return false
}