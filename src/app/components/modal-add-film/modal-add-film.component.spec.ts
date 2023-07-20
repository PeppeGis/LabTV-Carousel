import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAddFilmComponent } from './modal-add-film.component';

describe('ModalAddFilmComponent', () => {
  let component: ModalAddFilmComponent;
  let fixture: ComponentFixture<ModalAddFilmComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalAddFilmComponent]
    });
    fixture = TestBed.createComponent(ModalAddFilmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
