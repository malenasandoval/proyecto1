import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
// Servicio de Autentificación
import { AuthService } from '../../services/auth.service';
// Servicio de Firestore
import { FirestoreService } from 'src/app/modules/shared/services/firestore.service';
// Servicio de rutas que otorga Angular
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  // Este "hide" es para el input de contraseña
  hide = true;

  // IMPORTACIÓN DEL MODELO / INTERFAZ
  usuarios: Usuario = {
    uid: '',
    nombre: '',
    apellido: '',
    email: '',
    rol: '',
    password: ''
  }

  // CREAR UNA COLECCIÓN QUE SOLO RECIBE OBJETOS DEL TIPO USUARIOS
  // coleccionUsuarios es una colección de objetos Usuario que almacena todos los usuarios registrados.
  coleccionUsuarios: Usuario[] = [];

  // Referenciamos a nuestros servicios
  // Inicializa los servicios de autenticación (AuthService), base de datos (FirestoreService) y navegación (Router).
  constructor(
    public servicioAuth: AuthService, // métodos de autentificación
    public servicioFirestore: FirestoreService, // vincula UID con la colección
    public servicioRutas: Router // método de navegación
  ){}

  // FUNCIÓN ASINCRONICA PARA EL REGISTRO
  async registrar(){

    // CREDENCIALES = información que ingrese el usuario

    //################################ LOCAL
    /*
    const credenciales = {
      uid: this.usuarios.uid,
      nombre: this.usuarios.nombre,
      apellido: this.usuarios.apellido,
      email: this.usuarios.email,
      rol: this.usuarios.rol,
      password: this.usuarios.password
    }*/
    // enviamos los nuevos registros por medio del método push a la colección
    // this.coleccionUsuarios.push(credenciales);

    // Notificamos al usuario el correcto registro
    // alert("Te registraste con éxito :)");

    // ############################### FIN LOCAL

    const credenciales = {
      email: this.usuarios.email,
      password: this.usuarios.password
    }
    // constante "res" = resguarda una respuesta
    // registrar en AuthService crea un nuevo usuario en Firebase Authentication con el correo electrónico y la contraseña proporcionado
    const res = await this.servicioAuth.registrar(credenciales.email, credenciales.password)

    // El método THEN nos devuelve la respuesta esperada por la promesa
    .then(res => {
      alert('Ha agregado un usuario con éxito :)');
      // Accedemos al servicio de rutas -> método navigate
      // método NAVIGATE = permite dirigirnos a diferentes vistas
      // navigate en Router redirige al usuario a la página de inicio después del registro
      this.servicioRutas.navigate(['/inicio']);
    })
    // El método CATCH toma una falla y la vuelve un ERROR
    .catch(error => {
      alert('Hubo un problema al registrar un nuevo usuario :(');
    })

    const uid = await this.servicioAuth.obtenerUid();

    this.usuarios.uid = uid;

    // Llamamos a la guardarUsuario() para que se ejecute
    this.guardarUsuario();

    // Llamamos a la función limpiarInputs() para que se ejecute
    this.limpiarInputs();
  }

  // función para agregar NUEVO USUARIO
  //  guardarUsuario guarda la información del nuevo usuario en la colección de usuarios de Firestore.
  async guardarUsuario(){
    this.servicioFirestore.agregarUsuario(this.usuarios, this.usuarios.uid)
    .then(res => {
      console.log(this.usuarios);
    })
    .catch(err => {
      console.log('Error =>', err);
    })
  }

  // Función para vaciar el formulario
  limpiarInputs(){
    const inputs = {
      uid: this.usuarios.uid = '',
      nombre: this.usuarios.nombre = '',
      apellido: this.usuarios.apellido = '',
      email: this.usuarios.email = '',
      rol: this.usuarios.rol = '',
      password: this.usuarios.password = ''
    }
  }
}