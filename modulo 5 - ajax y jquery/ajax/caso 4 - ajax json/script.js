document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evitar el comportamiento predeterminado del envío del formulario
    
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        var response = JSON.parse(xhr.responseText);
        var jsonField = document.getElementById("jsonField");
        jsonField.value = response.name + ", " + response.country;
      }
    };
    xhr.open("GET", "ejemploJSON.json", true);
    xhr.send();
  });
  