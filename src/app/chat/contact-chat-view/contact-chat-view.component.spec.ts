import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactChatViewComponent } from './contact-chat-view.component';

describe('ContactChatViewComponent', () => {
  let component: ContactChatViewComponent;
  let fixture: ComponentFixture<ContactChatViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactChatViewComponent]
    });
    fixture = TestBed.createComponent(ContactChatViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
