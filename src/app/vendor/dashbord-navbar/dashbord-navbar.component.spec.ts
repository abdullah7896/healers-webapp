import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashbordNavbarComponent } from './dashbord-navbar.component';

describe('DashbordNavbarComponent', () => {
  let component: DashbordNavbarComponent;
  let fixture: ComponentFixture<DashbordNavbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashbordNavbarComponent]
    });
    fixture = TestBed.createComponent(DashbordNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
