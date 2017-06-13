function aggregateElements(arr) {

    function agg(args, startValue, operation) {
        let result=startValue;
        for (let i=0; i<args.length; i++) {
            result=operation(result,args[i]);
        }
        return result;
    }

    console.log(agg(arr, 0, (a, b) => a + b));
    console.log(agg(arr, 0, (a, b) => a + 1 / b));
    console.log(agg(arr, '', (a, b) => a + b));

}

aggregateElements([1,2,3]);
