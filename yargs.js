const argv = require('yargs')
	.option('b', {
		alias: 'base',
		type: 'number',
		demandOption: true,
        describe: 'Tabla de multiplicar que se mostrara'

	})
	.check( ( argv, options ) => {
    	if( isNaN( argv.b ) ){
    		throw 'Error macabro'
    	}else{
    		return true
    	}
    })
    .option('l', {
    	alias: 'list',
    	type: 'boolean',
    	demandOption: false,
    	default: false,
        describe: 'Determina si debe o no imprimirse en pantalla el resultado'
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        default: '10',
        describe: 'Numero maximo al que llegar[a la tabla de multiplicar'
    })
	.argv;

    module.exports = argv;