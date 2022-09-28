class  tiquete{
    constructor(id, fechaEntrada, fechaSalida,numeroNinos,numeroAdultos,origen, vuelta){
      this.id = id;
      this.fechaEntrada = fechaEntrada;
      this.fechaSalida = fechaSalida;
      this.numeroNinos = numeroNinos;
      this.numeroAdultos = numeroAdultos;
      this.origen = origen;
      this.vuelta = vuelta;
    }
  }
  
  module.exports = tiquete;