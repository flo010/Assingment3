import { message } from "../types/Message";

export default function MessageSummary({messages}:{messages:Array<message>}) {
    
    const count = messages.filter((message) => message.read === false).length;
    return (
        <div className="min-h-[25px]">
            {messages.length === 0 ? <h2>No Messages currently available</h2> :
            count === 1 ? <h2>There is 1 unread message</h2>:
            count > 1 ? <h2>There are {count} unread messages</h2>: 
            null}
        </div>
    )
}