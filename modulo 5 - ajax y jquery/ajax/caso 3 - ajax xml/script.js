document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evitar el comportamiento predeterminado del envío del formulario
  
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        var parser = new DOMParser();
        var xmlDoc = parser.parseFromString(xhr.responseText, "text/xml");
        var xmlField = document.getElementById("xmlField");
        xmlField.value = xmlDoc.documentElement.textContent;
      }
    };
    xhr.open("GET", "ejemploXML.xml", true);
    xhr.send();
  });
  