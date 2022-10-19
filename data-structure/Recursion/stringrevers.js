function reverse(str){
    if(str.length <= 1){
        return str;
    }
    else {
        return str.charAt(str.length - 1) + reverse(str.substring(0, str.length - 1));
    }
}

console.log(reverse("hello"));