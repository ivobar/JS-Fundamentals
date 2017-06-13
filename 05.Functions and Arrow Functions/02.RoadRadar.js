function speeding(arr) {
    let speed=arr[0];
    let place=arr[1];
    let limit = getLimit(place);

    getFine(limit,speed);

    function getLimit(pl) {
        let speedLimit=0;
        switch (pl){
            case 'motorway':speedLimit=130;
            break;
            case 'interstate': speedLimit=90;
            break;
            case 'city': speedLimit=50;
            break;
            case 'residential': speedLimit=20;
            break;
            default:break;
        }
        return speedLimit;
    }

    function getFine(limit, speed) {
        let speedDifference=speed-limit;
        let fine='';

        if(speedDifference<=0) {
            fine = '';
        }
        if(speedDifference<=40 && speedDifference>20){
            fine='excessive speeding';
        }
        if(speedDifference<=20 && speedDifference>0){
            fine='speeding';
        }
        if (speedDifference>40){
            fine='reckless driving';
        }

        console.log(fine);
    }

}

speeding([200, 'motorway']);