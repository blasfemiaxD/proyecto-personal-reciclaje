function fechaActual() {
  var hoy = new Date();
  console.log(hoy);

  var dia = hoy.getDate();
  var mes = hoy.getMonth();
  var anno = hoy.getFullYear();

  var hora = hoy.getHours();
  var min = hoy.getMinutes();
  var seg = hoy.getSeconds();

  //var fecha =  hora+":"+min+":"+seg+" "+dia +"-"+mes+"-"+anno;
  var fecha = dia + "-" + mes + "-" + anno;

  console.log(fecha);
  console.log("hola que tal");

  //document.getElementById("fecha").innerHTML = fecha;
}

function fechaActual2() {
  const tiempoTranscurrido = Date.now();
  const hoy = new Date(tiempoTranscurrido);
  console.log(hoy);
  document.getElementById("fecha").innerHTML = hoy;
}

function mensajeBienbenida() {
  alert("bienvenido a la web del reciclaje");
}

function colorRandom() {
  console.log("Ingreso a funcion colorRandom");
  var numeroRamdon;
  var sRandon = "#";
  s = "0123456789ABCDEF";

  for (var i = 0; i < 6; i++) {
    //numeroRamdon = Math.floor(Math.random()*16);
    sRandon += s[Math.floor(Math.random() * 16)];
    //console.log(numeroRamdon);
    console.log(sRandon);
  }
  //document.getElementById("h1JumbotronIndex").innerHTML = sRandon;
  var h1Index = document.getElementById("h1JumbotronIndex");
  h1Index.style.color = sRandon;
}

