function solve(strArr) {
    let arrays = strArr.map(x => JSON.parse(x))
        .map(x => x.sort((a, b) => b - a))
        .map(x => JSON.stringify(x));

    let unique = new Set();

    for (let arr of arrays) {
        unique.add(arr);
    }

    function sortByLenght(a, b) {
        if (a.length < b.length) {
            return -1;
        } else if (a.length > b.length) {
            return 1;
        } else {
            return 0;
        }
    }

    let arraysForPrint = [...unique].map(x => JSON.parse(x)).sort(sortByLenght);

    for (let array of arraysForPrint) {
        console.log(`[${array.join(', ')}]`);
    }

}

/*solve(['[-3, -2, -1, 0, 1, 2, 3, 4]',
    '[10, 1, -17, 0, 2, 13]',
    '[4, -3, 3, -2, 2, -1, 1, 0]']);*/

solve(['[7.14, 7.180, 7.339, 80.099]',
        '[7.339, 80.0990, 7.140000, 7.18]',
        '[7.339, 7.180, 7.14, 80.099]']);