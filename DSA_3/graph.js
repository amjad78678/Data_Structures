class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVetex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = new Set();
    }
  }

  addEdge(vertex1, vertex2) {
    if (!this.adjacencyList[vertex1]) {
      this.addVetex(vertex1);
    }
    if (!this.adjacencyList[vertex2]) {
      this.addVetex(vertex2);
    }

    this.adjacencyList[vertex1].add(vertex2);
    this.adjacencyList[vertex2].add(vertex1);
  }
  hasEdge(vertex1, vertex2) {
    if (!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2]) {
      return false;
    }

    return (
      this.adjacencyList[vertex1].has(vertex2) &&
      this.adjacencyList[vertex2].has(vertex1)
    );
  }

  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].delete(vertex2);
    this.adjacencyList[vertex2].delete(vertex1);
  }

  removeVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      return;
    } else {
      for (let adjacentVertex of this.adjacencyList[vertex]) {
 
        this.removeEdge(vertex, adjacentVertex);
      }

      delete this.adjacencyList[vertex];
    }
  }

  display() {
    for (let vertex in this.adjacencyList) {
      console.log(`${vertex} => ${[...this.adjacencyList[vertex]]}`);
    }
  }


  bfs(startingVertex) {
    const queue = [];
    const visited = {};

    visited[startingVertex] = true;

    queue.push(startingVertex);

    while (queue.length > 0) {
      const vertex = queue.shift();
               console.log(vertex);

      for (let neighbor of this.adjacencyList[vertex]) {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      }
    }

    for (let vertex in this.adjacencyList) {
      if (!visited[vertex]) {
        console.log(vertex);
        visited[vertex] = true;
      }
    }
  }

  dfs(startingVertex){

    let allValues=new Set(Object.keys(this.adjacencyList))

    let visited={}

    for(let vertex of allValues){

       visited[vertex]=false
    }

    const dfsHelper=(vertex)=>{

       visited[vertex]=true
       console.log(vertex)
       allValues.delete(vertex)


       for(let neighbor of this.adjacencyList[vertex]){
          
          if(!visited[neighbor]){
            dfsHelper(neighbor)
          }
       }

    }

 dfsHelper(startingVertex);


for(let vertex of allValues){
   
  if(!visited[vertex]){

    dfsHelper(vertex)
    
  }
}

}


}

const graph=new Graph()

graph.addVetex(35)
graph.addVetex(10)
graph.addVetex(30)
graph.addVetex(60);
graph.addVetex(5);
graph.addVetex(20);


graph.addEdge(35,10)
graph.addEdge(30,10)
graph.addEdge(35,30);
graph.addEdge(5,20);
graph.addEdge(10,20);

graph.bfs(10)

graph.dfs(55)



