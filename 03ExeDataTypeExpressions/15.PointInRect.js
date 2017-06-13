function pointInRect(arr) {
    let [x,y,xMin,xMax,yMin,yMax]=arr;

    let result= x>=xMin && x<=xMax && y>=yMin && y<=yMax ? 'inside' : 'outside';

    return result;
}

console.log(pointInRect([12.5, -1, 2, 12, -3, 3]));