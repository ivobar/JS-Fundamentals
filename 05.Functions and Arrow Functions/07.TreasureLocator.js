function treasureHunt(arr) {
    let tuvalu={xStart:1,xEnd:3,yStart:1,yEnd:3,name:'Tuvalu'};
    let samoa={xStart:5,xEnd:7,yStart:3,yEnd:6, name:'Samoa'};
    let tokelau={xStart:8,xEnd:9,yStart:0,yEnd:1, name:'Tokelau'};
    let cook={xStart:4,xEnd:9,yStart:7,yEnd:8, name:'Cook'};
    let tonga={xStart:0,xEnd:2,yStart:6,yEnd:8, name:'Tonga'};

    let islands=[tuvalu,samoa,tokelau,cook,tonga];

    for (let i=0 ; i<arr.length ; i+=2){
       let point={x:arr[i],y:arr[i+1]};
       let location = 'On the bottom of the ocean';

        for (let isl of islands) {
          if(point.x>=isl.xStart && point.x<=isl.xEnd && point.y>=isl.yStart && point.y<=isl.yEnd){
              location=isl.name;
              break;
          }
        }
        console.log(location);
    }
}

treasureHunt([6,4]);