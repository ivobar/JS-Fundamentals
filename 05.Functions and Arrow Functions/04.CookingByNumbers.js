function cooking(arr) {
    let chop = x => x/2;
    let dice = x => Math.sqrt(x);
    let spice = x => x+1;
    let bake = x => x*3;
    let fillet = x => x-0.2*x;

    let num = arr[0];
    let result = 0;

    for (let i = 1; i < arr.length; i++) {
        switch (arr[i]){
            case 'chop': result = chop(num);
                break;
            case 'dice': result = dice(num);
                break;
            case 'spice': result = spice(num);
                break;
            case 'bake': result = bake(num);
                break;
            case 'fillet': result = fillet(num);
                break;
            default:
                break;

        }
        num=result;
        console.log(result);
    }


}

cooking([32, 'chop', 'chop', 'chop', 'chop', 'chop']);