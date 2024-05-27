import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  @Input() userId!: number;
  user: any;  // Definimos la propiedad user

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.userId || Number(this.route.snapshot.paramMap.get('id'));
    this.user = this.getUserById(id);
  }

  getUserById(id: number) {
    const users = [
      { id: 1, name: 'User 1', details: 'Details of User 1' },
      { id: 2, name: 'User 2', details: 'Details of User 2' },
      { id: 3, name: 'User 3', details: 'Details of User 3' },
    ];
    return users.find(user => user.id === id);
  }
}
