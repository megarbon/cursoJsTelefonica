// Obtener todos los elementos <p>
var elementosP = document.getElementsByTagName("p");

// Crear un array para almacenar el contenido de los elementos <p>
var contenidoP = [];

// Recorrer los elementos <p> y obtener su contenido
for (var i = 0; i < elementosP.length; i++) {
  contenidoP.push(elementosP[i].textContent);
}

// Mostrar el contenido de los elementos <p> en un alert
console.log(elementosP.length);
alert("Contenido de los elementos <p>:\n\n" + contenidoP.join("\n"));
