import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisregisterComponent } from './disregister.component';

describe('DisregisterComponent', () => {
  let component: DisregisterComponent;
  let fixture: ComponentFixture<DisregisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisregisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
