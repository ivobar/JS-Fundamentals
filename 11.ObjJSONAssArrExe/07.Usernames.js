function solve(strArr) {
    let set=new Set();

    for (let str of strArr) {
        set.add(str);
    }

    function sortNames(a, b) {
        if(a.length>b.length){
            return 1;
        }else if(a.length===b.length){
            if(a>b){
                return 1;
            }else if(a<b){
                return -1;
            }else{
                return 0;
            }
        }else {
            return -1;
        }
    }

    let sortedNames=[...set].sort(sortNames);

    for (let obj of sortedNames) {
        console.log(obj);
    }


}

solve(['Denise',
    'Ignatius',
    'Iris',
    'Isacc',
    'Indie',
    'Dean',
    'Donatello',
    'Enfuego',
    'Benjamin',
    'Biser',
    'Bounty',
    'Renard',
    'Rot']);