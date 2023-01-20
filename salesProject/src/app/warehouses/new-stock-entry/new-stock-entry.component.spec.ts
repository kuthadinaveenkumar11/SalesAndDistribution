import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewStockEntryComponent } from './new-stock-entry.component';

describe('NewStockEntryComponent', () => {
  let component: NewStockEntryComponent;
  let fixture: ComponentFixture<NewStockEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewStockEntryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewStockEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
