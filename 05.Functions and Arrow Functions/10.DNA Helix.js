function helix(a) {
    let sequence = 'ATCGTTAGGG';
    let c = 0; //counter

    for (let i=0 ; i<a ; i++){
        if(i%4===0){
            console.log('**'+`${sequence.charAt(c)}`+`${sequence.charAt(c+1)}`+'**');
            if (c==sequence.length-2){
                c=0;
            }else {
                c+=2;
            }
        }else if(i%2!==0){
            console.log('*'+`${sequence.charAt(c)}`+'--'+`${sequence.charAt(c+1)}`+'*');
            if (c==sequence.length-2){
                c=0;
            }else {
                c+=2;
            }
        }else {
            console.log(`${sequence.charAt(c)}`+'----'+`${sequence.charAt(c+1)}`);
            if (c==sequence.length-2){
                c=0;
            }else {
                c+=2;
            }
        }
    }
}


helix(4);
