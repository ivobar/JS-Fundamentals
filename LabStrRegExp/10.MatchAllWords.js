function solve(str) {
    let reg=/\w+/g;

    console.log(str.match(reg).join('|'));
}

solve('A Regular Expression needs to have the global flag in order to match all occurrences in the text');
