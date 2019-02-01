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
    this.paginationItems = Array(this.totalPages).fill(0).map((_, item) => {
      return {
        page_number: item + 1,
        active: item + 1 === this.currentPage,
      } ;
    });
  }

}
