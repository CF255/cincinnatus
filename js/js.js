function area(){
    const pi = 3.14;
    var radio = document.getElementById("radio").value;
    var resultado = pi * radio * radio;
    document.getElementById("resultado").value = resultado;
    
}
