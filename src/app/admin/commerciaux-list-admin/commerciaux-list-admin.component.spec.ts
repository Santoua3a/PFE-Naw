import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommerciauxListAdminComponent } from './commerciaux-list-admin.component';

describe('CommerciauxListAdminComponent', () => {
  let component: CommerciauxListAdminComponent;
  let fixture: ComponentFixture<CommerciauxListAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommerciauxListAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommerciauxListAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
