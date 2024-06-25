class Node{
    constructor(value){
        this.value=value
        this.next=null
        this.prev=null
    }
}


class queueLinkedList{
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

    enqueue(value){
        const node=new Node(value)
        if(this.isEmpty()){
            this.head=node
            this.tail=node
        }else{
            this.tail.next=node
            this.tail=node
        }

        this.size++

    }

    dequeue(){
        
        let removedNode=this.head
        this.head=this.head.next

        this.size--
        return removedNode.value

    }


    print(){
        if(this.isEmpty()){
            console.log('list is empty man')
        }else{

            let listValues=''

            let curr=this.head

            while(curr){
                
                listValues=listValues+`${curr.value} `

                curr=curr.next
            }

            console.log(listValues)
        }

    }

}


const queue=new queueLinkedList()


queue.enqueue(567)
queue.enqueue(664)
queue.enqueue(466)

console.log(queue.dequeue())
queue.print()

console.log(queue.getSize());