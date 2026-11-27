import { Component, DestroyRef, signal } from '@angular/core';

import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

import { MessageService } from '.';

import { Message } from '../message.model';

@Component({
  imports: [],

  selector: 'app-message',

  styleUrl: './message.css',

  templateUrl: './message.html',
})
export class MessageComponent {
  readonly lastMessage = signal<Message | undefined>(undefined);

  constructor(messageService: MessageService, destroyRef: DestroyRef) {
    messageService.messages

      .pipe(takeUntilDestroyed(destroyRef))

      .subscribe((msg: Message | undefined) => this.lastMessage.set(msg));
  }
}
