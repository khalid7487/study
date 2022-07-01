function maxSubarrarray(arr, num) {
    let arr_len = arr.length;

    if (arr_len < num) {
        return null;
    }
    let max = -Infinity;

    for (let i = 0; i < arr_len - num + 1; i++) {
        temp = 0;
        for (let j = 0; j < num; j++) {
            temp += arr[i + j];
        }

        if (temp > max) {
            max = temp;
        }
    }

    return max;
}

let arr = [1,3,-1,-3,5,3,6,7];
console.log(maxSubarrarray(arr, 3));


//  solve  with the O(N) below 

function maxSubarrarrayWithBigOofN(arr, num) {
    let maxSum = 0;
    let tempSum = 0;
    if (arr.length < num) return null;
    for (let i = 0; i < num; i++) {
        maxSum += arr[i]
    }
    tempSum = maxSum;

    for (let i = num; i < arr.length; i++) {
        tempSum = tempSum - arr[i - num] + arr[i];
        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
}


console.log(maxSubarrarrayWithBigOofN(arr, 3));