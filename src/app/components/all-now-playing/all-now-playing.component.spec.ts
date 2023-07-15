import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllNowPlayingComponent } from './all-now-playing.component';

describe('AllNowPlayingComponent', () => {
  let component: AllNowPlayingComponent;
  let fixture: ComponentFixture<AllNowPlayingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllNowPlayingComponent]
    });
    fixture = TestBed.createComponent(AllNowPlayingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
