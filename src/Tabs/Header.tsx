import { message } from "../types/Message";
import Tabs from "./Tabs";

export default function Header({messages,tabIndex,Tabchange}:{messages:Array<message>,tabIndex:number,Tabchange(id:number): void}) {
    return (
        <div>
            <h1 className="text-10xl text-center font-bold underline">Message Board</h1>
            <Tabs messages={messages} tabIndex={tabIndex} Tabchange={Tabchange}></Tabs>
        </div>
    )
}