import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaceOrderComponent } from './purchace-order.component';

describe('PurchaceOrderComponent', () => {
  let component: PurchaceOrderComponent;
  let fixture: ComponentFixture<PurchaceOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurchaceOrderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurchaceOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
