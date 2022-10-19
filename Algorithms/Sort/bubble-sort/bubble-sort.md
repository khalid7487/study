## Bubble sort Algorithms
`` Bubble Sort is the simplest sorting algorithm that works by repeatedly swapping the adjacent elements if they are in the wrong order.``

## Time complexity of bubble sort is little bit heigh 

## How Bubble Sort Works ?

**Bubble sort loop through n -1** 
**Bubble sort starts with very first two elements,** 
**comparing them to check which one is greater. and swap it through below algorithms**

**1. if arr[index] > arr[index + 1] ----> Ex. 9> 8**

**during this time swap the array element** 
 `` 
 let temp = arr[index];
 arr[index] = arr[index + 1];
 arr[index + 1] = temp; ``

**else go to check next element.**


## Time Complexity: O(N^2)
## Auxiliary Space: O(1)


**Suppose we have an array = [6, 2, 5, 3, 9]**

**First Phase**
  
    [2,6 , 5, 3, 9]
    [2, 5, 6, 3, 9]
    [2, 5, 3, 6, 9]
    [2, 5, 3, 6, 9] 

**Secound Phase** 
  
     [2,6,5,3,9 ]
     [2,5,6,3,9 ]
     [2,5,3,6,9 ] 


**Third Phase** 
   
     [2,6,5,3,9 ]
     [2,5,6,3,9 ]
     [2,3,5,6,9 ]

