function solve(arr) {
    let names=arr.filter((x,i)=>i%2===0);
    let prices=arr.filter((x,i)=>i%2!==0).map(Number);

    console.log(`You purchased ${names.join(', ')} for a total sum of ${prices.reduce((a, b) => a + b)}`);
}

solve(['Beer Zagorka', '2.65', 'Tripe soup', '7.80','Lasagna', '5.69']);