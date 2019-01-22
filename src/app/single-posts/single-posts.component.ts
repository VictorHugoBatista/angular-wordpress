import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-single-posts',
  templateUrl: './single-posts.component.html',
  styleUrls: ['./single-posts.component.scss']
})
export class SinglePostsComponent implements OnInit {
  @Input() public postSlug : string;

  constructor() { }

  ngOnInit() {
    console.log(this.postSlug);
  }

}
