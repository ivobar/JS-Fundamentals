function solve(strArr) {
    let text=strArr[0];

    let textArr=text.split(/\s*[.,!?:;]\s*/g).filter(x=>x!=='');
    let symbolsToRep=text.match(/\s*[.,!?:;]\s*/g).map(x=>x.trim()+' ');
    text='';

    for (let i=0 ; i<textArr.length ; i++){
       text+=textArr[i]+symbolsToRep[i];
    }
    /*
    let regex2=/\.*\s+!/g
    let match=regex2.exec(text);
    while (match){
        text=text.replace(match,match[0].split(' ').join(''));
        match=regex2.exec(text);
    }*/

    console.log(text);


}

solve(['Make,sure to give:proper spacing where is needed... !']);