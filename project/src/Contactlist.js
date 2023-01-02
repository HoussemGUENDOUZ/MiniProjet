import React , {Component} from "react";
import contacts from "./Contacts";
import Contactitem from "./Contactitem";
class Contactlist extends Component{
    constructor(){
        super();
        this.state = {
            contacts: JSON.parse(localStorage.getItem("contactlist")) === null  ? contacts : JSON.parse(localStorage.getItem("contactlist")),
            search : "",
        }
    }
    setsearch = (event) =>{
        this.setState({
            search : event.target.value
        })
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
            <div className="recherche mb-5">
            <form>
                    <div className="form-row d-flex justify-content-center">
                        <div className="col-6">
                            <input type="text" className="form-control" onChange={this.setsearch} placeholder="search contacts by name ..."/>
                        </div>
                    </div>
                </form>
            </div>
            {this.mapping(this.state.contacts.filter((item)=>{
                if(this.state.search === ""){
                    return item
                }else if(item.name.toLowerCase().includes(this.state.search.toLowerCase())){
                    return item
                }
            }))}
        </div>
    )
}
}
export default Contactlist;