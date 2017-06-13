function solve(arr) {
    let maxEl = Number.MIN_SAFE_INTEGER;

    for (let row=0 ; row<arr.length ; row++){
       for (let col=0 ; col<arr[row].length ; col++){
          if(arr[row][col]>=maxEl){
              maxEl=arr[row][col];
          }
       }
    }

    console.log(maxEl);
}

solve([[3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]]);