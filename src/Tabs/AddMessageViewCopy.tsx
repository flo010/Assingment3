import { FormEvent, useRef } from "react";
import Button from "../AddMessageView/Button";
import TextInput from "../AddMessageView/TextInput";

export default function AddMessageViewCopy({onSubmit}:{onSubmit:(subject:string,body:string) => void}) {
    const subjectRefrence = useRef(null);
    function onFormSubmit(event: FormEvent<HTMLFormElement>) {
        
        console.log('form submitted');
        event.preventDefault();
        const form = event.currentTarget;
        const data = new FormData(form);
        const subject = data.get('subject') as string;
        const body = data.get('body') as string;
        
        onSubmit(subject, body);
        subjectRefrence.current.focus();
        form.reset();
      }
    
    return (
        <form onSubmit={onFormSubmit}>
            <input name="subject" id="subject" type="text" placeholder="Subject" required ref={subjectRefrence}/>
            <TextInput id="body" DisplayText="Message"></TextInput>
            <Button name="Add Message" DisplayText="Add Message"></Button>
        </form>       
    )
}