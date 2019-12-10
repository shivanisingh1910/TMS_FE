import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewticketdetailsComponent } from './newticketdetails.component';

describe('NewticketdetailsComponent', () => {
  let component: NewticketdetailsComponent;
  let fixture: ComponentFixture<NewticketdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewticketdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewticketdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
