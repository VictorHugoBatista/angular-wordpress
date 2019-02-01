import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagePagesComponent } from './page-pages.component';

describe('PagePagesComponent', () => {
  let component: PagePagesComponent;
  let fixture: ComponentFixture<PagePagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagePagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagePagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
