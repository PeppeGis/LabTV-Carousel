import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSearchResultsComponent } from './card-search-results.component';

describe('CardSearchResultsComponent', () => {
  let component: CardSearchResultsComponent;
  let fixture: ComponentFixture<CardSearchResultsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardSearchResultsComponent]
    });
    fixture = TestBed.createComponent(CardSearchResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
