function solve(arr) {
    let magicSum = arr[0].reduce((x,y)=>x+y);
    let result = true;

    for (let row=0 ; row<arr.length ; row++){
        let sum = 0;
       for (let col=0 ; col<arr[row].length ; col++){
          sum+=arr[row][col];
       }
       if(sum!==magicSum){
           result=false;
           break;
       }
    }

    for (let col=0 ; col<arr[0].length ; col++){
       let sum = 0;
       for (let row=0 ; row<arr.length ; row++){
          sum+=arr[row][col];
       }
       if (sum!==magicSum){
           result=false;
           break;
       }
    }

    console.log(result);
}

solve([[1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]]);