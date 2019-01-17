import { Component, OnInit, Input } from '@angular/core';
import { ListPostsService } from './list-posts.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-posts',
  templateUrl: './list-posts.component.html',
  styleUrls: ['./list-posts.component.scss']
})
export class ListPostsComponent implements OnInit {
  @Input() public postType : string;
  @Input() public perPage : Number;
  public posts : Observable<any[]>;

  constructor(private service : ListPostsService) {}

  ngOnInit() {
    this.posts = this.service.getPosts(this.postType, {
      per_page: this.perPage,
    });
  }
}
