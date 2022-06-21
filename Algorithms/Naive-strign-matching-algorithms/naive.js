// It is mainly used for matching the pre string 

function stringSearch(string , pattern){
    let count =0;
    let stringLength= string.length;
    let patternLegth =pattern.length;

    for(let i=0; i< stringLength; i++){
        
        for(let j=0; j< patternLegth; j++){
            if(pattern[j] != string[i+j]) break;
            if(j == patternLegth-1) count++;
        }
    }

    return count;

}

console.log(stringSearch("akgjfjhuyutomatokajkhgsvkjrtomato", "tomato"));