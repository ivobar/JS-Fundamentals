function solve(name, email, number, arr) {
    function replaceData(string,name,email,number) {
        string=string.replace(/<![a-zA-Z]+!>/,name);
        string=string.replace(/<@[a-zA-Z]+@>/,email);
        string=string.replace(/<\+[a-zA-Z]+\+>/,number);
        return string;
    }

    for (let obj of arr) {
        obj=replaceData(obj,name,email,number);
        console.log(obj);
    }
}

solve('Pesho','pesho@softuni.bg','90-60-90',['Hello, <!username!>!',
        'Welcome to your Personal profile.',
        'Here you can modify your profile freely.',
        'Your current username is: <!fdsfs!>. Would you like to change that? (Y/N)',
        'Your current email is: <@DasEmail@>. Would you like to change that? (Y/N)',
        'Your current phone number is: <+number+>. Would you like to change that? (Y/N)']);