import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeListAdminComponent } from './employe-list-admin.component';

describe('EmployeListAdminComponent', () => {
  let component: EmployeListAdminComponent;
  let fixture: ComponentFixture<EmployeListAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeListAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeListAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
