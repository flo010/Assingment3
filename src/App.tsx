import { useState } from "react";
import AddMessageView from "./components/AddMessageView";
import MessageView from "./components/MessageView";
import { message } from "./types/Message";
import * as Tabs from '@radix-ui/react-tabs';
import { useTranslation, Trans } from 'react-i18next';


const lngs = {
    en: { nativeName: 'English' },
    de: { nativeName: 'Deutsch' }
  };


export default function App() {
    const [messages,setMessage] = useState(Array<message>());
    const messageCount = messages.filter((message) => message.read === false).length;
    const { t,  i18n } = useTranslation();

    function isRead(id:number) {
        const updatedMessages = messages.map((message) => {
            if(message.id === id) {
                message.read = true;
            }
            return message;
        });
        console.log(updatedMessages);
        setMessage(updatedMessages);
    }

    function AddMessage(subject:string,body:string) {
        const id = messages.length;
        const newMessage = {id,subject,body,read:false};
        const updatedMessages = messages.concat(newMessage);
        setMessage(updatedMessages);
        console.log(updatedMessages);
    }
  return (
    <>
    <div className="row-span-1 h-full bg bg-gray-300">
        <h1 className="text-center font-bold underline text-4xl tracking-tighter shadow-inner mb-10" >
            <Trans i18nKey={"header"}>
            Message Board
            </Trans>
        </h1>
    <Tabs.Root 
    className="min-h-[200px] min-w-[300px] shadow-[0_2px_10px] shadow-blackA2" 
    defaultValue="AddMessage"
    >
        <Tabs.List 
        className=" shrink-0 flex border-b border-mauve6" 
        aria-label="Switch between Add Message and View Messages"
        >
            <Tabs.Trigger 
            className="bg-gray-300 px-5 h-[45px] flex-1 flex items-center justify-center text-[15px] leading-none text-mauve11 select-none first:rounded-tl-md last:rounded-tr-md hover:text-violet11 data-[state=active]:text-violet11 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative data-[state=active]:focus:shadow-[0_0_0_2px] data-[state=active]:focus:shadow-black outline-none cursor-default" 
            value="AddMessage">
                <Trans i18nKey={"tabs.addMessage"}>
                    Add Message
                </Trans>
            </Tabs.Trigger>
            <Tabs.Trigger 
            className="bg-gray-300 px-5 h-[45px] flex-1 flex items-center justify-center text-[15px] leading-none text-mauve11 select-none first:rounded-tl-md last:rounded-tr-md hover:text-violet11 data-[state=active]:text-violet11 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative data-[state=active]:focus:shadow-[0_0_0_2px] data-[state=active]:focus:shadow-black outline-none cursor-default " 
            value="ViewMessages">
                <Trans i18nKey={"tabs.viewMessages"}>
                View Messages {messageCount > 0 && (messageCount > 5 ? '(5+)':"("+messageCount+")")}
                </Trans>
            </Tabs.Trigger>
        </Tabs.List>
    <Tabs.Content className="TabsContent" value="AddMessage">
        <AddMessageView onSubmit={AddMessage}></AddMessageView>
    </Tabs.Content>
    <Tabs.Content className="TabsContent" value="ViewMessages">
        <MessageView messages={messages} isRead={isRead}></MessageView>
    </Tabs.Content>
  </Tabs.Root>
  </div>
  <div className="absolute top-0 right-0">
          {Object.keys(lngs).map((lng) => (
            <button key={lng} style={{ fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal' }} type="submit" onClick={() => i18n.changeLanguage(lng)}>
              {lngs[lng].nativeName}
            </button>
          ))}
    </div>
    </>
    );
}
