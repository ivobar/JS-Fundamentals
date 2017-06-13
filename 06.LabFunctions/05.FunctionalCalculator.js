function calculator(a, b, operationSign) {

    let calculation = function (a, b, operation) {
        return operation(a,b);
    }

    let sum = function (a, b) {
        return a+b;
    }

    let substract = function (a, b) {
        return a-b;
    }

    let divide = function (a, b) {
        return a/b;
    }

    let multiply = function (a, b) {
        return a*b;
    }

    switch (operationSign){
        case '+':
            return calculation(a,b,sum);
            break;
        case '-':
            return calculation(a,b,substract);
            break;
        case '*':
            return calculation(a,b,multiply);
            break;
        case '/':
            return calculation(a,b,divide);
            break;
    }
}

console.log(calculator(2, 5, '+'));