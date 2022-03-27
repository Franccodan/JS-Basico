/* 
string 
number 
boolean 
array
object
undefined
null

*/

let nome = 'Daniel' //string 
console.log(nome)

let sobrenome = 'Franco'
// console.log(nome + ' ' + sobrenome)

//string literal
console.log(`${nome} ${sobrenome}`)

//number
let idade = 23
console.log(idade + 10 )


//number - float
let porcentagem = 10.5
console.log(porcentagem + '%')

//boolean (true ou false)
let maiordeIdade = true
console.log(maiordeIdade)

let menordeIdade = false 
console.log(menordeIdade)


//array
let habilidades = ['JavaScript', 'PHP', 'Python']
console.log(habilidades) 
console.log(habilidades.length) 
console.log(habilidades[2]) 


//object
let pessoa = {
    nome: 'Daniel',
    sobrenome: 'Franco',
    idade: 23,
    habilidades: ['c++', 'c#', 'python']
}
console.log(pessoa.sobrenome)

// JSON (JavaScript Object Notation)

//undefined
let endereco = undefined
console.log(undefined)

//null 
let cidade = null
console.log(null)