$('#contactForm').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
  })
$('#contactForm').modal('handleUpdate')