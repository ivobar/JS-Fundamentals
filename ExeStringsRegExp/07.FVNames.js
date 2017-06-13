function solve(str) {
    let rege=/\b_([a-zA-Z0-9]+)\b/g;

    let results=[];

    let match=rege.exec(str);
    while (match){
        results.push(match[1]);
        match=rege.exec(str);
    }

    console.log(results.join(','));
}

solve('__invalidVariable _evenMoreInvalidVariable_ _validVariable');