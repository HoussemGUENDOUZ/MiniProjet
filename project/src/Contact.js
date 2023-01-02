import React,{Component} from "react";
import { Link, Outlet } from "react-router-dom";
class Contact extends Component{
    render(){
        return(
            <div>
                <div className="my-4 d-flex justify-content-center">
                    <Link to="ContactList" className="mx-3 btn btn-primary">Display contacts</Link>
                    <Link to="CreateContact" className="mx-3 btn btn-primary">create a new contact</Link>
                </div>
                <div className="my-4">
                <Outlet/>
                </div>
                
            </div>
        )
    }
}
export default Contact