export default function Button({name,DisplayText}) {
    return (
        <button name={DisplayText} id={name} type="submit">{DisplayText}</button>
    )
}