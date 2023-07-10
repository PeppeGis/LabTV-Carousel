import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderNowPlayingComponent } from './slider-now-playing.component';

describe('SliderNowPlayingComponent', () => {
  let component: SliderNowPlayingComponent;
  let fixture: ComponentFixture<SliderNowPlayingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SliderNowPlayingComponent]
    });
    fixture = TestBed.createComponent(SliderNowPlayingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
