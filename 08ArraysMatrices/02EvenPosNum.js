function evenPos(arr) {
    console.log(arr.filter((x,i)=>i%2===0).join(' '));
}

evenPos(['5', '10']);