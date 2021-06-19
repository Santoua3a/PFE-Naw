import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackClientAdminComponent } from './feedback-client-admin.component';

describe('FeedbackClientAdminComponent', () => {
  let component: FeedbackClientAdminComponent;
  let fixture: ComponentFixture<FeedbackClientAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedbackClientAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedbackClientAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
