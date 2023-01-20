import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAndEditProductCatalogAndPriceComponent } from './view-and-edit-product-catalog-and-price.component';

describe('ViewAndEditProductCatalogAndPriceComponent', () => {
  let component: ViewAndEditProductCatalogAndPriceComponent;
  let fixture: ComponentFixture<ViewAndEditProductCatalogAndPriceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAndEditProductCatalogAndPriceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewAndEditProductCatalogAndPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
