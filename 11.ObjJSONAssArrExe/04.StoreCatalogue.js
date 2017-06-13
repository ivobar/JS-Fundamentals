function solve(arr) {
    arr.sort();
    let data = new Map();

    for (let product of arr) {
        let arr = product.split(' : ')
        data.set(arr.join(': '), product[0]);
    }

    let letter = '';
    for (let [k, v] of data) {
        if (v !== letter) {
            console.log(v);
            letter = v;
        }
        console.log(` ${k}`);
    }
}

solve(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']);