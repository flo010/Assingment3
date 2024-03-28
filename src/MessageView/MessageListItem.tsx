import { message } from "../types/Message";

export default function MessageListItem({message,isRead}:{message:message,isRead(): void}) {
    
    return (
        <li>
            <button {...(message.read === true && {disabled: true})} className={message.read === false ? `hover:bg-gray-100 p-2 w-full border-l-4 border-red-700`:'w-full border-l-4 border-gray-600' } onClick={isRead}>
                <p>{message.subject}</p>
                <p>{message.body}</p>
            </button>
        </li>
    )
}