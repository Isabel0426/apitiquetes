class  tiquete{
    constructor( fechaEntrada, fechaSalida,numeroNinos,numeroAdultos,origen, vuelta,comprador){
      this.fechaEntrada = fechaEntrada;
      this.fechaSalida = fechaSalida;
      this.numeroNinos = numeroNinos;
      this.numeroAdultos = numeroAdultos;
      this.origen = origen;
      this.vuelta = vuelta;
      this.comprador=comprador;
    }
  }
  
  module.exports = tiquete;