function solve(arrStr) {
    let result = [];

    for (let hero of arrStr) {
        let heroData = hero.split(' / ');
        let heroes = {};

        heroes['name'] = heroData[0];
        heroes['level'] = Number(heroData[1]);
        if (heroData[2] !== undefined) {
            heroes['items'] = heroData[2].split(', ');
        }else{
            heroes['items']=[];
        }

        result.push(heroes);
    }

    console.log(JSON.stringify(result));
}

solve(['Isacc / 25',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']);