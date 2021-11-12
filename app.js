/*class Usuario {
    constructor (nombre, apellido, libros, mascotas){
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
    }
    
    getFullname() {
        return `${this.apellido} ${this.nombre}`
    }

    addMascotas(mascota) {
        this.mascotas.push(mascota);
    }

    countMascotas() {
        return this.mascotas.length;
    }

    addBook(libro, autor) {
        this.libros.push({libro: libro, autor: autor})
    }

    getBookNames() {
        return this.libros.map(libro => libro.libro);
    }
}

let usuario1 = new Usuario('Pedro', 'Borgarello', [{ libro: 'Harry Potter', autor: 'J.K. Rowling' }, { libro: 'El Código da Vinci', autor: 'Dan Brown'}], ['perro', 'cocodrilo', 'rana', 'hamster', 'tigre']);

// NOMBRE COMPLETO DEL USUARIO EN CONSOLA
console.log(usuario1.getFullname());

// AGREGA UNA MASCOTA AL USUARIO
usuario1.addMascotas('lombris');

// MUESTRA EL NÚMERO DE MASCOTAS
console.log(usuario1.countMascotas());

// AGREGA UN LIBRO AL USUARIO
usuario1.addBook('El arte de la guerra', 'Sun Tzu');

// MUESTRA LOS NOMBRES DE LOS LIBROS
console.log(usuario1.getBookNames());

*/

// ------------ DESAFÍO 2 ------------

const Container = require('./classes/container');
/*
const container = new Container();

// GUARDA UN PRODUCTO EN LA BASE DE DATOS
container.save({title: 'Juventus home', price: 11000, thumbnail: 'futuraUrl'}).then(result => {
    console.log(result);
})

// DEVUELVE EL PRODUCTO CON EL MISMO ID
container.getById(5952436).then(result => {
    console.log(result.product);
})

// DEVUELVE TODOS LOS PRODUCTOS
container.getAll().then(result => {
    console.log(result.product);
})

// ELIMINA EL PRODUCTO CON EL MISMO ID
container.deleteById(4365988).then(result => {
    console.log(result.product, result.message);
})

// ELIMINA TODOS LOS PRODUCTOS
container.deleteAll().then(result => {
    console.log(result.message);
})
*/
/*let array = ['oik12h3', '12lk3h', '14klh43', 'kl65h', 'ad980scy'];

let total = array.length;

let result = Math.floor(Math.random() * total);

let a = array[result];

console.log(a);*/