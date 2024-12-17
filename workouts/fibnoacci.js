//Fibonacci Sequence

function Fibonacci(n){
    const fib =[0,1]
    for(let i=2;i<n ; i ++){
        fib[i] = fib[i-1] + fib[i-2]
    }
    return fib
}
console.log(Fibonacci(5))
// console.log(Fibonacci(3)

function recursiveFibonacci(n) {
    // var n;
    if (n < 2) {
        return n
    }
    return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2)
}
console.log(recursiveFibonacci(3))

// console.log(recursiveFibonacci(4))