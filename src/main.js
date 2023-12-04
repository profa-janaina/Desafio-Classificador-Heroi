let nome = "";
let nivelExperiencia = "";
let nivelHeroi;
let mensagem;


function classificar() {    
    nome = document.getElementById("nomeHeroi").value;
    nivelExperiencia = document.getElementById("xpHeroi").value;

    if(nivelExperiencia <= 1000){
        nivelHeroi = "Ferro"
    }            
    else if(nivelExperiencia >= 1001 && nivelExperiencia <= 2000){
        nivelHeroi = "Bronze"
    }            
    else if(nivelExperiencia >= 2001 && nivelExperiencia <= 5000){
        nivelHeroi = "Prata"
     }            
    else if(nivelExperiencia >= 5001 && nivelExperiencia <= 7000){
        nivelHeroi = "Ouro"
     }            
    else if(nivelExperiencia >= 7001 && nivelExperiencia <= 8000){
        nivelHeroi = "Platina"
    }            
    else if(nivelExperiencia >= 8001 && nivelExperiencia <= 9000){
        nivelHeroi = "Ascendente"
    }            
    else if(nivelExperiencia >= 9001 && nivelExperiencia <= 10000){
        nivelHeroi = "Imortal"
     }            
    else if(nivelExperiencia >= 10001){
        nivelHeroi = "Radiante"
    }

    if(nome.length > 0 && nivelExperiencia > 0){
        mensagem = `O Herói de nome ${nome} está no nível de ${nivelHeroi}`;             
    }else{
        mensagem = "Insira um nome ou valor válido"
    }
    document.getElementById("resultadoClassificacao").innerText= mensagem;   

    nivelExperiencia = "";
    nome = "";
    nivelHeroi="";
    mensagem = "";
    document.getElementById("nomeHeroi").value = "";
    document.getElementById("xpHeroi").value = "";
}
