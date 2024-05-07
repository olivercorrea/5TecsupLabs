// Importaciones necesarias para el componente
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contador', // Selector del componente
  templateUrl: './contador.component.html', // Plantilla HTML asociada al componente
  styleUrls: ['./contador.component.css'] // Archivo de estilos CSS asociado al componente
})

export class ContadorComponent implements OnInit { // Definición de la clase del componente y su implementación de la interfaz OnInit
  valor: number = 0; // Variable para almacenar el valor del contador

  constructor() { } // Constructor del componente

  ngOnInit(): void { // Método OnInit, que se ejecuta cuando el componente se inicializa
    // No se realizan acciones específicas en este método para este componente
  }

  // Método para incrementar el valor del contador
  incrementar(): void {
    this.valor++; // Incrementa el valor del contador en 1
  }

  // Método para disminuir el valor del contador
  disminuir(): void {
    this.valor--; // Disminuye el valor del contador en 1
  }
}
