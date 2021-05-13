import readline from 'readline';
const rl = readline.createInterface ({
    input: process.stdin,
    output: process.stdout,
})
rl.question('Please enter a word: ', function (answer) {
   if (answer === answer.split('').reverse().join('')) {
       console.log('Entered word is a polindrome');
   }
   else {
       console.log('Entered word is not a polindrome');
   }
    rl.close();
})