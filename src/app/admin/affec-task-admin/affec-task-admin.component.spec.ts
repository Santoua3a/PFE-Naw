import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffecTaskAdminComponent } from './affec-task-admin.component';

describe('AffecTaskAdminComponent', () => {
  let component: AffecTaskAdminComponent;
  let fixture: ComponentFixture<AffecTaskAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffecTaskAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AffecTaskAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
