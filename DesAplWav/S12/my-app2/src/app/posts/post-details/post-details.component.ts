import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {
  post: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const postId = this.route.snapshot.paramMap.get('id');
    this.post = this.getPostById(Number(postId));
  }

  getPostById(id: number) {
    const posts = [
      { id: 1, title: 'Post 1', content: 'Content of Post 1' },
      { id: 2, title: 'Post 2', content: 'Content of Post 2' },
      { id: 3, title: 'Post 3', content: 'Content of Post 3' },
    ];
    return posts.find(post => post.id === id);
  }
}
