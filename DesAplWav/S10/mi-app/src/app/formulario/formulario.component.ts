import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  @ViewChild('formulario') formulario!: NgForm; // Obtener referencia al formulario

  nombre: string = '';
  email: string = '';

  // Método para verificar si el formulario es válido
  formularioValido(): boolean {
    // Si formulario es nulo, consideramos que el formulario no es válido
    return !!this.formulario && !!this.formulario.valid;
  }

  // Método para enviar el formulario con confirmación
  onSubmit() {
    if (confirm('¿Estás seguro de enviar el formulario?')) {
      console.log('El formulario ha sido enviado');
      console.log(`Nombre: ${this.nombre}`);
      console.log(`Email: ${this.email}`);

      // Abrir una nueva ventana y mostrar los campos del formulario
      this.mostrarEnNuevaVentana();
    }
  }

  // Método para mostrar los campos del formulario en una nueva ventana
  mostrarEnNuevaVentana() {
    const ventanaNueva = window.open('', '_blank');
    if (ventanaNueva) {
      ventanaNueva.document.write(`<h1>Formulario enviado:</h1>`);
      ventanaNueva.document.write(`<p>Nombre: ${this.nombre}</p>`);
      ventanaNueva.document.write(`<p>Email: ${this.email}</p>`);
    } else {
      alert('Error: No se pudo abrir la nueva ventana');
    }
  }
}
