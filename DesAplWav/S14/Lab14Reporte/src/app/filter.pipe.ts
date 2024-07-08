import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'filter' })
export class FilterPipe implements PipeTransform {
  transform(peliculas: any[], filtroGenero: string, filtroAnio: number): any[] {
    let peliculasFiltradas = peliculas;

    if (filtroGenero) {
      peliculasFiltradas = peliculasFiltradas.filter(
        (pelicula) => pelicula.genero === filtroGenero
      );
    }

    if (filtroAnio) {
      peliculasFiltradas = peliculasFiltradas.filter(
        (pelicula) => pelicula.lanzamiento === filtroAnio
      );
    }

    return peliculasFiltradas;
  }
}
