import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostListComponent } from './post-list/post-list.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'posts', component: PostListComponent },
  { path: 'posts/:id', component: PostDetailsComponent }
];

@NgModule({
  declarations: [
    PostListComponent,
    PostDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PostsModule { }
