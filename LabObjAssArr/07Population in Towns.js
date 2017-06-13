function solve(strArr) {
    let townData = strArr.map(s=>s.split(' <-> '));

    let map = new Map();

    for (let [town, pop] of townData) {
        if(!map.has(town)){
            map.set(town,Number(pop));
        }else{
            map.set(town,map.get(town)+Number(pop));
        }
    }

    [...map].forEach(([k,v])=>console.log(`${k} : ${v}`));
}

solve(['Sofia <-> 1200000',
'Montana <-> 20000',
'New York <-> 10000000',
'Washington <-> 2345000',
'Las Vegas <-> 1000000']);
console.log();
solve(['Istanbul <-> 100000',
        'Honk Kong <-> 2100004',
        'Jerusalem <-> 2352344',
        'Mexico City <-> 23401925',
        'Istanbul <-> 1000']);