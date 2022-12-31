import React , {Component} from "react";
class Postform extends Component{
render(){
    return(
        <div>
            <div>
                <h2>Please fill in post information form</h2>
            </div>
            <form>
                <div class="row my-3">
                    <div class="form-group col-md-6 my-sm-3">
                        <label for="subject" >Subject</label>
                        <input type="text" name="subject" class="form-control" id="subject" placeholder="Post subject"/>
                    </div>
                    <div class="form-group col-md-6 my-sm-3">
                        <label for="description" >Description</label>
                        <input type="text" name="description" class="form-control" id="description" placeholder="Post description"/>
                    </div>
                </div>
                <div class="form-group col-md-6 my-3">
                    <label for="date">Date</label>
                    <input type="date" name="date" class="form-control" id="date"/>
                </div>
                <button type="submit" class="btn btn-primary">Sign in</button>
            </form>
        </div>
    )
}
}
export default Postform;