const readline = require('node:readline');
const { stdin, stdout} = require('node:process');
const inp = stdin;
const out = stdout;

const rl = readline.createInterface({inp, out });
rl.on('SIGINT', () => {
  rl.question('Are you sure you want to exit? ', (answer) => {
    if (answer.match(/^y(es)?$/i)) rl.pause();
  });
}); 
rl.on('pause', () => {
  console.log('Readline paused.');
}); 
rl.on('history', (history) => {
 	 console.log(`Received: ${history}`);
}); 
rl.question('Enter your question here', (answer) => {
	console.log(`Answer: ${answer}`)
rl.close();
});