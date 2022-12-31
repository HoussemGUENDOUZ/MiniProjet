import React, {Component} from "react";
import { Link } from "react-router-dom";

class Header extends Component{
    render(){
        return(
            <header>
                <nav className="navbar navbar-expand-lg ">
                    <img className="navbar-brand img-fluid" src="./imgs/logo.png" alt="logo"/>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item active mx-4">
                                <Link className="btn btn-primary" to="/Contact">Contact</Link>
                            </li>
                            <li className="nav-item mx-4">
                                <Link className="btn btn-primary" to="/Blog">Blog</Link>
                            </li>
                            <li className="nav-item mx-4">
                                <Link className="btn btn-primary" to="/">Homepage</Link>
                            </li>
                        </ul>
    
  </div>
</nav>
            </header>
        )
    }
}
export default Header