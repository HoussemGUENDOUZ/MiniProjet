import React, { Component } from 'react';
class Like extends Component {
  constructor(){
    super();
    this.state = {
      likeclass : "fa-regular fa-heart text-danger",
      count:Math.round(Math.random() * 20),
    }
  }
  clickHandler = () => {
    let newLike = this.state.count + 1;
    this.setState({
      likeclass : "fa-solid fa-heart text-danger",
      count: newLike,
    });
    setTimeout( () => 
        this.setState({
            likeclass : "fa-regular fa-heart text-danger" , 
        }),1000);
  };
  render() {
    return (
      <div>
        <i className={this.state.likeclass} onClick={this.clickHandler} > {this.state.count} </i>  
      </div>
    );
  }
}

export default Like;


