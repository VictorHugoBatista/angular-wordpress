import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagePostsComponent } from './page-posts/page-posts.component';
import { PagePagesComponent } from './page-pages/page-pages.component';

const routes: Routes = [
  {
    path: 'posts',
    component: PagePostsComponent,
  },
  {
    path: 'pages',
    component: PagePagesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
