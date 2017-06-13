function isInsideVolume(array) {
    let point = {};
    let volume={xStart:10,xEnd:50,yStart:20,yEnd:80,zStart:15,zEnd:50};

    function checkPoint(point, volume) {
        let checkX=point.x>=volume.xStart && point.x<=volume.xEnd;
        let checkY=point.y>=volume.yStart && point.y<=volume.yEnd;
        let checkZ=point.z>=volume.zStart && point.z<=volume.zEnd;

        if(checkX && checkY && checkZ){
            console.log('inside');
        }else {
            console.log('outside');
        }
    }

    for (let i=0 ; i<array.length ; i+=3){
       point.x=array[i];
       point.y=array[i+1];
       point.z=array[i+2];

        checkPoint(point, volume);
    }
}

isInsideVolume([13.1, 50, 31.5,
    50, 80, 50,
    -5, 18, 43]);