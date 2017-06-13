function isPrime(a) {
    let check = true;
    let boundary = Math.sqrt(a);

    for (let i = 2; i<=boundary; i++){

        if (a%i===0){
            check = false;
            break;
        }
    }

    return check && a>1;
}

console.log(isPrime(2));