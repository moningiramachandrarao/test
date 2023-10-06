import {Link} from "react-router-dom";
export function Nav1(){
    return(
        <div>
            <nav class="navbar">
                <div class="navbar-brand"><Link to="/" class="nav-link">Ethnus</Link></div>
                <div class="nav">
                    <Link to="/" class="nav-link">Home</Link>
                    <Link to="/about" class="nav-link">About</Link>
                    <Link to="/contact" class="nav-link">Contact</Link>
                </div>
            </nav>
        </div>
    )
}