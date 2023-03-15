const name = prompt("Qual seu nome?")
const citys = [];
let proceed = false;

let firstQuestion = prompt("Você ja visitou alguma cidade?");

if(firstQuestion.toLowerCase() === "sim"){
    proceed = true
} else if (firstQuestion.toLowerCase() === "não" || firstQuestion.toLowerCase() === "nao"){
    alert(`Ok, ${name}.
Você não visitou nenhuma cidade`)
} else {
    alert("Digite sim ou não")
    firstQuestion;
}

while (proceed === true){
    const city = prompt("Qual cidade?")
    citys.push(city)

    let other = prompt("Alguma outra cidade?")
    
    if (other.toLowerCase() != "sim" && 
        other.toLowerCase() != "nao" && 
        other.toLowerCase != "não"){
            alert("Digite sim ou não");
            other;
    } else if (other === "não" || other === "nao"){
        proceed = false;
        alert(`Uau, ${name},
Você ja visitou ${citys}`)
    }
}

