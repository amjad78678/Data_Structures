function factorial(n) {
    let sum = 1
    for (i = 2; i <= n; i++) {
        sum *= i
        console.log(sum)
    }

    return sum

}

const res = factorial(5)

console.log(res)