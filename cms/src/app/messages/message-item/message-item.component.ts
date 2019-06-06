import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Message } from '../message.model';
import { Contact } from 'src/app/contacts/contacts.model';
import { ContactService } from 'src/app/contacts/contact.service';

@Component({
  selector: 'cms-message-item',
  templateUrl: './message-item.component.html',
  styleUrls: ['./message-item.component.css']
})
export class MessageItemComponent implements OnInit {
  @Input() message: Message;

  messageSender: string = "";

  constructor(private contactService: ContactService) { }

  ngOnInit() {
    let contact: Contact = this.contactService.getContact(this.message.sender);
    this.messageSender = contact.name;
  }
  
/*
  onSelected() {
    this.messageSelected.emit();
  }
*/
}
