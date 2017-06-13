function solve(a, b) {
    let matrix = [];
    for (let i = 0; i < a; i++) {
        matrix.push([]);
        for (let j = 0; j < b; j++) {
            matrix[i][j] = 0;
        }
    }

    let sCol = 0;
    let sRow = 0;
    let counter = 0;

    while (counter < a * b) {
        for (let i = sCol; i < a - sCol; i++) {
            counter++;
            matrix[sRow][i] = counter;
        }
        for (let i = sRow + 1; i < b-sRow; i++) {
            counter++;
            matrix[i][matrix[sRow].length - 1 - sCol] = counter;
        }
        for (let i = a - 2 - sCol; i >= sCol; i--) {
            counter++;
            matrix[b - 1 - sRow][i] = counter;
        }
        for (let i = b - 2 - sRow; i >= 1 + sRow; i--) {
            counter++;
            matrix[i][sCol] = counter;
        }
        sRow++;
        sCol++;
    }

    for (let arr of matrix) {
        console.log(arr.join(' '));
    }
}

solve(6, 6);


