import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  @Input() public startTotalPages : Observable<any>;
  public currentPage : any = 1;
  public totalPages : Number;
  public paginationItems : Array<Object> = [];
  public startTotalPagesSubscription : any;

  constructor() { }

  ngOnInit() {
    this.startTotalPagesSubscription =
      this.startTotalPages.subscribe(totalPages => {
        this.totalPages = totalPages;
        this.regeneratePagination();
      });
  }

  public onNumberClick(newPageNumber) {
    this.currentPage = newPageNumber;
    this.regeneratePagination();
  }

  private regeneratePagination() {
    let pages = [];

    // Previous pages.
    for (let i = this.currentPage - 1; i >= this.currentPage - 3 && i > 0; i--) {
      pages.push(this.generatePageItem(i));
    }
    pages.reverse();

    // Current page, marked.
    pages.push(this.generatePageItem(this.currentPage, true));

    // Next pages.
    for (let i = this.currentPage + 1;  
      i <= this.currentPage + 3 && i < this.totalPages; i++) {
      pages.push(this.generatePageItem(i));
    }

    // Last page.
    if (this.currentPage < this.totalPages) {
      pages.push(this.generatePageItem(this.totalPages));
    }

    this.paginationItems = pages;
  }

  private generatePageItem(pageNumber, hasActiveClass = false) {
    return {
      page_number: pageNumber,
      active: hasActiveClass,
    };
  }
}
