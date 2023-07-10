import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderUpcomingComponent } from './slider-upcoming.component';

describe('SliderUpcomingComponent', () => {
  let component: SliderUpcomingComponent;
  let fixture: ComponentFixture<SliderUpcomingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SliderUpcomingComponent]
    });
    fixture = TestBed.createComponent(SliderUpcomingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
