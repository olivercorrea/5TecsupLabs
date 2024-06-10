import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { UsersModule } from './users/users.module';
import { PostsModule } from './posts/posts.module';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NotFoundComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, UsersModule, PostsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
