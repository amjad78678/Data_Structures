let result = []
let arr = [6, 5, 6, 4, 3, 6, 9, 8, 0, 6]

for (i = 0; i < arr.length; i++) {
    if (arr[i] == 6) {
        arr.push(arr[i])
        arr.splice(i, 1)
    }
}



console.log(arr, 'hello')