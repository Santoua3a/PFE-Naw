import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileClComponent } from './profile-cl.component';

describe('ProfileClComponent', () => {
  let component: ProfileClComponent;
  let fixture: ComponentFixture<ProfileClComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileClComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileClComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
