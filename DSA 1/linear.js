let arr=[1,2,3,43,32,2,2,33,4,4,,4,5,5556,66,77]
let target=999
let res=0
for(i=0;i<arr.length;i++){
    if(arr[i]==target){
    res=i
    }else{
        res=-1
    }
}
console.log(res)