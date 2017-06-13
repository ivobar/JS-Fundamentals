function solve(arr) {
    let arrayToRotate = arr.slice(0,arr.length-1);
    let rotations = arr[arr.length-1];

    for (let i=0 ; i<rotations%arrayToRotate.length ; i++){
       arrayToRotate.unshift(arrayToRotate.pop());

    }

    console.log(arrayToRotate.join(' '));
}

solve(['Banana','Orange','Coconut','Apple',15]);