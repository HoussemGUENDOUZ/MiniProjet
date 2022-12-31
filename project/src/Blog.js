import React,{Component} from "react";
import { Link, Outlet } from "react-router-dom";
class Blog extends Component{
    render(){
        return(
            <div>
                <div className="my-4 d-flex justify-content-center">
                    <Link to="PostList" className="mx-3 btn btn-primary">Display posts</Link>
                    <Link to="AddPost" className="mx-3 btn btn-primary">add a new post</Link>
                </div>
                <div className="my-4 ">
                <Outlet/>
                </div>
            </div>
            
            
        )
    }
}
export default Blog