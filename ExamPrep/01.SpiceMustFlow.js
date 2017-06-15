function solve(arr) {
    let startYield = Number(arr[0]);
    let extracted=0;
    let days=0;

    while (startYield>=100){
        extracted+=startYield-26;
        days++;
        startYield-=10;
    }

    extracted = days===0 ? 0 : extracted-26;

    console.log(days);
    console.log(extracted);
}

solve(['111']);