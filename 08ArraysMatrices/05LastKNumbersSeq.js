function solve(n,k) {
    let seq = [];

    for (let i = 0; i < n; i++) {
        if (i===0){
            seq.push(1);
        }else{
            seq.push(seq.slice(i>k ? i-k : 0 , i+1).reduce((x,y)=>x+y));
        }

    }
    console.log(seq.join(' '));
}

solve(8,2);