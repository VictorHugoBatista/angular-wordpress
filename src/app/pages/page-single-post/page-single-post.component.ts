import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page-single-post',
  templateUrl: './page-single-post.component.html',
  styleUrls: ['./page-single-post.component.scss']
})
export class PageSinglePostComponent implements OnInit {
  private postSlug : string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.postSlug = this.route.snapshot.paramMap.get('slug');
    // take post on API and add to attribute used on component html
  }

}
