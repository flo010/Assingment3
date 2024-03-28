import clsx from 'clsx';
import { message } from "../types/Message";
import './tabs.css';

export default	function Tabs({messages,tabIndex,Tabchange}:{messages:Array<message>,tabIndex:number,Tabchange(id:number): void}) {
    const messagecount = messages.filter((message) => message.read === false).length;


    return (
        <div>
            <button className={clsx('tabs', tabIndex === 0 && 'active' )} onClick={() => Tabchange(0)}>Add Message</button>
            <button className={clsx('tabs', tabIndex === 1 && 'active' )} onClick={() => Tabchange(1)}>View Messages
            {messagecount > 0 && (messagecount > 5 ? '(5+)':"("+messagecount+")")}
            </button>
        </div>
    )
}   