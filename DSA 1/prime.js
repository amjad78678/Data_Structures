// function isPrime(n) {

//     if (n < 2) {
//         return false
//     }

//     for (i = 2; i < n; i++) {
//         if (n % i === 0) {
//             return false
//         }
//     }
//     return true

// }


// console.log(isPrime(6))


























function isPrime(n) {

    if (n < 2) {
        return false
    }

    for(i=2;i<n;i++){
        if(n%i==0){
            return false
        }
    }
      return true
}

console.log(isPrime(12))