function Button(props){
  return (
    <div>
      <button style={{backgroundColor: props.mainColor}} id={props.id} onClick={()=>{props.clickHandler()}}>
        {props.text}
      </button>
    </div>
  );
}
export default Button;