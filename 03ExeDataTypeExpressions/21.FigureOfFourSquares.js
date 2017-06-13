function figure(a) {
    let topBotMid = '+'+'-'.repeat(a-2)+'+'+'-'.repeat(a-2)+'+';
    let inBetween = '|'+' '.repeat(a-2)+'|'+' '.repeat(a-2)+'|';

    if (a%2==0){
        for (let row=1 ; row<=a-1 ; row++){
           if (row==1 || row==a/2 || row==a-1){
               console.log(topBotMid);
           }else{
               console.log(inBetween);
           }
        }
    }else{
        for (let row=1 ; row<=a ; row++){
            if (row==1 || row==(a+1)/2 || row==a){
                console.log(topBotMid);
            }else{
                console.log(inBetween);
            }
        }
    }

}

figure(7);

