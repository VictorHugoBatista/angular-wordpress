import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListPostsComponent } from './list-posts/list-posts.component';
import { PagePostsComponent } from './page-posts/page-posts.component';

@NgModule({
  declarations: [
    AppComponent,
    ListPostsComponent,
    PagePostsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
