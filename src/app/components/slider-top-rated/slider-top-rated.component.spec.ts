import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderTopRatedComponent } from './slider-top-rated.component';

describe('SliderTopRatedComponent', () => {
  let component: SliderTopRatedComponent;
  let fixture: ComponentFixture<SliderTopRatedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SliderTopRatedComponent]
    });
    fixture = TestBed.createComponent(SliderTopRatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
