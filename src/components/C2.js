import {Component} from "react";
import C3 from "./C3";
class C2 extends Component{
    constructor(props){
        super(props);
        this.state={name:"Ram",bool:true};
        console.log("I am a constructor");
    }
   static  getDerivedStateFromProps(){
        console.log("i am getDerived");
        return null;
    }
    shouldComponentUpdate(){
        console.log("should update");
        return true;
    }
    render(){
        console.log("render method");
        return(
            <div>
                <h1>{this.state.name}</h1>
                  <button onClick={()=>{this.setState({name:"Rc"})}}>Click me</button>
            {
                (this.state.bool)?<C3/>:null
            }
            <button onClick={()=>this.setState({bool:!this.state.bool})}>remove</button>
              </div>
        )
    }
    getSnapshotBeforeUpdate(){
        console.log("snapshot");
        return null;

    }
    componentDidUpdate(){
        console.log("DId");
    }
    componentDidMount(){
        console.log("Mount");
    }
}
export default C2;