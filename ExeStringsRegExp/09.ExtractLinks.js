function solve(arr) {
    let rege=/www\.[A-Za-z0-9\-]+\.[a-z]+(?:\.[a-z]+)*/g;

    let result=[];

    for (let i=0 ; i<arr.length ; i++){
        let match=rege.exec(arr[i]);

        while (match){
            result.push(match[0]);
            match=rege.exec(arr[i]);
        }
    }

    console.log(result.join('\n'));
}

solve(['Need information about cheap hotels in London?',
'You can check us at www.london-hotels.co.uk!',
'We provide the best services in London.',
'"London Hotels are awesome!" - www.indigo.bloggers.com',
'"I am very satisfied with their services" - ww.ivan.bg',
'"Best Hotel Services!" - www.rebel21.sedecrem.moc ']);