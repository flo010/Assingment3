import { FormEvent, useRef} from "react";
import * as Form from '@radix-ui/react-form';

export default function AddMessageView({onSubmit}:{onSubmit:(subject:string,body:string) => void}) {
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
        <Form.Root onSubmit={onFormSubmit}>
        <Form.Field className="grid mb-[10px]" name = "subject" ref={subjectRefrence}>
            <div>
                <Form.Label className="text-gray-800">Subject</Form.Label>
                <Form.Message className="text-red-600" match="valueMissing" >Please enter a Subject</Form.Message>
            </div>
            <Form.Control asChild>
                <input name="subject" className="bg-gray-300" type="text" required placeholder="Subject"/>
            </Form.Control>
        </Form.Field>
    
        <Form.Field className="grid mb-[10px]" name="question">
            <div className="flex items-baseline justify-between bg-gray-300">
                <Form.Label className="text-gray-800">Body</Form.Label>
                <Form.Message className="text-red-600" match="valueMissing">
                Please Enter Something in the Body
                </Form.Message>
            </div>
      <Form.Control asChild className="grid mb-[10px]">
        <input name = "body" className="bg-gray-300" type="text" required placeholder="Message"/>
      </Form.Control>
    </Form.Field>
    <Form.Submit asChild>
      <button className="hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow w-full" type="submit">
        Add Message
      </button>
    </Form.Submit>
  </Form.Root>    
    )
}