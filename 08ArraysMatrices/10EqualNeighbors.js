function solve(arr) {
    let pairCounter = 0;

    for (let row=0 ; row<arr.length; row++){
       for (let col=0 ; col<arr[row].length-1; col++){
          if(arr[row][col]===arr[row][col+1]){
              pairCounter++;
          }
       }
    }

    for (let col=0 ; col<arr[0].length ; col++){
        for (let row=0 ; row<arr.length-1 ; row++){
           if(arr[row][col]===arr[row+1][col]){
               pairCounter++;
           }
        }

    }

    console.log(pairCounter);
}

solve([['test', 'yes', 'yo', 'ho'],
    ['well', 'done', 'yo', '6'],
    ['not', 'done', 'yet', '5']]);