import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorLoginLandingPageComponent } from './vendor-login-landing-page.component';

describe('VendorLoginLandingPageComponent', () => {
  let component: VendorLoginLandingPageComponent;
  let fixture: ComponentFixture<VendorLoginLandingPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VendorLoginLandingPageComponent]
    });
    fixture = TestBed.createComponent(VendorLoginLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
