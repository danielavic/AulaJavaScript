// Método CSS: 2 parâmetros (o que deseja mudar, como deve ficar no final)

$(function(){
    $('#green').click(function(){
        $('h1').css("color", "green");
    });
    $('#purple').click(function(){
        $('h1').css("color", "purple");
    });
});