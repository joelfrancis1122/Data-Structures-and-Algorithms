const alee = [1,1,3,4,3,5,7,8,9,9]
  
let largestt = -Infinity

let secondLargestt = -Infinity

for(let i=0;i<alee.length;i++){
  if(alee[i]>largestt){
    secondLargestt = largestt
    largestt = alee[i]
  }else if(alee[i]>secondLargestt&&alee[i]===largestt){
    secondLargestt = alee[i]
  }
}


  let largest = alee[0]
  let secondLargest = alee[0]
  
  for(let i = 0 ; i< alee.length ; i++) {
    if(alee[i] > largest){
      secondLargest = largest
      largest = alee[i]
    }

   else if(alee[i] > secondLargest){
     if(largest !== alee[i]){
         secondLargest = alee[i]
     }
    }
  }






  console.log('Largest : ',largest,'secondLargest : ',secondLargest)




 const alee1 = [1, 1, 3, 4, 3, 5, 7, 8, 9, 9];


let smallest = Infinity;
let secondSmallest = Infinity;

for (let i = 0; i < alee1.length; i++) {
  if (alee1[i] < smallest) {
    secondSmallest = smallest;
    smallest = alee1[i];
  } else if (alee1[i] < secondSmallest && alee1[i] !== smallest) {
    secondSmallest = alee1[i];
  }
}

console.log('Smallest:', smallest, 'Second Smallest:', secondSmallest);