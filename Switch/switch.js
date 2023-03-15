const num1 = parseInt(prompt("Primeiro número"));
const op = prompt('Operação " + " " - " " * " " / "');
const num2 = parseInt(prompt("Segundo número"));

switch (op) {
    case "+":
        alert(num1 + num2)
        break
    case "-":
        alert(num1 - num2)
        break
    case "*":
        alert(num1 * num2)
        break
    case "/":
        alert(num1 / num2)  
    default:
        alert("Você inseriu algum valor ou operação errada, tente novamente")  
}

