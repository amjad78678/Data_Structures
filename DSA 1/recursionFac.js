//   function main(n){
    

//      if(n<=1){
//         return 1
//      }
//    return n*main(n-1)

//   }


//   console.log( main(5))


function factorial(n){
//base case

if(n<2){
    return 1
}else{
    return n*factorial(n-1)
}

}

 console.log(factorial(6)) 