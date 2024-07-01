
let arr = [2, 1, 3, 4, 5, 5, 7, 8, 9, 10]

for(let i=0;i<arr.length;i++){
    if(arr[i]%2!==0){

        while(arr[i+1]%2!==0){
        arr.splice(i+1,1)
        }
    }
}

console.log(arr)