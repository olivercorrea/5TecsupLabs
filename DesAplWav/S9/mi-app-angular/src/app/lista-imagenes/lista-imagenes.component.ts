// Importaciones necesarias para el componente
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-imagenes', // Selector del componente
  templateUrl: './lista-imagenes.component.html', // Plantilla HTML asociada al componente
  styleUrls: ['./lista-imagenes.component.css'] // Archivo de estilos CSS asociado al componente
})
export class ListaImagenesComponent implements OnInit { // Definición de la clase del componente y su implementación de la interfaz OnInit

  // Array de objetos que contiene información sobre las imágenes
  imagenes = [
    { url: 'https://www.infobae.com/new-resizer/DbLmKO61kE-qOujIw3PLuxm_Tcg=/1440x960/filters:format(webp):quality(85)/arc-anglerfish-arc2-prod-infobae.s3.amazonaws.com/public/7URXQK7QKJHOXKBUZQOUWWUFMU.jpg', titulo: 'China: Gran Muralla China', descripcion: 'Con 21.200 kilómetros de largo, la Gran Muralla China es Patrimonio de la Humanidad por la UNESCO y fue votada como una de las Nuevas Siete Maravillas del Mundo en 2007. La sección Mutianyu de la Gran Muralla es la más popular entre los turistas, a solo dos horas afuera Beijing' },
    { url: 'https://www.infobae.com/new-resizer/Xnr4MgE3VgfvtGAtcKA4lALijeg=/992x606/filters:format(webp):quality(85)/arc-anglerfish-arc2-prod-infobae.s3.amazonaws.com/public/AR2NEEXQMRG7FJ5ZTU2FKI72J4.jpg', titulo: 'India: Taj Mahal', descripcion: 'El Taj Mahal fue construido por el emperador Shah Jahan entre 1631 y 1648. La UNESCO lo llama "el mayor logro arquitectónico en toda la gama de la arquitectura indo-islámica" (Shutterstock)' },
    { url: 'https://www.infobae.com/new-resizer/DiLvaTLIPw1ZNszjGEjnN6eb3Vo=/1440x810/filters:format(webp):quality(85)/arc-anglerfish-arc2-prod-infobae.s3.amazonaws.com/public/RMUUVB7QY5DEDFTS5UW33FNC6Q.jpg', titulo: 'Francia: Torre Eiffel', descripcion: 'Situada en el extremo del Campo de Marte a la orilla del río Sena, este monumento parisino, símbolo de Francia y de su capital, es la estructura más alta de la ciudad y el monumento que cobra entrada más visitado del mundo, con 7,1 millones de turistas cada año.' }
  ];

  constructor() { } // Constructor del componente

  ngOnInit(): void {
    // No se realizan acciones específicas en este método para este componente
  }
}
