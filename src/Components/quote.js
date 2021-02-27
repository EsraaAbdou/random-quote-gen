function Quote(props){
  return (
    <div>
      <h1 id="text" className="mt-0">
        <i className="fas fa-quote-left"></i> {props.quote}
      </h1>
      <p id="author" className="text-right mb-5">- {props.author}</p>         
    </div>
  );
}
export default Quote;