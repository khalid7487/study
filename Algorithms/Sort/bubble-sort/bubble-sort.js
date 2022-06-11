function bubbleSort(arr, n){
    let i, j, temp;
    let swapped;
    for(i=0; i<n-1; i++){
        swapped= false;
        
        for(j=0; j<n-i-1; j++){
            //Here swap the element
            if(arr[j] > arr[j+1]){
                temp=arr[j];
                arr[j]= arr[j+1];
                arr[j+1]= temp;
                swapped=true;
            }
        }
        // IF no two elements were
        // swapped by inner loop, then break
        if (swapped == false)
            break;
    }
}

// Function to print an array
function printArray(arr, size) {
    let i;
    // for (i = 0; i < size; i++)
    //     console.log(arr[i] + " ");

    console.log(arr.join(' '))
}

let arr = [64, 34, 25, 12, 22, 11, 90];
let n = arr.length;
bubbleSort(arr, n);
printArray(arr, n);

