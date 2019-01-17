import { Component, OnInit } from '@angular/core';
import { ListPostsService } from '../list-posts/list-posts.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-pages',
  templateUrl: './list-pages.component.html',
  styleUrls: ['./list-pages.component.scss']
})
export class ListPagesComponent implements OnInit {
  public posts : Observable<any[]>;

  constructor(private service : ListPostsService) {
    this.posts = this.service.getPosts('posts', {
      per_page: 4
    });
  }

  ngOnInit() {
  }

}
