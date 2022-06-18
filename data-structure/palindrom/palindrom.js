function isPalindrome(input){

    if(input.length == 0 || input.length == 1 ){
        return true;
    }
    
    if(input.charAt(0) == input.charAt(input.length - 1) ){
        return isPalindrome(input.substring(1, input.length -1));
    }
    
    return false;
}

console.log(isPalindrome("aba"))