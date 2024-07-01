// const nestedObject = {
//     name: 'John',
//     address: {
//       city: 'New York',
//       zipcode: {
//         main: 10001,
//         plus4: 1234
//       }
//     },
//     contact: {
//       phone: '123-456-7890',
//       email: 'john@example.com'
//     }
//   };

// const obj = {
//     a: {
//         a1: 1,
//         a2: 2,
//         a3: 3
//     },
//     b: {
//         b1: 4,
//         b2: 5,
//         b3: 6,
//         z: {
//             z1: -1,
//             z2: -2
//         }
//     },
//     c: 7,
//     d: 8
//   };

//   let result = {}

//  for(let key in obj){

//     while(typeof obj[key] === "object"){

//          flattenObj(obj[key])

//     }
//  }

// function flattenObj(obj) {
// console.log('obj in flttern',obj)
//    let res = {}

//    for(let key in obj){

//      res = {...res,key: obj[key]}
//    }

//    console.log(res)
// }

// let arr = [23, 35, 32, 53, 56, 43, 4];
// const largest = arr.reduce((acc,curr)=>{
//     return Math.max(acc,curr)
// },arr[0])
// console.log(largest)

// let words = ['short', 'medium', 'longest', 'longer'];
// const longest = words.reduce((acc,curr)=>{
//   return acc.length > curr.length ? acc : curr
// },'')
// console.log('long',longest)

// const obj = {
//     a: 1,
//     b:2,

//     c:function (){
//       let amj= 'amjad'
//         const d = ()=>{
//             console.log(this)
//         }
//     }
// }

// obj.c().d()

// const obj = {
//   a: 1,
//   b: 2,

//   c : function (){
//     console.log(this);
//   },
// };

// const amj = {
//     am: 'amjad',
//     sr: 'sooryadev'
// }

// class MyClass {

//     constructor(){
//         this.a = 'amj',
//         this.b = 'amjadali'
//     }

//     myFun = function (){
//         console.log(this)
//     }
// }

// const obj = new MyClass()

// const can = obj.myFun

// can.call(obj)

// let arr = [1,[24,5443],543,[45,65,657,76,[4534,35,324]]]

// const flattenArray =(array)=>{

//   return array.flatMap((val)=>Array.isArray(val)?flattenArray(val):val)

// }

// console.log(flattenArray(arr))

// function *CountUptoFive(){
//     for(let i=1;i<=5;i++){
//         yield i
//     }
// }

// const obj = CountUptoFive()
// console.log(obj.next().value)
// console.log(obj.next())
// console.log(obj.next())
// console.log(obj.next())
// console.log(obj.next())
// // console.log(obj.next())

function* Fibonacci() {
  let a = 0,
    b = 1;

  while (true) {
    yield a;
    [a, b] = [b, a + b];
  }
}

const obj = Fibonacci();

for (let i = 0; i < 5; i++) {
  console.log(obj.next().value);
}

// function* fibonacciGenerator() {
//     let a = 0, b = 1;
//     while (true) {
//         yield a;
//         [a, b] = [b, a + b];
//     }
// }

// const fib = fibonacciGenerator();
// for (let i = 0; i < 10; i++) {
//     console.log(fib.next().value);
// }
