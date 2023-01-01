import React , {Component} from "react";
import contacts from "./Contacts";
import Contactitem from "./Contactitem";
class Contactlist extends Component{
    constructor(){
        super();
        this.state = {
            contacts: JSON.parse(localStorage.getItem("contactlist")) === null  ? contacts : JSON.parse(localStorage.getItem("contactlist")),
        }
    }
    mapping(x){
        const List = x.map( contact => 
        <Contactitem
            key={contact.id}
            name={contact.name}
            phone={contact.phone}
            email={contact.email}
        />);
    return List;
}
render(){
    return(
        <div className="row mt-5">
            {this.mapping(this.state.contacts)}
        </div>
    )
}
}
export default Contactlist;