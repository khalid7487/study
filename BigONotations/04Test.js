// Big o notation lecture 04

//Using iterations
function addUpTo(n){
    let total =0;
    for(let i=1; i<=n; i++){
        total += i;
    }

    return total;
}

console.log(addUpTo(7));

//without iterations 
function withoutIterations(n){
    return n * (n + 1) / 2;
}

//     1 +     2   + 3    + .... + (n -1) + n 
//     n + (n - 1) +(n -2) +.....+ 2 + 1
// 2(sum)=(n+1)+(n+1)+(n+1)+......+(n+1)+(n+1)
// 2(sum) = n * (n+1)
// sum = n(n+1)/2

console.log(addUpTo(7));



// 

function simplifiedBigO(n){
    for(let i=0; i< Math.max(5, n); i++){
        console.log(i)
    }
}
// above program  complexity is o(n)


function simplifiedBigO(n){
    for(let i=0; i< Math.min(5, n); i++){
        console.log(i)
    }
}

// above program  complexity is o(1)













