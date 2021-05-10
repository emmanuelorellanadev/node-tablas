const {multiplicar} = require('./multiplicar')
const argv = require('./yargs.js')
const color = require('colors')

const base = 1;

console.clear();

multiplicar(argv )
	.then(m => console.log(m.green))  
