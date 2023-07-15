
import './App.css';
import { BrowserRouter as Routes, Route, Link, NavLink } from "react-router-dom";

import {Login} from './pages/Login';
import {Signup} from './pages/Signup';


function App() {
  return (
    // <div className="App">
        
    // </div>

    <Routes>
        <div className="App">
            <Route path="/login" exact component={Login} />
            <Route path="/signup" component={Signup} />
            {/* <Route component={NotFound}/> */}
        </div>
    </Routes>

  );
}

export default App;
