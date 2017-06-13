function solve(arr) {
    let towns=[];
    let data=arr.slice(1);

    for (let i=0 ; i<data.length ; i++){
       let obj={};
        obj['Town']=data[i].split('|').filter(x=>x!=='').map(x=>x.trim())[0];
        obj['Latitude']=data[i].split('|').filter(x=>x!=='').map(Number)[1];
        obj['Longitude']=data[i].split('|').filter(x=>x!=='').map(Number)[2];
        towns.push(obj);
    }

    console.log(JSON.stringify(towns));

}

solve(['| Town | Latitude | Longitude |','| Sofia | 42.696552 | 23.32601 |','| Beijing | 39.913818 | 116.363625 |']);