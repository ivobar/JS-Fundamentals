function solve(arr) {
    function replaceSecretData(str,match) {
        str=str.replace(match,'|'.repeat(match.length));
        return str;
    }

    let regeName=/\*[A-Z][A-Za-z]*(?=\s|$)/g;
    let regePhone=/\+[0-9-]{10}(?=\s|$)/g;
    let regeID=/![a-zA-Z0-9]+(?=\s|\t|$)/g;
    let regeBase=/_[0-9A-Za-z]+(?=\s|$)/g;

    for (let i=0 ; i<arr.length ; i++){
       let matchName=regeName.exec(arr[i]);
       while (matchName){
           arr[i]=replaceSecretData(arr[i],matchName[0]);
           matchName=regeName.exec(arr[i])
       }

        let matchPhone=regePhone.exec(arr[i]);
        while (matchPhone){
            arr[i]=replaceSecretData(arr[i],matchPhone[0]);
            matchPhone=regePhone.exec(arr[i])
        }

        let matchID=regeID.exec(arr[i]);
        while (matchID){
            arr[i]=replaceSecretData(arr[i],matchID[0]);
            matchID=regeID.exec(arr[i])
        }

        let matchBase=regeBase.exec(arr[i]);
        while (matchBase){
            arr[i]=replaceSecretData(arr[i],matchBase[0]);
            matchBase=regeBase.exec(arr[i])
        }
    }

    console.log(arr.join('\n'));
}

solve(['Agent *Ivankov was in the room when it all happened.',
'The person in the room was heavily armed.',
'Agent *Ivankov had to act quick in order.',
'He picked up his phone and called some unknown number. ',
'I think it was +555-49-796',
'I can\'t really remember...',
'He said something about "finishing work" with subject !2491a23BVB34Q and returning to Base _Aurora21',
'Then after that he disappeared from my sight.',
'As if he vanished in the shadows.',
'A moment, shorter than a second, later, I saw the person flying off the top floor.',
'I really don\'t know what happened there.',
'This is all I saw, that night.',
' cannot explain it myself...']);