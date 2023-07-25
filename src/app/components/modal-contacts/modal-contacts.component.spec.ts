import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalContactsComponent } from './modal-contacts.component';

describe('ModalContactsComponent', () => {
  let component: ModalContactsComponent;
  let fixture: ComponentFixture<ModalContactsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalContactsComponent]
    });
    fixture = TestBed.createComponent(ModalContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
