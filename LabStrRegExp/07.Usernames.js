function solve(arr) {
    let result = [];

    for (let i=0 ; i<arr.length ; i++){
       let args=arr[i].split('@');
       result.push(args[0]+'.'+args[1].split('.').map(x=>x[0]).join(''));
    }

    console.log(result.join(', '));
}

solve(['peshoo@gmail.com', 'todor_43@mail.dir.bg', 'foo@bar.com']);
