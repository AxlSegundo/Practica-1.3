// Punto 1: Definir la clase Size
function Size(width = 80, height = 60) {
  this.width = width;
  this.height = height;
}

Size.prototype.resize = function(newWidth, newHeight) {
  this.width = Math.max(1, newWidth); // Ancho mínimo de 1
  this.height = Math.max(1, newHeight); // Altura mínima de 1
};
