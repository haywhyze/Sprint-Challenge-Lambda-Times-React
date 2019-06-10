import React, { Component } from 'react';
import { carouselData } from '../../data'
// Complete this Carousel 
export default class Carousel extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentIndex: 0,
      imageSource: []
    }
  }
  componentDidMount(){
    this.setState({
      imageSource: carouselData,
    })
  }

  leftClick = () => {
    const { currentIndex, imageSource } = this.state;
    if (currentIndex < 1) this.setState({ currentIndex: imageSource.length - 1})
    else this.setState({ currentIndex: this.state.currentIndex - 1})
  }

  rightClick = () => {
    const { currentIndex, imageSource } = this.state;
    if (currentIndex > imageSource.length - 2) this.setState({ currentIndex: 0})
    else this.setState({ currentIndex: this.state.currentIndex + 1})
  }

  selectedImage = () => {
    const { currentIndex, imageSource } = this.state;
    return <img src={imageSource[currentIndex]} style={{display: 'block'}} />
  }
  
  render(){
    return (
      <div className="carousel">
        {this.selectedImage()}
        <div className="left-button" onClick={this.leftClick}>{"<"}</div>
        <div className="right-button" onClick={this.rightClick}>{">"}</div>
      </div>
    )
  }
}