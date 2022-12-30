import React,{Component} from "react";
import { Link, Outlet } from "react-router-dom";
class Contact extends Component{
    render(){
        return(
            <div>
                <div id="recherche" className="my-4">
                <form>
                    <div className="form-row d-flex justify-content-center">
                        <div className="col-6">
                            <input type="text" className="form-control" placeholder="search contacts"/>
                        </div>
                        <div>
                            <button type="submit" className="btn btn-primary"><i className="fa-solid fa-magnifying-glass"></i></button>
                        </div>
                    </div>
                </form>
                </div>
                <div className="my-4 d-flex justify-content-center">
                    <Link to="ContactList" className="mx-3 btn btn-primary">Display contacts</Link>
                    <Link to="CreateContact" className="mx-3 btn btn-primary">create a new contact</Link>
                </div>
                <div className="my-4 d-flex justify-content-center">
                <Outlet/>
                </div>
                
            </div>
        )
    }
}
export default Contact