function solve(strArr) {
    let data = strArr.map(x=>x.split(' -> '));
    let towns = new Map();

    for (let [town, product, sales] of data) {
        //Check if there is already a town with this name
        if (!towns.has(town)){
            towns.set(town,new Map());
        }

        //Check if there is already a product like this
        if(!towns.get(town).has(product)){
            towns.get(town).set(product,sales.split(' : ').reduce((x,y)=>x*y));
        }else {
            let totalIncome=towns.get(town).get(product);
            towns.get(town).set(product,totalIncome+sales.split(' : ').reduce((x,y)=>x*y));
        }
    }

    for (let [town,product] of [...towns].sort()) {
        console.log(`Town - ${town}`);
        for (let [name, income] of [...product].sort()) {
            console.log(`$$$${name} : ${income}`);
        }
    }
}

solve(['Sofia -> Laptops HP -> 200 : 2000',
'Sofia -> Raspberry -> 200000 : 1500',
'Sofia -> Audi Q7 -> 200 : 100000',
'Montana -> Portokals -> 200000 : 1',
'Montana -> Qgodas -> 20000 : 0.2',
'Montana -> Chereshas -> 1000 : 0.3']);