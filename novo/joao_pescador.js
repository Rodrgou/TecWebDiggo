function verificador(){

    const p = parseFloat(document.getElementById("peso").value);

    excesso = 0
    multa = 0

if(p > 50) {
    excesso = p - 50;
    multa = excesso * 4;
}
    alert("O Peso "+ p +"Kg\nExcesso: "+ excesso +"Kg\nMulta por excesso de Kg: R$"+ multa);
}