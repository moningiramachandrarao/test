import "./style.css";
function F1(){
    const myStyle={
        color:"blue",
        backgroundColor:"orange"
    }
    return(
        <div>
            <h1 style={{color:"red"}}> Rc</h1>
            <h1 style={myStyle}>Ram</h1>
            <h1 class="c1">Ramachandra Rao</h1>
            <h1 class="text-center text-danger ">Bootstrap style</h1>
        </div>
    )
}
export default F1;