# Trees
<!-- Short summary or background information -->

## Challenge
<!-- Description of the challenge -->
Create a Node class that has properties for the value stored in the node, the left child node, and the right child node.
Create a BinaryTree class
Define a method for each of the depth first traversals called preOrder, inOrder, and postOrder which returns an array of the values, ordered appropriately.

Create a BinarySearchTree class
Define a method named add that accepts a value, and adds a new node with that value in the correct location in the binary search tree.
Define a method named contains that accepts a value, and returns a boolean indicating whether or not the value is in the tree at least once.

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->

I looked up some other methods and followed a youtube video rather than build off of the given code from demo. By building out each method this way that I followed, I understand how I am traversing and how it all adds up. I think it is an O(n) because of the while loop. I did not add in a thirds class constructor which i think that wont be too difficult because all im doing is using one class to check whats in it and log it into an array and the other to just add to the tree. 

## API
<!-- Description of each method publicly available in each of your trees -->

add - adds to the tree at the appropriate location depending if its bigger(right) or smaller(left) starting at the root.
contains - checks to see if a value is in the tree at all.
postOrder - left branch then right branch then root value.
preOrder - root value then left branch then right branch.
inOrder - displays the data in order from least to greatest. left branch then root the right branch.