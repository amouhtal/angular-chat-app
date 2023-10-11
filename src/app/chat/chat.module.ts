import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponent } from './chat.component';
import { ContactChatPanelComponent } from './contact-chat-panel/contact-chat-panel.component';
import { ContactChatViewComponent } from './contact-chat-view/contact-chat-view.component';
import { ContactChatDashboardComponent } from './contact-chat-panel/contact-chat-dashboard/contact-chat-dashboard.component';
import { SearchBoxComponent } from './contact-chat-panel/search-box/search-box.component';



@NgModule({
  declarations: [
    ChatComponent,
    ContactChatPanelComponent,
    ContactChatViewComponent,
    ContactChatDashboardComponent,
    SearchBoxComponent,
  ],
  imports: [
    CommonModule,
    
  ],
  exports: [
    ChatComponent
  ]
})
export class ChatModule { }
