import MessageList from "./MessageList";
import MessageSummary from "./MessageSummary";
import { message } from "../types/Message";

export default function MessageView({messages,isRead}:{messages:Array<message>,isRead(id:number): void}) {
    return (
        <div>
            <MessageSummary messages={messages}></MessageSummary>
            <MessageList messages={messages} isRead={isRead}></MessageList>
        </div>
    )
}