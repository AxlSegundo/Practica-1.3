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

Position.prototype.move = function(newX, newY) {
  // Mover la posición, limitando a los bordes de la pantalla
  this.x = Math.min(ProgramWindow.screenSize.width - ProgramWindow.size.width, Math.max(0, newX));
  this.y = Math.min(ProgramWindow.screenSize.height - ProgramWindow.size.height, Math.max(0, newY));
};

// Punto 3: Definición de la clase ProgramWindow
class ProgramWindow {
  constructor() {
    this.screenSize = new Size(800, 600);
    this.size = new Size(); // Usa los valores por defecto de Size
    this.position = new Position(); // Usa los valores por defecto de Position
  }
  
}
