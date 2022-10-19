function vlaidAnagram (str1, str2)
{
    let str1_len = str1.length;
    let str2_len = str2.length;
    
    if(str1_len != str2_len){
        return false;
    }

    const lookup={};

    for(let i=0; i< str1_len; i++){
        lookup[str1[i]] = ++lookup[str1[i]] || 1;
    }

    for(let i=0; i< str1_len; i++)
    {
        let letter =str2[i];
        
        //cann't find letter or letter is zero then it's not an anagram
        if(!lookup[letter]){
            return false;
        }else{
            lookup[letter] -= 1;
        }
    }



    return true;
}

console.log(vlaidAnagram('anagram', 'nagaram'));