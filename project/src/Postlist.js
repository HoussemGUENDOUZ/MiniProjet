import React , {Component} from "react";
import posts from "./Posts";
import Post from "./post";

class Postlist extends Component{
    constructor(){
        super();
        this.state = {
            posts: JSON.parse(localStorage.getItem("postlist")) === null  ? posts : JSON.parse(localStorage.getItem("postlist")),
        }
    }
    mapping(x){
        const List = x.map( post => 
        <Post
            key={post.id}
            subject={post.subject}
            description={post.description}
            date={post.date}
        />);
    return List;
    }
render(){
    return(
        <div className="row mt-5">
            {this.mapping(this.state.posts)}
        </div>
    )
}
}
export default Postlist;