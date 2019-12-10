import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusticketsComponent } from './statustickets.component';

describe('StatusticketsComponent', () => {
  let component: StatusticketsComponent;
  let fixture: ComponentFixture<StatusticketsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatusticketsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusticketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
