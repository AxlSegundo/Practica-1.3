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

  move(newPosition) { //punto cinco
    // Ajustar la nueva posición dentro de los límites permitidos
    let maxX = this.screenSize.width - this.size.width;
    let maxY = this.screenSize.height - this.size.height;
    this.position.x = Math.max(0, Math.min(newPosition.x, maxX));
    this.position.y = Math.max(0, Math.min(newPosition.y, maxY));
  }
  
}
function changeWindow(window) { //punto seis
  // Cambiar el tamaño de la ventana
  window.resize(new Size(400, 300));
  // Mover la ventana a la nueva posición
  window.move(new Position(100, 150));

  return window;
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


const size = new Size(1080,764);
console.log(size.width, size.height);
size.resize(1920,1080);
console.log(size.width, size.height);
const point = new Position();
console.log(point.x,point.y);
point.move(100,200);
console.log(point.x,point.y);
const programWindow = new ProgramWindow();
console.log(programWindow.screenSize.width);
const newSize = new Size(600,400);
programWindow.resize(newSize);
console.log(programWindow.size.width);
console.log(programWindow.size.height);
const newPosition = new Position(50,100);
programWindow.move(newPosition);
console.log(programWindow.position.x,programWindow.position.y);
changeWindow(programWindow);
console.log(programWindow.size.width);
