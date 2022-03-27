let nomeAluno = prompt('Digite o seu nome')
let inputNota1 = prompt('Digite a primeira nota')
let inputNota2 = prompt('Digite a segunda nota')


let nota1 = parseInt(inputNota1)
let nota2 = parseInt(inputNota2)

let mediaMinima = 7

let media = (nota1 + nota2) / 2
console.log(media)

if (media >= mediaMinima) {
    alert(`Olá ${nomeAluno}, sua media final é ${media}, parabéns você está aprovado!!`)
} 

else if (media >= 6) {
    document.write('Olá' + ' ' + nomeAluno + ',' + ' ' +  'sua média final foi' + ' ' + media + ' ' + 'necessário realizar AF')
}

else {
    document.write('Lamentamos' + ' ' + nomeAluno + ',' + ' ' + 'mas você está reprovado')
}

