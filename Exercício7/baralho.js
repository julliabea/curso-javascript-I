let deck = []
let option = ""

do{
    option = prompt("Atualmente o baralho contém " + deck.length + " cartas.\n\n" +
                   "O que deseja fazer?\n\n" +
                   "1. Adicionar uma carta\n" +
                   "2. Puxar uma carta\n" +
                   "3. Sair")
    
    switch (option){
        case "1":
            let add = prompt("Digite a carta que deseja adicionar")
            deck.unshift(add)           
            break
        case "2":
            if(deck.length === 0){
                alert("Não há cartas no baralho")
            } else {
                let card = deck.shift()
                alert(card)}
            break
        case "3":
            break
        default:
            alert("Opção inválida")
    }
        
} while (option !== "3")