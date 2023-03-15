const word = prompt("Qual palavra você deseja saber se é um palíndromo?")
let wordInverted = ""

for(let i = word.length - 1; i >= 0; i--){ 
    wordInverted += word[i]
}       

if(wordInverted === word){
    alert(word + " ao contrario também é " + wordInverted + ", logo, é um palíndromo")
} else {
    alert(word + " não é um palíndromo \n\n" + 
          word + " !== " + wordInverted)
}