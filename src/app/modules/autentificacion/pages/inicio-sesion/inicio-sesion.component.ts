import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
})
export class InicioSesionComponent {
  // Este "hide" es para el input de contraseña
  hide = true;

  // arreglo publico donde traigo la interfaz Usuario
  public usuarioLocal : Usuario[]

  // Utilizamos el constructor para inicializar usuarioLocal con una lista predefinida de usuarios
  constructor() {
    this.usuarioLocal = [{
      uid: '', 
      nombre: 'Malena',
      apellido: 'Sandoval',
      email: 'malenasando@gmail.com',
      rol: 'visitante',
      password: 'malena05',
    }]
  }

  // Objeto para almacenar los datos del usuario que intenta iniciar sesion
  usuarios: Usuario = {

    uid: '', // -> comillas vacias porque es string
    nombre: '',
    apellido: '',
    email: '',
    rol: '',
    password: '',
  };

  // Creamos una coleccion para almacenar multiples usuarios de tipo usuario (inicialmente vacia)
  coleccionInicioSesion: Usuario []= [];

  //Creamos la funcion para registrar (o validar) un incio de sesion
  IniciarSesion (){

    //constante credenciales va a guardar la informacion que ingrese el usuario
    const credenciales = {
      uid: this.usuarios.uid,
      nombre: this.usuarios.nombre,
      apellido: this.usuarios.apellido,
      email: this.usuarios.email,
      rol: this.usuarios.rol,
      password: this.usuarios.password,
    }

    //Crear un ciclo que recorra los ingresos de los usuarios
    for (let i = 0; i < this.usuarioLocal.length; i++) {
      //Creamos una constante que vamos a utilizar para verificar la informacion
      const orden = this.usuarioLocal[i];

      //Se comparan los datos ingresados con los guardados
      if (orden.email === credenciales.email && orden.password === credenciales.password) {
        alert ("Ha iniciado sesion")
      } else {
        alert ("No ha iniciado sesion")
      }
    }
}}