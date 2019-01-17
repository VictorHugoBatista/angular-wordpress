import { Component, OnInit, Input } from '@angular/core';
import { ListPostsService } from './list-posts.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-posts',
  templateUrl: './list-posts.component.html',
  styleUrls: ['./list-posts.component.scss']
})
export class ListPostsComponent implements OnInit {
  public posts : Observable<any[]>;
  @Input() postType;

  constructor(private service : ListPostsService) {
    this.posts = this.service.getPosts(this.postType, {
      per_page: 4
    });
  }

  ngOnInit() {
  }

}
