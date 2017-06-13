function solve(arr) {
    let matrix = [];
    for (let obj of arr) {
        matrix.push(obj.split(' ').map(Number));
    }

    let sumD1 = 0;
    let sumD2 = 0;

    for (let i=0 ; i<matrix.length ; i++){
       for (let j=0 ; j<matrix[i].length ; j++){
          if(i===j){
              sumD1+=matrix[i][j];
          }
          if((i+j)===matrix.length-1){
              sumD2+=matrix[i][j];
          }
       }
    }

    if(sumD2===sumD1){
        for (let i=0 ; i<matrix.length ; i++){
            for (let j=0 ; j<matrix[i].length ; j++){
                if(i!==j && i+j!==matrix.length-1){
                    matrix[i][j]=sumD1;
                }
            }
        }
    }

    for (let obj of matrix) {
        console.log(obj.join(' '));
    }
}

solve(['1 1 1',
    '1 1 1',
    '1 1 0']);