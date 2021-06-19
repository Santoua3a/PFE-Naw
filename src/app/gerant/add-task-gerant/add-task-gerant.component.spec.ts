import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTaskGerantComponent } from './add-task-gerant.component';

describe('AddTaskGerantComponent', () => {
  let component: AddTaskGerantComponent;
  let fixture: ComponentFixture<AddTaskGerantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTaskGerantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTaskGerantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
