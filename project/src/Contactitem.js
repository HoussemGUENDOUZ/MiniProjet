import React, {Component} from "react";

class Contactitem extends Component{
    render(){
        return(
            <div className="col-md-4 col-sm-6">
                <div className="card mb-2">
                    <div className="card-header justify-content-center">
                        <img style={{maxWidth: '100%'}} className="img-fluid" src="https://picsum.photos/900" alt={this.props.name} />
                    </div>
                    <div className="card-body">
                        <h2>{this.props.name}</h2>
                        <h5>{this.props.phone}</h5>
                        <div>{this.props.email}</div>
                    </div>
                </div>
            </div>
           )
    }
}
export default Contactitem