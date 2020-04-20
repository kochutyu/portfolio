import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterSmallDesctopAndMobileTabComponent } from './filter-small-desctop-and-mobile-tab.component';

describe('FilterSmallDesctopAndMobileTabComponent', () => {
  let component: FilterSmallDesctopAndMobileTabComponent;
  let fixture: ComponentFixture<FilterSmallDesctopAndMobileTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterSmallDesctopAndMobileTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterSmallDesctopAndMobileTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
