import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendFeedbackClientComponent } from './send-feedback-client.component';

describe('SendFeedbackClientComponent', () => {
  let component: SendFeedbackClientComponent;
  let fixture: ComponentFixture<SendFeedbackClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SendFeedbackClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SendFeedbackClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
