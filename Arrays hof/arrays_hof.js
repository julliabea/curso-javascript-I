const personagens = [
    { nivel: 42, nome: "Thrall", raca: "Orc", classe: "Xamã" },
    { nivel: 28, nome: "Garrosh", raca: "Orc", classe: "Guerreiro" },
    { nivel: 35, nome: "Varok", raca: "Orc", classe: "Guerreiro" },
    { nivel: 35, nome: "Uther", raca: "Humano", classe: "Paladino" },
    { nivel: 26, nome: "Jaina", raca: "Humano", classe: "Maga" },
    { nivel: 39, nome: "Tyrande", raca: "Elfo Noturno", classe: "Sacerdotisa" },
    { nivel: 29, nome: "Muradin", raca: "Anão", classe: "Guerreiro" },
  ]


// Map feito com for: 
// const nomes = []

// for(let i = 0; i < personagens.length; i++){
//     nomes.push(personagens[i].nome)
// }

// console.log(nomes)

//Map
const nomes = personagens.map(function(personagem){
    return personagem.nome
})

console.log(nomes)


// Filter feito com for:
// const orcs = []

// for (let i = 0; i < personagens.length; i++) {
//     if(personagens[i].raca === "Orc"){
//         orcs.push(personagens[i])
//     }  
// }

//console.log(orcs)

//Filter
const orcs = personagens.filter(function(personagem){
    return personagem.raca === "Orc"
})

console.log(orcs)

//Reduce

const nivelTotal = personagens.reduce(function(valorAcumulado, personagem){
    return valorAcumulado + personagem.nivel
}, 0)

console.log(nivelTotal)

const racas = personagens.reduce(function (acumulador, personagem) {
    if (acumulador[personagem.raca]) {
      acumulador[personagem.raca].push(personagem)
    } else {
      acumulador[personagem.raca] = [personagem]
    }
    return acumulador
  }, {})

console.log(racas)

//Sort
personagens.sort(function(a, b){
   return a.nivel - b.nivel
})

console.log(personagens)

//Sort criando e uma constante e não alterando o array original
const personagensOrdenados = personagens.slice().sort(function (a, b) {
    return a.nivel - b.nivel
})

console.log(personagensOrdenados)

console.log(Date())



