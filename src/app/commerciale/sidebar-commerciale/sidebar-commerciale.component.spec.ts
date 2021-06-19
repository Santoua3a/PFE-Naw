import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarCommercialeComponent } from './sidebar-commerciale.component';

describe('SidebarCommercialeComponent', () => {
  let component: SidebarCommercialeComponent;
  let fixture: ComponentFixture<SidebarCommercialeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarCommercialeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarCommercialeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
