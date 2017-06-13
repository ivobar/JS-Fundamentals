function solve(str) {
    let rege=/[^a-zA-Z0-9_]+/g;

    let words=str[0].split(rege).filter(x=>x!=="");

    let obj={};

    for (let i=0 ; i<words.length ; i++){
       if(obj.hasOwnProperty(words[i])){
           obj[words[i]]+=1;
       }else{
           obj[words[i]]=1;
       }
    }

    console.log(JSON.stringify(obj));
}

solve("JS devs use Node.js for server-side JS.-- JS for devs");