import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  users = [
    { id: 1, name: 'Jose' },
    { id: 2, name: 'Maria' },
    { id: 3, name: 'Oliver' },
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {}

  showDetails(userId: number) {
    this.router.navigate(['/users', userId]);
  }
}
