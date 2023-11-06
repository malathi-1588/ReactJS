function Button(props)
{
    return(<button style={{backgroundColor:props.color,fontSize:30}} className="but" type="button" onClick={props.onClick}>{props.val}</button>)
}
export default Button;