function same(arr1, arr2){

    if(arr1.length !== arr2.length){
        return false;
    }

    for(let i=0; i< arr1.length; i++){
        let correctIndex = arr2.indexOf(arr1[i] ** 2)
        if(correctIndex === -1){
            return false;
        }
        arr2.splice(correctIndex, 1);
    }

    return true;
}

let arr1 =[2,1];
let arr2 = [4, 1];
console.log(same(arr1, arr2));


// O(n) comlexity 

function same1(arr1, arr2)
{
    if(arr1.length !== arr2.length){
        return false;
    }
    let frequencyCountr1= {};
    let frequencyCountr2= {};

    for(let val of arr1)
    {
        frequencyCountr1[val] = ++frequencyCountr1[val] || 1;
    }

    for(let val of arr2)
    {
        frequencyCountr2[val] = ++frequencyCountr2[val] || 1;
    }

    for(let key in frequencyCountr1){
        if(!(key ** 2 in frequencyCountr2)){
            return false;
        }
        if(frequencyCountr2[key**2] !== frequencyCountr1[key]){
            return false
        }
    }

    return true;
}

console.log(same1(arr1, arr2));
