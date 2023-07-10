import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderPopularComponent } from './slider-popular.component';

describe('SliderPopularComponent', () => {
  let component: SliderPopularComponent;
  let fixture: ComponentFixture<SliderPopularComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SliderPopularComponent]
    });
    fixture = TestBed.createComponent(SliderPopularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
