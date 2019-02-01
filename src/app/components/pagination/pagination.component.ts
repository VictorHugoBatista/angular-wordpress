import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  @Input() public totalPages : Number;
  @Input() public currentPage : Number;
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
