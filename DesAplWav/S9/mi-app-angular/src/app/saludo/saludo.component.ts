// Importaciones necesarias para el componente
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-saludo', // Selector del componente
  templateUrl: './saludo.component.html', // Plantilla HTML asociada al componente
  styleUrls: ['./saludo.component.css'] // Archivo de estilos CSS asociado al componente
})
export class SaludoComponent implements OnInit { // Definición de la clase del componente y su implementación de la interfaz OnInit
  titulo: string = '¡Bienvenido a Angular!'; // Variable para almacenar el título del saludo
  mensaje: string = 'Este es un componente de saludo creado en Angular.'; // Variable para almacenar el mensaje del saludo

  constructor() {} // Constructor del componente

  ngOnInit(): void { // Método OnInit, que se ejecuta cuando el componente se inicializa
    // No se realizan acciones específicas en este método para este componente
  }
}
