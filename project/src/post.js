import React, {Component} from "react";
import Like from "./like";
class Post extends Component{
    render(){
        return(
            <div className="col-md-4 col-sm-6">
                <div className="card mb-2">
                    <div className="card-header justify-content-center">
                        <h2>{this.props.subject}</h2>
                        <i className="fa-regular fa-heart"></i>
                    </div>
                    <div className="card-body">
                        <h5>{this.props.description}</h5>
                        <div>{this.props.date}</div>
                         <Like />
                    </div>
                </div>
            </div>
           )
    }
}
export default Post
