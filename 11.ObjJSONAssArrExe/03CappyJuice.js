function solve(arrStr) {
    let map = new Map();
    let mapBottles= new Map();

    for (let fruit of arrStr) {
        let f=fruit.split(' => ');

        if(!map.has(f[0])){
            map.set(f[0],Number(f[1]));
        }else{
            map.set(f[0],map.get(f[0])+Number(f[1]));
        }

        if(map.get(f[0])>=1000){
            if(!mapBottles.has(f[0])){
                mapBottles.set(f[0],Math.floor(map.get(f[0])/1000));
                map.set(f[0],map.get(f[0])%1000);
            }else{
                mapBottles.set(f[0],mapBottles.get(f[0])+Math.floor(map.get(f[0])/1000));
                map.set(f[0],map.get(f[0])%1000);
            }
        }


    }

    for (let [k, v] of mapBottles) {
        console.log(`${k} => ${v}`);
    }
}

/*solve(['Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549']);
console.log();*/

solve(['Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789']);