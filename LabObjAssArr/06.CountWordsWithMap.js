function solve(str) {
    let rege=/[^a-zA-Z0-9_]+/g;

    let words=str[0].split(rege)
        .filter(x=>x!=="")
        .map(x=>x.toLowerCase());

    let map=new Map();

    for (let i=0 ; i<words.length ; i++){
        if(map.has(words[i])){
            map.set(words[i],map.get(words[i])+1);
        }else{
            map.set(words[i],1);
        }
    }

    [...map].sort()
        .forEach(([k,v])=>console.log(`'${k}' -> ${v} times`));
}

solve(['Far too slow, you\'re far too slow.']);