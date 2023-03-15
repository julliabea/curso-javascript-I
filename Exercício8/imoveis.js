const properties = []
let option = ""


do {
    let total = properties.length

    option = prompt("Cadastro de Imóveis!\n" +
        "Total de Imóveis cadastrados: " + total + "\n\n" +
        "Opções: \n\n" +
        "1. Salvar um novo imóvel \n" +
        "2. Mostrar imóveis salvos \n" +
        "3. Sair")

    switch (option) {
        case "1":
            const property = {}

            property.owner = prompt("Informe o nome do proprietário do imóvel:")
            property.rooms = prompt("Quantidade de quartos na imóvel:")
            property.bathrooms = prompt("Quantidade de banheiros na imóvel:")
            property.garage = prompt("O imóvel possui garagem? (Sim/Não)")

            const validate = confirm("Salvar este imóvel?\n\n" +
                "Proprietário: " + property.owner +
                "\nQuartos: " + property.rooms +
                "\nBanheiros: " + property.bathrooms +
                "\nGagarem: " + property.garage
            )

            if (validate) {
                properties.push(property)
                alert("Imóvel salvo com sucesso")
            } else {
                alert("Voltando para o menu")
            }
            break
        case "2":
            for (let i = 0; i < properties.length; i++) {
                alert("Imóvel " + (i + 1) + "\n" +
                    "\nProprietário: " + properties[i].owner +
                    "\nQuartos: " + properties[i].rooms +
                    "\nBanheiros: " + properties[i].bathrooms +
                    "\nGagarem: " + properties[i].garage)
            }
            break
        case "3":
            alert("Encerrando...")
            break
        default:
            alert("Opção inválida")
    }
} while (option !== "3")

