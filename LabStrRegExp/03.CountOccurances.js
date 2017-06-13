function solve(match, text) {
    let counter = 0;

    for (let i=0 ; i<text.length ; i++){
       if (text.indexOf(match,i)===-1){
           break;
       }else{
           counter++;
           i = text.indexOf(match,i);
       }
    }

    return counter;
}

console.log(solve('ma', 'Marine mammal training is the training and caring for marine life such as, dolphins, killer whales, sea lions, walruses, and other marine mammals. It is also a duty of the trainer to do mental and physical exercises to keep the animal healthy and happy.'));

