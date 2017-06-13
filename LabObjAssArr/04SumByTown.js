function solve(arrStr) {
    let obj={};

    for (let i=0 ; i<arrStr.length ; i+=2){
       if(obj.hasOwnProperty(arrStr[i])){
           obj[arrStr[i]]+=Number(arrStr[i+1]);
       }else{
           obj[arrStr[i]]=Number(arrStr[i+1]);
       }
    }

    console.log(JSON.stringify(obj));
}

solve(['Sofia',
    '20',
    'Varna',
    '3',
    'sofia',
    '5',
    'varna',
    '4']);