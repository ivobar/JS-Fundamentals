function solve(arr) {
    let reg = /(\b[0-9]{1,2})-([a-zA-Z]{3})-([0-9]{4})\b/g;

    for (let obj of arr) {
        let r = reg.exec(obj);
        if (r !== null) {
            console.log(`${r[0].trim()} (Day: ${r[1]}, Month: ${r[2]}, Year: ${r[3]})`);
        }
    }
}

solve(['1-Jan-1999 is a valid date.', 'So is 01-July-2000.','I am an awful liar, by the way – Ivo, 28-Sep-2016.']);