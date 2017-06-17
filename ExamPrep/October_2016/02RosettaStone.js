function solve(arr) {
    let tempHeight = Number(arr[0]);
    let decMatrix = arr.splice(1, tempHeight).map(x => x.split(' '));
    let encMatrix = arr.splice(1).map(x => x.split(' '));

    decMatrix = stringToNumber(decMatrix);
    encMatrix = stringToNumber(encMatrix);

    let wheelOfLetters = [' ', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

    for (let r = 0; r < encMatrix.length; r += decMatrix.length) {
        for (let c = 0; c < encMatrix[r].length; c += decMatrix[0].length) {
            encMatrix = decode(decMatrix, encMatrix, r, c);
        }
    }

    encMatrix=turnToLetters(encMatrix,wheelOfLetters);

    let phrase='';

    for (let r = 0; r < encMatrix.length; r++) {
        for (let c = 0; c < encMatrix[r].length; c++) {
            phrase+=encMatrix[r][c];
        }
    }

    console.log(phrase);

    function turnToLetters(matrix, wheel) {
        for (let r = 0; r < matrix.length; r++) {
            for (let c = 0; c < matrix[r].length; c++) {
              matrix[r][c]=wheel[matrix[r][c]%27];
            }
        }
        return matrix;
    }

    function decode(decoder, encoder, startRow, startCol) {
        for (let r = 0; r < decoder.length; r++) {
            for (let c = 0; c < decoder[r].length; c++) {
                if (encoder[startRow + r] != undefined && encoder[startRow + r][startCol + c] != undefined) {
                    encoder[startRow + r][startCol + c] = decoder[r][c] + encoder[startRow + r][startCol + c];
                }
            }
        }

        return encoder;
    }

    function stringToNumber(matrix) {
        for (let r = 0; r < matrix.length; r++) {
            for (let c = 0; c < matrix[r].length; c++) {
                matrix[r][c] = Number(matrix[r][c]);
            }
        }
        return matrix;
    }
}

solve(['2',
    '31 32',
    '74 37',
    '19 0 23 25',
    '22 3 12 17',
    '5 9 23 11',
    '12 18 10 22']);