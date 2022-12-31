import React , { Component } from "react";
class Home extends Component {
  render(){
    return (
        <div className='mx-2 row'>
          <div id='saluate' className='col-6 my-4'>
          <h1 className='my-5'>Hello and welcome to my homepage</h1>
          <h2 className='my-5'>I am Mr. Guendouz Houssem</h2>
          <p className='mt-5 mb-2'><strong>Note : </strong>you can browse the page with the links in the navbar</p>
          </div>
          <img id='person'className='col-6 img-fluid' src = "./imgs/person.png" alt=""/>
        </div>
    );
  }
  
}

export default Home;
