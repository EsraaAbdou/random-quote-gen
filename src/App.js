import React from 'react';
import './App.css';
import Quote from './Components/quote';
import Button from './Components/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      quote: "",
      author: "",
      mainColor: "#fff"
    }
    this.clickHandler = this.clickHandler.bind(this);
    document.body.style.transition = "all 2s ease";
  }

  componentDidMount() {
    this.clickHandler();
  }

  getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  clickHandler() {
     fetch("https://api.quotable.io/random")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            quote: result.content,
            author: result.author,
            mainColor: this.getRandomColor()
          });
          document.body.style.backgroundColor = this.state.mainColor;
        },
        (error) => {
          console.log("error")
        }
      )
  }

  render(){
    const twitterLink = "https://twitter.com/intent/tweet?hashtags=quotes&text=" + this.state.quote.split(" ").join("%20") +"%20"+ this.state.author.split(" ").join("%20");
    return (
      <div style={{color: this.state.mainColor}} id="quote-box">
        <Quote quote={this.state.quote} author={this.state.author} />
        <Button mainColor={this.state.mainColor} clickHandler={this.clickHandler} id="new-quote" text="New Quote" />
        <a href={twitterLink} id="tweet-quote">
          <Button mainColor={this.state.mainColor} text={<FontAwesomeIcon icon={faTwitter} />} />
        </a>
      </div>
    );
  }
}

export default App;


