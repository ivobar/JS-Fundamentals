function solve(input) {
    let bunnies = input.slice(0, input.length - 1).map(x => x.split(' '));
    for (let i = 0; i < bunnies.length; i++) {
        for (let j = 0; j < bunnies[i].length; j++) {
            bunnies[i][j] = Number(bunnies[i][j]);
        }
    }

    let bombs = input[input.length - 1]
        .split(' ')
        .map(x => x.split(','));

    let damage = 0;
    let kills = 0;

    //First - kill all the bomb bunnies
    for (let bomb of bombs) {
        let bombRow = Number(bomb[0]);
        let bombCol = Number(bomb[1]);
        let boomDmg = bunnies[bombRow][bombCol];
        if(bunnies[bombRow][bombCol]!==0){
            damage += bunnies[bombRow][bombCol];
            kills += 1;
        }

        for (let r = bombRow - 1; r <= bombRow + 1; r++) {
            for (let c = bombCol - 1; c <= bombCol + 1; c++) {
                if (!!bunnies[r] && !!bunnies[r][c]) {
                    bunnies[r][c] = bunnies[r][c] > boomDmg ? bunnies[r][c] - boomDmg : 0;
                }
            }
        }
    }

    for (let r = 0; r < bunnies.length; r++) {
        for (let c = 0; c < bunnies[r].length; c++) {
            if(bunnies[r][c]!==0){
                damage += bunnies[r][c];
                kills++;
                bunnies[r][c] = 0;
            }
        }
    }

    console.log(damage);
    console.log(kills);

}

solve(['10 10 10',
       '10 10 10',
       '10 10 10',
    '0,0 0,1 0,2 1,0 1,1 1,2 2,0 2,1 2,2']);

/*solve(['5 10 15 20',
 '10 10 10 10',
 '10 15 10 10',
 '10 10 10 10',
 '2,2 0,1']);*/