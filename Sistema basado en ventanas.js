// Punto 1: Definir la clase Size
function Size(width = 80, height = 60) {
  this.width = width;
  this.height = height;
}

Size.prototype.resize = function(newWidth, newHeight) {
  this.width = Math.max(1, newWidth); // Ancho mínimo de 1
  this.height = Math.max(1, newHeight); // Altura mínima de 1
};

// Punto 2: Definir la clase Position
function Position(x = 0, y = 0) {
  this.x = x;
  this.y = y;
}

Position.prototype.move = function(newX, newY) {
  // Mover la posición, limitando a los bordes de la pantalla
  this.x = Math.min(ProgramWindow.screenSize.width - ProgramWindow.size.width, Math.max(0, newX));
  this.y = Math.min(ProgramWindow.screenSize.height - ProgramWindow.size.height, Math.max(0, newY));
};
// Punto 3: Definir la clase ProgramWindow
function ProgramWindow() {
  this.screenSize = new Size(800, 600);
  this.size = new Size(); // Tamaño por defecto
  this.position = new Position(); // Posición por defecto
}

// Crear una instancia de ProgramWindow
let myWindow = new ProgramWindow();

// Prueba para ver si se impriemn los valores por default. Se borrará después.
console.log("Tamaño por defecto:", myWindow.size.width, myWindow.size.height); // 80 60
console.log("Posición por defecto:", myWindow.position.x, myWindow.position.y); // 0 0
