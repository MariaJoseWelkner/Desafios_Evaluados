const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
// alerta del mail
$( "#pop-up" ).click(function() {
    alert( "El correo fue enviado correctamente..." );
 });
//  "INGREDIENTES" y "PREPARACIÓN" a color rojo
 var listado_ingredientesdbl = $("#listado").first();
 listado_ingredientesdbl.dblclick(function(){
    listado_ingredientesdbl.toggleClass("dbl")
 })
 var preparacion_listadbl = $("#elaboracion").first();
 reparacion_listadbl.dblclick(function(){
    reparacion_listadbl.toggleClass("dbl")
 })
//  desaparecer y aparecer el contenido en todas las tarjetas "card" de la sección de Recetas Relacionadas
$( ".card-encabezado" ).click(function(){
    $(".card-descripcion").toggle(function() {
    });
})