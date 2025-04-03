function jogar(){
idade = prompt("Quantos anos você tem?")
if(idade < 18) {
  alert ("Você não pode jogar! 🤔")
}
//alert ("Você pode jogar! 🥳")
if(idade >= 18) {
 escolhaJogador = prompt ("Digite 1, 2 ou 3: 1- Pedra, 2- Papel e 3- Tesoura")
  escolhaComputador = Math.floor(Math.random() * 3 + 1) 
  //O math.floor é para arredondamento, ele arredonda pra baixo
  //O math.random pode sortear o mesmo número muitas vezes
  
  //Condição para definir as situações de empate, quando o jogador e computador jogarem os MESMOS NÚMEROS:
  if(escolhaJogador == escolhaComputador){
    alert("Empate! ")
  }
  //Condição para caso o jogador jogar PEDRA e computador jogar PAPEL:
  if(escolhaJogador == 1){
    if(escolhaComputador == 2){
      alert("Papel embrulha pedra! Você perdeu 👊😞")
    }
  }
  //Condição para caso o jogador jogue PAPEL e o computador TESOURA:
  if(escolhaJogador == 2){
    if(escolhaComputador == 3){
      alert("Papel é cortado por tesoura! Você perdeu ✂️😞")
    }
  }
  //Condição para caso o jogador jogue PAPEL e o computador PEDRA ou TESOURA:
    if(escolhaJogador == 2){
      if(escolhaComputador == 1) {
        alert("Você venceu! Seu papel embrulhou a pedra do oponente! 🎉📃")
      }
      if(escolhaComputador == 3){
        alert("Ah não! Seu papel foi cortado! O oponente jogou tesoura 😓✂️")
      }
    }
  //Condição para caso o jogador jogue TESOURA e o computador jogue PEDRA ou PAPEL:
  if(escolhaJogador == 3){
    if(escolhaComputador == 1){
      alert("O oponente quebrou sua tesoura, ele jogou pedra! 👊😓")
    }
    if(escolhaComputador == 2){
      alert("Você venceu! Sua tesoura cortou o papel do oponente ✂️🎉")
    }
  }
  alert("A escolha do seu oponente é: " + escolhaComputador)
}
}