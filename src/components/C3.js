import {Component} from "react";
class C3 extends Component{
    componentWillUnmount(){
        console.log("Unamoumt")
    }
    render(){
        return(
            <div>
                <h1>remove</h1>
            </div>
        )
    }
}
export default C3;