'use strict';

class Vertex {
    constructor(data) {
        this.data = data;
    }
}

class Edge {
    constructor(vertex, weight = 0) {
        this.vertex = vertex;
        this.weight = weight;
    }
}

class Graph {
    constructor() {
        this.adjacent = new Map();
    }

    addVertex(vertex) {
        this.adjacent.set(vertex, []);
    }

    // add a directed edge to link two nodes (start and end nodes)
    directedEdge(start, end) {
        const neighbors = this.adjacent.get(start);
        neighbors.push(new Edge(end));
        // console.log(start, neighbors);
    }

    undirectedEdge(start, end) {
        this.directedEdge(start, end);
        this.directedEdge(end, start);
    }

    breadthFirst(start) {
        const queue = [];
        // set is hashmap that only stores the keys, not the values
        const visited = new Set();

        queue.push(start); 

        visited.add(start);
        // use peek instead of length for an actual queue
        while(queue.length) {
            const current = queue.shift();

            const neighbors = this.adjacent.get(current);

            for(let neighbor of neighbors) {
               const neighborV = neighbor.vertex;
               if(visited.has(neighborV)) {
                   continue;
               }else {
                visited.add(neighborV);
               }
               queue.push(neighborV);
            }
        }
        return visited;

    }

    depthFirst(start) {
        // this needs to be a stack
        const stack = [];
        const visited = new Set();

        stack.push(start);

        visited.add(start);

        while(stack.length) {
            const current = stack.pop();
            const children = this.adjacent.get(current);
            // console.log(children);

            for(let child of children) {
                console.log(child);
            }

            
        }
    }

    children(vertex) {
        return this.adjacent.get(vertex);

    }
}

const graph = new Graph();

const ten = new Vertex(10);
const eleven = new Vertex(11);
const twelve = new Vertex(12);
const five = new Vertex(5);
const six = new Vertex(6);
const two = new Vertex(2);

graph.addVertex(ten);
graph.addVertex(eleven);
graph.addVertex(twelve);
graph.addVertex(five);
graph.addVertex(six);
graph.addVertex(two);

// tens edges(links)
graph.directedEdge(two, five);
graph.directedEdge(two, six);
graph.directedEdge(five, ten);
graph.directedEdge(six, eleven);
graph.directedEdge(eleven, twelve);

// elevens edges(links)

// 2,5,6,10,11,12

console.log(graph);
console.log(graph.breadthFirst(two));
// console.log(graph.children(two));

graph.depthFirst(two);