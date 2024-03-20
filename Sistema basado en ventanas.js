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
// Punto 4: Creación de método para redimensionar
  resize(newSize) {
    // Comprobar y ajustar la nueva anchura y altura dentro de los límites permitidos
    let maxWidth = this.screenSize.width - this.position.x;
    let maxHeight = this.screenSize.height - this.position.y;
    this.size.width = Math.max(1, Math.min(newSize.width, maxWidth));
    this.size.height = Math.max(1, Math.min(newSize.height, maxHeight));
  }
// Punto 5: Creación de método para mover la ventana
  move(newPosition) { 
    // Ajustar la nueva posición dentro de los límites permitidos
    let maxX = this.screenSize.width - this.size.width;
    let maxY = this.screenSize.height - this.size.height;
    this.position.x = Math.max(0, Math.min(newPosition.x, maxX));
    this.position.y = Math.max(0, Math.min(newPosition.y, maxY));
  }
}



// Punto 6: Función para cambiar las propiedades de una ventana de programa
function changeWindow(window) { //punto seis
  // Cambiar el tamaño de la ventana
  window.resize(new Size(400, 300));
  // Mover la ventana a la nueva posición
  window.move(new Position(100, 150));

  return window;
}

// Creación y cambio de una ventana de programa
const size = new Size(1080,764);
console.log(size.width, size.height);
size.resize(1920,1080);
console.log(size.width, size.height);
console.log("");
const point = new Position();
console.log(point.x,point.y);
point.move(100,200);
console.log(point.x,point.y);
console.log("");
const programWindow = new ProgramWindow();
console.log(programWindow.screenSize.width);
console.log("");
const newSize = new Size(600,400);
programWindow.resize(newSize);
console.log(programWindow.size.width);
console.log(programWindow.size.height);
console.log("");
const newPosition = new Position(50,100);
programWindow.move(newPosition);
console.log(programWindow.position.x,programWindow.position.y);
changeWindow(programWindow);
console.log(programWindow.size.width);