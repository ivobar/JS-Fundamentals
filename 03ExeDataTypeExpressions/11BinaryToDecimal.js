function binaryToDecimal(a) {
    let decimal = 0;

    for(let i=0 ; i<=a.length-1 ; i++){
        decimal+=Number(a[a.length-1-i])*Math.pow(2,i);
    }

    return decimal;
}


console.log(binaryToDecimal('11110000'));