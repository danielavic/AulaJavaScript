// Adicionar e remover classes em um elemento html


$(function(){
    $('#purple').click(function(){
        $('h1')
        .css({color:"purple", textDecoration:"underline"})
        .addClass('coral')
        // Já tem um backgroungColor aplicado diretamente ao estilo e têm prioridade
        $('button').removeClass('purple')
    });
})