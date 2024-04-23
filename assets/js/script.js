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
        this.tipo = tipo;
    }
    get tipo(){
        return `El tipo de animal es un ${this.tipo}`
    }
}

class Mascota extends Animal{
    constructor(nombrePropietario, direccionPropietario, telefonoPropietario, tipoAnimal, nombreMascota, 
        enfermedad){
        super(nombrePropietario, direccionPropietario, telefonoPropietario, tipoAnimal);
        this.nombreMascota = nombreMascota;
        this.enfermedad = enfermedad;  //de momento dejare enfermedad en esta clase :S
    }
    get nombre(){
        return this.nombreMascota;
    }
    set nombre(new_nombreMascota){
        this.nombreMascota = new_nombreMascota;

    }
    //tengo que agregar un get & set a enfermedad si o si... despues veo donde lo pongo??
    get enfermedad(){
        return this.enfermedad;
    }
    set enfermedad(new_enfermedad){
        this.enfermedad = new_enfermedad;
    }
}