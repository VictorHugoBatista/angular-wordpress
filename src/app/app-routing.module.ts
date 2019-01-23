import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagePostsComponent } from './page-posts/page-posts.component';
import { PagePagesComponent } from './page-pages/page-pages.component';
import { PageSinglePostComponent } from './page-single-post/page-single-post.component';
import { PageSinglePageComponent } from './page-single-page/page-single-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: 'posts',
    component: PagePostsComponent,
  },
  {
    path: 'pages',
    component: PagePagesComponent,
  },
  {
    path: 'posts/:slug',
    component: PageSinglePostComponent,
  },
  {
    path: 'pages/:slug',
    component: PageSinglePageComponent,
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
