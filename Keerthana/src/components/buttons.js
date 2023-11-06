function Submit(props) {
  return (
    <button type={props.type} onClick={props.onClick}>
      Submit
    </button>
  );
}

export default Submit;
