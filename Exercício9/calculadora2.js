let option = ""

function areaRetangulo(num1, num2){
    return num1 * num2
}

do{

    let num1;
    let num2;
   
    option = prompt("Calculadora Geométrica\n\n" +
                    "Qual cálculo deseja fazer?\n\n" +
                    "1. Área do triângulo\n" +
                    "2. Área do retângulo\n" +
                    "3. Área do quadrado\n" +
                    "4. Área do trapézio\n" +
                    "5. Área do círculo\n\n" +
                    "6. Sair")

    switch (option) {
        case "1":
            num1 = prompt("Digite o valor da base")
            num2 = prompt("Digite o valor da altura")
            alert("A área do triângulo é: " + (areaRetangulo(num1, num2)) / 2)
            break
        case "2":
            num1 = prompt("Digite o valor da base")
            num2 = prompt("Digite o valor da altura")
            alert("A área do retângulo é: " + areaRetangulo(num1, num2))
            break
        case "3":
            num1 = prompt("Digite o tamanho do lado do quadrado")
            alert("A área do quadrado é: " + areaRetangulo(num1, num1))
            break
        case "4":    
            let add;
            num1 = prompt("Digite o valor da base maior")
            num2 = prompt("Digite o valor da base menor")
            add = parseFloat(num1) + parseFloat(num2)
            num1 = prompt("Digite o valor da altura")
            alert("A área do trapézio é: " + (areaRetangulo(add, num1)) / 2)
            break
        case "5":
            num1 = prompt("Digite o valor do raio")
            alert("A área do círculo é: " + 3.14 * (areaRetangulo(num1, num1)))
            break
        default:
            alert("Opção inválida")
    }

} while(option !== "6")
