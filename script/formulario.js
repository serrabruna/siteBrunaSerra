function exibirInformacoes(){
    let nome = document.getElementById("nome").value;
    let data_ida = document.getElementById("ida").value;
    let data_volta = document.getElementById("volta").value;
    let email = document.getElementById("email").value;
    let tel = document.getElementById("telefone").value; 
    let passagens = parseInt(document.getElementById("passagens").value);
    var embarque = document.getElementById("embarque");
    var textoEmbarque = embarque.options[embarque.selectedIndex].text;
    var desembarque = document.getElementById("desembarque");
    var textoDesembarque = desembarque.options[desembarque.selectedIndex].text;

    if(textoEmbarque == ""){
        alert("Por favor, insira um embarque válido")
    }

    if(textoDesembarque == ""){
        alert("Por favor, insira um desembarque válido")
    }

    if(passagens > 5){
        alert("Você atingiu o valor máximo de passagens")
    }


    document.getElementById("informacoes").innerText = "Nome completo: " + nome + "\n" + "Data de Ida: " 
    + data_ida + "\n"  + "Data de Volta: " + data_volta + "\n" + "Email: " + email + "\n" + "Telefone: " + tel + "\n" + "Quantidade de passagens: "
    + passagens + "\n" + "Embarque: " + textoEmbarque + "\n" + "Desembarque: " + textoDesembarque;

}