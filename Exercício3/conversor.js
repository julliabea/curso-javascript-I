const num = parseInt(prompt("Qual número em metros"))
const medida = prompt("E para qual medida?")

switch (medida){
    case "mm":
        alert(num*1000)
        break
    case "cm":
        alert(num*100)
        break
    case "dm":
        alert(num*10)
         break
    case "dam":
        alert(num/10)
        break
    case "hm":
        alert(num/100)
        break
    case "km":
        alert(num/1000)
        break
    default:
        alert("Valor inválido")
    
    /*milimetro(mm)
    centímetro (cm)
    decímetro (dm)
    decâmetro (dam)
    metro(m)
    hectômetro (hm)
    quilômetro (km)*/
}