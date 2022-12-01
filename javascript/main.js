const usuarioConEmail = "facumazza98@gmail.com";
const contrasenia = "holafacundo123" ;

let nombre = prompt("ingrese nu nombre");
let usuario = prompt("ingrese su usuario con email");
let contraseniaU = prompt ("ingrese su contrasenia");



function validar(){
    if(usuarioConEmail === usuario && contrasenia === contraseniaU){
        alert("Bienvenido " + nombre)
    
    }
    else if (usuarioConEmail !== usuario || contrasenia !== contraseniaU ){
        alert("usuario y/o contraseña incorrectos, intente nuevamente")
        usuario = prompt ("ingrese usuario")
        contraseniaU = prompt("ingrese contraseña")
    } else {
        alert("datos invalidos")
    }
 while (usuario!== usuarioConEmail || contrasenia !== contraseniaU){
    alert ("ingrese sus datos nuevamente")
    usuario = prompt ("ingrese su usuario")
    contraseniaU = prompt ("ingrese su contraseña")
 }
}


validar ()


