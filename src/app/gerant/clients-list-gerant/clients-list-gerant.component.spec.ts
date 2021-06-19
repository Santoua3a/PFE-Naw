import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsListGerantComponent } from './clients-list-gerant.component';

describe('ClientsListGerantComponent', () => {
  let component: ClientsListGerantComponent;
  let fixture: ComponentFixture<ClientsListGerantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientsListGerantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientsListGerantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
