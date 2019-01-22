import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListPostsComponent } from './list-posts/list-posts.component';
import { PagePostsComponent } from './page-posts/page-posts.component';
import { PagePagesComponent } from './page-pages/page-pages.component';
import { PageSinglePostComponent } from './page-single-post/page-single-post.component';
import { SinglePostsComponent } from './single-posts/single-posts.component';

@NgModule({
  declarations: [
    AppComponent,
    ListPostsComponent,
    PagePostsComponent,
    PagePagesComponent,
    PageSinglePostComponent,
    SinglePostsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
