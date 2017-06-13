function solve(text, cens) {

    for (let i=0 ; i<cens.length ; i++){
        let isThere = text.indexOf(cens[i]);
        while (isThere>-1){
            text=text.replace(cens[i],'-'.repeat(cens[i].length));
            isThere=text.indexOf(cens[i],isThere+cens[i].length);
        }
    }
    console.log(text);
}


solve('roses are red, violets are blue', [', violets are', 'red']);