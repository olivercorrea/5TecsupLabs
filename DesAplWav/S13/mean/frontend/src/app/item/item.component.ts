import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item.service';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit {
  songs: any[] = [];
  currentSong: any = {};
  searchTerm: string = '';
  sortField: string = 'title';
  sortOrder: 'asc' | 'desc' = 'asc';
  successMessage: string = '';
  currentYear: number = new Date().getFullYear();
  selectedFile: File | null = null;

  constructor(private itemService: ItemService, private http: HttpClient) {}

  ngOnInit(): void {
    this.getSongs();
  }

  getSongs(): void {
    const sort = `${this.sortField}:${this.sortOrder}`;
    this.itemService.getItems(this.searchTerm, sort).subscribe((songs) => {
      this.songs = songs;
    });
  }

  getItemById(id: string): void {
    this.itemService.getItemById(id).subscribe((song) => {
      this.currentSong = song;
    });
  }

  createItem(form: NgForm): void {
    if (form.valid) {
      this.itemService.createItem(this.currentSong).subscribe(() => {
        this.getSongs();
        this.currentSong = {};
        form.resetForm();
        this.showSuccess('Canción agregada correctamente');
      });
    }
  }

  updateItem(id: string, form: NgForm): void {
    if (form.valid) {
      this.itemService.updateItem(id, this.currentSong).subscribe(() => {
        this.getSongs();
        this.currentSong = {};
        this.showSuccess('Canción actualizada correctamente');
      });
    }
  }

  deleteItem(id: string): void {
    if (confirm('¿Estás seguro de que deseas eliminar esta canción?')) {
      this.itemService.deleteItem(id).subscribe(() => {
        this.getSongs();
        this.showSuccess('Canción eliminada correctamente');
      });
    }
  }

  editItem(id: string): void {
    this.getItemById(id);
  }

  searchSongs(): void {
    this.getSongs();
  }

  sortSongs(field: string): void {
    if (field === this.sortField) {
      this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortField = field;
      this.sortOrder = 'asc';
    }
    this.getSongs();
  }

  showSuccess(message: string): void {
    this.successMessage = message;
    setTimeout(() => (this.successMessage = ''), 3000);
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0] as File;
  }

  uploadImage() {
    if (this.selectedFile) {
      const formData = new FormData();
      formData.append('image', this.selectedFile, this.selectedFile.name);

      this.http
        .post<any>('http://localhost:3000/api/upload', formData)
        .subscribe(
          (res) => {
            this.currentSong.imageUrl = res.imageUrl;
            console.log('Imagen subida con éxito:', res.imageUrl);
          },
          (error) => {
            console.error('Error al subir la imagen:', error);
          }
        );
    }
  }
}
