import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskListGerantComponent } from './task-list-gerant.component';

describe('TaskListGerantComponent', () => {
  let component: TaskListGerantComponent;
  let fixture: ComponentFixture<TaskListGerantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskListGerantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskListGerantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
