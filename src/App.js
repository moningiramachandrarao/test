import './App.css';
import F1 from "./components/f1";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {HashRouter,Routes,Route} from "react-router-dom";
import {Home} from "./components/f2";
import {About} from "./components/f2";
import Cont  from "./components/contact";
import {Nav1} from "./components/Nav1";
function App() {
  return (
<div>
  <HashRouter>
    <Nav1/>
    <Routes>
      <Route path="/" element={<Home></Home>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Cont/>}/>

    </Routes>
  </HashRouter>
</div>
  );
}
export default App;
