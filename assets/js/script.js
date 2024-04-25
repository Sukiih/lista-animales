class Propietario {
    constructor (nombre, direccion, telefono){
    this.nombre = nombre;
    this.direccion = direccion;
    this.telefono = telefono;
    }
    datosPropietario(){
        return `El nombre del dueño es: ${this.nombre}, El domicilio es: ${this.direccion}, 
        y el número telefonico de contacto es: ${this.telefono}`
    }
}

class Animal extends Propietario {
    constructor(nombre, direccion, telefono, tipo){
        super(nombre, direccion, telefono)
        this.tipoAnimal = tipo; 
    }
    get tipo(){
        return `El tipo de animal es un: ${this.tipoAnimal}`
    }
}

class Mascota extends Animal{
    constructor(nombrePropietario, direccionPropietario, telefonoPropietario, tipo, nombreMascota, 
        enfermedad){
        super(nombrePropietario, direccionPropietario, telefonoPropietario, tipo);
        this._nombreMascota = nombreMascota;
        this._enfermedadMascota = enfermedad;
    }
    get nombreMascota(){
        return this._nombreMascota;
    }
    set nombreMascota(newNombreMascota){
        this._nombreMascota = newNombreMascota;

    }
  
    get enfermedadMascota(){
        return this._enfermedadMascota;
    }
    set enfermedadMascota(newEnfermedad){
        this._enfermedadMascota = newEnfermedad;
    }
}


//#region Form
//selecciono el formulario
let formulario = document.querySelector("form");
//variable con elementos directos del form   
let consulta = (event) => {
    event.preventDefault();
    //variables de las partes del formulario
    let propietario = document.getElementById("propietario").value;
    let telefono = document.getElementById("telefono").value;
    let direccion = document.getElementById("direccion").value;
    let nombreMascota = document.getElementById("nombreMascota").value;
    let tipo = document.getElementById("tipo").value;
    let enfermedad = document.getElementById("enfermedad").value;

//ahora si, punto 5:
    let mascota;
    switch (tipo) {
        case "perro":
            mascota = new Mascota(
                propietario, direccion, telefono, tipo, nombreMascota, enfermedad
            );
            break;
        case "gato":
            mascota = new Mascota(
                propietario, direccion, telefono, tipo, nombreMascota, enfermedad
            );
            break;
        case "conejo":
            mascota = new Mascota(
                propietario, direccion, telefono, tipo, nombreMascota, enfermedad
            );
            break;
        default:
            console.error("Tipo de animal no reconocido");
            return;
    }

    function resultadoMascota(mascota) {
        let resultado = document.getElementById("resultado");
        resultado.innerHTML = `
            <li>${mascota.datosPropietario()}</li>
            <li>${mascota.tipo}, mientras que el nombre de la mascota es: ${mascota.nombreMascota}
            y la enfermedad es: ${mascota._enfermedadMascota}</li>`;
    }


resultadoMascota(mascota);
   
};
formulario.addEventListener("submit", consulta);
