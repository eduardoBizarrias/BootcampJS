

    let N1 = 8.2
    let N2 = 6.3
    let N3 = 7.4
    let N4 = 9.5
//Media    
{
    let media = (N1 + N2 + N3 + N4)/4
    console.log("A média é: " + media.toFixed(2))
}
//Media Ponderada
{
    let mediaPoderada = ((2 * N1) + (2 * N2) + (3 * N3) + (3 * N4))/(2+2+3+3)
    console.log("A média ponderada é: " + mediaPoderada.toFixed(2))
}

//Produto

    let nomeProduto = "Bolacha"
    let qtdProduto = 3
    let valorProduto = 3.98

console.log("Produto: " + nomeProduto)
let valorTotal = qtdProduto * valorProduto
console.log("TOTAL: " + valorTotal)

let desconto = valorTotal * 0.15
let valorDesconto = valorTotal - desconto
console.log("Pagamento com desconto: " + valorDesconto.toFixed(2))

