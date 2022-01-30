//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript
//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide


/*---VARIÁVEIS---*/

//VARIÁVES SÃO DECLARADAS APENAS 1 VEZ NO CÓDIGO, APÓS A DECLARAÇÃO SOMENTE "CHAMAMOS" ELAS
var - É o tipo mais usado para declaração de variáveis
const - Declaração de variáveis contantes, sempre temos que passar uam valor quando declaramos uma CONST
let - É uma variável de escopo, quando declarada dentro de um bloco(condicional por exemplo), não funciona

Tipos de Variáveis
"number"
"string"
"boolean"
"object"
"function"

/*------*/



/*---CONCATENAÇÕES---*/

É possível concatenar(juntar) tipos diferentes e o JavaScript se encarregará de realizar a conversão entre os tipos, podendo resultar em algo não esperado.
var s1 = "concatenar";
var s2 = "assim";
console.log(s1 + s2); imprime CaelumInovação

Nova forma de concatenar é a template String

    `Nova forma de ${s1} é  ${s2} `

var num1 = 2;
var num2 = 3;
var nome = "Caelum" // O que ele imprimirá?
Exemplo 1:
console.log(num1 + nome + num2); // imprime 2Caelum3
Exemplo 2:
console.log(num1 + num2 + nome); // imprime 5Caelum
Exemplo 3:
console.log(nome + num1 + num2); // imprime Caelum23
Exemplo 4:
console.log(nome + (num1 + num2)); // imprime Caelum5
Exemplo 5:
console.log(nome + num1 * num2); // imprime Caelum6

Manipulação do números

O exemplo abaixo altera o número de casas decimais com a função toFixed
var milNumber = 1000;
var milString = milNumber.toFixed(2); recebe o retorno da função
console.log(milString); imprime a string "1000.00"

/*------*/


/*--MANIPULANDO STRINGS e NUMBERS--*/

var empresa = "Caelum";
empresa.length; // tamanho da string
empresa.toUpperCase() //Altera para maiúsculas
empresa.toLocaleLowerCase() //Altera para minúsculas
empresa.replace("lum", "tano"); // Altera um valor por outro retorna Caetano

var numero = 1543.5
numero.toFixed(2) //acrescenta e casas decimais após o ponto retorna 1543.50
numero.toFixed(2).replace('.', ','); // retorna 1543,50
numero.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }); //Retona R$ 1,543.50
numero.toLocaleString('pt-BR', { style: 'currency', currency: 'USD' }); //Retona $ 1,543.50
numero.toLocaleString('pt-BR', { style: 'currency', currency: 'EUR' }); //Retona € 1,543.50

//Imutabilidade
var empresa = "Caelum";
empresa.replace("lum", "tano"); // substitui a parte "lum" por "tano"
console.log(empresa) //Imprime Caelum, nada mudou!
empresa = empresa.replace("lum", "tano");
console.log(empresa); // imprime Caetano, mudou!

/*------*/


/*---OPERADORES---*/

https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators

Operadores Aritméticos
    (+) - Soma
        (-) - Subtração
        (*) - Multiplicação
        (/) - Divisão
            (%) - Resto da divisão inteira
                (**) - Potência

Precedencia dos operadores aritméticos
1 - ()
2 - **
            3 - * ou / ou %
            4 - + ou -

            Forma resumida de operação
var n = 3
n += 4 é o mesmo que n = n + 4
n -= 5 é o mesmo que n = n - 5
n *= 4 é o mesmo que n = n * 4
n /= 2 é o mesmo que n = n / 2
n **= 2 é o mesmo que n = n ** 2
n %= 5 é o mesmo que n = n % 5

Imcrementos
var n = 3
n++ (incrementa 1 a n, ou seja n vale 4)
n-- (decrementa 1 a n, ou seja n vale 2)


Operadores Relacionais
    (>) - Maior
        (<) - Menor
        (>=) - Maior ou igual
            (<=) - Menor ou igual
                (==) - Igual(não texta o tipo da variável)
                    (===) - idêntico(texta também o tipo de variável)
                    (!=) - Diferente(não texta o tipo da variável)
                    (!=) - Desigual(texta também o tipo de variável)


Operadores Lógicos
    (!) - negação ou NÃO
        (&&) - Conjuncão ou E
            (||) - Dijunção ou OU

Precedencia de execução dos operadores lógicos
1 - (!)
2 - (&&)
3 - (||)

Precedencia de TODOS os operadores
1 - Aritméticos
2 - Relacionais
3 - Lógicos


Operadores Ternários
    (?)
    (: )

Sintaxe - teste lógico ? retorna se verdadeiro: retorna se falso
Exemplos
var media = 5
media > 7 ? 'APROVADO' : 'REPROVADO'(retorna reprocado pq 5 não é maior que 7)

var idade = 19
var result = idade > 18 ? 'MAIOR' : 'MENOR'(A variável result recebe a valor maior, pq o resultado do teste é verdadeiro)

/*------*/


/*---CONVERSÕES---*/

//O JavaScript possui funções de conversão de string para number
var textoInteiro = "10";
var inteiro = parseInt(textoInteiro); // Varivável inteiro recebe valor de textoInteiro convertido em número inteiro
var textoFloat = "10.22";
var float = parseFloat(textoFloat); // Varivável float recebe valor de textoFloat convertido em número real
var num = 50.5;
var numNovo = Number(numNovo);
var word1 = 29:
var newWord2 = word1.toString(); //Conversão de número para string primeira forma
var word2 = 22:
var newWord2 = String(word); //Conversão de número para string segunda forma

/*------*/



/*---TRABALANDO COM O DOM---*/

1 - NO VSCode apertar CRT + SHIT + P e digitar "Open with live server"
2 - O Chrome vai abrir e conseguiremos programar vendo o que acontece no browser em tempo real

Arvore DOM
/*
                          window
                         /   |   \
                        /    |    \
                       /     |     \
                      /      |      \
                location  document  hitory
                             |
                             |
                            html
                            /   \
                           /     \
                          /       \
                         /         \
                       head         body
                      /  \      / / | \  \
                    meta title / /  |  \  \
                              / /   |   \  \
                              h1 p  div  a  ul
                                /\
                               /  \
                           strong  spam
*/
                        
Os elementos inferiores são "child" dos elementos superiores 
Os elementos superiores são "parent" das estruturas inferiores

alert() - é utilizado para exibirmos o valor do que é passado como parâmetro fora do console
document.write('Alguma coisa') - Insere o que está sendo passado como parâmetro no corpo do documento
document.write(variavel.innerText) - innerText retorna o texto da variável de forma "crua", sem formatação
document.write(variavel.innerHtml) - innerHtml retorna o texto da variável com as formatações

/*------*/



/*---SELETORES---*/

1 - Por marca:
document.getElementsByTagName()[]  //Seleciona um determinado elemento através do seu nome
document.getElementsByTagName('p')[0] //Seleciona o primeiro parágrafo do documento
document.getElementsByTagName('p')[1] //Seleciona o segundo parágrafo do documento

2 - Por id:
document.getElementById('meu-item-id')

3 - Por nome:
document.getElementsByName()[]

4 - Por nome_de_classe:
document.getElementsByClassName('.todos-itens-class')[]

5 - Por seletor: //Opção mais usada atualmente
document.querySelector("tag") //Seleciona a tag passada como parâmetro
document.querySelector("#id") //Seleciona o id passado como parâmetro
document.querySelector(".class") //Seleciona a classe passado como parâmetro

document.querySelectorAll("tag") //Seleciona todas tags as passadas como parâmetro
document.querySelectorAll(".class") //Seleciona todas os ids passadas como parâmetro
document.querySelectorAll("#id") //Seleciona todas as classes passadas como parâmetro

document.querySelectorAll(".cartao")[0]//Acessa aos elementos numa lista através da posição dele (começando em zero) e usando o colchetes

/*------*/

/*--EVENTOS--*/

//https://developer.mozilla.org/pt-BR/docs/Web/Events
//Tudo o que pode acontecer com qualquer elementos (TAG) Ex: Eventos de mouse

mouseenter() //Evento acionado quando o mouse entra em um campo
mouseout()  //Evento acionado quando o mouse sai de um campo
mousemove() //Evento acionado quando o mouse se movimenta em um campo, por exemplo uma div
mousedown() //Evento acionado quando se aperta o mouse dentro de um campo
mouseup()   //Evento acionado quando se solta o mouse dentro de um campo
click()     //Evento acionado quando se clica o mouse dentro de um campo
dlbclick()  //Evento acionado quando se clica 2 vezes o mouse dentro de um campo
mouseleave() //Evento acionado está TOTALMENTE FORA de um campo
mouseover()
pointerlockchange()
pointlockerror()
select()

/*------*/


/*--FUNÇÕES--*/

//FUnção é um conjunto de códigos que vão ser executadas SÓ QUANDO O EVENTO OCORRER, elas são executadas assim que as CHAMADAS ou com a decorrência de um EVENTO
//Uma função pode receber PARÂMETROS e retornar um RESULTADO

//Sintaxe1
function nomeAção() {
    BLOCO
}
//Sintaxe2
function nomeAção(parâmetros) {
    BLOCO
}

//Nome da função   //Parâmetros  //Tarefas e retorno
function nomeFunção(arg1, arg2) { return arg1 + arg2 }

// Para chamar a função mostraAlerta só precisamos utilizar o nome da função e logo depois abrir e fechar parênteses.
nomeFunção()

/*------*/


/*--MÉTODOS--*/

//Fazem a conexão entre o JS o HTML, o método precede a funcão e os eventos 

1 - addEventListener() //O método addEventListener espere algum evento para ser executado
variavel.addEventListener('método/evento', nomeFunção);

2 - createElement() //cria uma tag/elemento no doc HTML
var variável = document.createElement('Nometag')

3 - setAttribute() //Insere um atributo a variável criada
variavel.setAttribute('atributo', 'nomeAtributo') //Seto o atributo id com o nome foto

Ex:
variavel.setAttribute('id', 'foto') //Seto o atributo id com o nome foto

4 - appendChild() //Adiciona um elemento criado ao final do documento
variavel.appendChild(elemento)
Ex:
res.appendChild(img) //Insero imagem no documento

//Exemplo
var a = document.getElementById('area')
a.addEventListener('click', clicar)
function clicar() {
    a.innerText = "Clicou!"
    a.style.backgroundColor = "red"
}

variavel.test() //a expressão .test é um método do JS que testa algo, neste caso o que digitamos no email
variavel.addEventListener('click', function ()){ } //faz com que a variável espere algum evento, de mouse por exemplo, ser executado
variavel.insertAdjacentHTML(position, text);

/*------*/

/*--CONDICIONAIS--*/

1 - IF //Condição simples
if (condição) {
    //executa bloco de código se a condição for verdadeira
}

2 - IF ELSE //Condição composta
if (condição) {
    //executa bloco de código se a condição for verdadeira
} else {
    //executa bloco de código se a condição for falsa
}

3 - IF ELSE IF e ELSE//Condição aninhadas (uma condição dentro da outra)
if (condição1) {
    //executa bloco de código se a condição for verdadeira
} else if (condição2) {
    //executa bloco de código se a condição1 for falsa e a condição2 for verdadeira
} else {
    //executa bloco de código se a ambas as condições forem falsas
}

4 - SWITCH//Condição múltipla (urilizada somente para valores numéricos e strings específias (pontuais), não há possibilidade de utiliza com intervalo)
switch (expressão) {
    case valor1:
        bloco 1
        break
    case valor2:
        bloco 2
        break
    case valor3:
        bloco 3
        break
    case valor4:
        bloco 4
        break
    default:
        bloco 5
        break
}

/*------*/


/*--REPETIÇÕES--*/

1 - WHILE - Estrutura de repitição com teste lógico no início

while (condiçãoVerdadeira) {
    BLOCO
}

Exemplo:
var n = 1;
while (n < 6) {
    BLOCO
    n++;
}

2 - DO WHILE - Estrutura de repitição com teste lógico no final

do {
    BLOCO
} while (condiçãoVerdadeira)

Exemplo:
var n = 1
do {
    console.log(`Passo ${n}`)
    n++
} while (n <= 6)

3 - FOR - Estrutura de repetição com variável de controle

for (inicio; teste; incremento) {
    BLOCO
}

Exemplo:
for (var i = 1; i <= 10; i++) {
    console.log(`Passo ${i}`)
}


/*--VARIÁVEIS COMPOSTAS--*/
//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array

ARRAY - Composta de um vetor, elementos, índice(chaves) e o conteúdo

//Sintaxe
var num = [3, 5, 8]

for (variáveisControle in vetor) {
    BLOCO
}

variavel.push(7) //Insere elemento no array
variavel.num.sort() //Ordena elementos no array
variavel.length //Retorna qtd de elementos do array
variavel.indexOf(3) //Procura o número 3 no array e retorna posiçáo dele 
//OBS: quando o JS não encontra o elemento ele retorna -1

/*------*/



/*--OBJETOS--*/
//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object

Um objeto é semelhante a um ARRAY, contudo aceita um conjunto de caracteres para cada item, no objeto podemos colocar nomes nos índices 
e mais importante, eles podem guardar funções

//Sintaxe
var objeto = { índice: 'number', índice: 'string', índice: 'boolean', nomeFunção(p) { } }

Exemplo:
var amigo = { nome: 'José', sexo: 'Masculino', Peso: '85.4', engorgar(p) { } }

/*------*/


/*--MAP--*/ 

Utilizado para mapear somente arrays e objetos

//Para acessar objetos temos que passar o método Object
Object.keys(objeto).map(function (nome_qualquer))//Acessa as chaves do objeto
Object.values(objeto).map(function (nome_qualquer)) //Acessa os valores do objeto
Object.entries(objeto).map(function (nome_qualquer)) //Acessa as chaves e os valores do objeto
//EXEMPLO
Object.entries(usuario).map(function (user) {
    var userData = user.join(': ')
    myList.push('<li>' + userData + '</li>');
});

/*------*/


/*--PROPRIEDADES--*/

1 - classList //Criar ou acessa classes CSS

    //Sintaxe
    .classList.add('nome_classe') //Adiciona classes CSS ao código JS

2 - parentElement //Verifica a largura do elemento passado como parâmetro

Exemplo:

var var_2 = var_1.parentElement.offsetWidth; //A propriedade parentElement aciona a classe hierarquicamente superior ao da variável (var_1)









//TEXTCONTENT
{
    titulo.textContent
    titulo.textContent = "Novo título"
}










//Bibliotacas de animação
//https://animejs.com/

//Bibliotacas de paralax
//https://cdnjs.com/libraries/rellax
//https://dixonandmoe.com/rellax/









