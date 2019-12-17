$(document).ready(function(){
    $('.header').height($(window).height());
})


$('a.embed').gdocsViewer();

$('#embedURL').gdocsViewer();
$('a.embed').gdocsViewer({ width: 400, height: 500 });