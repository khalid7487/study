function countUniqueValues(arr){
    let count=0, i=0, j=1;
    let length=arr.length;

    while(j< length){

        if(arr[i] !== arr[j] ){
            i++;
            arr[i] = arr[j]
        }else{
            j++;
        }
    }

    console.log(i+1);
}

let arr= [1,1,2,3,3,4,5,6,6,7];

countUniqueValues(arr);

// here we need to check position o to others if  match the position just increase j++ 
// if not match the value increase i++ and put arr[j] into i


[1,2,3,4,5,6,7,6,6,7]