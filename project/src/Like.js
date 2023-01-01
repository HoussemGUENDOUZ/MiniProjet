import React, { Component } from 'react';
import  IconContext from 'docs'
import { AiFillHeart } from 'react-icons/ai';
class Like extends Component {
  state = { count: 0 };
  clickHandler = () => {
    let newLike = this.state.count + 1;
 
    
    this.setState({
      count: newLike,
      
    });
  };



  
  render() {
    return (


      <div>
        
          <AiFillHeart className ="red_heart "onClick={this.clickHandler} style={{color:"red"}} />
          {this.state.count}
        
      </div>
   
    );
  }
}

export default Like;


