import React,{Component} from "react"
import SegmentPage from "./SegmentPage"
export default class App extends Component{
constructor(){
    super()
}
render(){
    return(
        <>
       <div className="container1">
        <div className="container2">
            <button className="but1" onClick={SegmentPage}>Save Segment</button>
        </div>
       </div>
        </>
    )
}
}