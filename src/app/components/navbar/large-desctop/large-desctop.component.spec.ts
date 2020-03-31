import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LargeDesctopComponent } from './large-desctop.component';

describe('LargeDesctopComponent', () => {
  let component: LargeDesctopComponent;
  let fixture: ComponentFixture<LargeDesctopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LargeDesctopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LargeDesctopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
