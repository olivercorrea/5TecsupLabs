import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css'],
})
export class PostDetailsComponent implements OnInit {
  post: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const postId = this.route.snapshot.paramMap.get('id');
    this.post = this.getPostById(Number(postId));
  }

  getPostById(id: number) {
    const posts = [
      {
        id: 1,
        title: '¡JavaScript sigue dominando!',
        content:
          'Según el último Índice de Popularidad de Lenguajes de Programación, JavaScript sigue siendo el lenguaje más popular por octavo año consecutivo. Esto se debe a su versatilidad y facilidad de uso, lo que lo convierte en una excelente opción para el desarrollo web, aplicaciones móviles y juegos.',
      },
      {
        id: 2,
        title: 'Python en auge',
        content:
          'Python sigue consolidándose como el segundo lenguaje más popular, ganando terreno a Java. Su simplicidad y enfoque en la legibilidad lo hacen ideal para principiantes y para el desarrollo de aplicaciones de ciencia de datos e inteligencia artificial.',
      },
      {
        id: 3,
        title: 'Inteligencia artificial en auge',
        content:
          'La inteligencia artificial continúa su rápido avance, con nuevas aplicaciones que se desarrollan en diversos campos. Desde la atención médica hasta las finanzas, la IA está transformando la forma en que vivimos y trabajamos.',
      },
    ];
    return posts.find((post) => post.id === id);
  }
}
