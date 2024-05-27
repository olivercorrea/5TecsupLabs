import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent {
  posts = [
    { id: 1, title: 'Post 1', content: 'Content of Post 1' },
    { id: 2, title: 'Post 2', content: 'Content of Post 2' },
    { id: 3, title: 'Post 3', content: 'Content of Post 3' },
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  showDetails(postId: number) {
    this.router.navigate(['/posts', postId]);
  }
}
