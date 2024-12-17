// ### 3. Insertion Sort
// - *Best Case:* O(n)
// - *Average Case:* O(n^2)
// - *Worst Case:* O(n^2)
// - *Space Complexity:* O(1)




function insertionSort(arr){
    for(let i=1;i<arr.length;i++){        //should start from 1
        let temp = arr[i]
        let j = i-1
        while(j>=0&&arr[j]>temp){
            arr[j+1] = arr[j]
            j--
        }
        arr[j+1] = temp 
    }
}


const arr = [10,9,8,7,6,5,4,3,2,1,-1]
insertionSort (arr)
console.log(arr)

//------------------------------------------------------------//
