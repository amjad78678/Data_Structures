// class Node{
//   constructor(value){
//    this.value=value
//    this.next=null
//    this.prev=null
//     }
// }

// class DoublyLinkedList{

//     constructor(){
//         this.head=null
//         this.tail=null
//         this.size=0
//     }

//     isEmpty(){
//         return this.size===0
//     }
// getSize(){
//     return this.size
// }

//     prepend(value){
  
//         const node=new Node(value)

//         if(this.isEmpty()){
//             this.head=node
//         }else{
//             node.next=this.head
//             this.head.prev=node
//             this.head=node
//     }

//     this.size++
// }

// print(){
//     let listValues=''

//     let curr=this.head

//      while(curr){
       
//         listValues=listValues+`${curr.value} `
//          curr=curr.next
//      }
//      console.log(listValues)
// }

// }

// const list=new DoublyLinkedList()

// list.prepend(10)
// list.print()



class Node{
    constructor(value){

        this.value=value
        this.next=null
        this.prev=null
    }
}

class doubly{  
    constructor(){
        this.head=null
        this.tail=null
        this.size=0
    }

    isEmpty(){
        return this.size===0
    }

    getSize(){
        return this.size
    }


    prepend(value){
        const node=new Node(value)

        if(this.isEmpty()){
            this.head=node
            this.tail=node
        }else{
            node.next=this.head
            this.head.prev=node
            this.head=node
        }
        this.size++
    }



    append(value){

        const node=new Node(value)

        if(this.isEmpty()){
            this.head=node
            this.tail=node
        }else{
            this.tail.next=node
            node.prev=this.tail
            this.tail=node
        }

        this.size++

    }

    reverse(){

        let prev=null
        let curr=this.head

        while(curr){

            let next=curr.next
            curr.next=prev
            prev=curr
            curr=next
        }

        this.head=prev
    }

    print(){
         let listValues=''
         let curr=this.head
        while(curr){
           
            listValues=listValues+`${curr.value} `

            curr=curr.next

        }
        console.log(listValues)
    }

}


const list=new doubly()



const text='arunghosh'
for(let j=0;j<text.length;j++){
list.append(text[j])
}
list.reverse()
list.print()
console.log(list.getSize());
