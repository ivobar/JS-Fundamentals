function solve(arr) {
    let arrayToPrint = arr.slice(0,arr.length-1);
    let step = arr[arr.length-1];

    let elems = arrayToPrint.filter((x,i)=>i%step===0);

    for (let elem of elems) {
        console.log(elem);
    }
}

solve([1,2,3,4,5,6]);