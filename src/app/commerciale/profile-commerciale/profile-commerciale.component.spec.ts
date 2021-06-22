import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileCommercialeComponent } from './profile-commerciale.component';

describe('ProfileCommercialeComponent', () => {
  let component: ProfileCommercialeComponent;
  let fixture: ComponentFixture<ProfileCommercialeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileCommercialeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileCommercialeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
