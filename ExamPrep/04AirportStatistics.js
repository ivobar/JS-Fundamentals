function solve(strArr) {
    let landedPlanes = [];
    let cityRecords = new Map();

    for (let row of strArr) {
        let [plane, cityName, passengers, action] = row.split(' ');
        passengers = Number(passengers);

        if (action === 'land') {
            if (landedPlanes.includes(plane)) {
                continue;
            } else {
                landedPlanes.push(plane);
                if (!cityRecords.has(cityName)) {
                    cityRecords.set(cityName, [passengers, 0, [plane]]);
                } else {
                    cityRecords.get(cityName)[0] += passengers;
                    if (!cityRecords.get(cityName)[2].includes(plane)) {
                        cityRecords.get(cityName)[2].push(plane);
                    }
                }
            }
        } else if (action === 'depart') {
            if (!landedPlanes.includes(plane)) {
                continue;
            } else {
                landedPlanes.splice(landedPlanes.indexOf(plane));
                if (!cityRecords.has(cityName)) {
                    cityRecords.set(cityName, [0, passengers, [plane]]);
                } else {
                    cityRecords.get(cityName)[1] += passengers;
                    if (!cityRecords.get(cityName)[2].includes(plane)) {
                        cityRecords.get(cityName)[2].push(plane);
                    }
                }
            }
        }
    }
    landedPlanes.sort();
    console.log('Planes left:');
    for (let plane of landedPlanes) {
        console.log(`- ${plane}`);
    }
    let output = [...cityRecords].sort(townsSort);
    for (let i = 0; i < output.length; i++) {
        console.log(output[i][0]);
        console.log(`Arrivals: ${output[i][1][0]}`);
        console.log(`Departures: ${output[i][1][1]}`);
        console.log('Planes:');
        for (let obj of output[i][1][2].sort(sortPlanes)) {
            console.log(`-- ${obj}`);
        }
    }

    function townsSort(a, b) {
        if (a[1][0] > b[1][0]) {
            return -1;
        } else if (a[1][0] < b[1][0]) {
            return 1;
        } else {
            if (a[0] > b[0]) {
                return 1;
            } else if (a[0] < b[0]) {
                return -1;
            } else {
                return 0;
            }
        }
    }
    function sortPlanes(a,b) {
        if(a.toLowerCase()>b.toLowerCase()) {
            return 1;
        }else if(a.toLowerCase()<b.toLowerCase()) {
            return -1;
        }else {
            return 0;
        }

    }
}

solve([
    "Boeing474 Madrid 300 land",
    "AirForceOne WashingtonDC 178 land",
    "Airbus London 265 depart",
    "ATR72 WashingtonDC 272 land",
    "ATR72 Madrid 135 depart"
]);