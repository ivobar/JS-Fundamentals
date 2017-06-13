function solve(arr) {
    let result = [];
    let number = 0;

    for (let i=0 ; i<arr.length ; i++){
       if(arr[i]==='add'){
           number++;
           result.push(number);
       }else if(arr[i]==='remove'){
           number++;
           result.pop();
       }
    }

    if (result==0){
        console.log('Empty');
    }
    for (let obj of result) {
        console.log(obj);
    }
}

solve(['remove','remove','remove']);