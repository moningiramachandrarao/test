import { Component } from "react";
class C1 extends Component{
    constructor(props){
        super(props);
        this.state={name:"Ramachandra Rao",role:"",bool:true}
    }
    Click=()=>{
        this.setState({
            name:"Rc"
        })
    }
    Change=(event)=>{
        this.setState({
            role:event.target.value
        })
    }
   
    render(){
        return(
            <div>
                <h1>
                    Changing State
                </h1>
                <h1>{this.state.name}</h1>
                <button onClick={this.Click}>Click</button>
                <input placeholder="Enter Your Name" onChange={this.Change}></input>
                <p >Your role is: {this.state.role}</p>
                <button onClick={()=>{this.setState({bool:!this.state.bool})}}>Signal</button>

                {
                    (this.state.bool)?<h1 style={{color:"green"}}>Go</h1>:<h1 style={{color:"red"}}>Stop</h1>
                }
            </div>
        )
    }
}
export default C1;