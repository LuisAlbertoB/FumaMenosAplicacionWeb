module.exports = {
    obtener:function(conexion,idUsuario, funcion){
        //conexion.query("SELECT * FROM consumos", funcion);
        conexion.query("SELECT id , date_format(date, '%W_%d/%M/%Y') as date,time_format(time,'%H:%i_%p') as time, n_Cigarette,place,emotion,company,note,usuario_id_usuario FROM consumos WHERE usuario_id_usuario=?",[idUsuario], funcion);
    },

    insertarConsumo: function (conexion, datos,idUsuario, funcionInsertar) {
        conexion.query(
            "INSERT INTO consumos(id,date,time,n_Cigarette,place,emotion,company,note,usuario_id_usuario) VALUES(?,?,?,?,?,?,?,?,?)",
          [null,datos.date,datos.time,datos.nCigarettes,datos.place,datos.emotion,datos.company,datos.note,idUsuario],
          funcionInsertar
        );
      },

      insertar_user:(function(conexion, datos, funcion){
        conexion.query("INSERT INTO `usuarios`(nombre,correo,contrasenia) VALUES(?,?,?)",[datos.nombre,datos.correo,datos.contrasenia],funcion)
      }),

     obtener_usuarios:function(conexion,datos,funcion){
       // conexion.query("SELECT * FROM usuarios WHERE correo=?",[datos.correo],funcion);
        conexion.query("SELECT * FROM usuarios", funcion);
      }

};