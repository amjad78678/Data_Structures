class Node{
constructor(value){

this.value=value
this.next=null
this.prev=null

    }
}

class stackLinkedList{
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

    push(value){

        const node=new Node(value)
        if(this.isEmpty()){
            this.head=node
            this.tail=node
        }else{
            node.next=this.head
            this.head=node
        }

        this.size++

    }
    pop(){

        if(this.isEmpty()){
            console.log('list is empty bro');
        }else{
            let removedNode=this.head
            this.head=this.head.next

            this.size--
            return removedNode.value
        }
    }
    peek(){
        return this.head.value
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

const stack=new stackLinkedList()

stack.push(50)
stack.push(76)
stack.pop()


stack.push(367)

console.log(stack.peek()); 

stack.print()