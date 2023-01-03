import Home from "./components/Home";
import Add from "./components/Add";
import {BrowserRouter as Router,Route,Routes} from 'react';
import Edit from "./components/Edit";
function Crud(){
    return(
        <div className="Crud">
        <Router>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/' element={<Add/>}/>
                <Route path='/' element={<Edit/>}/>
            </Routes>
        </Router>
        </div>
    );
}
export default Crud;