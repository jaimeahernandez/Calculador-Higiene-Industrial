//Se programa la funcion Limpiar
function Limpiar(){
    document.getElementById("form1").reset();
}
//Se programa la funcion Aceleracion Promedio ahv
function PromedioAHV(){
    var x =parseInt(document.getElementById('Valor1').value);
    var y =parseInt(document.getElementById('Valor2').value);
    var z =parseInt(document.getElementById('Valor3').value);
    document.getElementById('ResultadoAHV').innerHTML=x+y+z;
}