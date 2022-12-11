var con=require('../config/conexion');
const consumo = require('../model/consumo');
var user = require("../model/consumo");

module.exports={
    index: function(req, res){

        consumo.obtener(con, function(err, datos){
            console.log(datos);

            res.render('fumaMenos/record', { title: 'Aplicacion', consumos:datos });
        });

        
    },

    

    addC: function(req, res){
        let datos= req.body;
        console.log('Prueba: ',datos.id)
        if(datos.date==""|datos.time==""|datos.nCigarettes==""|datos.nCigarettes<=0|datos.company==""|datos.place==""){
            console.log('addC')
        }
        else{
            consumo.insertarConsumo(con, req.body,req.session.idUsuario, function(err){
                if (!err) {
                    console.log(err);
                }
            });   
        }
        res.render('fumaMenos/homeMenu', { id: datos.id});
            
    },

    mostrarFrmRegistro: function(req, res){
        res.render('fumaMenos/addConsumo');
    },

    mostrarEstadiscticas: function(req,res){
      
        //declaraciones basicas
        let cantidad_cigarrillos=0,gastoCigarrillos,gastoCagetillas;

        let promedioCigarrillos; 

        let mensaje1, mensaje2, mensaje3, mensaje4, mensaje5, mensaje6, mensaje7;
        
        
        consumo.obtener(con,req.session.idUsuario, function(err, datos){
             listaDeCigarros=datos;
                      
             
             //cantidades y dinero
             for (var i = 0; i < listaDeCigarros.length; i++) {

                
                cantidad_cigarrillos+=listaDeCigarros[i].n_Cigarette;
                console.log(cantidad_cigarrillos)

           }
       console.log(cantidad_cigarrillos);
      let gastoDeCigarrillos= parseInt(cantidad_cigarrillos*7);
      gastoCigarrillos = cantidad_cigarrillos *7;
      gastoCagetillas = cantidad_cigarrillos* 4.2;

      promedioCigarrillos = cantidad_cigarrillos/listaDeCigarros.length;


      //acompañamiento?
      let compaiaS = 0, compaiaN = 0;
      let pmsj;
      for(var i = 0; i < listaDeCigarros.length; i++){

        if(listaDeCigarros[i].company == "si")
        compaiaS++;
        else if(listaDeCigarros[i].company == "no")
        compaiaN++;
      }

      if(compaiaN>compaiaS)
      pmsj="La mayoria de las veses que fuma usted se encuentra solo.";
      else pmsj="La mayoria de las veces que fuma usted se encuentra acompañado.";

    
    //emocion
    let feliz=0, triste=0, enojado=0, confundido=0, decepcionado=0;
    let emocionM="";
      for(var i = 0; i < listaDeCigarros.length; i++){
        if(listaDeCigarros[i].emotion=="Feliz")
        feliz++;
        else if(listaDeCigarros[i].emotion=="Triste")
        triste++;
        else if(listaDeCigarros[i].emotion=="Enojado")
        enojado++;
        else if(listaDeCigarros[i].emotion=="Confundido")
        confundido++;
        else if(listaDeCigarros[i].emotion=="Decepcionado")
        decepcionado++;
    }

    
    var emociones = [feliz, triste, enojado, confundido, decepcionado];
    var emociones2 = [feliz, triste, enojado, confundido, decepcionado];

    for(var i=0; i<emociones.length; i++)
        for(var j=0; j<emociones.length; j++){
            
            if(emociones2[j] < emociones2[j+1]) {
                var tmp = emociones2[j]; 
                emociones2[j] = emociones2[j+1]; 
                emociones2[j+1] = tmp; 
 }
        }

    let indice=0;    
    for(var i=0; i<emociones.length; i++)
        if(emociones[i]==emociones2[0])
            indice=i;

    switch(indice){
        case 0:
            emocionM="feliz";
        break;
        
        case 1:
            emocionM="triste";
        break;

        case 2:
            emocionM="enojado";
        break;

        case 3:
            emocionM="confundido";
        break;

        case 4:
            emocionM="decepcionado";
        break;
    }
    
    
    //lugar
    let casa=0, escuela=0, trabajo=0, plaza=0, bar=0, vehiculo=0;
    let lugarM="";
      for(var i = 0; i < listaDeCigarros.length; i++){
        if(listaDeCigarros[i].place=="casa")
        casa++;
        else if(listaDeCigarros[i].place=="escuela")
        escuela++;
        else if(listaDeCigarros[i].place=="trabajo")
        trabajo++;
        else if(listaDeCigarros[i].place=="plaza")
        plaza++;
        else if(listaDeCigarros[i].place=="bar")
        bar++;
        else if(listaDeCigarros[i].place=="vehiculo")
        vehiculo++;
    }

    var lugares = [casa, escuela, trabajo, plaza, bar, vehiculo];
    var lugares2 = [casa, escuela, trabajo, plaza, bar, vehiculo];

    for(var i=0; i<lugares2.length; i++)
        for(var j=0; j<lugares2.length; j++){
            
            if(lugares2[j] < lugares2[j+1]) {
                var tmp = emociones2[j]; 
                lugares2[j] = lugares2[j+1]; 
                lugares2[j+1] = tmp; 
 }
        }

    let indice2=0;    
    for(var i=0; i<lugares.length; i++)
        if(lugares[i]==lugares2[0])
            indice2=i;
            
    switch(indice2){
        case 0:
            lugarM="su casa"
        break;
        
        case 1:
            lugarM="la escuela"
        break;

        case 2:
            lugarM="el trabajo"
        break;

        case 3:
            lugarM="una plaza publica"
        break;

        case 4:
            lugarM="el bar"
        break;

        case 5:
            lugarM="su vehiculo"
        break;
    }

    //fecha
    let monday=0, tuesday=0, wednesday=0, thursday=0, friday=0, saturday=0, sunday=0;
    var dias = [ ];
    let diaM;

    for(var i=0; i<listaDeCigarros.length; i++)
    dias.push(listaDeCigarros[i].date.substring(0, 4));

    for(var i = 0; i < dias.length; i++){
        if(dias[i]=="Mond")
        monday++;
        else if(dias[i]=="Tues")
        tuesday++;
        else if(dias[i]=="Wedn")
        wednesday++;
        else if(dias[i]=="Thur")
        thursday++;
        else if(dias[i]=="Frid")
        friday++;
        else if(dias[i]=="Satu")
        saturday++;
        else if(dias[i]=="Sund")
        sunday++;
    }

    var dias1 = [monday, tuesday, wednesday, thursday, friday, saturday, sunday];
    var dias2 = [monday, tuesday, wednesday, thursday, friday, saturday, sunday];

    for(var i=0; i<dias2.length; i++)
        for(var j=0; j<dias2.length; j++){
            
            if(dias2[j] < dias2[j+1]) {
                var tmp = dias2[j]; 
                dias2[j] = dias2[j+1]; 
                dias2[j+1] = tmp; 
            }
        }


        let indice3=0;    
    for(var i=0; i<dias1.length; i++)
        if(dias1[i]==dias2[0])
            indice3=i;


    switch(indice3){
        case 0:
            diaM="lunes";
        break;   
        
        case 1:
            diaM="martes";
        break;
        
        case 2:
            diaM="miercoles";
        break; 

        case 3:
            diaM="jueves";
        break; 

        case 4:
            diaM="viernes";
        break;

        case 5:
            diaM="sabado";
        break;

        case 6:
            diaM="domingo";
        break; 
    }




    //Mensajes
     mensaje1= ((req.session.nombreUsuario)+", usted ha consumido aproximadamente "+(cantidad_cigarrillos)+" cigarrillos desde que ocupa la aplicacion.");
     mensaje2= ("Su promedio de consumo estimado es de "+(promedioCigarrillos)+" cigarrillos diariamente");
     mensaje3= ((pmsj)+" De todas las veces que usted a registrado consumos, "+(compaiaN)+" usted está solo y "+(compaiaS)+" está acompañado.");
     mensaje4= ("Segun sus registros, cuando fuma,usted se siente mayormente "+(emocionM)+ ". Es importante mencionarle que encasillar todo un sentimiento en una palabra es muy complejo para una aplicacion web.");
     mensaje5= ("Usted fuma con mayor frecuencia en "+(lugarM)+", encontramos "+(lugares2[0])+" vees en las que se ha registrado un consumo en ese sitio.");
     mensaje6= ("El dia de la semana en que mas consumos de tabaco registra ocurre en "+(diaM)+". Decimos esto porque desde que usted ocupa la aplicacion, a generado un total de "+(dias2[0])+" casos de consumo ese dia.");
     mensaje7= ("Suponiendo que usted adquiera sus cigarrillos individualmente, estimamos un gasto de $"+(gastoCigarrillos)+" pesos mexicanos. En cambio, si usted adquiere sus cigarrillos en cajetillas de 20 unidades, estimamos un gasto de $"+(gastoCagetillas)+" pesos mexicanos aproximadamente desde que usted ocupa la aplicacion");
     
     
     res.render('fumaMenos/report',{title:'ESTADISTICAS',cantidad_cigarrillos,mensaje1,mensaje2, mensaje3, mensaje4, mensaje5, mensaje6, mensaje7})
        });
      
    }

    ,login: function(req, res){
        let session = true;
        console.log("si")
        console.log(req.session.loggin)
       
            res.render("fumaMenos/login")
        
    },
    
    comprobarUsuario:function(req,res){
        let usuarios=[];
        consumo.obtener_usuarios(con, req.body, function(err, datos){
            usuarios=datos;
            let inicio = req.body;
            let correo = inicio.correo;
            let contrasenia = inicio.contrasenia;
            let idUsuario;
            let bandera=false;
            let nombreU="";
            console.log(usuarios);

            for(let i = 0; i<usuarios.length && !bandera; i++){

                if(correo == usuarios[i].correo){

                    if(contrasenia == usuarios[i].contrasenia){
                        bandera=true;
                        console.log("contraseña correcta")
                        nombreU=usuarios[i].nombre;
                        idUsuario = usuarios[i].id;
                       
                       }
                }
            }
            if(bandera==true){
                   
                req.session.idUsuario = idUsuario;
                req.session.nombreUsuario=nombreU
                console.log(req.session.idUsuario);
                res.render('fumaMenos/homeMenu',{id: idUsuario});
            
            }
            else{
                res.render('fumaMenos/login');
            }
        })
      
            
    },menu: function(req, res){
      
        res.render('fumaMenos/homeMenu');
    },

    historial: function(req, res){
        console.log("ESTE ES EL IDDDD")
        console.log(req.session.idUsuario);
        consumo.obtener(con,req.session.idUsuario,function(err, datos){
         

            res.render('fumaMenos/record', { title: 'Aplicacion', consumos:datos });
        });

        
    },

    registro: function(req, res){
        
        req.session.loggin=true;
        console.log(req.session.loggin)
        res.render('fumaMenos/registro');
    },

    agregar: function(req, res){
        let datos= req.body;
        console.log(datos)




        if(datos.nombre==""||datos.correo==""||datos.contrasenia==""){
       
        }
       
       else{
           consumo.insertar_user(con, req.body, function(err){
               if (!err) {
                   console.log(err);
               }
              
           });   
       }
       res.render('fumaMenos/index', { title: 'Aplicacion',});
       
                   
           },

          /* iniciarSecion: function(req, res){
            consumo.obtener_usuarios(con, function(err, datos){
                let inicio = req.body;
                let correo = inicio.correo;
                let contrasenia = inicio.contrasenia;

                console.log(req.body);

                for(let i = 0; i<datos.lenght; i++){
                    
                    if(correo == datos[i].correo){
                        
                        if(contrasenia == datos[i].contrasenia)
                        
                        console.log("inicio correcto");
                        
                        else console.log("contraseña incorrecta");
                    }
                    
                    else console.log("no se encontro el correo")
                }
            })
        },*/

        
    }
