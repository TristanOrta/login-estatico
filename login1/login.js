var conv1=0;
var conv2=0;

//funcion para validar login
function validate() {

    location.reload();
    var username = document.getElementById("usuario").value;
    var password = document.getElementById("contra").value;
    
    if (username == "oscar" && password == "sixx") {        
       window.open("pag2.html"); // redirigir a otra pagina
    }
    else {
      
        alert("Usuario y/o contraseña incorrecto");
      
    }
}

//funcion de pag2 mensaje popup en el parrafo connmi nombre
function mensaje(){

    alert("Esto es un PopUp");
    return false;
}

//funcion 1 de conversion
function conversor(){

    var dollar = document.getElementById("Gringo").value;

    conv1 = dollar * 18.76;

    alert("la cantidad: "+dollar+" Equivale a: "+conv1+" pesos");
   return false;

}
//funcion 2 de conversion
function conversor2(){

    var peso = document.getElementById("MEX").value;

    conv2 = peso / 18.76;

    alert("la cantidad: "+peso+" Equivale a: "+conv2+" dollares");
   return false;

}
//objeto contraseña segura
var PassSeguro={
    username:"oscar",
    password:"sixx"

};

//imprimir texto de el objeto contraseña segura
document.getElementById("demo").innerHTML =
PassSeguro.username + "->+/6" + PassSeguro.password + "6/+";

