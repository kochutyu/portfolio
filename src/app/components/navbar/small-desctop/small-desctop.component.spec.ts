import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallDesctopComponent } from './small-desctop.component';

describe('SmallDesctopComponent', () => {
  let component: SmallDesctopComponent;
  let fixture: ComponentFixture<SmallDesctopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmallDesctopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmallDesctopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
