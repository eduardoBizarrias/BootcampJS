function mediaSimples()
{
    let N1 = document.getElementById("txtN1-01").value
    let N2 = document.getElementById("txtN2-01").value
    let N3 = document.getElementById("txtN3-01").value
    let N4 = document.getElementById("txtN4-01").value
    
    let media = (parseFloat(N1) + parseFloat(N2) + parseFloat(N3) + parseFloat(N4))/4
    console.log("A média é: " + media.toFixed(2))
    document.getElementById("resultado1").innerHTML = media

}

function mediaPonderada()
{
    let N1 = document.getElementById("txtN1-02").value
    let N2 = document.getElementById("txtN2-02").value
    let N3 = document.getElementById("txtN3-02").value
    let N4 = document.getElementById("txtN4-02").value
    
    let media = (parseFloat(N1)*2 + parseFloat(N2)*2 + parseFloat(N3)*3 + parseFloat(N4)*3)/(2+2+3+3)
    console.log("A média é: " + media.toFixed(2))
    document.getElementById("resultado2").innerHTML = media

}

function compraProduto()
{
    let nomeProduto = document.getElementById("txtnomeProduto").value
    let qtdProduto = document.getElementById("txtQtde").value
    let valorProduto = document.getElementById("txtValor").value
    

    let valorTotal = qtdProduto * valorProduto
    let desconto = valorTotal * 0.15
    let valorDesconto = valorTotal - desconto    
    
    document.getElementById("resultado3").innerHTML = 
                                "Produto comprado: " + nomeProduto + 
                                "<br>Total da compra R$ " + valorTotal.toFixed(2) + 
                                "<br>Total com Desconto R$ " + valorDesconto.toFixed(2)

}

