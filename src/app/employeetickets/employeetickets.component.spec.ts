import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeticketsComponent } from './employeetickets.component';

describe('EmployeeticketsComponent', () => {
  let component: EmployeeticketsComponent;
  let fixture: ComponentFixture<EmployeeticketsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeticketsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeticketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
