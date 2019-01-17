import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagePostsComponent } from './page-posts/page-posts.component';

const routes: Routes = [
  {
    path: 'posts',
    component: PagePostsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
