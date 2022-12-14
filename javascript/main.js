const usuarioConEmail = "facumazza98@gmail.com";
const contrasenia = "holafacundo123" ;

let nombre = prompt("ingrese nu nombre");
let usuario = prompt("ingrese su usuario con email");
let contraseniaU = prompt ("ingrese su contrasenia");



function validar(){
    if(usuarioConEmail === usuario && contrasenia === contraseniaU){
        alert(`Bienvenido ${nombre}`)
    
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

//funcion para definir productos

function Producto ( nombre, descripcion, precio, stock){
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.precio = precio;
    this.stock = stock;

}



// Array con Rosas
 const rosaUno = new Producto ("Rosal Arbustivo", "rosal tipo arbusto de hasta 3 metros", 590, true)
 const rosaDos = new Producto ("Rosal Mini", "Rosal mini ideal para maceta en interior o exterior", 420, false)
 const rosaTres = new Producto ( "Rosal de pie", "Rosal tipo arbol de hasta 2 2 metros", 790, false)

const arrayDeRosas = [rosaUno, rosaDos, rosaTres]
console.log(arrayDeRosas)


const macetaUno = new Producto ("Maceta uno", "pequeña maceta de 13x7cm en melamina con forma de flor", 150, true)
const macetaDos = new Producto("Maceta Dos", "pequeña maceta de 15x7cm en melamina con forma circular", 150, true)
const macetaTres= new Producto ("Maceta tres", "maceta mediana de 20x12cm de melamina con forma cuadrada", 180, false)

// Array con Macetas

const arrayDeMacetas = [macetaUno, macetaDos, macetaTres]
console.log (arrayDeMacetas)


// verificar stock disponible

 
function verificaStock() {
    
const stockDisponibleMacetas = arrayDeMacetas.filter ((elemento) => {
    return elemento.stock == true
})
 
console.log (stockDisponibleMacetas)

const stockDisponibleRosas = arrayDeRosas.filter ((elemento) => {
    return elemento.stock == true
})
 
console.log (stockDisponibleRosas)
}

verificaStock ()
