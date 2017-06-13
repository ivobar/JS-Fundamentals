function tripLength(arr) {
    let p1 = {x:arr[0],y:arr[1]};
    let p2 = {x:arr[2],y:arr[3]};
    let p3 = {x:arr[4],y:arr[5]};


    function distance(p1,p2) {
        let distX=Math.abs(p1.x-p2.x);
        let distY=Math.abs(p1.y-p2.y);

        return Math.sqrt(distX**2 + distY**2);
    }

    if(distance(p1,p2)<=distance(p1,p3) && distance(p1,p3)>=distance(p2,p3)){
        let a = distance(p1,p2)+distance(p2,p3);
        console.log('1->2->3: '+a);
    }else if(distance(p1,p2)<=distance(p2,p3) && distance(p1,p3)<distance(p2,p3)){
        let b = distance(p1,p3)+distance(p1,p2);
        console.log('2->1->3: '+b);
    }else{
        let c = distance(p2,p3)+distance(p1,p3);
        console.log('1->3->2: '+c);
    }

}

tripLength([-1, -2, 3.5, 0, 0, 2]);


