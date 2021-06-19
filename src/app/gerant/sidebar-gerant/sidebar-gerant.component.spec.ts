import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarGerantComponent } from './sidebar-gerant.component';

describe('SidebarGerantComponent', () => {
  let component: SidebarGerantComponent;
  let fixture: ComponentFixture<SidebarGerantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarGerantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarGerantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
