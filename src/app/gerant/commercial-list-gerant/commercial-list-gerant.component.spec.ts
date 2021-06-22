import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommercialListGerantComponent } from './commercial-list-gerant.component';

describe('CommercialListGerantComponent', () => {
  let component: CommercialListGerantComponent;
  let fixture: ComponentFixture<CommercialListGerantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommercialListGerantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommercialListGerantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
