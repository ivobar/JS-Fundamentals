function solve(string) {
    let result=string.split(' ');

    for (let i=0 ; i<result.length ; i++){
       result[i]=result[i].charAt(0).toUpperCase()+result[i].slice(1).toLowerCase();
    }

    console.log(result.join(' '));
}

solve('Capitalize these words');