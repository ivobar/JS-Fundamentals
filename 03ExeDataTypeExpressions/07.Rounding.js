function rounder(arr) {
    let text=String(arr[0]);
    let dotPosition = 0;

    for(let i=0; i<text.length; i++){
        if(text[i]==='.'){
            dotPosition = i;
            break;
        }
    }

    let trailingNumbers = text.substr(dotPosition+1,text.length-1).length;

    let precision = Math.min(15,trailingNumbers,arr[1]);

    return arr[0].toFixed(precision);
}

console.log(rounder([10.5, 3]));