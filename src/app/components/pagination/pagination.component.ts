import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  @Input() public currentPage : Number;
  @Input() public startTotalPages : Observable<any>;
  public startTotalPagesSubscription : any;
  public totalPages : Number;
  public paginationItems : Array<Object> = [];

  constructor() { }

  ngOnInit() {
    this.startTotalPagesSubscription = this.startTotalPages.subscribe(totalPages => {
      this.totalPages = totalPages;
      this.paginationItems = Array(this.totalPages).fill(0).map((_, item) => {
        return {
          page_number: item + 1,
          active: item + 1 === this.currentPage,
        } ;
      });
    });
  }
}
