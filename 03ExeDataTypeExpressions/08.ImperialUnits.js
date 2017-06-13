function imperialConvert(a) {
    let feet = Math.floor(a/12);
    let inchesLeft = a%12;

    return `${feet}'-${inchesLeft}"`;
}


console.log(imperialConvert(11));