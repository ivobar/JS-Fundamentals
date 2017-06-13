function triangleOfStars(a) {

    function printRow(index) {
        console.log('*'.repeat(index));
    }

    function printMidRow(n) {
        console.log('*'.repeat(n))
    }

    //top half
    for ( i = 1 ; i <= a-1 ; i++){
        printRow(i);
    }

    //mid half
    printMidRow(a);

    //bottom half
    for ( i = a-1 ; i >= 1 ; i--){
        printRow(i);
    }
}

triangleOfStars(5);