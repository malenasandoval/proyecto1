import { Component } from '@angular/core';
// importamos interfaz para animales
import { Animal } from 'src/app/models/animal';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  // PROPIEDAD PUBLICA -> TIPO ARRAY
  public info: Animal [];

  //INICIALIZAR LA PROPIEDAD INFO
  constructor() {
    this.info = [
      {
        id:"",
        nombre: "teo",
        raza: "perro",
        edad: 10,
        imagen: "https://cdn-images-1.medium.com/max/2000/1*pwgFvrMy1u8j6jWm_HNuqQ.jpeg",
        alt: "imagen",
      },
      {
        id:"",
        nombre: "coco",
        raza: "perro",
        edad: 8,
        imagen: "https://th.bing.com/th/id/R.b4fc787c0f6b23ee29662ceae42b024b?rik=UVwpyzHw37Kubg&riu=http%3a%2f%2f4.bp.blogspot.com%2f-XVqRqDPdGj0%2fUGMBBzDHKDI%2fAAAAAAAAoig%2fEj6RqmRpOic%2fs1600%2fCachorro-Blanco-de-Husky-Siberiano_Fondos-de-Pantalla-de-Perros.jpg&ehk=GBrJalpynPSghI3%2fHh58yyqJ4EE6KsgvE6V10O3T%2fQI%3d&risl=&pid=ImgRaw&r=0",
        alt: "imagen",
      },
      {
        id:"",
        nombre: "simon",
        raza: "perro",
        edad: 5,
        imagen: "https://i.pinimg.com/736x/5d/3b/50/5d3b507913b702bf2e8b84e9e0014b5a.jpg",
        alt: "imagen",
      }
    ]
  }
}
