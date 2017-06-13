function solve(arr) {
    let maxNum=Number.NEGATIVE_INFINITY;
    let result = [];

    for (let i=0 ; i<arr.length ; i++){
        if(arr[i]>=maxNum){
            result.push(arr[i]);
            maxNum=arr[i];
        }
    }

    for (let obj of result) {
        console.log(obj);
    }

}

solve([1,2,3,4]);