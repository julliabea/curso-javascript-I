let tabuada = parseInt(prompt("Qual tabuada deseja saber?"))
let tabuadaCompleta = ""

for(let i = 1; i <= 20; i++){
    tabuadaCompleta += tabuada + " * " + i + " = " + (tabuada * i) + "\n"
}

alert("O resultado da tabuade de " + tabuada + " é:\n\n" + tabuadaCompleta)