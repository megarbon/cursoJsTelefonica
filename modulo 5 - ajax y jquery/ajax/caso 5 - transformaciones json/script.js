// Objeto JSON con objeto y array de objetos
var jsonData = {
    "propiedad1": "valor1",
    "propiedad2": {
      "subpropiedad1": "subvalor1",
      "subpropiedad2": "subvalor2"
    },
    "propiedad3": [
      { "nombre": "Objeto1", "edad": 25 },
      { "nombre": "Objeto2", "edad": 30 },
      { "nombre": "Objeto3", "edad": 35 }
    ]
  };
  
  // Convertir a cadena JSON
  var jsonString = JSON.stringify(jsonData);
  console.log("Cadena JSON:", jsonString);
  
  // Convertir la cadena JSON a objeto
  var jsonObj = JSON.parse(jsonString);
  console.log("Objeto resultante:", jsonObj);
  