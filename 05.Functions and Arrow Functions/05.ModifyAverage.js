function modifyAverage(num) {
    function isHigher(num) {
        let textNum = String(num);
        let sumOfDigits=0;

        for (let i=0 ; i<textNum.length ; i++){
            sumOfDigits+=Number(textNum[i]);
        }

        if (sumOfDigits/textNum.length>5){
            return true;
        }else {
            return false;
        }
    }

    let textNum=String(num);

    while (!isHigher(textNum)){
        textNum+='9';
        isHigher(textNum);
    }

    console.log(textNum);
}

modifyAverage(101);