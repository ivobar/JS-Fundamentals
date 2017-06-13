function aggElements(arr) {
    function aggregate(elements,startValue,operation) {
        let result = startValue;
        for (let i=0 ; i<elements.length ; i++){
           result=operation(result,elements[i]);

        }

        return result;
    }

    console.log(aggregate(arr,0,(a,b)=>(a+b)));
    console.log(aggregate(arr,0,(a,b)=>(a+1/b)));
    console.log(aggregate(arr,'',(a,b)=>(a+b)));


}

aggElements([1,2,3]);