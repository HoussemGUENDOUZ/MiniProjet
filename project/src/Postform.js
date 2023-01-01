import React , {useState} from "react";
import posts from "./Posts";
function Postform(){
    if(localStorage.getItem("postlist") === null){
        localStorage.setItem("postlist", []);
        console.log(localStorage.getItem("postlist"));
        localStorage.setItem("postlist" , JSON.stringify(posts));
    }
    
    const [postlist , setPosts] = useState(JSON.parse(localStorage.getItem("postlist")));
    const [ addFormData , setAddFormData] = useState({
        id: "",
        subject: "",
        description:"",
        date:""
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
        const newPost ={
            id : localStorage.getItem("postlist").length+1,
            subject : addFormData.subject,
            description : addFormData.description,
            date : addFormData.date,
        };
        const newPosts =[...postlist, newPost];
        setPosts(newPosts);
        localStorage.setItem("postlist", JSON.stringify(newPosts));
      };
    return(
        <div>
            <div>
                <h2>Please fill in post information form</h2>
            </div>
            <form onSubmit={handleAddFormSubmit}>
                <div class="row my-3">
                    <div class="form-group col-md-6 my-sm-3">
                        <label for="subject" >Subject</label>
                        <input type="text" name="subject" class="form-control" id="subject" placeholder="Post subject" onChange={handleAddFormChange}/>
                    </div>
                    <div class="form-group col-md-6 my-sm-3">
                        <label for="description" >Description</label>
                        <input type="text" name="description" class="form-control" id="description" placeholder="Post description" onChange={handleAddFormChange}/>
                    </div>
                </div>
                <div class="form-group col-md-6 my-3">
                    <label for="date">Date</label>
                    <input type="date" name="date" class="form-control" id="date" onChange={handleAddFormChange}/>
                </div>
                <button type="submit" class="btn btn-primary">Sign in</button>
            </form>
        </div>
    )

}
export default Postform;