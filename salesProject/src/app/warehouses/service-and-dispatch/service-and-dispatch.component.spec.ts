import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceAndDispatchComponent } from './service-and-dispatch.component';

describe('ServiceAndDispatchComponent', () => {
  let component: ServiceAndDispatchComponent;
  let fixture: ComponentFixture<ServiceAndDispatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceAndDispatchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceAndDispatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
