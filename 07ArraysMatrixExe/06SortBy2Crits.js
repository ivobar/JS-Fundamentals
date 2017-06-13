function solve(arr) {
    function compare(a, b) {
        if(a.length<b.length){
            return -1;
        }else if(a.length===b.length){
            if(a<b){
                return -1;
            }else{
                return 1;
            }
        }else {
            return 1;
        }
    }

    let result = arr.sort(compare);

    for (let obj of result) {
        console.log(obj);
    }
}

//solve(['alpha','beta','gamma']);
//solve(['Isacc','Theodor','Jack','Harrison','George']);
solve(['test','Deny','omen','Default']);