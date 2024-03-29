import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommercialeComponent } from './commerciale.component';

describe('CommercialeComponent', () => {
  let component: CommercialeComponent;
  let fixture: ComponentFixture<CommercialeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommercialeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommercialeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
