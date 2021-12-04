

const fs = require('fs');
const colors = require('colors');
const crearArchivo = (base = 5 , listar, hasta)=>{
    return new Promise((resolve, reject)=>{
        let salida = "";
        let consola = '';
        for(let i= 1; i <= hasta ; i++){
            salida +=`${base} x  ${i} = ${base * i}\n`;
            consola  +=`${base} ${'x'.green}  ${i} ${'='.green} ${colors.blue(base * i)} \n`;
        }
        
        if(listar){
            console.log("================================".rainbow);
            console.log(`           Tabla del `.green, `${base}`.underline.green);
            console.log("================================".rainbow);
            
            console.log(consola);
        }
       
    
       
        
       
        /* fs.writeFile('tabla-5.txt',salida, (err)=>{
            if (err) throw err;
            console.log('The file has been saved!');
        }) */
          
         fs.writeFileSync(`./salida/tabla-${base}.txt`,salida);
          resolve(`tabla del ${base}.txt`);
    })
    
}

    module.exports={
        crearArchivo
    }