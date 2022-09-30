//SE TRAE LA TABLA DE REGISTRO Y SE EXPORTA PARA USAR EN OTRO LUGAR 
class  registro{
    constructor(username, correo, password){
      this.username = username;
      this.correo = correo;
      this.password = password;
    }
  }
  
  module.exports = registro