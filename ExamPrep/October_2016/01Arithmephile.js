function solve(arr) {
    let numbers = arr.map(Number);
    let numLenght = numbers.length;
    let maxProduct=Number.NEGATIVE_INFINITY;

    for (let i = 0; i < numLenght; i++) {
        if (numbers[i] >= 0 && numbers[i] < 10) {
            let product=1;
            for (let j=i+1 ; j<i+1+numbers[i] ; j++){
               product*=numbers[j];
            }
            if(maxProduct<product){
                maxProduct=product;
            }
        }
    }

    console.log(maxProduct);
}

solve(['10','20','2','-1','44','3','56','-1','24']);
solve(['100','200','2','3','2','3','2','1','1']);