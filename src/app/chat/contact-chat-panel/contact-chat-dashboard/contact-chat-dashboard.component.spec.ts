import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactChatDashboardComponent } from './contact-chat-dashboard.component';

describe('ContactChatDashboardComponent', () => {
  let component: ContactChatDashboardComponent;
  let fixture: ComponentFixture<ContactChatDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactChatDashboardComponent]
    });
    fixture = TestBed.createComponent(ContactChatDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
