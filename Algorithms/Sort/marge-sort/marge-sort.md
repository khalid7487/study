**Merge sort is a sorting technique based on divide and conquer technique. With worst-case time complexity being Ο(n log n), it is one of the most respected algorithms**

## Drawbacks of Merge Sort:
**1. Slower comparative to the other sort algorithms for smaller tasks.**
**2. Merge sort algorithm requires an additional memory space of 0(n) for the temporary array.**
**3. It goes through the whole process even if the array is sorted.**

## Time Complexity: O(n logn)
## Space Complexity: O(n)

## Algorithms
**Step 1 − if it is only one element in the list it is already sorted, return.**
**Step 2 − divide the list recursively into two part until it can no more be divided.**
**Step 3 − merge the smaller lists into new list in sorted order.**

**First Phase**

    [2,6 , 5, 3, 9]
    [2, 6, 5]  [3,9]
    [2, 6] [5] [3] [9]
    [2] [6] [5] [3] [9]
    [2, 6] [5]  [3, 9]
    [2,5,6] [3,9]
    [2,3, 5,6,9]