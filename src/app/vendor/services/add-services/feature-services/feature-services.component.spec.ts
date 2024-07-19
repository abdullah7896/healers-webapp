import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureServicesComponent } from './feature-services.component';

describe('FeatureServicesComponent', () => {
  let component: FeatureServicesComponent;
  let fixture: ComponentFixture<FeatureServicesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FeatureServicesComponent]
    });
    fixture = TestBed.createComponent(FeatureServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
