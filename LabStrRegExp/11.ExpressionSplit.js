function solve(str) {
    let arr=str.split(/[ ();\.\\,]/).filter(x=>x!='');

    for (let obj of arr) {
        console.log(obj);
    }
}

solve('let sum = 4 * 4,b = "wow";');