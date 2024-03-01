import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileAppSectionComponent } from './mobile-app-section.component';

describe('MobileAppSectionComponent', () => {
  let component: MobileAppSectionComponent;
  let fixture: ComponentFixture<MobileAppSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MobileAppSectionComponent]
    });
    fixture = TestBed.createComponent(MobileAppSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
