let money = parseFloat(prompt("Quanto você tem de dinheiro inicialmente?"))
let option;

do {
    option = prompt("Atualmente você tem " + money + " reais. \n \n" +
        "Escolha entre as opções: \n" +
        "1. Adicionar dinheiro\n" +
        "2. Remover dinheiro\n" +
        "3. Encerrar")


    switch (option) {
        case "1":
            let add = parseFloat(prompt("Digite o valor que deseja adicionar"))
            money += add
            break
        case "2":
            let remove = parseFloat(prompt("Digite o valor que deseja adicionar"))
            money -= remove
            break
        case "3":
            alert("Encerrando...")
            break
        default:
            alert("Digite uma opção válida")
    }
} while (option !== "3")

