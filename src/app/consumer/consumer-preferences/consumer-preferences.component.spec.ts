import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumerPreferencesComponent } from './consumer-preferences.component';

describe('ConsumerPreferencesComponent', () => {
  let component: ConsumerPreferencesComponent;
  let fixture: ComponentFixture<ConsumerPreferencesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsumerPreferencesComponent]
    });
    fixture = TestBed.createComponent(ConsumerPreferencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
