import React, { Component } from 'react';
import './App.css';
class App extends Component {
  constructor(props) {
    super(props);
    this.images = [];
    this.state = {
      ready: false
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/photos").then(response => response.json()).then(jsonData => {
      this.images = jsonData.slice(20, 30);
      this.setState({ready: true});
    });
  }

  slide = (direction) => {
    let allWidth=0;
    let images=document.getElementsByClassName('images')
    for(let i=0; i<images.length; i++){
      allWidth+=images[i].offsetWidth
    }
    console.log(allWidth)
    let currentPosition = +this.slider.style.marginLeft.slice(0, -2);
    console.log(allWidth, currentPosition, window.innerWidth )
    if(allWidth+currentPosition > window.innerWidth && direction === "left"){
      this.slider.style.marginLeft =  currentPosition - 300 + "px";
    }
    if (currentPosition < 0 && direction === "right") {
      this.slider.style.marginLeft =  currentPosition + 300 + "px";
    }
  }

  render() {
    return (
      <div style={styles.container} className="container"> 
        {
          this.state.ready ? (
            <>
              <button style={styles.button} onClick={e => this.slide("right")} className="button1">Left</button>
              <div style={styles.slider} ref={element => this.slider = element}>
                {
                  this.images.map((image,i) => <img key={image.id} alt={image.title} src={image.url} title={image.title}
                  className="images"
                  />)
                }
              </div>
              <button  style={styles.button} onClick={e => this.slide("left")}>Right</button>
            </>
          ) : null
        }
      </div>
    );
  }
}
export default App;

const styles = {
  container: {
    display: "flex",
    height: "100vh",
    width: "100vw",
    alignItems: "center"
  },
  slider: {
    display: "flex",
    overflow: "hidden",
    marginLeft: 0,
    transition: "margin 0.3s ease-out"
  },
  button: {
    height: "100%",
    zIndex: 1
  }
};