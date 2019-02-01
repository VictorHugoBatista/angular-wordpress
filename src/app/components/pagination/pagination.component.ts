import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  public paginationItems : Array<Object> = [];

  constructor() { }

  ngOnInit() {
    this.paginationItems = [
      {
        page_number: 1,
        active: false,
      },
      {
        page_number: 2,
        active: true,
      },
    ];
  }

}
