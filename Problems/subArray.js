var sumOddLengthSubarrays = function(arr) {
    let oddLen = []

    for(let i=1; i<=arr.length; i++){
        if(i%2!==0){
            oddLen.push(i)
        }
    }

    console.log('Odd lengths:', oddLen)

    let sumArr = []

    for(let j = 0; j < oddLen.length; j++){
        let len = oddLen[j]
        for(let i = 0; i <= arr.length - len; i++){
            let sliced = arr.slice(i, i + len)
            let sum = sliced.reduce((a, b) => a + b, 0)
            sumArr.push({subarray: sliced, sum: sum})
        }
    }

    console.log('Subarrays and their sums:', sumArr)

    let totalSum = sumArr.reduce((total, item) => total + item.sum, 0)
    console.log('Total sum:', totalSum)

    return totalSum
};

// Test the function
let arr = [1,4,2,5,3];
sumOddLengthSubarrays(arr);