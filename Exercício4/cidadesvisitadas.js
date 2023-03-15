const turista = prompt("E aí, turista? Qual é o seu nome?")
let cidades = ""
let contagem = 0;

let continuar = prompt("Você ja visitou alguma cidade? (Sim/Não)")

while(continuar.toLowerCase() === "sim"){
    let cidade = prompt("Qual cidade?")
    cidades += " - " + cidade + "\n"
    contagem ++
    continuar = prompt("Alguma outra cidade? (Sim/Não)")
}

alert("Legal, " + turista + "!" +
      "\nVocê visitou " + contagem + " cidades!" +
      "\nSão elas:\n" + cidades)