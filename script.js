function buscar(){
    let input = document.getElementById("cep").value

    const ajax = new XMLHttpRequest();
ajax.open("GET", "https://viacep.com.br/ws/" + input + "/json/")
ajax.send();

ajax.onload = function(){
    document.getElementById("texto").innerHTML = this.responseText
    let obj = JSON.parse(this.responseText)
    let cidade = obj.localidade
    let bairro = obj.bairro
    let rua = obj.logradouro
    document.getElementById("texto").innerHTML = `Bairro: ${bairro}<br>
    Rua: ${rua}<br> Cidade: ${cidade}`
}
}

