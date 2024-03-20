import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileDetailingComponent } from './profile-detailing.component';

describe('ProfileDetailingComponent', () => {
  let component: ProfileDetailingComponent;
  let fixture: ComponentFixture<ProfileDetailingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileDetailingComponent]
    });
    fixture = TestBed.createComponent(ProfileDetailingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
