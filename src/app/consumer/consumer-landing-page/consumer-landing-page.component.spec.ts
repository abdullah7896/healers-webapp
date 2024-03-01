import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumerLandingPageComponent } from './consumer-landing-page.component';

describe('ConsumerLandingPageComponent', () => {
  let component: ConsumerLandingPageComponent;
  let fixture: ComponentFixture<ConsumerLandingPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsumerLandingPageComponent]
    });
    fixture = TestBed.createComponent(ConsumerLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
