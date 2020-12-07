'use strict'; 

const Stack = require('../../stacksAndQueues/code-challenge-10/stacks.js');
 
class Vertex {
    constructor(data) {
        this.data = data;
    }
}

class Edge {
    constructor(vertex, weight=0) {
        this.vertex = vertex;
        this.weight = weight;
    }
}

class Graph {
    constructor() {
        this.adjacencyList = new Map(); 
    }

    addVertex(vertex) {
        this.adjacencyList.set(vertex, []);
    }

    addDirectedEdge(startV, endV) {
        if(this.adjacencyList.has(startV) && this.adjacencyList.has(endV)) {
            const neighbors = this.adjacencyList.get(startV);
            neighbors.push(new Edge(endV));
        }
    }

    addUndirectedEdge(startV, endV) {
        this.addDirectedEdge(startV, endV);
        this.addDirectedEdge(endV, startV);
    }

    breadthFirst(startNode) {
        const queue = [];

        const visitedNodes = new Set();

        queue.push(startNode);

        while (queue.length) {
            const currentVertex = queue.shift();

            const neighbors = this.adjacencyList.get(currentVertex);

            for(let neighbor of neighbors) {
                const neighborVertex = neighbor.vertex;
                if( visitedNodes.has (neighborVertex)) {
                    continue;
                }
                else {
                    visitedNodes.add(neighborVertex);
                }
                queue.push(neighborVertex);
            }
        }
        return visitedNodes;
        
    }

    depthFirst(startNode) {
        let stack = new Stack();
        stack.push(startNode);
        console.log(stack);
    }

    getNeighbors(vertex) {
        return this.adjacencyList.get(vertex);
    }
}

const graph = new Graph();

const ten = new Vertex(10);
const two = new Vertex(2);
const six = new Vertex(6);
const seven = new Vertex(7);
const three = new Vertex(3);
const eight = new Vertex(8);
const nine = new Vertex(9);

graph.addVertex(ten);
graph.addVertex(two);
graph.addVertex(six);
graph.addVertex(seven);
graph.addVertex(three);
graph.addVertex(eight);
graph.addVertex(nine);

graph.addUndirectedEdge(ten, two);
graph.addUndirectedEdge(ten, six);
graph.addUndirectedEdge(ten, three);
graph.addUndirectedEdge(six, seven);
graph.addUndirectedEdge(six, eight);
graph.addUndirectedEdge(three, eight);
graph.addUndirectedEdge(seven, eight);
graph.addUndirectedEdge(seven, nine);
graph.addUndirectedEdge(two, seven);

console.log(graph);

// console.log(graph.breadthFirst(ten));
// console.log(graph.breadthFirst(seven));

graph.depthFirst();