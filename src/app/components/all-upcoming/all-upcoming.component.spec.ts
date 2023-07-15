import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllUpcomingComponent } from './all-upcoming.component';

describe('AllUpcomingComponent', () => {
  let component: AllUpcomingComponent;
  let fixture: ComponentFixture<AllUpcomingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllUpcomingComponent]
    });
    fixture = TestBed.createComponent(AllUpcomingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});