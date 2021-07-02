/*$('#contactForm').on('shown.bs.modal', function() {
  console.log("1")
  let a = $("#modal-form").height();
  console.log(a)
  $(".modal-content").height(a);
  $("iframe").height(a);
})
 */

$('#contactForm').on('shown.bs.modal', function() { 
  $(".modal-form").on("click", (function () { 
    console.log("°")
    $("#contactForm").hide();
    
  }))
});