
  var hoy = new Date();
  console.log(hoy);
  
  var dia = hoy.getDate();
  var mes = hoy.getMonth();
  var anno =  hoy.getFullYear();

  var hora = hoy.getHours();
  var min = hoy.getMinutes();
  var seg = hoy.getSeconds();

  //var fecha =  hora+":"+min+":"+seg+" "+dia +"-"+mes+"-"+anno;
  var fecha =  dia +"-"+mes+"-"+anno;

  console.log(fecha);
  console.log("hola que tal");

  //document.getElementById("fecha").innerHTML = fecha;

  function mensajeBienbenida(){
      alert("bienvenido a la web del reciclaje");
  }




