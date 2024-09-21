/*
ATIVIDADE 1 - CONCATENAGEM SOMA 1 A MAIS 

let vinte = Number(prompt("Digite 20 e pressione Enter: "));
document.write(vinte +1);

ATIVIDADE 2- CONCATENAGEM COM NOMES

let nome = "Maria Eduarda";
let idade = 20;
console.log(nome ," tem ",idade," anos.");

let nome = "Geovana";
let idade = 21;
alert(nome+" tem "+idade+" anos.");

let anoAtual = 2024;
let nascimento = 1998;
let nome = "Wesley";
alert(`${nome} nasceu em ${nascimento}, Se estamos em ${anoAtual}, ele certamente tem ${anoAtual- nascimento} anos`)

ATIVIDADE 3- VERIFICA A MÉDIA DO ALUNO

var nota1 = parseInt(prompt("informe a primeira nota"));
var nota2 = parseInt(prompt("informe a segunda nota"));
var nota3 = parseInt(prompt("informe a terceira nota"));
var nota4 = parseInt(prompt("informe a quarta nota"));

media = (nota1 + nota2 + nota3 + nota4 )/4;


if(media >=6){
document.write("Você está aprovado. ");
}

else{
document.write("Você está reprovado. ");

}

ATIVIDADE 4- VERIFICA SE A LETRA DIGITADA É VOGAL OU CONSOANTE

var letra = prompt("Informe uma lera");

    if (letra == "a"||letra == "e"||letra =="i"||letra =="o"||letra =="u"||letra =="A"||letra =="E"||letra =="I"||letra =="O" ||letra =="U")
{document.write("vogal. ")}

    else{
        document.write("Consoante. ");

    }

ATIVIDADE 5- VERIFICA QUAL MAIOR NÚMERO

        var num1 = parseInt(prompt("informe a primeiro número"));
        var num2 = parseInt(prompt("informe a segundo número"));
        var num3 = parseInt(prompt("informe a terceiro número"));

        if(num1>num2 && num1>num3){
        document.write("num1")
        }
        else if(num2>num3){
        document.write("num2") }

        else{
        document.write("num3")
        }

ATIVIDADE 6-VERIFICA SE O NUMERO É PAR OU IMPAR

    var num = parseInt(prompt("Informe um numero: "))
    
    if(num%2 == 0){
        document.write("Par")
    }
    else{
        document.write("Impar")
    }
   
ATIVIDADE 7- VERIFICA SE UMA CONDIÇÃO É VERDADEIRA

Qual valor será impresso
let num =5;
if(num>10){
    console.log("Maior que 10");
}
else{
    console.log("Menor ou igual a 10");
}

ATIVADE 8- VERIFICA SE O NÚMERO É POSITIVO OU NEGATIVO 

var num = parseInt(prompt("Informe um numero: "))

if(num > 0){
    document.write("Positivo. ")
}

else if(num < 0){
    document.write("Negativo. ")
}

else{
    document.write("Neutro")
}


ATIVIDADE 9- CONDIÇÃO TERNÁRIA SEPARANDO IMPAR E PAR

var numero = parseInt(prompt("Informe um número"))
var resultado = numero%2 ==0 ? "Par" : "impar" // O PONTO DE INTERROGAÇÃO COMPARA DUAS CONDIÇÕES , A PRIMEIRA ESCRITA NAS "IF" E A SEGUNDA "ELSE"
    document.write(resultado)

ATIVIDADE 10- CONDIÇÃO TERNÁRIA SEPARANDO  POSITIVO,NEGATIVO OU NEUTRO

var numero = parseInt(prompt("Informe um numero: "));
numero > 0 ? console.log("Positivo") : numero < 0 ? console.log("Negativo") : console.log("Neutro");

ATIVIDADE 11- EXTRAIR AS INFORMAÇÕES DO TENÁRIO PASSANDO PRO IF E ELSE 

let age = parseInt(prompt("Informe sua idade: "))

if(age >=18){
    document.write("Maior de idade. ")
}

else{ document.write("Menor de idade. ")}

ATIVIDADE 12- COMPARAR X E Y  

var x = parseInt(prompt("Informe um numero de X: "));
var y = parseInt(prompt("Informe um numero de Y: "));

if(x > y){
    document.write("X é maior que Y")
}

else if(x < y){
    document.write("X é menor que Y")

}

else{
    document.write("X é igual Y")
}

ATIVIDADE 13- AUMENTO SALARIAL

var salario = parseInt(prompt("Informe seu salário: "))
var A = 1.15
var B = 1.125
var C = 1.1
if(salario <=500){
    document.write("Seu salário será de: "+salario*A+" R$")
}

    else if(salario <=1000 && salario >500){
    document.write("Seu salário será de: "+salario*B+" R$")
  
    }

    else{
        document.write("Seu salário será de: "+salario*C+" R$")  
    }

   TESTE DE INCREMENTAÇÃO 

   let a = 10;
   console.log = (a);
   console.log = (a--);
   console.log = (a--);
   console.log = (a--);
   console.log = (a--);
   console.log = (a--);
   console.log = (a--);
   console.log = (a--);
   console.log = (a--);
   console.log = (a--);
   console.log = (a--);

  // let b= 10;
   //console.log = (--b);
   //console.log = (b);

UTILIZANDO WHILE PARA CONTAR 10 A 1
  
cont = 10

while(cont<=10 && cont>=1){
console.log(cont);
cont --;


}

ATIVIDADE UTILIZAR WHILE PRA SOMAR DE 0 A 1000

let n = 1;
let soma = 0;

while(n<=100){
soma += n;
n++;


}

console.log("A soma dos números de 1 a 100 é: "+soma)

let num =1

while(num<=100000){
if(num %2 ==0){
console.log(num)
}
num++
}

ATIVIDADE 6 -RECIBO DE COMPRAS


//FUNÇÃO PRINCIPAL
function caixaDeMercado(){

let totalGeral = 0;
let numProdutos = parseInt(prompt("Quantos produtos você está comprando? "));
let recibo ="";

//ESTRUTURA DE REPETIÇÃO PARA CAPTURAR INFORMAÇÕES DE CADA PRODUTO 
for (let i =0; i < numProdutos; i++){
     let nomeProduto = prompt(`Informe o produto ${i+1}:`)
let quantidade = parseInt(prompt(`quantidade de ${nomeProduto}: `));
let valorUnitario = parseFloat(prompt(`valor unitário de ${nomeProduto}: `));

//CALCULAR O VALOR TOTAL DO PRODUTO

let valorTotalProduto = quantidade * valorUnitario;
totalGeral += valorTotalProduto;

//ADICIONA INFORMAÇÕES AO RECIBO

recibo += `${nomeProduto}: ${quantidade} x R$ ${valorUnitario.toFixed(2)} = R$ ${valorTotalProduto.toFixed(2)}\n`

}

recibo += `\nTotal geral: R$ ${totalGeral.toFixed(2)}` 
alert(recibo);

}

caixaDeMercado();

ATIVIDADE 7 TABUADA DE 1



function contar(){

for(var count =0; count  <=10; count++){
document.write(count+"<br />"+);
}
}

ATIVIDADE 8-  SOMAR DE 1 A 1000

let n = 1;
let soma = 0;

while(n<=1000){
soma += n;
n++;
}
console.log("A soma dos números de 1 a 1000 é: "+soma);

ATIVIDADE 9-UTILIZANDO FOR PARA CRIAR COLUNAS

 function exibir(){
for(var a=0, b=10;  a<=10 && b>=0; a++, b-- )
console.log(a+ "-" +b+"\n");

}

ATIVIDADE 10- ESCRITA EM JAVASCRIPT  DE H1 A H6


function exibir(){

    for(var x=1; x<=6 ;x++)
    document.write("<h"+x+">Oi, sou H"+x+"</h"+x+">");
}

exibir()


ATIVIDADE 11- CONTADOR 

let contador = 0;
for(let i=0; i<10;i++){
    if(i===3){
        continue;
    }

    if(i===7){
        break;
    }
    contador++
    console.log(`i: ${i}, contador: ${contador}`);
}
*/

