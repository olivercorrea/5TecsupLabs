import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-reporte-peliculas',
  templateUrl: './reporte-peliculas.component.html',
  styleUrls: ['./reporte-peliculas.component.css'],
})
export class ReportePeliculasComponent implements OnInit {
  peliculas: any[] = [];
  filteredPeliculas: any[] = [];
  generoFilter: string = '';
  yearFilter: string = '';

  constructor(private http: HttpClient) {
    (<any>pdfMake).vfs = pdfFonts.pdfMake.vfs;
  }

  ngOnInit() {
    this.http.get<any[]>('./assets/peliculas.json').subscribe((data) => {
      this.peliculas = data;
      this.filteredPeliculas = data;
    });
  }

  filtrarPeliculas() {
    this.filteredPeliculas = this.peliculas.filter((pelicula) => {
      return (
        (this.generoFilter ? pelicula.genero === this.generoFilter : true) &&
        (this.yearFilter
          ? pelicula.lanzamiento.toString() === this.yearFilter
          : true)
      );
    });
  }

  generarPDF() {
    const contenido = [
      { text: 'Informe de Películas', style: 'header' },
      { text: '\n\n' },
      {
        table: {
          headerRows: 1,
          widths: ['*', '*', '*'],
          body: [
            ['Título', 'Género', 'Año de lanzamiento'],
            ...this.filteredPeliculas.map((pelicula) => [
              { text: pelicula.titulo, style: 'tableData' },
              { text: pelicula.genero, style: 'tableData' },
              { text: pelicula.lanzamiento.toString(), style: 'tableData' },
            ]),
          ],
        },
      },
    ];
    const estilos = {
      header: {
        fontSize: 30,
        bold: true,
        color: '#DAFF33',
      },
      tableData: {
        fontSize: 12,
        color: '#555',
      },
      tableHeader: {
        bold: true,
        fontSize: 13,
        color: 'white',
        fillColor: '#AF4CA1',
      },
    };

    const documentDefinition = {
      content: contenido,
      styles: estilos,
    };

    pdfMake.createPdf(documentDefinition).open();
  }

  exportToExcel() {
    const worksheet = XLSX.utils.json_to_sheet(this.filteredPeliculas);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Peliculas');
    XLSX.writeFile(workbook, 'InformePeliculas.xlsx');
  }

  exportToCSV() {
    const csvRows = [
      ['Título', 'Género', 'Año de lanzamiento'],
      ...this.filteredPeliculas.map((pelicula) => [
        pelicula.titulo,
        pelicula.genero,
        pelicula.lanzamiento,
      ]),
    ];
    const csvContent = csvRows.map((e) => e.join(',')).join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', 'InformePeliculas.csv');
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}
