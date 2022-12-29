const formulario = document.querySelector("#formulario-contacto")
const inputEmail = document.querySelector("#email")
const inputNombre = document.querySelector("#nombre")
const inputApellido = document.querySelector("#apellido")
const inputMensaje = document.querySelector ("#mensaje")
const avisoFallido = document.querySelector ("#aviso-fallido")



const subirAlLs = ( clave, valor ) => {
    localStorage.setItem(clave, JSON.stringify(valor))
}

const obtenerDelLs = ( clave ) => {
    return JSON.parse(localStorage.getItem(clave))
}


formulario.onsubmit = ( event ) => {
    event.preventDefault()
    let avisos = ""
    let entrar = false
    avisoFallido.innerHTML = ""
    let regexEmail = /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,4}))$/

    if (!regexEmail.test (inputEmail.value)){
        avisos += `El Email no es valido <br>`
    }
    if (inputNombre.value.length <3){
        avisos += `el nombre no es valido <br>`
        entrar = true

    }
    if (inputApellido.value.length <3){
        avisos += `el apellido no es valido <br>`
        entrar = true
    }
    if (inputMensaje.value.length <10){
        avisos += `el mensaje es corto <br>`
        entrar = true
    }
    if (entrar){
        avisoFallido.innerHTML = avisos
    } else{
        avisoFallido.innerHTML = "Enviado"
        subirAlLs("envio", true )
    }
    


}

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
