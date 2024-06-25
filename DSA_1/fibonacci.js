// function fibonacci(n) {

//     const fibo = [0, 1]
//     let sum = 0
//     for (i = 0; i < fibo.length; i++) {
//         sum = fibo[i] + fibo[i + 1]
//         fibo.push(sum)
//     }


//     console.log(fibo)
// }

// fibonacci(7)


function fibonacci(n) {
    const fibo = [0, 1];

    for (let i = 2; i < n; i++) {
        fibo[i] = fibo[i - 1] + fibo[i - 2];

    }

    return fibo
}

const result = fibonacci(7);

console.log(result);