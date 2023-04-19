function logar(){
  var email = document.getElementById('email').value;
  var senha = document.getElementById('senha').value;
  
 if(email == "Welinghton" && senha == "123"){
  location.href = "./jogar.html";
  alert('GG');
}
else{
  alert('Email ou Senha Invalida')
}
}

var email, senha, confirmar

function pegarValores(){
 email = document.getElementById('Email').value;
 senha = document.getElementById('Senha').value;
 confirmar = document.getElementById('Confirma').value;
  console.log(email, senha, confirmar);
  if(email != "" && senha != "" && confirmar != ""){
    alert('GG')
        location.href = "./jogar.html"
  }
  else{
    alert('Senha ou Email estão vazios')
  }
}
