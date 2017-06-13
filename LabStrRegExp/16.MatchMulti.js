function solve(str) {
    let rege=/\-*[0-9]+\s*\*\s*\-*[0-9]+\.[0-9]+/;
    let match=rege.exec(str);

    while (match){
        let num=match[0].split('*').reduce((x,y)=>x*y);
        str=str.replace(match,num);

        match=rege.exec(str);
    }

    console.log(str);
}

solve('My bill: 2*2.50 (beer); 2* 1.20 (kepab); -2  * 0.5 (deposit).');