import React ,{useState} from "react";
import contacts from "./Contacts";

function Contactform(){
    if(localStorage.getItem("contactlist") === null){
        localStorage.setItem("contactlist", []);
        console.log(localStorage.getItem("contactlist"));
        localStorage.setItem("contactlist" , JSON.stringify(contacts));
    }
    
    const [contactlist , setContacts] = useState(JSON.parse(localStorage.getItem("contactlist")));
    const [ addFormData , setAddFormData] = useState({
        id: "",
        name: "",
        phone:"",
        email:""
    });
    const handleAddFormChange = (event) =>{
        event.preventDefault();
        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;
        const newFormData = {...addFormData};
        newFormData[fieldName] = fieldValue;
        setAddFormData(newFormData);
    };
    const handleAddFormSubmit = (event) =>{
        event.preventDefault();
        const newContact ={
            id : localStorage.getItem("contactlist").length+1,
            name : addFormData.name,
            phone : addFormData.phone,
            email : addFormData.email,
        };
        const newContacts =[...contactlist, newContact];
        setContacts(newContacts);
        localStorage.setItem("contactlist", JSON.stringify(newContacts));
      };
    return(
        <div>
            <div>
                <h2>Please fill in contact information form</h2>
            </div>
            <form onSubmit={handleAddFormSubmit}>
                <div className="row my-3">
                    <div className="form-group col-md-6 my-sm-3">
                        <label htmlFor="name" >Name</label>
                        <input type="text" name="name" className="form-control" id="name" placeholder="Contact name" onChange={handleAddFormChange}/>
                    </div>
                    <div className="form-group col-md-6 my-sm-3">
                        <label htmlFor="phone" >Phone number</label>
                        <input type="text" name="phone" className="form-control" id="phone" placeholder="Contact phone number" onChange={handleAddFormChange}/>
                    </div>
                </div>
                <div className="form-group col-md-6 my-3">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" className="form-control" id="email" placeholder="Contact email" onChange={handleAddFormChange}/>
                </div>
                <button type="submit" className="btn btn-primary">Sign in</button>
            </form>
        </div>
    )
}
export default Contactform;