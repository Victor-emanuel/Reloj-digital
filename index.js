  function actualizarHora() {
      var hoy = new Date();
      var hora = hoy.getHours();
      var minutos = hoy.getMinutes();
      var segundos = hoy.getSeconds();
      document.getElementById("reloj").innerHTML = hora + " : " + minutos + " : " + segundos;
      var time = setTimeout(function() { actualizarHora() }, 1000);
  }

  //1 creo una funcion llamada ActualizarHora.
  //2 el objeto date me permite trabajar con las fechas y horas.
  //3 El método getHours() retorna la hora de la fecha especificada, de acuerdo a la hora local.
  //4 El método getMinutes() retorna los minutos de la fecha especificada, de acuerdo a la hora local.
  //5 El método getSeconds() retorna los segundos de la fecha especificada, de acuerdo a la hora local.
  //6 El método getElementById permite, como su nombre indica, seleccionar un elemento del documento por medio del valor del atributo id que se le haya asignado.
  //7 El método setTimeout () llama a una función o evalúa una expresión después de un número específico de milisegundos.

  //8 En el HTML se debe poner el evento onload encerrado entre las etiquetas body con la funcion ActualizarHora para que cuando se termina de cargar la página funcione el reloj.

  /*9 sintaxis simple hecha en el body del html para armar el reloj..  
  
    <div class="contenedor">
        <div id="reloj">
        </div>
    </div> 
    */

  /*10 sintaxis del CSS.. 
    
    html {
    padding: 40px;
    text-align: center;
    background-color: snow;
}

#reloj {
    font-size: 60px;
    color: rgb(223, 135, 135);
} 
*/