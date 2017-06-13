function squareOfStars(n) {
    function printRow(count = n) {
        console.log('*'+' *'.repeat(count-1))
    }

    for ( i = 1 ; i <=n ; i++){
        printRow();
    }
}

squareOfStars(5);