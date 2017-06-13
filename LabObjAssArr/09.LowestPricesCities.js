function solve(strArr) {
    let data = strArr.map(x=>x.split(' | '));
    let map=new Map();

    function comparator(a, b) {
        if(a[1] < b[1]) return -1;
        if(a[1] > b[1]) return 1;
        return 0;
    }

    for (let [town, product, price] of data) {
        if(!map.has(product)){
            map.set(product,new Map());
        }

        if(!map.get(product).has(town)){
            map.get(product).set(town,Number(price));
        }else{
            map.get(product).set(town,Number(price));
        }

    }

    for (let [k, v] of map) {
        let arr=[...v].sort(comparator);
        console.log(`${k} -> ${arr[0][1]} (${arr[0][0]})`);
    }
}

solve(['Sofia City | Audi | 100000',
    'Sofia City | BMW | 100000',
    'Sofia City | Mitsubishi | 10000',
    'Sofia City | Mercedes | 10000',
    'Sofia City | NoOffenseToCarLovers | 0',
    'Mexico City | Audi | 1000',
    'Mexico City | BMW | 99999',
    'New York City | Mitsubishi | 10000',
    'New York City | Mitsubishi | 1000',
    'Mexico City | Audi | 100000',
    'Washington City | Mercedes | 1000']);