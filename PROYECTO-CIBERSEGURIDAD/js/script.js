$(document).ready(function () {
  // Validación simple del formulario
  $("#contactForm").submit(function (event) {
    event.preventDefault();
    let nombre = $("#nombre").val();
    let correo = $("#correo").val();
    let mensaje = $("#mensaje").val();

    if (nombre && correo && mensaje) {
      alert("Mensaje enviado correctamente.");
      $(this)[0].reset();
    } else {
      alert("Por favor, completa todos los campos.");
    }
  });
});

let puntaje = 0;

function respuesta(pregunta, correcta) {
  if (correcta) {
    puntaje++;
    alert("¡Correcto!");
  } else {
    alert("Incorrecto.");
  }

  // Ocultar pregunta actual
  $(`#pregunta${pregunta}`).hide();

  // Mostrar siguiente pregunta
  if (pregunta < 3) {
    $(`#pregunta${pregunta + 1}`).show();
  } else {
    $("#resultado").show();
    $("#mensajeResultado").text(`Tu puntaje es: ${puntaje} de 3.`);
    puntaje = 0; // Reiniciar puntaje para una próxima vez
  }
}
