function solve(arr) {
    let towns=[];
    let incomes=[];

    for (let i=0 ; i<arr.length ; i++){
       let args=arr[i].split('|').filter(t=>t!=='');
       towns.push(args[0].trim());
       incomes.push(Number(args[1]));
    }


    console.log(towns.join(', '));
    console.log(incomes.reduce((a,b)=>a+b));
}

solve(['| Sofia           | 300',
    '| Veliko Tarnovo  | 500',
    '| Yambol          | 275']
);