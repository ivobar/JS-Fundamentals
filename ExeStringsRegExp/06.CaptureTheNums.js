function solve(arr) {
    let nums = [];
    let rege = /\d+/g;

    for (let str of arr) {
        let match = rege.exec(str);
        while (match) {
            nums.push(match[0]);
            match=rege.exec(str);
        }
    }

    console.log(nums.join(' '));
}

solve(['Let’s go11!!!11!','Okey!1!']);