class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}

class LinkedList{
    constructor() {
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
        node.next =this.head
        this.head = node
    }
    this.size++
 }

 append(value){
  
    const node=new Node(value)
    
    if(this.isEmpty()){
        this.head=node
        this.tail=node
    }else{
        this.tail.next = node
        this.tail=node

    }

this.size++

 }

removeFromFront(){
 if(this.isEmpty()){
    console.log('list is empty');
    return null
 }  

 const value=this.head.value
 this.head=this.head.next
this.size--
return value

}

 
removeFromEnd(){
    if(this.isEmpty()){
        console.log('list is empty man');
        return null
    }

   const value=this.tail.value
   if(this.size===1){
    this.head=null
    this.tail=null
   }else{
    let prev=this.head
    while(prev.next!==this.tail){
        prev=prev.next
    }
    prev.next=null
    this.tail=prev

   }
  this.size--
  return value

}

 print(){
    if(this.isEmpty()){
        console.log('List is empty')
    }else{
         let curr=this.head
         let listValues=''
         while(curr){
            listValues=listValues+`${curr.value} `
            curr=curr.next
         }
         console.log(listValues)
    }
 }


}


const list =new LinkedList()
console.log('List is empty:',list.isEmpty());
console.log('list of size :',list.getSize())

list.print()

list.prepend(10)

list.print()
list.prepend(20)
list.prepend(5)
list.append(500)
list.insert(300,2)
list.print()
list.removeFromFront()
list.reverse()
list.print()
console.log(list.getSize());