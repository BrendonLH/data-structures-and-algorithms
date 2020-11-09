
## Challenge
<!-- Description of the challenge -->
- Create a Blog post of the Quick sort process.

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->
- Made the blog more about what each phase is doing.



## Solution
<!-- Embedded whiteboard image -->


[Quick Sort]()

## Notes



## Blog

let input = [8,4,23,42,16,15];

 - Quicksort is takes a Divide and Conquer approach. We use Quicksort to divide the data set into smaller pieces and then call a sort function on those smaller pieces to make the process faster than sorting through the entire dataset as a whole.

 - In order to make the smaller pieces, we need to first set a **Pivot** point that will help divide our data. The pivot point is used to set anything smaller than the pivot to the left(low) and anything higher (high) to the right of the pivot point. 

 - After we set the pivot and move any data to the according left or right, we can then sort the sides resulting in a sorted data set. 

 - When we set the Pivot element, we First need to determine where that is. The best performance is in the middle of the dataset, so we set it there. Pivot = [42]

 - now that we have our pivot point we need to start moving everything to the left and the right of that point.

 - the steps are repeated on the left and right making a left and right again for the the new arrays. These are then sorted and eventually brought back together. 

 output = [4,8,15,16,23,42].
    
 





