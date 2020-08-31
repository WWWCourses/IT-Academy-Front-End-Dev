function factorielIterative(n) {
    let res = 1;

    for (let i = 1; i <= n; i++) {
        res = res*i;
    }

    return res;
}

console.log( factorielIterative(5) ); // 120

function factorielRecursive(n) {
    if(n===1){
        return 1
    }else{
         return n*factorielRecursive(n-1)
    }
}
console.log( factorielRecursive(5) );