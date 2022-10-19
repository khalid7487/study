function sumZero(arr){
    let left =0;
    let right = arr.length -1;

    while(left < right){
        let sum = arr[left] + arr[right];
        if(sum ===0){
            return [arr[left], arr[right]];
        }else if(sum > 0){
            right--;
        }else{
            left++;
        }
    }
}

console.log(sumZero([-4,-3,-2,-1,0,1,2,3,4]));

// here we actually see the pair of string 
// 1. compare 1st position to the last position 
// 2. if sum =0 retrun the pair 
// 3. else if sum >0  then right++
// 4. else left ++