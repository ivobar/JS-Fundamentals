function solve(str) {
    if(str.match(/^[a-zA-Z0-9]+@[a-z]+\.[a-z]+$/)===null){
        return 'Invalid';
    }else{
        return 'Valid';
    }
}

console.log(solve('invalid@emai1.bg'));