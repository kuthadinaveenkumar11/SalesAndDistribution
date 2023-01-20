import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalSalesEodComponent } from './total-sales-eod.component';

describe('TotalSalesEodComponent', () => {
  let component: TotalSalesEodComponent;
  let fixture: ComponentFixture<TotalSalesEodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalSalesEodComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TotalSalesEodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
