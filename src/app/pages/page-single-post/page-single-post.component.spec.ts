import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSinglePostComponent } from './page-single-post.component';

describe('PageSinglePostComponent', () => {
  let component: PageSinglePostComponent;
  let fixture: ComponentFixture<PageSinglePostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageSinglePostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageSinglePostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
