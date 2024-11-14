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
}

}