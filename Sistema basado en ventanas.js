// Punto 1: Definición de la clase Size
class Size {
  constructor(width = 80, height = 60) {
    this.width = width;
    this.height = height;
  }

  resize(newWidth, newHeight) {
    this.width = newWidth;
    this.height = newHeight;
  }
}

// Punto 2: Definición de la clase Position
class Position { 
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }

  move(newX, newY) {
    this.x = newX;
    this.y = newY;
  }
}


// Punto 3: Definición de la clase ProgramWindow
class ProgramWindow {
  constructor() {
    this.screenSize = new Size(800, 600);
    this.size = new Size(); // Usa los valores por defecto de Size
    this.position = new Position(); // Usa los valores por defecto de Position
  }
  
}

//punto4 practica javascrip

class tamano{
  constructor(ancho,alto){
      this.ancho=ancho; //guarda el ancho del objeto.
      this.alto=alto; //guarda el alto del objeto
  }
}

class vetana_programa{
  constructor(x,y){
      this.x=x; //posicion horizontal de la ventana.
      this.y=y; //posición vertical de la ventana.
  }

  redimensionar(tamano){
      const anchominimo=1;
      const anchomaximo=window.innerWidth - this.x;
      const altomaximo=window.innerHeight - this.y;

      let nuevoancho=tamano.ancho;
      let nuevoalto=tamano.alto;

      //limito el tamaño del nuevo ancho.
      if (nuevoancho < anchominimo){
          nuevoancho=anchominimo;
          this.x += tamano.ancho - anchominimo;
      }else if (nuevoancho > anchomaximo){
          nuevoancho=anchomaximo;
      }

      if (nuevoancho < anchominimo){
          nuevoalto=anchominimo;
          this.y +=tamano.alto - anchominimo;
      
      }else if (nuevoalto > altomaximo){
          nuevoalto = altomaximo;
      }

      console.log (`la ventana tiene un ancho de: ${nuevoancho} y un alto de: ${nuevoalto} ` );
  }
}

const ventana1=new vetana_programa(400,300);
//redimensiona la ventana 
ventana1.redimensionoar(new tamano (400, 300));
