import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffecTaskGerantComponent } from './affec-task-gerant.component';

describe('AffecTaskGerantComponent', () => {
  let component: AffecTaskGerantComponent;
  let fixture: ComponentFixture<AffecTaskGerantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffecTaskGerantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AffecTaskGerantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
