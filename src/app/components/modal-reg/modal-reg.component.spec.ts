import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalRegComponent } from './modal-reg.component';

describe('ModalRegComponent', () => {
  let component: ModalRegComponent;
  let fixture: ComponentFixture<ModalRegComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalRegComponent]
    });
    fixture = TestBed.createComponent(ModalRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
