import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaiseNewComponent } from './raise-new.component';

describe('RaiseNewComponent', () => {
  let component: RaiseNewComponent;
  let fixture: ComponentFixture<RaiseNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RaiseNewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RaiseNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
