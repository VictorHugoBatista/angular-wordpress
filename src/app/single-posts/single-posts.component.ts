import { Component, OnInit, Input } from '@angular/core';
import { PostsService } from '../services/wp/posts.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-single-posts',
  templateUrl: './single-posts.component.html',
  styleUrls: ['./single-posts.component.scss']
})
export class SinglePostsComponent implements OnInit {
  @Input() public postType : string;
  @Input() public postSlug : string;
  public post;

  constructor(private service : PostsService) { }

  ngOnInit() {
    this.service.getPost(this.postType, this.postSlug)
      .subscribe(posts => {
        this.post = posts[0];
      });
  }

}
