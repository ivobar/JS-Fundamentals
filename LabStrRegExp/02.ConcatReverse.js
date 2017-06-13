function solve(arr) {
    return arr.reverse().map(x=>Array.from(x).reverse().join('')).join('');
}

console.log(solve(['I', 'am', 'student']));