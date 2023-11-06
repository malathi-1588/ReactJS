function Textbox(props)
{
    return (
        <>
        <input type={props.val} placeholder={props.type} name={props.type} onChange={props.onChange} value={props.value}required />
        </>
    );
}
export default Textbox;