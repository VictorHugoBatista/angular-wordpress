import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page-single-page',
  templateUrl: './page-single-page.component.html',
  styleUrls: ['./page-single-page.component.scss']
})
export class PageSinglePageComponent implements OnInit {
  private postSlug : string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.postSlug = this.route.snapshot.paramMap.get('slug');
  }

}
