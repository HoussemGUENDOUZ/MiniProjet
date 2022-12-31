import React , {Component} from "react";
class Contactform extends Component{
render(){
    return(
        <div>
            <div>
                <h2>Please fill in contact information form</h2>
            </div>
            <form>
                <div class="row my-3">
                    <div class="form-group col-md-6 my-sm-3">
                        <label for="name" >Name</label>
                        <input type="text" name="name" class="form-control" id="name" placeholder="Contact name"/>
                    </div>
                    <div class="form-group col-md-6 my-sm-3">
                        <label for="phone" >Phone number</label>
                        <input type="text" name="phone" class="form-control" id="phone" placeholder="Contact phone number"/>
                    </div>
                </div>
                <div class="form-group col-md-6 my-3">
                    <label for="email">Email</label>
                    <input type="email" name="email" class="form-control" id="email" placeholder="Contact email"/>
                </div>
                <button type="submit" class="btn btn-primary">Sign in</button>
            </form>
        </div>
    )
}
}
export default Contactform;