//Variáveis
var a = 2; //int
var b = 3;
var c = "Olá mundo";//string

// Estruturas condicionais 

if(b%2==1){ 
    alert ("É ímpar")
} 
else {
    alert("É par")
}

// Problema: caso a variável seja uma string

if(c%2==1){
    alert("É impar");
}
else if(c%2==0){
    alert("É par");
}
else{
    alert("Não é número");
}

//while: enquanto
var i = 0 
while(i<3){
    alert(i);
    i = i + 1;
}
//for: para
// (inicialização; condição; incremento)

for(var j = 0; j<3;j++){ 
    alert(j);
}
