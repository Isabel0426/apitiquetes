//SE TRAE LA TABLA DE REGISTRO Y SE EXPORTA PARA USAR EN OTRO LUGAR 
class  registro{
    constructor(username, correo, contraseña){
      this.username = username;
      this.correo = correo;
      this.contraseña = contraseña;
    }
  }
  
  module.exports = registro;