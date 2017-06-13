function solve(arr) {
    let sumMain = 0;
    let sumSecond = 0;

    for (let row=0 ; row<arr.length ; row++){
       for (let col=0 ; col<arr[row].length ; col++){
          if(row===col){
              sumMain+=arr[row][col];
          }
          if((row+col)===(arr.length-1)){
              sumSecond+=arr[row][col];
          }
       }
    }

    console.log(`${sumMain}`+' '+`${sumSecond}`);
}

solve([[3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]]);