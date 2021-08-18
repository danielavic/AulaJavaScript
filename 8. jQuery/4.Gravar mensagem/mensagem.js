// Exibir mensagem por jQuery
/*$(function(){
    $('#purple').click(function(){
        $('h1').css("color", "purple");
        $('h1').css('text-decoration', 'underline')
        $('h1').css('background-color','#c8a2c8')
        $('#msg').text("Mensagem ficou roxa");
        $('#msg').fadeOut(4000);
    });
});*/

// Encadeamento em blocos: 
/*$(function(){
    $('#purple').click(function(){
        $('h1')
        .css("color", "purple")
        .css('text-decoration', 'underline')
        .css('background-color', '#c8a2c8')
        $('#msg')
        .text("Mensagem ficou roxa")
        .fadeOut(4000);
    });
}); */

//Método CSS: declaração múltipla
$(function(){
    $('#purple').click(function(){
        $('h1')
        .css({color:"purple", textDecoration:"underline", backgroundColor: "#c8a2c8"})
        $('#msg')
            .text("Mensagem ficou roxa")
            .fadeOut(4000);
    });
});














// 1:19:32