function solve(arr) {
    let arrayToPrint = arr.slice(0,arr.length-1);
    let delimiter=arr[arr.length-1];

    console.log(arrayToPrint.join(`${delimiter}`));;
}

solve(['One','Two','Three','Four','Five','-']);