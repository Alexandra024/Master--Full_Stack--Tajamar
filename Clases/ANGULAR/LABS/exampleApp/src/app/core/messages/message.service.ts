/* export class MessageService {
    messages: Observable<Message> = new ReplaySubject<Message>(1);

    reportMessage(msg: Message) {
        (this.messages as Subject<Message>).next(msg);
    }

} */
export class MessageService {
    private readonly messageSubject = new ReplaySubject<Message | undefined>(1);
    messages: Observable<Message | undefined> = this.messageSubject.asObservable();

    reportMessage(msg: Message) {
        this.messageSubject.next(msg);
    }

    clearMessage() {
        this.messageSubject.next(undefined);
    }

}
