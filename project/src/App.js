import React, { Component } from "react";
import {Route , Routes} from "react-router-dom"
import Contact from "./Contact";
import Header from "./Header";
import Home from "./Home";
import Blog from "./Blog";
import Contactlist from "./Contactlist";
import Contactform from "./Contactform";
import Postform from "./Postform";
import Postlist from "./Postlist";
class App extends Component{
    render(){
        return(
            <div>
            <Header/>
            <div className="container">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Contact" element={<Contact />}>
                        <Route path="ContactList" element = {<Contactlist />} />
                        <Route path="CreateContact" element = {<Contactform />} />
                    </Route>
                    <Route path="/Blog" element={<Blog />}>
                    <Route path="PostList" element = {<Postlist />} />
                    <Route path="AddPost" element = {<Postform />} />
                    </Route>
                </Routes>
            </div>
            </div>
            
        )
    }
}
export default App;