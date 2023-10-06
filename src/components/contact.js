import {useState} from "react";
function Contact(){
    const [name,setName]=useState("Ramachandra Rao");
  const   handleClick = ()=>{
        setName("Rc");
     }
    return(
        <div>
            <h1>Contact</h1>
            <h1 >The owner is {name}</h1>
            <button onClick={handleClick}>Owner</button>
        </div>
    )
}
export default  Contact;