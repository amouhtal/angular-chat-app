import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactChatPanelComponent } from './contact-chat-panel.component';

describe('ContactChatPanelComponent', () => {
  let component: ContactChatPanelComponent;
  let fixture: ComponentFixture<ContactChatPanelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactChatPanelComponent]
    });
    fixture = TestBed.createComponent(ContactChatPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
