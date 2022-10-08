function calcularImc(){
    var nome =  document.getElementById("nome").value
    var peso =  document.getElementById("peso").value
    var altura =  document.getElementById("altura").value
    var imc = peso / (altura**2)
    if (imc <= 18.5){
        document.getElementById("mensagem").innerHTML = (nome + ",  Você está Abaixo do peso")
    } else if (imc >= 18.5 && imc <= 29.9){
        document.getElementById("mensagem").innerHTML = (nome + ",  Você está com peso normal")
    }else if (imc >= 24.9 && imc <= 29.9){
        document.getElementById("mensagem").innerHTML = (nome + ",  Você está com sobrepeso")
    }else if (imc >= 30 && imc <= 34.9){
        document.getElementById("mensagem").innerHTML = (nome + ",  Você está com obesidade grau I")
    }else if (imc >= 35 && imc <= 39.9){
        document.getElementById("mensagem").innerHTML = (nome + ",  Você está com obesidade grau II")
    }else if (imc >= 40){
        document.getElementById("mensagem").innerHTML = (nome + ",  Você está com obesidade grau III ou Mórbida")
    }
    else if (nome || peso || altura === ""){
        alert("Favor, preencha os campos Nome,peso e altura.")
    }
    document.getElementById("resultadoCalculo").innerHTML = imc.toFixed(2)
}