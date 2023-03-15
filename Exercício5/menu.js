
/* Escreva um programa em javascript que simule um menu interativo com 5 opções diferentes. 
O programa deverá iniciar mostrando as 5 opções disponíveis, as quatro primeiras não precisam de nenhuma funcionalidade específica, 
a última opção deve ser a opção “Encerrar”. Ao clicar em alguma das quatro primeiras opções uma mensagem deve ser exibida na tela 
indicando qual foi a opção escolhida e depois o programa deve exibir novamente o menu com as 5 opções. Isso deve continuar acontecendo 
até que o usuário escolha a opção “Encerrar”. Ao escolhe-la uma mensagem dizendo que o sistema está sendo encerrado deve ser exibida na 
tela e então o programa é finalizado.*/

let option;

do {
    option = prompt("Escolha uma opção \n" +
        "1. Opção um \n" +
        "2. Opção dois \n" +
        "3. Opção três \n" +
        "4. Opção quatro \n" +
        "5. Encerrar")

    switch (option) {
        case "1":
            alert("Você escolhe a opção 1")
            break
        case "2":
            alert("Você escolhe a opção 2")
            break
        case "3":
            alert("Você escolhe a opção 3")
            break
        case "4":
            alert("Você escolhe a opção 4")
            break
        case "5":
            alert("Encerrando...")
            break
        default:
            alert("Você digitou algo errado, tente novamente")
    }
} while (option !== "5")