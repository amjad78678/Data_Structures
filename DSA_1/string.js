
// const str='amjadali'

// let string=[]
// let temp=0

//   for(let i=0;i<str.length;i++){
//   string.push(str[i])
//   }


//   console.log(string)


//   for(i=0;i<string.length/2;i++){
//    temp= string[i]
//    string[i]=string[string.length-1-i]
//    string[string.length-1-i ] = temp
//   }

//   console.log(string)

//   let st=''

//   for(i=0;i<string.length;i++){
//      st=st+string[i]
//   }

//   console.log(st)       


function string(str,n){

   let charCode=[]
   let res=[]
   
    for(let i=0;i<str.length;i++){
       charCode.push(str[i].charCodeAt()+n)
    }
    console.log(charCode)

   for(let j=0;j<charCode.length;j++){
      res.push(String.fromCharCode(charCode[j]))
   }
   console.log(res.join(''))
}


string('amjadali',2)


