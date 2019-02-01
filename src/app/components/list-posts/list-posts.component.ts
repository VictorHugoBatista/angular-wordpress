import { Component, OnInit, Input } from '@angular/core';
import { PostsService } from '../../services/wp/posts.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-posts',
  templateUrl: './list-posts.component.html',
  styleUrls: ['./list-posts.component.scss']
})
export class ListPostsComponent implements OnInit {
  @Input() public postType : string;
  @Input() public perPage : Number;
  public posts : Array<any>;

  constructor(private service : PostsService) {}

  ngOnInit() {
    this.service.getPosts(this.postType, {
      per_page: this.perPage,
    }).subscribe(posts => this.posts = posts);
  }
}
