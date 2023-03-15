let queue = []
let option = "" 

do{
    let pacients = ""
    for(let i = 0; i < queue.length; i++){
        pacients += (i + 1) + "º - " + queue[i] + "\n"
    } 
    
    option =  prompt("Pacientes: \n\n" +
                        pacients + "\n" +
                        "Opções: \n\n" +
                        "a. Consultar paciente \n" +
                        "b. Adicionar paciente \n" +
                        "c. Sair")

    switch (option) {
        case "a":
            if(queue.length === 0){
                alert("Todos os pacientes foram atendidos")
            } else {
                alert("Consultando " + queue[0] + "...")
                queue.shift()
            } 
            break
        case "b":
            let add = prompt("Digite o nome do paciente:")
            queue.push(add)
            break
        case "c":
            break
        default:
            alert("Opção inválida")
    }

} while(option !== "c")
