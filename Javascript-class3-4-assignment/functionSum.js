function sum (n) {
    let add = 0;
    for(let i = 1; i <= n; i++){
        add += i;
    }
    return add;
}

document.write(sum(5));