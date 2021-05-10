const fs = require('fs');    
const multiplicar = async (argv) => {

    let tablaMult = '';

    for (let i = 1; i <= argv.h; i++) {
        tablaMult += `${argv.b} x ${i} = ${argv.b * i} \n`;
    }

    fs.writeFileSync(`./salida/${argv.b}.txt`, tablaMult)

    if( argv.l ){
    	console.log(tablaMult)
    }
    return `Archivo ${argv.b}.txt creado Exitosamente`

}

module.exports = {
    multiplicar
}