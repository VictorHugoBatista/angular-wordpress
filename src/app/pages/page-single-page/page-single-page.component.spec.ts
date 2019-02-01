import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSinglePageComponent } from './page-single-page.component';

describe('PageSinglePageComponent', () => {
  let component: PageSinglePageComponent;
  let fixture: ComponentFixture<PageSinglePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageSinglePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageSinglePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
