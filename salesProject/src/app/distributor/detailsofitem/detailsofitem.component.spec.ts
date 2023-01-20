import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsofitemComponent } from './detailsofitem.component';

describe('DetailsofitemComponent', () => {
  let component: DetailsofitemComponent;
  let fixture: ComponentFixture<DetailsofitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsofitemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsofitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
