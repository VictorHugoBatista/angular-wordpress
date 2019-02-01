import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagePostsComponent } from './pages/page-posts/page-posts.component';
import { PagePagesComponent } from './pages/page-pages/page-pages.component';
import { PageSinglePostComponent } from './pages/page-single-post/page-single-post.component';
import { PageSinglePageComponent } from './pages/page-single-page/page-single-page.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

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
