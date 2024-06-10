import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
})
export class PostListComponent {
  posts = [
    {
      id: 1,
      title: '¡JavaScript sigue dominando!:',
      content:
        'Según el último Índice de Popularidad de Lenguajes de Programación ...',
    },
    {
      id: 2,
      title: 'Python en auge',
      content:
        'Python sigue consolidándose como el segundo lenguaje más popular, ganando ...',
    },
    {
      id: 3,
      title: 'Inteligencia artificial en auge',
      content:
        'La inteligencia artificial continúa su rápido avance, con nuevas...',
    },
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {}

  showDetails(postId: number) {
    this.router.navigate(['/posts', postId]);
  }
}
