const argv = require('yargs')
                            .option('b',{
                                alias:'base',
                                type:'number',
                                demandOption:true,
                                describe:'es la base a multiplicar'
                            })
                            .check((argv, options)=>{
                                if (isNaN(argv.b)) {
                                    throw new Error("La base debe ser un numero")
                                  } else {
                                    return true // tell Yargs that the arguments passed the check
                                  }
                            })
                            .option('h',{
                                alias:'hasta',
                                type:'number',
                                demandOption:true,
                                default:10,
                                describe:'hasta que numero multiplicar la base'
                            })
                            .check((argv, options)=>{
                                if (isNaN(argv.h)) {
                                    throw new Error("hasta debe ser un numero")
                                  } else {
                                    return true // tell Yargs that the arguments passed the check
                                  }
                            })
                            .option('l',{
                                alias:'listar',
                                type:'boolean',
                                default: false,
                                describe:'muestra la tabla en consola'
                            })
                            .argv;
module.exports = argv;