function solve(arr) {
    let matrix = [];
    for (let i = 0; i < arr[0]; i++) {
        matrix.push(new Array(arr[1]));
        for (let j = 0; j < matrix[i].length; j++) {
            matrix[i][j] = 0;
        }
    }

    matrix[arr[2]][arr[3]] = 1;
    let counter = 2;
    let startRow = arr[2]-1;
    let startCol = arr[3]-1;

    let cyclesLimit=Math.max(matrix.length-arr[2],matrix.length-arr[3],arr[2]+1,arr[3]+1);



    while (counter<=cyclesLimit){
        let endRow=startRow+2*counter-2;
        let endCol=startCol+2*counter-2;
        //fill row above star
        if(startRow>=0){
            for (let col=startCol ; col<=startCol+counter*2-1 ; col++){
                if(col>=0 && col<matrix.length){
                    matrix[startRow][col]=counter;
                }
            }
        }
        //fill column to the right of the star
        if(endCol<matrix.length){
            for (let row=startRow+1 ; row<=endRow-1 ; row++){
               if(row>=0 && row<matrix.length){
                   matrix[row][endCol]=counter;
               }
            }
        }
        //fill row below the star
        if(endRow<matrix.length){
            for (let col=endCol ; col>=startCol ; col--){
               if(col>=0 && col<matrix.length){
                   matrix[endRow][col]=counter;
               }
            }
        }
        //fill column to the left of the star
        if(startCol>=0){
            for (let row=endRow-1 ; row>=startRow+1 ; row--){
               if(row>=0 && row<matrix.length){
                   matrix[row][startCol]=counter;
               }
            }
        }

        counter++;
        startRow--;
        startCol--;
    }

    for (let obj of matrix) {
        console.log(obj.join(' '));
    }

}

solve([5, 5, 2, 2]);

