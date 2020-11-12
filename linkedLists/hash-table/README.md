# Hashtables
<!-- Short summary or background information -->

Create a class called HashTable that uses linked lists to create a data table that allows indexing. The key should be hashed and stored and keys that are the same should be stored as a next of the same key using linked lists(nodes).       

## Challenge
<!-- Description of the challenge -->

Implement a Hashtable with the following methods:

    1. add: takes in both the key and value. This method should hash the key, and add the key and value pair to the table, handling collisions as needed.
    2. get: takes in the key and returns the value from the table.
    3. contains: takes in the key and returns a boolean, indicating if the key exists in the table already.
    4. hash: takes in an arbitrary key and returns an index in the collection.


## Testing 

    1.  Adding a key/value to your hashtable results in the value being in the data structure
    2.  Retrieving based on a key returns the value stored
    3.  Successfully returns null for a key that does not exist in the hashtable
    4.  Successfully handle a collision within the hashtable
    5.  Successfully retrieve a value from a bucket within the hashtable that has a collision
    6.  Successfully hash a key to an in-range value

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->

## API
<!-- Description of each method publicly available in each of your hashtable -->