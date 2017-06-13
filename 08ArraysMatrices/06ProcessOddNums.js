function solve(arr) {
    let result = arr.filter((x,i)=>i%2!==0).map(x=>2*x).reverse();

    console.log(result.join(' '));
}

solve([3, 0, 10, 4, 7, 3]);