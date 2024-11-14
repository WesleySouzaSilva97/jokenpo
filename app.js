/**
 * Jokenpo
 * @author Wesley Souza
 */

function jogar() {
    //validação da obrigatoriedade escolha do jogador
    //usamos o argumento checked para validar radion button e checked box
if(document.getElementById('pedra').checked === false &&
document.getElementById('papel').checked === false &&
document.getElementById('tesoura').checked === false) {
    alert("Selecione uma opção")
}else {
    // logica principal
    // sorteio da opção do computador 
    let sorteio = Math.floor(Math.random() * 3)
    switch(sorteio) {
        case 0:
            document.getElementById('pc').src="img/pcpedra.png"
            break
        case 1:
            document.getElementById('pc').src="img/pcpapel.png"
            break
        case 2:
            document.getElementById('pc').src="img/pctesoura.png"
            break
    }
}

}