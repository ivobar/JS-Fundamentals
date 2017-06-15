function solve(arrStr) {
    let wall = arrStr.map(Number);
    let dayConsumption = 1;
    let consumption = [];

    while (dayConsumption !== 0) {
        dayConsumption = 0;
        for (let i = 0; i < wall.length; i++) {
            if (wall[i] < 30) {
                wall[i]++;
                dayConsumption += 195;
            }
        }
        if (dayConsumption !== 0) {
            consumption.push(dayConsumption);
        }
    }

    console.log(consumption.join(', '));
    console.log(consumption.reduce((x, y) => x + y)*1900+' pesos');

}

solve(['21', '25', '28']);