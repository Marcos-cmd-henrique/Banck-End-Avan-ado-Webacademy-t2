/* CHALLENGE 04: 
Desafio: Fazer esquema em que um código declara uma variável (let) e uma função faz a 
soma do valor da variável com um valor estático (5, por exemplo) como retorno. Outro 
código importa o primeiro e declara uma variável com o mesmo nome e outro valor. Em 
seguida, chama a função do primeiro código. Qual valor será exibido?
Utilizar o artigo disponível no endereço 
https://www.horadecodar.com.br/2020/08/13/como-incluir-um-arquivo-de-javascript-em-outro/

Footer
© 2022 GitHub, Inc.
Footer navigation
Terms
Privacy
Security
Status
Docs
Contact GitHub
Pricing
API
Training
Blog
About */


function somar(){
    let num1 = 10
    let num2 = 5 
    res = parseInt(num1) + parseInt(num2)
}

console.log(somar())
console.log(res)