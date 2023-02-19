console.log("Hello World ou Olá Mundo")

//let variavel dentro do escopo ou dentro de {}
//var variavel global, funciona fora do {}

//EXEMPLO let

{
    let nome = "Eduardo Bizarrias"
    console.log(nome)
    //enquanto o console estiver dentro dos {} ele funciona
}
console.log(nome)
//se estiver fora não funciona

//EXEMPLO var

{
    var nome1 = "Amanda Bizarrias"
    //console.log(nome1)
}
console.log(nome1)
//Dentro ou fora do {} a variavel funciona

let nome2 = "Bizarrias"
{
        console.log(nome2)
}

// Tipos de Variaveis
{
    //Number
    let n1 = 100
    let n2 = 3.14

    //String
    let nome3 = "Terezinha"
    let nome4 = "Bernardo"

    //Booleans
    let v1 = true
    let v2 = false

    //Array objects
    let carros = ["palio","uno","punto"]

    //Date objetcts 
    let date = new Date("2023-02-19")
}

{
    const PI = 3.14
    let largura = 100
    
    PI = 3.15
    largura = 200
    
}


//Soma
{
    let N1=10
    let N2=20
    let result
    
    result = N1 + N2
    console.log("A soma é: " + result)
}

//Subtração
{
    let N1=10
    let N2=2.5
    let result
    
    result = N1 - N2
    console.log("A subtração é: " + result)
}

//Subtração
{
    let N1=10
    let N2=20
    let result
    
    result = N1 - N2
    console.log("A subtração é: " + result)
}

//Multiplicação
{
    let N1=5.88
    let N2=2.33
    let result
    
    result = N1 * N2
    console.log("A multiplicação é: " + result)
}

//Divisão
{
    let N1=10
    let N2=3.1
    let result
    
    result = N1 / N2
    console.log("A divisão é: " + result.toFixed(2))
    //função toFixed() diz quantas casas decimais é usada depois da virgula

}

//Exponencial
{
    let N1=8
    let N2=10
    let result
    
    result = N1 ** N2
    console.log("O resultado é: " + result)
}

//Resto
{
    let N1=20
    let N2=2
    let result
    
    result = N1 % N2
    console.log("O resto é: " + result)

    if(result == 1)
    {
        console.log("O número é impar")
    }
    
    else
    {
        console.log("O número é par")
    }
}

