import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
})
export class UserDetailsComponent implements OnInit {
  @Input() userId!: number;
  user: any; // Definimos la propiedad user

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = this.userId || Number(this.route.snapshot.paramMap.get('id'));
    this.user = this.getUserById(id);
  }

  getUserById(id: number) {
    const users = [
      {
        id: 1,
        name: 'Jose',
        details: 'Soy estudiante de Diseño y desarrollo de software.',
      },
      { id: 2, name: 'Maria', details: 'Me gusta ver series y leer libros.' },
      {
        id: 3,
        name: 'Oliver',
        details: 'Actualmente estoy aprendiendo sobre inteligencia artificial.',
      },
    ];
    return users.find((user) => user.id === id);
  }
}
