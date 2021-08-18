// Método fadeIn/fadeOut: método que esconde de forma mais suave do que o hide()
// argumento 'slow'faz com que a transição seja mais suave
// também pode usar um tempo em microsegundos como argumento
//Método delay: pausa a execução do JavaScript por determinado período de tempo em microsegundos.


$(function(){
    $('#green').click(function(){
        $('h1').css("color", "green");
        $('h1').fadeOut();
        $('h1').delay(2000);
        $('h1').fadeIn();
    });
    $('#purple').click(function(){
        $('h1').css("color", "purple");
        $('h1').hide()
        //$('h1').delay(2000);
        //$('h1').fadeIn('slow');
    });
});