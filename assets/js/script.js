//asegurar carga de documento//
$(document).ready(function(){
  //Smooth scroll/
  $("#navbar a").on("click", (function (evento) { 
    evento.preventDefault();
    let elemento = $(this).attr("href");
  console.log(elemento);
  $('html, body').animate({scrollTop: $(elemento).offset().top}, 1500);
  }));
//------//
//Tootltips//
  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })
//------//
//modals//
  $('#btn-modal-myc').click(function(){
    $('#modal-myc').modal('show')
  })
  $('#btn-modal-iguana').click(function(){
    $('#modal-iguana').modal('show')
  })
  $('#btn-modal-suricata').click(function(){
    $('#modal-suricata').modal('show')
  })
  $('#btn-modal-cuppon').click(function(){
    $('#modal-cuppon').modal('show')
  })
  $('#btn-modal-ricomida').click(function(){
    $('#modal-ricomida').modal('show')
  })
  $('#btn-modal-evaluacion').click(function(){
    $('#modal-evaluacion').modal('show')
  })
//-----//
});
//Fin del Script//