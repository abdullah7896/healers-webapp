import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingPagEComponent } from './landing-pag-e.component';

describe('LandingPagEComponent', () => {
  let component: LandingPagEComponent;
  let fixture: ComponentFixture<LandingPagEComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LandingPagEComponent]
    });
    fixture = TestBed.createComponent(LandingPagEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
