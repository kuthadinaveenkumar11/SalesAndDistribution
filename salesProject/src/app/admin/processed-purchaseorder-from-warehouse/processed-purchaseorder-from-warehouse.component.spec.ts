import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessedPurchaseorderFromWarehouseComponent } from './processed-purchaseorder-from-warehouse.component';

describe('ProcessedPurchaseorderFromWarehouseComponent', () => {
  let component: ProcessedPurchaseorderFromWarehouseComponent;
  let fixture: ComponentFixture<ProcessedPurchaseorderFromWarehouseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcessedPurchaseorderFromWarehouseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProcessedPurchaseorderFromWarehouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
