# Stacks and Queues
<!-- Short summary or background information -->

## Challenge
<!-- Description of the challenge -->

- Create a Node class that has properties for the value stored in the Node, and a pointer to the next node.

 - Create a Stack class that has a top property. It creates an empty Stack when instantiated.
 - This object should be aware of a default empty value assigned to top when the stack is created.
 - Define a method called push which takes any value as an argument and     adds a new node with that value to the top of the stack with an O(1) Time performance.
 - Define a method called pop that does not take any argument, removes the node from the top of the stack, and returns the node’s value.
 - Should raise exception when called on empty stack
 - Define a method called peek that does not take an argument and returns   the value of the node located on top of the stack, without removing it from the stack.
 - Should raise exception when called on empty stack
 - Define a method called isEmpty that takes no argument, and returns a boolean indicating whether or not the stack is empty.
 - Create a Queue class that has a front property. It creates an empty Queue when instantiated.
 - This object should be aware of a default empty value assigned to front when the queue is created.
 - Define a method called enqueue which takes any value as an argument and adds a new node with that value to the back of the queue with an O(1) Time performance.
 - Define a method called dequeue that does not take any argument, removes the node from the front of the queue, and returns the node’s value.
 - Should raise exception when called on empty queue
 - Define a method called peek that does not take an argument and returns the value of the node located in the front of the queue, without removing it from the queue.
 - Should raise exception when called on empty queue
 - Define a method called isEmpty that takes no argument, and returns a boolean indicating whether or not the queue is empty.
 - You have access to the Node class and all the properties on the Linked List class.


## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->
- I will be creating all the methods insice the class constructors for stack and queue rather than using functions outside of the constructors. This will keep my big O to a minimum the goal is O(1)



## Solution
<!-- Embedded whiteboard image -->


![Stacks and Queues](stacksandqueues.png)

## Notes

9/12/2020 8:13am

- Just got back from emergency room setting up scaffolding and adding the Whiteboard.

9/14/2020

- finished the whiteboarding. 