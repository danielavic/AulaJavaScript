function validar(){
    var nome = document.getElementById('nome');
    
   // alert(nome.value);

    if (nome.value == ""){
        alert("Campo usuário está em branco"); 
    }
    else {
        alert("Formulário enviado com sucesso.");
    }

}