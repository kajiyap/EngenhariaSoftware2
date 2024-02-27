function CalcMassa (){
    const nome = document.getElementsByName('nome').value
    const alturaCm = parseFloat(document.getElementsByName('altura').value)
    const peso = parseFloat(document.getElementsByName('peso').value)
    
    const alturaM = alturaCm/100
    
    const MassaCorporal = peso / alturaM**2


}
