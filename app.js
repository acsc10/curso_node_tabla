const {crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');
const colors = require('colors');

console.clear();

const base = argv.b;
const listar = argv.listar;
const hasta = argv.h;
//console.log (process.argv);
//console.log(argv);
crearArchivo( base , listar, hasta )
.then(nombreArchivo => console.log("Archivo creado correctamente".green))
.catch(err => console.log(err));
 
