function solve(arrStr) {
    let system = '';
    let component = '';
    let subcomponent = '';

    let sysMap = new Map();

    for (let row of arrStr) {
        let data = row.split(' | ');
        system = data[0];
        component = data[1];
        subcomponent = data[2];

        if (sysMap.has(system)) {
            if (sysMap.get(system).has(component)) {
                sysMap.get(system).get(component).push(subcomponent);
            } else {
                sysMap.get(system).set(component, [subcomponent]);
            }
        } else {
            sysMap.set(system, new Map());
            sysMap.get(system).set(component, [subcomponent]);
        }
    }

    function sortSystems(a, b) {
        if (a[1].size > b[1].size) {
            return -1;
        } else if (a[1].size === b[1].size) {
            if (a[0].toLowerCase() < b[0].toLowerCase()) {
                return -1;
            } else if (a[0].toLowerCase() > b[0].toLowerCase()) {
                return 1;
            } else {
                return 0;
            }
        } else {
            return 1;
        }
    }
    function sortComponents(a, b) {
        if(a[1].length>b[1].length){
            return -1;
        }else if(a[1].length<b[1].length){
            return 1;
        }
        return 0;
    }

    let sortedSystemsArr=[...sysMap].sort(sortSystems);


    for (let i=0 ; i<sortedSystemsArr.length ; i++){
        [...sortedSystemsArr[i][1]].sort(sortComponents);
        console.log(sortedSystemsArr[i][0]);
        for (let [k,v] of sortedSystemsArr[i][1]) {
            console.log(`|||${k}`);
            for (let subComp of v) {
                console.log(`||||||${subComp}`);
            }
        }

    }

}

solve(['SULS | Main Site | Home Page',
    'SULS | Main Site | Login Page',
    'SULS | Main Site | Register Page',
    'SULS | Judge Site | Login Page',
    'SULS | Judge Site | Submittion Page',
    'Lambda | CoreA | A23',
    'SULS | Digital Site | Login Page',
    'Lambda | CoreB | B24',
    'Lambda | CoreA | A24',
    'Lambda | CoreA | A25',
    'Lambda | CoreC | C4',
    'Indice | Session | Default Storage',
    'Indice | Session | Default Security']);
