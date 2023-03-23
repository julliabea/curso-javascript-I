let vagas = [{
    nome: "Recepcionista",
    descricao: "Marcar consultas, atender telefones e fazer o controle de entrada e saída de pessoas",
    dataLimite: "31/03/2023",
    candidatos: ["Ana", "Paula"]
},
{
    nome: "Bombeiro",
    descricao: "Atuar na prevenção e combate a incêndios, resgate e salvamento de pessoas e animais em situações de emergência",
    dataLimite: "05/04/2023",
    candidatos: ["Roberto"]
},
{
    nome: "Vendedora",
    descricao: "Realiza atendimento ao cliente, vendas de produtos, opera caixa e busca fidelizar o cliente. Boa comunicação é um diferencial.",
    dataLimite: "25/03/2023",
    candidatos: []
}]
let opcao = ""

function listarVagas() {
    if (vagas.length === 0) {
        alert("Nenhuma vaga disponível no momento!")
    } else {
        const vagasDisponiveis = vagas.reduce(function (acumulador, vaga, indice) {
            return acumulador += (indice + 1) + ". " + vaga.nome + " (" + vaga.candidatos.length + ")" + " Candidatos" + "\n" 
        }, "")
        alert("Vagas disponíveis: \n\n" + vagasDisponiveis)
    }
}

function criarVaga() {
    const nome = prompt("Digite o nome da nova vaga")
    const descricao = prompt("Digite uma descrição para a vaga")
    const dataLimite = prompt("Digite uma data limite para a vaga (Ex: dd/mm/aaaa)")
    const confirmacao = confirm(
        "Tem certeza de que deseja adicionar esta vaga? Clique em 'OK' se sim e em 'Cancelar' caso queira voltar ao menu inicial." + "\n\n" +
        nome + "\n\n" +
        descricao + "\n\n" +
        "Data limite: " + dataLimite
        )

    if (confirmacao) {
        vagas.push({ nome, descricao, dataLimite, candidatos: []})
        alert("Vaga adicionada.")
    }
}

function visualizarVaga() {
    opcao = parseInt(prompt("Sobre qual vaga você gostaria de obter mais informações?\n\n" +
        "0. Voltar ao menu inicial"))
    if (opcao === 0) {
        return
    } else if (isNaN(opcao) || opcao < 1 || opcao > vagas.length) {
        alert("Opção inválida")
        visualizarVaga()
        return
    }
    const vaga = vagas[opcao - 1]

    let candidatos = (vaga.candidatos).reduce(function (acumulador, candidato, indice) {
        if (candidato) {
            if (indice === (vaga.candidatos).length - 1) {
                acumulador += candidato + "."
            } else {
                acumulador += candidato + ", "
            }
        }
        return acumulador
    }, "")

    if (candidatos === "") {
        candidatos = "Nenhum candidato no momento"
    }

    if ((opcao - 1) < vagas.length) {
        alert("Vaga " + opcao + "\n\n" +
            vaga.nome + "\n\n" +
            vaga.descricao + "\n\n" +
            vaga.dataLimite + "\n\n" +
            "Candidatos: " + candidatos)
    } else {
        alert("Vaga não encontrada")
    }
}

function inscreverCandidato() {
    if (vagas.length === 0) {
        alert("Nenhuma vaga disponível no momento!")
        return
    }

    opcao = parseInt(prompt("Digite o numero da vaga que deseja inscrever o novo candidato: \n\n" +
        "0. Voltar ao menu inicial"))

    if (opcao === 0) {
        return
    } else if (isNaN(opcao) || opcao < 1 || opcao > vagas.length) {
        alert("Opção inválida")
        inscreverCandidato()
        return
    }
    const candidato = prompt("Digite o nome do candidato:")
    const vaga = vagas[opcao - 1]

    const confirmacao = confirm(
        "Tem certeza de que deseja adicionar o(a) candidato(a) " + candidato + " a esta vaga? Clique em 'OK' se sim e em 'Cancelar' caso queira voltar ao menu inicial." + "\n\n" +
        vaga.nome + "\n\n" +
        vaga.descricao + "\n\n" +
        "Data limite: " + vaga.dataLimite
        )

    if (confirmacao) {
        vaga.candidatos.push(candidato)
        alert("Candidato inscrito.")
    }
}

function excluirVaga() {
    if (vagas.length === 0) {
        alert("Não existe nenhuma vaga para ser removida no momento!")
        return
    }

    opcao = parseInt(prompt("Digite o número da vaga que deseja remover\n\n" +
        "0. Voltar ao menu inicial"))

    if (opcao === 0) {
        return
    } else if (isNaN(opcao) || opcao < 1 || opcao > vagas.length) {
        alert("Opção inválida")
        excluirVaga()
        return
    }

    const vaga = vagas[opcao - 1]

    const confirmacao = confirm(
        "Tem certeza de que deseja remover esta vaga? Clique em 'OK' se sim e em 'Cancelar' caso queira voltar ao menu inicial." + "\n\n" +
        vaga.nome + "\n\n" +
        vaga.descricao + "\n\n" +
        "Data limite: " + vaga.dataLimite
        )

    if (confirmacao) {
        vagas.splice(opcao - 1, 1)
        alert("Vaga excluída")
    }
}

do {

    opcao = prompt("Vagas de emprego \n\n" +
        "Escolha uma das opções abaixo: \n\n" +
        "1. Listar vagas disponíveis\n" +
        "2. Criar um nova vaga\n" +
        "3. Visualizar uma vaga\n" +
        "4. Inscrever um candidato em uma vaga\n" +
        "5. Excluir uma vaga\n" +
        "6. Sair\n")

    switch (opcao) {
        case "1":
            listarVagas()
            break
        case "2":
            criarVaga()
            break
        case "3":
            visualizarVaga()
            break
        case "4":
            inscreverCandidato()
            break
        case "5":
            excluirVaga()
            break
        case "6":
            alert("Encerrando...")
            break
        default:
            alert("Opção inválida")
    }

} while (opcao !== "6")
