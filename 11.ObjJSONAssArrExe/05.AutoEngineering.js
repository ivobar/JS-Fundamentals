function solve(strArr) {
    let brand = '';
    let model = '';
    let prodNum = 0;
    let production = new Map();

    for (let row of strArr) {
        let data = row.split(' | ');
        brand = data[0];
        model = data[1];
        prodNum = Number(data[2]);

        if (production.has(brand)) {
            if (production.get(brand).has(model)) {
                production.get(brand).set(model, production.get(brand).get(model) + prodNum);
            } else {
                production.get(brand).set(model, prodNum);
            }
        } else {
            production.set(brand,new Map());
            production.get(brand).set(model,prodNum);
        }
    }

    for (let [brand, modelData] of production) {
        console.log(brand);
        for (let [model, num] of modelData) {
            console.log(`###${model} -> ${num}`);
        }
    }
}

solve(['Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10']);
