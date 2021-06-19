import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksCommercialeComponent } from './tasks-commerciale.component';

describe('TasksCommercialeComponent', () => {
  let component: TasksCommercialeComponent;
  let fixture: ComponentFixture<TasksCommercialeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TasksCommercialeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TasksCommercialeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
