import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorsigninComponent } from './vendorsignin.component';

describe('VendorsigninComponent', () => {
  let component: VendorsigninComponent;
  let fixture: ComponentFixture<VendorsigninComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VendorsigninComponent]
    });
    fixture = TestBed.createComponent(VendorsigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
