function solve(arr) {
    let k = arr[0];
    let numbers = arr.slice(1,arr.length);

    console.log(numbers.slice(0, k ).join(' '));
    console.log(numbers.slice(numbers.length-k, numbers.length).join(' '));
}

solve([3,
    6, 7, 8, 9])


