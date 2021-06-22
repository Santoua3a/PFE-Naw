import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileGerantComponent } from './profile-gerant.component';

describe('ProfileGerantComponent', () => {
  let component: ProfileGerantComponent;
  let fixture: ComponentFixture<ProfileGerantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileGerantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileGerantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
