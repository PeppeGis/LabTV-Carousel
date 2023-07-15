import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllTopRatedComponent } from './all-top-rated.component';

describe('AllTopRatedComponent', () => {
  let component: AllTopRatedComponent;
  let fixture: ComponentFixture<AllTopRatedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllTopRatedComponent]
    });
    fixture = TestBed.createComponent(AllTopRatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
