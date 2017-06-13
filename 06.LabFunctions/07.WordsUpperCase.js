function wordUp(a) {
    let strToUpper=a.toUpperCase(); //take the input string and make all chars to upper case
    function extractWords() {
        return strToUpper.split(/\W/);
    }

    let words=extractWords(); //splits the string by all not-word characters and returns an array
    words=words.filter(w=>w!==''); //removes empty entries from the array

    return words.join(', ');
}

console.log(wordUp('Hi, how are you?'));
