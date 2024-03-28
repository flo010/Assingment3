export default function TextInput({id,DisplayText}) {
    return (
        <input name={id} id={id} type="text" placeholder={DisplayText} required/>
    )
}