import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockInWareHouseComponent } from './stock-in-ware-house.component';

describe('StockInWareHouseComponent', () => {
  let component: StockInWareHouseComponent;
  let fixture: ComponentFixture<StockInWareHouseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockInWareHouseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StockInWareHouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
