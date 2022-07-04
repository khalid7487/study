function linearSearch(arr, key){
    let arr_len = arr.length;
    for(let i=0; i<arr_len; i++){
        if(arr[i] == key){
            return i+1;
        }
    }
    return null;
}

let arr =[5,9,8,6,15,6]
console.log(linearSearch(arr, 110))