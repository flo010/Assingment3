import { message } from "../types/Message";
import MessageListItem from "./MessageListItem";

type Props = {
    messages:Array<message>
    isRead(id:number): void
}
export default function MessageList({messages,isRead}: Props) {
     const messagesSorted = [...messages].sort((a,b) => b.id - a.id).sort((a,b) => a.read === b.read ? 0 : a.read ? 1 : -1);
    return (
        <ul>
            {messagesSorted.map((message) => <MessageListItem key = {message.id} message={message} isRead={() => isRead(message.id)}></MessageListItem>)}
        </ul>       
    )
}