function main() {
  console.log("En main()....")

  //-- Acceso al objeto con la imagen
  var img = document.getElementById('imagesrc')

  //-- Acceso al objeto con el canvas
  var canvas = document.getElementById('display');

  //-- Acceso al deslizador
  deslizador = document.getElementById('deslizador')
  deslizadorV = document.getElementById('deslizador2')
  deslizadorA = document.getElementById('deslizador3')

  //-- Valor del deslizador
  range_value = document.getElementById('ver')
  verde = document.getElementById('ver2')
  azul = document.getElementById('ver3')

  //-- Se establece como tamaño del canvas el mismo
  //-- que el de la imagen original
  canvas.width = img.width;
  canvas.height = img.height;

  //-- Obtener el contexto del canvas para
  //-- trabajar con el
  var ctx = canvas.getContext("2d");

  //-- Situar la imagen original en el canvas
  //-- No se han hecho manipulaciones todavia
  ctx.drawImage(img, 0,0);
  function act() {
    ctx.drawImage(img, 0,0);

    //-- Obtener la imagen del canvas en pixeles
    var imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);

    //-- Obtener el array con todos los píxeles
    var data = imgData.data
  }
  //-- Funcion de retrollamada del deslizador
  deslizador.oninput = () => {
    //-- Mostrar el nuevo valor del deslizador
    range_value.innerHTML = deslizador.value
    verde.innerHTML = deslizadorV.value
    azul.innerHTML = deslizadorA.value

    act()
    //-- Obtener el umbral de rojo del desliador
    umbral = deslizador.value
    umbralV = deslizador.value
    umbralA = deslizador.value

    //-- Filtrar la imagen según el nuevo umbral
    for (var i = 0; i < data.length; i+=4) {
      if ((data[i] > umbral) || (data[i+1] > umbralV) || (data[i+2] > umbralA)){
        data[i] = umbral;
        data[i + 1] = umbralV;
        data[i + 2] = umbralA;
      }
    }

    //-- Poner la imagen modificada en el canvas
    ctx.putImageData(imgData, 0, 0);
  }
  deslizadorV.oninput = () => {
    //-- Mostrar el nuevo valor del deslizador
    range_value.innerHTML = deslizador.value
    verde.innerHTML = deslizadorV.value
    azul.innerHTML = deslizadorA.value

    act()
    //-- Obtener el umbral de rojo del desliador
    umbral = deslizador.value
    umbralV = deslizador.value
    umbralA = deslizador.value

    //-- Filtrar la imagen según el nuevo umbral
    for (var i = 0; i < data.length; i+=4) {
      if ((data[i] > umbral) || (data[i+1] > umbralV) || (data[i+2] > umbralA)){
        data[i] = umbral;
        data[i + 1] = umbralV;
        data[i + 2] = umbralA;
      }
    }

    //-- Poner la imagen modificada en el canvas
    ctx.putImageData(imgData, 0, 0);
  }
  console.log(umbral);
  deslizadorA.oninput = () => {
    //-- Mostrar el nuevo valor del deslizador
    range_value.innerHTML = deslizador.value
    verde.innerHTML = deslizadorV.value
    azul.innerHTML = deslizadorA.value

    act()
    //-- Obtener el umbral de rojo del desliador
    umbral = deslizador.value
    umbralV = deslizador.value
    umbralA = deslizador.value

    //-- Filtrar la imagen según el nuevo umbral
    for (var i = 0; i < data.length; i+=4) {
      if ((data[i] > umbral) || (data[i+1] > umbralV) || (data[i+2] > umbralA)){
        data[i] = umbral;
        data[i + 1] = umbralV;
        data[i + 2] = umbralA;
      }
    }

    //-- Poner la imagen modificada en el canvas
    ctx.putImageData(imgData, 0, 0);
  }
}
