function solve(sentence, word) {
    let rege=new RegExp('\\b'+word+'\\b','gi');
    let match=rege.exec(sentence);
    let counter=0;

    while (match){
        counter++;
        match=rege.exec(sentence);
    }

    console.log(counter);
}

solve('There was one. Therefore I bought it. I wouldn’t buy it otherwise.','there');