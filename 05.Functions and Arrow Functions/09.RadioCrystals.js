function radioGaga(arr) {
    let target=arr[0];

    let cut = x => x/4;
    let lap = x => x*0.8;
    let grind = x => x-20;
    let etch = x => x-2;
    let xray = x => x+1;
    let taw = x => Math.floor(x);

    function cutProcess(th) {
        let timesCut = 0;
        while (true) {
            if (cut(th) > target) {
                timesCut++;
                th = cut(th);
            } else if (cut(th) === target) {
                timesCut++;
                th = cut(th);
                th = taw(th);
                console.log(`Cut x` + timesCut);
                console.log('Transporting and washing');
                console.log(`Finished crystal ${th} microns`);
                return th;
            } else if (timesCut===0){
                return th;
            }else {
                th = taw(th);
                console.log(`Cut x` + timesCut);
                console.log('Transporting and washing');
                return th;
            }
        }

    }
    function lapProcess(th) {
        if(th===target){
            return th;
        }
        let timesLap = 0;
        while (true){
            if(lap(th)>target){
                timesLap++;
                th=lap(th);
            }else if(lap(th)===target){
                timesLap++;
                th=lap(th);
                th=taw(th);
                console.log(`Lap x` + timesLap);
                console.log('Transporting and washing');
                console.log(`Finished crystal ${th} microns`);
                return th;
            }else if(timesLap===0){
                return th;
            }else {
                th=taw(th);
                console.log(`Lap x` + timesLap);
                console.log('Transporting and washing');
                return th;
            }
        }
    }
    function grindProcess(th) {
        if(th===target){
            return th;
        }
        let timesGrind = 0;
        while (true){
            if(grind(th)>target){
                timesGrind++;
                th=grind(th);
            }else if(grind(th)===target){
                timesGrind++;
                th=grind(th);
                th=taw(th);
                console.log(`Grind x` + timesGrind);
                console.log('Transporting and washing');
                console.log(`Finished crystal ${th} microns`);
                return th;
            }else if (timesGrind===0){
                return th;
            }else {
                th=taw(th);
                console.log(`Grind x` + timesGrind);
                console.log('Transporting and washing');
                return th;
            }
        }
    }
    function etchProcess(th) {
        if(th===target){
            return th;
        }
        let timesEtch = 0;
        while (true){
            if(etch(th)>target){
                timesEtch++;
                th=etch(th);
            }else if(etch(th)===target){
                timesEtch++;
                th=etch(th);
                th=taw(th);
                console.log(`Etch x` + timesEtch);
                console.log('Transporting and washing');
                console.log(`Finished crystal ${th} microns`);
                return th;
            }else if(etch(th)===target-1){
                timesEtch++;
                th=etch(th);
                th=taw(th);
                console.log(`Etch x` + timesEtch);
                console.log('Transporting and washing');
                return th;
            }else if (timesEtch===0){
                return th;
            }else {
                th=taw(th);
                console.log(`Etch x` + timesEtch);
                console.log('Transporting and washing');
                return th;
            }
        }
    }
    function xrayProcess(th) {
        if(th===target){
            return th;
        }
        th=xray(th);
        console.log(`X-ray x` + 1);
        console.log(`Finished crystal ${th} microns`);
    }

    function test() {
        return 5;
    }

    for (let i = 1; i < arr.length; i++) {
        console.log(`Processing chunk ${arr[i]} microns`);
        let th = arr[i];

        th=cutProcess(th);
        th=lapProcess(th);
        th=grindProcess(th);
        th=etchProcess(th);
        th=xrayProcess(th);

    }


}

radioGaga([2000, 4000]);