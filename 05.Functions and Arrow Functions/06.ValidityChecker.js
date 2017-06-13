function validityChecker(arr) {
    let point1={x:arr[0],y:arr[1]};
    let point2={x:arr[2],y:arr[3]};
    let origin={x:0,y:0};

    function isValid(p1, p2) {
        let distX=Math.abs(p1.x-p2.x);
        let distY=Math.abs(p1.y-p2.y);
        let totDist=Math.sqrt(distX**2+distY**2);

        if (totDist === parseInt(totDist)){
            return 'is valid';
        }else {
            return 'is invalid';
        }
    }

    console.log(`{${point1.x}, ${point1.y}} to {0, 0} ${isValid(point1,origin)}`);
    console.log(`{${point2.x}, ${point2.y}} to {0, 0} ${isValid(point2,origin)}`);
    console.log(`{${point1.x}, ${point1.y}} to {${point2.x}, ${point2.y}} ${isValid(point1,point2)}`);

}

validityChecker([2,1,1,1]);