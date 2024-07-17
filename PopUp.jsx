import React,{Component} from "react";
// import SegmentPage from "./SegmentPage"
export default class PopUp extends Component{
    constructor(){
        super()
    }
    render(){
        return(
            <>
            <div className="popUpContainer">
                <div className="top-div">Saving Segment</div>
                <div className="labelbox">
                <label htmlFor="" className="label1">Enter the Name of the Segment:  </label>
                <input type="text" />
                </div>
                <div className="para-cont">To save your segment, you need to add the schemas to build the query</div>
                <div className="sphere-div">
                    <div className="spheres">
                        <div className="circle" id="c1"> </div>
                            <span className="span">-User Traits</span>
                    </div>
                    <div className="spheres" id="s1">
                        <div className="circle"></div>
                            <span className="span">-Group Traits</span>                         
                    </div>
                </div>
                <div className="bluebox"></div>
                <div className="add-schema">
                    <div className="circle-div"></div>
                    <div className="schema-div" >
                        <select id="drop-down">
                            <option className="options" value=""><b>Add Schema to Segment</b></option>
                            <option className="options" value="first name">First Name</option>
                            <option className="options" value="last name">Last Name</option>
                            <option className="options" value="gender">Gender</option>
                            <option className="options" value="age">Age</option>
                            <option className="options" value="account name">Account Name</option>
                            <option className="options" value="city">City</option>
                            <option className="options" value="state">State</option> 
                            </select>
                     </div>
                    <div className="delete-div">
                    <i class="fa-solid fa-minus" id="i"></i>
                    </div>
                </div>
                <div className="add-schema1" ><a href="">+ Add new Schema</a></div>
                <footer>
                    <div className="save"><button >Save the Segment</button></div>
                    <div className="save" id="cancel"><button>Cancel</button></div>
                </footer>
            </div>
            </>
        )
    }
}